(self.webpackChunk=self.webpackChunk||[]).push([[7243],{28326:(e,E,r)=>{"use strict";r.r(E),r.d(E,{default:()=>f});var _=r(15566),t=r(36395);const T={components:{FileUpload:r(78132).Z},mixins:[t.Z],props:{form:{type:Object,required:!0}},data:function(){return{variables:{GAME_MULTIPLAYER_ROULETTE_CATEGORIES:(0,_.v)("multiplayer-roulette.categories"),GAME_MULTIPLAYER_ROULETTE_BANNER:(0,_.v)("multiplayer-roulette.banner"),GAME_MULTIPLAYER_ROULETTE_BACKGROUND:(0,_.v)("multiplayer-roulette.background"),GAME_MULTIPLAYER_ROULETTE_MIN_BET:parseInt((0,_.v)("multiplayer-roulette.min_bet"),10),GAME_MULTIPLAYER_ROULETTE_MAX_BET:parseInt((0,_.v)("multiplayer-roulette.max_bet"),10),GAME_MULTIPLAYER_ROULETTE_BET_CHANGE_AMOUNT:parseInt((0,_.v)("multiplayer-roulette.bet_change_amount"),10),GAME_MULTIPLAYER_ROULETTE_DEFAULT_BET_AMOUNT:parseInt((0,_.v)("multiplayer-roulette.default_bet_amount"),10),GAME_MULTIPLAYER_ROULETTE_DURATION:parseInt((0,_.v)("multiplayer-roulette.duration"),10),GAME_MULTIPLAYER_ROULETTE_INTERVAL:parseInt((0,_.v)("multiplayer-roulette.interval"),10),GAME_MULTIPLAYER_ROULETTE_PAYTABLE:(0,_.v)("multiplayer-roulette.paytable")}}},computed:{pusherEnabled:function(){return this.form.PUSHER_APP_ID&&this.form.PUSHER_APP_KEY&&this.form.PUSHER_APP_SECRET&&this.form.PUSHER_APP_CLUSTER}},created:function(){this.$emit("input",this.variables)}};var o=r(51900),L=r(43453),a=r.n(L),n=r(88465),A=r(43776),l=r(5255),s=r(1990),i=r(44557),U=r(94694),R=r(86131),M=r(64804),u=r(54933),m=(0,o.Z)(T,(function(){var e=this,E=e.$createElement,r=e._self._c||E;return r("v-card",{attrs:{flat:""}},[e.pusherEnabled?r("v-card-text",[r("v-expansion-panels",[r("v-expansion-panel",[r("v-expansion-panel-header",[e._v(e._s(e.$t("General")))]),e._v(" "),r("v-expansion-panel-content",[r("v-combobox",{attrs:{label:e.$t("Categories"),multiple:"",outlined:"",chips:"","small-chips":"","deletable-chips":"","hide-selected":"","no-filter":""},model:{value:e.form.GAME_MULTIPLAYER_ROULETTE_CATEGORIES,callback:function(E){e.$set(e.form,"GAME_MULTIPLAYER_ROULETTE_CATEGORIES",E)},expression:"form.GAME_MULTIPLAYER_ROULETTE_CATEGORIES"}}),e._v(" "),r("file-upload",{attrs:{label:e.$t("Banner"),name:"banner",folder:"games/multiplayer-roulette"},model:{value:e.form.GAME_MULTIPLAYER_ROULETTE_BANNER,callback:function(E){e.$set(e.form,"GAME_MULTIPLAYER_ROULETTE_BANNER",E)},expression:"form.GAME_MULTIPLAYER_ROULETTE_BANNER"}}),e._v(" "),r("file-upload",{attrs:{label:e.$t("Background image"),name:"background",folder:"games/multiplayer-roulette",clearable:!0},model:{value:e.form.GAME_MULTIPLAYER_ROULETTE_BACKGROUND,callback:function(E){e.$set(e.form,"GAME_MULTIPLAYER_ROULETTE_BACKGROUND",E)},expression:"form.GAME_MULTIPLAYER_ROULETTE_BACKGROUND"}}),e._v(" "),r("v-text-field",{attrs:{label:e.$t("Min bet"),rules:[e.validationInteger,e.validationPositiveNumber],error:e.form.errors.has("GAME_MULTIPLAYER_ROULETTE_MIN_BET"),"error-messages":e.form.errors.get("GAME_MULTIPLAYER_ROULETTE_MIN_BET"),outlined:"",suffix:e.$t("credits")},on:{keydown:function(E){return e.clearFormErrors(E,"GAME_MULTIPLAYER_ROULETTE_MIN_BET")}},model:{value:e.form.GAME_MULTIPLAYER_ROULETTE_MIN_BET,callback:function(E){e.$set(e.form,"GAME_MULTIPLAYER_ROULETTE_MIN_BET",e._n(E))},expression:"form.GAME_MULTIPLAYER_ROULETTE_MIN_BET"}}),e._v(" "),r("v-text-field",{attrs:{label:e.$t("Max bet"),rules:[e.validationInteger,e.validationPositiveNumber],error:e.form.errors.has("GAME_MULTIPLAYER_ROULETTE_MAX_BET"),"error-messages":e.form.errors.get("GAME_MULTIPLAYER_ROULETTE_MAX_BET"),outlined:"",suffix:e.$t("credits")},on:{keydown:function(E){return e.clearFormErrors(E,"GAME_MULTIPLAYER_ROULETTE_MAX_BET")}},model:{value:e.form.GAME_MULTIPLAYER_ROULETTE_MAX_BET,callback:function(E){e.$set(e.form,"GAME_MULTIPLAYER_ROULETTE_MAX_BET",e._n(E))},expression:"form.GAME_MULTIPLAYER_ROULETTE_MAX_BET"}}),e._v(" "),r("v-text-field",{attrs:{label:e.$t("Bet increment / decrement amount"),rules:[e.validationInteger,e.validationPositiveNumber],error:e.form.errors.has("GAME_MULTIPLAYER_ROULETTE_BET_CHANGE_AMOUNT"),"error-messages":e.form.errors.get("GAME_MULTIPLAYER_ROULETTE_BET_CHANGE_AMOUNT"),outlined:"",suffix:e.$t("credits")},on:{keydown:function(E){return e.clearFormErrors(E,"GAME_MULTIPLAYER_ROULETTE_BET_CHANGE_AMOUNT")}},model:{value:e.form.GAME_MULTIPLAYER_ROULETTE_BET_CHANGE_AMOUNT,callback:function(E){e.$set(e.form,"GAME_MULTIPLAYER_ROULETTE_BET_CHANGE_AMOUNT",e._n(E))},expression:"form.GAME_MULTIPLAYER_ROULETTE_BET_CHANGE_AMOUNT"}}),e._v(" "),r("v-text-field",{attrs:{label:e.$t("Default bet amount"),rules:[e.validationInteger,e.validationPositiveNumber],error:e.form.errors.has("GAME_MULTIPLAYER_ROULETTE_DEFAULT_BET_AMOUNT"),"error-messages":e.form.errors.get("GAME_MULTIPLAYER_ROULETTE_DEFAULT_BET_AMOUNT"),outlined:"",suffix:e.$t("credits")},on:{keydown:function(E){return e.clearFormErrors(E,"GAME_MULTIPLAYER_ROULETTE_DEFAULT_BET_AMOUNT")}},model:{value:e.form.GAME_MULTIPLAYER_ROULETTE_DEFAULT_BET_AMOUNT,callback:function(E){e.$set(e.form,"GAME_MULTIPLAYER_ROULETTE_DEFAULT_BET_AMOUNT",e._n(E))},expression:"form.GAME_MULTIPLAYER_ROULETTE_DEFAULT_BET_AMOUNT"}}),e._v(" "),r("v-text-field",{attrs:{label:e.$t("Game duration"),rules:[e.validationInteger,e.validationPositiveNumber],error:e.form.errors.has("GAME_MULTIPLAYER_ROULETTE_DURATION"),"error-messages":e.form.errors.get("GAME_MULTIPLAYER_ROULETTE_DURATION"),outlined:"",suffix:e.$t("seconds")},on:{keydown:function(E){return e.clearFormErrors(E,"GAME_MULTIPLAYER_ROULETTE_DURATION")}},model:{value:e.form.GAME_MULTIPLAYER_ROULETTE_DURATION,callback:function(E){e.$set(e.form,"GAME_MULTIPLAYER_ROULETTE_DURATION",e._n(E))},expression:"form.GAME_MULTIPLAYER_ROULETTE_DURATION"}}),e._v(" "),r("v-text-field",{attrs:{label:e.$t("Delay before next game starts"),rules:[e.validationInteger,e.validationPositiveNumber],error:e.form.errors.has("GAME_MULTIPLAYER_ROULETTE_INTERVAL"),"error-messages":e.form.errors.get("GAME_MULTIPLAYER_ROULETTE_INTERVAL"),outlined:"",suffix:e.$t("seconds")},on:{keydown:function(E){return e.clearFormErrors(E,"GAME_MULTIPLAYER_ROULETTE_INTERVAL")}},model:{value:e.form.GAME_MULTIPLAYER_ROULETTE_INTERVAL,callback:function(E){e.$set(e.form,"GAME_MULTIPLAYER_ROULETTE_INTERVAL",e._n(E))},expression:"form.GAME_MULTIPLAYER_ROULETTE_INTERVAL"}})],1)],1),e._v(" "),r("v-expansion-panel",[r("v-expansion-panel-header",[e._v(e._s(e.$t("Paytable")))]),e._v(" "),r("v-expansion-panel-content",[r("v-text-field",{attrs:{label:e.$t("Red"),rules:[e.validationPositiveNumber],outlined:"",prefix:e.$t("Bet")+" x "},on:{keydown:function(E){return e.clearFormErrors(E,"GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.red")}},model:{value:e.form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.red,callback:function(E){e.$set(e.form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE,"red",e._n(E))},expression:"form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.red"}}),e._v(" "),r("v-text-field",{attrs:{label:e.$t("Black"),rules:[e.validationPositiveNumber],outlined:"",prefix:e.$t("Bet")+" x "},on:{keydown:function(E){return e.clearFormErrors(E,"GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.black")}},model:{value:e.form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.black,callback:function(E){e.$set(e.form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE,"black",e._n(E))},expression:"form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.black"}}),e._v(" "),r("v-text-field",{attrs:{label:e.$t("Zero"),rules:[e.validationPositiveNumber],outlined:"",prefix:e.$t("Bet")+" x "},on:{keydown:function(E){return e.clearFormErrors(E,"GAME_MULTIPLAYER_ROULETTE_PAYOUT_PLAYER.zero")}},model:{value:e.form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.zero,callback:function(E){e.$set(e.form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE,"zero",e._n(E))},expression:"form.GAME_MULTIPLAYER_ROULETTE_PAYTABLE.zero"}})],1)],1)],1)],1):r("v-card-text",[r("v-alert",{attrs:{dense:"",outlined:"",text:"",color:"error"}},[e._v("\n      "+e._s(e.$t("Please fill Pusher settings first under Services tab."))+"\n    ")])],1)],1)}),[],!1,null,null,null);const f=m.exports;a()(m,{VAlert:n.Z,VCard:A.Z,VCardText:l.ZB,VCombobox:s.Z,VExpansionPanel:i.Z,VExpansionPanelContent:U.Z,VExpansionPanelHeader:R.Z,VExpansionPanels:M.Z,VTextField:u.Z})}}]);
//# sourceMappingURL=multiplayer-roulette-resources-js-pages-admin-settings.js.map