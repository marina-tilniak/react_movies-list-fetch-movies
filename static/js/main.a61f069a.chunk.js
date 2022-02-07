(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var s=c(8),i=c.n(s),n=(c(15),c(10)),a=c(3),r=(c(16),c(1)),l=(c(17),c(18),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.Plot,Object(l.jsx)("br",{})]})]})]})},j=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbID)}))})},d=c(6),b=c(2),m=c.n(b),u=c(9),v=c.n(u),h=(c(21),"https://www.omdbapi.com?apikey=93e72efb&t=");function O(e){return x.apply(this,arguments)}function x(){return(x=Object(d.a)(m.a.mark((function e(t){var c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h).concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:if("False"!==(s=e.sent).Response){e.next=8;break}throw new Error(s.Error);case 8:return e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=function(e){var t=e.addMovie,c=Object(r.useState)(null),s=Object(a.a)(c,2),i=s[0],n=s[1],j=Object(r.useState)(""),b=Object(a.a)(j,2),u=b[0],h=b[1],x=Object(r.useState)(!1),p=Object(a.a)(x,2),f=p[0],N=p[1],g=function(){var e=Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O(u);case 3:t=e.sent,n(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),N(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),i&&t(i),h("")},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsxs)("label",{className:"label",htmlFor:"movie-title",children:["Movie title",Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:v()("input is-link",{"is-danger":f}),value:u,onChange:function(e){h(e.target.value),N(!1)}})})]}),f&&Object(l.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-light",onClick:g,children:"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit",className:"button is-primary",children:"Add to the list"})})]})]}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),(null===i||void 0===i?void 0:i.imdbID)&&Object(l.jsx)(o,{movie:i})]})]})},f=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(j,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(p,{addMovie:function(e){c.some((function(t){return e.imdbID===t.imdbID}))||s([].concat(Object(n.a)(c),[e]))}})})]})};i.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.a61f069a.chunk.js.map