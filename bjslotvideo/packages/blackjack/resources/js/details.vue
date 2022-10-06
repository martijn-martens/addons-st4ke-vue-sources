<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" lg="8">
        <v-card>
          <v-toolbar>
            <v-btn @click="$router.go(-1)" icon>
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title class="ml-2">
              {{ $t('Game {0}', [this.id]) }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <slot name="menu" />
          </v-toolbar>
          <v-card-text>
            <key-value-table
              name="game"
              :api="`/api/admin/games/${id}/details`"
              :headers="headers"
            >
              <template v-slot:gameable.deck="{ item: { gameable } }">
                <card v-for="card in gameable.deck.slice(0,15)" :key="card" :card="card" />
                ...
              </template>
              <template v-slot:gameable.dealer_hand="{ item: { gameable } }">
                <card v-for="card in gameable.dealer_hand" :key="card" :card="card" />
              </template>
              <template v-slot:gameable.dealer_score="{ item: { gameable } }">
                {{ gameable.dealer_score }}
                <template v-if="gameable.dealer_blackjack">
                  ({{ $t('Blackjack') }})
                </template>
              </template>
              <template v-slot:gameable.player_hand="{ item: { gameable } }">
                <card v-for="card in gameable.player_hand" :key="card" :card="card" />
                <template v-if="gameable.player_hand2">
                  <span class="mx-1">/</span>
                  <card v-for="card in gameable.player_hand2" :key="card" :card="card" />
                </template>
              </template>
              <template v-slot:gameable.player_score="{ item: { gameable } }">
                {{ gameable.player_score }}
                <template v-if="gameable.player_blackjack">
                  ({{ $t('Blackjack') }})
                </template>
                <template v-else-if="gameable.player_score2 > 0">
                  <span>/</span>
                  {{ gameable.player_score2 }}
                </template>
              </template>
              <template v-slot:gameable.bet="{ item: { gameable } }">
                {{ gameable.bet }}
                <template v-if="gameable.bet2">
                  <span>/</span>
                  {{ gameable.bet2 }}
                </template>
              </template>
              <template v-slot:gameable.win="{ item: { gameable } }">
                {{ gameable.win }}
                <template v-if="gameable.win2">
                  <span>/</span>
                  {{ gameable.win2 }}
                </template>
              </template>
            </key-value-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import KeyValueTable from '~/components/KeyValueTable'
import PlayingCardAbbreviation from '~/components/Games/Cards/PlayingCardAbbreviation'

export default {
  components: { KeyValueTable, Card: PlayingCardAbbreviation },

  props: ['id'],

  computed: {
    headers () {
      return [
        { text: this.$t('Deck'), value: 'gameable.deck' },
        { text: this.$t('Dealer hand'), value: 'gameable.dealer_hand' },
        { text: this.$t('Dealer score'), value: 'gameable.dealer_score' },
        { text: this.$t('Player hand'), value: 'gameable.player_hand' },
        { text: this.$t('Player score'), value: 'gameable.player_score' },
        { text: this.$t('Bet'), value: 'gameable.bet', format: 'decimal' },
        { text: this.$t('Win'), value: 'gameable.win', format: 'decimal' },
        { text: this.$t('Insurance bet'), value: 'gameable.insurance_bet', format: 'decimal' },
        { text: this.$t('Insurance win'), value: 'gameable.insurance_win', format: 'decimal' },
        { text: this.$t('Created at'), value: 'gameable.created_at' },
        { text: this.$t('Updated at'), value: 'gameable.updated_at' }
      ]
    }
  }
}
</script>
