!function(){function t(t){return t&&t.__esModule?t.default:t}var e=document.querySelector(".header__bar-thumb");window.addEventListener("scroll",(function(t){var r=document.body.scrollTop||document.documentElement.scrollTop,n=document.documentElement.scrollHeight-document.documentElement.clientHeight,o=r/n*100;e.style.width=o+"%"}));new Swiper(".mySwiper",{slidesPerView:2,slidesPerGroup:2,spaceBetween:180,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var r={};function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}};var o={},i=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return I()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=S(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function y(){}function m(){}function g(){}var w={};u(w,i,(function(){return this}));var L=Object.getPrototypeOf,b=L&&L(L(k([])));b&&b!==r&&n.call(b,i)&&(w=b);var _=g.prototype=y.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function k(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:I}}function I(){return{value:e,done:!0}}return m.prototype=g,u(_,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},x(E.prototype),u(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(_),u(_,c,"Generator"),u(_,i,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(o);try{regeneratorRuntime=i}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}function a(t){localStorage.setItem("usersPosts",JSON.stringify(t))}function c(){var t=localStorage.getItem("usersPosts");return JSON.parse(t)}function u(t){var e=t.title,r=t.body,n=t.id,o=t.userId;return' <li class="posts__list-item" id=\''.concat(n,"' userId=\"").concat(o,'" >\n      <h3 class="posts__list-title">').concat(e,'</h3>\n      <p class="posts__list-text">\n        ').concat(r[0].toUpperCase()+r.slice(1),"\n      </p>\n    </li>")}function s(t){var e=[],r=0,n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done);n=!0){var s=a.value;if(r>=5)break;e.push(s),r+=1}}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return e.map(u).join("")}var l=document.querySelector(".posts__list"),f=document.querySelector(".posts__buttons"),h="https://jsonplaceholder.typicode.com/posts",p="all";function d(){return d=t(r)(t(o).mark((function e(){var n,i;return t(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[1,2,3].map(function(){var e=t(r)(t(o).mark((function e(r){var n;return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(h,"?userId=").concat(r));case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=4,Promise.all(n);case 4:return i=e.sent,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function v(t){l.innerHTML=t}function y(t){return!(t.split(" ").length>1)}function m(t){return!!/^[a-zA-Z]+$/.test(t)}function g(t,e){var r=document.querySelector("input[name=".concat(t,"]")),n=document.querySelector("input[name=".concat(t,"] + span")),o=function(){r.classList.add("shake");r.addEventListener("animationend",(function(){return r.classList.remove("shake")}),{once:!0})};return y(e)?m(e)?(console.log(!m(e)),n.innerHTML="",r.classList.remove("error"),!0):(n.innerHTML="".concat(t[0].toUpperCase()+t.slice(1)," must consist only of Latin letters"),r.classList.add("error"),o(),!1):(n.innerHTML="".concat(t[0].toUpperCase()+t.slice(1)," must be composed of only one word"),r.classList.add("error"),o(),!1)}function w(t){var e=JSON.stringify(t);localStorage.setItem("form",e)}f.addEventListener("click",(function(t){var e=t.target;if(e){if("BUTTON"!==e.tagName)return;var r=e.getAttribute("userId"),n=c();if("all"!==p&&p===r)return v(s(n.map((function(t){return t[0]})))),void(p="all");if("all"===r)return void v(s(n.map((function(t){return t[0]}))));var o=!0,i=!1,a=void 0;try{for(var u,l=n[Symbol.iterator]();!(o=(u=l.next()).done);o=!0){if(u.value[0].userId===parseInt(r))return v(s(n.filter((function(t){return t[0].userId===parseInt(r)}))[0])),void(p=r)}}catch(t){i=!0,a=t}finally{try{o||null==l.return||l.return()}finally{if(i)throw a}}}})),function(){return d.apply(this,arguments)}().then((function(t){v(t.map((function(t){return u(t[0])})).join("")),a(t)}));var L=document.querySelector(".forget__form");L.addEventListener("submit",(function(t){t.preventDefault();var e=["name","surname"],r={validly:!0},n=new FormData(L);for(var o in n.forEach((function(t,e){r[e]=t.trim()})),r)e.includes(o)&&(g(o,r[o])||(r.validly=!1));r.validly&&w(r)}));var b=document.querySelector(".footer__copyright-year"),_=(new Date).getFullYear();b.innerHTML=_,document.querySelector(".header__nav-list").addEventListener("click",(function(t){t.preventDefault();var e,r=t.target,n=r.getAttribute("href"),o=document.querySelector(n);"A"===r.tagName&&(e=o,console.log(e.offsetTop),window.scrollTo({left:0,top:e.offsetTop,behavior:"smooth"}))}))}();
//# sourceMappingURL=index.6c1593c0.js.map
