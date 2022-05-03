(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[8035],{20506:function(e,t,a){"use strict";a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var o=a(83117),n=a(80102),r=(a(67294),a(3905)),s=a(93456),l=["components"],i={},d="I11 Request-Idea",p={unversionedId:"Ideas/I11",id:"Ideas/I11",title:"I11 Request-Idea",description:"Version",source:"@site/nfas/Ideas/I11.md",sourceDirName:"Ideas",slug:"/Ideas/I11",permalink:"/nfas/Ideas/I11",editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/nfas/Ideas/I11.md",tags:[],version:"current",frontMatter:{},sidebar:"nfas",previous:{title:"I07 Web Liquidity Pooling",permalink:"/nfas/Ideas/I07"},next:{title:"I12 WebDOS framework",permalink:"/nfas/Ideas/I12"}},m={},u=[{value:"Version",id:"version",level:2},{value:"Target",id:"target",level:2},{value:"Inherits",id:"inherits",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Concept",id:"concept",level:2},{value:"Actors and Actions",id:"actors-and-actions",level:2},{value:"Implementation Steps",id:"implementation-steps",level:2},{value:"Version",id:"version-1",level:2},{value:"Target",id:"target-1",level:2},{value:"Inherits",id:"inherits-1",level:2},{value:"Dependencies",id:"dependencies-1",level:2},{value:"Outputs",id:"outputs-1",level:2},{value:"Concept",id:"concept-1",level:2},{value:"Actors and Actions",id:"actors-and-actions-1",level:2},{value:"Implementation Steps",id:"implementation-steps-1",level:2}],h={toc:u};function c(e){var t=e.components,a=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"i11-request-idea"},"I11 Request-Idea"),(0,r.kt)("h2",{id:"version"},"Version"),(0,r.kt)("p",null,"2022-05-02 v0.1 - Pre-pool"),(0,r.kt)("h2",{id:"target"},"Target"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/nfas/Requests/R10"},"R10 Request-Idea")),(0,r.kt)("h2",{id:"inherits"},"Inherits"),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/nfas/Requests/R10"},"R10 Request-Idea")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/nfas/Ideas/I11"},"I11 Request-Idea")),(0,r.kt)("li",{parentName:"ol"},"[Request Template]"),(0,r.kt)("li",{parentName:"ol"},"[Idea Template]"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md")),(0,r.kt)("li",{parentName:"ol"},"[Pool Process]")),(0,r.kt)("h2",{id:"concept"},"Concept"),(0,r.kt)("p",null,"We want to encourage Requests and Ideas to be written down, no matter how vague, as early as possible, then provide a route to move from that vagueness through to having them admitted to a Pool, executed and produce Outputs. To do this we'd set up areas in git where md files flow through the following process:"),(0,r.kt)(s.Mermaid,{config:{},chart:"\nstateDiagram\n    direction LR\n\n    [*] --\x3e Dust\n    Dust --\x3e poolEntryQA : submit\n    poolEntryQA --\x3e Dust : fail\n    poolEntryQA --\x3e inPool : pass\n    state inPool {\n      direction LR\n    [*] --\x3e Fundable\n      inCompletionQA --\x3e Escrowed : fail\n      Escrowed --\x3e inCompletionQA : submit\n      Fundable --\x3e Escrowed : Escrow lock\n      Escrowed --\x3e Fundable : Escrow release\n      Escrowed --\x3e Escrowed : Funding - Work\n    inCompletionQA --\x3e Completed : Pass\n    }\n",mdxType:"Mermaid"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Dust: Any Request or Idea that has not been accepted by Pool QA for entry. In this state they can be as rough or as complete as you want - no-one's checking. This is the entry area into the process. NFTs images will be generated by the Worker, one per Request/Idea."),(0,r.kt)("li",{parentName:"ol"},"poolEntryQA: Being considered by the QA appointed by this pool as to whether it meets the formating/content standards that that pool has stipulated. NFT images are required to pass QA and must be of suitable content and unique.  For an Idea to pass poolEntryQA it must reference a Request, and QA must be satisfied that it is coherent with that Request.  That is, it must address at least one of the Request's Tactical Intents, and must not be incompatible with any of the Musts/Must Nots in all of the Tactical Intents in that Request.  Moreover and more broadly, it must further the Request's stated Strategic Intent.  "),(0,r.kt)("li",{parentName:"ol"},"Fundable: The Request/Idea now has met the standards required by the pool, is available for Workers or Funders to contribute to in a permissionless manner but not under escrow. A running total of the time/payments spent to date are recorded."),(0,r.kt)("li",{parentName:"ol"},"Escrowed: A contract has been negotiated between a Funder and a Worker for delivery of all or parts of the Outputs stated in the Idea, with funds put in escrow. A running total of the time/payments spent to date are recorded, and for any escrow payments made, the fact of that payment is also recorded."),(0,r.kt)("li",{parentName:"ol"},"inCompletionQA: The Output Asset(s) have been worked on to the extent that they can be submitted to QA to check whether the work in the linked Idea, which references a Request, has been completed. I.e. did it do what it said it would do?  To be accepted at this stage, QA must satisfy themselves that the Outputs->Idea->Request bottom up stack is coherent.  That is, the Output meets some or all of the requirements of the Idea (it can be fractional), and that by doing so does not violate any of the Musts/Must Nots in the Request that the Idea targets.  Note that this submission of Outputs does not need to reference the original Idea or Request, and may reference more than one Idea or Requests, but in all cases the Ideas and Requests referenced must be in the Pool."),(0,r.kt)("li",{parentName:"ol"},"Output: the Assets produced from the work are now available for use, having passed QA. These Outputs come with the context of one or more Idea which it meets the requirements of, and that for each referenced Idea, the Output does not violate any of the Requests which those Ideas are attempting to fulfil.  Note that for an Output to have reached this state there must be at least one Output->Idea->Request stacks.")),(0,r.kt)("p",null,"When funds are escrowed they come with a lock, which allows QA to release them based on the contents of the contract, which references the Idea or part of the Idea, and whether they judge that contract to have been completed. That lock can time out, or the worker can declare failure, or both parties agree not to proceed, at which point escrow is released back to the funder and the Idea moves back to Fundable state in the pool if there are no further escrows in place."),(0,r.kt)("p",null,"A record of these states would be maintained in a file named ",(0,r.kt)("a",{parentName:"p",href:"../../pool"},"Pool.md")," which contains a markdown grid of Requests and the Ideas in each state. For each row we track a tally of the USD funds and the time expenditure used against each one. This information is moved, during state changes, not duplicated."),(0,r.kt)("p",null,"To implement the states and state transitions, we'd use two different folders in git, and a pool dashboard (",(0,r.kt)("a",{parentName:"p",href:"../../pool"},"Pool.md"),")"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Requests and Ideas in 'Dust' state are in the ",(0,r.kt)("a",{parentName:"li",href:"../../nfas"},"nfas")," folder. They are not listed in ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md")),(0,r.kt)("li",{parentName:"ol"},"Requests and Ideas in 'Fundable' state are in the ",(0,r.kt)("a",{parentName:"li",href:"../../pool/"},"pool")," folder, and linked from the Fundable grid in ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md")),(0,r.kt)("li",{parentName:"ol"},"Dust -> Fundable state change involves copying the file from one folder to the next, not moving it. This way we replicate a fork."),(0,r.kt)("li",{parentName:"ol"},"Escrowed -> Completed and Open -> Completed state changes moves the link and time/cost data to the Completed grid in ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md")," but does not involve copying the file itself.")),(0,r.kt)("p",null,"We'd keep the templates for Requests and Ideas in the ",(0,r.kt)("a",{parentName:"p",href:"../../pool/"},"pool")," folder, and link to them from ",(0,r.kt)("a",{parentName:"p",href:"../../pool"},"Pool.md"),". We'd publish the Request/Idea process at the bottom of ",(0,r.kt)("a",{parentName:"p",href:"../../pool"},"Pool.md"),"."),(0,r.kt)("p",null,"For implementing QA we will use a combination of youtube live streamed calls and pull requests between msm & inv. Feedback for failed QA attempts is therefore in recorded form rather than documents. Successful QA attempts are documented by an accepted pull request."),(0,r.kt)("p",null,"We do not have an attribution algo for the dispersal of any revenue that comes, should it ever come. However, we do have two units that we can record now as to the contribution. The two units are pomos and dollars. The pomos and dollars are logged against the Asset that was being worked on. We invite a Request in due course to produce a starter Attribution Algo to generate the algorithmic cap table."),(0,r.kt)("h2",{id:"actors-and-actions"},"Actors and Actions"),(0,r.kt)("p",null,"Actors are non-exclusive; a single user can perform multiple roles."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"QA",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Reviews Requests and Ideas against the formats and issues pass/fail."),(0,r.kt)("li",{parentName:"ol"},"Records feedback to workers through youtube/voice recording."))),(0,r.kt)("li",{parentName:"ol"},"Workers",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Write Requests/Ideas and implements changes from feedback."),(0,r.kt)("li",{parentName:"ol"},"Submit PRs for state changes"),(0,r.kt)("li",{parentName:"ol"},"Produce the Outputs"),(0,r.kt)("li",{parentName:"ol"},"Log work time"),(0,r.kt)("li",{parentName:"ol"},"Generates NFT images for their Requests/Ideas."),(0,r.kt)("li",{parentName:"ol"},"Negotiate and agree Contracts with Funders."))),(0,r.kt)("li",{parentName:"ol"},"Funders",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Pool money against a Request, or an Idea in the Pool."),(0,r.kt)("li",{parentName:"ol"},"Negotiate and agree Contracts with Workers."))),(0,r.kt)("li",{parentName:"ol"},"Moderator",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Updates ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md"),"."),(0,r.kt)("li",{parentName:"ol"},"Ensures new Requests/Ideas appear on the website."),(0,r.kt)("li",{parentName:"ol"},"Issues and removes the right of Workers and Funders to interact with the Pool.")))),(0,r.kt)("h1",{id:"integration-tests"},"Integration Tests"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Request submission:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Start State: Request not written or submitted."),(0,r.kt)("li",{parentName:"ol"},"Worker: Write a Request using the ","[Request Template]"," and record it within ",(0,r.kt)("a",{parentName:"li",href:"../Requests"},"nfas/Requests"),"."),(0,r.kt)("li",{parentName:"ol"},"Worker: Create NFT images for the Request."),(0,r.kt)("li",{parentName:"ol"},"Worker: Submit the Request to poolEntryQA."),(0,r.kt)("li",{parentName:"ol"},"QA: Consider request and record feedback with failure points."),(0,r.kt)("li",{parentName:"ol"},"Worker: Update Request based on feedback"),(0,r.kt)("li",{parentName:"ol"},"Worker: Resubmit to poolEntryQA"),(0,r.kt)("li",{parentName:"ol"},"QA: Accept request when it passes the template requirements in ","[Request Template]"),(0,r.kt)("li",{parentName:"ol"},"Worker: Submit QA Acceptance, Request location, USD and Pomos used to date, to Moderator."),(0,r.kt)("li",{parentName:"ol"},"Moderator: Copy Request to ",(0,r.kt)("a",{parentName:"li",href:"../../pool/Requests"},"pool/Requests")),(0,r.kt)("li",{parentName:"ol"},"Moderator: Record acceptance by updating ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md"),"."),(0,r.kt)("li",{parentName:"ol"},"End state:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Dust Request in ",(0,r.kt)("a",{parentName:"li",href:"../Requests"},"nfas/Requests")),(0,r.kt)("li",{parentName:"ol"},"Pool Request in ",(0,r.kt)("a",{parentName:"li",href:"../../pool/Requests"},"pool/Requests")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md")," updated with Request under 'Fundable'."))))),(0,r.kt)("li",{parentName:"ol"},"Idea submission:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Start State: Idea not written or submitted, Request in Pool."),(0,r.kt)("li",{parentName:"ol"},"Worker: Write an Idea using the ","[Idea Template]",", targetted at the Request in Test 1, and record it within ",(0,r.kt)("a",{parentName:"li",href:"../../nfas/Ideas"},"nfas/Ideas"),"."),(0,r.kt)("li",{parentName:"ol"},"Worker: Create NFT images for the Idea."),(0,r.kt)("li",{parentName:"ol"},"Worker: Submit the Idea to poolEntryQA."),(0,r.kt)("li",{parentName:"ol"},"QA: Consider Idea and its adherence to the Request, and record feedback with failure points."),(0,r.kt)("li",{parentName:"ol"},"Worker: Update Idea based on feedback"),(0,r.kt)("li",{parentName:"ol"},"Worker: Resubmit to poolEntryQA"),(0,r.kt)("li",{parentName:"ol"},"QA: Accept request when it passes the template requirements in ","[Idea Template]"),(0,r.kt)("li",{parentName:"ol"},"Worker: Submit QA Acceptance, Idea location, USD and Pomos used to date, to Moderator."),(0,r.kt)("li",{parentName:"ol"},"Moderator: Copy Request to ","[pool/Ideas]"),(0,r.kt)("li",{parentName:"ol"},"Moderator: Record acceptance by updating ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md"),"."),(0,r.kt)("li",{parentName:"ol"},"End state:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Dust Idea in ",(0,r.kt)("a",{parentName:"li",href:"../../nfas/Ideas"},"nfas/Ideas")),(0,r.kt)("li",{parentName:"ol"},"Pool Idea in ","[pool/Ideas]"),(0,r.kt)("li",{parentName:"ol"},"Fundable table in ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md")," updated with Idea and any previous time/USD."))))),(0,r.kt)("li",{parentName:"ol"},"Fund the Idea:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Start State: Request, with Idea that targets it, both in Pool 'Fundable.'"),(0,r.kt)("li",{parentName:"ol"},"Funder, Worker: Negotiate simple terms, agree alterations, funding level and timeout for working on the Idea. Once agreed, record details in the Idea."),(0,r.kt)("li",{parentName:"ol"},"Moderator: Move Idea link and any previous USD/time already recorded from Fundable to Escrowed in ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md")),(0,r.kt)("li",{parentName:"ol"},"End state: Idea moved to Escrowed table in ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md"),", including previous time/USD."))),(0,r.kt)("li",{parentName:"ol"},"Work on Idea Outputs while Escrowed",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Start State: Idea in Escrowed."),(0,r.kt)("li",{parentName:"ol"},"Worker: Produce and update Outputs, while recording effort and the impact of that effort."),(0,r.kt)("li",{parentName:"ol"},"End State: Idea in Escrowed, Outputs complete to the satisfaction of the Worker, time logged."))),(0,r.kt)("li",{parentName:"ol"},"Complete an Idea",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Start State: Idea in Escrowed, Outputs complete to the satisfaction of the Worker, time logged."),(0,r.kt)("li",{parentName:"ol"},"Worker: Submit to inCompletionQA"),(0,r.kt)("li",{parentName:"ol"},"QA: Consider request. Check that Outputs meet the details in Idea."),(0,r.kt)("li",{parentName:"ol"},"Worker: Update Output based on feedback"),(0,r.kt)("li",{parentName:"ol"},"Worker: Resubmit to inCompletionQA"),(0,r.kt)("li",{parentName:"ol"},"QA: Consider request, record acceptance by update of ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md"),"."),(0,r.kt)("li",{parentName:"ol"},"End Change: Escrowed -> Completed table updated in ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md"),". Record on QA acceptance recorded in Idea."))),(0,r.kt)("li",{parentName:"ol"},"Self improvement",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Start State: ","[Request Template]",", ","[Idea Template]",", ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md"),", ","[Pool Process]"," exist. Notes from one execution of the process available."),(0,r.kt)("li",{parentName:"ol"},"Worker: Submit an Idea for the improvement to be made (targetted at ",(0,r.kt)("a",{parentName:"li",href:"/nfas/Requests/R10"},"R10 Request-Idea")),(0,r.kt)("li",{parentName:"ol"},"Worker: Run idea through to completed using current ","[Pool Process]"),(0,r.kt)("li",{parentName:"ol"},"End State: Updated ","[Pool Process]",", ","[Request Template]",", ","[Idea Template]",", ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md")," dependant on improvements. Updated Assets have passed InCompletionQA.")))),(0,r.kt)("p",null,"Done is when the process has passed all integration tests, ",(0,r.kt)("a",{parentName:"p",href:"../../docs"},"The User Dictionary")," has been updated, the complexity count (number of Dictionary concepts used) is known and one cycle of self-improvement has been proven."),(0,r.kt)("h2",{id:"implementation-steps"},"Implementation Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Draft the initial version of the process in ","[Pool Process]","."),(0,r.kt)("li",{parentName:"ol"},"Draft compatible Templates at ","[Request Template]",", ","[Idea Template]"),(0,r.kt)("li",{parentName:"ol"},"Set the data in ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md")," for any existing Requests/Ideas."),(0,r.kt)("li",{parentName:"ol"},"Run an initial trivial Test Request/Idea pair through the process to Completed, which involves generating Outputs and two state changes with QA at each. Take notes on where the process is incomplete or misfires."),(0,r.kt)("li",{parentName:"ol"},"With the notes on the action of the process, submit an Idea and a Request for improvements to the Pool. Run the improvements Request/Idea pair through the process to improve the process. Repeat until no major changes to the core process are proposed. (Changes to the wider, non-simple case are recorded as Dust Requests for future work.)"),(0,r.kt)("li",{parentName:"ol"},"Record the complexity count for the current ",(0,r.kt)("a",{parentName:"li",href:"../../docs"},"The User Dictionary"),", update with all terms in this process, then recalculate the complexity count. Record results in the ","[Pool Process]","."),(0,r.kt)("li",{parentName:"ol"},"Create Dust for all existing App Concepts, then run each, one by one, through to Escrowed.")),(0,r.kt)("p",null,"[Request Template]",": (../../pool/Request Template.md)\n","[Idea Template]",": (/pool/Idea Template.md)"),(0,r.kt)("p",null,"[Pool Process]",": (../../pool/Pool Process.md)\n",(0,r.kt)("a",{parentName:"p",href:"../../nfas"},"nfas"),": ../../nfas# I11 Request-Idea"),(0,r.kt)("h2",{id:"version-1"},"Version"),(0,r.kt)("p",null,"2022-05-02 v0.1 - Pre-pool"),(0,r.kt)("h2",{id:"target-1"},"Target"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/nfas/Requests/R10"},"R10 Request-Idea")),(0,r.kt)("h2",{id:"inherits-1"},"Inherits"),(0,r.kt)("h2",{id:"dependencies-1"},"Dependencies"),(0,r.kt)("h2",{id:"outputs-1"},"Outputs"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/nfas/Requests/R10"},"R10 Request-Idea")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/nfas/Ideas/I11"},"I11 Request-Idea")),(0,r.kt)("li",{parentName:"ol"},"[Request Template]","(../../pool/Request Template.md)"),(0,r.kt)("li",{parentName:"ol"},"[Idea Template]","(../../pool/Idea Template.md)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md")),(0,r.kt)("li",{parentName:"ol"},"[Pool Process]","(../../pool/Pool Process.md)")),(0,r.kt)("h2",{id:"concept-1"},"Concept"),(0,r.kt)("p",null,"We want to encourage Requests and Ideas to be written down, no matter how vague, as early as possible, then provide a route to move from that vagueness through to having them admitted to a Pool, executed and produce Outputs. To do this we'd set up areas in git where md files flow through the following process:"),(0,r.kt)(s.Mermaid,{chart:"\nstateDiagram\n    direction LR\n\n    [*] --\x3e Dust\n    Dust --\x3e poolEntryQA : submit\n    poolEntryQA --\x3e Dust : fail\n    poolEntryQA --\x3e inPool : pass\n    state inPool {\n      direction LR\n    [*] --\x3e Fundable\n      inCompletionQA --\x3e Escrowed : fail\n      Escrowed --\x3e inCompletionQA : submit\n      Fundable --\x3e Escrowed : Escrow lock\n      Escrowed --\x3e Fundable : Escrow release\n      Escrowed --\x3e Escrowed : Funding - Work\n    inCompletionQA --\x3e Completed : Pass\n    }\n",mdxType:"Mermaid"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Dust: Any Request or Idea that has not been accepted by Pool QA for entry. In this state they can be as rough or as complete as you want - no-one's checking. This is the entry area into the process. NFTs images will be generated by the Worker, one per Request/Idea."),(0,r.kt)("li",{parentName:"ol"},"poolEntryQA: Being considered by the QA appointed by this pool as to whether it meets the formating/content standards that that pool has stipulated. NFT images are required to pass QA and must be of suitable content and unique.  For an Idea to pass poolEntryQA it must reference a Request, and QA must be satisfied that it is coherent with that Request.  That is, it must address at least one of the Request's Tactical Intents, and must not be incompatible with any of the Musts/Must Nots in all of the Tactical Intents in that Request.  Moreover and more broadly, it must further the Request's stated Strategic Intent.  "),(0,r.kt)("li",{parentName:"ol"},"Fundable: The Request/Idea now has met the standards required by the pool, is available for Workers or Funders to contribute to in a permissionless manner but not under escrow. A running total of the time/payments spent to date are recorded."),(0,r.kt)("li",{parentName:"ol"},"Escrowed: A contract has been negotiated between a Funder and a Worker for delivery of all or parts of the Outputs stated in the Idea, with funds put in escrow. A running total of the time/payments spent to date are recorded, and for any escrow payments made, the fact of that payment is also recorded."),(0,r.kt)("li",{parentName:"ol"},"inCompletionQA: The Output Asset(s) have been worked on to the extent that they can be submitted to QA to check whether the work in the linked Idea, which references a Request, has been completed. I.e. did it do what it said it would do?  To be accepted at this stage, QA must satisfy themselves that the Outputs->Idea->Request bottom up stack is coherent.  That is, the Output meets some or all of the requirements of the Idea (it can be fractional), and that by doing so does not violate any of the Musts/Must Nots in the Request that the Idea targets.  Note that this submission of Outputs does not need to reference the original Idea or Request, and may reference more than one Idea or Requests, but in all cases the Ideas and Requests referenced must be in the Pool."),(0,r.kt)("li",{parentName:"ol"},"Output: the Assets produced from the work are now available for use, having passed QA. These Outputs come with the context of one or more Idea which it meets the requirements of, and that for each referenced Idea, the Output does not violate any of the Requests which those Ideas are attempting to fulfil.  Note that for an Output to have reached this state there must be at least one Output->Idea->Request stacks.")),(0,r.kt)("p",null,"When funds are escrowed they come with a lock, which allows QA to release them based on the contents of the contract, which references the Idea or part of the Idea, and whether they judge that contract to have been completed. That lock can time out, or the worker can declare failure, or both parties agree not to proceed, at which point escrow is released back to the funder and the Idea moves back to Fundable state in the pool if there are no further escrows in place."),(0,r.kt)("p",null,"A record of these states would be maintained in a file named ",(0,r.kt)("a",{parentName:"p",href:"../../pool"},"Pool.md")," which contains a markdown grid of Requests and the Ideas in each state. For each row we track a tally of the USD funds and the time expenditure used against each one. This information is moved, during state changes, not duplicated."),(0,r.kt)("p",null,"To implement the states and state transitions, we'd use two different folders in git, and a pool dashboard (",(0,r.kt)("a",{parentName:"p",href:"../../pool"},"Pool.md"),")"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Requests and Ideas in 'Dust' state are in the ",(0,r.kt)("a",{parentName:"li",href:"../../nfas"},"nfas")," folder. They are not listed in ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md")),(0,r.kt)("li",{parentName:"ol"},"Requests and Ideas in 'Fundable' state are in the ",(0,r.kt)("a",{parentName:"li",href:"../../pool/"},"pool")," folder, and linked from the Fundable grid in ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md")),(0,r.kt)("li",{parentName:"ol"},"Dust -> Fundable state change involves copying the file from one folder to the next, not moving it. This way we replicate a fork."),(0,r.kt)("li",{parentName:"ol"},"Escrowed -> Completed and Open -> Completed state changes moves the link and time/cost data to the Completed grid in ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md")," but does not involve copying the file itself.")),(0,r.kt)("p",null,"We'd keep the templates for Requests and Ideas in the ",(0,r.kt)("a",{parentName:"p",href:"../../pool/"},"pool")," folder, and link to them from ",(0,r.kt)("a",{parentName:"p",href:"../../pool"},"Pool.md"),". We'd publish the Request/Idea process at the bottom of ",(0,r.kt)("a",{parentName:"p",href:"../../pool"},"Pool.md"),"."),(0,r.kt)("p",null,"For implementing QA we will use a combination of youtube live streamed calls and pull requests between msm & inv. Feedback for failed QA attempts is therefore in recorded form rather than documents. Successful QA attempts are documented by an accepted pull request."),(0,r.kt)("p",null,"We do not have an attribution algo for the dispersal of any revenue that comes, should it ever come. However, we do have two units that we can record now as to the contribution. The two units are pomos and dollars. The pomos and dollars are logged against the Asset that was being worked on. We invite a Request in due course to produce a starter Attribution Algo to generate the algorithmic cap table."),(0,r.kt)("h2",{id:"actors-and-actions-1"},"Actors and Actions"),(0,r.kt)("p",null,"Actors are non-exclusive; a single user can perform multiple roles."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"QA",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Reviews Requests and Ideas against the formats and issues pass/fail."),(0,r.kt)("li",{parentName:"ol"},"Records feedback to workers through youtube/voice recording."))),(0,r.kt)("li",{parentName:"ol"},"Workers",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Write Requests/Ideas and implements changes from feedback."),(0,r.kt)("li",{parentName:"ol"},"Submit PRs for state changes"),(0,r.kt)("li",{parentName:"ol"},"Produce the Outputs"),(0,r.kt)("li",{parentName:"ol"},"Log work time"),(0,r.kt)("li",{parentName:"ol"},"Generates NFT images for their Requests/Ideas."),(0,r.kt)("li",{parentName:"ol"},"Negotiate and agree Contracts with Funders."))),(0,r.kt)("li",{parentName:"ol"},"Funders",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Pool money against a Request, or an Idea in the Pool."),(0,r.kt)("li",{parentName:"ol"},"Negotiate and agree Contracts with Workers."))),(0,r.kt)("li",{parentName:"ol"},"Moderator",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Updates ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md"),"."),(0,r.kt)("li",{parentName:"ol"},"Ensures new Requests/Ideas appear on the website."),(0,r.kt)("li",{parentName:"ol"},"Issues and removes the right of Workers and Funders to interact with the Pool.")))),(0,r.kt)("h1",{id:"integration-tests-1"},"Integration Tests"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Request submission:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Start State: Request not written or submitted."),(0,r.kt)("li",{parentName:"ol"},"Worker: Write a Request using the ","[Request Template]","(../../pool/Request Template.md) and record it within ",(0,r.kt)("a",{parentName:"li",href:"../Requests"},"nfas/Requests"),"."),(0,r.kt)("li",{parentName:"ol"},"Worker: Create NFT images for the Request."),(0,r.kt)("li",{parentName:"ol"},"Worker: Submit the Request to poolEntryQA."),(0,r.kt)("li",{parentName:"ol"},"QA: Consider request and record feedback with failure points."),(0,r.kt)("li",{parentName:"ol"},"Worker: Update Request based on feedback"),(0,r.kt)("li",{parentName:"ol"},"Worker: Resubmit to poolEntryQA"),(0,r.kt)("li",{parentName:"ol"},"QA: Accept request when it passes the template requirements in ","[Request Template]","(../../pool/Request Template.md)"),(0,r.kt)("li",{parentName:"ol"},"Worker: Submit QA Acceptance, Request location, USD and Pomos used to date, to Moderator."),(0,r.kt)("li",{parentName:"ol"},"Moderator: Copy Request to ",(0,r.kt)("a",{parentName:"li",href:"../../pool/Requests"},"pool/Requests")),(0,r.kt)("li",{parentName:"ol"},"Moderator: Record acceptance by updating ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md"),"."),(0,r.kt)("li",{parentName:"ol"},"End state:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Dust Request in ",(0,r.kt)("a",{parentName:"li",href:"../Requests"},"nfas/Requests")),(0,r.kt)("li",{parentName:"ol"},"Pool Request in ",(0,r.kt)("a",{parentName:"li",href:"../../pool/Requests"},"pool/Requests")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md")," updated with Request under 'Fundable'."))))),(0,r.kt)("li",{parentName:"ol"},"Idea submission:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Start State: Idea not written or submitted, Request in Pool."),(0,r.kt)("li",{parentName:"ol"},"Worker: Write an Idea using the ","[Idea Template]","(/pool/Idea Template.md), targetted at the Request in Test 1, and record it within ",(0,r.kt)("a",{parentName:"li",href:"../../nfas/Ideas"},"nfas/Ideas"),"."),(0,r.kt)("li",{parentName:"ol"},"Worker: Create NFT images for the Idea."),(0,r.kt)("li",{parentName:"ol"},"Worker: Submit the Idea to poolEntryQA."),(0,r.kt)("li",{parentName:"ol"},"QA: Consider Idea and its adherence to the Request, and record feedback with failure points."),(0,r.kt)("li",{parentName:"ol"},"Worker: Update Idea based on feedback"),(0,r.kt)("li",{parentName:"ol"},"Worker: Resubmit to poolEntryQA"),(0,r.kt)("li",{parentName:"ol"},"QA: Accept request when it passes the template requirements in ","[Idea Template]","(/pool/Idea Template.md)"),(0,r.kt)("li",{parentName:"ol"},"Worker: Submit QA Acceptance, Idea location, USD and Pomos used to date, to Moderator."),(0,r.kt)("li",{parentName:"ol"},"Moderator: Copy Request to ","[pool/Ideas]"),(0,r.kt)("li",{parentName:"ol"},"Moderator: Record acceptance by updating ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md"),"."),(0,r.kt)("li",{parentName:"ol"},"End state:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Dust Idea in ",(0,r.kt)("a",{parentName:"li",href:"../../nfas/Ideas"},"nfas/Ideas")),(0,r.kt)("li",{parentName:"ol"},"Pool Idea in ","[pool/Ideas]"),(0,r.kt)("li",{parentName:"ol"},"Fundable table in ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md")," updated with Idea and any previous time/USD."))))),(0,r.kt)("li",{parentName:"ol"},"Fund the Idea:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Start State: Request, with Idea that targets it, both in Pool 'Fundable.'"),(0,r.kt)("li",{parentName:"ol"},"Funder, Worker: Negotiate simple terms, agree alterations, funding level and timeout for working on the Idea. Once agreed, record details in the Idea."),(0,r.kt)("li",{parentName:"ol"},"Moderator: Move Idea link and any previous USD/time already recorded from Fundable to Escrowed in ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md")),(0,r.kt)("li",{parentName:"ol"},"End state: Idea moved to Escrowed table in ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md"),", including previous time/USD."))),(0,r.kt)("li",{parentName:"ol"},"Work on Idea Outputs while Escrowed",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Start State: Idea in Escrowed."),(0,r.kt)("li",{parentName:"ol"},"Worker: Produce and update Outputs, while recording effort and the impact of that effort."),(0,r.kt)("li",{parentName:"ol"},"End State: Idea in Escrowed, Outputs complete to the satisfaction of the Worker, time logged."))),(0,r.kt)("li",{parentName:"ol"},"Complete an Idea",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Start State: Idea in Escrowed, Outputs complete to the satisfaction of the Worker, time logged."),(0,r.kt)("li",{parentName:"ol"},"Worker: Submit to inCompletionQA"),(0,r.kt)("li",{parentName:"ol"},"QA: Consider request. Check that Outputs meet the details in Idea."),(0,r.kt)("li",{parentName:"ol"},"Worker: Update Output based on feedback"),(0,r.kt)("li",{parentName:"ol"},"Worker: Resubmit to inCompletionQA"),(0,r.kt)("li",{parentName:"ol"},"QA: Consider request, record acceptance by update of ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md"),"."),(0,r.kt)("li",{parentName:"ol"},"End Change: Escrowed -> Completed table updated in ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md"),". Record on QA acceptance recorded in Idea."))),(0,r.kt)("li",{parentName:"ol"},"Self improvement",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Start State: ","[Request Template]","(../../pool/Request Template.md), ","[Idea Template]","(/pool/Idea Template.md), ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md"),", ","[Pool Process]","(../../pool/Pool Process.md) exist. Notes from one execution of the process available."),(0,r.kt)("li",{parentName:"ol"},"Worker: Submit an Idea for the improvement to be made (targetted at ",(0,r.kt)("a",{parentName:"li",href:"/nfas/Requests/R10"},"R10 Request-Idea")),(0,r.kt)("li",{parentName:"ol"},"Worker: Run idea through to completed using current ","[Pool Process]","(../../pool/Pool Process.md)"),(0,r.kt)("li",{parentName:"ol"},"End State: Updated ","[Pool Process]","(../../pool/Pool Process.md), ","[Request Template]","(../../pool/Request Template.md), ","[Idea Template]","(/pool/Idea Template.md), ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md")," dependant on improvements. Updated Assets have passed InCompletionQA.")))),(0,r.kt)("p",null,"Done is when the process has passed all integration tests, ",(0,r.kt)("a",{parentName:"p",href:"../../docs"},"The User Dictionary")," has been updated, the complexity count (number of Dictionary concepts used) is known and one cycle of self-improvement has been proven."),(0,r.kt)("h2",{id:"implementation-steps-1"},"Implementation Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Draft the initial version of the process in ","[Pool Process]","(../../pool/Pool Process.md)."),(0,r.kt)("li",{parentName:"ol"},"Draft compatible Templates at ","[Request Template]","(../../pool/Request Template.md), ","[Idea Template]","(/pool/Idea Template.md)"),(0,r.kt)("li",{parentName:"ol"},"Set the data in ",(0,r.kt)("a",{parentName:"li",href:"../../pool"},"Pool.md")," for any existing Requests/Ideas."),(0,r.kt)("li",{parentName:"ol"},"Run an initial trivial Test Request/Idea pair through the process to Completed, which involves generating Outputs and two state changes with QA at each. Take notes on where the process is incomplete or misfires."),(0,r.kt)("li",{parentName:"ol"},"With the notes on the action of the process, submit an Idea and a Request for improvements to the Pool. Run the improvements Request/Idea pair through the process to improve the process. Repeat until no major changes to the core process are proposed. (Changes to the wider, non-simple case are recorded as Dust Requests for future work.)"),(0,r.kt)("li",{parentName:"ol"},"Record the complexity count for the current ",(0,r.kt)("a",{parentName:"li",href:"../../docs"},"The User Dictionary"),", update with all terms in this process, then recalculate the complexity count. Record results in the ","[Pool Process]","(../../pool/Pool Process.md)."),(0,r.kt)("li",{parentName:"ol"},"Create Dust for all existing App Concepts, then run each, one by one, through to Escrowed.")))}c.isMDXComponent=!0},11748:function(e,t,a){var o={"./locale":89234,"./locale.js":89234};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=r,e.exports=n,n.id=11748}}]);