(()=>{var n={426:(n,e,t)=>{"use strict";t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"* {\n  box-sizing: border-box;\n}\n\n\nbody {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  background-color: #d1c6f3;\n  font-family: system-ui, sans-serif;  \n}\n\n.calculator {\n  display: flex;\n  height: 305px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.8 rem;\n  border-radius: 4px;\n  border: 13px solid #F1EAD6;\n  border-top-color: #ECE4C2;\n  border-bottom-color: #F4EFDC;\n  outline: 3px solid rgba(93, 72, 15, 0.2);\n  outline-offset: -1px;\n  background-color: #FCF7E4;\n}\n\n\n.screen{\n\theight:40px;\n  width:169px;\n\tmargin: 5px 3px 10px 3px;\n\tpadding-right: 6px;\n  /* 숫자 입력란이 너무 붙어서 좀 띄어놓음 */\n\tbackground:#afafaf;\n\ttext-align: right;\n  font-weight: 600;\n\tborder-radius: 4px;\n\tborder:1px solid #6B6B6B;\n\tfont:\"Trebuchet MS\", Arial, Helvetica, sans-serif;\n\tbox-shadow:inset 0 0 10px #333,\n\tinset 0 1px 1px #0a0b0d1c, 0px 1px #E6E6E6;\n} \n\n.keyboard {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 3px;\n  border-top: 2px solid rgb(58, 45, 9);\n  border-left: 2px solid rgb(58, 45, 9);\n  border-right: 2px solid rgb(58, 45, 9);\n}\n\n.row {\n  height: 43px;\n  width: 166px;\n  padding-top: 0.5px;\n  display: -webkit-box;\n  display: flex;\n  flex-direction: row;\n  /* 옆으로 늘어뜨리자 */\n  justify-content: space-between;  \n  background: rgb(58, 45, 9);\n}\n\nkbd {\n  border-radius: 3px;\n  box-sizing: border-box;\n  color: rgba(0, 0, 0, 0.75);\n  display: inline-block;\n  font-family: system-ui, sans-serif;\n  font-size: 0.8rem;\n  font-weight: 800;\n  line-height: 1.125;\n  padding: 0.33em 0.66em;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 40px;\n  height: 40px;\n  border: 3px solid transparent;\n  border-top: 2px solid transparent;\n  border-bottom: 6px solid transparent;\n  background-color: #FCF7E8;\n  border-color: #EDE5C3;\n  border-top-color: #FBF4D9;\n  border-bottom-color: #E1D8B9;\n  box-shadow: 0 -0.125em 0 -0.063em #a6a29a, 0 0.125em 0 -0.063em rgba(0, 0, 0, 0.5);\n  transition: -webkit-transform 100ms;\n  transition: transform 100ms;\n  transition: transform 100ms, -webkit-transform 100ms;\n  outline: 0;\n}\nkbd::before {\n  content: '';\n  position: absolute;\n  top: 0px;\n  left: -1px;\n  bottom: -1px;\n  right: -1px;\n  border-radius: 4px;\n  border-left: 1px solid transparent;\n  border-right: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n}\nkbd::before {\n  border-left-color: #C8C1A5;\n  border-right-color: #C8C1A5;\n  border-bottom-color: #E0D8B8;\n  box-shadow: 0 4px 4px -3px rgba(0, 0, 0, 0.15);\n  background-image: linear-gradient(to right, #FEFBF0, #e1d8b96e 1%, transparent 50%, transparent 0%, #e1d8b96e 99%, #FEFBF0);\n}\nkbd:active, kbd.pressed {\n           transform: scale(0.98, 0.98) translate(0, 2px);\n}\n/* active는 마우스 버튼을 누르는 순간부터 떼는 시점 */\n\nkbd[data-key]::after {\n  position: relative;\n  top: 3px;\n  z-index: 1;   /* 제일 위에 */\n  font-style: normal;\n  content: attr(data-key);\n}",""]);const s=i},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{"use strict";n.exports=function(n){return n[1]}},654:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>v});var r=t(379),o=t.n(r),a=t(795),i=t.n(a),s=t(569),d=t.n(s),c=t(565),l=t.n(c),p=t(216),u=t.n(p),f=t(589),b=t.n(f),x=t(426),m={};m.styleTagTransform=b(),m.setAttributes=l(),m.insert=d().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=u(),o()(x.Z,m);const v=x.Z&&x.Z.locals?x.Z.locals:void 0},379:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var d=n[s],c=r.base?d[0]+r.base:d[0],l=a[c]||0,p="".concat(c," ").concat(l);a[c]=l+1;var u=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var b=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:b,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var d=r(n,o),c=0;c<a.length;c++){var l=t(a[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.nc=void 0,(()=>{t(654);var n=function(n){return document.querySelector("kbd[data-key='"+n+"'], kbd[data-alt='"+n+"']")},e={Delete:n("✖"),Escape:n("✖"),Backspace:n("◀"),Slash:n("÷"),Minus:n("−"),NumpadMultiply:n("×"),KeyX:n("×"),Minus:n("−"),Enter:n("="),Space:n("=")};window.addEventListener("keydown",(function(t){console.log(t);var r=e[t.code]||n(t.key.toLowerCase());if(r)return r.classList.add("pressed"),t.preventDefault(),r})),window.addEventListener("keyup",(function(t){var r=e[t.code]||n(t.key.toLowerCase());r&&(r.classList.remove("pressed"),t.preventDefault())}))})()})();