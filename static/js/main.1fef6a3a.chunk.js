(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{43:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(15),s=n.n(a),i=(n(43),n(12)),o=n(6),j=n(75),d=n(13),l=n.n(d),x=n(16),b=n(17),h=n(19),p=n.n(h),u=n(72),m=n(73),O=n(77),f=n(1),y=function(e){var t=e.pokemon;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(O.a,{className:"my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white rounded",style:{border:"none"},children:[Object(f.jsx)(i.Link,{to:"/pokemon/".concat(t.id),children:Object(f.jsx)(O.a.Img,{style:{width:"8rem"},src:t.sprites.front_default,variant:"top"})}),Object(f.jsx)(O.a.Body,{className:"".concat(t.types[0].type.name," rounded text-white"),children:Object(f.jsx)(i.Link,{to:"/pokemon/".concat(t.name),className:"link-name",children:Object(f.jsx)(O.a.Title,{as:"div",children:Object(f.jsxs)("strong",{children:["#",t.id," ",t.name.charAt(0).toUpperCase()+t.name.slice(1)]})})})})]})})},k=n(74),v=function(){return Object(f.jsxs)("div",{className:"d-flex justify-content-center mt-5",style:{height:"100vh"},children:[Object(f.jsx)(u.a,{children:Object(f.jsx)(m.a,{children:Object(f.jsx)(k.a,{className:"spinner-border  spinner-border-lg",role:"status",style:{height:"5vh",width:"5vh"}})})}),Object(f.jsx)(u.a,{children:Object(f.jsx)(m.a,{children:Object(f.jsx)("div",{className:"mx-3",children:" Fetching Pokemon..."})})})]})},g=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!0),s=Object(b.a)(a,2),i=s[0],o=s[1],j=function(){var e=Object(x.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],n=1;case 2:if(!(n<=151)){e.next=11;break}return e.t0=t,e.next=6,d(n);case 6:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 8:n++,e.next=2;break;case 11:console.log(t),r(t),o(!1);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(x.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){j()}),[]),Object(f.jsx)(f.Fragment,{children:i?Object(f.jsx)(v,{}):Object(f.jsx)(u.a,{children:n.map((function(e){return Object(f.jsx)(m.a,{xs:12,sm:12,md:4,lg:4,xl:4,children:Object(f.jsx)(y,{pokemon:e.data})},e.data.name)}))})})},w=function(e){var t=e.match,n=Object(c.useState)(),r=Object(b.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(!0),j=Object(b.a)(o,2),d=j[0],h=j[1],y=t.params.id,k=function(){var e=Object(x.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:n=e.sent,s(n.data),console.log(n.data),h(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(x.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t,"/"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){k(y)}),[]),Object(f.jsx)(f.Fragment,{children:d?Object(f.jsx)(v,{}):Object(f.jsxs)(u.a,{children:[Object(f.jsx)(m.a,{xs:12,sm:12,md:12,lg:12,xl:12,children:Object(f.jsxs)(O.a,{className:"my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white",style:{border:"none"},children:[Object(f.jsx)(i.Link,{to:"/pokemon/".concat(a.id),children:Object(f.jsx)(O.a.Img,{style:{width:"15rem"},src:a.sprites.front_default,variant:"top"})}),Object(f.jsx)(O.a.Body,{className:"".concat(a.types[0].type.name," rounded text-white"),children:Object(f.jsx)(i.Link,{to:"/pokemon/".concat(a.name),className:"link-name",children:Object(f.jsx)(O.a.Title,{as:"div",children:Object(f.jsxs)("strong",{children:["#",a.id," ",a.name.charAt(0).toUpperCase()+a.name.slice(1)]})})})})]})}),Object(f.jsx)(m.a,{xs:12,sm:12,md:12,lg:12,xl:12,children:Object(f.jsx)(O.a,{className:"p-3 rounded text-center shadow p-3 mb-5 bg-white",style:{border:"none"},children:Object(f.jsx)(O.a.Body,{children:Object(f.jsxs)(O.a.Text,{children:[Object(f.jsx)(u.a,{children:a.types.map((function(e){return Object(f.jsx)(m.a,{children:Object(f.jsx)("div",{className:"".concat(e.type.name," rounded px-4 py-1"),style:{color:"white"},children:e.type.name.toUpperCase()})},e.type.name)}))}),Object(f.jsxs)(u.a,{children:[Object(f.jsxs)(m.a,{children:[Object(f.jsx)(O.a.Img,{style:{width:"15rem"},src:a.sprites.front_default}),Object(f.jsx)(O.a.Text,{children:"Normal Form"})]}),Object(f.jsxs)(m.a,{children:[Object(f.jsx)(O.a.Img,{style:{width:"15rem"},src:a.sprites.front_shiny}),Object(f.jsx)(O.a.Text,{children:"Shiny Form"})]})]}),Object(f.jsx)(u.a,{className:"mt-4",children:Object(f.jsx)(m.a,{xs:12,sm:12,md:12,lg:12,xl:12,children:Object(f.jsx)("div",{className:"px-4 py-1 rounded",style:{border:"1px black solid"},children:"Abilities"})})}),Object(f.jsx)(u.a,{className:"text-center",children:a.abilities.map((function(e){return Object(f.jsx)(m.a,{xs:6,sm:6,md:6,lg:6,xl:6,children:Object(f.jsx)("div",{className:"rounded px-4 py-1",children:e.ability.name.toUpperCase()})},e.ability.name)}))})]})})})})]})})},N=n(36),S=n(76),B=function(){return Object(f.jsx)("header",{children:Object(f.jsx)(S.a,{bg:"dark",variant:"dark",expand:"lg",collapseOnSelect:!0,children:Object(f.jsx)(j.a,{children:Object(f.jsx)(N.LinkContainer,{to:"/",children:Object(f.jsx)(S.a.Brand,{children:"React Pok\xe9dex"})})})})})},F=function(){return Object(f.jsxs)(i.BrowserRouter,{children:[Object(f.jsx)(B,{}),Object(f.jsxs)(j.a,{children:[Object(f.jsx)(o.d,{exact:!0,path:"/",component:g}),Object(f.jsx)(o.d,{path:"/pokemon/:id",component:w})]})]})};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(F,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.1fef6a3a.chunk.js.map