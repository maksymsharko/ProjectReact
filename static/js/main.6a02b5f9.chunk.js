(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{21:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),r=c(13),j=c.n(r),i=(c(20),c(21),c(4),c(15)),d=c(14),o=c.n(d),l=c(0);var h=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){o()({method:"GET",url:"http://localhost:8000/api/users/"}).then((function(e){s(e.data)}))}),[]),Object(l.jsx)("div",{className:"App",children:c.map((function(e){return Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"ID"}),Object(l.jsx)("th",{scope:"col",children:"Username"}),Object(l.jsx)("th",{scope:"col",children:"Email"}),Object(l.jsx)("th",{scope:"col",children:"Created"}),Object(l.jsx)("th",{scope:"col",children:"Group"})]})}),Object(l.jsx)("tbody",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"row",children:e.id}),Object(l.jsx)("td",{children:e.username}),Object(l.jsx)("td",{children:e.email}),Object(l.jsx)("td",{children:e.created}),Object(l.jsx)("td",{children:e.group})]})})]},e.id)}))})}();var a=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(h,{})})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,j=t.getTTFB;c(e),n(e),s(e),r(e),j(e)}))};j.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(a,{})}),document.getElementById("root")),b()}},[[41,1,2]]]);
//# sourceMappingURL=main.6a02b5f9.chunk.js.map