(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{35:function(e,n,t){e.exports=t.p+"static/media/map-pin.23ae266f.svg"},52:function(e,n,t){e.exports=t.p+"static/media/history.ec071b1e.svg"},53:function(e,n,t){e.exports=t.p+"static/media/calendar.969ce3e0.svg"},59:function(e,n,t){e.exports=t.p+"static/media/LogTracker.5bddf550.svg"},64:function(e,n,t){e.exports=t(90)},90:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(16),c=t.n(l),i=t(25),o=t(26),u=t(30),m=t(31),s=t(60),d=t(18),p=t(13),E=t(14),f=t(51),v=t.n(f),h=t(92),g=t(93),b=t(95),x=t(94),y=t(52),j=t.n(y),_=t(35),O=t.n(_),k=t(53),w=t.n(k);function S(){var e=Object(p.a)(["\n    font-size: 0.8rem;\n"]);return S=function(){return e},e}function F(){var e=Object(p.a)(["\n    font-size: 1rem;\n"]);return F=function(){return e},e}function L(){var e=Object(p.a)(["\n"]);return L=function(){return e},e}function B(){var e=Object(p.a)(["\n    h5 {\n      color: #101010;\n    }\n\n    span {\n      font-size: 15px;\n      opacity: 0.7;\n    }\n"]);return B=function(){return e},e}function D(){var e=Object(p.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    img {\n      height: 80px;\n      border-radius: 100%;\n    }\n"]);return D=function(){return e},e}function M(){var e=Object(p.a)(["\n  height: 120px;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  border: 1px solid #E9E9E9;\n  border-radius: 4px;\n  opacity: 1;\n  margin: 16px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    cursor: pointer;\n    box-shadow: 0px 4px 10px #16161629;\n    transition-duration: 0.5s;\n  }\n}\n"]);return M=function(){return e},e}function U(){var e=Object(p.a)(["\n  padding: 2rem 0;\n"]);return U=function(){return e},e}var z=E.a.div(U()),C=E.a.div(M()),N=E.a.div(D()),A=E.a.div(B()),H=E.a.div(L()),J=E.a.div(F()),T=E.a.div(S()),W=function(e){Object(m.a)(t,e);var n=Object(u.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=n.call(this,e)).openModal=function(e){var n=a.state.userList;a.setState({modalState:!0});var t=n.filter((function(n){return n.id==e})),r=t[0].activity_periods.map((function(e){var n=e.start_time,t=e.end_time,a=n.split("  "),r=t.split("  ");return{date:a[0],start_time:a[1],end_time:r[1]}}));console.log(r),t.activity_periods=r,a.setState({currentUserData:t})},a.closeModal=function(){a.setState({modalState:!1})},a.loadUserData=function(){return v.a.get("/GetUserList").then((function(e){return e.data})).catch((function(e){console.log(e)}))},a.componentDidMount=function(){a.loadUserData().then((function(e){1==e.ok&&a.setState({userList:e.members})}))},a.state={modalState:!1,userList:[],currentUserData:null},a}return Object(o.a)(t,[{key:"render",value:function(){var e=this,n=this.state,t=n.modalState,a=n.userList,l=n.currentUserData;return r.a.createElement(z,null,r.a.createElement(h.a,null,a.length?a.map((function(n){return r.a.createElement(g.a,{sm:4},r.a.createElement(C,{onClick:function(){e.openModal(n.id)}},r.a.createElement(h.a,null,r.a.createElement(g.a,{sm:3},r.a.createElement(N,null,r.a.createElement("img",{src:n.image_url}))),r.a.createElement(g.a,{sm:9,className:"user-details"},r.a.createElement(A,null,r.a.createElement("h5",null,n.real_name),r.a.createElement("span",null,r.a.createElement("img",{src:O.a})," ",n.tz),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("img",{src:j.a})," ",n.activity_periods[n.activity_periods.length-1].end_time))))))})):null),r.a.createElement(b.a,{show:t,onHide:this.closeModal,animation:!0},r.a.createElement(b.a.Header,{closeButton:!0},r.a.createElement(b.a.Title,null,null!==l?l[0].real_name:null," Activity")),r.a.createElement(b.a.Body,null,null!==l?l.map((function(e){return r.a.createElement(x.a,null,r.a.createElement(h.a,null,r.a.createElement(g.a,{sm:3},r.a.createElement(N,null,r.a.createElement("img",{src:e.image_url}))),r.a.createElement(g.a,{sm:9},r.a.createElement(A,null,r.a.createElement("h5",null,e.real_name),r.a.createElement("span",null,r.a.createElement("img",{src:O.a})," ",e.tz)))),r.a.createElement("hr",null),r.a.createElement(H,null,r.a.createElement(h.a,null,r.a.createElement(g.a,{xs:4},r.a.createElement("h5",null,"Activity Log")),r.a.createElement(g.a,{xs:8},r.a.createElement("img",{src:w.a}))),e.activity_periods.length?e.activity_periods.map((function(e){return r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement(J,null,e.start_time," - ",e.end_time)),r.a.createElement(g.a,null,r.a.createElement(T,null,e.date)))})):null))})):null)))}}]),t}(a.Component),G=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Oops! No page found."))},I=function(e){return r.a.createElement(x.a,null,e.children)},$=t(96),q=t(59),K=t.n(q);function P(){var e=Object(p.a)(["\n  .navbar {\n    background-color: #fff;\n    padding: 2rem 0;    \n  }\n\n  .container {\n    justify-content: center;\n  }\n\n  .navbar-brand, .navbar-nav, .nav-link{\n    color: #000;\n    \n    .logo {\n      height: 50px;\n    }\n\n    &:hover {\n      color: #FBC900;\n    }\n  }\n"]);return P=function(){return e},e}var Q=E.a.div(P()),R=function(){return r.a.createElement(Q,null,r.a.createElement($.a,{expand:"lg"},r.a.createElement(x.a,null,r.a.createElement($.a.Brand,{href:"/"},r.a.createElement("img",{src:K.a,className:"logo"})))))},V=function(e){Object(m.a)(t,e);var n=Object(u.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null),r.a.createElement(I,null,r.a.createElement(s.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:W}),r.a.createElement(d.a,{exact:!0,path:"/home",component:W}),r.a.createElement(d.a,{component:G})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.ca81728c.chunk.js.map