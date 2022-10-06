<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" lg="8">
        <v-card>
          <v-toolbar>
            <v-btn @click="$router.go(-1)" icon>
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>
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
              <template v-slot:deck="{ item: { gameable } }">
                <card v-for="card in gameable.deck.slice(0,15)" :key="`${card}`" :card="card" />
                ...
              </template>
              <template v-slot:initial_hand="{ item: { gameable } }">
                <card v-for="card in gameable.deck.slice(0,5)" :key="`${card}`" :card="card" />
              </template>
              <template v-slot:hold="{ item: { gameable } }">
                <card v-for="index in gameable.hold" :key="`${gameable.deck[index]}`" :card="gameable.deck[index]" />
              </template>
              <template v-slot:final_hand="{ item: { gameable } }">
                <card v-for="card in gameable.hand" :key="`${card}`" :card="card" />
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
        { text: this.$t('Deck'), value: 'deck' },
        { text: this.$t('Initial hand'), value: 'initial_hand' },
        { text: this.$t('Hold'), value: 'hold' },
        { text: this.$t('Final hand'), value: 'final_hand' },
        { text: this.$t('Result'), value: 'gameable.result' },
        { text: this.$t('Created at'), value: 'gameable.created_at' },
        { text: this.$t('Updated at'), value: 'gameable.updated_at' }
      ]
    }
  }
}
</script>
