"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[4631],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||k[m]||o;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},i="Khai b\xe1o bi\u1ebfn",l={unversionedId:"variables-declaration",id:"variables-declaration",title:"Khai b\xe1o bi\u1ebfn",description:"- T\u1eeb JavaScript ES6 tr\u1edf \u0111i, ta c\xf3 hai t\u1eeb kh\xf3a hay \u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3 khai b\xe1o bi\u1ebfn: let v\xe0 const",source:"@site/docs/variables-declaration.md",sourceDirName:".",slug:"/variables-declaration",permalink:"/javascript/variables-declaration",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Ki\u1ec3u d\u1eef li\u1ec7u",permalink:"/javascript/"},next:{title:"Block scope",permalink:"/javascript/block-scope"}},c={},p=[{value:"1. <code>let</code>:",id:"1-let",level:2},{value:"2. <code>const</code>:",id:"2-const",level:2}],s={toc:p},u="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"khai-b\xe1o-bi\u1ebfn"},"Khai b\xe1o bi\u1ebfn"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"T\u1eeb JavaScript ES6 tr\u1edf \u0111i, ta c\xf3 hai t\u1eeb kh\xf3a hay \u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3 khai b\xe1o bi\u1ebfn: ",(0,r.kt)("inlineCode",{parentName:"li"},"let")," v\xe0 ",(0,r.kt)("inlineCode",{parentName:"li"},"const"))),(0,r.kt)("h2",{id:"1-let"},"1. ",(0,r.kt)("inlineCode",{parentName:"h2"},"let"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kh\xf4ng th\u1ec3 khai b\xe1o l\u1ea1i nhi\u1ec1u l\u1ea7n trong c\xf9ng m\u1ed9t c\u1ea5p kh\u1ed1i ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function test() {\n  let x = 5;\n  if (true) {\n    let x = 10; // Kh\xf4ng b\u1ecb l\u1ed7i v\xec \u0111\xe2y l\xe0 c\u1ea5p kh\u1ed1i kh\xe1c n\xean c\xf3 th\u1ec3 khai b\xe1o l\u1ea1i\n  }\n  let x = 7; // L\u1ed7i v\xec \u0111ang khai b\xe1o l\u1ea1i trong c\xf9ng m\u1ed9t c\u1ea5p kh\u1ed1i\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"T\u1eeb kh\xf3a ",(0,r.kt)("inlineCode",{parentName:"li"},"let")," c\xf3 t\xednh ch\u1ea5t ",(0,r.kt)("a",{parentName:"li",href:"./Block-scope"},"block scope"))),(0,r.kt)("h2",{id:"2-const"},"2. ",(0,r.kt)("inlineCode",{parentName:"h2"},"const"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kh\xf4ng th\u1ec3 khai b\xe1o l\u1ea1i nhi\u1ec1u l\u1ea7n trong c\xf9ng m\u1ed9t c\u1ea5p kh\u1ed1i ",(0,r.kt)("inlineCode",{parentName:"li"},"{}")),(0,r.kt)("li",{parentName:"ul"},"T\u1eeb kh\xf3a ",(0,r.kt)("inlineCode",{parentName:"li"},"const")," c\xf3 t\xednh ch\u1ea5t ",(0,r.kt)("a",{parentName:"li",href:"./Block-scope"},"block scope")),(0,r.kt)("li",{parentName:"ul"},"Bi\u1ebfn \u0111\u01b0\u1ee3c khai b\xe1o b\u1eb1ng ",(0,r.kt)("inlineCode",{parentName:"li"},"const")," ph\u1ea3i \u0111\u01b0\u1ee3c g\xe1n ngay gi\xe1 tr\u1ecb khi khai b\xe1o")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"L\u01b0u \xfd: ta kh\xf4ng th\u1ec3 g\xe1n l\u1ea1i gi\xe1 tr\u1ecb cho bi\u1ebfn \u0111\u01b0\u1ee3c khai b\xe1o b\u1eb1ng ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," nh\u01b0ng ta c\xf3 th\u1ec3:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Thay \u0111\u1ed5i gi\xe1 tr\u1ecb c\u1ee7a ph\u1ea7n t\u1eed c\u1ee7a ",(0,r.kt)("inlineCode",{parentName:"li"},"const array")),(0,r.kt)("li",{parentName:"ul"},"Thay \u0111\u1ed5i ",(0,r.kt)("strong",{parentName:"li"},"properties")," c\u1ee7a ",(0,r.kt)("inlineCode",{parentName:"li"},"const object")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"V\xed d\u1ee5 v\u1ec1 ",(0,r.kt)("inlineCode",{parentName:"li"},"const array"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// You can create a constant array:\nconst cars = ["Saab", "Volvo", "BMW"];\n\n// You can change an element:\ncars[0] = "Toyota";\n\n// You can add an element:\ncars.push("Audi");\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const cars = ["Saab", "Volvo", "BMW"];\n\ncars = ["Toyota", "Volvo", "Audi"]; // ERROR\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"V\xed d\u1ee5 v\u1ec1 ",(0,r.kt)("inlineCode",{parentName:"li"},"const object"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// You can create a const object:\nconst car = { type: "Fiat", model: "500", color: "white" };\n\n// You can change a property:\ncar.color = "red";\n\n// You can add a property:\ncar.owner = "Johnson";\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const car = { type: "Fiat", model: "500", color: "white" };\n\ncar = { type: "Volvo", model: "EX60", color: "red" }; // ERROR\n')))}k.isMDXComponent=!0}}]);