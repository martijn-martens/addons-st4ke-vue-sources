<template>
  <v-card flat>
    <v-card-text>
      <v-text-field
        v-model.number="form.GAME_DICE_HEADS_OR_TAILS_MIN_BET"
        :label="$t('Min bet')"
        :rules="[v => validationInteger(parseInt(v, 10)), validationPositiveNumber]"
        :error="form.errors.has('GAME_DICE_HEADS_OR_TAILS_MIN_BET')"
        :error-messages="form.errors.get('GAME_DICE_HEADS_OR_TAILS_MIN_BET')"
        outlined
        :suffix="$t('credits')"
        @keydown="clearFormErrors($event, 'GAME_DICE_HEADS_OR_TAILS_MIN_BET')"
      />

      <v-text-field
        v-model.number="form.GAME_DICE_HEADS_OR_TAILS_MAX_BET"
        :label="$t('Max bet')"
        :rules="[v => validationInteger(parseInt(v, 10)), validationPositiveNumber]"
        :error="form.errors.has('GAME_DICE_HEADS_OR_TAILS_MAX_BET')"
        :error-messages="form.errors.get('GAME_DICE_HEADS_OR_TAILS_MAX_BET')"
        outlined
        :suffix="$t('credits')"
        @keydown="clearFormErrors($event, 'GAME_DICE_HEADS_OR_TAILS_MAX_BET')"
      />

      <v-text-field
        v-model.number="form.GAME_DICE_HEADS_OR_TAILS_BET_CHANGE_AMOUNT"
        :label="$t('Bet increment / decrement amount')"
        :rules="[v => validationInteger(parseInt(v, 10)), validationPositiveNumber]"
        :error="form.errors.has('GAME_DICE_HEADS_OR_TAILS_BET_CHANGE_AMOUNT')"
        :error-messages="form.errors.get('GAME_DICE_HEADS_OR_TAILS_BET_CHANGE_AMOUNT')"
        outlined
        :suffix="$t('credits')"
        @keydown="clearFormErrors($event, 'GAME_DICE_HEADS_OR_TAILS_BET_CHANGE_AMOUNT')"
      />

      <v-text-field
        v-model.number="form.GAME_DICE_HEADS_OR_TAILS_DEFAULT_BET_AMOUNT"
        :label="$t('Default bet amount')"
        :rules="[v => validationInteger(parseInt(v, 10)), validationPositiveNumber]"
        :error="form.errors.has('GAME_DICE_HEADS_OR_TAILS_DEFAULT_BET_AMOUNT')"
        :error-messages="form.errors.get('GAME_DICE_HEADS_OR_TAILS_DEFAULT_BET_AMOUNT')"
        outlined
        :suffix="$t('credits')"
        @keydown="clearFormErrors($event, 'GAME_DICE_HEADS_OR_TAILS_DEFAULT_BET_AMOUNT')"
      />

      <v-text-field
        v-model.number="form.GAME_DICE_HEADS_OR_TAILS_HOUSE_EDGE"
        :label="$t('House edge')"
        :rules="[validationNumeric]"
        :error="form.errors.has('GAME_DICE_HEADS_OR_TAILS_HOUSE_EDGE')"
        :error-messages="form.errors.get('GAME_DICE_HEADS_OR_TAILS_HOUSE_EDGE')"
        outlined
        suffix="%"
        :hint="houseEdgeHint"
        persistent-hint
        class="mb-5"
        @keydown="clearFormErrors($event, 'GAME_DICE_HEADS_OR_TAILS_HOUSE_EDGE')"
      />

      <image-upload
        :label="$t('Heads image texture')"
        :form="form"
        :default-value="headsImageUrl"
        :default-url="headsImageUrl"
        @change="uploadImage($event, 'GAME_DICE_HEADS_OR_TAILS_IMAGES_HEADS')"
      />

      <image-upload
        :label="$t('Tails image texture')"
        :form="form"
        :default-value="tailsImageUrl"
        :default-url="tailsImageUrl"
        @change="uploadImage($event, 'GAME_DICE_HEADS_OR_TAILS_IMAGES_TAILS')"
      />

      <image-upload
        :label="$t('Edge image texture')"
        :form="form"
        :default-value="edgeImageUrl"
        :default-url="edgeImageUrl"
        @change="uploadImage($event, 'GAME_DICE_HEADS_OR_TAILS_IMAGES_EDGE')"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import Form from 'vform'
import FormMixin from '~/mixins/Form'
import { config } from '~/plugins/config'
import ImageUpload from '~/components/ImageUpload'
import objectToFormData from '~/plugins/objectToFormData'

export default {
  components: { ImageUpload },

  mixins: [FormMixin],

  props: {
    form: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      imageUploadForm: new Form({
        image: null
      }),
      variables: {
        GAME_DICE_HEADS_OR_TAILS_MIN_BET: parseInt(config('heads-or-tails.min_bet'), 10),
        GAME_DICE_HEADS_OR_TAILS_MAX_BET: parseInt(config('heads-or-tails.max_bet'), 10),
        GAME_DICE_HEADS_OR_TAILS_BET_CHANGE_AMOUNT: parseInt(config('heads-or-tails.bet_change_amount'), 10),
        GAME_DICE_HEADS_OR_TAILS_DEFAULT_BET_AMOUNT: parseInt(config('heads-or-tails.default_bet_amount'), 10),
        GAME_DICE_HEADS_OR_TAILS_HOUSE_EDGE: parseFloat(config('heads-or-tails.house_edge'))
      }
    }
  },

  computed: {
    houseEdgeHint () {
      return this.$t('This parameter affects payout calculation.')
        + ' '
        + this.$t('Payout is calculated like this: {0}.', ['2 - houseEdge / 100'])
        + ' '
        + this.$t('Hence the more house edge is the less payout a user will get.')
    },
    headsImageUrl () {
      return config('heads-or-tails.images.heads')
    },
    tailsImageUrl () {
      return config('heads-or-tails.images.tails')
    },
    edgeImageUrl () {
      return config('heads-or-tails.images.edge')
    }
  },

  created () {
    this.$emit('input', this.variables)
  },

  methods: {
    async uploadImage (image, variable) {
      this.imageUploadForm.image = image

      const options = { transformRequest: [(data, headers) => objectToFormData(data)] }

      const { data } = await this.imageUploadForm.submit('post', '/api/admin/settings/heads-or-tails/image', options)

      if (data.success) {
        this.form[variable] = data.path
      } else {
        this.$store.dispatch('message/error', { text: data.message })
      }
    }
  }
}
</script>
