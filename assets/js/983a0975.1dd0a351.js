"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,b=u["".concat(l,".").concat(h)]||u[h]||m[h]||c;return n?r.createElement(b,a(a({ref:t},s),{},{components:n})):r.createElement(b,a({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const c={sidebar_position:3},a="Block scope",i={unversionedId:"block-scope",id:"block-scope",title:"Block scope",description:"- \u2753Nh\u01b0 \u0111\xe3 gi\u1edbi thi\u1ec7u \u1edf b\xe0i tr\u01b0\u1edbc, hai t\u1eeb kh\xf3a let v\xe0 const \u0111\u1ec1u c\xf3 t\xednh ch\u1ea5t block scope. V\u1eady block scope l\xe0 g\xec?",source:"@site/docs/block-scope.md",sourceDirName:".",slug:"/block-scope",permalink:"/javascript/block-scope",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Khai b\xe1o bi\u1ebfn",permalink:"/javascript/variables-declaration"},next:{title:"To\xe1n t\u1eed",permalink:"/javascript/category/to\xe1n-t\u1eed"}},l={},p=[],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"block-scope"},"Block scope"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2753Nh\u01b0 \u0111\xe3 gi\u1edbi thi\u1ec7u \u1edf b\xe0i tr\u01b0\u1edbc, hai t\u1eeb kh\xf3a ",(0,o.kt)("inlineCode",{parentName:"li"},"let")," v\xe0 ",(0,o.kt)("inlineCode",{parentName:"li"},"const")," \u0111\u1ec1u c\xf3 t\xednh ch\u1ea5t ",(0,o.kt)("strong",{parentName:"li"},"block scope"),". V\u1eady ",(0,o.kt)("strong",{parentName:"li"},"block scope")," l\xe0 g\xec?"),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udd11 ",(0,o.kt)("strong",{parentName:"li"},"Block scope")," trong JavaScript \u0111\u1ec1 c\u1eadp \u0111\u1ebfn ph\u1ea1m vi c\u1ee7a m\u1ed9t bi\u1ebfn ho\u1eb7c h\xe0m \u0111\u01b0\u1ee3c khai b\xe1o trong c\xf9ng m\u1ed9t kh\u1ed1i m\xe3 (block), th\u01b0\u1eddng \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a b\u1edfi c\u1eb7p d\u1ea5u ngo\u1eb7c nh\u1ecdn ",(0,o.kt)("inlineCode",{parentName:"li"},"{}"),". Nh\u1eefng bi\u1ebfn ho\u1eb7c h\xe0m \u0111\u01b0\u1ee3c khai b\xe1o trong kh\u1ed1i n\xe0y s\u1ebd ch\u1ec9 c\xf3 th\u1ec3 truy c\u1eadp \u0111\u01b0\u1ee3c trong kh\u1ed1i \u0111\xf3 v\xe0 c\xe1c kh\u1ed1i l\u1ed3ng nhau b\xean trong kh\u1ed1i \u0111\xf3, v\xe0 s\u1ebd b\u1ecb xo\xe1 kh\u1ecfi b\u1ed9 nh\u1edb khi kh\u1ed1i m\xe3 \u0111\xf3 th\u1ef1c thi xong."),(0,o.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function example() {\n  let x = 10; // Bi\u1ebfn x \u0111\u01b0\u1ee3c khai b\xe1o trong block scope c\u1ee7a h\xe0m example\n\n  if (true) {\n    let y = 20; // Bi\u1ebfn y \u0111\u01b0\u1ee3c khai b\xe1o trong block scope c\u1ee7a if statement\n    console.log(x); // 10\n    console.log(y); // 20\n  }\n\n  console.log(x); // 10\n  console.log(y); // ReferenceError: y is not defined\n}\n\nexample();\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Trong v\xed d\u1ee5 tr\xean, bi\u1ebfn ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," \u0111\u01b0\u1ee3c khai b\xe1o trong ",(0,o.kt)("strong",{parentName:"p"},"block scope")," c\u1ee7a h\xe0m example, n\xean n\xf3 c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c truy c\u1eadp trong to\xe0n b\u1ed9 h\xe0m. Trong khi \u0111\xf3, bi\u1ebfn ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," \u0111\u01b0\u1ee3c khai b\xe1o trong ",(0,o.kt)("strong",{parentName:"p"},"block scope")," c\u1ee7a c\xe2u l\u1ec7nh ",(0,o.kt)("inlineCode",{parentName:"p"},"if"),", n\xean n\xf3 ch\u1ec9 c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c truy c\u1eadp trong ph\u1ea1m vi c\u1ee7a c\xe2u l\u1ec7nh \u0111\xf3 v\xe0 kh\xf4ng th\u1ec3 \u0111\u01b0\u1ee3c truy c\u1eadp t\u1eeb b\xean ngo\xe0i.")))}m.isMDXComponent=!0}}]);