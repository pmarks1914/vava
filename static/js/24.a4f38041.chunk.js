(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[24],{563:function(e,a,t){"use strict";var n=t(6),s=t(18),i=t(1),o=t.n(i),r=t(117),l=t.n(r),c=t(68),u=t.n(c),d=t(560),m=l.a.oneOfType([l.a.number,l.a.string]),p={tag:d.q,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},h={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e){var a=e.className,t=e.cssModule,i=e.noGutters,r=e.tag,l=e.form,c=e.widths,m=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];c.forEach((function(a,t){var n=e[a];if(delete m[a],n){var s=!t;p.push(s?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var h=Object(d.m)(u()(a,i?"no-gutters":null,l?"form-row":"row",p),t);return o.a.createElement(r,Object(n.a)({},m,{className:h}))};f.propTypes=p,f.defaultProps=h,a.a=f},564:function(e,a,t){"use strict";var n=t(6),s=t(18),i=t(1),o=t.n(i),r=t(117),l=t.n(r),c=t(68),u=t.n(c),d=t(560),m=l.a.oneOfType([l.a.number,l.a.string]),p=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:m,offset:m})]),h={tag:d.q,xs:p,sm:p,md:p,lg:p,xl:p,className:l.a.string,cssModule:l.a.object,widths:l.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,i=e.widths,r=e.tag,l=Object(s.a)(e,["className","cssModule","widths","tag"]),c=[];i.forEach((function(a,n){var s=e[a];if(delete l[a],s||""===s){var i=!n;if(Object(d.k)(s)){var o,r=i?"-":"-"+a+"-",m=b(i,a,s.size);c.push(Object(d.m)(u()(((o={})[m]=s.size||""===s.size,o["order"+r+s.order]=s.order||0===s.order,o["offset"+r+s.offset]=s.offset||0===s.offset,o)),t))}else{var p=b(i,a,s);c.push(p)}}})),c.length||c.push("col");var m=Object(d.m)(u()(a,c),t);return o.a.createElement(r,Object(n.a)({},l,{className:m}))};g.propTypes=h,g.defaultProps=f,a.a=g},565:function(e,a,t){"use strict";var n=t(6),s=t(18),i=t(1),o=t.n(i),r=t(117),l=t.n(r),c=t(68),u=t.n(c),d=t(560),m={tag:d.q,className:l.a.string,cssModule:l.a.object},p=function(e){var a=e.className,t=e.cssModule,i=e.tag,r=Object(s.a)(e,["className","cssModule","tag"]),l=Object(d.m)(u()(a,"card-header"),t);return o.a.createElement(i,Object(n.a)({},r,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},568:function(e,a,t){"use strict";var n=t(6),s=t(18),i=t(118),o=t(23),r=t(1),l=t.n(r),c=t(117),u=t.n(c),d=t(68),m=t.n(d),p=t(560),h={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(i.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],i=e.block,o=e.className,r=e.close,c=e.cssModule,u=e.color,d=e.outline,h=e.size,f=e.tag,b=e.innerRef,g=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);r&&"undefined"===typeof g.children&&(g.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var E="btn"+(d?"-outline":"")+"-"+u,v=Object(p.m)(m()(o,{close:r},r||"btn",r||E,!!h&&"btn-"+h,!!i&&"btn-block",{active:a,disabled:this.props.disabled}),c);g.href&&"button"===f&&(f="a");var O=r?"Close":null;return l.a.createElement(f,Object(n.a)({type:"button"===f&&g.onClick?"button":void 0},g,{className:v,ref:b,onClick:this.onClick,"aria-label":t||O}))},a}(l.a.Component);f.propTypes=h,f.defaultProps={color:"secondary",tag:"button"},a.a=f},572:function(e,a,t){"use strict";var n=t(6),s=t(18),i=t(562),o=t(1),r=t.n(o),l=t(117),c=t.n(l),u=t(68),d=t.n(u),m=t(573),p=t(560),h=Object(i.a)({},m.Transition.propTypes,{children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),tag:p.q,baseClass:c.a.string,baseClassActive:c.a.string,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])}),f=Object(i.a)({},m.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:p.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function b(e){var a=e.tag,t=e.baseClass,i=e.baseClassActive,o=e.className,l=e.cssModule,c=e.children,u=e.innerRef,h=Object(s.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),f=Object(p.o)(h,p.c),b=Object(p.n)(h,p.c);return r.a.createElement(m.Transition,f,(function(e){var s="entered"===e,m=Object(p.m)(d()(o,t,s&&i),l);return r.a.createElement(a,Object(n.a)({className:m},b,{ref:u}),c)}))}b.propTypes=h,b.defaultProps=f,a.a=b},593:function(e,a,t){"use strict";var n=t(6),s=t(18),i=t(1),o=t.n(i),r=t(117),l=t.n(r),c=t(68),u=t.n(c),d=t(560),m={tag:d.q,className:l.a.string,cssModule:l.a.object},p=function(e){var a=e.className,t=e.cssModule,i=e.tag,r=Object(s.a)(e,["className","cssModule","tag"]),l=Object(d.m)(u()(a,"card-footer"),t);return o.a.createElement(i,Object(n.a)({},r,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},615:function(e,a,t){"use strict";var n,s=t(6),i=t(18),o=t(118),r=t(23),l=t(562),c=t(1),u=t.n(c),d=t(117),m=t.n(d),p=t(68),h=t.n(p),f=t(573),b=t(560),g=Object(l.a)({},f.Transition.propTypes,{isOpen:m.a.bool,children:m.a.oneOfType([m.a.arrayOf(m.a.node),m.a.node]),tag:b.q,className:m.a.node,navbar:m.a.bool,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.func,m.a.string,m.a.object])}),E=Object(l.a)({},f.Transition.defaultProps,{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:b.e.Collapse}),v=((n={})[b.d.ENTERING]="collapsing",n[b.d.ENTERED]="collapse show",n[b.d.EXITING]="collapsing",n[b.d.EXITED]="collapse",n);function O(e){return e.scrollHeight}var N=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){t[e]=t[e].bind(Object(o.a)(t))})),t}Object(r.a)(a,e);var t=a.prototype;return t.onEntering=function(e,a){this.setState({height:O(e)}),this.props.onEntering(e,a)},t.onEntered=function(e,a){this.setState({height:null}),this.props.onEntered(e,a)},t.onExit=function(e){this.setState({height:O(e)}),this.props.onExit(e)},t.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},t.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},t.render=function(){var e=this,a=this.props,t=a.tag,n=a.isOpen,o=a.className,r=a.navbar,c=a.cssModule,d=a.children,m=(a.innerRef,Object(i.a)(a,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),p=this.state.height,g=Object(b.o)(m,b.c),E=Object(b.n)(m,b.c);return u.a.createElement(f.Transition,Object(s.a)({},g,{in:n,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(a){var i=function(e){return v[e]||"collapse"}(a),m=Object(b.m)(h()(o,i,r&&"navbar-collapse"),c),f=null===p?null:{height:p};return u.a.createElement(t,Object(s.a)({},E,{style:Object(l.a)({},E.style,{},f),className:m,ref:e.props.innerRef,"aria-expanded":n?"true":"false"}),d)}))},a}(c.Component);N.propTypes=g,N.defaultProps=E,a.a=N},836:function(e,a,t){"use strict";t.r(a);var n=t(168),s=t(169),i=t(171),o=t(170),r=t(173),l=t(172),c=t(1),u=t.n(c),d=t(563),m=t(564),p=t(566),h=t(565),f=t(615),b=t(567),g=t(593),E=t(568),v=t(572),O=t(824),N=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).onEntering=t.onEntering.bind(Object(r.a)(t)),t.onEntered=t.onEntered.bind(Object(r.a)(t)),t.onExiting=t.onExiting.bind(Object(r.a)(t)),t.onExited=t.onExited.bind(Object(r.a)(t)),t.toggle=t.toggle.bind(Object(r.a)(t)),t.toggleAccordion=t.toggleAccordion.bind(Object(r.a)(t)),t.toggleCustom=t.toggleCustom.bind(Object(r.a)(t)),t.toggleFade=t.toggleFade.bind(Object(r.a)(t)),t.state={collapse:!1,accordion:[!0,!1,!1],custom:[!0,!1],status:"Closed",fadeIn:!0,timeout:300},t}return Object(l.a)(a,e),Object(s.a)(a,[{key:"onEntering",value:function(){this.setState({status:"Opening..."})}},{key:"onEntered",value:function(){this.setState({status:"Opened"})}},{key:"onExiting",value:function(){this.setState({status:"Closing..."})}},{key:"onExited",value:function(){this.setState({status:"Closed"})}},{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggleAccordion",value:function(e){var a=this.state.accordion.map((function(a,t){return e===t&&!a}));this.setState({accordion:a})}},{key:"toggleCustom",value:function(e){var a=this.state.custom.map((function(a,t){return e===t&&!a}));this.setState({custom:a})}},{key:"toggleFade",value:function(){this.setState({fadeIn:!this.state.fadeIn})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(d.a,null,u.a.createElement(m.a,{xl:"6"},u.a.createElement(p.a,null,u.a.createElement(h.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Collapse"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement("a",{href:"https://reactstrap.github.io/components/collapse/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},u.a.createElement("small",{className:"text-muted"},"docs")))),u.a.createElement(f.a,{isOpen:this.state.collapse,onEntering:this.onEntering,onEntered:this.onEntered,onExiting:this.onExiting,onExited:this.onExited},u.a.createElement(b.a,null,u.a.createElement("p",null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."),u.a.createElement("p",null,"Donec molestie odio id nisi malesuada, mattis tincidunt velit egestas. Sed non pulvinar risus. Aenean elementum eleifend nunc, pellentesque dapibus arcu hendrerit fringilla. Aliquam in nibh massa. Cras ultricies lorem non enim volutpat, a eleifend urna placerat. Fusce id luctus urna. In sed leo tellus. Mauris tristique leo a nisl feugiat, eget vehicula leo venenatis. Quisque magna metus, luctus quis sollicitudin vel, vehicula nec ipsum. Donec rutrum commodo lacus ut condimentum. Integer vel turpis purus. Etiam vehicula, nulla non fringilla blandit, massa purus faucibus tellus, a luctus enim orci non augue. Aenean ullamcorper nisl urna, non feugiat tortor volutpat in. Vivamus lobortis massa dolor, eget faucibus ipsum varius eget. Pellentesque imperdiet, turpis sed sagittis lobortis, leo elit laoreet arcu, vehicula sagittis elit leo id nisi."))),u.a.createElement(g.a,null,u.a.createElement(E.a,{color:"primary",onClick:this.toggle,className:"mb-1",id:"toggleCollapse1"},"Toggle"),u.a.createElement("hr",null),u.a.createElement("h5",null,"Current state: ",this.state.status))),u.a.createElement(p.a,null,u.a.createElement(h.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Fade"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement("a",{href:"https://reactstrap.github.io/components/fade/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},u.a.createElement("small",{className:"text-muted"},"docs")))),u.a.createElement(b.a,null,u.a.createElement(v.a,{timeout:this.state.timeout,in:this.state.fadeIn,tag:"h5",className:"mt-3"},"This content will fade in and out as the button is pressed...")),u.a.createElement(g.a,null,u.a.createElement(E.a,{color:"primary",onClick:this.toggleFade,id:"toggleFade1"},"Toggle Fade")))),u.a.createElement(m.a,{xl:"6"},u.a.createElement(p.a,null,u.a.createElement(h.a,null,u.a.createElement("i",{className:"fa fa-align-justify"})," Collapse ",u.a.createElement("small",null,"accordion"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement(O.a,null,"NEW"))),u.a.createElement(b.a,null,u.a.createElement("div",{id:"accordion"},u.a.createElement(p.a,{className:"mb-0"},u.a.createElement(h.a,{id:"headingOne"},u.a.createElement(E.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(0)},"aria-expanded":this.state.accordion[0],"aria-controls":"collapseOne"},u.a.createElement("h5",{className:"m-0 p-0"},"Collapsible Group Item #1"))),u.a.createElement(f.a,{isOpen:this.state.accordion[0],"data-parent":"#accordion",id:"collapseOne","aria-labelledby":"headingOne"},u.a.createElement(b.a,null,"1. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."))),u.a.createElement(p.a,{className:"mb-0"},u.a.createElement(h.a,{id:"headingTwo"},u.a.createElement(E.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(1)},"aria-expanded":this.state.accordion[1],"aria-controls":"collapseTwo"},u.a.createElement("h5",{className:"m-0 p-0"},"Collapsible Group Item #2"))),u.a.createElement(f.a,{isOpen:this.state.accordion[1],"data-parent":"#accordion",id:"collapseTwo"},u.a.createElement(b.a,null,"2. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."))),u.a.createElement(p.a,{className:"mb-0"},u.a.createElement(h.a,{id:"headingThree"},u.a.createElement(E.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:function(){return e.toggleAccordion(2)},"aria-expanded":this.state.accordion[2],"aria-controls":"collapseThree"},u.a.createElement("h5",{className:"m-0 p-0"},"Collapsible Group Item #3"))),u.a.createElement(f.a,{isOpen:this.state.accordion[2],"data-parent":"#accordion",id:"collapseThree"},u.a.createElement(b.a,null,"3. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.")))))),u.a.createElement(p.a,null,u.a.createElement(h.a,null,u.a.createElement("i",{className:"fa fa-align-justify"})," Collapse ",u.a.createElement("small",null,"custom accordion"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement(O.a,null,"NEW"))),u.a.createElement(b.a,null,u.a.createElement("div",{id:"exampleAccordion","data-children":".item"},u.a.createElement("div",{className:"item"},u.a.createElement(E.a,{className:"m-0 p-0",color:"link",onClick:function(){return e.toggleCustom(0)},"aria-expanded":this.state.custom[0],"aria-controls":"exampleAccordion1"},"Toggle item"),u.a.createElement(f.a,{isOpen:this.state.custom[0],"data-parent":"#exampleAccordion",id:"exampleAccordion1"},u.a.createElement("p",{className:"mb-3"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium lorem non vestibulum scelerisque. Proin a vestibulum sem, eget tristique massa. Aliquam lacinia rhoncus nibh quis ornare."))),u.a.createElement("div",{className:"item"},u.a.createElement(E.a,{className:"m-0 p-0",color:"link",onClick:function(){return e.toggleCustom(1)},"aria-expanded":this.state.custom[1],"aria-controls":"exampleAccordion2"},"Toggle item 2"),u.a.createElement(f.a,{isOpen:this.state.custom[1],"data-parent":"#exampleAccordion",id:"exampleAccordion2"},u.a.createElement("p",{className:"mb-3"},"Donec at ipsum dignissim, rutrum turpis scelerisque, tristique lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus nec dui turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.")))))))))}}]),a}(c.Component);a.default=N}}]);
//# sourceMappingURL=24.a4f38041.chunk.js.map