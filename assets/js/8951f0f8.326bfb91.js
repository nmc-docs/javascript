"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[2670],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(p,".").concat(d)]||u[d]||s[d]||a;return r?n.createElement(f,l(l({ref:t},m),{},{components:r})):n.createElement(f,l({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5088:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:4},l="Import all",i={unversionedId:"modules/import/import-all",id:"modules/import/import-all",title:"Import all",description:"- S\u1eed d\u1ee5ng khi ta mu\u1ed1n import t\u1ea5t c\u1ea3 c\xe1c named export t\u1eeb m\u1ed9t module kh\xe1c",source:"@site/docs/modules/import/import-all.md",sourceDirName:"modules/import",slug:"/modules/import/import-all",permalink:"/javascript/modules/import/import-all",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Import from default export",permalink:"/javascript/modules/import/import-from-default-export"},next:{title:"Re-exporting / Aggregating",permalink:"/javascript/modules/re-exporting"}},p={},c=[],m={toc:c},u="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"import-all"},"Import all"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"S\u1eed d\u1ee5ng khi ta mu\u1ed1n ",(0,o.kt)("inlineCode",{parentName:"li"},"import")," t\u1ea5t c\u1ea3 c\xe1c ",(0,o.kt)("a",{parentName:"li",href:"../export/named-export"},"named export")," t\u1eeb m\u1ed9t module kh\xe1c"),(0,o.kt)("li",{parentName:"ul"},"C\xfa ph\xe1p: ",(0,o.kt)("inlineCode",{parentName:"li"},"import * as /ReplaceName/ from '/Module/'")),(0,o.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import * as Functionally from "./main";\n\nconsole.log(Functionally.name);\nconsole.log(Functionally.age);\nconsole.log(Functionally.add(4, 5));\nFunctionally.greeting();\n')))}s.isMDXComponent=!0}}]);