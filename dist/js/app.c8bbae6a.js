(function(t){function e(e){for(var s,c,o=e[0],i=e[1],u=e[2],b=0,d=[];b<o.length;b++)c=o[b],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(s=!1)}s&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var s={},r={app:0},a=[];function c(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=s,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(n,s,function(e){return t[e]}.bind(null,s));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="vuejs-blog-app/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},4678:function(t,e,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=a(t);return n(e)}function a(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=a,t.exports=r,r.id="4678"},"6b5c":function(t,e,n){"use strict";n("fe2d")},cd49:function(t,e,n){"use strict";n.r(e);var s=n("9ab4"),r=n("7a23"),a=Object(r["i"])("div",{class:"modal-content"},[Object(r["i"])("div",{id:"modal"})],-1),c={class:"section"},o={class:"container"};function i(t,e,n,s,i,u){var l=Object(r["F"])("navbar"),b=Object(r["F"])("router-view");return Object(r["x"])(),Object(r["h"])(r["a"],null,[Object(r["i"])("div",{class:"modal",style:Object(r["s"])(t.style)},[a,Object(r["i"])("button",{onClick:e[0]||(e[0]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.hide&&t.hide.apply(t,e)}),class:"modal-close is-large"})],4),Object(r["i"])("section",c,[Object(r["i"])("div",o,[Object(r["k"])(l),Object(r["k"])(b)])])],64)}var u={class:"navbar"},l={class:"navbar-end"},b={key:0,class:"buttons"},d={key:1,class:"buttons"},j=Object(r["j"])(" New Post ");function f(t,e,n,s,a,c){var o=Object(r["F"])("router-link");return Object(r["x"])(),Object(r["h"])(r["a"],null,[Object(r["i"])("div",u,[Object(r["i"])("div",l,[t.auth?(Object(r["x"])(),Object(r["h"])("div",d,[Object(r["k"])(o,{to:"/posts/new",class:"button"},{default:Object(r["M"])((function(){return[j]})),_:1}),Object(r["i"])("button",{class:"button",onClick:e[2]||(e[2]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.signOut&&t.signOut.apply(t,e)})}," Sign Out ")])):(Object(r["x"])(),Object(r["h"])("div",b,[Object(r["i"])("button",{class:"button","data-test":"sign-up",onClick:e[0]||(e[0]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.signUp&&t.signUp.apply(t,e)})}," Sign Up "),Object(r["i"])("button",{class:"button",onClick:e[1]||(e[1]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.signIn&&t.signIn.apply(t,e)})}," Sign In ")]))])]),(Object(r["x"])(),Object(r["f"])(r["c"],{to:"#modal"},[(Object(r["x"])(),Object(r["f"])(Object(r["G"])(t.component)))]))],64)}var p=["disabled"];function v(t,e,n,s,a,c){var o=Object(r["F"])("form-input");return Object(r["x"])(),Object(r["h"])("form",{onSubmit:e[2]||(e[2]=Object(r["O"])((function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.submit&&t.submit.apply(t,e)}),["prevent"]))},[Object(r["k"])(o,{modelValue:t.username,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.username=e}),name:"Username",type:"text",error:t.usernameStatus.message},null,8,["modelValue","error"]),Object(r["k"])(o,{modelValue:t.password,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.password=e}),name:"Password",type:"password",error:t.passwordStatus.message},null,8,["modelValue","error"]),Object(r["i"])("button",{class:"button is-primary",disabled:!t.usernameStatus.valid||!t.passwordStatus.valid}," sign in ",8,p)],32)}var O={class:"field"},h=["name"],m={class:"control"},g=["type","id","value"],y={class:"is-danger help"};function w(t,e,n,s,a,c){return Object(r["x"])(),Object(r["h"])("div",O,[Object(r["i"])("label",{class:"label",name:t.name},Object(r["I"])(t.name),9,h),Object(r["i"])("div",m,[Object(r["i"])("input",{class:"input",type:t.type,id:t.name,value:t.modelValue,onInput:e[0]||(e[0]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.handleInput&&t.handleInput.apply(t,e)})},null,40,g)]),Object(r["i"])("p",y,Object(r["I"])(t.error),1)])}var k=Object(r["l"])({props:{name:{type:String,required:!0},type:{type:String,default:"text"},modelValue:{type:String,required:!0},error:{type:String}},setup:function(t,e){var n=function(t){e.emit("update:modelValue",t.target.value)};return{handleInput:n}}}),x=n("d959"),P=n.n(x);const S=P()(k,[["render",w]]);var I=S;function M(){return{type:"required"}}function T(t){return{type:"length",options:t}}function z(t,e){for(var n=0,s=e;n<s.length;n++){var r=s[n];if("required"===r.type&&(!t||0===t.length))return{valid:!1,message:"This value is required"};if("length"===r.type&&(t.length<r.options.min||t.length>r.options.max))return{valid:!1,message:"The value must be between "+r.options.min+" and "+r.options.max}}return{valid:!0}}var U=n("bc3a"),E=n.n(U),F=Symbol("store"),_=function(){function t(t){this.state=Object(r["B"])(t)}return t.prototype.install=function(t){t.provide(F,this)},t.prototype.getState=function(){return Object(r["C"])(this.state)},t.prototype.createPost=function(t){return Object(s["b"])(this,void 0,void 0,(function(){var e;return Object(s["c"])(this,(function(n){switch(n.label){case 0:return[4,E.a.post("/posts",t)];case 1:return e=n.sent(),this.state.posts.all.set(e.data.id,e.data),this.state.posts.ids.push(e.data.id),[2]}}))}))},t.prototype.updatePost=function(t){return Object(s["b"])(this,void 0,void 0,(function(){var e;return Object(s["c"])(this,(function(n){switch(n.label){case 0:return[4,E.a.put("/posts",t)];case 1:return e=n.sent(),this.state.posts.all.set(e.data.id,e.data),[2]}}))}))},t.prototype.createUser=function(t){return Object(s["b"])(this,void 0,void 0,(function(){var e;return Object(s["c"])(this,(function(n){switch(n.label){case 0:return[4,E.a.post("/users",t)];case 1:return e=n.sent(),this.state.authors.all.set(e.data.id,e.data),this.state.authors.ids.push(e.data.id),this.state.authors.currentUserId=e.data.id,console.log(this.state.authors),[2]}}))}))},t.prototype.fetchPosts=function(){return Object(s["b"])(this,void 0,void 0,(function(){var t,e,n,r,a;return Object(s["c"])(this,(function(s){switch(s.label){case 0:return[4,E.a.get("/posts")];case 1:for(t=s.sent(),e={ids:[],all:new Map,loaded:!0},n=0,r=t.data;n<r.length;n++)a=r[n],e.ids.push(a.id),e.all.set(a.id,a);return this.state.posts=e,[2]}}))}))},t}(),D=new Map,q=new _({authors:{all:new Map,ids:[],loaded:!1,currentUserId:void 0},posts:{all:D,ids:[],loaded:!1}});function A(){var t=Object(r["o"])(F);if(!t)throw Error("Did you forgot to call provide?");return t}var C=Object(r["D"])(!1),V=Object(r["D"])();function L(){return{component:V,show:C,showModal:function(){return C.value=!0},hideModal:function(){return C.value=!1}}}var N=Object(r["l"])({components:{FormInput:I},setup:function(){var t=this,e=Object(r["D"])("username"),n=Object(r["d"])((function(){return z(e.value,[M(),T({min:5,max:10})])})),a=Object(r["D"])("password"),c=Object(r["d"])((function(){return z(a.value,[M(),T({min:10,max:40})])})),o=A(),i=L(),u=function(r){return Object(s["b"])(t,void 0,void 0,(function(){var t;return Object(s["c"])(this,(function(s){switch(s.label){case 0:return n.value.valid&&c.value.valid?(t={id:"-1",username:e.value,password:a.value},[4,o.createUser(t)]):[2];case 1:return s.sent(),i.hideModal(),[2]}}))}))};return{usernameStatus:n,username:e,passwordStatus:c,password:a,submit:u}}});n("d2f3");const H=P()(N,[["render",v],["__scopeId","data-v-66d3a510"]]);var W=H,J=Object(r["l"])({components:{Signup:W},setup:function(){var t=L(),e=A(),n=Object(r["d"])((function(){return!!e.getState().authors.currentUserId})),s=function(){var e=Object(r["l"])({setup:function(){return function(){return Object(r["n"])("div","Demo")}}});t.component.value=Object(r["p"])(e),t.showModal()},a=function(){t.showModal(),t.component.value=Object(r["p"])(W)},c=function(){};return{component:t.component,auth:n,signIn:s,signUp:a,signOut:c}}});const B=P()(J,[["render",f]]);var G=B,K=Object(r["l"])({name:"App",components:{Navbar:G,FormInput:I},setup:function(){var t=L(),e=Object(r["d"])((function(){return{display:t.show.value?"block":"none"}}));return{style:e,hide:function(){t.hideModal()}}}});n("6b5c");const Q=P()(K,[["render",i]]);var R=Q,X=n("6c02");function Y(t,e,n,s,a,c){var o=Object(r["F"])("timeline"),i=Object(r["F"])("loader");return Object(r["x"])(),Object(r["f"])(r["b"],null,{default:Object(r["M"])((function(){return[Object(r["k"])(o)]})),fallback:Object(r["M"])((function(){return[Object(r["k"])(i)]})),_:1})}var Z={class:"message is-primary is-marginless"},$={class:"message-header"},tt={class:"is-primary panel"},et={class:"panel-tabs"},nt=["data-test","onClick"];function st(t,e,n,s,a,c){var o=Object(r["F"])("timeline-post");return Object(r["x"])(),Object(r["h"])(r["a"],null,[Object(r["i"])("div",Z,[Object(r["i"])("div",$,[Object(r["i"])("div",null,"Posts for "+Object(r["I"])(t.currentPeriod.toLowerCase()),1)])]),Object(r["i"])("nav",tt,[Object(r["i"])("span",et,[(Object(r["x"])(!0),Object(r["h"])(r["a"],null,Object(r["E"])(t.periods,(function(e){return Object(r["x"])(),Object(r["h"])("a",{key:e,class:Object(r["r"])({"is-active":e===t.currentPeriod}),"data-test":e,onClick:function(n){return t.setPeriod(e)}},Object(r["I"])(e),11,nt)})),128))]),(Object(r["x"])(!0),Object(r["h"])(r["a"],null,Object(r["E"])(t.posts,(function(t){return Object(r["x"])(),Object(r["f"])(o,{key:t.id,post:t,class:"panel-block"},null,8,["post"])})),128))])],64)}var rt=n("c1df"),at=n.n(rt),ct={class:"is-flex is-flex-direction-column is-align-items-flex-start"};function ot(t,e,n,s,a,c){var o=Object(r["F"])("router-link");return Object(r["x"])(),Object(r["f"])(o,{key:t.post.id,class:"panel-block",to:t.to},{default:Object(r["M"])((function(){return[Object(r["i"])("div",ct,[Object(r["i"])("a",null,Object(r["I"])(t.post.title),1),Object(r["i"])("div",null,Object(r["I"])(t.post.created.format("Do MMM")),1)])]})),_:1},8,["to"])}var it=Object(r["l"])({name:"TimelinePost",props:{post:{type:Object,required:!0}},setup:function(t){return{to:"/posts/"+t.post.id}}});const ut=P()(it,[["render",ot]]);var lt=ut,bt=Object(r["l"])({name:"Timeline",components:{TimelinePost:lt},setup:function(){return Object(s["b"])(this,void 0,void 0,(function(){var t,e,n,a,c,o;return Object(s["c"])(this,(function(s){switch(s.label){case 0:return t=["Today","This Week","This Month"],e=Object(r["D"])("Today"),n=A(),n.getState().posts.loaded?[3,2]:[4,n.fetchPosts()];case 1:s.sent(),s.label=2;case 2:return a=n.getState().posts.ids.reduce((function(t,e){var s=n.getState().posts.all.get(e);return s?t.concat(s):Error("The post was not found")}),[]),c=Object(r["d"])((function(){return a.filter((function(t){return"Today"===e.value?t.created.isAfter(at()().subtract(1,"day")):"This Week"===e.value?t.created.isAfter(at()().subtract(1,"week")):"This Month"===e.value&&t.created.isAfter(at()().subtract(1,"month"))}))})),o=function(t){e.value=t},[2,{posts:c,periods:t,currentPeriod:e,setPeriod:o}]}}))}))}});const dt=P()(bt,[["render",st]]);var jt=dt;const ft={class:"progress is-primary is-small"};function pt(t,e){return Object(r["x"])(),Object(r["h"])("progress",ft)}const vt={},Ot=P()(vt,[["render",pt]]);var ht=Ot,mt=Object(r["l"])({name:"App",components:{Timeline:jt,Loader:ht}});const gt=P()(mt,[["render",Y]]);var yt=gt;function wt(t,e,n,s,a,c){var o=Object(r["F"])("post-writer");return Object(r["x"])(),Object(r["f"])(o,{post:t.newPost,onSave:t.save},null,8,["post","onSave"])}var kt={class:"columns"},xt={class:"column"},Pt={class:"field"},St=Object(r["i"])("div",{class:"label"},"New Post",-1),It={class:"columns"},Mt={class:"column"},Tt={class:"column"},zt=["innerHTML"],Ut={class:"columns"},Et={class:"column"};function Ft(t,e,n,s,a,c){return Object(r["x"])(),Object(r["h"])(r["a"],null,[Object(r["i"])("div",kt,[Object(r["i"])("div",xt,[Object(r["i"])("div",Pt,[St,Object(r["N"])(Object(r["i"])("input",{type:"text",class:"input","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.title=e}),"data-test":"title"},null,512),[[r["K"],t.title]])])])]),Object(r["i"])("div",It,[Object(r["i"])("div",Mt,[Object(r["i"])("div",{contenteditable:"",ref:"contentEditable",onInput:e[1]||(e[1]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.handleInput&&t.handleInput.apply(t,e)}),"data-test":"content"},null,544)]),Object(r["i"])("div",Tt,[Object(r["i"])("div",{innerHTML:t.html},null,8,zt)])]),Object(r["i"])("div",Ut,[Object(r["i"])("div",Et,[Object(r["i"])("button",{onClick:e[2]||(e[2]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.save&&t.save.apply(t,e)}),"data-test":"submit",class:"button is-primary is-pulled-right"}," Submit ")])])],64)}var _t=n("0e54"),Dt=n("1487"),qt=n.n(Dt),At=n("b047"),Ct=n.n(At),Vt=Object(r["l"])({name:"App",props:{post:{type:Object,required:!0}},emits:{save:function(t){return!0}},setup:function(t,e){var n=Object(r["D"])(t.post.title),a=Object(r["D"])(null),c=Object(r["D"])(t.post.markdown||""),o=Object(r["D"])(""),i=function(t){o.value=Object(_t["parse"])(t,{gfm:!0,breaks:!0,highlight:function(t){return qt.a.highlightAuto(t).value}})};Object(r["L"])(c,Ct()((function(t){i(t)}),250),{immediate:!0});var u=function(){if(!a.value)throw Error("its not gonna happen");c.value=a.value.innerText||""};Object(r["v"])((function(){if(!a.value)throw Error("its not gonna happen");a.value.textContent=c.value}));var l=function(){var r=Object(s["a"])(Object(s["a"])({},t.post),{title:n.value,html:o.value,markdown:c.value});e.emit("save",r)};return{save:l,html:o,title:n,contentEditable:a,content:c,handleInput:u}}});const Lt=P()(Vt,[["render",Ft]]);var Nt=Lt,Ht=Object(r["l"])({name:"NewPost",components:{PostWriter:Nt},setup:function(){var t=this,e=A(),n=Object(X["d"])(),r=e.getState().authors.currentUserId;if(!r)throw Error("currentUserId was not found.");var a={id:"-1",title:"New Post",created:at()().subtract(1,"second"),authorId:r},c=function(r){return Object(s["b"])(t,void 0,void 0,(function(){return Object(s["c"])(this,(function(t){switch(t.label){case 0:return[4,e.createPost(r)];case 1:return t.sent(),n.push("/"),[2]}}))}))};return{newPost:a,save:c}}});const Wt=P()(Ht,[["render",wt]]);var Jt=Wt;function Bt(t,e,n,s,a,c){var o=Object(r["F"])("post-viewer"),i=Object(r["F"])("loader");return Object(r["x"])(),Object(r["f"])(r["b"],null,{default:Object(r["M"])((function(){return[Object(r["k"])(o)]})),fallback:Object(r["M"])((function(){return[Object(r["k"])(i)]})),_:1})}var Gt={class:"columns"},Kt=Object(r["i"])("div",{class:"column"},null,-1),Qt={class:"column is-two-thirds"},Rt=Object(r["j"])(" Edit "),Xt=["innerHTML"],Yt=Object(r["i"])("div",{class:"column"},null,-1);function Zt(t,e,n,s,a,c){var o=Object(r["F"])("router-link");return Object(r["x"])(),Object(r["h"])("div",Gt,[Kt,Object(r["i"])("div",Qt,[t.canEdit?(Object(r["x"])(),Object(r["f"])(o,{key:0,"data-test":"can-edit",to:"/posts/"+t.post.id+"/edit",class:"button is-link is-rounded"},{default:Object(r["M"])((function(){return[Rt]})),_:1},8,["to"])):Object(r["g"])("",!0),Object(r["i"])("h1",null,Object(r["I"])(t.post.title),1),Object(r["i"])("div",{innerHTML:t.post.html},null,8,Xt)]),Yt])}var $t=Object(r["l"])({setup:function(t){return Object(s["b"])(this,void 0,void 0,(function(){var t,e,n,r;return Object(s["c"])(this,(function(s){switch(s.label){case 0:return t=A(),e=Object(X["c"])().params.id,t.getState().posts.loaded?[3,2]:[4,t.fetchPosts()];case 1:s.sent(),s.label=2;case 2:if(n=t.getState().posts.all.get(e),!n)throw Error("Post was not found.");return r=n.authorId===t.getState().authors.currentUserId,[2,{canEdit:r,post:n}]}}))}))}});const te=P()($t,[["render",Zt]]);var ee=te,ne=Object(r["l"])({components:{PostViewer:ee,Loader:ht}});const se=P()(ne,[["render",Bt]]);var re=se;function ae(t,e,n,s,a,c){var o=Object(r["F"])("post-editor"),i=Object(r["F"])("loader");return Object(r["x"])(),Object(r["f"])(r["b"],null,{default:Object(r["M"])((function(){return[Object(r["k"])(o)]})),fallback:Object(r["M"])((function(){return[Object(r["k"])(i)]})),_:1})}function ce(t,e,n,s,a,c){var o=Object(r["F"])("post-writer");return Object(r["x"])(),Object(r["f"])(o,{post:t.post,onSave:t.save},null,8,["post","onSave"])}var oe=Object(r["l"])({components:{PostWriter:Nt},setup:function(t){return Object(s["b"])(this,void 0,void 0,(function(){var t,e,n,r,a,c=this;return Object(s["c"])(this,(function(o){switch(o.label){case 0:return t=A(),e=Object(X["d"])(),n=Object(X["c"])().params.id,t.getState().posts.loaded?[3,2]:[4,t.fetchPosts()];case 1:o.sent(),o.label=2;case 2:if(r=t.getState().posts.all.get(n),!r)throw Error("Post was not found.");return r.authorId!==t.getState().authors.currentUserId&&e.push("/"),a=function(n){return Object(s["b"])(c,void 0,void 0,(function(){return Object(s["c"])(this,(function(s){switch(s.label){case 0:return[4,t.updatePost(n)];case 1:return s.sent(),e.push("/"),[2]}}))}))},[2,{post:r,save:a}]}}))}))}});const ie=P()(oe,[["render",ce]]);var ue=ie,le=Object(r["l"])({components:{PostEditor:ue,Loader:ht}});const be=P()(le,[["render",ae]]);var de=be;function je(t){var e=Object(X["a"])({history:Object(X["b"])("vuejs-blog-app"),routes:[{path:"/",component:yt},{path:"/posts/:id",component:re},{path:"/posts/:id/edit",component:de,meta:{requiresAuth:!0}},{path:"/posts/new",component:Jt,meta:{requiresAuth:!0}}]});return e.beforeEach((function(e,n,s){var r=!!t.getState().authors.currentUserId;e.meta.requiresAuth?e.meta.requiresAuth&&r?s():s({path:"/"}):s()})),e}var fe={id:"1",title:"Today",created:at()().subtract(1,"second"),authorId:"1"},pe={id:"2",title:"This week",created:at()().subtract(2,"days"),authorId:"1"},ve={id:"3",title:"This Month",created:at()().subtract(12,"days"),authorId:"1"},Oe=n("0f40"),he=n.n(Oe);n("9f21");function me(){return new Promise((function(t){setTimeout(t,2e3)}))}E.a.get=function(t){return Object(s["b"])(void 0,void 0,void 0,(function(){return Object(s["c"])(this,(function(e){switch(e.label){case 0:return"/posts"!==t?[3,2]:[4,me()];case 1:return e.sent(),[2,Promise.resolve({data:[fe,pe,ve]})];case 2:return[2]}}))}))},E.a.post=function(t,e){return Object(s["b"])(void 0,void 0,void 0,(function(){var n,r,a;return Object(s["c"])(this,(function(c){switch(c.label){case 0:return"/posts"!==t?[3,2]:(r=he()(100,1e4),[4,me()]);case 1:return c.sent(),n=Object(s["a"])(Object(s["a"])({},e),{id:r.toString(),title:e.title,created:e.created,authorId:e.authorId}),[2,Promise.resolve({data:n})];case 2:return"/users"!==t?[3,4]:(r=he()(100,1e4),[4,me()]);case 3:return c.sent(),a={id:r.toString(),username:e.username},[2,Promise.resolve({data:a})];case 4:return[2]}}))}))},E.a.put=function(t,e){return Object(s["b"])(void 0,void 0,void 0,(function(){var n;return Object(s["c"])(this,(function(r){switch(r.label){case 0:return"/posts"!==t?[3,2]:[4,me()];case 1:return r.sent(),n=Object(s["a"])(Object(s["a"])({},e),{title:e.title,created:e.created,authorId:e.authorId}),[2,Promise.resolve({data:n})];case 2:return[2]}}))}))};var ge=Object(r["e"])(R),ye=je(q);ge.use(ye),ge.use(q),ge.mount("#app")},d2f3:function(t,e,n){"use strict";n("f770")},f770:function(t,e,n){},fe2d:function(t,e,n){}});
//# sourceMappingURL=app.c8bbae6a.js.map