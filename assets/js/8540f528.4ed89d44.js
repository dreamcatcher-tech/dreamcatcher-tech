"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[6943],{12604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var r=n(87462),o=(n(67294),n(3905));n(61839);const i={},c=void 0,a={unversionedId:"dictionary/Architecture_Dictionary/Functions/Governance",id:"dictionary/Architecture_Dictionary/Functions/Governance",title:"Governance",description:"Governance handles the voting rights and decision making process around accepting or rejecting Pull Requests that are submitted to it. Every Project must include Governance.",source:"@site/interblock/dictionary/Architecture_Dictionary/Functions/Governance.md",sourceDirName:"dictionary/Architecture_Dictionary/Functions",slug:"/dictionary/Architecture_Dictionary/Functions/Governance",permalink:"/interblock/dictionary/Architecture_Dictionary/Functions/Governance",draft:!1,editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/interblock/dictionary/Architecture_Dictionary/Functions/Governance.md",tags:[],version:"current",frontMatter:{},sidebar:"interblock",previous:{title:"Update-Downvote",permalink:"/interblock/dictionary/Architecture_Dictionary/Events/Update-Downvote"},next:{title:"arbiterAlgo",permalink:"/interblock/dictionary/Architecture_Dictionary/Governance Algos/arbiterAlgo"}},s={},h=[],d={toc:h};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Governance handles the voting rights and decision making process around accepting or rejecting Pull Requests that are submitted to it. Every Project must include Governance."),(0,o.kt)("p",null,"Governance is passed a single question: should this Pull Request be accepted or rejected?. When passed a Pull Request, the Governance applies that question to the Pull Request and, if Yes, applies the Pull Request without further interaction."),(0,o.kt)("p",null,"Governance consists of one or more governanceAlgos. These can be combined in a combinerAlgo. Governance (that part of the voting rights) may also be devolved to other Coordinator Objects, with the result being passed back and combined for a final decision."),(0,o.kt)("p",null,"Contracts which have been signed by a Coordinator Object may override the authority of the Governance of that Coordinator Object. E.g. when selling rights (Attribution) to a Trace, the Trace itself cannot, through its Governance, change it\u2019s only Attribution to remove those rights. Such \u2018locked\u2019 objects within a Coordinator are always referred to the Coordinator that caused that lock to be in operation."),(0,o.kt)("p",null,"A history of the decisions reached by Governance can be recovered from the block history of the Project."))}u.isMDXComponent=!0}}]);