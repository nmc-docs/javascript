"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[2701],{9973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>o,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var c=n(4848),r=n(8453);const s={sidebar_position:13},d="Set",i={id:"set",title:"Set",description:"\u0110\u1ecbnh ngh\u0129a",source:"@site/docs/set.md",sourceDirName:".",slug:"/set",permalink:"/javascript/set",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Headers",permalink:"/javascript/built-in-object/headers"},next:{title:"Map",permalink:"/javascript/map"}},h={},l=[{value:"\u0110\u1ecbnh ngh\u0129a",id:"\u0111\u1ecbnh-ngh\u0129a",level:2},{value:"Khai b\xe1o",id:"khai-b\xe1o",level:2},{value:"Ph\u01b0\u01a1ng th\u1ee9c v\xe0 thu\u1ed9c t\xednh",id:"ph\u01b0\u01a1ng-th\u1ee9c-v\xe0-thu\u1ed9c-t\xednh",level:2},{value:"V\xed d\u1ee5",id:"v\xed-d\u1ee5",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"set",children:"Set"}),"\n",(0,c.jsx)(t.h2,{id:"\u0111\u1ecbnh-ngh\u0129a",children:"\u0110\u1ecbnh ngh\u0129a"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:"Set trong JavaScript l\xe0 m\u1ed9t collection ch\u1ee9a c\xe1c gi\xe1 tr\u1ecb duy nh\u1ea5t v\xe0 gi\xe1 tr\u1ecb c\u1ee7a n\xf3 kh\xf4ng th\u1ec3 thay \u0111\u1ed5i"}),"\n"]}),"\n",(0,c.jsx)(t.h2,{id:"khai-b\xe1o",children:"Khai b\xe1o"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",children:"//Declare object Set with value:\nconst arr = [1, 2, 3, 4, 5];\nconst s = new Set(arr); // s: 1 2 3 4 5\n\n//Declare object Set without value:\nconst ss = new Set();\n"})}),"\n",(0,c.jsx)(t.h2,{id:"ph\u01b0\u01a1ng-th\u1ee9c-v\xe0-thu\u1ed9c-t\xednh",children:"Ph\u01b0\u01a1ng th\u1ee9c v\xe0 thu\u1ed9c t\xednh"}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Property/Method"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"mySet.add(value)"})}),(0,c.jsx)(t.td,{children:"Th\xeam gi\xe1 tr\u1ecb v\xe0o set"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"mySet.delete(value)"})}),(0,c.jsx)(t.td,{children:"X\xf3a gi\xe1 tr\u1ecb kh\u1ecfi set"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"mySet.has(value)"})}),(0,c.jsxs)(t.td,{children:["Tr\u1ea3 v\u1ec1 ",(0,c.jsx)(t.code,{children:"true"})," n\u1ebfu gi\xe1 tr\u1ecb c\xf3 trong Set"]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"mySet.keys()"})}),(0,c.jsxs)(t.td,{children:["Tr\u1ea3 v\u1ec1 m\u1ed9t ",(0,c.jsx)(t.code,{children:"iterable"})," ch\u1ee9a c\xe1c ph\u1ea7n t\u1eed trong Set"]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"mySet.clear()"})}),(0,c.jsx)(t.td,{children:"X\xf3a t\u1ea5t c\u1ea3 c\xe1c ph\u1ea7n t\u1eed trong Set"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"mySet.size"})}),(0,c.jsxs)(t.td,{children:["Tr\u1ea3 v\u1ec1 ",(0,c.jsx)(t.code,{children:"number"})," l\xe0 s\u1ed1 l\u01b0\u1ee3ng ph\u1ea7n t\u1eed c\xf3 trong Set"]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:(0,c.jsx)(t.code,{children:"mySet.forEach(function(value){/*\u2026*/})"})}),(0,c.jsxs)(t.td,{children:["Duy\u1ec7t qua t\u1eebng ph\u1ea7n t\u1eed c\u1ee7a Set, m\u1ed7i ph\u1ea7n t\u1eed th\u1ef1c hi\u1ec7n h\xe0m ",(0,c.jsx)(t.code,{children:"function"}),", ",(0,c.jsx)(t.code,{children:"value"})," l\xe0 ph\u1ea7n t\u1eed hi\u1ec7n t\u1ea1i \u0111ang x\xe9t"]})]})]})]}),"\n",(0,c.jsx)(t.h2,{id:"v\xed-d\u1ee5",children:"V\xed d\u1ee5"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",children:"const mySet = new Set();\nmySet.add(1); // mySet: 1\nmySet.add(2); // mySet: 1 2\nmySet.delete(2); // mySet: 1\nconsole.log(mySet.has(2)); // False\nconsole.log(mySet.size); //1\nmySet.forEach((value) => {\n  console.log(value);\n}); // 1\n"})})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>i});var c=n(6540);const r={},s=c.createContext(r);function d(e){const t=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),c.createElement(s.Provider,{value:t},e.children)}}}]);