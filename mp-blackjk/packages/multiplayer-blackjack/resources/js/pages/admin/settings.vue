<template>
  <v-card flat>
    <v-card-text v-if="pusherEnabled">
      <v-text-field
        v-model.number="form.GAME_MULTIPLAYER_BLACKJACK_MIN_BET"
        :label="$t('Min bet')"
        :rules="[v => validationInteger(parseInt(v, 10)), validationPositiveNumber]"
        :error="form.errors.has('GAME_MULTIPLAYER_BLACKJACK_MIN_BET')"
        :error-messages="form.errors.get('GAME_MULTIPLAYER_BLACKJACK_MIN_BET')"
        outlined
        :suffix="$t('credits')"
        :persistent-hint="true"
        :hint="$t('This setting sets the min bet for creating a new game room.')"
        @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_BLACKJACK_MIN_BET')"
      />

      <v-text-field
        v-model.number="form.GAME_MULTIPLAYER_BLACKJACK_MAX_BET"
        :label="$t('Max bet')"
        :rules="[v => validationInteger(parseInt(v, 10)), validationPositiveNumber]"
        :error="form.errors.has('GAME_MULTIPLAYER_BLACKJACK_MAX_BET')"
        :error-messages="form.errors.get('GAME_MULTIPLAYER_BLACKJACK_MAX_BET')"
        outlined
        :suffix="$t('credits')"
        :persistent-hint="true"
        :hint="$t('This setting sets the max bet for creating a new game room.')"
        @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_BLACKJACK_MAX_BET')"
      />

      <v-text-field
        v-model.number="form.GAME_MULTIPLAYER_BLACKJACK_FEE"
        :label="$t('Game house fee')"
        :rules="[validationNumeric]"
        :error="form.errors.has('GAME_MULTIPLAYER_BLACKJACK_FEE')"
        :error-messages="form.errors.get('GAME_MULTIPLAYER_BLACKJACK_FEE')"
        outlined
        suffix="%"
        :persistent-hint="true"
        :hint="$t('Percentage of all players bets')"
        class="mb-5"
        @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_BLACKJACK_FEE')"
      />

      <v-text-field
        v-model.number="form.GAME_MULTIPLAYER_BLACKJACK_ACTION_DURATION"
        :label="$t('Player turn duration')"
        :rules="[v => validationInteger(parseInt(v, 10)), validationPositiveNumber]"
        :error="form.errors.has('GAME_MULTIPLAYER_BLACKJACK_ACTION_DURATION')"
        :error-messages="form.errors.get('GAME_MULTIPLAYER_BLACKJACK_ACTION_DURATION')"
        outlined
        :suffix="$t('seconds')"
        @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_BLACKJACK_ACTION_DURATION')"
      />

      <v-text-field
        v-model.number="form.GAME_MULTIPLAYER_BLACKJACK_FINAL_HIT_THRESHOLD"
        :label="$t('Last hit threshold')"
        :rules="[v => validationInteger(parseInt(v, 10)), validationPositiveNumber]"
        :error="form.errors.has('GAME_MULTIPLAYER_BLACKJACK_FINAL_HIT_THRESHOLD')"
        :error-messages="form.errors.get('GAME_MULTIPLAYER_BLACKJACK_FINAL_HIT_THRESHOLD')"
        outlined
        :suffix="$t('seconds')"
        :persistent-hint="true"
        :hint="$t('Hit will cause immediate stand when less than {0} seconds left.', [form.GAME_MULTIPLAYER_BLACKJACK_FINAL_HIT_THRESHOLD])"
        class="mb-5"
        @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_BLACKJACK_FINAL_HIT_THRESHOLD')"
      />

      <v-text-field
        v-model.number="form.GAME_MULTIPLAYER_BLACKJACK_CANCEL_THRESHOLD"
        :label="$t('Cancel threshold')"
        :rules="[v => validationInteger(parseInt(v, 10)), validationPositiveNumber]"
        :error="form.errors.has('GAME_MULTIPLAYER_BLACKJACK_CANCEL_THRESHOLD')"
        :error-messages="form.errors.get('GAME_MULTIPLAYER_BLACKJACK_CANCEL_THRESHOLD')"
        outlined
        :suffix="$t('seconds')"
        :persistent-hint="true"
        :hint="$t('If a player started a game, but other players left the room, the player has a chance to cancel the game after {0} seconds.', [form.GAME_MULTIPLAYER_BLACKJACK_CANCEL_THRESHOLD])"
        @keydown="clearFormErrors($event, 'GAME_MULTIPLAYER_BLACKJACK_CANCEL_THRESHOLD')"
      />
    </v-card-text>
    <v-card-text v-else>
      <v-alert
        dense
        outlined
        text
        color="error"
      >
        {{ $t('Please fill Pusher settings first under Services tab.') }}
      </v-alert>
    </v-card-text>
  </v-card>
</template>

<script>
import { config } from '~/plugins/config'
import FormMixin from '~/mixins/Form'

export default {
  mixins: [FormMixin],

  props: {
    form: {
      type: Object,
      required: true
    }
  },

  computed: {
    pusherEnabled () {
      return this.form.PUSHER_APP_ID && this.form.PUSHER_APP_KEY && this.form.PUSHER_APP_SECRET && this.form.PUSHER_APP_CLUSTER
    }
  },

  data () {
    return {
      variables: {
        GAME_MULTIPLAYER_BLACKJACK_MIN_BET: parseFloat(config('multiplayer-blackjack.min_bet')),
        GAME_MULTIPLAYER_BLACKJACK_MAX_BET: parseFloat(config('multiplayer-blackjack.max_bet')),
        GAME_MULTIPLAYER_BLACKJACK_FEE: parseFloat(config('multiplayer-blackjack.fee')),
        GAME_MULTIPLAYER_BLACKJACK_ACTION_DURATION: parseInt(config('multiplayer-blackjack.action_duration'), 10),
        GAME_MULTIPLAYER_BLACKJACK_FINAL_HIT_THRESHOLD: parseInt(config('multiplayer-blackjack.final_hit_threshold'), 10),
        GAME_MULTIPLAYER_BLACKJACK_CANCEL_THRESHOLD: parseInt(config('multiplayer-blackjack.cancel_threshold'), 10)
      }
    }
  },

  created () {
    this.$emit('input', this.variables)
  }
}
</script>
