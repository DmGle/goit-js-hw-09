!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i),i.register;var r=i("6JpON");document.addEventListener("DOMContentLoaded",function(){document.querySelector(".form").addEventListener("submit",function(n){n.preventDefault();for(var t=parseInt(this.elements.delay.value,10),o=parseInt(this.elements.step.value,10),i=parseInt(this.elements.amount.value,10),a=1;a<=i;a++){var c=t+(a-1)*o;(function(e,n){return new Promise(function(t,o){var i=Math.random()>.3;setTimeout(function(){i?t({position:e,delay:n}):o({position:e,delay:n})},n)})})(a,c).then(function(n){var t=n.position,o=n.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms")),/*@__PURE__*/e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))}).catch(function(n){var t=n.position,o=n.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(o,"ms")),/*@__PURE__*/e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})}})})}();//# sourceMappingURL=03-promises.0192c6c1.js.map

//# sourceMappingURL=03-promises.0192c6c1.js.map
