function e(){return(e=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function t(e,r){return(t=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function i(e,r,a){return(i=n()?Reflect.construct:function(e,r,n){var i=[null];i.push.apply(i,r);var a=new(Function.bind.apply(e,i));return n&&t(a,n.prototype),a}).apply(null,arguments)}function a(e){var n="function"==typeof Map?new Map:void 0;return(a=function(e){if(null===e||(a=e,-1===Function.toString.call(a).indexOf("[native code]")))return e;var a;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,s)}function s(){return i(e,arguments,r(this).constructor)}return s.prototype=Object.create(e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),t(s,e)})(e)}var s=/%[sdj%]/g,o=function(){};function u(e){if(!e||!e.length)return null;var r={};return e.forEach((function(e){var t=e.field;r[t]=r[t]||[],r[t].push(e)})),r}function f(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var n=1,i=r[0],a=r.length;if("function"==typeof i)return i.apply(null,r.slice(1));if("string"==typeof i){var o=String(i).replace(s,(function(e){if("%%"===e)return"%";if(n>=a)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}break;default:return e}}));return o}return i}function l(e,r){return null==e||(!("array"!==r||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"date"===e||"pattern"===e}(r)||"string"!=typeof e||e))}function c(e,r,t){var n=0,i=e.length;!function a(s){if(s&&s.length)t(s);else{var o=n;n+=1,o<i?r(e[o],a):t([])}}([])}"undefined"!=typeof process&&process.env&&"production"!==process.env.NODE_ENV&&"undefined"!=typeof window&&"undefined"!=typeof document&&(o=function(e,r){"undefined"!=typeof console&&console.warn&&r.every((function(e){return"string"==typeof e}))&&console.warn(e,r)});var d=function(e){var r,t;function n(r,t){var n;return(n=e.call(this,"Async Validation Error")||this).errors=r,n.fields=t,n}return t=e,(r=n).prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t,n}(a(Error));function p(e,r,t,n){if(r.first){var i=new Promise((function(r,i){c(function(e){var r=[];return Object.keys(e).forEach((function(t){r.push.apply(r,e[t])})),r}(e),t,(function(e){return n(e),e.length?i(new d(e,u(e))):r()}))}));return i.catch((function(e){return e})),i}var a=r.firstFields||[];!0===a&&(a=Object.keys(e));var s=Object.keys(e),o=s.length,f=0,l=[],p=new Promise((function(r,i){var p=function(e){if(l.push.apply(l,e),++f===o)return n(l),l.length?i(new d(l,u(l))):r()};s.length||(n(l),r()),s.forEach((function(r){var n=e[r];-1!==a.indexOf(r)?c(n,t,p):function(e,r,t){var n=[],i=0,a=e.length;function s(e){n.push.apply(n,e),++i===a&&t(n)}e.forEach((function(e){r(e,s)}))}(n,t,p)}))}));return p.catch((function(e){return e})),p}function y(e){return function(r){return r&&r.message?(r.field=r.field||e.fullField,r):{message:"function"==typeof r?r():r,field:r.field||e.fullField}}}function h(r,t){if(t)for(var n in t)if(t.hasOwnProperty(n)){var i=t[n];"object"==typeof i&&"object"==typeof r[n]?r[n]=e(e({},r[n]),i):r[n]=i}return r}function g(e,r,t,n,i,a){!e.required||t.hasOwnProperty(e.field)&&!l(r,a||e.type)||n.push(f(i.messages.required,e.fullField))}var m={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},v={integer:function(e){return v.number(e)&&parseInt(e,10)===e},float:function(e){return v.number(e)&&!v.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(e){return!1}},date:function(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear&&!isNaN(e.getTime())},number:function(e){return!isNaN(e)&&"number"==typeof e},object:function(e){return"object"==typeof e&&!v.array(e)},method:function(e){return"function"==typeof e},email:function(e){return"string"==typeof e&&!!e.match(m.email)&&e.length<255},url:function(e){return"string"==typeof e&&!!e.match(m.url)},hex:function(e){return"string"==typeof e&&!!e.match(m.hex)}};var b={required:g,whitespace:function(e,r,t,n,i){(/^\s+$/.test(r)||""===r)&&n.push(f(i.messages.whitespace,e.fullField))},type:function(e,r,t,n,i){if(e.required&&void 0===r)g(e,r,t,n,i);else{var a=e.type;["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(a)>-1?v[a](r)||n.push(f(i.messages.types[a],e.fullField,e.type)):a&&typeof r!==e.type&&n.push(f(i.messages.types[a],e.fullField,e.type))}},range:function(e,r,t,n,i){var a="number"==typeof e.len,s="number"==typeof e.min,o="number"==typeof e.max,u=r,l=null,c="number"==typeof r,d="string"==typeof r,p=Array.isArray(r);if(c?l="number":d?l="string":p&&(l="array"),!l)return!1;p&&(u=r.length),d&&(u=r.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length),a?u!==e.len&&n.push(f(i.messages[l].len,e.fullField,e.len)):s&&!o&&u<e.min?n.push(f(i.messages[l].min,e.fullField,e.min)):o&&!s&&u>e.max?n.push(f(i.messages[l].max,e.fullField,e.max)):s&&o&&(u<e.min||u>e.max)&&n.push(f(i.messages[l].range,e.fullField,e.min,e.max))},enum:function(e,r,t,n,i){e.enum=Array.isArray(e.enum)?e.enum:[],-1===e.enum.indexOf(r)&&n.push(f(i.messages.enum,e.fullField,e.enum.join(", ")))},pattern:function(e,r,t,n,i){if(e.pattern)if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(r)||n.push(f(i.messages.pattern.mismatch,e.fullField,r,e.pattern));else if("string"==typeof e.pattern){new RegExp(e.pattern).test(r)||n.push(f(i.messages.pattern.mismatch,e.fullField,r,e.pattern))}}};function q(e,r,t,n,i){var a=e.type,s=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r,a)&&!e.required)return t();b.required(e,r,n,s,i,a),l(r,a)||b.type(e,r,n,s,i)}t(s)}var w={string:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r,"string")&&!e.required)return t();b.required(e,r,n,a,i,"string"),l(r,"string")||(b.type(e,r,n,a,i),b.range(e,r,n,a,i),b.pattern(e,r,n,a,i),!0===e.whitespace&&b.whitespace(e,r,n,a,i))}t(a)},method:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();b.required(e,r,n,a,i),void 0!==r&&b.type(e,r,n,a,i)}t(a)},number:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(""===r&&(r=void 0),l(r)&&!e.required)return t();b.required(e,r,n,a,i),void 0!==r&&(b.type(e,r,n,a,i),b.range(e,r,n,a,i))}t(a)},boolean:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();b.required(e,r,n,a,i),void 0!==r&&b.type(e,r,n,a,i)}t(a)},regexp:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();b.required(e,r,n,a,i),l(r)||b.type(e,r,n,a,i)}t(a)},integer:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();b.required(e,r,n,a,i),void 0!==r&&(b.type(e,r,n,a,i),b.range(e,r,n,a,i))}t(a)},float:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();b.required(e,r,n,a,i),void 0!==r&&(b.type(e,r,n,a,i),b.range(e,r,n,a,i))}t(a)},array:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(null==r&&!e.required)return t();b.required(e,r,n,a,i,"array"),null!=r&&(b.type(e,r,n,a,i),b.range(e,r,n,a,i))}t(a)},object:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();b.required(e,r,n,a,i),void 0!==r&&b.type(e,r,n,a,i)}t(a)},enum:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();b.required(e,r,n,a,i),void 0!==r&&b.enum(e,r,n,a,i)}t(a)},pattern:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r,"string")&&!e.required)return t();b.required(e,r,n,a,i),l(r,"string")||b.pattern(e,r,n,a,i)}t(a)},date:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r,"date")&&!e.required)return t();var s;if(b.required(e,r,n,a,i),!l(r,"date"))s=r instanceof Date?r:new Date(r),b.type(e,s,n,a,i),s&&b.range(e,s.getTime(),n,a,i)}t(a)},url:q,hex:q,email:q,required:function(e,r,t,n,i){var a=[],s=Array.isArray(r)?"array":typeof r;b.required(e,r,n,a,i,s),t(a)},any:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();b.required(e,r,n,a,i)}t(a)}};function O(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var _=O();function x(e){this.rules=null,this._messages=_,this.define(e)}function F(e,r,t,n,i,a,s,o,u,f){"boolean"!=typeof s&&(u=o,o=s,s=!1);const l="function"==typeof t?t.options:t;let c;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,i&&(l.functional=!0)),n&&(l._scopeId=n),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,u(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=c):r&&(c=s?function(e){r.call(this,f(e,this.$root.$options.shadowRoot))}:function(e){r.call(this,o(e))}),c)if(l.functional){const e=l.render;l.render=function(r,t){return c.call(t),e(r,t)}}else{const e=l.beforeCreate;l.beforeCreate=e?[].concat(e,c):[c]}return t}x.prototype={messages:function(e){return e&&(this._messages=h(O(),e)),this._messages},define:function(e){if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!=typeof e||Array.isArray(e))throw new Error("Rules must be an object");var r,t;for(r in this.rules={},e)e.hasOwnProperty(r)&&(t=e[r],this.rules[r]=Array.isArray(t)?t:[t])},validate:function(r,t,n){var i=this;void 0===t&&(t={}),void 0===n&&(n=function(){});var a,s,o=r,l=t,c=n;if("function"==typeof l&&(c=l,l={}),!this.rules||0===Object.keys(this.rules).length)return c&&c(),Promise.resolve();if(l.messages){var d=this.messages();d===_&&(d=O()),h(d,l.messages),l.messages=d}else l.messages=this.messages();var g={};(l.keys||Object.keys(this.rules)).forEach((function(t){a=i.rules[t],s=o[t],a.forEach((function(n){var a=n;"function"==typeof a.transform&&(o===r&&(o=e({},o)),s=o[t]=a.transform(s)),(a="function"==typeof a?{validator:a}:e({},a)).validator=i.getValidationMethod(a),a.field=t,a.fullField=a.fullField||t,a.type=i.getType(a),a.validator&&(g[t]=g[t]||[],g[t].push({rule:a,value:s,source:o,field:t}))}))}));var m={};return p(g,l,(function(r,t){var n,i=r.rule,a=!("object"!==i.type&&"array"!==i.type||"object"!=typeof i.fields&&"object"!=typeof i.defaultField);function s(r,t){return e(e({},t),{},{fullField:i.fullField+"."+r})}function o(n){void 0===n&&(n=[]);var o=n;if(Array.isArray(o)||(o=[o]),!l.suppressWarning&&o.length&&x.warning("async-validator:",o),o.length&&void 0!==i.message&&(o=[].concat(i.message)),o=o.map(y(i)),l.first&&o.length)return m[i.field]=1,t(o);if(a){if(i.required&&!r.value)return void 0!==i.message?o=[].concat(i.message).map(y(i)):l.error&&(o=[l.error(i,f(l.messages.required,i.field))]),t(o);var u={};if(i.defaultField)for(var c in r.value)r.value.hasOwnProperty(c)&&(u[c]=i.defaultField);for(var d in u=e(e({},u),r.rule.fields))if(u.hasOwnProperty(d)){var p=Array.isArray(u[d])?u[d]:[u[d]];u[d]=p.map(s.bind(null,d))}var h=new x(u);h.messages(l.messages),r.rule.options&&(r.rule.options.messages=l.messages,r.rule.options.error=l.error),h.validate(r.value,r.rule.options||l,(function(e){var r=[];o&&o.length&&r.push.apply(r,o),e&&e.length&&r.push.apply(r,e),t(r.length?r:null)}))}else t(o)}a=a&&(i.required||!i.required&&r.value),i.field=r.field,i.asyncValidator?n=i.asyncValidator(i,r.value,o,r.source,l):i.validator&&(!0===(n=i.validator(i,r.value,o,r.source,l))?o():!1===n?o(i.message||i.field+" fails"):n instanceof Array?o(n):n instanceof Error&&o(n.message)),n&&n.then&&n.then((function(){return o()}),(function(e){return o(e)}))}),(function(e){!function(e){var r,t,n,i=[],a={};for(r=0;r<e.length;r++)t=e[r],n=void 0,Array.isArray(t)?i=(n=i).concat.apply(n,t):i.push(t);i.length?a=u(i):(i=null,a=null),c(i,a)}(e)}))},getType:function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!w.hasOwnProperty(e.type))throw new Error(f("Unknown rule type %s",e.type));return e.type||"string"},getValidationMethod:function(e){if("function"==typeof e.validator)return e.validator;var r=Object.keys(e),t=r.indexOf("message");return-1!==t&&r.splice(t,1),1===r.length&&"required"===r[0]?w.required:w[this.getType(e)]||!1}},x.register=function(e,r){if("function"!=typeof r)throw new Error("Cannot register a validator by type, validator is not a function");w[e]=r},x.warning=o,x.messages=_,x.validators=w;const j=F({render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("label",[e._v(e._s(e.label))]),e._v(" "),t("div",[e._t("default"),e._v(" "),e.errMessage?t("p",[e._v(e._s(e.errMessage))]):e._e()],2)])},staticRenderFns:[]},undefined,{name:"DrtFormItem",inject:["form"],props:{label:{type:String},prop:{type:String}},data:()=>({errMessage:""}),mounted(){this.$on("validate",(()=>{this.validate()}))},methods:{validate(){if(!this.prop)return;const e=this.form.model[this.prop],r=this.form.rules[this.prop];return new x({[this.prop]:r}).validate({[this.prop]:e},(e=>{this.errMessage=e?e[0].message:""}))}}},undefined,false,undefined,!1,void 0,void 0,void 0);j.install=e=>{e.component(j.name,j)};export default j;
