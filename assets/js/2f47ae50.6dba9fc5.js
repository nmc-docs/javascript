"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[9340],{3905:(t,n,e)=>{e.d(n,{Zo:()=>p,kt:()=>g});var i=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n){if(null==t)return{};var e,i,r=function(t,n){if(null==t)return{};var e,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)e=a[i],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)e=a[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var l=i.createContext({}),u=function(t){var n=i.useContext(l),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},p=function(t){var n=u(t.components);return i.createElement(l.Provider,{value:n},t.children)},m="mdxType",h={inlineCode:"code",wrapper:function(t){var n=t.children;return i.createElement(i.Fragment,{},n)}},s=i.forwardRef((function(t,n){var e=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=u(e),s=r,g=m["".concat(l,".").concat(s)]||m[s]||h[s]||a;return e?i.createElement(g,o(o({ref:n},p),{},{components:e})):i.createElement(g,o({ref:n},p))}));function g(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var a=e.length,o=new Array(a);o[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=t,c[m]="string"==typeof t?t:r,o[1]=c;for(var u=2;u<a;u++)o[u]=e[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,e)}s.displayName="MDXCreateElement"},1395:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var i=e(7462),r=(e(7294),e(3905));const a={sidebar_position:1},o="Gi\u1edbi thi\u1ec7u v\u1ec1 h\xe0m",c={unversionedId:"function/introduce",id:"function/introduce",title:"Gi\u1edbi thi\u1ec7u v\u1ec1 h\xe0m",description:"- Trong JavaScript, m\u1ed9t function l\xe0 m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng \u0111\u1eb7c bi\u1ec7t c\xf3 th\u1ec3 th\u1ef1c hi\u1ec7n m\u1ed9t t\xe1c v\u1ee5 n\xe0o \u0111\xf3 khi \u0111\u01b0\u1ee3c g\u1ecdi.",source:"@site/docs/function/introduce.md",sourceDirName:"function",slug:"/function/introduce",permalink:"/javascript/function/introduce",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"H\xe0m",permalink:"/javascript/category/h\xe0m"},next:{title:"Declaration function",permalink:"/javascript/function/declaration-function"}},l={},u=[],p={toc:u},m="wrapper";function h(t){let{components:n,...e}=t;return(0,r.kt)(m,(0,i.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gi\u1edbi-thi\u1ec7u-v\u1ec1-h\xe0m"},"Gi\u1edbi thi\u1ec7u v\u1ec1 h\xe0m"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Trong JavaScript, m\u1ed9t function l\xe0 m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng \u0111\u1eb7c bi\u1ec7t c\xf3 th\u1ec3 th\u1ef1c hi\u1ec7n m\u1ed9t t\xe1c v\u1ee5 n\xe0o \u0111\xf3 khi \u0111\u01b0\u1ee3c g\u1ecdi."),(0,r.kt)("li",{parentName:"ul"},"C\xe1c function c\xf3 th\u1ec3 nh\u1eadn c\xe1c \u0111\u1ed1i s\u1ed1 (arguments) \u0111\u1ec3 th\u1ef1c hi\u1ec7n m\u1ed9t t\xe1c v\u1ee5 ho\u1eb7c t\xednh to\xe1n n\xe0o \u0111\xf3 v\xe0 c\xf3 th\u1ec3 tr\u1ea3 v\u1ec1 m\u1ed9t gi\xe1 tr\u1ecb n\xe0o \u0111\xf3."),(0,r.kt)("li",{parentName:"ul"},"Function trong JavaScript c\u0169ng c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a nh\u01b0 m\u1ed9t bi\u1ebfn, \u0111\u01b0\u1ee3c g\xe1n cho m\u1ed9t bi\u1ebfn, ho\u1eb7c truy\u1ec1n v\xe0o m\u1ed9t function kh\xe1c d\u01b0\u1edbi d\u1ea1ng \u0111\u1ed1i s\u1ed1."),(0,r.kt)("li",{parentName:"ul"},"C\xe1c function trong JavaScript c\xf3 r\u1ea5t nhi\u1ec1u \u1ee9ng d\u1ee5ng, t\u1eeb vi\u1ec7c x\u1eed l\xfd s\u1ef1 ki\u1ec7n (event handling), t\u1ea1o ra c\xe1c hi\u1ec7u \u1ee9ng \u0111\u1ed9ng tr\xean trang web (animations), x\u1eed l\xfd d\u1eef li\u1ec7u (data processing), t\u1ea1o ra c\xe1c \u0111\u1ed1i t\u01b0\u1ee3ng v\xe0 th\u1ef1c hi\u1ec7n c\xe1c t\xe1c v\u1ee5 ph\u1ee9c t\u1ea1p kh\xe1c")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"C\xf3 hai c\xe1ch vi\u1ebft function:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./declaration-function"},"Declaration function")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./arrow-function"},"Arrow function")))),(0,r.kt)("li",{parentName:"ul"},"Function c\xf3 th\u1ec3 g\xe1n cho m\u1ed9t bi\u1ebfn n\u1ebfu n\xf3 tr\u1ea3 v\u1ec1 gi\xe1 tr\u1ecb:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let x = toCelsius(77);\nlet text = "The temperature is " + x + " Celsius";\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Gi\u1ea3 s\u1eed ta c\xf3 m\u1ed9t function t\xean l\xe0 ",(0,r.kt)("strong",{parentName:"p"},"myFunction")," . D\u01b0\u1edbi \u0111\xe2y l\xe0 s\u1ef1 kh\xe1c nhau khi vi\u1ebft ",(0,r.kt)("inlineCode",{parentName:"p"},"myFunction")," v\xe0 ",(0,r.kt)("inlineCode",{parentName:"p"},"myFunction()"),":"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"myFunction")," : \u0110\xe2y ch\u1ec9 l\xe0 m\u1ed9t tham chi\u1ebfu \u0111\u1ebfn m\u1ed9t h\xe0m. Khi b\u1ea1n vi\u1ebft ",(0,r.kt)("inlineCode",{parentName:"li"},"myFunction")," m\xe0 kh\xf4ng g\u1ecdi n\xf3 b\u1eb1ng c\xe1ch th\xeam d\u1ea5u ngo\u1eb7c tr\xf2n sau t\xean h\xe0m, ngh\u0129a l\xe0 b\u1ea1n \u0111ang truy\u1ec1n tham chi\u1ebfu c\u1ee7a h\xe0m \u0111\xf3 cho m\u1ed9t bi\u1ebfn kh\xe1c ho\u1eb7c s\u1eed d\u1ee5ng n\xf3 trong m\u1ed9t ng\u1eef c\u1ea3nh kh\xe1c. H\xe0m s\u1ebd kh\xf4ng \u0111\u01b0\u1ee3c th\u1ef1c thi trong tr\u01b0\u1eddng h\u1ee3p n\xe0y."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"myFunction()")," : \u0110\xe2y l\xe0 c\xe1ch g\u1ecdi h\xe0m v\xe0 th\u1ef1c thi n\xf3. Khi b\u1ea1n vi\u1ebft ",(0,r.kt)("inlineCode",{parentName:"li"},"myFunction()")," v\u1edbi d\u1ea5u ngo\u1eb7c tr\xf2n, h\xe0m s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi v\xe0 th\u1ef1c thi, v\xe0 k\u1ebft qu\u1ea3 c\u1ee7a n\xf3 s\u1ebd \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function greet() {\n  console.log("Hello!");\n}\n\nconst sayHello = greet; // \u0110\xe2y l\xe0 tham chi\u1ebfu \u0111\u1ebfn h\xe0m greet, kh\xf4ng g\u1ecdi h\xe0m\nsayHello(); // Output: Hello!\n\nconst sayHi = greet(); // \u0110\xe2y l\xe0 g\u1ecdi h\xe0m greet v\xe0 l\u1ea5y k\u1ebft qu\u1ea3 tr\u1ea3 v\u1ec1 (trong tr\u01b0\u1eddng h\u1ee3p n\xe0y l\xe0 undefined)\nsayHi(); // TypeError: sayHi is not a function\n')),(0,r.kt)("p",null,"Trong v\xed d\u1ee5 tr\xean, ",(0,r.kt)("inlineCode",{parentName:"p"},"sayHello")," l\xe0 m\u1ed9t tham chi\u1ebfu \u0111\u1ebfn h\xe0m ",(0,r.kt)("inlineCode",{parentName:"p"},"greet"),", v\xe0 khi g\u1ecdi ",(0,r.kt)("inlineCode",{parentName:"p"},"sayHello()"),", h\xe0m ",(0,r.kt)("inlineCode",{parentName:"p"},"greet")," \u0111\u01b0\u1ee3c th\u1ef1c thi v\xe0 in ra ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello!"),"."),(0,r.kt)("p",null,"Trong khi \u0111\xf3, ",(0,r.kt)("inlineCode",{parentName:"p"},"sayHi")," l\xe0 k\u1ebft qu\u1ea3 c\u1ee7a vi\u1ec7c g\u1ecdi h\xe0m ",(0,r.kt)("inlineCode",{parentName:"p"},"greet()")," (trong tr\u01b0\u1eddng h\u1ee3p n\xe0y l\xe0 undefined). Khi g\u1ecdi ",(0,r.kt)("inlineCode",{parentName:"p"},"sayHi()"),", n\xf3 s\u1ebd g\xe2y ra l\u1ed7i ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeError")," v\xec ",(0,r.kt)("inlineCode",{parentName:"p"},"sayHi")," kh\xf4ng ph\u1ea3i l\xe0 m\u1ed9t h\xe0m."))}h.isMDXComponent=!0}}]);