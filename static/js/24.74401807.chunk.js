(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[24],{561:function(e,t,n){"use strict";n.d(t,"p",(function(){return i})),n.d(t,"i",(function(){return c})),n.d(t,"g",(function(){return s})),n.d(t,"m",(function(){return l})),n.d(t,"n",(function(){return u})),n.d(t,"o",(function(){return d})),n.d(t,"t",(function(){return p})),n.d(t,"a",(function(){return m})),n.d(t,"r",(function(){return g})),n.d(t,"q",(function(){return h})),n.d(t,"e",(function(){return y})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return j})),n.d(t,"l",(function(){return O})),n.d(t,"b",(function(){return E})),n.d(t,"f",(function(){return N})),n.d(t,"s",(function(){return w})),n.d(t,"k",(function(){return T})),n.d(t,"j",(function(){return z})),n.d(t,"h",(function(){return C}));var a,o=n(117),r=n.n(o);function i(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function s(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&i(n+e)}function l(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function u(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}function d(e,t){for(var n,a=Array.isArray(t)?t:[t],o=a.length,r={};o>0;)r[n=a[o-=1]]=e[n];return r}var f={};function p(e){f[e]||("undefined"!==typeof console&&console.error(e),f[e]=!0)}var b="object"===typeof window&&window.Element||function(){};function m(e,t,n){if(!(e[t]instanceof b))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var g=r.a.oneOfType([r.a.string,r.a.func,m,r.a.shape({current:r.a.any})]),h=r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func}),r.a.arrayOf(r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func})]))]),y={Fade:150,Collapse:350,Modal:300,Carousel:600},v=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],j={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},O={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},E=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],N=!("undefined"===typeof window||!window.document||!window.document.createElement);function x(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function w(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===x(e))return NaN;if(T(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=T(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var a=/^0b[01]+$/i.test(e);return a||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),a?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function T(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function k(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!T(e))return!1;var t=x(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&N){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function M(e){return null!==e&&(Array.isArray(e)||N&&"number"===typeof e.length)}function z(e,t){var n=k(e);return t?M(n)?n:[n]:M(n)?n[0]:n}var C=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},569:function(e,t,n){"use strict";var a=n(6),o=n(18),r=n(1),i=n.n(r),c=n(117),s=n.n(c),l=n(68),u=n.n(l),d=n(561),f=s.a.oneOfType([s.a.number,s.a.string]),p={tag:d.q,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},b={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e){var t=e.className,n=e.cssModule,r=e.noGutters,c=e.tag,s=e.form,l=e.widths,f=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];l.forEach((function(t,n){var a=e[t];if(delete f[t],a){var o=!n;p.push(o?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var b=Object(d.m)(u()(t,r?"no-gutters":null,s?"form-row":"row",p),n);return i.a.createElement(c,Object(a.a)({},f,{className:b}))};m.propTypes=p,m.defaultProps=b,t.a=m},570:function(e,t,n){"use strict";var a=n(6),o=n(18),r=n(1),i=n.n(r),c=n(117),s=n.n(c),l=n(68),u=n.n(l),d=n(561),f=s.a.oneOfType([s.a.number,s.a.string]),p=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:f,offset:f})]),b={tag:d.q,xs:p,sm:p,md:p,lg:p,xl:p,className:s.a.string,cssModule:s.a.object,widths:s.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},h=function(e){var t=e.className,n=e.cssModule,r=e.widths,c=e.tag,s=Object(o.a)(e,["className","cssModule","widths","tag"]),l=[];r.forEach((function(t,a){var o=e[t];if(delete s[t],o||""===o){var r=!a;if(Object(d.k)(o)){var i,c=r?"-":"-"+t+"-",f=g(r,t,o.size);l.push(Object(d.m)(u()(((i={})[f]=o.size||""===o.size,i["order"+c+o.order]=o.order||0===o.order,i["offset"+c+o.offset]=o.offset||0===o.offset,i)),n))}else{var p=g(r,t,o);l.push(p)}}})),l.length||l.push("col");var f=Object(d.m)(u()(t,l),n);return i.a.createElement(c,Object(a.a)({},s,{className:f}))};h.propTypes=b,h.defaultProps=m,t.a=h},572:function(e,t,n){"use strict";var a=n(6),o=n(18),r=n(118),i=n(23),c=n(1),s=n.n(c),l=n(117),u=n.n(l),d=n(68),f=n.n(d),p=n(561),b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(r.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],r=e.block,i=e.className,c=e.close,l=e.cssModule,u=e.color,d=e.outline,b=e.size,m=e.tag,g=e.innerRef,h=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof h.children&&(h.children=s.a.createElement("span",{"aria-hidden":!0},"\xd7"));var y="btn"+(d?"-outline":"")+"-"+u,v=Object(p.m)(f()(i,{close:c},c||"btn",c||y,!!b&&"btn-"+b,!!r&&"btn-block",{active:t,disabled:this.props.disabled}),l);h.href&&"button"===m&&(m="a");var j=c?"Close":null;return s.a.createElement(m,Object(a.a)({type:"button"===m&&h.onClick?"button":void 0},h,{className:v,ref:g,onClick:this.onClick,"aria-label":n||j}))},t}(s.a.Component);m.propTypes=b,m.defaultProps={color:"secondary",tag:"button"},t.a=m},592:function(e,t,n){"use strict";var a=n(6),o=n(18),r=n(1),i=n.n(r),c=n(117),s=n.n(c),l=n(68),u=n.n(l),d=n(561),f={tag:d.q,className:s.a.string,cssModule:s.a.object},p=function(e){var t=e.className,n=e.cssModule,r=e.tag,c=Object(o.a)(e,["className","cssModule","tag"]),s=Object(d.m)(u()(t,"input-group-text"),n);return i.a.createElement(r,Object(a.a)({},c,{className:s}))};p.propTypes=f,p.defaultProps={tag:"span"},t.a=p},618:function(e,t,n){"use strict";var a=n(6),o=n(18),r=n(1),i=n.n(r),c=n(117),s=n.n(c),l=n(68),u=n.n(l),d=n(561),f={tag:d.q,size:s.a.string,className:s.a.string,cssModule:s.a.object},p=function(e){var t=e.className,n=e.cssModule,r=e.tag,c=e.size,s=Object(o.a)(e,["className","cssModule","tag","size"]),l=Object(d.m)(u()(t,"input-group",c?"input-group-"+c:null),n);return i.a.createElement(r,Object(a.a)({},s,{className:l}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},619:function(e,t,n){"use strict";var a=n(6),o=n(18),r=n(118),i=n(23),c=n(1),s=n.n(c),l=n(117),u=n.n(l),d=n(68),f=n.n(d),p=n(561),b={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(r.a)(n)),n.focus=n.focus.bind(Object(r.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,r=e.type,i=e.bsSize,c=e.valid,l=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,m=e.innerRef,g=Object(o.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),v=u||("select"===r||"textarea"===r?r:"input"),j="form-control";b?(j+="-plaintext",v=u||"input"):"file"===r?j+="-file":h&&(j=d?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(p.t)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var O=Object(p.m)(f()(t,l&&"is-invalid",c&&"is-valid",!!i&&"form-control-"+i,j),n);return("input"===v||u&&"function"===typeof u)&&(g.type=r),g.children&&!b&&"select"!==r&&"string"===typeof v&&"select"!==v&&(Object(p.t)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),s.a.createElement(v,Object(a.a)({},g,{ref:m,className:O}))},t}(s.a.Component);m.propTypes=b,m.defaultProps={type:"text"},t.a=m},647:function(e,t,n){"use strict";var a=n(6),o=n(18),r=n(1),i=n.n(r),c=n(117),s=n.n(c),l=n(68),u=n.n(l),d=n(561),f=n(592),p={tag:d.q,addonType:s.a.oneOf(["prepend","append"]).isRequired,children:s.a.node,className:s.a.string,cssModule:s.a.object},b=function(e){var t=e.className,n=e.cssModule,r=e.tag,c=e.addonType,s=e.children,l=Object(o.a)(e,["className","cssModule","tag","addonType","children"]),p=Object(d.m)(u()(t,"input-group-"+c),n);return"string"===typeof s?i.a.createElement(r,Object(a.a)({},l,{className:p}),i.a.createElement(f.a,{children:s})):i.a.createElement(r,Object(a.a)({},l,{className:p,children:s}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},654:function(e,t,n){"use strict";var a=n(6),o=n(18),r=n(1),i=n.n(r),c=n(117),s=n.n(c),l=n(68),u=n.n(l),d=n(561),f={tag:d.q,fluid:s.a.oneOfType([s.a.bool,s.a.string]),className:s.a.string,cssModule:s.a.object},p=function(e){var t=e.className,n=e.cssModule,r=e.fluid,c=e.tag,s=Object(o.a)(e,["className","cssModule","fluid","tag"]),l="container";!0===r?l="container-fluid":r&&(l="container-"+r);var f=Object(d.m)(u()(t,l),n);return i.a.createElement(c,Object(a.a)({},s,{className:f}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},916:function(e,t,n){"use strict";n.r(t);var a=n(168),o=n(169),r=n(171),i=n(170),c=n(172),s=n(1),l=n.n(s),u=n(654),d=n(569),f=n(570),p=n(618),b=n(647),m=n(592),g=n(619),h=n(572),y=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"app flex-row align-items-center"},l.a.createElement(u.a,null,l.a.createElement(d.a,{className:"justify-content-center"},l.a.createElement(f.a,{md:"6"},l.a.createElement("div",{className:"clearfix"},l.a.createElement("h1",{className:"float-left display-3 mr-4"},"404"),l.a.createElement("h4",{className:"pt-3"},"Oops! You're lost."),l.a.createElement("p",{className:"text-muted float-left"},"The page you are looking for was not found.")),l.a.createElement(p.a,{className:"input-prepend"},l.a.createElement(b.a,{addonType:"prepend"},l.a.createElement(m.a,null,l.a.createElement("i",{className:"fa fa-search"}))),l.a.createElement(g.a,{size:"16",type:"text",placeholder:"What are you looking for?"}),l.a.createElement(b.a,{addonType:"append"},l.a.createElement(h.a,{color:"info"},"Search")))))))}}]),t}(s.Component);t.default=y}}]);
//# sourceMappingURL=24.74401807.chunk.js.map