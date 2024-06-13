"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[1743],{7940:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var t=r(4848),s=r(8453);const c={sidebar_position:4},a="Parameter destructuring",i={id:"destructuring-assignment/parameter-destructuring",title:"Parameter destructuring",description:"- Ta c\xf3 th\u1ec3 destruct ph\u1ea7n t\u1eed c\u1ee7a array hay object l\xe0m parameter c\u1ee7a function.",source:"@site/docs/destructuring-assignment/parameter-destructuring.md",sourceDirName:"destructuring-assignment",slug:"/destructuring-assignment/parameter-destructuring",permalink:"/javascript/destructuring-assignment/parameter-destructuring",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Object destructuring",permalink:"/javascript/destructuring-assignment/object-destructuring"},next:{title:"Nested destructuring",permalink:"/javascript/destructuring-assignment/nested-destructuring"}},o={},u=[];function d(e){const n={code:"code",h1:"h1",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"parameter-destructuring",children:"Parameter destructuring"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Ta c\xf3 th\u1ec3 destruct ph\u1ea7n t\u1eed c\u1ee7a ",(0,t.jsx)(n.code,{children:"array"})," hay ",(0,t.jsx)(n.code,{children:"object"})," l\xe0m ",(0,t.jsx)(n.code,{children:"parameter"})," c\u1ee7a ",(0,t.jsx)(n.code,{children:"function"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Parameter destructuring"})," \u0111\u1ed1i v\u1edbi ",(0,t.jsx)(n.code,{children:"array"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const transformArray = ([firstElement, ...otherElements]) => {\n  return otherElements.map((e) => e * firstElement);\n};\n\nconsole.log(transformArray([10, 2, 3, 4, 5, 6])); // [20, 30, 40, 50, 60]\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Parameter destructuring"})," \u0111\u1ed1i v\u1edbi ",(0,t.jsx)(n.code,{children:"object"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const greeting = ({ name, ...otherProperty }) => {\n  console.log(`Hello, I am ${name}`);\n  console.log(otherProperty);\n};\n\nconst person = {\n  name: "John",\n  age: 20,\n  address: "New York",\n  company: "Google",\n};\n\ngreeting(person);\n/*\nHello, I am John\n{age: 20, address: "New York", company: "Google"}\n*/\n'})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var t=r(6540);const s={},c=t.createContext(s);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);