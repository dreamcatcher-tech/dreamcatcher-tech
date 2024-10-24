"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[3570],{10532:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));a(61839);const o={},s="I12 WebDOS framework",l={unversionedId:"Ideas/I12",id:"Ideas/I12",title:"I12 WebDOS framework",description:"Need a web UI framework that interacts with the blockchain natively.",source:"@site/dust/Ideas/I12.md",sourceDirName:"Ideas",slug:"/Ideas/I12",permalink:"/dust/Ideas/I12",draft:!1,editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/dust/Ideas/I12.md",tags:[],version:"current",frontMatter:{},sidebar:"dust",previous:{title:"I11 Request-Idea",permalink:"/dust/Ideas/I11"},next:{title:"I13 Patent Pooling",permalink:"/dust/Ideas/I13"}},r={},c=[],d={toc:c};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"i12-webdos-framework"},"I12 WebDOS framework"),(0,i.kt)("p",null,"Need a web UI framework that interacts with the blockchain natively."),(0,i.kt)("p",null,"DOS describes an application as a filesystem like tree of objects and links to objects."),(0,i.kt)("p",null,"Turning this into a UI framework can remove much of the burden of building a UI by harmonising with the application backend."),(0,i.kt)("p",null,"There should be a basic version so that a commandline app will be interpreted automatically and be useable."),(0,i.kt)("p",null,"This should tie in to the ORM style interface."),(0,i.kt)("p",null,"Must be able to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Subscribe to a path"),(0,i.kt)("li",{parentName:"ol"},"Render some default components"),(0,i.kt)("li",{parentName:"ol"},"User supply components that override some paths"),(0,i.kt)("li",{parentName:"ol"},"Update the location in the browser when navigating to different parts of the app"),(0,i.kt)("li",{parentName:"ol"},"Provide easy means of conflict resolution - may prohibit moving forwards until sync has occured, but should attempt auto merge and present a UI to the user")),(0,i.kt)("p",null,"ORM style features:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Automatically determine what actions can be called on each object, and with what parameters")),(0,i.kt)("p",null,"Layout must:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Lay out react components in a tree the same way that React-Router does"),(0,i.kt)("li",{parentName:"ol"},"Provide speculatively executed feedback by way of displaying uncommited changes, and visual cues about the state of the remote application, being: synced, pending, discconnected, or rejected")),(0,i.kt)("p",null,"Less critical features:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Provide a loading screen while the blockchain is initializing"),(0,i.kt)("li",{parentName:"ol"},"Provide a loading screen while connecting to a remote application complex"),(0,i.kt)("li",{parentName:"ol"},"Provide busy screen while operations are pending")),(0,i.kt)("p",null,"Also includes some basic tasks that an app must do, like login, persisting visual config like table column widths."),(0,i.kt)("p",null,"We do not need to worry about setting ip addresses, authenticating to a database, etc.\nWe might need to be able to authenticate to a private ipfs network ?\nMay wish to spec resource limits on the local machine - cpu, ram, disk"))}u.isMDXComponent=!0}}]);