(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{"8jjQ":function(t,n,i){(t.exports=i("I1BE")(!1)).push([t.i,".wheel[data-v-6bf42650] {\n  max-width: 70%;\n  width: 100%;\n}\n@media (min-width: 600px) {\n.wheel[data-v-6bf42650] {\n    width: 400px;\n}\n}\n.wheel svg[data-v-6bf42650] {\n  width: 100%;\n  height: auto;\n}\n@media (min-width: 1200px) {\n.wheel .segment-pin[data-v-6bf42650] {\n    filter: url(#spin_blur);\n}\n}\n.wheel g path.border[data-v-6bf42650] {\n  stroke-width: 0;\n  fill: var(--v-primary-base);\n}\n@media (min-width: 1200px) {\n.wheel g path.border[data-v-6bf42650] {\n    filter: url(#spin_blur);\n}\n}\n.wheel g path.segment[data-v-6bf42650] {\n  stroke-width: 0;\n}\n@media (min-width: 1200px) {\n.wheel g path.segment[data-v-6bf42650] {\n    filter: url(#spin_blur);\n}\n}\n.wheel g path.segment.win[data-v-6bf42650] {\n  filter: url(#winBrightness);\n}\n.wheel .label[data-v-6bf42650] {\n  stroke-width: 0;\n  alignment-baseline: central;\n  dominant-baseline: central;\n  text-anchor: middle;\n}\n@media (min-width: 1200px) {\n.wheel .label[data-v-6bf42650] {\n    filter: url(#spin_blur);\n}\n}\n.wheel .circle-inner[data-v-6bf42650] {\n  stroke: var(--v-primary-base);\n  fill: var(--v-primary-darken1);\n}\n.wheel .circle-inner-2[data-v-6bf42650] {\n  fill: var(--v-primary-lighten1);\n}\n.wheel .circle-outer[data-v-6bf42650] {\n  stroke: var(--v-primary-darken3);\n}\n.wheel .stroke-pin[data-v-6bf42650] {\n  stroke: black;\n  fill: red;\n}\n.wheel .outer-pin[data-v-6bf42650] {\n  fill: var(--v-primary-darken1);\n}\n.wheel .segment-pin[data-v-6bf42650] {\n  fill: var(--v-primary-darken1);\n}\n.wheel .led-outer[data-v-6bf42650] {\n  transition: 0.3s;\n}\n.wheel .led-outer-light[data-v-6bf42650] {\n  transition: 0.3s;\n}\n.wheel .stopper-body[data-v-6bf42650] {\n  fill: var(--v-primary-lighten1);\n}\n.wheel .stopper-pin[data-v-6bf42650] {\n  fill: var(--v-primary-darken1);\n}\n.wheel .stopper-pin-inner[data-v-6bf42650] {\n  fill: var(--v-primary-darken2);\n}\n.message-container[data-v-6bf42650] {\n  height: 0;\n  padding: 25px 0 20px 0;\n}",""])},"97M8":function(t,n,i){var e=i("eYAC");"string"==typeof e&&(e=[[t.i,e,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(e,a);e.locals&&(t.exports=e.locals)},F5qV:function(t,n,i){var e=i("8jjQ");"string"==typeof e&&(e=[[t.i,e,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(e,a);e.locals&&(t.exports=e.locals)},FjpJ:function(t,n,i){"use strict";i("Ya2c");var e=i("KHd+"),a=i("ZUTo"),s=i.n(a),o=i("jjY0"),r=Object(e.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"loader"},[n("p",{staticClass:"text-center text--primary"},[this._v("\n    "+this._s(this.$t("Loading"))+"\n  ")]),this._v(" "),n("v-progress-linear",{attrs:{color:"primary",indeterminate:"",rounded:"",height:"5",width:"100"}})],1)}),[],!1,null,"15bf5aea",null);n.a=r.exports;s()(r,{VProgressLinear:o.a})},GOOV:function(t,n,i){"use strict";i.r(n);var e=i("o0o1"),a=i.n(e),s=i("vDqi"),o=i.n(s),r=i("L2JU"),l=i("fpkf"),c=i("C3Ci"),h=i("OY7U"),g=i("fYW3"),d=i("ZXch"),p=i("Ya0m"),u=i.n(p),f=i("XFUV"),m=i.n(f),v=i("ftgy"),b=i.n(v),w=i("UPN4"),y=i.n(w),k=i("/hoC"),x=i("7n2z");function A(t,n,i,e,a,s,o){try{var r=t[s](o),l=r.value}catch(t){return void i(t)}r.done?n(l):Promise.resolve(l).then(e,a)}function _(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),i.push.apply(i,e)}return i}function M(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?_(Object(i),!0).forEach((function(n){P(t,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):_(Object(i)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))}))}return t}function P(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}var C,F,O={name:"LuckyWheel",components:{BlockPreloader:i("FjpJ").a,GameMessage:x.a,PlayControls:k.a},mixins:[c.a,h.a,g.a],data:function(){return{loading:!1,playing:!1,ready:!1,message:null,animation:{planned:!1,t:0,aClack:0,spinBlur:0,spinAngle:0,breakM:0,breakAngle:0,breakAngleFrom:0,ledAngle:0,lPosAngle:0,lAngle:0,speed:0,speedLedMin:50,speedLed:50,speedReverseMax:15,speedMax:600,speedMin:.1,speedNoise:400,breakSpins:4,ledPanelOffset:0,stage:0,index:null,requestAnimationFrame:null},interval:null}},computed:M({},Object(r.d)("auth",["account"]),{variations:function(){return this.gamePackageId?Object(l.a)("".concat(this.gamePackageId)).variations:null},variation:function(){var t=this;return this.variations&&this.variations.length?this.variations.findIndex((function(n){return n.slug===t.$route.params.slug})):null},config:function(){return null!==this.variation?this.variations[this.variation]:{}},sectorX:function(){return 1e3*Math.cos(360/this.config.sections.length*Math.PI/180/2)},sectorY:function(){return 1e3*Math.sin(360/this.config.sections.length*Math.PI/180/2)},sectorBX:function(){return Math.abs(20*Math.cos(360/this.config.sections.length*Math.PI/180/2+Math.PI/2))},sectorBY:function(){return Math.abs(20*Math.sin(360/this.config.sections.length*Math.PI/180/2+Math.PI/2))}}),watch:{variation:function(t,n){null!==n&&this.init()}},created:function(){document.addEventListener("visibilitychange",this.visibilityCnage)},beforeDestroy:function(){this.playing=!1,clearInterval(this.interval),document.removeEventListener("visibilitychange",this.visibilityCnage)},mounted:function(){var t=this;this.$nextTick((function(){t.init()}))},methods:M({},Object(r.b)({updateUserAccountBalance:"auth/updateUserAccountBalance",setProvablyFairGame:"provably-fair/set"}),{init:function(){var t=this;this.ready=!1,this.animation.lPosAngle=360/this.config.sections.length/2,this.requestAnimationFrameGet(),this.animation.t=Date.now(),this.interval=setInterval((function(){t.animation.planned||(t.animation.planned=!0,t.animation.requestAnimationFrame(t.animationCalculate))}),25),setTimeout((function(){t.ready=!0}),1e3)},play:(C=a.a.mark((function t(n){var i,e,s,r,l=this;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,this.playing=!0,this.message=null,this.sound(b.a),this.startSpin(),this.updateUserAccountBalance(this.account.balance-n),t.next=8,Object(d.l)(500);case 8:return i=this.getRoute("play"),e={hash:this.provablyFairGame.hash,bet:n,variation:this.variation},t.next=12,o.a.post(i,e);case 12:s=t.sent,r=s.data,this.loading=!1,this.setProvablyFairGame({key:this.gamePackageId,game:r.pf_game}),this.respnoseData={position:r.gameable.position,balance:r.account.balance,win:r.win,bet:r.bet},setTimeout((function(){return l.stopSpin(l.respnoseData.position)}),1e3);case 18:case"end":return t.stop()}}),t,this)})),F=function(){var t=this,n=arguments;return new Promise((function(i,e){var a=C.apply(t,n);function s(t){A(a,i,e,s,o,"next",t)}function o(t){A(a,i,e,s,o,"throw",t)}s(void 0)}))},function(t){return F.apply(this,arguments)}),getLabelSize:function(t){return isNaN(t.font)?("string"==typeof t.title?t.title.split("\n").reduce((function(t,n){return n.length>t&&(t=n.length),t}),0):t.title.toString().length)>6?12/("string"==typeof t.title?t.title.split("\n").reduce((function(t,n){return n.length>t&&(t=n.length),t}),0):t.title.toString().length)*70:160:t.font},getLabelX:function(t){return"string"==typeof t.title&&t.title.split("\n").length>1?-600:("string"==typeof t.title?t.title.split("\n").reduce((function(t,n){return n.length>t&&(t=n.length),t}),0):t.title.toString().length)>6?-600:-650},getLabelY:function(t){return"string"==typeof t.title&&t.title.split("\n").length>1?1.6*-this.getLabelSize(t)*t.title.split("\n").length/2:0},getLabelSpanDY:function(t){return 1.2*this.getLabelSize(t)},getLedOuterFill:function(t){return this.config.sections[(t+this.animation.ledPanelOffset-1)%this.config.sections.length].backgroundColor},visibilityCnage:function(){if(void 0!==document.hidden)if(document.hidden)this.animation.t_hide=Date.now();else{var t=Date.now()-this.animation.t_hide;this.animation.t+=t}},requestAnimationFrameGet:function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame;this.animation.requestAnimationFrame=t?t.bind(window):null},onStopSpin:function(){this.respnoseData&&(this.updateUserAccountBalance(this.respnoseData.balance),this.respnoseData.win>0?(this.message=this.$t("You won")+" "+this.respnoseData.win,this.sound(y.a)):this.sound(m.a),this.playing=!1,this.respnoseData=null)},animationCalculate:function(){this.animation.planned=!1;var t=Date.now()-this.animation.t;switch(this.animation.t=Date.now(),this.animation.stage){case 1:this.animation.speed+=this.animation.speedMax/1e3*t,this.animation.spinBlur=Math.round(this.animation.speed/10)-10,this.animation.spinBlur<0&&(this.animation.spinBlur=0),this.animation.speedLed=Math.round(this.animation.speed),this.animation.speed>=this.animation.speedMax&&(this.animation.speed=this.animation.speedMax,this.animation.stage++);break;case 2:null!=this.animation.index&&(this.animation.breakAngle=360*this.animation.breakSpins-this.animation.spinAngle-360*this.animation.index/this.config.sections.length+360/this.config.sections.length/2+4,this.animation.breakAngleFrom=this.animation.breakAngle,this.animation.breakM=this.animation.speedMax/Math.sqrt(this.animation.breakAngleFrom),this.animation.stage++);break;case 3:if(this.animation.breakAngle>0){this.animation.speed=this.animation.breakM*Math.sqrt(this.animation.breakAngle/this.animation.breakAngleFrom*this.animation.speedMax),this.animation.speed<this.animation.speedMin&&(this.animation.speed=this.animation.speedMin),this.animation.spinBlur=Math.round(this.animation.speed/10)-10,this.animation.spinBlur<0&&(this.animation.spinBlur=0),this.animation.speedLed=Math.round(this.animation.speed);break}if(!(this.animation.breakAngle<=0))break;this.animation.breakAngle=0,this.animation.spinBlur=0,this.animation.speedLed=this.animation.speedLedMin,this.animation.breakM=this.animation.speedReverseMax/Math.sqrt(4+360/this.config.sections.length/2),this.onStopSpin(),this.animation.stage++;case 4:this.animation.speed=-this.animation.breakM*Math.sqrt(4+360/this.config.sections.length-this.animation.breakAngle),this.animation.speed>-this.animation.speedMin&&(this.animation.speed=-this.animation.speedMin),this.animation.breakAngle>=4+360/this.config.sections.length/2&&(this.animation.speed=0,this.animation.stage=0)}for(3!==this.animation.stage&&4!==this.animation.stage||(this.animation.breakAngle-=this.animation.speed/1e3*t),this.animation.spinAngle+=this.animation.speed/1e3*t,this.animation.lPosAngle+=this.animation.speed/1e3*t,this.animation.aClack+=this.animation.speed/1e3*t,this.animation.ledAngle+=this.animation.speedLed/1e3*t;this.animation.spinAngle>360;)this.animation.spinAngle-=360;for(;this.animation.ledAngle>720;)this.animation.ledAngle-=720;for(;this.animation.ledAngle<0;)this.animation.ledAngle+=360;if(this.animation.ledPanelOffset=Math.round(this.animation.ledAngle/(360/(2*this.config.sections.length))),this.animation.lPosAngle>=360/this.config.sections.length-3&&this.animation.lPosAngle<=360/this.config.sections.length+8){for(;this.animation.lPosAngle>360/this.config.sections.length+8;)this.animation.lPosAngle-=360/this.config.sections.length;this.animation.lAngle=((11-(360/this.config.sections.length+8-this.animation.lPosAngle))/11*45).toFixed(1),this.animation.lAngle>45&&(this.animation.lAngle=45),this.animation.lAngle<0&&(this.animation.lAngle=0)}else if(this.animation.lAngle>0){for(this.animation.lPosAngle>360/this.config.sections.length&&(this.animation.lAngle=45);this.animation.lPosAngle>360/this.config.sections.length;)this.animation.lPosAngle-=360/this.config.sections.length;this.animation.lAngle-=.36*t,this.animation.lAngle<0&&(this.animation.lAngle=0)}else this.animation.lPosAngle>360/this.config.sections.length&&(this.animation.lAngle=45);if(this.animation.aClack>360/this.config.sections.length)for(this.sound(u.a);this.animation.aClack>360/this.config.sections.length;)this.animation.aClack-=360/this.config.sections.length},startSpin:function(){this.animation.index=null,this.animation.stage=1},stopSpin:function(t){this.animation.index=t}})},j=(i("j8E2"),i("KHd+")),B=Object(j.a)(O,(function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"d-flex flex-column fill-height py-3 pt-md-3 pt-12"},[i("div",{staticClass:"message-container d-flex justify-center align-center"},[i("game-message",{attrs:{message:t.message}})],1),t._v(" "),t.ready?i("div",{staticClass:"d-flex justify-center fill-height align-center"},[i("div",{staticClass:"wheel"},[i("object",[i("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"2600",height:"2600",viewBox:"0 0 2600 2600"}},[i("defs",[i("filter",{attrs:{id:"spin_blur",x:"0",y:"0"}},[i("feGaussianBlur",{attrs:{in:"SourceGraphic",stdDeviation:t.animation.spinBlur}})],1),t._v(" "),i("filter",{attrs:{id:"l_blur",x:"0",y:"0"}},[i("feGaussianBlur",{attrs:{in:"SourceGraphic",stdDeviation:Math.round(t.animation.spinBlur/5)}})],1),t._v(" "),i("clipPath",{attrs:{id:"wheel_clip"}},[i("circle",{attrs:{r:"1035",cx:"0",cy:"0"}})]),t._v(" "),i("filter",{attrs:{id:"ledBrightness"}},[i("feComponentTransfer",[i("feFuncR",{attrs:{type:"linear",slope:"4"}}),t._v(" "),i("feFuncG",{attrs:{type:"linear",slope:"4"}}),t._v(" "),i("feFuncB",{attrs:{type:"linear",slope:"4"}})],1)],1),t._v(" "),i("filter",{attrs:{id:"winBrightness"}},[i("feComponentTransfer",[i("feFuncR",{attrs:{type:"linear",slope:"2"}}),t._v(" "),i("feFuncG",{attrs:{type:"linear",slope:"2"}}),t._v(" "),i("feFuncB",{attrs:{type:"linear",slope:"2"}})],1)],1)]),t._v(" "),i("g",{attrs:{transform:"translate(1300,1300) rotate("+t.animation.spinAngle+")","clip-path":"url(#wheel_clip)"}},[t._l(t.config.sections,(function(n,e){return i("g",{ref:e,refInFor:!0,staticClass:"section",attrs:{transform:"rotate("+360*e/t.config.sections.length+")"}},[i("path",{staticClass:"section",class:null!=t.animation.index&&(0==t.animation.stage||t.animation.stage>=4)&&t.animation.index==e?"win":"",attrs:{d:"M0 00 -"+t.sectorX.toFixed(2)+" -"+t.sectorY.toFixed(2)+" A1000 1000 0 0 0-"+t.sectorX.toFixed(2)+" "+t.sectorY.toFixed(2)+"Z",fill:n.backgroundColor}}),t._v(" "),i("text",{staticClass:"label",attrs:{x:t.getLabelX(n),y:t.getLabelY(n),"font-size":t.getLabelSize(n),fill:n.fontColor?n.fontColor:"#000000"}},["string"==typeof n.title&&n.title.split("\n").length>1?t._l(n.title.split("\n"),(function(e){return i("tspan",{attrs:{x:t.getLabelX(n),dy:t.getLabelSpanDY(n)}},[t._v(t._s(e))])})):[t._v(t._s(n.title))]],2)])})),t._v(" "),t._l(t.config.sections,(function(n,e){return i("g",{staticClass:"section",attrs:{transform:"rotate("+360*e/t.config.sections.length+")"}},[i("path",{staticClass:"border",attrs:{d:"M"+t.sectorBX.toFixed(2)+" -"+t.sectorBY.toFixed(2)+" -"+t.sectorBX.toFixed(2)+" "+t.sectorBY.toFixed(2)+" -"+t.sectorX.toFixed(2)+" -"+t.sectorY.toFixed(2)+"Z"}})])})),t._v(" "),i("circle",{staticClass:"circle-inner",attrs:{cx:"0",cy:"0",r:"200","stroke-width":"35"}}),t._v(" "),i("circle",{staticClass:"circle-inner-2",attrs:{cx:"0",cy:"0",r:"50","stroke-width":"0"}}),t._v(" "),i("radialGradient",{attrs:{id:"wheelDarken",cx:"0",cy:"0",r:"1000",gradientUnits:"userSpaceOnUse"}},[i("stop",{staticStyle:{"stop-color":"transparent"},attrs:{offset:"0"}}),t._v(" "),i("stop",{staticStyle:{"stop-color":"transparent"},attrs:{offset:"0.85"}}),t._v(" "),i("stop",{staticStyle:{"stop-color":"rgba(0, 0, 0,0.25)"},attrs:{offset:"1"}})],1),t._v(" "),i("circle",{staticClass:"circle-outer",attrs:{cx:"0",cy:"0",r:"1000","stroke-width":"70",fill:"url(#wheelDarken)"}}),t._v(" "),t._l(t.config.sections.length,(function(n){return i("circle",{staticClass:"segment-pin",attrs:{cx:1e3*Math.cos(360/t.config.sections.length*Math.PI/180/2+Math.PI+360/t.config.sections.length*Math.PI/180*n),cy:1e3*Math.sin(360/t.config.sections.length*Math.PI/180/2+Math.PI+360/t.config.sections.length*Math.PI/180*n),r:"20","stroke-width":"0"}})}))],2),t._v(" "),i("g",{attrs:{transform:"translate(1300,1300)"}},[i("circle",{staticClass:"circle-outer",attrs:{cx:"0",cy:"0",r:"1200","stroke-width":"140",fill:"transparent"}}),t._v(" "),t._l(t.config.sections,(function(n,e){return i("radialGradient",{key:e,attrs:{id:"LOUTER"+e,cx:"0",cy:"0",r:"100",gradientUnits:"userSpaceOnUse"}},[i("stop",{style:"stop-color: "+n.backgroundColor+";",attrs:{offset:"0"}}),t._v(" "),i("stop",{style:"stop-color: "+n.backgroundColor+"aa;",attrs:{offset:"0.025"}}),t._v(" "),i("stop",{style:"stop-color: "+n.backgroundColor+"00;",attrs:{offset:"1"}})],1)})),t._v(" "),t._l(2*t.config.sections.length-1,(function(n){return i("g",{attrs:{transform:"rotate("+(360/(2*t.config.sections.length)*n).toFixed(2)+") translate(-1200,0)"}},[i("circle",{staticClass:"led-outer",attrs:{cx:"0",cy:"0",r:"40","stroke-width":"0",filter:"url(#ledBrightness)",fill:t.getLedOuterFill(n)}}),t._v(" "),i("circle",{staticClass:"led-outer-light",attrs:{cx:"0",cy:"0",r:"100","stroke-width":"0",filter:"url(#ledBrightness)",fill:"url(#LOUTER"+((n+t.animation.ledPanelOffset-1)%t.config.sections.length+1)+")"}})])})),t._v(" "),t._l(2*t.config.sections.length,(function(n){return i("g",{attrs:{transform:"rotate("+(360/(2*t.config.sections.length)*n-360/(2*t.config.sections.length)/2).toFixed(2)+") translate(-1200,0)"}},[i("path",{staticClass:"outer-pin",attrs:{"stroke-width":"0",d:"M 20 0 6 6 0 20 -6 6 -20 0 -6 -6 0 -20 6 -6Z"}})])})),t._v(" "),i("g",{attrs:{transform:"translate(-1150,0) rotate(-"+t.animation.lAngle+")"}},[i("path",{staticClass:"stopper-body",attrs:{filter:"url(#l_blur)",fill:"white","stroke-width":"0",stroke:"black",d:"\n                            M178 -5\n                            28 -70\n                            A75 75 0 1 0 28 70\n                            L 178 5\n                            A18 10 0 0 0 178 -5\n                            Z"}}),t._v(" "),i("circle",{staticClass:"stopper-pin",attrs:{cx:"0",cy:"0",r:"60","stroke-width":"0",fill:"#ff0000"}}),t._v(" "),i("circle",{staticClass:"stopper-pin-inner",attrs:{cx:"0",cy:"0",r:"20","stroke-width":"0",fill:"#00ff00"}})])],2)])])])]):i("div",{staticClass:"d-flex justify-center fill-height align-center"},[i("block-preloader")],1),t._v(" "),i("play-controls",{attrs:{loading:t.loading,playing:t.playing},on:{play:t.play}})],1)}),[],!1,null,"6bf42650",null);n.default=B.exports},OY7U:function(t,n,i){"use strict";var e=i("g6NE");var a={computed:{gamePackageId:function(){return this.$route.params.game},provablyFairGame:function(){return this.$store.getters["provably-fair/get"](this.gamePackageId)||{}}},methods:{getRoute:function(t){return n="games.".concat(this.gamePackageId,".").concat(t),e.a.getters["route/get"](n);var n}}},s=i("KHd+"),o=Object(s.a)(a,void 0,void 0,!1,null,null,null);n.a=o.exports},UPN4:function(t,n,i){t.exports=i.p+"audio/lucky-wheel/win.wav"},VA6O:function(t,n,i){t.exports=i.p+"audio/common/click.wav"},XFUV:function(t,n,i){t.exports=i.p+"audio/lucky-wheel/lose.wav"},Ya0m:function(t,n,i){t.exports=i.p+"audio/lucky-wheel/clack.wav"},Ya2c:function(t,n,i){"use strict";var e=i("97M8");i.n(e).a},eYAC:function(t,n,i){(t.exports=i("I1BE")(!1)).push([t.i,".loader[data-v-15bf5aea] {\n  width: 150px;\n}",""])},ftgy:function(t,n,i){t.exports=i.p+"audio/lucky-wheel/start.wav"},j8E2:function(t,n,i){"use strict";var e=i("F5qV");i.n(e).a}}]);
//# sourceMappingURL=lucky-wheel-resources-js-pages-game.js.map