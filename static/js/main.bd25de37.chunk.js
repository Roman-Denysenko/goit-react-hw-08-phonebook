(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{22:function(t,e,n){"use strict";var r,c,a,o,u,i,s=n(29),b=n(2),j=n(17),f=n(3),d=n(7),l=n(4),O={name:null,email:null},p=Object(b.c)(O,(r={},Object(f.a)(r,l.l,(function(t,e){return e.payload.user})),Object(f.a)(r,l.f,(function(t,e){return e.payload.user})),Object(f.a)(r,l.i,(function(){return O})),Object(f.a)(r,l.c,(function(t,e){return e.payload})),r)),h=Object(b.c)(null,(c={},Object(f.a)(c,l.l,(function(t,e){return e.payload.token})),Object(f.a)(c,l.f,(function(t,e){return e.payload.token})),Object(f.a)(c,l.i,(function(){return null})),c)),m=Object(b.c)(null,(a={},Object(f.a)(a,l.j,(function(t,e){return e.payload})),Object(f.a)(a,l.d,(function(t,e){return e.payload})),Object(f.a)(a,l.g,(function(t,e){return e.payload})),Object(f.a)(a,l.a,(function(t,e){return e.payload})),a)),x=Object(b.c)(!1,(o={},Object(f.a)(o,l.l,(function(){return!0})),Object(f.a)(o,l.f,(function(){return!0})),Object(f.a)(o,l.c,(function(){return!0})),Object(f.a)(o,l.j,(function(){return!1})),Object(f.a)(o,l.d,(function(){return!1})),Object(f.a)(o,l.a,(function(){return!1})),Object(f.a)(o,l.i,(function(){return!1})),o)),A=Object(d.c)({isAuthenticated:x,user:p,token:h,error:m}),g=n(53),v=n.n(g),k=n(9),R=Object(b.c)([],(u={},Object(f.a)(u,k.i,(function(t,e){return e.payload})),Object(f.a)(u,k.c,(function(t,e){var n=e.payload;return[].concat(Object(s.a)(t),[n])})),Object(f.a)(u,k.f,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),u)),E=Object(b.c)("",Object(f.a)({},k.j,(function(t,e){return e.payload}))),M=Object(b.c)(!1,(i={},Object(f.a)(i,k.h,(function(){return!0})),Object(f.a)(i,k.i,(function(){return!1})),Object(f.a)(i,k.g,(function(){return!1})),Object(f.a)(i,k.b,(function(){return!0})),Object(f.a)(i,k.c,(function(){return!1})),Object(f.a)(i,k.a,(function(){return!1})),Object(f.a)(i,k.e,(function(){return!0})),Object(f.a)(i,k.f,(function(){return!1})),Object(f.a)(i,k.d,(function(){return!1})),i)),N=Object(b.c)(null,{}),y=Object(d.c)({items:R,filter:E,loading:M,error:N}),C=Object(s.a)(Object(b.d)({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}})),Q={key:"auth",storage:v.a,whitelist:["token"]},B=Object(b.a)({reducer:{auth:Object(j.g)(Q,A),contacts:y},middleware:C,devTools:!1}),G=Object(j.h)(B);e.a={store:B,persistor:G}},23:function(t,e,n){t.exports={container:"UserMenu_container__2xN9f",element:"UserMenu_element__2cbu2"}},26:function(t,e,n){"use strict";n.d(e,"d",(function(){return f})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return O}));var r=n(18),c=n.n(r),a=n(24),o=n(4),u=n(19),i=n.n(u),s=n(22);i.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var b=function(t){i.a.defaults.headers.common.Authorization="Bearer ".concat(t)},j=function(){i.a.defaults.headers.common.Authorization=""},f=function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(o.k)()),e.prev=1,e.next=4,i.a.post("/users/signup",t);case 4:r=e.sent,b(r.data.token),console.log(r),n(Object(o.l)(r.data)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n(Object(o.j)(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},d=function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(o.e)()),e.prev=1,e.next=4,i.a.post("/users/login",t);case 4:r=e.sent,b(r.data.token),n(Object(o.f)(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(o.d)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},l=function(){return function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(o.h)()),t.prev=1,t.next=4,i.a.post("/users/logout");case 4:t.sent,j(),e(Object(o.i)()),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(o.g)(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},O=function(){return function(){var t=Object(a.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=s.a.store.getState().auth.token){t.next=3;break}return t.abrupt("return");case 3:return b(n),e(Object(o.b)()),t.prev=5,t.next=8,i.a.get("/users/current");case 8:r=t.sent,e(Object(o.c)(r.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(Object(o.a)(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e){return t.apply(this,arguments)}}()}},31:function(t,e,n){t.exports={container:"AuthNav_container__3AEJv",element:"AuthNav_element__1diJJ"}},35:function(t,e,n){t.exports={header:"Header_header__27K5d",authorization:"Header_authorization__1FGAd"}},36:function(t,e,n){t.exports={link:"Navigation_link__Sgo-a"}},4:function(t,e,n){"use strict";n.d(e,"k",(function(){return c})),n.d(e,"l",(function(){return a})),n.d(e,"j",(function(){return o})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return j})),n.d(e,"g",(function(){return f})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return O}));var r=n(2),c=Object(r.b)("auth/registerRequest"),a=Object(r.b)("auth/registerSuccess"),o=Object(r.b)("auth/registerError"),u=Object(r.b)("auth/loginRequest"),i=Object(r.b)("auth/loginSuccess"),s=Object(r.b)("auth/loginError"),b=Object(r.b)("auth/logoutRequest"),j=Object(r.b)("auth/logoutSuccess"),f=Object(r.b)("auth/logoutError"),d=Object(r.b)("auth/getCurrentUserRequest"),l=Object(r.b)("auth/getCurrentUserSuccess"),O=Object(r.b)("auth/getCurrentUserError")},55:function(t,e,n){t.exports={container:"App_container__1kbRm",enter:"App_enter__1nSqt",enterActive:"App_enterActive__BCqrn",exit:"App_exit__BsGR7",exitActive:"App_exitActive__17SZs",appear:"App_appear__2f4br",appearActive:"App_appearActive__3fcPO"}},66:function(t,e,n){},88:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(25),o=n.n(a),u=n(13),i=n(15),s=n(22),b=n(54),j=(n(66),n(39)),f=n(40),d=n(42),l=n(41),O=n(6),p=n(55),h=n.n(p),m={home:"/",contacts:"/contacts",login:"/login",registration:"/registration"},x=n(35),A=n.n(x),g=n(36),v=n.n(g),k=n(1),R=function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(i.b,{exact:"true",to:m.home,className:v.a.link,children:"Home"}),Object(k.jsx)(i.b,{to:m.contacts,className:v.a.link,children:"Contacts"})]})};R.propType={};var E=R,M=n(31),N=n.n(M),y=function(){return Object(k.jsxs)("div",{className:N.a.container,children:[Object(k.jsx)(i.b,{to:m.login,className:N.a.element,children:"Login"}),Object(k.jsx)(i.b,{to:m.registration,className:N.a.element,children:"Registration"})]})};y.propType={};var C=y,Q=n(16),B=n.n(Q),G=n(23),S=n.n(G),w=function(t){return t.auth.isAuthenticated},P=function(t){return t.auth.user.email},X=n(26),J=function(t){var e=t.email,n=t.onLogout,r=t.avatar;return Object(k.jsxs)("div",{className:S.a.container,children:[Object(k.jsx)("img",{src:r,alt:"",width:"32",className:S.a.element}),Object(k.jsxs)("span",{className:S.a.element,children:["Welcome: ",e]}),Object(k.jsx)("button",{type:"button",onClick:n,className:S.a.element,children:"Logout"})]})};J.propType={mail:B.a.string,onLogout:B.a.func,avatar:B.a.string};var T={onLogout:X.c},F=Object(u.b)((function(t){return{email:P(t),avatar:"data:image/png;base64,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"}}),T)(J),q=function(t){var e=t.Authorization;return Object(k.jsxs)("header",{className:A.a.header,children:[Object(k.jsx)("nav",{children:Object(k.jsx)(E,{})}),Object(k.jsx)("div",{className:A.a.authorization,children:e?Object(k.jsx)(F,{}):Object(k.jsx)(C,{})})]})};q.propType={};var L=Object(u.b)((function(t){return{Authorization:w(t)}}))(q),z=n(20),U=n(30),Z=Object(u.b)((function(t){return{isAuthenticated:w(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(U.a)(t,["component","isAuthenticated","redirectTo"]);return Object(k.jsx)(O.b,Object(z.a)(Object(z.a)({},c),{},{render:function(t){return n?Object(k.jsx)(e,Object(z.a)({},t)):Object(k.jsx)(O.a,{to:r})}}))})),Y=Object(u.b)((function(t){return{isAuthenticated:w(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(U.a)(t,["component","isAuthenticated","redirectTo"]);return Object(k.jsx)(O.b,Object(z.a)(Object(z.a)({},c),{},{render:function(t){return n&&c.restricted?Object(k.jsx)(O.a,{to:r}):Object(k.jsx)(e,Object(z.a)({},t))}}))})),_=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,105))})),W=Object(r.lazy)((function(){return Promise.all([n.e(4),n.e(3)]).then(n.bind(null,101))})),D=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,106))})),I=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,107))})),K=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){return Object(j.a)(this,n),e.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(k.jsxs)("div",{className:h.a.container,children:[Object(k.jsx)(L,{}),Object(k.jsx)(r.Suspense,{fallback:Object(k.jsx)("p",{children:"Loading..."}),children:Object(k.jsxs)(O.d,{children:[Object(k.jsx)(O.b,{exact:!0,path:m.home,component:_}),Object(k.jsx)(Z,{path:m.contacts,redirectTo:m.login,component:W}),Object(k.jsx)(Y,{path:m.login,restricted:!0,redirectTo:m.contacts,component:I}),Object(k.jsx)(Y,{path:m.registration,restricted:!0,redirectTo:m.contacts,component:D})]})})]})}}]),n}(r.Component),V={onGetCurrentUser:X.a},H=Object(u.b)(null,V)(K);o.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(u.a,{store:s.a.store,children:Object(k.jsx)(i.a,{children:Object(k.jsx)(b.a,{loading:null,persistor:s.a.persistor,children:Object(k.jsx)(H,{})})})})}),document.getElementById("root"))},9:function(t,e,n){"use strict";n.d(e,"h",(function(){return c})),n.d(e,"i",(function(){return a})),n.d(e,"g",(function(){return o})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"e",(function(){return b})),n.d(e,"f",(function(){return j})),n.d(e,"d",(function(){return f})),n.d(e,"j",(function(){return d}));var r=n(2),c=Object(r.b)("fetchContactsRequest"),a=Object(r.b)("fetchContactsSuccess"),o=Object(r.b)("fetchContactsError"),u=Object(r.b)("addContactRequest"),i=Object(r.b)("addContactSuccess"),s=Object(r.b)("addContactError"),b=Object(r.b)("deleteContactRequest"),j=Object(r.b)("deleteContactSuccess"),f=Object(r.b)("deleteContactError"),d=Object(r.b)("filterContacts")}},[[88,1,2]]]);
//# sourceMappingURL=main.bd25de37.chunk.js.map