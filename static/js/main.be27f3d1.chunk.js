(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{20:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),l=n(12),i=n.n(l),a=(n(19),n(20),n(14)),o=(n(21),n(13)),r=n.n(o),b=n(0);var d=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){r()({method:"GET",url:"http://0.0.0.0:8000/api/groups/"}).then((function(e){s(e.data)}))}),[]),Object(b.jsxs)("body",{children:[Object(b.jsxs)("header",{children:[Object(b.jsx)("ul",{className:"nav nav-pills mb-3",id:"pills-tab",role:"tablist",children:Object(b.jsx)("li",{className:"nav-item",role:"presentation",children:Object(b.jsx)("button",{className:"nav-link active",id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true",children:"Home"})})}),Object(b.jsx)("div",{className:"tab-content",id:"pills-tabContent",children:Object(b.jsx)("div",{className:"tab-pane fade show active",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab"})})]}),Object(b.jsx)("div",{className:"main",children:Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"ID"}),Object(b.jsx)("th",{scope:"col",children:"Name"}),Object(b.jsx)("th",{scope:"col",children:"Description"}),Object(b.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(b.jsx)("tbody",{children:n.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"row",children:e.id}),Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{children:e.description}),Object(b.jsxs)("td",{children:[Object(b.jsx)("button",{type:"button",className:"btn btn-outline-secondary",children:"Edit"}),Object(b.jsx)("button",{type:"button",className:"btn btn-outline-danger",children:"Delete"})]})]},e.id)}))})]})})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,l=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),l(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root")),j()}},[[41,1,2]]]);
//# sourceMappingURL=main.be27f3d1.chunk.js.map