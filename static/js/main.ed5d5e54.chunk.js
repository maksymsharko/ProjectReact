(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{20:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n.n(c),r=n(12),j=n.n(r),d=(n(19),n(20),n(14)),s=(n(21),n(13)),h=n.n(s),o=n(0);var b=function(){var t=Object(c.useState)([]),e=Object(d.a)(t,2),n=e[0],i=e[1];return Object(c.useEffect)((function(){h()({method:"GET",url:"http://0.0.0.0:8000/api/groups/"}).then((function(t){i(t.data)}))}),[]),Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"ID"}),Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Description"}),Object(o.jsx)("th",{children:"Actions"})]})}),Object(o.jsx)("tbody",{children:n.map((function(t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:t.id}),Object(o.jsx)("td",{children:t.name}),Object(o.jsx)("td",{children:t.description}),Object(o.jsx)("td",{children:t.action})]},t.id)}))})]})},a=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,j=e.getTTFB;n(t),c(t),i(t),r(t),j(t)}))};j.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),a()}},[[41,1,2]]]);
//# sourceMappingURL=main.ed5d5e54.chunk.js.map