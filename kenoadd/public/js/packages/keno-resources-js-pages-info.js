(self.webpackChunk=self.webpackChunk||[]).push([[2412],{60201:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>T});var n=a(15566);const o={data:function(){return{infoTab:"tab-about"}},computed:{paytable:function(){return(0,n.v)("keno.paytable")},selectCount:function(){return parseInt((0,n.v)("keno.select_count"),10)},drawCount:function(){return parseInt((0,n.v)("keno.draw_count"),10)},max:function(){return parseInt((0,n.v)("keno.rows_count"),10)*parseInt((0,n.v)("keno.cols_count"),10)}}};var r=a(51900),s=a(43453),c=a.n(s),l=a(4330),u=a(43776),b=a(5255),i=a(6571),v=a(78720),_=a(22515),f=a(756),d=a(83987),m=a(83868),p=a(33689),h=a(40961),y=a(73845),k=(0,r.Z)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-toolbar",{scopedSlots:t._u([{key:"extension",fn:function(){return[a("v-tabs",{attrs:{centered:"","hide-slider":""},model:{value:t.infoTab,callback:function(e){t.infoTab=e},expression:"infoTab"}},[a("v-tab",{attrs:{href:"#tab-about"}},[t._v("\n          "+t._s(t.$t("How to play"))+"\n        ")]),t._v(" "),a("v-tab",{attrs:{href:"#tab-paytable"}},[t._v("\n          "+t._s(t.$t("Paytable"))+"\n        ")])],1)]},proxy:!0}])},[a("v-toolbar-title",[t._v("\n      "+t._s(t.$t("Game information"))+"\n    ")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$emit("close")}}},[a("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),a("v-tabs-items",{model:{value:t.infoTab,callback:function(e){t.infoTab=e},expression:"infoTab"}},[a("v-tab-item",{attrs:{value:"tab-about"}},[a("v-card",{attrs:{flat:""}},[a("v-card-text",{staticClass:"about-text"},[a("p",[t._v("\n            "+t._s(t.$t("Select {0} numbers from 1 to {1} by clicking on a specfic number.",[t.selectCount,t.max]))+"\n            "+t._s(t.$t('If it is too boring click "Random" button to generate numbers for you.'))+"\n            "+t._s(t.$t('Choose your bet and click "Play".'))+"\n          ")]),t._v(" "),a("p",[t._v("\n            "+t._s(t.$t("{0} unique random numbers will be generated.",[t.drawCount]))+"\n            "+t._s(t.$t("The goal is to match as many numbers you chose on the board with the generated numbers as possible."))+"\n          ")])])],1)],1),t._v(" "),a("v-tab-item",{attrs:{value:"tab-paytable"}},[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("v-simple-table",[a("thead",[a("tr",[a("th",[t._v(t._s(t.$t("Number of matches")))]),t._v(" "),a("th",{staticClass:"text-right"},[t._v("\n                  "+t._s(t.$t("Payout"))+"\n                ")])])]),t._v(" "),a("tbody",[t._l(t.paytable,(function(e,n){return[e>0?a("tr",{key:n},[a("td",[t._v(t._s(n+1))]),t._v(" "),a("td",{staticClass:"text-right"},[t._v("\n                    "+t._s(t.$t("bet"))+" x "+t._s(e)+"\n                  ")])]):t._e()]}))],2)])],1)],1)],1)],1)],1)}),[],!1,null,null,null);const T=k.exports;c()(k,{VBtn:l.Z,VCard:u.Z,VCardText:b.ZB,VIcon:i.Z,VSimpleTable:v.Z,VSpacer:_.Z,VTab:f.Z,VTabItem:d.Z,VTabs:m.Z,VTabsItems:p.Z,VToolbar:h.Z,VToolbarTitle:y.qW})}}]);
//# sourceMappingURL=keno-resources-js-pages-info.js.map