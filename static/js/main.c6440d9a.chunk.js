(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{141:function(e,t,c){},414:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(12),r=c.n(a),l=(c(140),c(141),c(52),c(35)),i=c(29),j=c.n(i),o=c(424),d=c(422),b=c(423),h=c(65),u=c(66),O=c(68),p=c(67),x=c(415),m=c(416),f=c(417),v=c(418),g=c(419),N=c(420),y=c(421),C=c(8),w=function(e){Object(O.a)(c,e);var t=Object(p.a)(c);function c(e){var n;return Object(h.a)(this,c),(n=t.call(this,e)).handleAddNewGroup=function(){console.log(n.state),j.a.post("http://0.0.0.0:8000/api/groups/",n.state).then((function(e){return console.log(e)}))},n.state={name:e.name,description:e.description},n}return Object(u.a)(c,[{key:"render",value:function(){var e=this,t=this.state,c=t.name,n=t.description;return Object(C.jsxs)(x.a,{children:[Object(C.jsxs)(m.a,{form:!0,children:[Object(C.jsx)(f.a,{md:6,children:Object(C.jsxs)(v.a,{children:[Object(C.jsx)(g.a,{for:"examplePassword",children:"Name"}),Object(C.jsx)(N.a,{value:c,onChange:function(t){return e.setState({username:t.target.value})},type:"text",name:"password",id:"examplePassword",placeholder:"name"})]})}),Object(C.jsx)(f.a,{md:6,children:Object(C.jsxs)(x.a.Group,{children:[Object(C.jsx)(g.a,{for:"exampleForm.ControlTextarea1",children:"Description"}),Object(C.jsx)(N.a,{value:n,onChange:function(t){return e.setState({description:t.target.value})},type:"text",placeholder:"description"})]})})]}),Object(C.jsx)(y.a,{onClick:this.handleAddNewGroup,children:"Add"})]})}}]),c}(s.a.Component),S=function(e){e.buttonLabel;var t=e.className,c=Object(n.useState)(!1),s=Object(l.a)(c,2),a=s[0],r=s[1],i=function(){return r(!a)};return Object(C.jsxs)("div",{children:[Object(C.jsx)("button",{onClick:i,type:"button",className:"btn btn-outline-primary",children:"Add Group"}),Object(C.jsxs)(o.a,{isOpen:a,toggle:i,className:t,children:[Object(C.jsx)(d.a,{toggle:i,children:"Modal Group"}),Object(C.jsx)(b.a,{children:Object(C.jsx)(w,{})})]})]})};var k=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){j()({method:"GET",url:"http://0.0.0.0:8000/api/groups/"}).then((function(e){s(e.data)}))}),[]),Object(C.jsxs)("div",{className:"main",children:[Object(C.jsx)("header",{children:Object(C.jsx)("div",{className:"tab-content",id:"pills-tabContent",children:Object(C.jsx)("div",{className:"tab-pane fade show active",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab"})})}),Object(C.jsxs)("table",{className:"table",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{scope:"col",children:"ID"}),Object(C.jsx)("th",{scope:"col",children:"Name"}),Object(C.jsx)("th",{scope:"col",children:"Description"}),Object(C.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(C.jsx)("tbody",{children:c.map((function(e){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{scope:"row",children:e.id}),Object(C.jsx)("td",{children:e.name}),Object(C.jsx)("td",{children:e.description}),Object(C.jsxs)("td",{children:[Object(C.jsx)("button",{type:"button",className:"btn btn-outline-secondary",children:"Edit"}),Object(C.jsx)("button",{type:"button",className:"btn btn-outline-danger",children:"Delete"})]})]},e.id)}))})]}),Object(C.jsx)("div",{className:"button",children:Object(C.jsx)(S,{})})]})},E=function(e){Object(O.a)(c,e);var t=Object(p.a)(c);function c(e){var n;return Object(h.a)(this,c),(n=t.call(this,e)).handleAddNewUser=function(){console.log(n.state),j.a.post("http://0.0.0.0:8000/api/users/",n.state,{headers:{"X-CSRFToken":"y6m2cgmsqsGBKkNqpF5JSLRhQik8UrByloK3jm8IkJVPHmPv4KXHh8im19T3dgQA"}}).then((function(e){return console.log(e)}))},n.state={username:e.username,email:e.email,group:e.group},n.groupList=[],n}return Object(u.a)(c,[{key:"componentDidMount",value:function(){var e=this;j()({method:"GET",url:"http://0.0.0.0:8000/api/groups/"}).then((function(t){e.groupList=t.data,console.log(t)}))}},{key:"render",value:function(){var e=this,t=this.state,c=t.email,n=t.username,s=t.group;return Object(C.jsxs)(x.a,{children:[Object(C.jsxs)(m.a,{form:!0,children:[Object(C.jsx)(f.a,{md:6,children:Object(C.jsxs)(v.a,{children:[Object(C.jsx)(g.a,{for:"exampleEmail",children:"Email"}),Object(C.jsx)(N.a,{value:c,onChange:function(t){return e.setState({email:t.target.value})},type:"email",name:"email",id:"exampleEmail",placeholder:"Email"})]})}),Object(C.jsx)(f.a,{md:6,children:Object(C.jsxs)(v.a,{children:[Object(C.jsx)(g.a,{for:"examplePassword",children:"Username"}),Object(C.jsx)(N.a,{value:n,onChange:function(t){return e.setState({username:t.target.value})},type:"text",name:"password",id:"examplePassword",placeholder:"username"})]})})]}),Object(C.jsxs)(v.a,{children:[Object(C.jsx)(g.a,{for:"exampleSelect",children:"Group"}),Object(C.jsx)(N.a,{value:s,type:"select",name:"select",id:"exampleSelect",children:this.groupList.map((function(e){return Object(C.jsxs)("option",{children:[e.id,":",e.name]},e.id)}))})]}),Object(C.jsx)(y.a,{onClick:this.handleAddNewUser,children:"Add"})]})}}]),c}(s.a.Component),A=function(e){e.buttonLabel;var t=e.className,c=Object(n.useState)(!1),s=Object(l.a)(c,2),a=s[0],r=s[1],i=function(){return r(!a)};return Object(C.jsxs)("div",{children:[Object(C.jsx)("button",{onClick:i,type:"button",className:"btn btn-outline-primary",children:"Add User"}),Object(C.jsxs)(o.a,{isOpen:a,toggle:i,className:t,children:[Object(C.jsx)(d.a,{toggle:i,children:"Model User"}),Object(C.jsx)(b.a,{children:Object(C.jsx)(E,{})})]})]})};var G=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){j()({method:"GET",url:"http://0.0.0.0:8000/api/users/"}).then((function(e){s(e.data)}))}),[]),Object(C.jsxs)("div",{className:"main",children:[Object(C.jsx)("header",{children:Object(C.jsx)("div",{className:"tab-content",id:"pills-tabContent",children:Object(C.jsx)("div",{className:"tab-pane fade show active",id:"pills-home",role:"tabpanel","aria-labelledby":"pills-home-tab"})})}),Object(C.jsxs)("table",{className:"table",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{scope:"col",children:"ID"}),Object(C.jsx)("th",{scope:"col",children:"Username"}),Object(C.jsx)("th",{scope:"col",children:"Email"}),Object(C.jsx)("th",{scope:"col",children:"Created"}),Object(C.jsx)("th",{scope:"col",children:"Group"}),Object(C.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(C.jsx)("tbody",{children:c.map((function(e){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{scope:"row",children:e.id}),Object(C.jsx)("td",{children:e.username}),Object(C.jsx)("td",{children:e.email}),Object(C.jsx)("td",{children:e.created}),Object(C.jsx)("td",{children:e.group}),Object(C.jsxs)("td",{children:[Object(C.jsx)("button",{type:"button",className:"btn btn-outline-secondary",children:"Edit"}),Object(C.jsx)("button",{type:"button",className:"btn btn-outline-danger",children:"Delete"})]})]},e.id)}))})]}),Object(C.jsx)("div",{className:"button",children:Object(C.jsx)(A,{})})]})},T=c(70);c(413);var P=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsxs)(T.Tabs,{type:"card",value:"1",activeName:"1",children:[Object(C.jsx)(T.Tabs.Pane,{label:"Users",name:"1",children:Object(C.jsx)(G,{})}),Object(C.jsx)(T.Tabs.Pane,{label:"Groups",name:"2",children:Object(C.jsx)(k,{})})]})})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,425)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(P,{})}),document.getElementById("root")),D()}},[[414,1,2]]]);
//# sourceMappingURL=main.c6440d9a.chunk.js.map