(self.webpackChunk=self.webpackChunk||[]).push([[7724],{56235:(n,e,t)=>{"use strict";t.d(e,{B:()=>a});var r=t(77690);function a(n){return r.Z.getters["route/get"](n)}},54303:(n,e,t)=>{"use strict";t.d(e,{Z:()=>o});var r=t(94015),a=t.n(r),i=t(23645),s=t.n(i)()(a());s.push([n.id,".chart[data-v-18881e52]{width:100%;height:100%}#prediction-info-block[data-v-18881e52]{z-index:1;position:absolute;top:10px;left:50%;transform:translateX(-50%)}#prediction-info-block[data-v-18881e52]:before{opacity:.4!important}","",{version:3,sources:["webpack://./packages/crypto-prediction/resources/js/pages/game.vue"],names:[],mappings:"AAyWA,wBACE,UAAA,CACA,WAxWF,CA2WA,wCACE,SAAA,CACA,iBAAA,CACA,QAAA,CACA,QAAA,CACA,0BAxWF,CA2WI,+CACE,oBAzWN",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.chart {\r\n  width: 100%;\r\n  height: 100%\r\n}\r\n\r\n#prediction-info-block {\r\n  z-index: 1;\r\n  position:absolute;\r\n  top: 10px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n\r\n  &::v-deep {\r\n    &:before {\r\n      opacity: 0.4 !important;\r\n    }\r\n  }\r\n}\r\n"],sourceRoot:""}]);const o=s},40269:(n,e,t)=>{"use strict";t.d(e,{Z:()=>o});var r=t(94015),a=t.n(r),i=t(23645),s=t.n(i)()(a());s.push([n.id,".loader[data-v-0ccd884f]{width:150px}","",{version:3,sources:["webpack://./resources/js/components/BlockPreloader.vue"],names:[],mappings:"AAeA,yBACE,WAdF",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.loader {\n  width: 150px;\n}\n"],sourceRoot:""}]);const o=s},81197:(n,e,t)=>{"use strict";t.d(e,{Z:()=>o});var r=t(94015),a=t.n(r),i=t(23645),s=t.n(i)()(a());s.push([n.id,".scale-enter[data-v-3c77825a],.scale-leave-to[data-v-3c77825a]{transform:scale(0);opacity:1}.scale-enter-active[data-v-3c77825a],.scale-leave-active[data-v-3c77825a]{transition:all .3s}","",{version:3,sources:["webpack://./resources/js/components/Predictions/PredictionControls.vue"],names:[],mappings:"AAwMA,+DACE,kBAAA,CACA,SAvMF,CA0MA,0EACE,kBAvMF",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.scale-enter, .scale-leave-to {\r\n  transform: scale(0);\r\n  opacity: 1;\r\n}\r\n\r\n.scale-enter-active, .scale-leave-active {\r\n  transition: all 0.3s;\r\n}\r\n"],sourceRoot:""}]);const o=s},30632:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});const r=t.p+"audio/common/click.wav"},73752:(n,e,t)=>{"use strict";t.d(e,{Z:()=>u});var r=t(87757),a=t.n(r),i=t(56235),s=t(9669),o=t.n(s);function c(n,e,t,r,a,i,s){try{var o=n[i](s),c=o.value}catch(n){return void t(n)}o.done?e(c):Promise.resolve(c).then(r,a)}function l(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function s(n){c(i,r,a,s,o,"next",n)}function o(n){c(i,r,a,s,o,"throw",n)}s(void 0)}))}}const u={props:{type:{type:String,required:!0},label:{type:String,required:!1,default:""},defaultAssetName:{type:String,required:!0},disabled:{type:Boolean,required:!1,default:!1},dense:{type:Boolean,required:!1,default:!1}},data:function(){return{value:{},items:[],searchInProgress:!1,input:null}},watch:{input:function(n,e){var t=this;return l(a().mark((function r(){var s,c;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(null!==n&&n!==t.value.name&&!t.searchInProgress){r.next=2;break}return r.abrupt("return",!1);case 2:return t.searchInProgress=!0,r.next=5,o().post((0,i.B)("assets.search"),{type:t.type,search:n,exact:null===e});case 5:s=r.sent,c=s.data,t.items=c,null===e&&t.items.length&&(t.value=t.items[0],t.$emit("change",t.value)),t.searchInProgress=!1;case 10:case"end":return r.stop()}}),r)})))()}},created:function(){var n=this;return l(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.input=n.defaultAssetName;case 1:case"end":return e.stop()}}),e)})))()}}},333:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r});const r={props:{endDate:{type:Number,required:!0}},data:function(){return{timer:null,interval:null}},watch:{endDate:function(n){n&&(this.destroy(),this.create())}},created:function(){this.create()},beforeDestroy:function(){this.destroy()},methods:{create:function(){this.tick(),this.interval=setInterval(this.tick,1e3)},destroy:function(){clearInterval(this.interval)},tick:function(){var n=Math.max(0,Math.round(this.endDate-Date.now()/1e3)),e=Math.floor(n%60),t=Math.floor(n/60%60),r=Math.floor(n/3600%24),a=Math.floor(n/86400);e=e<10?"0"+e:e,t=t<10?"0"+t:t,r=r<10?"0"+r:r,this.timer=(a>0?"".concat(a).concat(this.$t("d")," : "):"")+(r>0||a>0?"".concat(r).concat(this.$t("h")," : "):"")+"".concat(t).concat(this.$t("m")," : ").concat(e).concat(this.$t("s")),0===n&&this.interval&&clearInterval(this.interval)}}}},4370:(n,e,t)=>{"use strict";t.d(e,{Z:()=>d});var r=t(20629),a=t(36395),i=t(84716),s=t(47588),o=t(30632);function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){u(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}const d={components:{AssetSearchAutocomplete:t(19017).Z},mixins:[a.Z,i.Z,s.Z],props:{loading:{type:Boolean,required:!0},inputDisabled:{type:Boolean,required:!1,default:!1},searchDisabled:{type:Boolean,required:!1,default:!1}},data:function(){return{bet:null,duration:null,asset:{}}},computed:l(l({},(0,r.rn)("auth",["account"])),{},{defaultAssetName:function(){return this.config.default_asset_name},defaultBet:function(){return parseInt(this.config.default_bet_amount,10)},minBet:function(){return parseInt(this.config.min_bet,10)},maxBet:function(){return parseInt(this.config.max_bet,10)},betStep:function(){return parseInt(this.config.bet_change_amount,10)},balanceIsSufficient:function(){return this.account.balance>=this.bet},durations:function(){return this.config.durations}}),created:function(){var n=this;this.$nextTick((function(){n.bet=n.defaultBet,n.duration=n.durations[0].value}))},methods:{handleAssetChange:function(n){this.asset=l({},n),this.$emit("asset",n)},play:function(n){this.sound(o.Z),this.$emit("play",{asset:this.asset,bet:this.bet,direction:n,duration:this.duration})},decreaseBet:function(){this.sound(o.Z);var n=this.bet-this.betStep;this.bet=Math.max(this.minBet,n)},increaseBet:function(){this.sound(o.Z);var n=this.bet+this.betStep;this.bet=Math.min(this.maxBet,n)},setBet:function(n){var e=this.autoPlay.maxBet>0?[n,this.maxBet,this.autoPlay.maxBet]:[n,this.maxBet],t=this.autoPlay.minBet>0?[this.minBet,this.autoPlay.minBet]:[this.minBet];this.bet=Math.max.apply(Math,[Math.min.apply(Math,e)].concat(t))}}}},84096:(n,e,t)=>{"use strict";t.d(e,{Z:()=>i});var r=t(15566),a=t(56235);const i={computed:{packageId:function(){return this.$route.params.packageId},config:function(){return(0,r.v)(this.packageId)}},methods:{getRoute:function(n){return(0,a.B)("markets.".concat(this.packageId,".").concat(n))}}}},28540:(n,e,t)=>{"use strict";var r=t(93379),a=t.n(r),i=t(40269),s={insert:"head",singleton:!1};a()(i.Z,s);i.Z.locals},4030:(n,e,t)=>{"use strict";var r=t(93379),a=t.n(r),i=t(81197),s={insert:"head",singleton:!1};a()(i.Z,s);i.Z.locals},57693:(n,e,t)=>{"use strict";t.d(e,{s:()=>r,x:()=>a});var r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-autocomplete",{attrs:{label:n.label||n.$t("Asset"),items:n.items,loading:n.searchInProgress,"search-input":n.input,disabled:n.disabled,color:"primary","hide-selected":"","hide-no-data":"","item-text":"name",placeholder:n.$t("Search")+"...","return-object":"","hide-details":n.dense,dense:n.dense,outlined:""},on:{"update:searchInput":function(e){n.input=e},"update:search-input":function(e){n.input=e},change:function(e){return n.$emit("change",n.value)}},scopedSlots:n._u([{key:"item",fn:function(e){var r=e.item;return[t("v-list-item-avatar",{staticClass:"text-h5 font-weight-light justify-center",attrs:{color:"primary"}},[n._v("\n      "+n._s(r.name.charAt(0).toUpperCase())+"\n    ")]),n._v(" "),t("v-list-item-content",[t("v-list-item-title",{domProps:{textContent:n._s(r.name)}}),n._v(" "),t("v-list-item-subtitle",{domProps:{textContent:n._s(r.symbol)}})],1)]}}]),model:{value:n.value,callback:function(e){n.value=e},expression:"value"}})},a=[]},96178:(n,e,t)=>{"use strict";t.d(e,{s:()=>r,x:()=>a});var r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"loader"},[t("p",{staticClass:"text-center text--primary"},[n._v("\n    "+n._s(n.$t("Loading"))+"\n  ")]),n._v(" "),t("v-progress-linear",{attrs:{color:"primary",indeterminate:"",rounded:"",height:"5",width:"100"}})],1)},a=[]},72283:(n,e,t)=>{"use strict";t.d(e,{s:()=>r,x:()=>a});var r=function(){var n=this,e=n.$createElement;return(n._self._c||e)("span",[n._v(n._s(n.timer))])},a=[]},4115:(n,e,t)=>{"use strict";t.d(e,{s:()=>r,x:()=>a});var r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-form",{ref:"form",model:{value:n.formIsValid,callback:function(e){n.formIsValid=e},expression:"formIsValid"}},[t("v-row",{staticClass:"mt-5",attrs:{justify:"center","no-gutters":""}},[t("v-col",{staticClass:"mb-3 mb-sm-0",attrs:{cols:"12",sm:"6",md:"4",lg:"2"}},[t("asset-search-autocomplete",{attrs:{type:n.$route.params.packageId.replace("-prediction",""),"default-asset-name":n.defaultAssetName,disabled:n.searchDisabled,dense:!0},on:{change:n.handleAssetChange}})],1),n._v(" "),t("v-col",{staticClass:"pl-sm-2",attrs:{cols:"12",sm:"6",md:"4",lg:"2"}},[t("v-select",{attrs:{items:n.durations,label:n.$t("Duration"),disabled:n.inputDisabled,"hide-details":"",dense:"",outlined:""},model:{value:n.duration,callback:function(e){n.duration=e},expression:"duration"}})],1)],1),n._v(" "),t("v-row",{staticClass:"mt-5",attrs:{justify:"center","no-gutters":""}},[t("v-col",{attrs:{cols:"12",sm:"6",md:"4",lg:"2"}},[t("v-text-field",{staticClass:"text-center",attrs:{dense:"",outlined:"","full-width":!1,label:n.$t("Bet"),disabled:n.inputDisabled,rules:[n.validationInteger,function(e){return n.validationMin(e,n.minBet)},function(e){return n.validationMax(e,Math.min(Math.floor(n.account.balance),n.maxBet))}],"prepend-inner-icon":"mdi-minus","append-icon":"mdi-plus"},on:{"click:prepend-inner":n.decreaseBet,"click:append":n.increaseBet},scopedSlots:n._u([{key:"prepend-inner",fn:function(){return[t("v-btn",{attrs:{small:"",text:"",icon:"",color:"primary"},on:{click:function(e){n.bet=n.minBet}}},[t("v-icon",{attrs:{small:""}},[n._v("\n              mdi-arrow-down\n            ")])],1),n._v(" "),t("v-btn",{attrs:{small:"",text:"",icon:"",color:"primary"},on:{click:n.decreaseBet}},[t("v-icon",{attrs:{small:""}},[n._v("\n              mdi-minus\n            ")])],1)]},proxy:!0},{key:"append",fn:function(){return[t("v-btn",{attrs:{small:"",text:"",icon:"",color:"primary"},on:{click:n.increaseBet}},[t("v-icon",{attrs:{small:""}},[n._v("\n              mdi-plus\n            ")])],1),n._v(" "),t("v-btn",{attrs:{small:"",text:"",icon:"",color:"primary"},on:{click:function(e){n.bet=n.maxBet}}},[t("v-icon",{attrs:{small:""}},[n._v("\n              mdi-arrow-up\n            ")])],1)]},proxy:!0}]),model:{value:n.bet,callback:function(e){n.bet=n._n(e)},expression:"bet"}})],1),n._v(" "),t("v-col",{staticClass:"text-center text-sm-left pl-sm-2 text-no-wrap",attrs:{cols:"12",sm:"6",md:"4",lg:"2"}},[t("v-btn",{attrs:{type:"submit",color:"success",loading:n.loading,disabled:n.inputDisabled||!n.formIsValid||!n.balanceIsSufficient},on:{click:function(e){return n.play(1)}}},[t("v-icon",{attrs:{left:""}},[n._v("\n          mdi-trending-up\n        ")]),n._v("\n        "+n._s(n.$t("Higher"))+"\n      ")],1),n._v(" "),t("v-btn",{attrs:{type:"submit",color:"error",loading:n.loading,disabled:n.inputDisabled||!n.formIsValid||!n.balanceIsSufficient},on:{click:function(e){return n.play(-1)}}},[t("v-icon",{attrs:{left:""}},[n._v("\n          mdi-trending-down\n        ")]),n._v("\n        "+n._s(n.$t("Lower"))+"\n      ")],1)],1)],1)],1)},a=[]},4631:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>W});var r=t(87757),a=t.n(r),i=t(9669),s=t.n(i),o=t(56235),c=t(24850),l=t(46869),u=t(52486),d=t(20629),p=t(36395),m=t(84716),f=t(47588),h=t(30632);const v=t.p+"audio/crypto-prediction/win.wav",b=t.p+"audio/crypto-prediction/lose.wav";var g=t(76521),y=t(56403),w=t(81438),x=t(67801),_=t(15566);function A(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],r=!0,a=!1,i=void 0;try{for(var s,o=n[Symbol.iterator]();!(r=(s=o.next()).done)&&(t.push(s.value),!e||t.length!==e);r=!0);}catch(n){a=!0,i=n}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return t}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return I(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function C(n,e,t,r,a,i,s){try{var o=n[i](s),c=o.value}catch(n){return void t(n)}o.done?e(c):Promise.resolve(c).then(r,a)}function P(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function s(n){C(i,r,a,s,o,"next",n)}function o(n){C(i,r,a,s,o,"throw",n)}s(void 0)}))}}function k(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function B(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?k(Object(t),!0).forEach((function(e){D(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function D(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}c.FgM(u.Z);const O={name:"CryptoPrediction",components:{BlockPreloader:x.Z,CountdownTimer:w.Z,PredictionControls:g.Z},mixins:[p.Z,m.Z,f.Z],data:function(){return{clickSound:h.Z,formIsValid:!0,requestInProgress:!1,gameInProgress:!1,asset:null,chart:null,prediction:null,assetDataIsLoaded:!1,predictionTimerEndDate:null,predictionInfoBlockTimeoutId:null,assetPriceUpdateIntervalId:null,win:0}},computed:B(B({},(0,d.rn)("auth",["account"])),{},{assetPriceUpdateInterval:function(){return 1e3*Math.max(1,parseInt((0,_.v)("crypto-prediction.price_update_interval"),10))}}),beforeDestroy:function(){this.clearPredictionInfoBlockTimeout(),this.clearAssetPriceUpdateInterval()},methods:B(B({},(0,d.nv)({updateUserAccountBalance:"auth/updateUserAccountBalance"})),{},{init:function(n){var e=this;return P(a().mark((function t(){var r,i,s,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.assetDataIsLoaded=!1,e.gameInProgress=!1,e.asset=B({},n),e.prediction=null,e.clearPredictionInfoBlockTimeout(),e.clearAssetPriceUpdateInterval(),t.next=8,Promise.all([e.fetchGame(n),e.fetchAssetHistory(n)]);case 8:r=t.sent,i=A(r,2),s=i[0],o=i[1],e.assetDataIsLoaded=!0,s&&(e.gameInProgress=!0,e.prediction=B({},s.gameable),e.predictionTimerEndDate=e.prediction.end_time_unix,e.setGameCompletionTimeout(s)),e.makeChart(o),e.assetPriceUpdateIntervalId=setInterval((function(){e.updateAssetPrice(n)}),e.assetPriceUpdateInterval),e.updateAssetPrice(n);case 17:case"end":return t.stop()}}),t)})))()},fetchGame:function(n){var e=this;return P(a().mark((function t(){var r,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get(e.getRoute("index").replace("{asset}",n.id));case 2:return r=t.sent,i=r.data,t.abrupt("return",i);case 5:case"end":return t.stop()}}),t)})))()},fetchAssetHistory:function(n){return P(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get((0,o.B)("assets.history").replace("{asset}",n.id));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))()},updateAssetPrice:function(n){var e=this;return P(a().mark((function t(){var r,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get((0,o.B)("assets.price").replace("{asset}",n.id));case 2:r=t.sent,i=r.data,e.pushLastPriceToChart(i);case 5:case"end":return t.stop()}}),t)})))()},makeChart:function(n){this.chart&&this.chart.dispose();var e=c.Ue8(this.$refs.chart,l.zO);e.hiddenState.properties.opacity=0,e.padding(0,0,0,0),e.zoomOutButton.disabled=!0,e.data=n;var t=e.xAxes.push(new l.SO);t.renderer.grid.template.location=0,t.renderer.minGridDistance=30,t.baseInterval={timeUnit:"second",count:1},t.dateFormats.setKey("second","hh:mm:ss"),t.periodChangeDateFormats.setKey("second","hh:mm:ss"),t.periodChangeDateFormats.setKey("minute","hh:mm:ss"),t.periodChangeDateFormats.setKey("hour","hh:mm:ss"),t.renderer.inside=!0,t.renderer.axisFills.template.disabled=!0,t.renderer.ticks.template.disabled=!0,t.renderer.grid.template.disabled=!0,t.skipEmptyPeriods=!0,t.visible=!1,t.rangeChangeDuration=500,t.groupData=!0,t.groupCount=100,t.groupInterval={timeUnit:"minute",count:1};var r=e.yAxes.push(new l.mn);r.interpolationDuration=500,r.rangeChangeDuration=500,r.renderer.inside=!0,r.renderer.minLabelPosition=.05,r.renderer.maxLabelPosition=.95,r.renderer.axisFills.template.disabled=!0,r.renderer.ticks.template.disabled=!0,r.renderer.grid.template.disabled=!0,r.renderer.labels.template.fill=c.$_Y(this.$vuetify.theme.isDark?"#fff":"#000");var a=e.series.push(new l.eh);a.dataFields.dateX="date",a.dataFields.valueY="value",a.groupFields.valueY="close",a.defaultState.transitionDuration=500,a.tensionX=.8,a.stroke=c.$_Y(this.$vuetify.theme.currentTheme.primary),a.strokeWidth=2,a.tooltipText="{valueY}",a.showTooltipOn="always",a.tooltip.getFillFromObject=!1,a.tooltip.pointerOrientation="vertical",a.tooltip.label.fill=c.$_Y("#fff"),a.tooltip.dx=0,a.tooltip.dy=-5,a.fillOpacity=1;var i=new c.oas;i.addColor(this.$vuetify.theme.currentTheme.primary,.25),i.addColor(this.$vuetify.theme.currentTheme.primary,0),a.fill=i,e.events.on("datavalidated",(function(){t.zoom({start:0,end:1.2},!1,!0)}));var s=a.bullets.push(new l.RI);s.circle.fill=c.$_Y(this.$vuetify.theme.currentTheme.primary),s.tooltipText="{valueY}",s.disabled=!0,s.propertyFields.disabled="isLastPriceTooltipDisabled",s.showTooltipOn="always",this.chart=e},pushLastPriceToChart:function(n){var e=this.chart,t=e.data[e.data.length-1];if(n&&t&&n!==t.value){var r=(new Date).getTime(),a=n-t.value;t.isLastPriceTooltipDisabled=!0,e.addData({date:r,value:n,isLastPriceTooltipDisabled:!1},0),e.series.values[0].tooltip.background.fill=a>0?c.$_Y(y.Z.green.base):c.$_Y(y.Z.red.base)}},play:function(n){var e=this;return P(a().mark((function t(){var r,i,o,c,l,u;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.asset,i=n.bet,o=n.direction,c=n.duration,e.requestInProgress=!0,e.gameInProgress=!0,e.prediction=null,e.clearPredictionInfoBlockTimeout(),e.updateUserAccountBalance(e.account.balance-i),t.next=8,s().post(e.getRoute("make").replace("{asset}",r.id),{bet:i,direction:o,duration:c});case 8:l=t.sent,u=l.data,e.requestInProgress=!1,e.prediction=B({},u.gameable),e.predictionTimerEndDate=(new Date).getTime()/1e3+c,e.pushLastPriceToChart(u.gameable.open_price),e.setGameCompletionTimeout(u);case 15:case"end":return t.stop()}}),t)})))()},setGameCompletionTimeout:function(n){var e=this;return P(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:setTimeout(P(a().mark((function t(){var r,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().post(e.getRoute("complete").replace("{game}",n.id));case 2:r=t.sent,i=r.data,e.updateUserAccountBalance(i.account.balance),i.gameable.asset.id===e.asset.id&&(e.prediction=B({},i.gameable),e.win=i.win,i.win>0?e.sound(v):e.sound(b),e.gameInProgress=!1,e.predictionInfoBlockTimeoutId=setTimeout((function(){e.prediction=null}),1e4));case 6:case"end":return t.stop()}}),t)}))),1e3*(n.gameable.end_time_unix+1)-(new Date).getTime());case 1:case"end":return t.stop()}}),t)})))()},clearPredictionInfoBlockTimeout:function(){this.predictionInfoBlockTimeoutId&&(clearTimeout(this.predictionInfoBlockTimeoutId),this.predictionInfoBlockTimeoutId=null)},clearAssetPriceUpdateInterval:function(){this.assetPriceUpdateIntervalId&&(clearInterval(this.assetPriceUpdateIntervalId),this.assetPriceUpdateIntervalId=null)}})};var $=t(93379),j=t.n($),T=t(54303),Z={insert:"head",singleton:!1};j()(T.Z,Z);T.Z.locals;var S=t(51900),M=t(43453),E=t.n(M),F=t(88465),L=t(17024),U=t(57894),q=(0,S.Z)(O,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"d-flex flex-column fill-height py-3"},[t("div",{staticClass:"d-flex justify-center align-center"},[t("transition",{attrs:{name:"scale"}},[n.prediction&&n.prediction.asset.id===n.asset.id?t("v-alert",{staticClass:"rounded",attrs:{id:"prediction-info-block",text:"",color:"primary"}},[t("h3",{staticClass:"mb-4 text--primary text-h5 font-weight-thin"},[n._v("\n          "+n._s(n.prediction.asset.name)+"\n        ")]),n._v(" "),t("v-row",{staticClass:"text--primary"},[t("v-col",{staticClass:"text-no-wrap"},[n._v("\n            "+n._s(n.$t("Open price"))+":\n            "),t("b",[n._v(n._s(n.chart.numberFormatter.format(n.prediction.open_price)))])]),n._v(" "),t("v-col",{staticClass:"text-no-wrap"},[n._v("\n            "+n._s(n.$t("Direction"))+":\n            "),t("b",[n._v(n._s(n.prediction.direction>0?n.$t("Higher"):n.$t("Lower")))])])],1),n._v(" "),n.prediction.close_price?t("v-row",{staticClass:"text--primary"},[t("v-col",{staticClass:"text-no-wrap"},[n._v("\n            "+n._s(n.$t("Close price"))+":\n            "),t("b",[n._v(n._s(n.chart.numberFormatter.format(n.prediction.close_price)))])]),n._v(" "),t("v-col",{staticClass:"text-no-wrap"},[n._v("\n            "+n._s(n.$t("Win"))+":\n            "),t("b",[n._v(n._s(n.win))])])],1):t("v-row",{staticClass:"text--primary"},[t("v-col",{staticClass:"text-center"},[t("countdown-timer",{attrs:{"end-date":n.predictionTimerEndDate}})],1)],1)],1):n._e()],1)],1),n._v(" "),t("div",{staticClass:"d-flex justify-center fill-height align-center"},[t("div",{directives:[{name:"show",rawName:"v-show",value:n.assetDataIsLoaded,expression:"assetDataIsLoaded"}],ref:"chart",staticClass:"chart"}),n._v(" "),t("block-preloader",{directives:[{name:"show",rawName:"v-show",value:!n.assetDataIsLoaded,expression:"!assetDataIsLoaded"}]})],1),n._v(" "),t("div",{staticClass:"d-flex justify-center flex-column"},[t("prediction-controls",{attrs:{loading:n.requestInProgress,"input-disabled":n.gameInProgress||!n.assetDataIsLoaded,"search-disabled":n.requestInProgress||!n.assetDataIsLoaded},on:{play:n.play,asset:n.init}})],1)])}),[],!1,null,"18881e52",null);const W=q.exports;E()(q,{VAlert:F.Z,VCol:L.Z,VRow:U.Z})}}]);
//# sourceMappingURL=crypto-prediction-resources-js-pages-game.js.map