(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n.n(c),a=n(2),r=n(1),o=(n(15),n(16),n(8)),i=n(10),u=n.n(i),l=n(7),d=n(4),j=n.n(d),b="https://mate.academy/students-api";function p(){return(p=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/todos"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(b,"/users/").concat(t)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(18);var f=n(0),O=function(e){var t=e.onHandlerUserId,n=Object(r.useState)(""),c=Object(a.a)(n,2),s=c[0],i=c[1],l=Object(r.useState)([]),d=Object(a.a)(l,2),j=d[0],b=d[1],h=Object(r.useState)(""),O=Object(a.a)(h,2),m=O[0],v=O[1],x=Object(r.useState)([]),_=Object(a.a)(x,2),N=_[0],y=_[1];Object(r.useEffect)((function(){(function(){return p.apply(this,arguments)})().then((function(e){y(e),b(e)}))}),[]);var C=j.filter((function(e){return e.title.toLowerCase().includes(s.toLowerCase())}));return Object(r.useEffect)((function(){!function(){switch(m){case"all":b(N);break;case"active":b(Object(o.a)(N).filter((function(e){return!e.completed})));break;case"completed":b(Object(o.a)(N).filter((function(e){return e.completed})))}}()}),[m]),Object(f.jsxs)("div",{className:"TodoList",children:[Object(f.jsx)("input",{type:"text",value:s,"data-cy":"filterByTitle",className:"input",onChange:function(e){var t=e.target.value;i(t)},placeholder:"Enter a todo"}),Object(f.jsx)("div",{className:"select",children:Object(f.jsxs)("select",{value:m,onChange:function(e){return v(e.target.value)},children:[Object(f.jsx)("option",{value:"",disabled:!0,children:"Choose an option"}),["all","active","completed"].map((function(e){return Object(f.jsx)("option",{value:e,children:e},e)}))]})}),Object(f.jsx)("h2",{children:"Todos:"}),Object(f.jsx)("div",{className:"TodoList__list-container",children:Object(f.jsx)("ul",{className:"TodoList__list","data-cy":"listOfTodos",children:C.map((function(e){return Object(f.jsxs)("li",{className:u()("TodoList__item",{"TodoList__item--checked":e.completed,"TodoList__item--unchecked":!e.completed}),children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"checkbox",checked:e.completed,readOnly:!0}),Object(f.jsx)("p",{children:e.title})]}),Object(f.jsx)("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button","data-cy":"userButton",onClick:function(){return t(e.userId)},children:"User #".concat(e.userId)})]},e.id)}))})})]})},m=(n(20),function(e){var t=e.userId,n=e.onHandlerClear,c=Object(r.useState)(),s=Object(a.a)(c,2),o=s[0],i=s[1];return Object(r.useEffect)((function(){(function(e){return h.apply(this,arguments)})(t).then((function(e){i(e)}))}),[t]),Object(f.jsxs)("div",{className:"CurrentUser",children:[Object(f.jsx)("h2",{className:"CurrentUser__title",children:Object(f.jsx)("span",{children:"Selected user: ".concat(null===o||void 0===o?void 0:o.id)})}),Object(f.jsx)("h3",{className:"CurrentUser__name","data-cy":"userName",children:null===o||void 0===o?void 0:o.name}),Object(f.jsx)("p",{className:"CurrentUser__email",children:null===o||void 0===o?void 0:o.email}),Object(f.jsx)("p",{className:"CurrentUser__phone",children:null===o||void 0===o?void 0:o.phone}),Object(f.jsx)("button",{type:"button",onClick:n,className:"button",children:"Clear"})]})}),v=function(){var e=Object(r.useState)(0),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("div",{className:"App__sidebar",children:Object(f.jsx)(O,{onHandlerUserId:function(e){c(e)}})}),Object(f.jsx)("div",{className:"App__content",children:Object(f.jsx)("div",{className:"App__content-container",children:n?Object(f.jsx)(m,{userId:n,onHandlerClear:function(){c(null)}}):"No user selected"})})]})};n(21);s.a.render(Object(f.jsx)(v,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.17c8e7ea.chunk.js.map