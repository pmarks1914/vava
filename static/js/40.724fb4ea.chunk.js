(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[40],{566:function(e,a,t){"use strict";var r=t(6),s=t(18),n=t(1),o=t.n(n),c=t(117),l=t.n(c),i=t(68),u=t.n(i),d=t(561),m={tag:d.q,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var a=e.className,t=e.cssModule,n=e.color,c=e.body,l=e.inverse,i=e.outline,m=e.tag,b=e.innerRef,f=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(d.m)(u()(a,"card",!!l&&"text-white",!!c&&"card-body",!!n&&(i?"border":"bg")+"-"+n),t);return o.a.createElement(m,Object(r.a)({},f,{className:p,ref:b}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},568:function(e,a,t){"use strict";var r=t(6),s=t(18),n=t(1),o=t.n(n),c=t(117),l=t.n(c),i=t(68),u=t.n(i),d=t(561),m={tag:d.q,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,c=e.tag,l=Object(s.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.m)(u()(a,"card-body"),t);return o.a.createElement(c,Object(r.a)({},l,{className:i,ref:n}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},569:function(e,a,t){"use strict";var r=t(6),s=t(18),n=t(1),o=t.n(n),c=t(117),l=t.n(c),i=t(68),u=t.n(i),d=t(561),m=l.a.oneOfType([l.a.number,l.a.string]),b={tag:d.q,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},f={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,c=e.tag,l=e.form,i=e.widths,m=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];i.forEach((function(a,t){var r=e[a];if(delete m[a],r){var s=!t;b.push(s?"row-cols-"+r:"row-cols-"+a+"-"+r)}}));var f=Object(d.m)(u()(a,n?"no-gutters":null,l?"form-row":"row",b),t);return o.a.createElement(c,Object(r.a)({},m,{className:f}))};p.propTypes=b,p.defaultProps=f,a.a=p},570:function(e,a,t){"use strict";var r=t(6),s=t(18),n=t(1),o=t.n(n),c=t(117),l=t.n(c),i=t(68),u=t.n(i),d=t(561),m=l.a.oneOfType([l.a.number,l.a.string]),b=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:m,offset:m})]),f={tag:d.q,xs:b,sm:b,md:b,lg:b,xl:b,className:l.a.string,cssModule:l.a.object,widths:l.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,n=e.widths,c=e.tag,l=Object(s.a)(e,["className","cssModule","widths","tag"]),i=[];n.forEach((function(a,r){var s=e[a];if(delete l[a],s||""===s){var n=!r;if(Object(d.k)(s)){var o,c=n?"-":"-"+a+"-",m=g(n,a,s.size);i.push(Object(d.m)(u()(((o={})[m]=s.size||""===s.size,o["order"+c+s.order]=s.order||0===s.order,o["offset"+c+s.offset]=s.offset||0===s.offset,o)),t))}else{var b=g(n,a,s);i.push(b)}}})),i.length||i.push("col");var m=Object(d.m)(u()(a,i),t);return o.a.createElement(c,Object(r.a)({},l,{className:m}))};v.propTypes=f,v.defaultProps=p,a.a=v},571:function(e,a,t){"use strict";var r=t(6),s=t(18),n=t(1),o=t.n(n),c=t(117),l=t.n(c),i=t(68),u=t.n(i),d=t(561),m={tag:d.q,className:l.a.string,cssModule:l.a.object},b=function(e){var a=e.className,t=e.cssModule,n=e.tag,c=Object(s.a)(e,["className","cssModule","tag"]),l=Object(d.m)(u()(a,"card-header"),t);return o.a.createElement(n,Object(r.a)({},c,{className:l}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},659:function(e,a,t){"use strict";var r=t(6),s=t(18),n=t(1),o=t.n(n),c=t(117),l=t.n(c),i=t(68),u=t.n(i),d=t(561),m={className:l.a.string,cssModule:l.a.object,size:l.a.string,bordered:l.a.bool,borderless:l.a.bool,striped:l.a.bool,dark:l.a.bool,hover:l.a.bool,responsive:l.a.oneOfType([l.a.bool,l.a.string]),tag:d.q,responsiveTag:d.q,innerRef:l.a.oneOfType([l.a.func,l.a.string,l.a.object])},b=function(e){var a=e.className,t=e.cssModule,n=e.size,c=e.bordered,l=e.borderless,i=e.striped,m=e.dark,b=e.hover,f=e.responsive,p=e.tag,g=e.responsiveTag,v=e.innerRef,E=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),j=Object(d.m)(u()(a,"table",!!n&&"table-"+n,!!c&&"table-bordered",!!l&&"table-borderless",!!i&&"table-striped",!!m&&"table-dark",!!b&&"table-hover"),t),h=o.a.createElement(p,Object(r.a)({},E,{ref:v,className:j}));if(f){var O=Object(d.m)(!0===f?"table-responsive":"table-responsive-"+f,t);return o.a.createElement(g,{className:O},h)}return h};b.propTypes=m,b.defaultProps={tag:"table",responsiveTag:"div"},a.a=b},950:function(e,a,t){"use strict";t.r(a);var r=t(168),s=t(169),n=t(171),o=t(170),c=t(172),l=t(1),i=t.n(l),u=t(174),d=t(911),m=t(569),b=t(570),f=t(566),p=t(571),g=t(568),v=t(659),E=t(653);function j(e){var a,t=e.user,r="/users/".concat(t.id);return i.a.createElement("tr",{key:t.id.toString()},i.a.createElement("th",{scope:"row"},i.a.createElement(u.Link,{to:r},t.id)),i.a.createElement("td",null,i.a.createElement(u.Link,{to:r},t.name)),i.a.createElement("td",null,t.registered),i.a.createElement("td",null,t.role),i.a.createElement("td",null,i.a.createElement(u.Link,{to:r},i.a.createElement(d.a,{color:(a=t.status,"Active"===a?"success":"Inactive"===a?"secondary":"Pending"===a?"warning":"Banned"===a?"danger":"primary")},t.status))))}var h=function(e){function a(){return Object(r.a)(this,a),Object(n.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=E.a.filter((function(e){return e.id<10}));return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(m.a,null,i.a.createElement(b.a,{xl:6},i.a.createElement(f.a,null,i.a.createElement(p.a,null,i.a.createElement("i",{className:"fa fa-align-justify"})," Users ",i.a.createElement("small",{className:"text-muted"},"example")),i.a.createElement(g.a,null,i.a.createElement(v.a,{responsive:!0,hover:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{scope:"col"},"id"),i.a.createElement("th",{scope:"col"},"name"),i.a.createElement("th",{scope:"col"},"registered"),i.a.createElement("th",{scope:"col"},"role"),i.a.createElement("th",{scope:"col"},"status"))),i.a.createElement("tbody",null,e.map((function(e,a){return i.a.createElement(j,{key:a,user:e})})))))))))}}]),a}(l.Component);a.default=h}}]);
//# sourceMappingURL=40.724fb4ea.chunk.js.map