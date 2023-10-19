(function(){"use strict";var __webpack_modules__={3851:function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.Z={name:"CalculatorPage",data(){return{result:"",operator:"",firstValue:"",secondValue:"",calcButtons:["C","+","-","*","="],calcNumbers:["0","1","2","3","4","5","6","7","8","9"]}},methods:{handleClick(element){let elementType=this.calcButtons.find((e=>e===element))?"symbol":"number";"C"===element&&(this.result="",this.firstValue=""),"="===element&&(this.result=eval(this.secondValue+this.operator+this.firstValue),this.firstValue=eval(this.secondValue+this.operator+this.firstValue),this.secondValue="",this.operator=""),"symbol"===elementType&&"C"!==element&&"="!==element&&(""===this.firstValue&&(this.result=""),""!==this.firstValue&&""!==this.secondValue?this.secondValue=eval(this.result):this.secondValue=this.firstValue,this.operator=element,this.firstValue="",this.result=this.secondValue+" "+this.operator+" "),"number"===elementType&&(this.firstValue+=element,this.result+=element)},handleChange(event){this.result=eval(event.target.value)}}}},6561:function(e,t,_){var r=_(6369),n=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("main",[t("CalculatorPage")],1),t("footer",{staticClass:"footer"},[e._v(" Тестовое приложение 2023 ")])])},a=[function(){var e=this,t=e._self._c;return t("header",{staticClass:"header"},[t("h2",[e._v("Calculator!")])])}],u=function(){var e=this,t=e._self._c;return t("article",{staticClass:"calculator"},[t("input",{staticClass:"calculator__input-style",domProps:{value:e.result},on:{change:function(t){return e.handleChange(t)}}}),t("section",{staticClass:"calculator__button-group"},[t("div",{staticClass:"calculator__button-group__symbol"},e._l(e.calcButtons,(function(_){return t("button",{key:_,staticClass:"calculator__symbol-button",on:{click:function(t){return e.handleClick(_)}}},[e._v(e._s(_))])})),0),t("div",{staticClass:"calculator__button-group__number"},e._l(e.calcNumbers,(function(_){return t("button",{key:_,staticClass:"calculator__number-button",on:{click:function(t){return e.handleClick(_)}}},[e._v(e._s(_))])})),0)])])},c=[],l=_(3851),i=l.Z,o=_(1001),s=(0,o.Z)(i,u,c,!1,null,null,null),p=s.exports,f={name:"App",components:{CalculatorPage:p}},b=f,h=(0,o.Z)(b,n,a,!1,null,null,null),k=h.exports;r.ZP.config.productionTip=!1,new r.ZP({render:e=>e(k)}).$mount("#app")}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var _=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(_.exports,_,_.exports,__webpack_require__),_.exports}__webpack_require__.m=__webpack_modules__,function(){var e=[];__webpack_require__.O=function(t,_,r,n){if(!_){var a=1/0;for(i=0;i<e.length;i++){_=e[i][0],r=e[i][1],n=e[i][2];for(var u=!0,c=0;c<_.length;c++)(!1&n||a>=n)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](_[c])}))?_.splice(c--,1):(u=!1,n<a&&(a=n));if(u){e.splice(i--,1);var l=r();void 0!==l&&(t=l)}}return t}n=n||0;for(var i=e.length;i>0&&e[i-1][2]>n;i--)e[i]=e[i-1];e[i]=[_,r,n]}}(),function(){__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return __webpack_require__.d(t,{a:t}),t}}(),function(){__webpack_require__.d=function(e,t){for(var _ in t)__webpack_require__.o(t,_)&&!__webpack_require__.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:t[_]})}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};__webpack_require__.O.j=function(t){return 0===e[t]};var t=function(t,_){var r,n,a=_[0],u=_[1],c=_[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(r in u)__webpack_require__.o(u,r)&&(__webpack_require__.m[r]=u[r]);if(c)var i=c(__webpack_require__)}for(t&&t(_);l<a.length;l++)n=a[l],__webpack_require__.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return __webpack_require__.O(i)},_=self["webpackChunkcalculator"]=self["webpackChunkcalculator"]||[];_.forEach(t.bind(null,0)),_.push=t.bind(null,_.push.bind(_))}();var __webpack_exports__=__webpack_require__.O(void 0,[998],(function(){return __webpack_require__(6561)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.6a818a3b.js.map