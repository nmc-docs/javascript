"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[5972],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),g=i,d=p["".concat(o,".").concat(g)]||p[g]||m[g]||a;return r?n.createElement(d,c(c({ref:t},l),{},{components:r})):n.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=g;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[p]="string"==typeof e?e:i,c[1]=u;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1131:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:1},c="Gi\u1edbi thi\u1ec7u",u={unversionedId:"destructuring-assignment/introduce",id:"destructuring-assignment/introduce",title:"Gi\u1edbi thi\u1ec7u",description:"- Destructuring Assignment l\xe0 m\u1ed9t c\xfa ph\xe1p cho ph\xe9p t\xe1ch d\u1eef li\u1ec7u \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef b\xean trong Object ho\u1eb7c Array (t\u1ed5ng qu\xe1t h\u01a1n l\xe0 c\xe1c iterable values) v\xe0 g\xe1n ch\xfang cho c\xe1c bi\u1ebfn ri\xeang bi\u1ec7t",source:"@site/docs/destructuring-assignment/introduce.md",sourceDirName:"destructuring-assignment",slug:"/destructuring-assignment/introduce",permalink:"/javascript/destructuring-assignment/introduce",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Destructuring Assignment",permalink:"/javascript/category/destructuring-assignment"},next:{title:"Array destructuring",permalink:"/javascript/destructuring-assignment/array-destructuring"}},o={},s=[],l={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gi\u1edbi-thi\u1ec7u"},"Gi\u1edbi thi\u1ec7u"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Destructuring Assignment")," l\xe0 m\u1ed9t c\xfa ph\xe1p cho ph\xe9p t\xe1ch d\u1eef li\u1ec7u \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef b\xean trong ",(0,i.kt)("inlineCode",{parentName:"li"},"Object")," ho\u1eb7c ",(0,i.kt)("inlineCode",{parentName:"li"},"Array")," (t\u1ed5ng qu\xe1t h\u01a1n l\xe0 c\xe1c ",(0,i.kt)("inlineCode",{parentName:"li"},"iterable values"),") v\xe0 g\xe1n ch\xfang cho c\xe1c bi\u1ebfn ri\xeang bi\u1ec7t"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Destructuring Assignment")," ra th\xe0nh hai nh\xf3m ch\xednh:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./array-destructuring"},"Array destructuring")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./object-destructuring"},"Object destructuring")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Destructuring Assignment")," c\xf3 th\u1ec3 l\xe0m ",(0,i.kt)("inlineCode",{parentName:"li"},"paremeter")," c\u1ee7a m\u1ed9t ",(0,i.kt)("inlineCode",{parentName:"li"},"function"),". N\xf3 \u0111\u01b0\u1ee3c g\u1ecdi l\xe0: ",(0,i.kt)("a",{parentName:"li",href:"./parameter-destructuring"},"Parameter destructuring"))))}m.isMDXComponent=!0}}]);