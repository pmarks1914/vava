(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[46],{635:function(e,t,a){e.exports=a.p+"static/media/LoginImg0.94ce547e.jpg"},673:function(e,t,a){},827:function(e,t,a){"use strict";a.r(t);var n=a(168),r=a(169),o=a(171),s=a(170),l=a(172),i=a(1),d=a.n(i),c=a(612),u=a(563),m=a(564),p=a(674),g=a(566),h=a(567),f=a(614),v=a(592),E=a(586),b=a(89),y=a.n(b),C=a(90),w=a(54),N=(a(673),a(114)),k=(a(613),a(611),a(590)),S=a.n(k),x=(a(635),a(635)),I=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:"",loggedIn:!1,isloading:!1,fields:{},errors:{}},a.loading=function(){return d.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a.login=function(e){e.preventDefault(),a.setState({isloading:!0}),a.handleValidation()&&y.a.post(C[C.REACT_APP_ENVIRONMENT].BASE_API_URL_AUTH,{username:a.state.username,password:a.state.password},{headers:{ContentType:"application/json","Access-Control-Allow-Origin":"*"}}).then((function(e){console.log("auth ===>",e);var t=null===e||void 0===e?void 0:e.data,n=null===e||void 0===e?void 0:e.status,r=null===e||void 0===e?void 0:e.statusText,o={token:t,username:a.state.username,errCode:n,errMsg:r};localStorage.setItem("currentUser",JSON.stringify(o)),a.setState({isloading:!1}),window.location.href="/dashboard"})).catch((function(e){N.b.error("Wrong User Credentials"),a.setState({isloading:!1})}))},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"handleValidation",value:function(){var e=this.state.fields,t={},a=!0;return e.username||(a=!1,t.username="Please enter your username "),e.password||(a=!1,t.password="You haven't added a password"),this.setState({errors:t}),a}},{key:"handleChange",value:function(e,t){var a=this.state.fields;a[e]=t.target.value,this.setState({fields:a})}},{key:"render",value:function(){var e,t,a,n,r,o,s,l=this;S()(document).ready((function(){S()("#loginFormHideBeforeDisplay").delay(2e3).fadeIn(2e3)}));this.state.isloading;return(null===(e=this.props)||void 0===e?void 0:null===(t=e.user)||void 0===t?void 0:t.customer)&&(null===(a=this.props)||void 0===a?void 0:null===(n=a.user)||void 0===n?void 0:null===(r=n.customer)||void 0===r?void 0:r.accountName)?d.a.createElement(w.c,{from:"/",to:"/dashboard"}):d.a.createElement("div",{style:{backgroundImage:"url("+x+")",backgroundColor:"#fff",backgroundSize:"100%",height:"100%",backgroundRepeat:"no-repeat"}},d.a.createElement("div",{style:{backgroundColor:"#4E4C45",color:"#fff",height:"50px"}},"fff"),d.a.createElement("div",{className:"app flex-row align-items-center ",style:{clear:"both"}},d.a.createElement(c.a,{className:"container",style:{display:"flex",justifyContent:"center"}},d.a.createElement(u.a,null,d.a.createElement(m.a,null,d.a.createElement(p.a,{id:"loginFormHideBeforeDisplay",style:{display:"none",padding:"0px",width:"400px",height:"auto"}},d.a.createElement(g.a,{className:"p-4 lginbdr"},d.a.createElement(h.a,null,d.a.createElement(f.a,null,d.a.createElement("p",{className:"text-muted"},"Sign in to your account"),d.a.createElement("div",{className:"loginerror"},this.state.errors.username),d.a.createElement(v.a,{className:"mb-3"},d.a.createElement(E.a,{type:"text",onChange:this.handleChange.bind(this,"username"),onInput:function(e){l.setState({username:e.target.value})},placeholder:"Username",autoComplete:"username",required:!0})),d.a.createElement("div",{className:"loginerror"},this.state.errors.password),d.a.createElement(v.a,{className:"mb-4"},d.a.createElement(E.a,{type:"password",onChange:this.handleChange.bind(this,"password"),onInput:function(e){l.setState({password:e.target.value})},placeholder:"Password",autoComplete:"current-password",required:!0})),d.a.createElement("br",null),d.a.createElement(u.a,{style:{float:"right"}},d.a.createElement(m.a,{xs:"12"},d.a.createElement("button",{type:"submit",style:{backgroundColor:"blue",color:"#fff",borderRadius:10,paddingLeft:20,paddingRight:20,paddingTop:2,paddingBottom:5},onClick:this.login},d.a.createElement("a",{style:{fontSize:"14px"}},"Sign in")),d.a.createElement("div",{className:"loginerror"},null===(o=this.props)||void 0===o?void 0:null===(s=o.user)||void 0===s?void 0:s.error))))))))))),d.a.createElement("div",{style:{backgroundColor:"#4E4C45",color:"#fff",height:"25px",clear:"both"}},"fff"))}}]),t}(i.Component);t.default=I}}]);
//# sourceMappingURL=46.4a9bd517.chunk.js.map