(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{33:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),l=c(5),a=c.n(l),i=(c(32),c(33),c(12),c(10)),r=c(8),b=c.n(r),j=c(1);var d=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){b()({method:"GET",url:"http://0.0.0.0:8000/api/groups/"}).then((function(e){n(e.data)}))}),[]),Object(j.jsxs)("div",{className:"main",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("ul",{className:"nav nav-pills mb-3",id:"pills-tab",role:"tablist",children:Object(j.jsx)("li",{className:"nav-item",role:"presentation",children:Object(j.jsx)("button",{className:"nav-link active",id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true",children:"Home"})})}),Object(j.jsx)("div",{className:"tab-content",id:"pills-tabContent",children:Object(j.jsx)("div",{className:"tab-pane fade show active",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab"})})]}),Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"ID"}),Object(j.jsx)("th",{scope:"col",children:"Name"}),Object(j.jsx)("th",{scope:"col",children:"Description"}),Object(j.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(j.jsx)("tbody",{children:c.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"row",children:e.id}),Object(j.jsx)("td",{children:e.name}),Object(j.jsx)("td",{children:e.description}),Object(j.jsxs)("td",{children:[Object(j.jsx)("button",{type:"button",className:"btn btn-outline-secondary",children:"Edit"}),Object(j.jsx)("button",{type:"button",className:"btn btn-outline-danger",children:"Delete"})]})]},e.id)}))})]})]})};var o=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){b()({method:"GET",url:"http://0.0.0.0:8000/api/users/"}).then((function(e){n(e.data)}))}),[]),Object(j.jsxs)("div",{className:"main",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("ul",{className:"nav nav-pills mb-3",id:"pills-tab",role:"tablist",children:Object(j.jsx)("li",{className:"nav-item",role:"presentation",children:Object(j.jsx)("button",{className:"nav-link active",id:"pills-home-tab","data-bs-toggle":"pill","data-bs-target":"#pills-home",type:"button",role:"tab","aria-controls":"pills-home","aria-selected":"true",children:"Home"})})}),Object(j.jsx)("div",{className:"tab-content",id:"pills-tabContent",children:Object(j.jsx)("div",{className:"tab-pane fade show active",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab"})})]}),Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"ID"}),Object(j.jsx)("th",{scope:"col",children:"Username"}),Object(j.jsx)("th",{scope:"col",children:"Email"}),Object(j.jsx)("th",{scope:"col",children:"Created"}),Object(j.jsx)("th",{scope:"col",children:"Group"}),Object(j.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(j.jsx)("tbody",{children:c.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"row",children:e.id}),Object(j.jsx)("td",{children:e.username}),Object(j.jsx)("td",{children:e.email}),Object(j.jsx)("td",{children:e.created}),Object(j.jsx)("td",{children:e.group}),Object(j.jsxs)("td",{children:[Object(j.jsx)("button",{type:"button",className:"btn btn-outline-secondary",children:"Edit"}),Object(j.jsx)("button",{type:"button",className:"btn btn-outline-danger",children:"Delete"})]})]},e.id)}))})]})]})},h=c(76);c(53);var p=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(h.a,{type:"card",value:"1",activeName:"1",children:[Object(j.jsx)(h.a.Pane,{label:"Users",name:"1",children:Object(j.jsx)(o,{})}),Object(j.jsx)(h.a.Pane,{label:"Groups",name:"2",children:Object(j.jsx)(d,{})})]})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,77)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,l=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),l(e),a(e)}))};a.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),O()}},[[60,1,2]]]);
//# sourceMappingURL=main.2c00baff.chunk.js.map