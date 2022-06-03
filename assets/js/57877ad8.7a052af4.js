"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[91137],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,f=p["".concat(u,".").concat(d)]||p[d]||h[d]||c;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5580:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return h}});var n=r(83117),o=r(80102),c=(r(67294),r(3905)),i=["components"],a={},u=void 0,s={unversionedId:"Architecture_Dictionary/Functions/Governance",id:"Architecture_Dictionary/Functions/Governance",title:"Governance",description:"Governance handles the voting rights and decision making process around accepting or rejecting Pull Requests that are submitted to it. Every Project must include Governance.",source:"@site/interblock/Architecture_Dictionary/Functions/Governance.md",sourceDirName:"Architecture_Dictionary/Functions",slug:"/Architecture_Dictionary/Functions/Governance",permalink:"/interblock/Architecture_Dictionary/Functions/Governance",draft:!1,editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/interblock/Architecture_Dictionary/Functions/Governance.md",tags:[],version:"current",frontMatter:{}},l={},h=[],p={toc:h};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Governance handles the voting rights and decision making process around accepting or rejecting Pull Requests that are submitted to it. Every Project must include Governance."),(0,c.kt)("p",null,"Governance is passed a single question: should this Pull Request be accepted or rejected?. When passed a Pull Request, the Governance applies that question to the Pull Request and, if Yes, applies the Pull Request without further interaction."),(0,c.kt)("p",null,"Governance consists of one or more governanceAlgos. These can be combined in a combinerAlgo. Governance (that part of the voting rights) may also be devolved to other Coordinator Objects, with the result being passed back and combined for a final decision."),(0,c.kt)("p",null,"Contracts which have been signed by a Coordinator Object may override the authority of the Governance of that Coordinator Object. E.g. when selling rights (Attribution) to a Trace, the Trace itself cannot, through its Governance, change it\u2019s only Attribution to remove those rights. Such \u2018locked\u2019 objects within a Coordinator are always referred to the Coordinator that caused that lock to be in operation."),(0,c.kt)("p",null,"A history of the decisions reached by Governance can be recovered from the block history of the Project."))}d.isMDXComponent=!0}}]);