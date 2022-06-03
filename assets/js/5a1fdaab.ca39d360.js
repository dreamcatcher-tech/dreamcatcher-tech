"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[96381],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(t),m=a,h=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return t?r.createElement(h,c(c({ref:n},l),{},{components:t})):r.createElement(h,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},85481:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),c=["components"],i={},s=void 0,u={unversionedId:"DOS_Dictionary/Reference/DOS Instance Structure",id:"DOS_Dictionary/Reference/DOS Instance Structure",title:"DOS Instance Structure",description:"Each DOS instance is related to one and only one user, although a user can have multiple instances.",source:"@site/interblock/DOS_Dictionary/Reference/DOS Instance Structure.md",sourceDirName:"DOS_Dictionary/Reference",slug:"/DOS_Dictionary/Reference/DOS Instance Structure",permalink:"/interblock/DOS_Dictionary/Reference/DOS Instance Structure",draft:!1,editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/interblock/DOS_Dictionary/Reference/DOS Instance Structure.md",tags:[],version:"current",frontMatter:{}},l={},p=[],f={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Each DOS instance is related to one and only one user, although a user can have multiple instances."),(0,o.kt)("p",null,"The structure is a hierarchical folder structure, with each level of the tree containing an Object, the functions available to that Object and the data stored within the schema of that Object."),(0,o.kt)("p",null,"The default tree on spinning up the instance is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/   /* The root of this instance:user pair */\n\n    bank/  {purchase() displayBalance()}\n    addresses\n        /* your friends and networks of friends */\n        smax_example_address\n    appStore/\n    catalogue/\n        /* A required App that allows App discovery */\n        app1/\n            /* An example of a listed install bundle for an app */\n        app2/\n            /* As above, and so forth... */\n    tools/\n        appStoreRegistry/\n            /* A required App to make install bundles available to others from this user */\n        apps/\n            /* The location for all available apps */\n            myApp/\n                /* The location of an installed app */\n                    -> /net/spynet.com:/dos/something\n            dreamcatcher/\n                /* an installed app with sub-Objects */\n                projects/\n                    /*A sub-Object to Dreamcatcher (in this example) */\n            crm/\n                /*Another installed app, and so forth\u2026 */\n\n            app1/\n                net/\n                    -> /net/app1.rhubarb.com:/usage\n    files/\n        memoirsOfAScotsman.txt // covenant: textfile covenant, binary: data\n    share/\n        -> /files/memoirsOfAScotsman.txt\n    dev/\n        /* location of chainID\u2019s of running UI instances for this user */\n        tty1/ /* An example of a running browser instance */\n        tty2/ /* An example of a running mobile app instance */\n\n    net/ { search() }\n        spynet.com:/dos/something\n        tartan.net:/incoming/email\n        app1.rhubarb.com:/usage -> /apps/app1/net\n\n    governance/\n        governor/ (self) // stgithub -> s & t -> self\n")))}m.isMDXComponent=!0}}]);