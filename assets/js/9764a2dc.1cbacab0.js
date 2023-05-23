"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[3163],{99137:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>u});var n=o(87462),a=(o(67294),o(3905));o(61839);const s={},l="R18 Name Resolution System for Interblock",r={unversionedId:"Requests/R18",id:"Requests/R18",title:"R18 Name Resolution System for Interblock",description:"We need a strategy for turning names into chainIds.  We should be able to use collections of resolvers together, and select what priority to give them based on context.  Crucially we should be able to intentionally blind ourselves to content we do not want to see by selecting name resolvers that apply our own values",source:"@site/dust/Requests/R18.md",sourceDirName:"Requests",slug:"/Requests/R18",permalink:"/dust/Requests/R18",draft:!1,editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/dust/Requests/R18.md",tags:[],version:"current",frontMatter:{},sidebar:"dust",previous:{title:"R17 Covenant Resolution System",permalink:"/dust/Requests/R17"},next:{title:"R19 T83 Resilient Warship",permalink:"/dust/Requests/R19"}},i={},u=[],c={toc:u};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"r18-name-resolution-system-for-interblock"},"R18 Name Resolution System for Interblock"),(0,a.kt)("p",null,"We need a strategy for turning names into chainIds.  We should be able to use collections of resolvers together, and select what priority to give them based on context.  Crucially we should be able to intentionally blind ourselves to content we do not want to see by selecting name resolvers that apply our own values"),(0,a.kt)("p",null,"Requirements:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Support international languages and any future languages by default"),(0,a.kt)("li",{parentName:"ol"},"Allow multiple resolutions"),(0,a.kt)("li",{parentName:"ol"},"Context aware resolutions eg: the name ",(0,a.kt)("inlineCode",{parentName:"li"},"bob")," could resolve to different chains depending on what connections your chain had"),(0,a.kt)("li",{parentName:"ol"},"Define a url protocol scheme such as ",(0,a.kt)("inlineCode",{parentName:"li"},"interblock://hostname/path")),(0,a.kt)("li",{parentName:"ol"},"Any chain should be able to act as a name resolver by allowing read access to its child alias HAMT"),(0,a.kt)("li",{parentName:"ol"},"Never rely on a single chain"),(0,a.kt)("li",{parentName:"ol"},"Allow charging for queries"),(0,a.kt)("li",{parentName:"ol"},"Allow anyone to override any query and then pass this on to anyone who will listen")))}d.isMDXComponent=!0}}]);