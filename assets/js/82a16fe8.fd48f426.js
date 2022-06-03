"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[1893],{3905:function(t,e,r){r.d(e,{Zo:function(){return l},kt:function(){return h}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=n.createContext({}),s=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},l=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,u=t.parentName,l=a(t,["components","mdxType","originalType","parentName"]),f=s(r),h=o,g=f["".concat(u,".").concat(h)]||f[h]||p[h]||i;return r?n.createElement(g,c(c({ref:e},l),{},{components:r})):n.createElement(g,c({ref:e},l))}));function h(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a.mdxType="string"==typeof t?t:o,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13146:function(t,e,r){r.r(e),r.d(e,{assets:function(){return l},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),c=["components"],a={},u=void 0,s={unversionedId:"Architecture_Dictionary/Events/Negotiation",id:"Architecture_Dictionary/Events/Negotiation",title:"Negotiation",description:"Negotiations are carried out using Contracts, a sub-type of Annotations.",source:"@site/tech/Architecture_Dictionary/Events/Negotiation.md",sourceDirName:"Architecture_Dictionary/Events",slug:"/Architecture_Dictionary/Events/Negotiation",permalink:"/tech/Architecture_Dictionary/Events/Negotiation",draft:!1,editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/tech/Architecture_Dictionary/Events/Negotiation.md",tags:[],version:"current",frontMatter:{}},l={},p=[],f={toc:p};function h(t){var e=t.components,r=(0,o.Z)(t,c);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Negotiations are carried out using Contracts, a sub-type of Annotations."),(0,i.kt)("p",null,"The initial offer can be made by either the Project itself, or by any other Person, by Pull Requesting to attach a Contract to any Object. A counter offer is a Pull Request against that Contract, possibly suggesting changes to the terms, possibly Commenting on it. The Contract goes through the usual Pull Request cycle, Negotiating, accepting or rejecting."),(0,i.kt)("p",null,"If accepted, the Contract is Merged in with the Object, with it\u2019s Algo being triggered on the event it is watching for, distributing funds and Attribution as required by that Contract."))}h.isMDXComponent=!0}}]);