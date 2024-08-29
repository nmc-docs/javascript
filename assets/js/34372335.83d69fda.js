"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[2773],{5303:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var t=r(4848),s=r(8453);const c={sidebar_position:5},a="URLSearchParams",i={id:"built-in-object/url-search-params",title:"URLSearchParams",description:"- URLSearchParams trong JavaScript l\xe0 m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 thao t\xe1c v\u1edbi chu\u1ed7i truy v\u1ea5n (query string) c\u1ee7a URL. N\xf3 cho ph\xe9p ta d\u1ec5 d\xe0ng truy xu\u1ea5t, th\xeam, s\u1eeda \u0111\u1ed5i, ho\u1eb7c x\xf3a c\xe1c tham s\u1ed1 trong m\u1ed9t URL.",source:"@site/docs/built-in-object/url-search-params.md",sourceDirName:"built-in-object",slug:"/built-in-object/url-search-params",permalink:"/javascript/built-in-object/url-search-params",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"URL",permalink:"/javascript/built-in-object/URL"},next:{title:"Buffer",permalink:"/javascript/built-in-object/buffer"}},o={},d=[{value:"Kh\u1edfi t\u1ea1o",id:"kh\u1edfi-t\u1ea1o",level:2},{value:"C\xe1c ph\u01b0\u01a1ng th\u1ee9c tr\u1ea3 v\u1ec1",id:"c\xe1c-ph\u01b0\u01a1ng-th\u1ee9c-tr\u1ea3-v\u1ec1",level:2},{value:"M\u1ed9t s\u1ed1 v\xed d\u1ee5",id:"m\u1ed9t-s\u1ed1-v\xed-d\u1ee5",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"urlsearchparams",children:"URLSearchParams"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"URLSearchParams"})," trong JavaScript l\xe0 m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 thao t\xe1c v\u1edbi chu\u1ed7i truy v\u1ea5n (query string) c\u1ee7a URL. N\xf3 cho ph\xe9p ta d\u1ec5 d\xe0ng truy xu\u1ea5t, th\xeam, s\u1eeda \u0111\u1ed5i, ho\u1eb7c x\xf3a c\xe1c tham s\u1ed1 trong m\u1ed9t URL."]}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"kh\u1edfi-t\u1ea1o",children:"Kh\u1edfi t\u1ea1o"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Ta c\xf3 th\u1ec3 t\u1ea1o m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng ",(0,t.jsx)(n.code,{children:"URLSearchParams"})," t\u1eeb m\u1ed9t chu\u1ed7i truy v\u1ea5n ho\u1eb7c t\u1eeb m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng URL."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const params = new URLSearchParams('name=John&age=30');\n"})}),"\n",(0,t.jsx)(n.p,{children:"Ho\u1eb7c t\u1eeb URL:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const url = new URL('https://example.com?name=John&age=30');\nconst params = new URLSearchParams(url.search);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"c\xe1c-ph\u01b0\u01a1ng-th\u1ee9c-tr\u1ea3-v\u1ec1",children:"C\xe1c ph\u01b0\u01a1ng th\u1ee9c tr\u1ea3 v\u1ec1"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Method"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"get(key: string)"})}),(0,t.jsx)(n.td,{children:"L\u1ea5y gi\xe1 tr\u1ecb \u0111\u1ea7u ti\xean xu\u1ea5t hi\u1ec7n trong query c\u1ee7a tham s\u1ed1. Tr\u1ea3 v\u1ec1 m\u1ed9t string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"getAll(key: string)"})}),(0,t.jsx)(n.td,{children:"L\u1ea5y t\u1ea5t c\u1ea3 gi\xe1 tr\u1ecb c\u1ee7a tham s\u1ed1 trong query. Tr\u1ea3 v\u1ec1 m\u1ed9t m\u1ea3ng c\xe1c string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"set(key: string, value: string)"})}),(0,t.jsx)(n.td,{children:"C\u1eadp nh\u1eadt gi\xe1 tr\u1ecb c\u1ee7a m\u1ed9t tham s\u1ed1 \u0111\xe3 t\u1ed3n t\u1ea1i trong query"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"append(key: string, value: string)"})}),(0,t.jsx)(n.td,{children:"Ch\xe8n th\xeam m\u1ed9t tham s\u1ed1 v\xe0o query"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"delete(key: string)"})}),(0,t.jsx)(n.td,{children:"X\xf3a m\u1ed9t tham s\u1ed1 kh\u1ecfi chu\u1ed7i truy v\u1ea5n."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"has(key: string)"})}),(0,t.jsxs)(n.td,{children:["Ki\u1ec3m tra xem m\u1ed9t tham s\u1ed1 c\xf3 t\u1ed3n t\u1ea1i trong chu\u1ed7i truy v\u1ea5n hay kh\xf4ng. Tr\u1ea3 v\u1ec1 ",(0,t.jsx)(n.code,{children:"true"})," ho\u1eb7c ",(0,t.jsx)(n.code,{children:"false"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"forEach(callback)"})}),(0,t.jsx)(n.td,{children:"L\u1eb7p qua t\u1ea5t c\u1ea3 c\xe1c c\u1eb7p gi\xe1 tr\u1ecb c\u1ee7a tham s\u1ed1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"toString()"})}),(0,t.jsxs)(n.td,{children:["Chuy\u1ec3n \u0111\u1ed5i \u0111\u1ed1i t\u01b0\u1ee3ng ",(0,t.jsx)(n.code,{children:"URLSearchParams"})," th\xe0nh m\u1ed9t chu\u1ed7i truy v\u1ea5n. Tr\u1ea3 v\u1ec1 m\u1ed9t string"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"keys()"})}),(0,t.jsx)(n.td,{children:"Tr\u1ea3 v\u1ec1 m\u1ed9t iterator ch\u1ee9a t\u1ea5t c\u1ea3 c\xe1c key trong chu\u1ed7i query. S\u1eed d\u1ee5ng Array.from() \u0111\u1ec3 chuy\u1ec3n \u0111\u1ed5i sang m\u1ea3ng"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"values()"})}),(0,t.jsx)(n.td,{children:"Tr\u1ea3 v\u1ec1 m\u1ed9t iterator ch\u1ee9a t\u1ea5t c\u1ea3 c\xe1c value trong chu\u1ed7i query. S\u1eed d\u1ee5ng Array.from() \u0111\u1ec3 chuy\u1ec3n \u0111\u1ed5i sang m\u1ea3ng"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"m\u1ed9t-s\u1ed1-v\xed-d\u1ee5",children:"M\u1ed9t s\u1ed1 v\xed d\u1ee5"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"V\xed d\u1ee5 1: l\u1ea5y c\xe1c tham s\u1ed1:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const query = new URLSearchParams("name=John&age=26&address=NewYork&address=California")\nconsole.log(query.get("address")); // NewYork\nconsole.log(query.getAll("address")); // ["NewYork", "California"]\nconsole.log(query.has("age")); // true\nconsole.log(query.has("phone")); // false\nconsole.log(Array.from(query.keys())); // ["name", "age", "address"]\nconsole.log(Array.from(query.values())); // ["John", "26", "NewYork", "California"]\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"V\xed d\u1ee5 2: thay \u0111\u1ed5i gi\xe1 tr\u1ecb tham s\u1ed1:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const params = new URLSearchParams();\nparams.append('name', 'John');\nparams.append('age', '30');\n\nconsole.log(params.toString()); // \"name=John&age=30\"\n\nparams.set('name', 'Jane');\nconsole.log(params.toString()); // \"name=Jane&age=30\"\n\nparams.delete('age');\nconsole.log(params.toString()); // \"name=Jane\"\n\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Khi ta ",(0,t.jsx)(n.code,{children:"append()"})," hay ",(0,t.jsx)(n.code,{children:"set()"})," m\u1ed9t gi\xe1 tr\u1ecb m\u1edbi cho m\u1ed9t tham s\u1ed1, n\u1ebfu gi\xe1 tr\u1ecb ch\u1ee9a c\xe1c k\xfd t\u1ef1 \u0111\u1eb7c bi\u1ec7t ho\u1eb7c l\xe0 ti\u1ebfng vi\u1ec7t th\xec ta h\xe3y s\u1eed d\u1ee5ng h\xe0m ",(0,t.jsx)(n.code,{children:"encodeURI(value: string)"})]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const encodedFullName = encodeURI("Nguy\u1ec5n Minh Ch\xed");\nconst encodedAddress = encodeURI("Qu\u1ea3ng Ninh");\nconst encodedFacebookProfile = encodeURI(\n  "https://www.facebook.com/minhchi1509"\n);\n\nconst query = new URLSearchParams(\n  `fullName=${encodedFullName}&address=${encodedAddress}&facebookProfile=${encodedFacebookProfile}`\n);\n\nconsole.log(query.toString()); // "fullName=Nguy%E1%BB%85n+Minh+Ch%C3%AD&address=Qu%E1%BA%A3ng+Ninh&facebookProfile=https%3A%2F%2Fwww.facebook.com%2Fminhchi1509"\n\nconsole.log(query.get("fullName")); // "Nguy\u1ec5n Minh Ch\xed"\nconsole.log(query.get("address")); // "Qu\u1ea3ng Ninh"\nconsole.log(query.get("facebookProfile")); // "https://www.facebook.com/minhchi1509"\n'})})]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var t=r(6540);const s={},c=t.createContext(s);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);