"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[1901],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),h=o,f=d["".concat(a,".").concat(h)]||d[h]||p[h]||s;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,c=new Array(s);c[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<s;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49639:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=r(87462),o=r(63366),s=(r(67294),r(3905)),c=["components"],i={},a=void 0,u={unversionedId:"Architecture_Dictionary/Objects/Issue",id:"Architecture_Dictionary/Objects/Issue",title:"Issue",description:"A record of a piece of work to be done, a proposed change or a problem to be resolved.  Issues indicate the  Objects to which it refers through Weak Links.  Issues are worked on by Contributors.",source:"@site/docs/Architecture_Dictionary/Objects/Issue.md",sourceDirName:"Architecture_Dictionary/Objects",slug:"/Architecture_Dictionary/Objects/Issue",permalink:"/docs/Architecture_Dictionary/Objects/Issue",editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/docs/Architecture_Dictionary/Objects/Issue.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Instance Project",permalink:"/docs/Architecture_Dictionary/Objects/Instance Project"},next:{title:"Observer",permalink:"/docs/Architecture_Dictionary/Objects/Observer"}},l=[],p={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"A record of a piece of work to be done, a proposed change or a problem to be resolved.  Issues indicate the  Objects to which it refers through Weak Links.  Issues are worked on by Contributors."),(0,s.kt)("p",null,"An Issue is there to capture the initial situation, suggest a resolution and act as a forum for discussion on that Issue."),(0,s.kt)("p",null,"An Issue can weak link any Object which is impacted by the Issue being raised.  It can weak link any number of Objects in this way, including those not in this Project.  In this way e.g. Issues can point out systemic problems."),(0,s.kt)("p",null,"Issues can only be created through Forking a Wish or Issue.  When Forked, the data from the Origin Wish or Issue follows it, dependent on Permissions.  An Issue may Pull Request against the Origin Wish or Issue to merge back in with it.  "),(0,s.kt)("p",null,"An Issue can have a Pull Request raised against it to consider it closed.  Closure stops any further changes to that Issue\u2019s data, but does not prevent Forks, allowing Issues to be effectively reopened.  "),(0,s.kt)("p",null,"Issues can have embedded Contracts in the form of Annotations."),(0,s.kt)("p",null,"Issues can be issued against the project meta-structure (.e.g governance.)"))}d.isMDXComponent=!0}}]);