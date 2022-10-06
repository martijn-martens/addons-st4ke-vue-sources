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
              <template v-slot:gameable.bet="{ item: { gameable } }">
                <template v-if="gameable.direction === -1">&lt;= {{ gameable.ref_number - 1 }}</template>
                <template v-else>&gt;= {{ gameable.ref_number }}</template>
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

export default {
  components: { KeyValueTable },

  props: ['id'],

  computed: {
    headers () {
      return [
        { text: this.$t('Bet'), value: 'gameable.bet' },
        { text: this.$t('Win chance'), value: 'gameable.win_chance', format: 'percentage' },
        { text: this.$t('Payout'), value: 'gameable.payout' },
        { text: this.$t('Roll'), value: 'gameable.roll' },
        { text: this.$t('Created at'), value: 'gameable.created_at' },
        { text: this.$t('Updated at'), value: 'gameable.updated_at' }
      ]
    }
  }
}
</script>
