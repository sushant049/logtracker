(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{24:function(e,a,n){e.exports=n.p+"static/media/history.ec071b1e.svg"},25:function(e,a,n){e.exports=n.p+"static/media/map-pin.23ae266f.svg"},58:function(e,a,n){e.exports=n.p+"static/media/LogTracker.5bddf550.svg"},63:function(e,a,n){e.exports=n(89)},89:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(14),c=n.n(l),m=n(27),o=n(28),s=n(32),i=n(33),u=n(59),E=n(16),p=n(20),d=n(21),g=n(52),h=n.n(g),f=n(91),v=n(92),b=n(94),x=n(24),S=n.n(x),j=n(25),O=n.n(j);function M(){var e=Object(p.a)(["\n  height: 120px;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  border: 1px solid #E9E9E9;\n  border-radius: 4px;\n  opacity: 1;\n  margin: 16px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    cursor: pointer;\n    box-shadow: 0px 4px 10px #16161629;\n  }\n\n  .user-image {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    img {\n      height: 80px;\n      border-radius: 100%;\n    }\n  }\n\n  .user-details {\n    h5 {\n      color: #101010;\n    }\n\n    span {\n      font-size: 15px;\n      opacity: 0.7;\n    }\n  }\n}\n"]);return M=function(){return e},e}function y(){var e=Object(p.a)(["\n  padding: 2rem 0;\n"]);return y=function(){return e},e}var _=d.a.div(y()),k=d.a.div(M()),N=function(e){Object(i.a)(n,e);var a=Object(s.a)(n);function n(e){var t;return Object(m.a)(this,n),(t=a.call(this,e)).openModal=function(){t.setState({modalState:!0})},t.closeModal=function(){t.setState({modalState:!1})},t.componentDidMount=function(){h.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SERVER_URL,"/GetUserList")).then((function(e){1==e.ok?t.setState({userList:e.members}):alert("Failed to load data")})).catch((function(e){console.log(e.message)}))},t.state={modalState:!1},t}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state.modalState;return r.a.createElement(_,null,r.a.createElement(f.a,null,r.a.createElement(v.a,{sm:4},r.a.createElement(k,{onClick:this.openModal},r.a.createElement(f.a,null,r.a.createElement(v.a,{sm:3,className:"user-image"},r.a.createElement("img",{src:"https://randomuser.me/api/portraits/men/71.jpg"})),r.a.createElement(v.a,{sm:9,className:"user-details"},r.a.createElement("h5",null,"Egon Spengler"),r.a.createElement("span",null,r.a.createElement("img",{src:O.a})," America/Los_Angeles"),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("img",{src:S.a})," Mar 16 2020 8:02PM"))))),r.a.createElement(v.a,{sm:4},r.a.createElement(k,null,r.a.createElement(f.a,null,r.a.createElement(v.a,{sm:3,className:"user-image"},r.a.createElement("img",{src:"https://randomuser.me/api/portraits/men/71.jpg"})),r.a.createElement(v.a,{sm:9,className:"user-details"},r.a.createElement("h5",null,"Egon Spengler"),r.a.createElement("span",null,r.a.createElement("img",{src:O.a})," America/Los_Angeles"),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("img",{src:S.a})," Mar 16 2020 8:02PM"))))),r.a.createElement(v.a,{sm:4},r.a.createElement(k,null,r.a.createElement(f.a,null,r.a.createElement(v.a,{sm:3,className:"user-image"},r.a.createElement("img",{src:"https://randomuser.me/api/portraits/men/71.jpg"})),r.a.createElement(v.a,{sm:9,className:"user-details"},r.a.createElement("h5",null,"Egon Spengler"),r.a.createElement("span",null,r.a.createElement("img",{src:O.a})," America/Los_Angeles"),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("img",{src:S.a})," Mar 16 2020 8:02PM"))))),r.a.createElement(v.a,{sm:4},r.a.createElement(k,null,r.a.createElement(f.a,null,r.a.createElement(v.a,{sm:3,className:"user-image"},r.a.createElement("img",{src:"https://randomuser.me/api/portraits/men/71.jpg"})),r.a.createElement(v.a,{sm:9,className:"user-details"},r.a.createElement("h5",null,"Egon Spengler"),r.a.createElement("span",null,r.a.createElement("img",{src:O.a})," America/Los_Angeles"),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("img",{src:S.a})," Mar 16 2020 8:02PM")))))),r.a.createElement(b.a,{show:e,onHide:this.closeModal,animation:!0},r.a.createElement(b.a.Header,{closeButton:!0},r.a.createElement(b.a.Title,null,"Modal heading")),r.a.createElement(b.a.Body,null)))}}]),n}(t.Component),w=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Oops! No page found."))},L=n(93),A=function(e){return r.a.createElement(L.a,null,e.children)},F=n(95),C=n(58),T=n.n(C);function B(){var e=Object(p.a)(["\n  .navbar {\n    background-color: #fff;\n    padding: 2rem 0;    \n  }\n\n  .container {\n    justify-content: center;\n  }\n\n  .navbar-brand, .navbar-nav, .nav-link{\n    color: #000;\n    \n    .logo {\n      height: 50px;\n    }\n\n    &:hover {\n      color: #FBC900;\n    }\n  }\n"]);return B=function(){return e},e}var P=d.a.div(B()),D=function(){return r.a.createElement(P,null,r.a.createElement(F.a,{expand:"lg"},r.a.createElement(L.a,null,r.a.createElement(F.a.Brand,{href:"/"},r.a.createElement("img",{src:T.a,className:"logo"})))))},R=function(e){Object(i.a)(n,e);var a=Object(s.a)(n);function n(){return Object(m.a)(this,n),a.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null),r.a.createElement(A,null,r.a.createElement(u.a,null,r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",component:N}),r.a.createElement(E.a,{exact:!0,path:"/home",component:N}),r.a.createElement(E.a,{component:w})))))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.0f43876a.chunk.js.map