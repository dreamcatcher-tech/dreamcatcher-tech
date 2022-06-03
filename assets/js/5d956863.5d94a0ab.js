"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[44457],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,f=p["".concat(u,".").concat(d)]||p[d]||h[d]||c;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},73633:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return h}});var r=n(83117),o=n(80102),c=(n(67294),n(3905)),i=["components"],a={},u=void 0,s={unversionedId:"Architecture_Dictionary/Functions/Governance",id:"Architecture_Dictionary/Functions/Governance",title:"Governance",description:"Governance handles the voting rights and decision making process around accepting or rejecting Pull Requests that are submitted to it. Every Project must include Governance.",source:"@site/license/Architecture_Dictionary/Functions/Governance.md",sourceDirName:"Architecture_Dictionary/Functions",slug:"/Architecture_Dictionary/Functions/Governance",permalink:"/license/Architecture_Dictionary/Functions/Governance",draft:!1,editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/license/Architecture_Dictionary/Functions/Governance.md",tags:[],version:"current",frontMatter:{}},l={},h=[],p={toc:h};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Governance handles the voting rights and decision making process around accepting or rejecting Pull Requests that are submitted to it. Every Project must include Governance."),(0,c.kt)("p",null,"Governance is passed a single question: should this Pull Request be accepted or rejected?. When passed a Pull Request, the Governance applies that question to the Pull Request and, if Yes, applies the Pull Request without further interaction."),(0,c.kt)("p",null,"Governance consists of one or more governanceAlgos. These can be combined in a combinerAlgo. Governance (that part of the voting rights) may also be devolved to other Coordinator Objects, with the result being passed back and combined for a final decision."),(0,c.kt)("p",null,"Contracts which have been signed by a Coordinator Object may override the authority of the Governance of that Coordinator Object. E.g. when selling rights (Attribution) to a Trace, the Trace itself cannot, through its Governance, change it\u2019s only Attribution to remove those rights. Such \u2018locked\u2019 objects within a Coordinator are always referred to the Coordinator that caused that lock to be in operation."),(0,c.kt)("p",null,"A history of the decisions reached by Governance can be recovered from the block history of the Project."))}d.isMDXComponent=!0}}]);