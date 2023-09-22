"use strict";(self.webpackChunkjavascript=self.webpackChunkjavascript||[]).push([[3642],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,h=p["".concat(i,".").concat(g)]||p[g]||m[g]||l;return n?a.createElement(h,c(c({ref:t},s),{},{components:n})):a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=g;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:r,c[1]=o;for(var u=2;u<l;u++)c[u]=n[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1},c="Gi\u1edbi thi\u1ec7u",o={unversionedId:"object/introduce",id:"object/introduce",title:"Gi\u1edbi thi\u1ec7u",description:"Object l\xe0 g\xec?",source:"@site/docs/object/introduce.md",sourceDirName:"object",slug:"/object/introduce",permalink:"/javascript/object/introduce",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Object",permalink:"/javascript/category/object"},next:{title:"Object static methods",permalink:"/javascript/object/object-static-methods"}},i={},u=[{value:"Object l\xe0 g\xec?",id:"object-l\xe0-g\xec",level:2},{value:"M\u1ed9t s\u1ed1 c\xe1ch x\u1eed l\xfd object:",id:"m\u1ed9t-s\u1ed1-c\xe1ch-x\u1eed-l\xfd-object",level:2}],s={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gi\u1edbi-thi\u1ec7u"},"Gi\u1edbi thi\u1ec7u"),(0,r.kt)("h2",{id:"object-l\xe0-g\xec"},"Object l\xe0 g\xec?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Object l\xe0 m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng trong Javascript, m\u1ed7i Object c\xf3 th\u1ec3 ch\u1ee9a ph\u01b0\u01a1ng th\u1ee9c v\xe0 thu\u1ed9c t\xednh trong n\xf3 d\u01b0\u1edbi d\u1ea1ng ",(0,r.kt)("inlineCode",{parentName:"li"},"key: value")),(0,r.kt)("li",{parentName:"ul"},"M\u1ed7i thu\u1ed9c t\xednh, ph\u01b0\u01a1ng th\u1ee9c ng\u0103n c\xe1ch nhau b\u1edfi d\u1ea5u ",(0,r.kt)("inlineCode",{parentName:"li"},",")),(0,r.kt)("li",{parentName:"ul"},"\u0110\u1ec3 truy c\u1eadp thu\u1ed9c t\xednh hay ph\u01b0\u01a1ng th\u1ee9c, ta s\u1eed d\u1ee5ng ",(0,r.kt)("inlineCode",{parentName:"li"},".")," Ho\u1eb7c th\xf4ng qua to\xe1n t\u1eed ",(0,r.kt)("inlineCode",{parentName:"li"},"[]")),(0,r.kt)("li",{parentName:"ul"},"C\xe1c thu\u1ed9c t\xednh hay ph\u01b0\u01a1ng th\u1ee9c m\xe0 kh\xf4ng c\xf3 trong Object s\u1ebd nh\u1eadn gi\xe1 tr\u1ecb ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined")),(0,r.kt)("li",{parentName:"ul"},"Trong ph\u01b0\u01a1ng th\u1ee9c c\u1ee7a \u0111\u1ed1i t\u01b0\u1ee3ng, \u0111\u1ec3 truy c\u1eadp \u0111\u1ebfn thu\u1ed9c t\xednh ta ph\u1ea3i lu\xf4n d\xf9ng t\u1eeb kh\xf3a ",(0,r.kt)("inlineCode",{parentName:"li"},"this.property")),(0,r.kt)("li",{parentName:"ul"},"V\xed d\u1ee5:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const People = {\n  firstName: "Chi",\n  lastName: "Nguyen",\n  id: "B20DCCN111",\n  age: 20,\n  introduction: function () {\n    console.log(\n      `Hello, I am ${this.firstName} ${this.lastName}. I am ${this.age} years old`\n    );\n  },\n};\n\nconsole.log(People["lastName"]); //Nguyen\nPeople.introduction(); //Hello, I am Chi Nguyen. I am 20 years old\n')),(0,r.kt)("h2",{id:"m\u1ed9t-s\u1ed1-c\xe1ch-x\u1eed-l\xfd-object"},"M\u1ed9t s\u1ed1 c\xe1ch x\u1eed l\xfd object:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Th\xeam thu\u1ed9c t\xednh cho Object:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const People = {\n  firstName: "Chi",\n  lastName: "Nguyen",\n  id: "B20DCCN111",\n  age: 20,\n  introduction: function () {\n    console.log(\n      `Hello, I am ${this.firstName} ${this.lastName}. I am ${this.age} years old`\n    );\n  },\n};\n\nPeople.height = 170;\nconsole.log(People);\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Truy c\u1eadp ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," c\u1ee7a m\u1ed9t thu\u1ed9c t\xednh trong \u0111\u1ed1i t\u01b0\u1ee3ng qua m\u1ed9t bi\u1ebfn:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const People = {\n  firstName: "Chi",\n  lastName: "Nguyen",\n  id: "B20DCCN111",\n  age: 20,\n};\n\nlet x = "id";\nconsole.log(People[x]);\n//Output: B20DCCN111\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"T\u1ea1o thu\u1ed9c t\xednh m\u1edbi cho Object th\xf4ng qua m\u1ed9t bi\u1ebfn:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let abc_xyz = "email";\n\nconst People = {\n  firstName: "Chi",\n  lastName: "Nguyen",\n  id: "B20DCCN111",\n  age: 20,\n  [abc_xyz]: "minhchico300kc@gmail.com",\n};\n\nconsole.log(People); // {firstName: \'Chi\', lastName: \'Nguyen\', id: \'B20DCCN111\', age: 20, email: \'minhchico300kc@gmail.com\'}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Duy\u1ec7t qua c\xe1c ",(0,r.kt)("strong",{parentName:"li"},"key")," v\xe0 ",(0,r.kt)("strong",{parentName:"li"},"value")," c\u1ee7a Object:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const People = {\n  firstName: "Chi",\n  lastName: "Nguyen",\n  id: "B20DCCN111",\n  age: 20,\n};\n\n//Duy\u1ec7t t\u1ea5t c\u1ea3 c\xe1c "key" c\u1ee7a Object:\nfor (let x of Object.keys(People)) //Tr\u1ea3 v\u1ec1 m\u1ea3ng ch\u1ee9a t\u1ea5t c\u1ea3 c\xe1c "key" c\u1ee7a Object\n  console.log(x);\n\n//Duy\u1ec7t t\u1ea5t c\u1ea3 c\xe1c "value" c\u1ee7a Object:\nfor (let x of Object.values(People)) //Tr\u1ea3 v\u1ec1 m\u1ea3ng ch\u1ee9a t\u1ea5t c\u1ea3 c\xe1c "value" c\u1ee7a Object\n  console.log(x);\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ki\u1ec3m tra xem m\u1ed9t thu\u1ed9c t\xednh c\xf3 n\u1eb1m trong object hay kh\xf4ng b\u1eb1ng to\xe1n t\u1eed ",(0,r.kt)("inlineCode",{parentName:"li"},"in"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const obj = {\n  name: "Chi",\n  age: 21,\n};\n\nconsole.log("name" in obj); // true\n')))}m.isMDXComponent=!0}}]);