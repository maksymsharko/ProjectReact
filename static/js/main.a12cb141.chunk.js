(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{20:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),r=c(12),i=c.n(r),j=(c(19),c(20),c(14)),d=(c(21),c(13)),l=c.n(d),o=c(0);var h=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){l()({method:"GET",url:"http://localhost:8000/api/users/"}).then((function(e){s(e.data)}))}),[]),Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("table",{className:"table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"ID"}),Object(o.jsx)("th",{scope:"col",children:"Username"}),Object(o.jsx)("th",{scope:"col",children:"Email"}),Object(o.jsx)("th",{scope:"col",children:"Created"})]})}),Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[c.map((function(e){return Object(o.jsx)("th",{scope:"row",children:e.id},e.id)})),Object(o.jsx)("td",{children:".username}"}),Object(o.jsx)("td",{children:".email}"}),Object(o.jsx)("td",{children:".email}"})]})})]})})},a=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),a()}},[[41,1,2]]]);
//# sourceMappingURL=main.a12cb141.chunk.js.map