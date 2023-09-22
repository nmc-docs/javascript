"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[1903],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},h="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),h=p(n),k=r,c=h["".concat(u,".").concat(k)]||h[k]||o[k]||i;return n?a.createElement(c,l(l({ref:e},m),{},{components:n})):a.createElement(c,l({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=k;var d={};for(var u in e)hasOwnProperty.call(e,u)&&(d[u]=e[u]);d.originalType=t,d[h]="string"==typeof t?t:r,l[1]=d;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1776:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},l="String methods",d={unversionedId:"string/string-methods",id:"string/string-methods",title:"String methods",description:"L\u1ea5y \u0111\u1ed9 d\xe0i chu\u1ed7i:",source:"@site/docs/string/string-methods.md",sourceDirName:"string",slug:"/string/string-methods",permalink:"/javascript/string/string-methods",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Gi\u1edbi thi\u1ec7u",permalink:"/javascript/string/introduce"},next:{title:"Template strings",permalink:"/javascript/string/template-strings"}},u={},p=[{value:"L\u1ea5y \u0111\u1ed9 d\xe0i chu\u1ed7i:",id:"l\u1ea5y-\u0111\u1ed9-d\xe0i-chu\u1ed7i",level:2},{value:"L\u1ea5y k\xed t\u1ef1 trong chu\u1ed7i:",id:"l\u1ea5y-k\xed-t\u1ef1-trong-chu\u1ed7i",level:2},{value:"T\xe1ch chu\u1ed7i con:",id:"t\xe1ch-chu\u1ed7i-con",level:2},{value:"Thay th\u1ebf chu\u1ed7i:",id:"thay-th\u1ebf-chu\u1ed7i",level:2},{value:"Chuy\u1ec3n \u0111\u1ed5i chu\u1ed7i in hoa, in th\u01b0\u1eddng:",id:"chuy\u1ec3n-\u0111\u1ed5i-chu\u1ed7i-in-hoa-in-th\u01b0\u1eddng",level:2},{value:"N\u1ed1i chu\u1ed7i m\u1edbi v\xe0o sau chu\u1ed7i ban \u0111\u1ea7u:",id:"n\u1ed1i-chu\u1ed7i-m\u1edbi-v\xe0o-sau-chu\u1ed7i-ban-\u0111\u1ea7u",level:2},{value:"X\xf3a b\u1ecf kho\u1ea3ng tr\u1eafng \u1edf \u0111\u1ea7u v\xe0 cu\u1ed1i x\xe2u:",id:"x\xf3a-b\u1ecf-kho\u1ea3ng-tr\u1eafng-\u1edf-\u0111\u1ea7u-v\xe0-cu\u1ed1i-x\xe2u",level:2},{value:"padStart(), padEnd():",id:"padstart-padend",level:2},{value:"Ph\xe2n t\xe1ch chu\u1ed7i:",id:"ph\xe2n-t\xe1ch-chu\u1ed7i",level:2},{value:"T\xecm ki\u1ebfm:",id:"t\xecm-ki\u1ebfm",level:2},{value:"L\u1eb7p l\u1ea1i chu\u1ed7i:",id:"l\u1eb7p-l\u1ea1i-chu\u1ed7i",level:2}],m={toc:p},h="wrapper";function o(t){let{components:e,...n}=t;return(0,r.kt)(h,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"string-methods"},"String methods"),(0,r.kt)("h2",{id:"l\u1ea5y-\u0111\u1ed9-d\xe0i-chu\u1ed7i"},"L\u1ea5y \u0111\u1ed9 d\xe0i chu\u1ed7i:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Return"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str.length")),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 \u0111\u1ed9 d\xe0i c\u1ee7a chu\u1ed7i")))),(0,r.kt)("h2",{id:"l\u1ea5y-k\xed-t\u1ef1-trong-chu\u1ed7i"},"L\u1ea5y k\xed t\u1ef1 trong chu\u1ed7i:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Return"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str.at(pos)")),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 k\xed t\u1ef1 t\u1ea1i v\u1ecb tr\xed ",(0,r.kt)("inlineCode",{parentName:"td"},"pos")," c\u1ee7a chu\u1ed7i str")))),(0,r.kt)("h2",{id:"t\xe1ch-chu\u1ed7i-con"},"T\xe1ch chu\u1ed7i con:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Return"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str.slice(start, end)")),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 m\u1ed9t chu\u1ed7i con t\u1eeb [",(0,r.kt)("inlineCode",{parentName:"td"},"start"),"; ",(0,r.kt)("inlineCode",{parentName:"td"},"end"),") trong chu\u1ed7i str. N\u1ebfu ",(0,r.kt)("inlineCode",{parentName:"td"},"end")," b\u1ecb b\u1ecf qua, th\xec s\u1ebd l\u1ea5y \u0111\u1ebfn h\u1ebft chu\u1ed7i")))),(0,r.kt)("h2",{id:"thay-th\u1ebf-chu\u1ed7i"},"Thay th\u1ebf chu\u1ed7i:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Return"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str.replace(oldStr, newStr)")),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 m\u1ed9t chu\u1ed7i sau khi thay th\u1ebf chu\u1ed7i con ",(0,r.kt)("inlineCode",{parentName:"td"},"oldStr")," \u0111\u1ea7u ti\xean \u0111\u01b0\u1ee3c t\xecm th\u1ea5y b\u1edfi ",(0,r.kt)("inlineCode",{parentName:"td"},"newStr")," t\u1eeb x\xe2u str ban \u0111\u1ea7u.")))),(0,r.kt)("h2",{id:"chuy\u1ec3n-\u0111\u1ed5i-chu\u1ed7i-in-hoa-in-th\u01b0\u1eddng"},"Chuy\u1ec3n \u0111\u1ed5i chu\u1ed7i in hoa, in th\u01b0\u1eddng:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Return"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str.toUpperCase()")),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 m\u1ed9t chu\u1ed7i m\u1edbi \u0111\u01b0\u1ee3c in hoa b\u1edfi chu\u1ed7i ban \u0111\u1ea7u.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str.toLowerCase()")),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 m\u1ed9t chu\u1ed7i m\u1edbi \u0111\u01b0\u1ee3c in th\u01b0\u1eddng b\u1edfi chu\u1ed7i ban \u0111\u1ea7u.")))),(0,r.kt)("h2",{id:"n\u1ed1i-chu\u1ed7i-m\u1edbi-v\xe0o-sau-chu\u1ed7i-ban-\u0111\u1ea7u"},"N\u1ed1i chu\u1ed7i m\u1edbi v\xe0o sau chu\u1ed7i ban \u0111\u1ea7u:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Return"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str.concat(string2, string3,... stringN)")),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 m\u1ed9t chu\u1ed7i sau khi n\u1ed1i ",(0,r.kt)("inlineCode",{parentName:"td"},"string2"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"string3"),",...",(0,r.kt)("inlineCode",{parentName:"td"},"stringN")," v\xe0o cu\u1ed7i chu\u1ed7i ",(0,r.kt)("inlineCode",{parentName:"td"},"str"))))),(0,r.kt)("h2",{id:"x\xf3a-b\u1ecf-kho\u1ea3ng-tr\u1eafng-\u1edf-\u0111\u1ea7u-v\xe0-cu\u1ed1i-x\xe2u"},"X\xf3a b\u1ecf kho\u1ea3ng tr\u1eafng \u1edf \u0111\u1ea7u v\xe0 cu\u1ed1i x\xe2u:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Return"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str.trimStart()")),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 chu\u1ed7i m\u1edbi sau khi x\xf3a kho\u1ea3ng tr\u1eafng \u1edf \u0111\u1ea7u")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str.trimEnd()")),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 chu\u1ed7i m\u1edbi sau khi x\xf3a kho\u1ea3ng tr\u1eafng \u1edf cu\u1ed1i chu\u1ed7i")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str.trim()")),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 chu\u1ed7i m\u1edbi sau khi x\xf3a kho\u1ea3ng tr\u1eafng \u1edf \u0111\u1ea7u v\xe0 cu\u1ed1i chu\u1ed7i ban \u0111\u1ea7u")))),(0,r.kt)("h2",{id:"padstart-padend"},"padStart(), padEnd():"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Return"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str.padStart(maxLength, insertStr)")),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 m\u1ed9t chu\u1ed7i sau khi ch\xe8n x\xe2u ",(0,r.kt)("inlineCode",{parentName:"td"},"insertStr")," v\xe0o tr\u01b0\u1edbc x\xe2u ",(0,r.kt)("inlineCode",{parentName:"td"},"str")," sao cho x\xe2u m\u1edbi c\xf3 \u0111\u1ed9 d\xe0i \u0111\xfang b\u1eb1ng ",(0,r.kt)("inlineCode",{parentName:"td"},"maxLength"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str.padEnd(maxLength, insertStr)")),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 m\u1ed9t chu\u1ed7i sau khi ch\xe8n x\xe2u ",(0,r.kt)("inlineCode",{parentName:"td"},"insertStr")," v\xe0o sau x\xe2u ",(0,r.kt)("inlineCode",{parentName:"td"},"str")," sao cho x\xe2u m\u1edbi c\xf3 \u0111\u1ed9 d\xe0i \u0111\xfang b\u1eb1ng ",(0,r.kt)("inlineCode",{parentName:"td"},"maxLength"))))),(0,r.kt)("h2",{id:"ph\xe2n-t\xe1ch-chu\u1ed7i"},"Ph\xe2n t\xe1ch chu\u1ed7i:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Return"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str.split(separator)")),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 m\u1ed9t m\u1ea3ng c\xe1c x\xe2u \u0111\u01b0\u1ee3c ph\xe2n t\xe1ch b\u1eb1ng ",(0,r.kt)("inlineCode",{parentName:"td"},"separator"),". N\u1ebfu ",(0,r.kt)("inlineCode",{parentName:"td"},"separator")," l\xe0 ",(0,r.kt)("inlineCode",{parentName:"td"},'""')," th\xec tr\u1ea3 v\u1ec1 m\u1ea3ng ch\u1ee9a c\xe1c k\xed t\u1ef1 trong x\xe2u")))),(0,r.kt)("h2",{id:"t\xecm-ki\u1ebfm"},"T\xecm ki\u1ebfm:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Return"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str.endsWith(searchValue, length)")),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," n\u1ebfu ",(0,r.kt)("inlineCode",{parentName:"td"},"length")," k\xed t\u1ef1 \u0111\u1ea7u c\u1ee7a chu\u1ed7i k\u1ebft th\xfac b\u1edfi ",(0,r.kt)("inlineCode",{parentName:"td"},"searchValue"),", ng\u01b0\u1ee3c l\u1ea1i tr\u1ea3 v\u1ec1 false. N\u1ebfu ",(0,r.kt)("inlineCode",{parentName:"td"},"length")," kh\xf4ng \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh, m\u1eb7c \u0111\u1ecbnh l\xe0 \u0111\u1ed9 d\xe0i c\u1ee7a chu\u1ed7i")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str.startsWith(searchValue, start)")),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," n\u1ebfu chu\u1ed7i ",(0,r.kt)("inlineCode",{parentName:"td"},"str")," \u0111\u01b0\u1ee3c b\u1eaft \u0111\u1ea7u b\u1edfi chu\u1ed7i ",(0,r.kt)("inlineCode",{parentName:"td"},"searchValue")," b\u1eaft \u0111\u1ea7u t\u1eeb k\xed t\u1ef1 th\u1ee9 ",(0,r.kt)("inlineCode",{parentName:"td"},"start"),", ng\u01b0\u1ee3c l\u1ea1i tr\u1ea3 v\u1ec1 ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),". N\u1ebfu ",(0,r.kt)("inlineCode",{parentName:"td"},"start")," kh\xf4ng \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh, m\u1eb7c \u0111\u1ecbnh l\xe0 ",(0,r.kt)("inlineCode",{parentName:"td"},"0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str.indexOf(searchString, position)")),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 v\u1ecb tr\xed xu\u1ea5t hi\u1ec7n \u0111\u1ea7u ti\xean c\u1ee7a chu\u1ed7i ",(0,r.kt)("inlineCode",{parentName:"td"},"searchString")," t\u1eeb k\xed t\u1ef1 c\xf3 ch\u1ec9 s\u1ed1 l\xe0 ",(0,r.kt)("inlineCode",{parentName:"td"},"position")," trong chu\u1ed7i ",(0,r.kt)("inlineCode",{parentName:"td"},"str")," ban \u0111\u1ea7u (t\xecm ki\u1ebfm xu\xf4i). N\u1ebfu kh\xf4ng t\xecm th\u1ea5y, tr\u1ea3 v\u1ec1 ",(0,r.kt)("inlineCode",{parentName:"td"},"-1"),". N\u1ebfu ",(0,r.kt)("inlineCode",{parentName:"td"},"position")," kh\xf4ng c\xf3, m\u1eb7c \u0111\u1ecbnh l\xe0 ",(0,r.kt)("inlineCode",{parentName:"td"},"0"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str.lastIndexOf(searchString)")),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 v\u1ecb tr\xed xu\u1ea5t hi\u1ec7n l\u1ea7n cu\u1ed1i c\u1ee7a chu\u1ed7i ",(0,r.kt)("inlineCode",{parentName:"td"},"searchString")," trong chu\u1ed7i ban \u0111\u1ea7u. N\u1ebfu kh\xf4ng c\xf3, tr\u1ea3 v\u1ec1 ",(0,r.kt)("inlineCode",{parentName:"td"},"-1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str.search(searchStringOrRegEx)")),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 v\u1ecb tr\xed xu\u1ea5t hi\u1ec7n \u0111\u1ea7u ti\xean c\u1ee7a chu\u1ed7i ",(0,r.kt)("inlineCode",{parentName:"td"},"searchStringOrRegEx"),". ",(0,r.kt)("inlineCode",{parentName:"td"},"searchStringOrRegEx"),"c\xf3 th\u1ec3 l\xe0 chu\u1ed7i th\xf4ng th\u01b0\u1eddng ho\u1eb7c bi\u1ec3u th\u1ee9c ch\xednh quy (RegEx). N\u1ebfu kh\xf4ng t\xecm th\u1ea5y, tr\u1ea3 v\u1ec1 ",(0,r.kt)("inlineCode",{parentName:"td"},"-1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str.match(RegEx)")),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 m\u1ed9t m\u1ea3ng c\xe1c chu\u1ed7i kh\u1edbp v\u1edbi ",(0,r.kt)("inlineCode",{parentName:"td"},"RegEx"),". V\xed d\u1ee5: ",(0,r.kt)("inlineCode",{parentName:"td"},"fdpoPjdfijfAuirtfuJ.match(/[A-Z]/g)")," => ",(0,r.kt)("inlineCode",{parentName:"td"},"['P', 'A', 'J']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"str.includes(searchValue, start)")),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," n\u1ebfu chu\u1ed7i ",(0,r.kt)("inlineCode",{parentName:"td"},"searchValue")," \u0111\u01b0\u1ee3c t\xecm th\u1ea5y t\u1eeb k\xed t\u1ef1 th\u1ee9 ",(0,r.kt)("inlineCode",{parentName:"td"},"start")," \u1edf chu\u1ed7i ban \u0111\u1ea7u. Ng\u01b0\u1ee3c l\u1ea1i tr\u1ea3 v\u1ec1 ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),". N\u1ebfu ",(0,r.kt)("inlineCode",{parentName:"td"},"start")," kh\xf4ng \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh, m\u1eb7c \u0111\u1ecbnh l\xe0 ",(0,r.kt)("inlineCode",{parentName:"td"},"0"))))),(0,r.kt)("h2",{id:"l\u1eb7p-l\u1ea1i-chu\u1ed7i"},"L\u1eb7p l\u1ea1i chu\u1ed7i:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Return"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"s.repeat(count)")),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea3 v\u1ec1 chu\u1ed7i m\u1edbi sau khi l\u1eb7p l\u1ea1i chu\u1ed7i ban \u0111\u1ea7u ",(0,r.kt)("inlineCode",{parentName:"td"},"count")," l\u1ea7n")))))}o.isMDXComponent=!0}}]);