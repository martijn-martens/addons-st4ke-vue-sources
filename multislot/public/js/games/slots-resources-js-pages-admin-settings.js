(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{"/jPJ":function(t,e,n){"use strict";n.r(e);var a=n("o0o1"),o=n.n(a),r=n("fpkf"),i=n("ZXch"),s=n("4HBT"),l=n.n(s),c=n("C3Ci"),u=n("c2kw"),m=n("gA+b"),v=n("MQ60");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function S(t,e,n,a,o,r,i){try{var s=t[r](i),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(a,o)}function b(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var r=t.apply(e,n);function i(t){S(r,a,o,i,s,"next",t)}function s(t){S(r,a,o,i,s,"throw",t)}i(void 0)}))}}var A,p,I,O={components:{draggable:n.n(v).a,ImageUpload:u.a},mixins:[c.a],props:{form:{type:Object,required:!0}},data:function(){return{imageUploadForm:new l.a({image:null}),cloneVariationForm:new l.a({variation:null}),removeVariationForm:new l.a}},computed:{variations:function(){return Object(r.a)("slots.variations")},url:function(){return window.location.origin+"/slots/"}},created:function(){this.$emit("input",{GAME_SLOTS_VARIATIONS:this.variations})},methods:{bannerImagePath:function(t){return Object(i.e)(this.variations[t],"banner")},symbolImagePath:function(t,e){return this.variations[t].symbols[e]?this.variations[t].symbols[e].image:""},cloneVariation:(I=b(o.a.mark((function t(e){var n,a,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.form.GAME_SLOTS_VARIATIONS.length,this.cloneVariationForm.variation=n,t.next=4,this.cloneVariationForm.post("/api/admin/settings/slots/variations/".concat(e));case 4:a=t.sent,(r=a.data).success?(this.form.GAME_SLOTS_VARIATIONS.push(_({},this.form.GAME_SLOTS_VARIATIONS[e])),this.form.GAME_SLOTS_VARIATIONS[n].title+=" - cloned",this.form.GAME_SLOTS_VARIATIONS[n].slug+="-cloned"):this.$store.dispatch("message/error",{text:r.message});case 7:case"end":return t.stop()}}),t,this)}))),function(t){return I.apply(this,arguments)}),removeVariation:(p=b(o.a.mark((function t(e){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.removeVariationForm.delete("/api/admin/settings/slots/variations/".concat(e));case 2:n=t.sent,a=n.data,this.form.GAME_SLOTS_VARIATIONS.splice(e,1),a.success||this.$store.dispatch("message/error",{text:a.message});case 6:case"end":return t.stop()}}),t,this)}))),function(t){return p.apply(this,arguments)}),addSymbol:function(t){this.form.GAME_SLOTS_VARIATIONS[t].symbols.push({image:null,wild:!1,scatter:!1,payouts:[0,0,0,0,0]})},removeSymbol:function(t,e){this.form.GAME_SLOTS_VARIATIONS[t].symbols.splice(e,1)},disableActiveMagicSymbols:function(t,e,n,a){a&&this.form.GAME_SLOTS_VARIATIONS[e].symbols.forEach((function(e,a,o){a!==n&&(o[a][t]=!1)}))},addSymbolToReel:function(t,e,n){this.form.GAME_SLOTS_VARIATIONS[t].reels[e].push(n)},removeSymbolFromReel:function(t,e,n){this.form.GAME_SLOTS_VARIATIONS[t].reels[e].splice(n,1)},uploadImage:(A=b(o.a.mark((function t(e,n){var a,r,i,s,l=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=l.length>2&&void 0!==l[2]?l[2]:null,this.imageUploadForm.image=e,r={transformRequest:[function(t,e){return Object(m.a)(t)}]},t.next=5,this.imageUploadForm.submit("post","/api/admin/settings/slots/variations/".concat(n,"/image"),r);case 5:i=t.sent,(s=i.data).success?null!==a?this.form.GAME_SLOTS_VARIATIONS[n].symbols[a].image=s.path:this.form.GAME_SLOTS_VARIATIONS[n].banner=s.path:this.$store.dispatch("message/error",{text:s.message});case 8:case"end":return t.stop()}}),t,this)}))),function(t,e){return A.apply(this,arguments)})}},T=(n("WtQr"),n("KHd+")),g=n("ZUTo"),h=n.n(g),y=n("ghKu"),x=n("TKb1"),V=n("gzZi"),R=n("sK+t"),E=n("mdmw"),M=n("Yq0q"),N=n("zn5u"),G=n("zVVW"),L=n("SeJn"),w=n("yGWi"),$=n("A5O/"),k=n("Ey0z"),P=n("iGBT"),j=n("2hOt"),C=n("NMP6"),F=n("5Emp"),D=n("D9m0"),z=n("tz1R"),B=n("hlRy"),U=Object(T.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("v-expansion-panels",t._l(t.variations,(function(e,a){return n("v-expansion-panel",{key:a},[n("v-expansion-panel-header",[t._v(t._s(e.title))]),t._v(" "),n("v-expansion-panel-content",[n("v-expansion-panels",[n("v-expansion-panel",[n("v-expansion-panel-header",[t._v(t._s(t.$t("General")))]),t._v(" "),n("v-expansion-panel-content",[n("v-text-field",{attrs:{label:t.$t("Title"),rules:[t.validationRequired],outlined:""},model:{value:t.form.GAME_SLOTS_VARIATIONS[a].title,callback:function(e){t.$set(t.form.GAME_SLOTS_VARIATIONS[a],"title",e)},expression:"form.GAME_SLOTS_VARIATIONS[variationIndex].title"}}),t._v(" "),n("v-text-field",{attrs:{label:t.$t("Slug"),rules:[t.validationRequired],prefix:t.url,outlined:""},model:{value:t.form.GAME_SLOTS_VARIATIONS[a].slug,callback:function(e){t.$set(t.form.GAME_SLOTS_VARIATIONS[a],"slug",e)},expression:"form.GAME_SLOTS_VARIATIONS[variationIndex].slug"}}),t._v(" "),n("image-upload",{attrs:{label:t.$t("Banner"),form:t.form,"default-value":t.bannerImagePath(a),"default-url":t.bannerImagePath(a)},on:{change:function(e){return t.uploadImage(e,a)}}}),t._v(" "),n("v-text-field",{attrs:{label:t.$t("Min bet"),rules:[function(e){return t.validationInteger(parseInt(e,10))},t.validationPositiveNumber],outlined:"",suffix:t.$t("credits")},model:{value:t.form.GAME_SLOTS_VARIATIONS[a].min_bet,callback:function(e){t.$set(t.form.GAME_SLOTS_VARIATIONS[a],"min_bet",t._n(e))},expression:"form.GAME_SLOTS_VARIATIONS[variationIndex].min_bet"}}),t._v(" "),n("v-text-field",{attrs:{label:t.$t("Max bet"),rules:[function(e){return t.validationInteger(parseInt(e,10))},t.validationPositiveNumber],outlined:"",suffix:t.$t("credits")},model:{value:t.form.GAME_SLOTS_VARIATIONS[a].max_bet,callback:function(e){t.$set(t.form.GAME_SLOTS_VARIATIONS[a],"max_bet",t._n(e))},expression:"form.GAME_SLOTS_VARIATIONS[variationIndex].max_bet"}}),t._v(" "),n("v-text-field",{attrs:{label:t.$t("Bet increment / decrement amount"),rules:[function(e){return t.validationInteger(parseInt(e,10))},t.validationPositiveNumber],outlined:"",suffix:t.$t("credits")},model:{value:t.form.GAME_SLOTS_VARIATIONS[a].bet_change_amount,callback:function(e){t.$set(t.form.GAME_SLOTS_VARIATIONS[a],"bet_change_amount",t._n(e))},expression:"form.GAME_SLOTS_VARIATIONS[variationIndex].bet_change_amount"}}),t._v(" "),n("v-text-field",{attrs:{label:t.$t("Default bet amount"),rules:[function(e){return t.validationInteger(parseInt(e,10))},t.validationPositiveNumber],outlined:"",suffix:t.$t("credits")},model:{value:t.form.GAME_SLOTS_VARIATIONS[a].default_bet_amount,callback:function(e){t.$set(t.form.GAME_SLOTS_VARIATIONS[a],"default_bet_amount",t._n(e))},expression:"form.GAME_SLOTS_VARIATIONS[variationIndex].default_bet_amount"}}),t._v(" "),n("v-text-field",{attrs:{label:t.$t("Default number of lines"),rules:[t.validationInteger,function(e){return t.validationMin(e,1)},function(e){return t.validationMax(e,20)}],outlined:""},model:{value:t.form.GAME_SLOTS_VARIATIONS[a].default_lines,callback:function(e){t.$set(t.form.GAME_SLOTS_VARIATIONS[a],"default_lines",t._n(e))},expression:"form.GAME_SLOTS_VARIATIONS[variationIndex].default_lines"}})],1)],1),t._v(" "),n("v-expansion-panel",[n("v-expansion-panel-header",[t._v(t._s(t.$t("Symbols")))]),t._v(" "),n("v-expansion-panel-content",[t._l(e.symbols,(function(o,r){return[n("div",{key:r},[n("image-upload",{attrs:{label:t.$t("Image"),form:t.form,"default-value":t.symbolImagePath(a,r),"default-url":t.symbolImagePath(a,r)},on:{change:function(e){return t.uploadImage(e,a,r)}}}),t._v(" "),n("v-row",t._l([0,1,2,3,4],(function(e){return n("v-col",{key:e},[n("v-text-field",{staticClass:"text-center",attrs:{label:t.$t("Payout")+" x"+(e+1),rules:[function(e){return t.validationInteger(parseInt(e,10))}],"hide-details":!0,outlined:""},model:{value:t.form.GAME_SLOTS_VARIATIONS[a].symbols[r].payouts[e],callback:function(n){t.$set(t.form.GAME_SLOTS_VARIATIONS[a].symbols[r].payouts,e,t._n(n))},expression:"form.GAME_SLOTS_VARIATIONS[variationIndex].symbols[symbolIndex].payouts[k]"}})],1)})),1),t._v(" "),n("v-row",[n("v-col",[n("v-switch",{attrs:{label:t.$t("Wild"),color:"primary","false-value":!1,"true-value":!0},on:{change:function(e){return t.disableActiveMagicSymbols("wild",a,r,e)}},model:{value:t.form.GAME_SLOTS_VARIATIONS[a].symbols[r].wild,callback:function(e){t.$set(t.form.GAME_SLOTS_VARIATIONS[a].symbols[r],"wild",e)},expression:"form.GAME_SLOTS_VARIATIONS[variationIndex].symbols[symbolIndex].wild"}})],1)],1),t._v(" "),n("v-row",[n("v-col",[n("v-switch",{attrs:{label:t.$t("Scatter"),color:"primary","false-value":!1,"true-value":!0},on:{change:function(e){return t.disableActiveMagicSymbols("scatter",a,r,e)}},model:{value:t.form.GAME_SLOTS_VARIATIONS[a].symbols[r].scatter,callback:function(e){t.$set(t.form.GAME_SLOTS_VARIATIONS[a].symbols[r],"scatter",e)},expression:"form.GAME_SLOTS_VARIATIONS[variationIndex].symbols[symbolIndex].scatter"}})],1)],1),t._v(" "),e.symbols.length>1?n("v-row",[n("v-col",[n("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.removeSymbol(a,r)}}},[t._v("\n                          "+t._s(t.$t("Remove symbol"))+"\n                        ")])],1)],1):t._e(),t._v(" "),r<e.symbols.length-1?n("v-divider",{staticClass:"mt-5 mb-10"}):t._e()],1)]})),t._v(" "),n("v-row",[n("v-col",[n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.addSymbol(a)}}},[t._v("\n                      "+t._s(t.$t("Add symbol"))+"\n                    ")])],1)],1)],2)],1),t._v(" "),n("v-expansion-panel",[n("v-expansion-panel-header",[t._v(t._s(t.$t("Reels")))]),t._v(" "),n("v-expansion-panel-content",[n("v-row",t._l([0,1,2,3,4],(function(o){return n("v-col",{key:o},[n("draggable",{attrs:{list:t.form.GAME_SLOTS_VARIATIONS[a].reels[o]}},t._l(t.form.GAME_SLOTS_VARIATIONS[a].reels[o],(function(e,r){return n("div",{key:r,staticClass:"text-center mb-3"},[n("v-badge",{attrs:{color:"rgba(255,255,255,0)"}},[n("v-btn",{attrs:{slot:"badge",color:"error",icon:"","x-small":""},on:{click:function(e){return t.removeSymbolFromReel(a,o,r)}},slot:"badge"},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-avatar",{attrs:{size:"64",tile:""}},[n("img",{attrs:{src:t.symbolImagePath(a,e),alt:t.symbolImagePath(a,e)}})])],1)],1)})),0),t._v(" "),n("div",{staticClass:"text-center mt-5"},[n("v-menu",{attrs:{"offset-y":"",top:"",right:"","max-height":"300"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{color:"primary",small:""}},a),[n("v-icon",[t._v("mdi-plus")]),t._v("\n                            "+t._s(t.$t("Add"))+"\n                          ")],1)]}}],null,!0)},[t._v(" "),n("v-list",t._l(e.symbols,(function(e,r){return n("v-list-item",{key:r,on:{click:function(e){return t.addSymbolToReel(a,o,r)}}},[n("v-list-item-icon",{staticClass:"mr-0"},[n("v-avatar",{attrs:{size:"64",tile:""}},[n("img",{attrs:{src:t.symbolImagePath(a,r),alt:t.symbolImagePath(a,r)}})])],1)],1)})),1)],1)],1)],1)})),1)],1)],1)],1),t._v(" "),n("v-row",[n("v-col",[n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.cloneVariation(a)}}},[t._v("\n                "+t._s(t.$t("Clone"))+"\n              ")]),t._v(" "),t.variations.length>1?n("v-btn",{staticClass:"ml-3",attrs:{color:"error"},on:{click:function(e){return t.removeVariation(a)}}},[t._v("\n                "+t._s(t.$t("Remove"))+"\n              ")]):t._e()],1)],1)],1)],1)})),1)],1)],1)}),[],!1,null,"5932a1ff",null);e.default=U.exports;h()(U,{VAvatar:y.a,VBadge:x.a,VBtn:V.a,VCard:R.a,VCardText:E.c,VCol:M.a,VDivider:N.a,VExpansionPanel:G.a,VExpansionPanelContent:L.a,VExpansionPanelHeader:w.a,VExpansionPanels:$.a,VIcon:k.a,VList:P.a,VListItem:j.a,VListItemIcon:C.a,VMenu:F.a,VRow:D.a,VSwitch:z.a,VTextField:B.a})},Fm2T:function(t,e,n){var a=n("sUDu");"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(a,o);a.locals&&(t.exports=a.locals)},WtQr:function(t,e,n){"use strict";var a=n("Fm2T");n.n(a).a},sUDu:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,".v-badge[data-v-5932a1ff] {\n  cursor: move;\n  /* fallback if grab cursor is unsupported */\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n}\n.sortable-chosen .v-badge[data-v-5932a1ff], .sortable-ghost .v-badge[data-v-5932a1ff] {\n  cursor: move;\n}",""])}}]);
//# sourceMappingURL=slots-resources-js-pages-admin-settings.js.map