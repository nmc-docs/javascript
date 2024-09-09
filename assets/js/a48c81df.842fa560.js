"use strict";(self.webpackChunkreactjs=self.webpackChunkreactjs||[]).push([[5680],{6954:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>h});var r=t(4848),o=t(8453);const c={sidebar_position:2},i="Promise chain",s={id:"promise/promise-chain",title:"Promise chain",description:"- Promise chain l\xe0 m\u1ed9t k\u1ef9 thu\u1eadt trong JavaScript \u0111\u1ec3 li\xean k\u1ebft c\xe1c x\u1eed l\xfd b\u1ea5t \u0111\u1ed3ng b\u1ed9 tu\u1ea7n t\u1ef1 v\u1edbi nhau th\xf4ng qua c\xe1c ph\u01b0\u01a1ng th\u1ee9c .then() ho\u1eb7c .catch(). K\u1ef9 thu\u1eadt n\xe0y cho ph\xe9p th\u1ef1c hi\u1ec7n c\xe1c t\xe1c v\u1ee5 b\u1ea5t \u0111\u1ed3ng b\u1ed9 theo tr\xecnh t\u1ef1 m\u1ed9t c\xe1ch d\u1ec5 \u0111\u1ecdc v\xe0 linh ho\u1ea1t.",source:"@site/docs/promise/promise-chain.md",sourceDirName:"promise",slug:"/promise/promise-chain",permalink:"/javascript/promise/promise-chain",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Gi\u1edbi thi\u1ec7u",permalink:"/javascript/promise/introduce"},next:{title:"Promise.resolve()",permalink:"/javascript/promise/promise-resolve"}},a={},h=[];function l(n){const e={code:"code",h1:"h1",header:"header",li:"li",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"promise-chain",children:"Promise chain"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Promise chain l\xe0 m\u1ed9t k\u1ef9 thu\u1eadt trong JavaScript \u0111\u1ec3 li\xean k\u1ebft c\xe1c x\u1eed l\xfd b\u1ea5t \u0111\u1ed3ng b\u1ed9 tu\u1ea7n t\u1ef1 v\u1edbi nhau th\xf4ng qua c\xe1c ph\u01b0\u01a1ng th\u1ee9c ",(0,r.jsx)(e.code,{children:".then()"})," ho\u1eb7c ",(0,r.jsx)(e.code,{children:".catch()"}),". K\u1ef9 thu\u1eadt n\xe0y cho ph\xe9p th\u1ef1c hi\u1ec7n c\xe1c t\xe1c v\u1ee5 b\u1ea5t \u0111\u1ed3ng b\u1ed9 theo tr\xecnh t\u1ef1 m\u1ed9t c\xe1ch d\u1ec5 \u0111\u1ecdc v\xe0 linh ho\u1ea1t."]}),"\n",(0,r.jsx)(e.li,{children:"V\xed d\u1ee5: Promise Chain \u0111\u1ec3 in c\xe1c s\u1ed1 1,2,3,4,5, m\u1ed7i l\u1ea7n in c\xe1ch nhau 1s"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'const sleep = (ms, nextValue) => {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(nextValue);\n    }, ms);\n  });\n};\n\nsleep(1000, 1)\n  .then((data) => {\n    console.log(data);\n    return sleep(1000, data + 1);\n  })\n  .then((data) => {\n    console.log(data);\n    return sleep(1000, data + 1);\n  })\n  .then((data) => {\n    console.log(data);\n    return sleep(1000, data + 1);\n  })\n  .then((data) => {\n    console.log(data);\n    return sleep(1000, data + 1);\n  })\n  .then((data) => {\n    console.log(data);\n    return sleep(1000, data + 1);\n  })\n  .finally(() => {\n    console.log("Done");\n  });\n'})})]})}function d(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>s});var r=t(6540);const o={},c=r.createContext(o);function i(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);