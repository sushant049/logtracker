(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{51:function(e,n,t){e.exports=t.p+"static/media/history.ec071b1e.svg"},52:function(e,n,t){e.exports=t.p+"static/media/map-pin.23ae266f.svg"},58:function(e,n,t){e.exports=t.p+"static/media/LogTracker.5bddf550.svg"},63:function(e,n,t){e.exports=t(89)},89:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(14),o=t.n(c),l=t(25),i=t(26),u=t(30),s=t(31),m=t(59),d=t(16),p=t(20),f=t(21),h=t(50),E=t.n(h),g=t(91),v=t(92),b=t(94),x=t(51),y=t.n(x),j=t(52),k=t.n(j);function O(){var e=Object(p.a)(["\n  height: 120px;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  border: 1px solid #E9E9E9;\n  border-radius: 4px;\n  opacity: 1;\n  margin: 16px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    cursor: pointer;\n    box-shadow: 0px 4px 10px #16161629;\n    transition-duration: 0.5s;\n  }\n\n  .user-image {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    img {\n      height: 80px;\n      border-radius: 100%;\n    }\n  }\n\n  .user-details {\n    h5 {\n      color: #101010;\n    }\n\n    span {\n      font-size: 15px;\n      opacity: 0.7;\n    }\n  }\n}\n"]);return O=function(){return e},e}function w(){var e=Object(p.a)(["\n  padding: 2rem 0;\n"]);return w=function(){return e},e}var S=f.a.div(w()),F=f.a.div(O()),B=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).openModal=function(e){var n=a.state.userList;a.setState({modalState:!0});var t=n.filter((function(n){return n.id==e}));a.setState({currentUserData:t})},a.closeModal=function(){a.setState({modalState:!1})},a.loadUserData=function(){return E.a.get("/GetUserList").then((function(e){return e.data})).catch((function(e){console.log(e)}))},a.componentDidMount=function(){a.loadUserData().then((function(e){1==e.ok&&a.setState({userList:e.members})}))},a.state={modalState:!1,userList:[],currentUserData:null},a}return Object(i.a)(t,[{key:"render",value:function(){var e=this,n=this.state,t=n.modalState,a=n.userList,c=n.currentUserData;return r.a.createElement(S,null,r.a.createElement(g.a,null,a.length?a.map((function(n){return r.a.createElement(v.a,{sm:4},r.a.createElement(F,{onClick:function(){e.openModal(n.id)}},r.a.createElement(g.a,null,r.a.createElement(v.a,{sm:3,className:"user-image"},r.a.createElement("img",{src:n.image_url})),r.a.createElement(v.a,{sm:9,className:"user-details"},r.a.createElement("h5",null,n.real_name),r.a.createElement("span",null,r.a.createElement("img",{src:k.a})," ",n.tz),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("img",{src:y.a})," ",n.activity_periods[n.activity_periods.length-1].end_time)))))})):null),null!==c?function(){return r.a.createElement(b.a,{show:t,onHide:e.closeModal,animation:!0},r.a.createElement(b.a.Header,{closeButton:!0},r.a.createElement(b.a.Title,null,c.real_name," Activity")),r.a.createElement(b.a.Body,null))}:null)}}]),t}(a.Component),D=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Oops! No page found."))},L=t(93),M=function(e){return r.a.createElement(L.a,null,e.children)},U=t(95),_=t(58),C=t.n(_);function N(){var e=Object(p.a)(["\n  .navbar {\n    background-color: #fff;\n    padding: 2rem 0;    \n  }\n\n  .container {\n    justify-content: center;\n  }\n\n  .navbar-brand, .navbar-nav, .nav-link{\n    color: #000;\n    \n    .logo {\n      height: 50px;\n    }\n\n    &:hover {\n      color: #FBC900;\n    }\n  }\n"]);return N=function(){return e},e}var z=f.a.div(N()),H=function(){return r.a.createElement(z,null,r.a.createElement(U.a,{expand:"lg"},r.a.createElement(L.a,null,r.a.createElement(U.a.Brand,{href:"/"},r.a.createElement("img",{src:C.a,className:"logo"})))))},J=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement(M,null,r.a.createElement(m.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:B}),r.a.createElement(d.a,{exact:!0,path:"/home",component:B}),r.a.createElement(d.a,{component:D})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.6b2764d1.chunk.js.map