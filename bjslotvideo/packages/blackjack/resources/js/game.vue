<template>
  <div class="d-flex flex-column fill-height py-3">
    <v-overlay :value="displayInsuranceOverlay" :opacity="0.6" class="text-center">
      <h3 class="headline my-5">{{ $t('Take insurance?') }}</h3>
      <v-btn color="primary" @click="insurance(true)" :loading="loading">
        {{ $t('Yes') }}
      </v-btn>
      <v-btn color="secondary" @click="insurance(false)" :loading="loading">
        {{ $t('No') }}
      </v-btn>
    </v-overlay>
    <hand
      :cards="dealerHandCards"
      :score="dealerHandScore"
      :result="dealerHandResult"
      :result-class="dealerHandResultClass"
      class="d-flex justify-center"
    />
    <div class="d-flex justify-space-around fill-height align-center">
      <hand
        :cards="playerHandCards"
        :score="playerHandScore"
        :result="playerHandResult"
        :result-class="playerHandResultClass"
        :inactive="activeSplitHand && activeSplitHand !== 1 && !playerHandResult"
        :bet="playerHandBet"
        :win="playerHandWin"
      />
      <hand v-show="activeSplitHand"
        :cards="playerHand2Cards"
        :score="playerHand2Score"
        :result="playerHand2Result"
        :result-class="playerHand2ResultClass"
        :inactive="activeSplitHand && activeSplitHand !== 2 && !playerHand2Result"
        :bet="playerHand2Bet"
        :win="playerHand2Win"
      />
    </div>
    <div class="d-flex justify-center flex-wrap">
      <v-btn
        v-for="a in actions"
        @click="action(a.name)"
        :disabled="!provablyFairGame.hash || a.disabled"
        :loading="a.loading"
        class="mx-1 my-2 my-lg-0"
        small
        :key="a.name"
      >
        {{ $t(a.name) }}
      </v-btn>
    </div>
    <v-form ref="form" v-model="formIsValid" @submit.prevent="play">
      <div class="d-flex justify-center flex-wrap mt-3">
        <v-text-field
          v-model.number="bet"
          dense
          flat
          :full-width="false"
          hide-details
          class="text-center my-2 my-lg-0 flex-grow-0"
          :prefix="$t('Bet')"
          :disabled="isPlayDisabled"
          :rules="[validationInteger, v => validationMin(v, minBet), v => validationMax(v, maxBet)]"
          prepend-inner-icon="mdi-minus"
          append-icon="mdi-plus"
          @click:prepend-inner="decrease"
          @click:append="increase"
        />
        <v-btn
          type="submit"
          color="primary"
          :loading="loading"
          :disabled="!formIsValid || isPlayDisabled"
          class="ml-2"
        >
          {{ $t('Play') }}
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
import { config } from '~/plugins/config'
import FormMixin from '~/mixins/Form'
import GameMixin from '~/mixins/Game'
import SoundMixin from '~/mixins/Sound'
import Hand from '~/components/Games/Cards/Hand'
import { sleep } from '~/plugins/utils'
import clickSound from 'packages/blackjack/resources/audio/click.wav'
import dealSound from 'packages/blackjack/resources/audio/deal.wav'
import swooshSound from 'packages/blackjack/resources/audio/swoosh.wav'
import flipSound from 'packages/blackjack/resources/audio/flip.wav'
import winSound from 'packages/blackjack/resources/audio/win.wav'
import loseSound from 'packages/blackjack/resources/audio/lose.wav'
import pushSound from 'packages/blackjack/resources/audio/push.wav'

export default {
  name: 'Blackjack',

  mixins: [FormMixin, GameMixin, SoundMixin],

  components: { Hand },

  data () {
    return {
      actions: [
        { name: 'double', disabled: true, loading: false }, // $t('Double')
        { name: 'stand', disabled: true, loading: false }, // $t('Stand')
        { name: 'hit', disabled: true, loading: false }, // $t('Hit')
        { name: 'split', disabled: true, loading: false } // $t('Split')
      ],
      loading: false,
      playing: false,
      bet: parseInt(config('blackjack.default_bet_amount'), 10),
      win: 0,
      displayInsuranceOverlay: false,
      dealerHandCards: [],
      dealerHandScore: -1,
      dealerHandResult: '',
      playerHandBet: 0,
      playerHandWin: 0,
      playerHandCards: ['ST', 'HA'],
      playerHandScore: 21,
      playerHandResult: this.$t('Blackjack'),
      playerHand2Bet: 0,
      playerHand2Win: 0,
      playerHand2Cards: [],
      playerHand2Score: -1,
      playerHand2Result: '',
      activeSplitHand: null
    }
  },

  computed: {
    ...mapState('auth', ['account']),
    isPlayDisabled () {
      return !this.provablyFairGame.hash || this.playing || this.bet > this.account.balance
    },
    dealerHandCount () {
      return this.dealerHandCards.length
    },
    playerHandCount () {
      return this.playerHandCards.length
    },
    playerHand2Count () {
      return this.playerHand2Cards.length
    },
    dealerHandResultClass () {
      return this.dealerHandScore === 21 && this.dealerHandCount === 2 && this.win < this.bet
        ? 'primary text--primary' : (this.dealerHandScore > 21 ? 'error' : '')
    },
    playerHandResultClass () {
      return !this.playing
        ? ((this.playerHandScore <= 21 && this.playerHandScore > this.dealerHandScore) || this.dealerHandScore > 21
          ? 'primary text--primary'
          : (this.playerHandScore === this.dealerHandScore ? 'warning' : 'error'))
        : ''
    },
    playerHand2ResultClass () {
      return !this.playing
        ? ((this.playerHand2Score <= 21 && this.playerHand2Score > this.dealerHandScore) || this.dealerHandScore > 21
          ? 'primary text--primary'
          : (this.playerHand2Score === this.dealerHandScore ? 'warning' : 'error'))
        : ''
    },
  },

  methods: {
    ...mapActions({
      updateUserAccountBalance: 'auth/updateUserAccountBalance',
      setProvablyFairGame: 'provably-fair/set'
    }),
    play () {
      this.loading = true
      this.playing = true

      this.action('play', { bet: this.bet }).then(() => { this.loading = false })
    },
    insurance (insurance) {
      this.loading = true
      this.action('insurance', { insurance }).then(() => {
        this.loading = false
        this.displayInsuranceOverlay = false
      })
    },
    // handle game actions (deal, hit, stand etc)
    async action (name, params = {}) {
      this.sound(clickSound)

      // disable all actions
      this.actions.forEach(action => {
        action.disabled = true
        action.loading = action.name === name
      })

      // update user balance
      if (['play', 'double', 'split'].indexOf(name) > -1) {
        this.updateUserAccountBalance(this.account.balance - this.bet)
      } else if (name === 'insurance' && params.insurance === true) {
        this.updateUserAccountBalance(this.account.balance - this.bet / 2)
      }

      // clear previous game results
      if (name === 'play' && this.playerHandScore > 0) {
        this.dealerHandCards = []
        this.playerHandCards = []
        this.playerHand2Cards = []

        this.sound(swooshSound)

        this.playerHandWin = 0
        this.playerHandBet = 0

        this.playerHand2Win = 0
        this.playerHand2Bet = 0

        this.dealerHandScore = -1
        this.playerHandScore = -1
        this.playerHand2Score = -1

        this.dealerHandResult = ''
        this.playerHandResult = ''
        this.playerHand2Result = ''

        if (this.activeSplitHand) {
          setTimeout(() => { this.activeSplitHand = null }, 300)
        }

        await sleep(500)
      }

      // API request params
      let endpoint = this.getRoute(name)
      let requestParams = { hash: this.provablyFairGame.hash, ...params }

      if (this.activeSplitHand && ['stand', 'hit'].indexOf(name) > -1) {
        endpoint = this.getRoute(`split-${name}`)
        requestParams.hand = this.activeSplitHand
      }

      // execute the action
      const { data: game } = await axios.post(endpoint, requestParams)

      let animationDelay = 0

      const playerHandCountReceived = game.gameable.player_hand.length
      const playerHand2CountReceived = game.gameable.player_hand2 ? game.gameable.player_hand2.length : 0

      // update bet (will be changed in case of double)
      this.playerHandBet = game.gameable.bet

      // initial draw
      if (this.dealerHandCount === 0 && this.playerHandCount === 0) {
        // 1st player card
        this.playerHandCards.push(game.gameable.player_hand[0])
        this.sound(dealSound)
        // 1st dealer card
        setTimeout(() => {
          this.dealerHandCards.push(game.gameable.dealer_hand_draw[0])
          this.sound(dealSound)
        }, animationDelay += 500)
        // 2nd player card
        setTimeout(() => {
          this.playerHandCards.push(game.gameable.player_hand[1])
          this.playerHandScore = game.gameable.player_score
          this.sound(dealSound)
        }, animationDelay += 500)
        // 2nd dealer card
        setTimeout(() => {
          this.dealerHandCards.push(game.gameable.dealer_hand_draw[1])
          this.sound(dealSound)
        }, animationDelay += 500)

        if (game.gameable.actions.indexOf('insurance') > -1) {
          setTimeout(() => { this.displayInsuranceOverlay = true }, animationDelay += 500)
        }
      // player hits a card
      } else if (this.playerHandCount >= 2 && playerHandCountReceived > this.playerHandCount && game.gameable.player_hand2 === null) {
        this.playerHandCards.push(game.gameable.player_hand[playerHandCountReceived - 1])
        this.playerHandScore = game.gameable.player_score
        this.sound(dealSound)
      // hands are split
      } else if (game.gameable.player_hand2 !== null) {
        // initial split
        if (this.playerHand2Count === 0) {
          // remove current single hand
          this.playerHandCards = []
          this.playerHandScore = -1
          this.playerHandBet = 0
          this.sound(swooshSound)

          // display 2 split hands after timeout with 1 card each
          setTimeout(() => {
            this.activeSplitHand = 1
            this.playerHandCards.push(game.gameable.player_hand[0])
            this.playerHandBet = game.gameable.bet
            this.playerHand2Cards.push(game.gameable.player_hand2[0])
            this.playerHand2Bet = game.gameable.bet2
            this.sound(dealSound)
          }, animationDelay += 500)

          // push 1 card to the first hand
          setTimeout(() => {
            this.playerHandCards.push(game.gameable.player_hand[1])
            this.playerHandScore = game.gameable.player_score
            this.sound(dealSound)
            // if first hand score equals 21 there will be a new card on the second hand
            if (this.playerHandScore === 21) {
              this.activeSplitHand = 2
              this.playerHand2Cards.push(game.gameable.player_hand2[1])
              this.playerHand2Score = game.gameable.player_score2
              this.sound(dealSound)
            }
          }, animationDelay += 500)
        // first hand hit
        } else if (playerHandCountReceived > this.playerHandCount) {
          this.playerHandCards.push(game.gameable.player_hand[playerHandCountReceived - 1])
          this.playerHandScore = game.gameable.player_score
          this.sound(dealSound)
          if (this.playerHandScore >= 21) {
            this.activeSplitHand = 2
            setTimeout(() => {
              this.playerHand2Cards.push(game.gameable.player_hand2[1])
              this.playerHand2Score = game.gameable.player_score2
              this.sound(dealSound)
            }, animationDelay += 500)
          }
        // second hand hit
        } else if (playerHand2CountReceived > this.playerHand2Count) {
          this.activeSplitHand = 2
          setTimeout(() => {
            this.playerHand2Cards.push(game.gameable.player_hand2[playerHand2CountReceived - 1])
            this.playerHand2Score = game.gameable.player_score2
            this.sound(dealSound)
          }, animationDelay += 500)
        }
      }

      if (game.is_completed) {
        this.setProvablyFairGame({ key: this.gamePackageId, game: game.pf_game })

        animationDelay += 250
        // show dealer face down card
        // direct assignment causes animation strange delay, so using splice instead
        setTimeout(() => { this.dealerHandCards.splice(1, 1, game.gameable.dealer_hand[1]) }, animationDelay)
        this.sound(flipSound)

        // if dealer needs to hit more cards
        const dealerHandCountReceived = game.gameable.dealer_hand.length
        if (dealerHandCountReceived > 2) {
          const initialHitDelay = 1000
          const delayBetweenHits = 500
          const cards = game.gameable.dealer_hand.slice(2)
          cards.forEach((card, i) => {
            animationDelay = initialHitDelay + i * delayBetweenHits
            setTimeout(() => {
              this.dealerHandCards.push(card)
              this.sound(dealSound)
            }, animationDelay)
          })
        }

        // display dealer score and result for each hand
        setTimeout(() => {
          this.win = game.gameable.win
          this.dealerHandScore = game.gameable.dealer_score
          this.dealerHandResult = game.gameable.dealer_result
          this.playerHandWin = game.gameable.win
          this.playerHandResult = game.gameable.player_result
          this.playerHand2Result = game.gameable.player_result2
          this.playerHand2Win = game.gameable.win2
          this.playing = false

          // update balance
          this.updateUserAccountBalance(game.account.balance)

          // play sound
          if (game.win > game.bet) {
            this.sound(winSound)
          } else if (game.win === game.bet) {
            this.sound(pushSound)
          } else {
            this.sound(loseSound)
          }
        }, animationDelay)
      }

      // enable action buttons
      setTimeout(() => { this.enableActionButtons(game.gameable.actions) }, animationDelay)
    },
    enableActionButtons (actions) {
      this.actions.forEach(action => {
        action.loading = false
        action.disabled = actions.indexOf(action.name) === -1
      })
    },
    decrease () {
      const bet = this.bet - this.betStep
      this.bet = Math.max(this.minBet, bet)
    },
    increase () {
      const bet = this.bet + this.betStep
      this.bet = Math.min(this.maxBet, bet)
    }
  }
}
</script>
