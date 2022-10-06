<template>
  <v-card>
    <v-toolbar>
      <v-toolbar-title>
        {{ $t('Game information') }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="$emit('close')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-tabs v-model="infoTab" centered>
          <v-tab href="#tab-about">
            {{ $t('How to play') }}
          </v-tab>
          <v-tab href="#tab-paytable">
            {{ $t('Paytable') }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-tabs-items v-model="infoTab">
      <v-tab-item value="tab-about">
        <v-card flat>
          <v-card-text class="about-text">
            <p>
              {{ $t('The objective of the game is to get a hand total of closer to 21 than the dealer without going over 21.') }}
              {{ $t('The numeral cards 2 to 10 have their face values, Jacks, Queens and Kings are valued at 10, and Aces can have a value of either 1 or 11.') }}
              {{ $t('The Ace is always valued at 11 unless that would result in the hand going over 21, in which case it is valued as 1.') }}
            </p>
            <p>
              {{ $t('After you place a bet the dealer then deals you two cards face up.') }}
              {{ $t('The dealer also gets two cards - one face up and another face down.') }}
              {{ $t('You have several choices to continue the game.') }}
            </p>
            <p>
              {{ $t('Stand') }} – {{ $t('If your first two cards are acceptable, you can stand.') }}
            </p>
            <p>
              {{ $t('Hit') }} – {{ $t('If you would like more cards to improve your hand total, the dealer will deal you more cards, one at a time, until you either bust (go over 21) or you choose to stand.') }}
            </p>
            <p>
              {{ $t('Double') }} – {{ $t('If you have a hand total that is advantageous to you but you need to take an additional card you can double your initial wager and the dealer will deal you only 1 additional card.') }}
            </p>
            <p>
              {{ $t('Split') }} – {{ $t('If you are dealt a pair (2 cards of equal value) you have the option to put out a second wager and the dealer will split the two cards so that each card will become the first card on two new hands.') }}
              {{ $t('You will be dealt a second card on each hand and can play each hand one after another.') }}
            </p>
            <p>
              {{ $t('Insurance') }} – {{ $t('Insurance is a side bet offered when the dealer has an Ace as an up-card.') }}
              {{ $t('You can put up a wager equal to half your original bet, which will get paid 2 to 1 if the dealer has a Blackjack.') }}
            </p>
            <p>
              {{ $t('If your hand has not busted, then it is time for the dealer to play their hand.') }}
              {{ $t('The dealer will first flip over their "hole card" (the face down card) and add up their 2-card hand.') }}
              {{ $t('If the dealer has a hand total of 17 or higher, they will automatically stand.') }}
              {{ $t('If the dealer has a hand total of 16 or lower, they will take additional cards until they either bust or get a hand total of 17 or higher.') }}
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item value="tab-paytable">
        <v-card flat>
          <v-card-text>
            <v-simple-table>
              <thead>
              <tr>
                <th>{{ $t('Result') }}</th>
                <th class="text-right">{{ $t('Payout') }}</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ $t('Blackjack') }}</td>
                  <td class="text-right">3:2</td>
                </tr>
                <tr>
                  <td>{{ $t('Regular win') }}</td>
                  <td class="text-right">2:1</td>
                </tr>
                <tr>
                  <td>{{ $t('Insurance win') }}</td>
                  <td class="text-right">2:1</td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      infoTab: 'tab-about'
    }
  }
}
</script>
