"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[9842],{6508:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var i=a(3117),n=(a(7294),a(3905));const r={published:!1,title:"Side Effect IO",description:""},o=void 0,s={permalink:"/blog/2020/10/26/side-effects",editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/blog/2020-10-26-side-effects.md",source:"@site/blog/2020-10-26-side-effects.md",title:"Side Effect IO",description:"",date:"2020-10-26T00:00:00.000Z",formattedDate:"October 26, 2020",tags:[],readingTime:2.01,hasTruncateMarker:!1,authors:[],frontMatter:{published:!1,title:"Side Effect IO",description:""},prevItem:{title:"Ambient Attribution",permalink:"/blog/2020/12/20/ambient-attribution"},nextItem:{title:"Zero Liability Companies",permalink:"/blog/2020/09/24/zero-liability-co"}},l={authorsImageUrls:[]},h=[],c={toc:h};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},'"Mixing the pure with the impure, without making everything impure"')),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(6435).Z,width:"4856",height:"3380"})),(0,n.kt)("p",null,"The work I have been doing lately could largely be described as side effect management. This is the means by which to introduce external data into the blockchain based system, in a way that does not corrupt the key blockchain property of reproducibility. That is to say, being able to rerun blocks thru different computers and verify that the same answer came out. Side effects are any external event - something that cannot be reproduced - a simple example is receiving an email. The converse is required too - being able to use the pure, clean, secure blockchain based calculations to trigger unreproducible external events. A simple example of this is sending an email."),(0,n.kt)("p",null,"So the work is about making something unrepeatable become something repeatable in a clean way, and to a lesser extent making something repeatable trigger unrepeatable events."),(0,n.kt)("p",null,"However during the work I was doing to send internet packets between Amazon and the browser the amount of code I was writing that was not blockchain related started to increase. The problem with this is that it is not reusing the code that is used for the blockchains, and so requires extra work to build and maintain, while losing the very helpful traceability properties that blockchain based calculations afford. Traceability becomes especially useful when the software is executing on remote servers."),(0,n.kt)("p",null,"This was the trigger for the work, but it is work that would have been required later anyway."),(0,n.kt)("p",null,"I have managed to get the underlying system of side effects working in prototype form, and starting from this morning I will be applying that to the internet transport ability. I am pleased with how the system is performing, and it meets my goals of being clean and simple and easy to fault find. An example of why the fault finding aspect is useful is that if you call me and say that at roughly 10am something weird happened in the app and you can't seem to make it happen again, we would be able to see the actual interactions the application made and very quickly be able to reproduce the problem, making fixing it much faster, and giving you reassurance that we did actually know what is going on, rather than having to ask you to keep an eye out for it happening again because we can't notice anything amiss."))}d.isMDXComponent=!0},6435:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/mixing-droplet-cc99a7cf93ede713e25b9f9bd1091783.jpg"}}]);