<template>
  <div class="d-flex flex-column fill-height py-3">
    <div class="d-flex justify-center fill-height align-center">
      <hand
        :cards="hand"
        :result="result"
        :result-class="resultClass"
        :bet="playerBet"
        :win="playerWin"
        :clickable="true"
        @playing-card-click="holdUnholdCard"
      >
        <template v-for="i in [0,1,2,3,4]" v-slot:[`top.${i}`]>
          <div v-show="hold.indexOf(i)>-1" :key="i" class="hold">
            {{ $t('hold') }}
          </div>
        </template>
      </hand>
    </div>
    <div class="d-flex justify-center flex-wrap">
      <v-btn
        :disabled="isDrawDisabled"
        :loading="loading"
        class="mx-1 my-2 my-lg-0"
        small
        @click="draw"
      >
        {{ $t('Hold & draw') }}
      </v-btn>
    </div>
    <v-form ref="form" v-model="formIsValid" @submit.prevent="play">
      <div class="d-flex justify-center flex-wrap mt-3">
        <v-text-field
          v-model.number="bet"
          dense
          flat
          :full-width="false"
          :hide-details="true"
          class="text-center my-2 my-lg-0 flex-grow-0"
          :prefix="$t('Bet')"
          :disabled="playing"
          :rules="[validationInteger, v => validationMin(v, minBet), v => validationMax(v, Math.min(account.balance, maxBet))]"
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
import clickSound from 'packages/video-poker/resources/audio/click.wav'
import dealSound from 'packages/video-poker/resources/audio/deal.wav'
import swooshSound from 'packages/video-poker/resources/audio/swoosh.wav'
import flipSound from 'packages/video-poker/resources/audio/flip.wav'
import winSound from 'packages/video-poker/resources/audio/win.wav'
import loseSound from 'packages/video-poker/resources/audio/lose.wav'

export default {
  name: 'VideoPoker',

  components: { Hand },

  mixins: [FormMixin, GameMixin, SoundMixin],

  data () {
    return {
      loading: false,
      playing: false,
      isDrawDisabled: true,
      bet: parseInt(config('video-poker.default_bet_amount'), 10),
      playerBet: 0,
      playerWin: 0,
      hand: ['H8', 'S9', 'DT', 'CJ', 'HQ'],
      hold: [],
      result: this.$t('Straight flush')
    }
  },

  computed: {
    ...mapState('auth', ['account']),
    isPlayDisabled () {
      return !this.provablyFairGame.hash || this.playing || this.bet > this.account.balance
    },
    resultClass () {
      return !this.playing
        ? this.playerWin > 0
          ? 'primary text--primary'
          : 'error'
        : ''
    }
  },

  methods: {
    ...mapActions({
      updateUserAccountBalance: 'auth/updateUserAccountBalance',
      setProvablyFairGame: 'provably-fair/set'
    }),
    async play () {
      this.sound(clickSound)
      this.loading = true
      this.playing = true

      this.updateUserAccountBalance(this.account.balance - this.bet)

      // clear previous game results
      this.hand = []
      this.hold = []

      this.sound(swooshSound)

      this.playerBet = 0
      this.playerWin = 0
      this.result = ''

      await sleep(500)

      this.action('play', { bet: this.bet }).then(() => { this.loading = false })
    },
    holdUnholdCard (payload) {
      if (!this.isDrawDisabled) {
        this.sound(clickSound)
        const holdIndex = this.hold.indexOf(payload.index)
        // card is already held
        if (holdIndex > -1) {
          this.hold.splice(holdIndex, 1)
        // card is not yet held
        } else {
          this.hold.push(payload.index)
        }
      }
    },
    async draw () {
      this.sound(clickSound)
      this.loading = true
      this.isDrawDisabled = true

      this.hand.forEach((card, i) => {
        if (this.hold.indexOf(i) === -1) {
          this.hand.splice(i, 1, null)
        }
      })

      await sleep(500)

      this.action('draw', { hold: this.hold }).then(() => { this.loading = false })
    },
    // handle game actions (deal, hit, stand etc)
    async action (name, params = {}) {
      // API request params
      const endpoint = this.getRoute(name)
      const requestParams = { hash: this.provablyFairGame.hash, ...params }

      // execute the action
      const { data: game } = await axios.post(endpoint, requestParams)

      let animationDelay = 0

      // initial draw
      if (name === 'play') {
        setTimeout(() => { this.playerBet = game.bet }, 500)

        game.gameable.hand.forEach(card => {
          setTimeout(() => {
            this.hand.push(card)
            this.sound(dealSound)
          }, animationDelay += 500)
        })

        setTimeout(() => { this.isDrawDisabled = false }, animationDelay += 500)
      }

      if (game.is_completed) {
        this.setProvablyFairGame({ key: this.gamePackageId, game: game.pf_game })

        animationDelay += 250
        // flip replaced player cards
        // direct assignment causes animation strange delay, so using splice instead
        setTimeout(() => {
          this.hand.forEach((card, i) => {
            if (card === null) {
              this.hand.splice(i, 1, game.gameable.hand[i])
            }
          })

          this.sound(flipSound)
        }, animationDelay)

        // display result
        setTimeout(() => {
          this.playerWin = game.win
          this.result = game.gameable.result
          this.playing = false

          // update balance
          this.updateUserAccountBalance(game.account.balance)

          // play sound
          if (this.playerWin > 0) {
            this.sound(winSound)
          } else {
            this.sound(loseSound)
          }
        }, animationDelay + 500)
      }
    },
    decrease () {
      this.sound(clickSound)
      const bet = this.bet - this.betStep
      this.bet = Math.max(this.minBet, bet)
    },
    increase () {
      this.sound(clickSound)
      const bet = this.bet + this.betStep
      this.bet = Math.min(this.maxBet, bet)
    }
  }
}
</script>
<style lang="scss" scoped>
.hold {
  position: absolute;
  width: 100%;
  text-align: center;
  top: -1.6em;
  font-size: 0.9em;
  font-weight: 300;
}
</style>
