import { r as registerInstance, e as Build, h } from './index-9fe124a3.js';
import { c as createCommonjsModule, a as commonjsGlobal, g as getDefaultExportFromCjs } from './_commonjsHelpers-9bc404fc.js';
import { P as Prismic } from './prismic-javascript.min-4227ad8e.js';
import { t as trackView, a as trackClick } from './tracking-service-c64257af.js';

var prismicDom_min = createCommonjsModule(function (module, exports) {
!function(e,t){"object"=='object'&&"object"=='object'?module.exports=t():"function"==typeof undefined&&undefined.amd?undefined("PrismicDOM",[],t):"object"=='object'?exports.PrismicDOM=t():e.PrismicDOM=t();}("undefined"!=typeof self?self:commonjsGlobal,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1);},function(e,t,n){var r=n(2),o=n(3);e.exports={Link:r,Date:o};},function(e,t,n){e.exports={url:function(e,t){var n=e&&e.value?e.value.document:e;if(e&&[e.type,e.link_type,e._linkType,e.linkType].some((function(e){return e&&["Document","Link.Document","Link.document"].includes(e)}))&&t&&"function"==typeof t){var r=t(n);if(r)return r}return n&&n.url?n.url:""}};},function(e,t){e.exports=function(e){if(!e)return null;var t=24==e.length?"".concat(e.substring(0,22),":").concat(e.substring(22,24)):e;return new Date(t)};}]);},function(e,t,n){e.exports=n(2);},function(e,t,n){var r=n(0),o=n(3),i=r.Date,u=r.Link;e.exports={Date:i,Link:u,RichText:o};},function(e,t,n){var r=n(4),o=n(0).Link,i=n(5),u=r.Elements;function c(e,t,n,r,c){switch(t){case u.heading1:return l("h1",n,c);case u.heading2:return l("h2",n,c);case u.heading3:return l("h3",n,c);case u.heading4:return l("h4",n,c);case u.heading5:return l("h5",n,c);case u.heading6:return l("h6",n,c);case u.paragraph:return l("p",n,c);case u.preformatted:return function(e){return "<pre".concat(a(e),">").concat(i(e.text),"</pre>")}(n);case u.strong:return l("strong",n,c);case u.em:return l("em",n,c);case u.listItem:case u.oListItem:return l("li",n,c);case u.list:return l("ul",n,c);case u.oList:return l("ol",n,c);case u.image:return function(e,t){var n=t.linkTo?o.url(t.linkTo,e):null,r=t.linkTo&&t.linkTo.target?'target="'.concat(t.linkTo.target,'" rel="noopener"'):"",i=[t.label||"","block-img"],u='<img src="'.concat(t.url,'" alt="').concat(t.alt||"",'" copyright="').concat(t.copyright||"",'">');return '\n    <p class="'.concat(i.join(" "),'">\n      ').concat(n?"<a ".concat(r,' href="').concat(n,'">').concat(u,"</a>"):u,"\n    </p>\n  ")}(e,n);case u.embed:return function(e){return '\n    <div data-oembed="'.concat(e.oembed.embed_url,'"\n      data-oembed-type="').concat(e.oembed.type,'"\n      data-oembed-provider="').concat(e.oembed.provider_name,'"\n      ').concat(a(e),">\n          \n      ").concat(e.oembed.html,"\n    </div>\n  ")}(n);case u.hyperlink:return function(e,t,n){var r=t.data.target?'target="'.concat(t.data.target,'" rel="noopener"'):"";return "<a ".concat(r,' href="').concat(o.url(t.data,e),'">').concat(n.join(""),"</a>")}(e,n,c);case u.label:return function(e,t){return "<span ".concat(a(e.data),">").concat(t.join(""),"</span>")}(n,c);case u.span:return function(e){return e?i(e).replace(/\n/g,"<br />"):""}(r);default:return ""}}function a(e){return e.label?' class="'.concat(e.label,'"'):""}function l(e,t,n){return "<".concat(e).concat(a(t),">").concat(n.join(""),"</").concat(e,">")}e.exports={asText:function(e,t){return r.asText(e,t)},asHtml:function(e,t,n){return r.serialize(e,c.bind(null,t),n).join("")},Elements:u};},function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";var r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.PRIORITIES=t.NODE_TYPES=void 0;var i={heading1:"heading1",heading2:"heading2",heading3:"heading3",heading4:"heading4",heading5:"heading5",heading6:"heading6",paragraph:"paragraph",preformatted:"preformatted",strong:"strong",em:"em",listItem:"list-item",oListItem:"o-list-item",list:"group-list-item",oList:"group-o-list-item",image:"image",embed:"embed",hyperlink:"hyperlink",label:"label",span:"span"};t.NODE_TYPES=i;var u=(o(r={},i.heading1,4),o(r,i.heading2,4),o(r,i.heading3,4),o(r,i.heading4,4),o(r,i.heading5,4),o(r,i.heading6,4),o(r,i.paragraph,3),o(r,i.preformatted,5),o(r,i.strong,6),o(r,i.em,6),o(r,i.oList,1),o(r,i.list,1),o(r,i.listItem,1),o(r,i.oListItem,1),o(r,i.image,1),o(r,i.embed,1),o(r,i.hyperlink,3),o(r,i.label,4),o(r,i.span,7),r);t.PRIORITIES=u;},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=n(7),i=n(2),u=n(8),c=n(0),a=(r=n(3))&&r.__esModule?r:{default:r};function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}function s(e){if(0===e.length)throw new Error("Unable to elect node on empty list");var t=function(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(e.sort((function(e,t){if(e.isParentOf(t))return -1;if(t.isParentOf(e))return 1;var n=c.PRIORITIES[e.type]-c.PRIORITIES[t.type];return 0===n?e.text.length-t.text.length:n})));return {elected:t[0],others:t.slice(1)}}function f(e,t,n){if(t.length>0)return function(e,t,n){return t.reduce((function(r,o,u){var c=[],a=0===u&&o.start>n.lower,l=u===t.length-1&&n.upper>o.end;if(a){var s=new i.TextNode(n.lower,o.start,e.slice(n.lower,o.start));c=c.concat(s);}else {var f=t[u-1];if(f&&o.start>f.end){var d=e.slice(f.end,o.start),p=new i.TextNode(f.end,o.start,d);c=c.concat(p);}}if(c=c.concat(o),l){var y=new i.TextNode(o.end,n.upper,e.slice(o.end,n.upper));c=c.concat(y);}return r.concat(c)}),[])}(e,d(e,t),n);var r=e.slice(n.lower,n.upper);return [new i.TextNode(n.lower,n.upper,r)]}function d(e,t){var n=function(e){return function(e,t){return t.reduce((function(e,t){var n=(0,o.last)(e);if(n){if(n.some((function(e){return e.isParentOf(t)})))return (0,o.init)(e).concat([n.concat(t)]);var r=(0,o.last)(n);return r&&function(e,t){return e.end>=t.start}(r,t)?(0,o.init)(e).concat([n.concat(t)]):e.concat([[t]])}return [[t]]}),[])}(0,(0,o.sort)(e,(function(e,t){return n=t,e.start-n.start||function(e,t){return e.end-t.end}(e,t);var n;})))}((0,o.sort)(t,(function(e,t){return e.start-t.start}))).map(s),r=(0,o.flatten)(n.map((function(t){return function(e,t){var n=t.others.reduce((function(n,r){var o=n.inner,u=n.outer,c=function(e,t,n){return n.start<t.start?{inner:i.SpanNode.slice(n,t.start,n.end,e),outer:i.SpanNode.slice(n,n.start,t.start,e)}:n.end>t.end?{inner:i.SpanNode.slice(n,n.start,t.end,e),outer:i.SpanNode.slice(n,t.end,n.end,e)}:{inner:n}}(e,t.elected,r);return {inner:o.concat(c.inner),outer:c.outer?u.concat(c.outer):u}}),{inner:[],outer:[]}),r=n.inner,o=n.outer;return [t.elected.setChildren(f(e,r,t.elected.boundaries()))].concat(d(e,o))}(e,t)})));return (0,o.sort)(r,(function(e,t){return e.start-t.start}))}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);}var t,n;return t=e,(n=[{key:"fromRichText",value:function(e){return {key:(0,a.default)(),children:e.reduce((function(e,t,n){if(u.RichTextBlock.isEmbedBlock(t.type)||u.RichTextBlock.isImageBlock(t.type))return e.concat(new i.BlockNode(t.type,t));var r=function(e){var t=(e.spans||[]).map((function(t){var n=e.text.slice(t.start,t.end);return new i.SpanNode(t.start,t.end,t.type,n,[],t)})),n={lower:0,upper:e.text.length};return f(e.text,t,n)}(t),c=e[e.length-1];if(u.RichTextBlock.isListItem(t.type)&&c&&c instanceof i.ListBlockNode){var a=new i.ListItemBlockNode(t,r),l=c.addChild(a);return (0,o.init)(e).concat(l)}if(u.RichTextBlock.isOrderedListItem(t.type)&&c&&c instanceof i.OrderedListBlockNode){var s=new i.OrderedListItemBlockNode(t,r),d=c.addChild(s);return (0,o.init)(e).concat(d)}if(u.RichTextBlock.isListItem(t.type)){var p=new i.ListItemBlockNode(t,r),y=new i.ListBlockNode(u.RichTextBlock.emptyList(),[p]);return e.concat(y)}if(u.RichTextBlock.isOrderedListItem(t.type)){var h=new i.OrderedListItemBlockNode(t,r),v=new i.OrderedListBlockNode(u.RichTextBlock.emptyOrderedList(),[h]);return e.concat(v)}return e.concat(new i.BlockNode(t.type,t,r))}),[])}}}])&&l(t,n),e}();t.default=p;},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ListBlockNode=t.OrderedListBlockNode=t.OrderedListItemBlockNode=t.ListItemBlockNode=t.BlockNode=t.TextNode=t.SpanNode=t.Node=void 0;var r,o=(r=n(3))&&r.__esModule?r:{default:r},i=n(0);function u(e){return (u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}function a(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&function(e,t){(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t);}(e,t);}function s(e){return function(){var t,n=f(e);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return !1;if(Reflect.construct.sham)return !1;if("function"==typeof Proxy)return !0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return !1}}()){var r=f(this).constructor;t=Reflect.construct(n,arguments,r);}else t=n.apply(this,arguments);return function(e,t){return !t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,t)}}function f(e){return (f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var p=function e(t,n,r){d(this,e),this.key=(0,o.default)(),this.type=t,this.element=n,this.children=r;};t.Node=p;var y=function(e){l(n,p);var t=s(n);function n(e,r,o,i,u,c){var a;return d(this,n),(a=t.call(this,o,c,u)).start=e,a.end=r,a.text=i,a.children=u,a}return a(n,[{key:"boundaries",value:function(){return {lower:this.start,upper:this.end}}},{key:"isParentOf",value:function(e){return this.start<=e.start&&this.end>=e.end}},{key:"setChildren",value:function(e){return new n(this.start,this.end,this.type,this.text,e,this.element)}}],[{key:"slice",value:function(e,t,r,o){return new n(t,r,e.type,o.slice(t,r),e.children,e.element)}}]),n}();t.SpanNode=y;var h=function(e){l(n,y);var t=s(n);function n(e,r,o){d(this,n);var u={type:i.NODE_TYPES.span,start:e,end:r,text:o};return t.call(this,e,r,i.NODE_TYPES.span,o,[],u)}return n}();t.TextNode=h;var v=function(e){l(n,p);var t=s(n);function n(e,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return d(this,n),t.call(this,e,r,o)}return n}();t.BlockNode=v;var m=function(e){l(n,v);var t=s(n);function n(e,r){return d(this,n),t.call(this,i.NODE_TYPES.listItem,e,r)}return n}();t.ListItemBlockNode=m;var b=function(e){l(n,v);var t=s(n);function n(e,r){return d(this,n),t.call(this,i.NODE_TYPES.oListItem,e,r)}return n}();t.OrderedListItemBlockNode=b;var g=function(e){l(n,v);var t=s(n);function n(e,r){return d(this,n),t.call(this,i.NODE_TYPES.oList,e,r)}return a(n,[{key:"addChild",value:function(e){var t=this.children.concat(e);return new n(this.element,t)}}]),n}();t.OrderedListBlockNode=g;var x=function(e){l(n,v);var t=s(n);function n(e,r){return d(this,n),t.call(this,i.NODE_TYPES.list,e,r)}return a(n,[{key:"addChild",value:function(e){var t=this.children.concat(e);return new n(this.element,t)}}]),n}();t.ListBlockNode=x;},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=(new Date).getTime();return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)}))};},function(e,t,n){e.exports=n(5);},function(e,t,n){"use strict";var r=c(n(6)),o=c(n(1)),i=c(n(9)),u=n(0);function c(e){return e&&e.__esModule?e:{default:e}}e.exports={asText:r.default,asTree:o.default.fromRichText,serialize:i.default,Elements:u.NODE_TYPES};},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e,t){var n="string"==typeof t?t:" ";return e.map((function(e){return e.text})).join(n)};},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.init=function(e){return e.slice(0,-1)},t.last=function(e){return e[e.length-1]},t.flatten=function(e){var t=[],n=!0,r=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var c=i.value;Array.isArray(c)?t.push.apply(t,c):t.push(c);}}catch(e){r=!0,o=e;}finally{try{n||null==u.return||u.return();}finally{if(r)throw o}}return t},t.sort=function(e,t){return function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(e).sort(t)};},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RichTextBlock=void 0;var r=n(0);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}var i=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=t,this.text=n,this.spans=r;}var t,n;return t=e,(n=[{key:"isEmbedBlock",value:function(e){return e===r.NODE_TYPES.embed}},{key:"isImageBlock",value:function(e){return e===r.NODE_TYPES.image}},{key:"isList",value:function(e){return e===r.NODE_TYPES.list}},{key:"isOrderedList",value:function(e){return e===r.NODE_TYPES.oList}},{key:"isListItem",value:function(e){return e===r.NODE_TYPES.listItem}},{key:"isOrderedListItem",value:function(e){return e===r.NODE_TYPES.oListItem}},{key:"emptyList",value:function(){return {type:r.NODE_TYPES.list,spans:[],text:""}}},{key:"emptyOrderedList",value:function(){return {type:r.NODE_TYPES.oList,spans:[],text:""}}}])&&o(t,n),e}();t.RichTextBlock=i;},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(1))&&r.__esModule?r:{default:r},i=n(2);t.default=function(e,t,n){return o.default.fromRichText(e).children.map((function(e,r){return function(e,t,n,r){return function e(n,o){var u=n instanceof i.SpanNode?n.text:null,c=n.children.reduce((function(t,n,r){return t.concat([e(n,r)])}),[]);return r&&r(n.type,n.element,u,c,o)||t(n.type,n.element,u,c,o)}(e,n)}(e,t,r,n)}))};}]);},function(e,t,n){"use strict";
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var r=/["'&<>]/;e.exports=function(e){var t,n=""+e,o=r.exec(n);if(!o)return n;var i="",u=0,c=0;for(u=o.index;u<n.length;u++){switch(n.charCodeAt(u)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#39;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}c!==u&&(i+=n.substring(c,u)),c=u+1,i+=t;}return c!==u?i+n.substring(c,u):i};}])}));
});

const PrismicDOM = /*@__PURE__*/getDefaultExportFromCjs(prismicDom_min);

const apiURL = 'https://ionicframeworkcom.prismic.io/api/v2';
const cacheLife = 20 * 60 * 1000; // 20 mins
let ads;
let lastFetch = null;
const getLatest = async () => {
  const api = await Prismic.getApi(apiURL);
  const response = await api.query(Prismic.Predicates.at('document.type', 'docs_ad'), {});
  ads = response.results;
  lastFetch = Date.now();
};
const getAd = async () => {
  if (lastFetch === null || (Date.now() - lastFetch) > cacheLife) {
    await getLatest();
  }
  return chooseAdByWeight();
};
const chooseAdByWeight = () => {
  var _a;
  const weightList = []; // Just Checking...
  for (const ad of ads) {
    if (ad['data']) { // Safety
      if (!ad['data'].ad_weight) {
        ad['data'].ad_weight = 1;
      }
      for (let i = 0; i < ad['data'].ad_weight; i++) {
        weightList.push(ad);
      }
    }
  }
  // Probability Fun
  return ((_a = weightList[Math.floor(Math.random() * weightList.length)]) === null || _a === void 0 ? void 0 : _a.data) || null;
};

const internalAdCss = "internal-ad{max-width:148px;display:block;margin:48px 0 0}internal-ad p{font-size:13px;line-height:19px;font-weight:400;letter-spacing:0.02em;color:var(--c-indigo-100);transition:.2s color}internal-ad a:hover p{color:var(--c-indigo-90)}@media (max-width: 1233px){internal-ad{display:none}}";

const InternalAd = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  async componentWillLoad() {
    return this.update();
  }
  async update() {
    this.ad = await getAd();
    if (!this.ad) {
      return;
    }
    // give the page a chance to reflow
    this.timeout = setTimeout(() => {
      trackView(this.ad.ad_id);
    }, 50);
  }
  disconnectedCallback() {
    // if the reflowed page doesn't have an ad, don't fire view events
    clearTimeout(this.timeout);
  }
  render() {
    if (Build.isServer || !this.ad || Object.keys(this.ad).length === 0) {
      return;
    }
    return (h("a", { href: this.ad.ad_url.url, target: this.ad.ad_url.target, onClick: e => trackClick(this.ad.ad_id, e) }, h("picture", null, h("source", { media: "(min-width: 37.5em)", src: this.ad.ad_image.url }), h("source", { src: this.ad.ad_image['1x'].url }), h("img", { src: this.ad.ad_image.url, alt: this.ad.ad_image.alt, height: this.ad.ad_image['1x'].dimensions.height, width: this.ad.ad_image['1x'].dimensions.width }), h("p", null, this.ad.ad_image.alt)), h("div", { innerHTML: PrismicDOM.RichText.asHtml(this.ad.ad_copy) })));
  }
};
InternalAd.style = internalAdCss;

export { InternalAd as internal_ad };

//# sourceMappingURL=internal-ad.entry.js.map