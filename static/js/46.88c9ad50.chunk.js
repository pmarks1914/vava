(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[46],{566:function(e,t,a){"use strict";var r=a(6),l=a(18),n=a(1),o=a.n(n),s=a(117),i=a.n(s),c=a(68),d=a.n(c),u=a(561),m={tag:u.q,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var t=e.className,a=e.cssModule,n=e.color,s=e.body,i=e.inverse,c=e.outline,m=e.tag,p=e.innerRef,f=Object(l.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(u.m)(d()(t,"card",!!i&&"text-white",!!s&&"card-body",!!n&&(c?"border":"bg")+"-"+n),a);return o.a.createElement(m,Object(r.a)({},f,{className:b,ref:p}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},589:function(e,t,a){},762:function(e,t,a){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l=a(1),n=i(l),o=i(a(573)),s=i(a(68));function i(e){return e&&e.__esModule?e:{default:e}}o.default.string,o.default.bool,o.default.oneOfType([o.default.bool,o.default.string,o.default.oneOf(["","alt"])]),o.default.oneOf(["","lg","sm"]),o.default.bool,o.default.bool,o.default.any,o.default.string,o.default.bool,o.default.any,o.default.string,o.default.bool,o.default.func,o.default.oneOf(["checkbox","radio"]),o.default.oneOf(["","3d","pill"]),o.default.string,o.default.string,o.default.string;var c={color:"secondary",label:!1,outline:!1,size:"",checked:!1,defaultChecked:void 0,disabled:void 0,required:void 0,type:"checkbox",variant:"",dataOn:"On",dataOff:"Off"},d=function(e){function t(a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.call(this,a));return r.handleChange=r.handleChange.bind(r),r.handleKeyDown=r.handleKeyDown.bind(r),r.handleKeyUp=r.handleKeyUp.bind(r),r.state={uncontrolled:!!r.props.defaultChecked,checked:r.props.defaultChecked||r.props.checked,selected:[]},r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.toggleState=function(e){this.setState({checked:e})},t.prototype.handleChange=function(e){var t=e.target;this.toggleState(t.checked),this.props.onChange&&this.props.onChange(e)},t.prototype.handleKeyDown=function(e){" "===e.key&&e.preventDefault()},t.prototype.handleKeyUp=function(e){"Enter"!==e.key&&" "!==e.key||this.toggleState(!this.state.checked)},t.prototype.componentDidUpdate=function(e,t){this.state.uncontrolled||this.props.checked===t.checked||this.toggleState(this.props.checked)},t.prototype.render=function(){var e=this.props,t=e.className,a=e.disabled,l=e.color,o=e.name,i=e.label,c=e.outline,d=e.size,u=e.required,m=e.type,p=e.value,f=e.dataOn,b=e.dataOff,g=e.variant,E=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(e,["className","disabled","color","name","label","outline","size","required","type","value","dataOn","dataOff","variant"]),h=E.tabIndex;delete E.tabIndex,delete E.checked,delete E.defaultChecked,delete E.onChange;var y=(0,s.default)(t,"switch",!!i&&"switch-label",!!d&&"switch-"+d,!!g&&"switch-"+g,"switch"+(c?"-outline":"")+"-"+l+("alt"===c?"-alt":""),"form-check-label"),v=(0,s.default)("switch-input","form-check-input"),R=(0,s.default)("switch-slider");return n.default.createElement("label",{className:y,tabIndex:h,onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown},n.default.createElement("input",r({type:m,className:v,onChange:this.handleChange,checked:this.state.checked,name:o,required:u,disabled:a,value:p,"aria-checked":this.state.checked,"aria-disabled":a,"aria-readonly":a},E)),n.default.createElement("span",{className:R,"data-checked":f,"data-unchecked":b}))},t}(l.Component);d.propTypes={},d.defaultProps=c,t.default=d,e.exports=t.default},961:function(e,t,a){"use strict";a.r(t);var r=a(168),l=a(169),n=a(171),o=a(170),s=a(172),i=a(1),c=a.n(i),d=(a(589),a(69)),u=a.n(d),m=a(580),p=a(587),f=a(902),b=a(848),g=a(849),E=a(566),h=a(850),y=a(768),v=a(831),R=a(832),C=a(570),U=a(619),N=a(92),k=(a(602),a(70));N.b.configure();var O=function(e){e.buttonLabelView;var t,a,r,l,n,o,s,d,m,O=e.className,w=Object(i.useState)(!1),S=Object(p.a)(w,2),A=S[0],x=S[1],T=Object(i.useState)(!1),D=Object(p.a)(T,2),P=D[0],I=D[1],j=Object(i.useState)(!1),_=Object(p.a)(j,2),z=_[0],M=_[1],L=function(){return x(!A)},B=function(){return I(!P)},q=function(){return M(!z)};var F=void 0===(null===e||void 0===e?void 0:null===(t=e.selectedUsername)||void 0===t?void 0:null===(a=t.split("@")[0])||void 0===a?void 0:a.split(".")[2])?"":null===e||void 0===e?void 0:null===(r=e.selectedUsername)||void 0===r?void 0:null===(l=r.split("@")[0])||void 0===l?void 0:l.split(".")[2],V=void 0===(null===e||void 0===e?void 0:null===(n=e.selectedUsername)||void 0===n?void 0:null===(o=n.split("@")[0])||void 0===o?void 0:o.split(".")[3])?"":null===e||void 0===e?void 0:null===(s=e.selectedUsername)||void 0===s?void 0:null===(d=s.split("@")[0])||void 0===d?void 0:d.split(".")[3];function K(t){t.preventDefault();localStorage.getItem("sessionInfoUser.id");var a=document.querySelector("#userData"),r=new FormData(a),l=JSON.parse(localStorage.getItem("currentUser")),n=(null===l||void 0===l||l.role,r.get("name")),o=r.get("email"),s=r.get("userRole"),i=new Date;(new XMLHttpRequest).onreadystatechange=function(){4===this.readyState&200===this.status&&alert("Uploaded!")};var c="* Name field may be empty",d="* Email field may be empty",m="* Role field may be empty";if(""==n&&null===s&&""==o)N.b.error(c),N.b.error(d),N.b.error(m);else if(""==n&&""==o)N.b.error(c),N.b.error(d);else if(""==n&&null===s)N.b.error(c),N.b.error(m);else if(""==o&&null===s)N.b.error(d),N.b.error(m);else if(""==n)N.b.error(c);else if(null===s)N.b.error(m);else{(new FormData).append("userForm",'{"name": "'+n+'","email": " '+o+'", "userRole": " '+s+'"} ');u.a.put(k[k.REACT_APP_ENVIRONMENT].API_UPDATE_USER,{active:!0,createdAt:i,createdBy:o,email:o,id:e.selectedUserId,role:s,updateAt:i,updatedBy:o,username:o},{headers:{ContentType:"application/json",Authorization:l.token}}).then((function(e){N.b.success("User Edited Successfully"),u.a.post(k[k.REACT_APP_ENVIRONMENT].API_SEND_MAIL,{msg:"Hello "+o+", your user details was changed successfully. with user role - "+s,recipient:o,sender:"no-reply-PCR",subject:"Permissions Central Repository - PCR"}),setTimeout((function(){window.location.reload()}),1e3)}))}}return c.a.createElement("div",null,c.a.createElement("a",{className:"link",onClick:L,style:{color:"blue",fontFamily:"san-serif",paddingRight:"10px"}},"View"),c.a.createElement("a",{className:"link",onClick:B,style:{color:"blue",fontFamily:"san-serif",paddingRight:"10px"}},"Edit"),c.a.createElement(f.a,{isOpen:A,toggle:L,className:O},c.a.createElement(b.a,{toggle:L}," User Profile "),c.a.createElement(g.a,{style:{borderRadius:"1px",borderColor:"#e60000",paddingLeft:"70px"}},c.a.createElement(E.a,{style:{border:"10px"}},c.a.createElement("a",{style:{fontSize:"15px",paddingRight:"50px",color:"#E60000"}},"Name:  "),e.selectedUserEmail.split("@")[0],c.a.createElement("br",null),c.a.createElement("a",{style:{fontSize:"15px",paddingRight:"52px",color:"#E60000"}},"Email:  "),e.selectedUserEmail,c.a.createElement("br",null),c.a.createElement("a",{style:{fontSize:"15px",paddingRight:"29px",color:"#E60000"}},"User Role:"),"ADMIN"===e.selectedUserRole?"Admin":"SUPER_ADMIN"===e.selectedUserRole?"Super Admin":"USER"===e.selectedUserRole?"Regular User":"userRoleRegular"===e.selectedUserRole?"Regular User":"userRoleAdmin"===e.selectedUserRole?"Super Admin":"",c.a.createElement("br",null),c.a.createElement("a",{style:{fontSize:"15px",paddingRight:"22px",color:"#E60000"}},"Username:")," ",e.selectedUsername,c.a.createElement("br",null),c.a.createElement("a",{style:{fontSize:"15px",paddingRight:"19px",color:"#E60000"}},"Created By: "),c.a.createElement("a",{style:{textTransform:"capitalize"}},"ADMIN"===e.selectedUserCreatedBy?"Admin":"Super Admin"),c.a.createElement("br",null))),c.a.createElement(h.a,null,c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{className:"btn btn-lg",onClick:L,style:{backgroundColor:"#E60000",color:"#fff",borderColor:"green",borderRadius:10,paddingLeft:15,paddingRight:15,paddingTop:0,paddingBottom:0,textTransform:"unset"}},"OK")," "))),c.a.createElement(f.a,{isOpen:P,toggleEdit:B,className:O,size:"lg"},c.a.createElement(y.a,{id:"userData",onSubmit:K},c.a.createElement(b.a,{toggleEdit:B}," Edit User "),c.a.createElement(g.a,null,c.a.createElement(N.a,{closeButton:!1,style:{color:"#fff"}}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"container"},c.a.createElement(v.a,{row:!0},c.a.createElement(R.a,{htmlFor:"name",sm:"12",md:{size:2,offset:1},style:{color:"#E60000"}},c.a.createElement("a",{style:{color:"black"}},"*"),"Name:"),c.a.createElement(C.a,{sm:"12",md:{size:8,offset:0},style:{paddingLeft:"15px"}},c.a.createElement(U.a,{type:"text",name:"name",id:"name",style:{textTransform:"capitalize"},defaultValue:(null===e||void 0===e?void 0:null===(m=e.selectedUsername)||void 0===m?void 0:m.split("@")[0]).split(".")[0]+" "+F+" "+V,required:!0}))),c.a.createElement(v.a,{row:!0},c.a.createElement(R.a,{htmlFor:"email",sm:"12",md:{size:2,offset:1},style:{color:"#E60000"}},c.a.createElement("a",{style:{color:"black"}},"*"),"Email:"),c.a.createElement(C.a,{sm:"12",md:{size:8,offset:0},style:{paddingLeft:"15px"}},c.a.createElement(U.a,{type:"email",name:"email",id:"email",defaultValue:e.selectedUserEmail,required:!0}))),c.a.createElement(v.a,{row:!0},c.a.createElement(R.a,{htmlFor:"userRole",sm:"12",md:{size:2,offset:1},style:{color:"#E60000"},required:!0},c.a.createElement("a",{style:{color:"black"}},"*"),"Role:"),c.a.createElement(C.a,{sm:"12",md:{size:8,offset:0}},c.a.createElement(U.a,{type:"select",name:"userRole",id:"userRole",defaultValue:e.selectedUserRole},c.a.createElement("option",{value:"ADMIN"},"Admin"),c.a.createElement("option",{value:"USER"},"Regular User"),c.a.createElement("option",{value:"SUPER_ADMIN"},"Super Admin")))))),c.a.createElement(h.a,null,c.a.createElement("div",{className:"btn-group"},c.a.createElement("a",{style:{paddingRight:"5px"}},c.a.createElement("button",{className:"btn btn-lg",onClick:function(e){e.preventDefault(),x(!1),I(!1),M(!1)},style:{backgroundColor:"#000",color:"#fff",borderColor:"green",borderRadius:10,paddingLeft:5,paddingRight:5,paddingTop:0,paddingBottom:0,textTransform:"unset"}},"Cancel")),c.a.createElement("button",{className:"btn btn-lg",type:"submit",onClick:K,style:{backgroundColor:"#E60000",color:"#fff",borderColor:"green",borderRadius:10,paddingLeft:5,paddingRight:5,paddingTop:0,paddingBottom:0,textTransform:"unset"}},"Submit"))))),c.a.createElement(f.a,{isOpen:z,toggle:q,className:O},c.a.createElement(b.a,{toggle:q},"Delete"),c.a.createElement(g.a,null),c.a.createElement(h.a,null,c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{className:"btn btn-lg",onClick:q,style:{backgroundColor:"#000",color:"#fff",borderColor:"green",borderRadius:10,paddingLeft:5,paddingRight:5,paddingTop:0,paddingBottom:0,textTransform:"unset"}},"Cancel")," "," "," ",c.a.createElement("button",{className:"btn btn-lg",type:"submit",style:{backgroundColor:"#E60000",color:"#fff",borderColor:"green",borderRadius:10,paddingLeft:5,paddingRight:5,paddingTop:0,paddingBottom:0,textTransform:"unset"}},"Submit")))))},w=(a(583),function(e){var t={columns:[{label:"#",field:"id",sort:"disabled",width:1},{label:"Email",field:"email",sort:"dsc",width:"40"},{label:"Role",field:"role",sort:"asc",width:"40"},{label:"Created On",field:"createdOn",sort:"asc",width:40},{label:"Action",field:"action",sort:"disabled",width:50,height:5}],rows:e.posts};return c.a.createElement(m.e,null,c.a.createElement(m.f,{id:"idforSubscription",small:!0,theadColor:"white",responsiveXl:!0,btn:!0,striped:!0,data:t,sortable:!0,bordered:!0,noBottomColumns:!0,responsiveSm:!0}))});a(762);N.b.configure();var S=function(e){e.buttonLabelView;var t=e.className,a=(e.errorInput,Object(i.useState)(!1)),r=Object(p.a)(a,2),l=r[0],n=r[1];function o(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("currentUser")),a=null===t||void 0===t?void 0:t.role,r=document.querySelector("#userData"),l=new FormData(r),n=l.get("name"),o=l.get("email"),s=l.get("userRole");(new XMLHttpRequest).onreadystatechange=function(){4===this.readyState&200===this.status&&alert("Uploaded!")};var i="* Name field may be empty",c="* Email field may be empty",d="* Role field may be empty";if(""==n&&null===s&&""==o)N.b.error(i),N.b.error(c),N.b.error(d);else if(""==n&&""==o)N.b.error(i),N.b.error(c);else if(""==n&&null===s)N.b.error(i),N.b.error(d);else if(""==o&&null===s)N.b.error(c),N.b.error(d);else if(""==n)N.b.error(i);else if(null===s)N.b.error(i);else{(new FormData).append("userForm",'{"name": "'+n+'","email": " '+o+'", "userRole": " '+s+'"} ');u.a.post(k[k.REACT_APP_ENVIRONMENT].API_CREATE_USER,{createdBy:a,email:o,role:s,username:o},{headers:{ContentType:"Application/json",Authorization:t.token}}).then((function(e){N.b.success("User Added Successfully"),u.a.post(k[k.REACT_APP_ENVIRONMENT].API_SEND_MAIL,{msg:"Hello"+o+", You have successfully been add to PCR Application directory. You may login with AD crendentials with, User Role - "+s,recipient:o,sender:"no-reply-PCR",subject:"Permissions Central Repository - PCR"}),setTimeout((function(){window.location.reload()}),1e3)}))}}var s=function(){return n(!l)};return c.a.createElement("div",{className:"container"},c.a.createElement("button",{className:"btn btn-lg icon-plus",onClick:s,style:{backgroundColor:"#E60000",color:"#fff",borderRadius:10,paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,float:"right"},role:"button"},c.a.createElement("a",{style:{fontFamily:"Roboto"}}," Create User ")),c.a.createElement("br",null),c.a.createElement(f.a,{isOpen:l,size:"lg",toggle:s,className:t},c.a.createElement(y.a,{id:"userData",onSubmit:o},c.a.createElement(b.a,{toggle:s},c.a.createElement("a",{style:{fontFamily:"Roboto"}}," Create User ")),c.a.createElement(g.a,null,c.a.createElement(N.a,{closeButton:!1,style:{color:"#fff"}}),c.a.createElement("a",{style:{color:"red",paddingRight:"10px"}},"*"),"Required",c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"container"},c.a.createElement(v.a,{row:!0},c.a.createElement(R.a,{htmlFor:"name",sm:"12",md:{size:2,offset:1},style:{color:"#E60000"}},c.a.createElement("a",{style:{color:"black"}},"*"),"Name:"),c.a.createElement(C.a,{sm:"12",md:{size:8,offset:0},style:{paddingLeft:"15px"}},c.a.createElement(U.a,{type:"text",name:"name",id:"name",placeholder:"Please provide name",required:!0}))),c.a.createElement(v.a,{row:!0},c.a.createElement(R.a,{htmlFor:"email",sm:"12",md:{size:2,offset:1},style:{color:"#E60000"}},c.a.createElement("a",{style:{color:"black"}},"*"),"Email:"),c.a.createElement(C.a,{sm:"12",md:{size:8,offset:0},style:{paddingLeft:"15px"}},c.a.createElement(U.a,{type:"email",name:"email",id:"email",placeholder:"Please provide email",required:!0}))),c.a.createElement(v.a,{row:!0},c.a.createElement(R.a,{htmlFor:"userRole",sm:"12",md:{size:2,offset:1},style:{color:"#E60000"}},c.a.createElement("a",{style:{color:"black"}},"*"),"Role:"),c.a.createElement(C.a,{sm:"12",md:{size:8,offset:0}},c.a.createElement(U.a,{type:"select",name:"userRole",id:"userRole",defaultValue:"Please select user role",required:!0},c.a.createElement("option",{disabled:!0},"Please select user role"),c.a.createElement("option",{value:"ADMIN"},"Admin"),c.a.createElement("option",{value:"USER"},"Regular User"),c.a.createElement("option",{value:"SUPER_ADMIN"},"Super Admin")))))),c.a.createElement(h.a,null,c.a.createElement("div",{className:"btn-group"},c.a.createElement("a",{style:{paddingRight:"0px"}},c.a.createElement("button",{className:"btn btn-lg",onClick:s,style:{backgroundColor:"#000",color:"#fff",borderColor:"green",borderRadius:10,paddingLeft:5,paddingRight:5,paddingTop:0,paddingBottom:0,textTransform:"unset"}},"Cancel")),c.a.createElement("a",{style:{paddingLeft:"0px"}},c.a.createElement("button",{type:"submit",onClick:o,className:"btn btn-lg",style:{backgroundColor:"#E60000",color:"#fff",borderColor:"green",borderRadius:10,paddingLeft:5,paddingRight:5,paddingTop:0,paddingBottom:0,textTransform:"unset"}},"Confirm")))))))},A=a(913);N.b.configure();c.a.createElement(A.a,{color:"danger"});var x=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(n.a)(this,Object(o.a)(t).call(this,e))).state={UserData:[],selectedSubscriptionId:"",loading:!1,currentUser:null},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this,a=JSON.parse(localStorage.getItem("currentUser"));this.setState({currentUser:a});new XMLHttpRequest;a.token&&this.setState({loading:!0},(function(){u.a.get(k[k.REACT_APP_ENVIRONMENT].API_GET_USER,{headers:{ContentType:"application/json",Authorization:a.token}}).then((function(a){var r=a.data.errCode,l=a.data||[],n=(l.map((function(e){return null===a.data?null:e.menuItem||[]})),l),o=n.length?n.map((function(t,a){var r=new Date(t.createdAt);new Date(t.createdOn);return{id:a+1,email:t.email,role:c.a.createElement(i.Fragment,null,"ADMIN"===t.role?"Admin":"","SUPER_ADMIN"===t.role?"Super Admin":"","USER"===t.role?"Regular User":"","userRoleRegular"===t.role?"Regular User":"","userRoleAdmin"===t.role?"Super Admin":""),createdOn:r.toString().substring(0,28),action:c.a.createElement(i.Fragment,null,c.a.createElement(m.d,null,c.a.createElement(O,Object.assign({selectedUserId:t.id,selectedUsername:t.username,selectedUserEmail:t.email,selectedCreatedAt:t.createdAt,selectedUserUpdatedAt:t.updatedAt,selectedUserCreatedBy:t.createdBy,selectedUserActive:t.active,selectedUserRole:t.role,constructor:e.constructor,changeBackdrop:e.changeBackdrop},e.state))))}})):[];t.setState({UserData:o,currentUserErrorCode:r})})).catch((function(e){e.response||(e.request?Object(N.b)("Error **"):Object(N.b)("Error***"))}))}))}},{key:"render",value:function(){var e;return"2"==(null===(e=this.state)||void 0===e?void 0:e.currentUserErrorCode)&&(window.location.href="/login",localStorage.removeItem("currentUser")),c.a.createElement("div",{className:"container",style:{backgroundColor:"#fff",height:"1200px"}},c.a.createElement(S,null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(w,{posts:this.state.UserData}))}}]),t}(i.Component);t.default=x}}]);
//# sourceMappingURL=46.88c9ad50.chunk.js.map