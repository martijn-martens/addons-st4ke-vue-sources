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
              <template v-slot:gameable.variation="{ item: { gameable: { variation } } }">
                {{ config('slots.variations')[variation] ? config('slots.variations')[variation].title : $t('Slots') }}
              </template>
              <template v-slot:gameable.win_titles="{ item: { gameable } }">
                <v-badge
                  v-for="(amount, type) in gameable.win_titles"
                  :key="type"
                  color="primary"
                  :content="amount"
                  :value="true"
                  inline
                  class="ml-2"
                >
                  {{ type }}
                </v-badge>
              </template>
            </key-value-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { config } from '~/plugins/config'
import KeyValueTable from '~/components/KeyValueTable'

export default {
  components: { KeyValueTable },

  props: ['id'],

  computed: {
    headers () {
      return [
        { text: this.$t('Variation'), value: 'gameable.variation' },
        { text: this.$t('Lines'), value: 'gameable.lines' },
        { text: this.$t('Wins'), value: 'gameable.win_titles' },
        { text: this.$t('Created at'), value: 'gameable.created_at' },
        { text: this.$t('Updated at'), value: 'gameable.updated_at' }
      ]
    }
  },

  methods: {
    config
  }
}
</script>
