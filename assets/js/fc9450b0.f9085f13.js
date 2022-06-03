"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[4107],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),h=i,d=f["".concat(u,".").concat(h)]||f[h]||p[h]||o;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68488:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],c={},u=void 0,l={unversionedId:"DRAFTS/tuning-types",id:"DRAFTS/tuning-types",title:"tuning-types",description:"There are four main types of tuning that are done on Interblock after every major change. These are listed in order of decreasing difficulty, and decreasing abstraction.",source:"@site/tech/DRAFTS/tuning-types.md",sourceDirName:"DRAFTS",slug:"/DRAFTS/tuning-types",permalink:"/tech/DRAFTS/tuning-types",draft:!1,editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/tech/DRAFTS/tuning-types.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Protocol Tuning",id:"protocol-tuning",level:2},{value:"Architecture tuning",id:"architecture-tuning",level:2},{value:"Implementation tuning",id:"implementation-tuning",level:2},{value:"Application tuning",id:"application-tuning",level:2}],f={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are four main types of tuning that are done on Interblock after every major change. These are listed in order of decreasing difficulty, and decreasing abstraction."),(0,o.kt)("h2",{id:"protocol-tuning"},"Protocol Tuning"),(0,o.kt)("p",null,"How the protocol operates, avoiding high level wastage such as requiring 3 blocks to initialize a chain, when 2 is the minimum. Sending interblocks with only promise updates. Sending only diffs in interblocks."),(0,o.kt)("h2",{id:"architecture-tuning"},"Architecture tuning"),(0,o.kt)("p",null,"The design for how to operate the protocol, particularly with interactions between databases, processors, and websockets. The architecture was designed to not just implement the protocol, but to use the protocol in its own implementation."),(0,o.kt)("h2",{id:"implementation-tuning"},"Implementation tuning"),(0,o.kt)("p",null,"Code level specifics of the implementation of the architecture. eg: how to hash faster, how to stringify faster"),(0,o.kt)("h2",{id:"application-tuning"},"Application tuning"),(0,o.kt)("p",null,"The end application can be modified to use the features of the blockchain to advantage. Mostly this is taking advantage of the near unlimited multithreading ability, by pushing operations out to the edge of the system, rather than controlling from a centre."),(0,o.kt)("p",null,"It is rare than an application requirement would cause protocol tuning to occur."))}h.isMDXComponent=!0}}]);