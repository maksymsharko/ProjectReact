(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),j=n.n(c),r=n(4),i=n.n(r),s=(n(9),n(10),n(2)),d=(n(11),n(0));var h=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),n=t[0],j=t[1],r=Object(c.useState)(!1),i=Object(s.a)(r,2),h=i[0],b=i[1],O=Object(c.useState)([]),a=Object(s.a)(O,2),l=a[0],u=a[1];return Object(c.useEffect)((function(){fetch("http://0.0.0.0:8000/api/users/").then((function(e){return e.json()})).then((function(e){b(!0),u(e.users)}),(function(e){b(!0),j(e)}))}),[]),n?Object(d.jsxs)("div",{children:["ERROR: ",n.message]}):h?Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"ID"}),Object(d.jsx)("th",{children:"Username"}),Object(d.jsx)("th",{children:"Email"}),Object(d.jsx)("th",{children:"Created"}),Object(d.jsx)("th",{children:"Group"}),Object(d.jsx)("th",{children:"Actions"})]})}),Object(d.jsx)("tbody",{children:l.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.id}),Object(d.jsx)("td",{children:e.username}),Object(d.jsx)("td",{children:e.email}),Object(d.jsx)("td",{children:e.created}),Object(d.jsx)("td",{children:e.group}),Object(d.jsx)("td",{children:e.action})]},e.id)}))})]}):Object(d.jsx)("div",{children:"Loading..."})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,j=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),j(e),r(e),i(e)}))};i.a.render(Object(d.jsx)(j.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),b()}},[[13,1,2]]]);
//# sourceMappingURL=main.07aed0b9.chunk.js.map