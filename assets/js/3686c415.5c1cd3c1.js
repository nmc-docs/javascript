"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[9605],{1402:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=t(4848),r=t(8453);const s={sidebar_position:2},i="Named export",c={id:"modules/export/named-export",title:"Named export",description:"Named exports c\xf3 hai c\xe1ch vi\u1ebft:",source:"@site/docs/modules/export/named-export.md",sourceDirName:"modules/export",slug:"/modules/export/named-export",permalink:"/javascript/modules/export/named-export",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Gi\u1edbi thi\u1ec7u",permalink:"/javascript/modules/export/introduce"},next:{title:"Default export",permalink:"/javascript/modules/export/default-export"}},a={},l=[];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"named-export",children:"Named export"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Named exports"})," c\xf3 hai c\xe1ch vi\u1ebft:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Inline"})," (vi\u1ebft tr\u1ef1c ti\u1ebfp khi khai b\xe1o t\u1ea1i m\u1ed7i ch\u1ee9c n\u0103ng)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"All at once at the bottom"})," (vi\u1ebft t\u1ea5t c\u1ea3 xu\u1ed1ng cu\u1ed1i file)"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["L\u01b0u \xfd: C\xe1c ch\u1ee9c n\u0103ng \u0111\u01b0\u1ee3c vi\u1ebft theo ",(0,o.jsx)(n.strong,{children:"All at once at the bottom"})," ph\u1ea3i \u0111\u01b0\u1ee3c bao b\u1ecdc b\u1edfi ",(0,o.jsx)(n.code,{children:"{}"})]})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["V\xed d\u1ee5 v\u1ec1 c\xe1ch vi\u1ebft ",(0,o.jsx)(n.strong,{children:"Inline:"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'export const name = "Jesse";\nexport const age = 40;\n\nexport const greeting = () => {\n  console.log("Hello ");\n};\n\nexport function add(a, b) {\n  return a + b;\n}\n\n//Destructuring export\nconst Course = {\n  title: "JavaScript for beginners",\n  price: 500,\n  hours: 120,\n};\nexport const { title, price, hours } = Course;\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["V\xed d\u1ee5 v\u1ec1 c\xe1ch vi\u1ebft ",(0,o.jsx)(n.strong,{children:"All at once at the bottom"})," :"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const name = "Jesse";\nconst age = 40;\n\nconst greeting = () => {\n  console.log("Hello ");\n};\n\nfunction add(a, b) {\n  return a + b;\n}\n\nexport { name, age, greeting, add };\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const name = "Jesse";\nconst age = 40;\n\n//Export v\u1edbi t\xean thay th\u1ebf.\nexport { name as NAME, age as AGE };\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(6540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);