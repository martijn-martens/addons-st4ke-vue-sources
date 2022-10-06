(self.webpackChunk=self.webpackChunk||[]).push([[6982],{69567:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var n=a(87757),r=a.n(n),u=a(9669),s=a.n(u),i=a(74155),o=a(68843);function l(t,e,a,n,r,u,s){try{var i=t[u](s),o=i.value}catch(t){return void a(t)}i.done?e(o):Promise.resolve(o).then(n,r)}const c={name:"KeyValueTable",props:["name","api","headers"],data:function(){return{data:null}},watch:{api:function(){this.loadData()}},created:function(){this.loadData()},methods:{value:function(t){var e=t.lookup?this.data[t.lookup][this.data[this.name][t.value]]:(0,o.U2)(this.data[this.name],t.value);return"boolean"==typeof e?e?this.$t("Yes"):this.$t("No"):t.format?this.format(t.format,e):e},format:function(t,e){return"function"==typeof i[t]?i[t](e):e},loadData:function(){var t,e=this;return(t=r().mark((function t(){var a,n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.data=null,t.next=3,s().get(e.api);case 3:a=t.sent,n=a.data,e.data=n,n[e.name]&&e.$emit("load",{data:n[e.name]});case 7:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(n,r){var u=t.apply(e,a);function s(t){l(u,n,r,s,i,"next",t)}function i(t){l(u,n,r,s,i,"throw",t)}s(void 0)}))})()}}}},85579:(t,e,a)=>{"use strict";a.d(e,{s:()=>n,x:()=>r});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",[t._l(t.headers,(function(e){return a("tr",{key:e.value},[a("td",[t._v(t._s(e.text))]),t._v(" "),a("td",{staticClass:"text-right"},[t.data?t._t(e.value,[t._v("\n            "+t._s(t.value(e))+"\n          ")],{item:t.data[t.name]}):a("v-skeleton-loader",{attrs:{type:"text","min-width":"60"}})],2)])})),t._v(" "),t.data?t._t("after",null,{item:t.data}):t._e()],2)]},proxy:!0}],null,!0)})},r=[]},91764:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>u});var n=a(45335);const r={components:{UserProfileModal:a(6342).Z,KeyValueTable:n.Z},props:["id"],computed:{headers:function(){return[{text:this.$t("Player"),value:"account.user.name"},{text:this.$t("Game"),value:"title"},{text:this.$t("Bet"),value:"bet",format:"decimal"},{text:this.$t("Win"),value:"win",format:"decimal"},{text:this.$t("Profit"),value:"profit",format:"decimal"},{text:this.$t("Matches count"),value:"gameable.matches_count"},{text:this.$t("Selected numbers"),value:"gameable.selected_numbers"},{text:this.$t("Drawn numbers"),value:"gameable.drawn_numbers"},{text:this.$t("Played"),value:"updated_ago"}]}}};const u=(0,a(51900).Z)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("key-value-table",{attrs:{name:"game",api:"/api/history/games/"+t.id,headers:t.headers},scopedSlots:t._u([{key:"account.user.name",fn:function(t){var e=t.item.account.user;return[a("user-profile-modal",{attrs:{user:e}})]}},{key:"gameable.selected_numbers",fn:function(e){var a=e.item.gameable.selected_numbers;return[t._v("\n    "+t._s(a.join(", "))+"\n  ")]}},{key:"gameable.drawn_numbers",fn:function(e){var a=e.item.gameable.drawn_numbers;return[t._v("\n    "+t._s(a.join(", "))+"\n  ")]}}])})}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=keno-resources-js-pages-show.js.map