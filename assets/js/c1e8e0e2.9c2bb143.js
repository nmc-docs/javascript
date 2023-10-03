"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[2172],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>y});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=l(n),d=a,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(y,c(c({ref:e},u),{},{components:n})):r.createElement(y,c({ref:e},u))}));function y(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[p]="string"==typeof t?t:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2141:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},c="Gi\u1edbi thi\u1ec7u",i={unversionedId:"async-await/introduce",id:"async-await/introduce",title:"Gi\u1edbi thi\u1ec7u",description:"- N\u1ebfu m\u1ed9t c\xe1c function b\xecnh th\u01b0\u1eddng m\xe0 ch\u1ee9a \u0111o\u1ea1n code \u0111\u1ed3ng b\u1ed9 ( synchronous code ) l\u1eabn \u0111o\u1ea1n code b\u1ea5t \u0111\u1ed3ng b\u1ed9 ( asynchronous code ) th\xec khi ta th\u1ef1c thi h\xe0m, t\u1ea5t c\u1ea3 \u0111o\u1ea1n code \u0111\u1ed3ng b\u1ed9 s\u1ebd lu\xf4n lu\xf4n \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n tr\u01b0\u1edbc, sau \u0111\xf3 m\u1edbi \u0111\u1ebfn c\xe1c \u0111o\u1ea1n code b\u1ea5t \u0111\u1ed3ng b\u1ed9",source:"@site/docs/async-await/introduce.md",sourceDirName:"async-await",slug:"/async-await/introduce",permalink:"/javascript/async-await/introduce",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Async await",permalink:"/javascript/category/async-await"},next:{title:"Async",permalink:"/javascript/async-await/async"}},s={},l=[],u={toc:l},p="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gi\u1edbi-thi\u1ec7u"},"Gi\u1edbi thi\u1ec7u"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"N\u1ebfu m\u1ed9t c\xe1c function b\xecnh th\u01b0\u1eddng m\xe0 ch\u1ee9a \u0111o\u1ea1n code \u0111\u1ed3ng b\u1ed9 ( ",(0,a.kt)("strong",{parentName:"li"},"synchronous code")," ) l\u1eabn \u0111o\u1ea1n code b\u1ea5t \u0111\u1ed3ng b\u1ed9 ( ",(0,a.kt)("strong",{parentName:"li"},"asynchronous code")," ) th\xec khi ta th\u1ef1c thi h\xe0m, t\u1ea5t c\u1ea3 \u0111o\u1ea1n code \u0111\u1ed3ng b\u1ed9 s\u1ebd lu\xf4n lu\xf4n \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n tr\u01b0\u1edbc, sau \u0111\xf3 m\u1edbi \u0111\u1ebfn c\xe1c \u0111o\u1ea1n code b\u1ea5t \u0111\u1ed3ng b\u1ed9"),(0,a.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const myPromise = Promise.resolve("Promise!");\nfunction funcOne() {\n  myPromise.then((res) => console.log(res));\n  setTimeout(() => console.log("Timeout1"), 1000);\n  console.log("Last line 1!");\n}\nfunction funcTwo() {\n  setTimeout(() => console.log("Timeout2"), 500);\n  console.log("Last line 2!");\n}\nfuncOne();\nfuncTwo();\n/*\nLast line 1!\nLast line 2!\nPromise!\nTimeout2\nTimeout1\n */\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u1ede \u0111o\u1ea1n code tr\xean, khi ta g\u1ecdi l\u1eddi th\u1ef1c thi c\u1ee7a 2 h\xe0m, t\u1ea5t c\u1ea3 c\xe1c \u0111o\u1ea1n code \u0111\u1ed3ng b\u1ed9 c\u1ee7a c\u1ea3 2 h\xe0m s\u1ebd \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n tr\u01b0\u1edbc, sau \u0111\xf3 m\u1edbi \u0111\u1ebfn c\xe1c \u0111o\u1ea1n code b\u1ea5t \u0111\u1ed3ng b\u1ed9")),(0,a.kt)("p",null,"\ud83d\udd11Do \u0111\xf3, ",(0,a.kt)("strong",{parentName:"p"},"Async / await")," \u0111\u01b0\u1ee3c sinh ra nh\u1eb1m \u0111\u1ea3m b\u1ea3o th\u1ee9 t\u1ef1 th\u1ef1c hi\u1ec7n c\u1ee7a c\xe1c \u0111o\u1ea1n code \u0111\u1ed3ng b\u1ed9 l\u1eabn b\u1ea5t \u0111\u1ed3ng b\u1ed9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sau \u0111\xe2y ta s\u1ebd t\xecm hi\u1ec3u v\u1ec1:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./async"},"Async")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./await"},"Await")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./example"},"M\u1ed9t s\u1ed1 v\xed d\u1ee5 v\u1ec1 async/await"))))))}m.isMDXComponent=!0}}]);