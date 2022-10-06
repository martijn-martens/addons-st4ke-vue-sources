<template>
  <v-card flat>
    <v-card-text>
      <v-expansion-panels>
        <v-expansion-panel v-for="(variation, variationIndex) in variations" :key="variationIndex">
          <v-expansion-panel-header>{{ variation.title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>{{ $t('General') }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-text-field
                    v-model="form.GAME_SLOTS_VARIATIONS[variationIndex].title"
                    :label="$t('Title')"
                    :rules="[validationRequired]"
                    outlined
                  />

                  <v-text-field
                    v-model="form.GAME_SLOTS_VARIATIONS[variationIndex].slug"
                    :label="$t('Slug')"
                    :rules="[validationRequired]"
                    :prefix="url"
                    outlined
                  />

                  <image-upload
                    :label="$t('Banner')"
                    :form="form"
                    :default-value="bannerImagePath(variationIndex)"
                    :default-url="bannerImagePath(variationIndex)"
                    @change="uploadImage($event, variationIndex)"
                  />

                  <v-text-field
                    v-model.number="form.GAME_SLOTS_VARIATIONS[variationIndex].min_bet"
                    :label="$t('Min bet')"
                    :rules="[v => validationInteger(parseInt(v, 10)), validationPositiveNumber]"
                    outlined
                    :suffix="$t('credits')"
                  />

                  <v-text-field
                    v-model.number="form.GAME_SLOTS_VARIATIONS[variationIndex].max_bet"
                    :label="$t('Max bet')"
                    :rules="[v => validationInteger(parseInt(v, 10)), validationPositiveNumber]"
                    outlined
                    :suffix="$t('credits')"
                  />

                  <v-text-field
                    v-model.number="form.GAME_SLOTS_VARIATIONS[variationIndex].bet_change_amount"
                    :label="$t('Bet increment / decrement amount')"
                    :rules="[v => validationInteger(parseInt(v, 10)), validationPositiveNumber]"
                    outlined
                    :suffix="$t('credits')"
                  />

                  <v-text-field
                    v-model.number="form.GAME_SLOTS_VARIATIONS[variationIndex].default_bet_amount"
                    :label="$t('Default bet amount')"
                    :rules="[v => validationInteger(parseInt(v, 10)), validationPositiveNumber]"
                    outlined
                    :suffix="$t('credits')"
                  />

                  <v-text-field
                    v-model.number="form.GAME_SLOTS_VARIATIONS[variationIndex].default_lines"
                    :label="$t('Default number of lines')"
                    :rules="[validationInteger, v => validationMin(v, 1), v => validationMax(v, 20)]"
                    outlined
                  />
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>{{ $t('Symbols') }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <template v-for="(symbols, symbolIndex) in variation.symbols">
                    <div :key="symbolIndex">
                      <image-upload
                        :label="$t('Image')"
                        :form="form"
                        :default-value="symbolImagePath(variationIndex, symbolIndex)"
                        :default-url="symbolImagePath(variationIndex, symbolIndex)"
                        @change="uploadImage($event, variationIndex, symbolIndex)"
                      />

                      <v-row>
                        <v-col v-for="k in [0,1,2,3,4]" :key="k">
                          <v-text-field
                            v-model.number="form.GAME_SLOTS_VARIATIONS[variationIndex].symbols[symbolIndex].payouts[k]"
                            :label="$t('Payout') + ' x' + (k+1)"
                            :rules="[v => validationInteger(parseInt(v, 10))]"
                            class="text-center"
                            :hide-details="true"
                            outlined
                          />
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col>
                          <v-switch
                            v-model="form.GAME_SLOTS_VARIATIONS[variationIndex].symbols[symbolIndex].wild"
                            :label="$t('Wild')"
                            color="primary"
                            :false-value="false"
                            :true-value="true"
                            @change="disableActiveMagicSymbols('wild', variationIndex, symbolIndex, $event)"
                          />
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col>
                          <v-switch
                            v-model="form.GAME_SLOTS_VARIATIONS[variationIndex].symbols[symbolIndex].scatter"
                            :label="$t('Scatter')"
                            color="primary"
                            :false-value="false"
                            :true-value="true"
                            @change="disableActiveMagicSymbols('scatter', variationIndex, symbolIndex, $event)"
                          />
                        </v-col>
                      </v-row>

                      <v-row v-if="variation.symbols.length > 1">
                        <v-col>
                          <v-btn color="error" @click="removeSymbol(variationIndex, symbolIndex)">
                            {{ $t('Remove symbol') }}
                          </v-btn>
                        </v-col>
                      </v-row>

                      <v-divider v-if="symbolIndex < variation.symbols.length - 1" class="mt-5 mb-10" />
                    </div>
                  </template>
                  <v-row>
                    <v-col>
                      <v-btn color="primary" @click="addSymbol(variationIndex)">
                        {{ $t('Add symbol') }}
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>{{ $t('Reels') }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row>
                    <v-col v-for="reelIndex in [0,1,2,3,4]" :key="reelIndex">
                      <draggable :list="form.GAME_SLOTS_VARIATIONS[variationIndex].reels[reelIndex]">
                        <div v-for="(symbolIndex, k) in form.GAME_SLOTS_VARIATIONS[variationIndex].reels[reelIndex]" :key="k" class="text-center mb-3">
                          <v-badge color="rgba(255,255,255,0)">
                            <v-btn
                              slot="badge"
                              color="error"
                              icon
                              x-small
                              @click="removeSymbolFromReel(variationIndex, reelIndex, k)"
                            >
                              <v-icon>mdi-close</v-icon>
                            </v-btn>
                            <v-avatar size="64" tile>
                              <img :src="symbolImagePath(variationIndex, symbolIndex)" :alt="symbolImagePath(variationIndex, symbolIndex)">
                            </v-avatar>
                          </v-badge>
                        </div>
                      </draggable>
                      <div class="text-center mt-5">
                        <v-menu
                          offset-y
                          top
                          right
                          max-height="300"
                        >
                          <template v-slot:activator="{ on }">
                            <v-btn color="primary" small v-on="on">
                              <v-icon>mdi-plus</v-icon>
                              {{ $t('Add') }}
                            </v-btn>
                          </template>

                          <v-list>
                            <v-list-item
                              v-for="(symbol, symbolIndex) in variation.symbols"
                              :key="symbolIndex"
                              @click="addSymbolToReel(variationIndex, reelIndex, symbolIndex)"
                            >
                              <v-list-item-icon class="mr-0">
                                <v-avatar size="64" tile>
                                  <img :src="symbolImagePath(variationIndex, symbolIndex)" :alt="symbolImagePath(variationIndex, symbolIndex)">
                                </v-avatar>
                              </v-list-item-icon>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </div>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

            <v-row>
              <v-col>
                <v-btn color="primary" @click="cloneVariation(variationIndex)">
                  {{ $t('Clone') }}
                </v-btn>
                <v-btn v-if="variations.length > 1" color="error" class="ml-3" @click="removeVariation(variationIndex)">
                  {{ $t('Remove') }}
                </v-btn>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script>
import { config } from '~/plugins/config'
import { get } from '~/plugins/utils'
import Form from 'vform'
import FormMixin from '~/mixins/Form'
import ImageUpload from '~/components/ImageUpload'
import objectToFormData from '~/plugins/objectToFormData'
import draggable from 'vuedraggable'

export default {
  components: { draggable, ImageUpload },

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
      cloneVariationForm: new Form({
        variation: null
      }),
      removeVariationForm: new Form()
    }
  },

  computed: {
    variations () {
      return config('slots.variations')
    },
    url () {
      return window.location.origin + '/slots/'
    }
  },

  created () {
    this.$emit('input', { GAME_SLOTS_VARIATIONS: this.variations })
  },

  methods: {
    bannerImagePath (variationIndex) {
      return get(this.variations[variationIndex], 'banner')
    },
    symbolImagePath (variationIndex, symbolIndex) {
      return this.variations[variationIndex].symbols[symbolIndex] ? this.variations[variationIndex].symbols[symbolIndex].image : ''
    },
    async cloneVariation (variationIndex) {
      const n = this.form.GAME_SLOTS_VARIATIONS.length
      this.cloneVariationForm.variation = n

      const { data } = await this.cloneVariationForm.post(`/api/admin/settings/slots/variations/${variationIndex}`)

      if (data.success) {
        this.form.GAME_SLOTS_VARIATIONS.push({ ...this.form.GAME_SLOTS_VARIATIONS[variationIndex] })
        this.form.GAME_SLOTS_VARIATIONS[n].title += ' - cloned'
        this.form.GAME_SLOTS_VARIATIONS[n].slug += '-cloned'
      } else {
        this.$store.dispatch('message/error', { text: data.message })
      }
    },
    async removeVariation (variationIndex) {
      const { data } = await this.removeVariationForm.delete(`/api/admin/settings/slots/variations/${variationIndex}`)

      // remove variation from the settings object in any case
      this.form.GAME_SLOTS_VARIATIONS.splice(variationIndex, 1)

      if (!data.success) {
        this.$store.dispatch('message/error', { text: data.message })
      }
    },
    addSymbol (variationIndex) {
      this.form.GAME_SLOTS_VARIATIONS[variationIndex].symbols.push({
        image: null,
        wild: false,
        scatter: false,
        payouts: [0, 0, 0, 0, 0]
      })
    },
    removeSymbol (variationIndex, symbolIndex) {
      // this.form.GAME_SLOTS_VARIATIONS[variationIndex].reels.forEach((reel, i, reels) => {
      //   reels[i] = [...reel.filter(index => index !== symbolIndex)]
      // })
      this.form.GAME_SLOTS_VARIATIONS[variationIndex].symbols.splice(symbolIndex, 1)
    },
    disableActiveMagicSymbols (type, variationIndex, symbolIndex, enabled) {
      if (enabled) {
        // disable all wild / scatter symbols except current one, because only 1 wild / scatter symbol can be enabled at a time
        this.form.GAME_SLOTS_VARIATIONS[variationIndex].symbols.forEach((symbol, index, symbols) => {
          if (index !== symbolIndex) {
            symbols[index][type] = false
          }
        })
      }
    },
    addSymbolToReel (variationIndex, reelIndex, symbolIndex) {
      this.form.GAME_SLOTS_VARIATIONS[variationIndex].reels[reelIndex].push(symbolIndex)
    },
    removeSymbolFromReel (variationIndex, reelIndex, index) {
      this.form.GAME_SLOTS_VARIATIONS[variationIndex].reels[reelIndex].splice(index, 1)
    },
    async uploadImage (image, variationIndex, symbolIndex = null) {
      this.imageUploadForm.image = image

      const options = { transformRequest: [(data, headers) => objectToFormData(data)] }

      const { data } = await this.imageUploadForm.submit('post', `/api/admin/settings/slots/variations/${variationIndex}/image`, options)

      if (data.success) {
        // symbol image
        if (symbolIndex !== null) {
          this.form.GAME_SLOTS_VARIATIONS[variationIndex].symbols[symbolIndex].image = data.path
        // banner image
        } else {
          this.form.GAME_SLOTS_VARIATIONS[variationIndex].banner = data.path
        }
      } else {
        this.$store.dispatch('message/error', { text: data.message })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .v-badge {
    cursor: move; /* fallback if grab cursor is unsupported */
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
  }

  .sortable-chosen, .sortable-ghost {
    .v-badge {
      cursor: move;
    }
  }
</style>
