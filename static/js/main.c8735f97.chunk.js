(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{21:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),j=c(13),i=c.n(j),s=(c(20),c(21),c(15)),d=(c(4),c(14)),h=c.n(d),a=c(0);var b=function(e){var t=e.users;return Object(a.jsx)("div",{children:Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"ID"}),Object(a.jsx)("th",{children:"Username"}),Object(a.jsx)("th",{children:"Email"}),Object(a.jsx)("th",{children:"Created"}),Object(a.jsx)("th",{children:"Group"}),Object(a.jsx)("th",{children:"Actions"})]})}),Object(a.jsx)("tbody",{children:t.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.id}),Object(a.jsx)("td",{children:e.username}),Object(a.jsx)("td",{children:e.email}),Object(a.jsx)("td",{children:e.created}),Object(a.jsx)("td",{children:e.group}),Object(a.jsx)("td",{children:e.action})]},e.id)}))})]})})};var l=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),c=(t[0],t[1]);return Object(n.useEffect)((function(){h.a.get("http://localhost:8000/api/users/").then((function(e){var t=e.data;c(t)}))}),[c]),Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(b,{})})},o=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,j=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),j(e),i(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(l,{})}),document.getElementById("root")),o()}},[[41,1,2]]]);
//# sourceMappingURL=main.c8735f97.chunk.js.map