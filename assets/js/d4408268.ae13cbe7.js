"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[41985],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=u(n),m=o,d=h["".concat(a,".").concat(m)]||h[m]||p[m]||s;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=h;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},21108:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(83117),o=n(80102),s=(n(67294),n(3905)),i=["components"],c={},a=void 0,u={unversionedId:"Architecture_Dictionary/Reference/Dreamcatcher Object Structure",id:"Architecture_Dictionary/Reference/Dreamcatcher Object Structure",title:"Dreamcatcher Object Structure",description:"The following is the top level structure of a Dreamcatcher Object. Dreamcatcher Objects can perform various roles (e.g. representing Ghosts, Users, Projects, Assets, Contracts and so forth.). As such, not all of these top level Objects need be populated with data. Likewise, populating some (e.g. Evidence) changes the utility of the Object.",source:"@site/interblock/Architecture_Dictionary/Reference/Dreamcatcher Object Structure.md",sourceDirName:"Architecture_Dictionary/Reference",slug:"/Architecture_Dictionary/Reference/Dreamcatcher Object Structure",permalink:"/interblock/Architecture_Dictionary/Reference/Dreamcatcher Object Structure",draft:!1,editUrl:"https://github.com/dreamcatcher-tech/dreamcatcher-tech.github.io/edit/master/website/interblock/Architecture_Dictionary/Reference/Dreamcatcher Object Structure.md",tags:[],version:"current",frontMatter:{}},l={},p=[{value:"Dreamcatcher Object, Top Level",id:"dreamcatcher-object-top-level",level:2},{value:"Dreamcatcher Object, Example",id:"dreamcatcher-object-example",level:2}],h={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The following is the top level structure of a Dreamcatcher Object. Dreamcatcher Objects can perform various roles (e.g. representing Ghosts, Users, Projects, Assets, Contracts and so forth.). As such, not all of these top level Objects need be populated with data. Likewise, populating some (e.g. Evidence) changes the utility of the Object."),(0,s.kt)("h2",{id:"dreamcatcher-object-top-level"},"Dreamcatcher Object, Top Level"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Root:/\n    Dreams/\n    Addresses/\n    AppStore/\n    Apps/\n    Governance/\n    Attribution/\n    Citations/\n    Bank/\n    Outputs/\n    Evidence/\n    Milestones/\n    Issues/\n    Annotations/\n    Comments/\n    Contracts/\n    Predictions/\n    Wishes/\n    Messaging/\n    PullRequests/\n    Issues/\n    Predictions/\n")),(0,s.kt)("h2",{id:"dreamcatcher-object-example"},"Dreamcatcher Object, Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Project:/\n      ?name: (string),\n      ?description: (string)\nDreams/ /* these are the founding Wishes */\n    Dream01 <# Project35/Wishes/Wish1\n    Dream02 <# Project56/Wishes/Wish2\n    ...,\nAddresses/\n      address01 -> project\n      address02 -> project\n      ...,\nAppStore/\n      catalogue/\n            app1/\n            app2/\n      tools/\n        appStoreRegistry/\nApps/\n      myApp/\nGovernance/\n    Algo01/\n            ?covenant: ~> govAlgoLibrary:/stockGovernanceAlgo01\n            ?Governor: ~> LinusProject\n            ?Weight: 80\n      Algo02/\n            ?covenant: ~> govAlgoLibrary:/stockGovernanceAlgo02\n    PassthroughAlgo/\n        ?Project: ~> Project01\n        ?Weight: 30\n      Algo03/\n            ?covenant: ~> Outputs/customGovernanceAlgo01@branch1\n            ?Weight: 49\nAttribution/\n      Algo01/\n            ?covenant: ~> attributionAlgoLibrary/stockAttributionAlgo01\n              ?weight: (number)\n              ?fixedParams: {...}\n      Algo02/\n            ?covenant: ~> govProj3$/Project3/Outputs/customAttributionAlgo01@branch2\n            ?weight (number)\n            ?fixedParams: {...}\nCitations/\n    Citation1 ~> Project2\n    ?Citation2: \u201camazon.com/bookIread\u201d\nBank/ accountHistory: (Selector)}\n      self/\n            currencyName: (string),\n            currencyBalance: (number)\n      votes/  showUpvotes(Selector), showDownVotes(Selector)\n    externalAccount01/\n        ?BankName: PumpAndDumpBase\n        ?Accountname: myname\nOutputs/\n      project1/\n    Ghost1:/\nEvidence/\n    -> photoEvidenceGhost\nMilestones/  /* The sequence of things that need to happen */\n    Milestone1/\n        ?completionDate: 24122022\n            -> mileStoneAlgo01\n        -> DeadTigerIssue01\n        -> Issue01\n        -> DeadTigerVegProject/Issues/vegCapture\n    Milestone2/\n        ?completionDate: 24122023\n        -> Milestone1\n        -> otherProjectWeDependOn/Outputs/tigerSoup\nIssues/\n    Issue1/\n        #> externalProject/Wishes/Wish434\n            ~> measurementAlgo01\n            ?Description: \u201cDetails of issue\u201d\n            -> issue2\n            -> issue3\n    Issue2/\n          ?Description: \u201cDetails of issue\u201d\n        #> Wish20\n        -> issue1\n        -> issue3\nAnnotations/\nComments/\nContracts/\n    Contract1 ~> ContractwithAlice\n    Contract2 ~> ContractwithBob\nPredictions/\nWishes\n    Wish01/\n        /* Wish01 has an idea to improve someone else\u2019s widget */\n        ?Description: \u201cmake it pink please\u201d\n        Target1 ~> Project05/Output/Outputs/widget05_01\n    Wish02/\n        /* Has a request for Project06 to improve it\u2019s speed on one of it\u2019s widgets.  In response Project06 has created an Issue to deal with this Wish */\n        ?Description: \u201cMake it faster please\u201d\n        ?measurement ~> measurementAlgo(speed=50)\n        Target1 ~> Project06/Output/Outputs/widget06_01\n            Response <~ Project06/Output/Issues/issue06_01\n    Wish03/\n        /* Has a request for Project05.  Project05 likes the idea but hasn\u2019t committed to doing it and therefore to making it an issue, so created a Wish within its Wishes to record the fact. Also, turns out there\u2019s more demand.  Project08 also wants it blue and independently created their own Wish, targeting widget05_01. In addition, Project11 created a Wish and targeted Project01/Wishes/Wish02 which is visible to Project05 through the original Project01/Wishes/Wish02 */\n        ?Description: \u201cwe need this in blue\u201d\n        Target1 ~> Project05/Output/Outputs/widget05_01\n        IncomingLink <~ Project05/Issues/Wish05_01\n    Wish05/\n        /* Wish03 has this crazy idea, but didn\u2019t know if anyone would want it.  Turns out Project06, who found it through search, really wants it.  Project06 created a Wish and linked back to it. */\n        ?Description: \u201cI think I can crack SSL\u201d\n        IncomingLink <~ Project06/Wishes/Wish06_01\n    Wish06/\n        /* Has a radical idea for a new kind of widget, and just threw it out there.  Project08 liked it a bit, so upvoted it.  But Project07 liked it so much they created an Issue to build it, then linked back to Wish04.*/\n          ?Description: \u201cRadical Idea\u201d\n            upVote(1) <- Project08_upvote\n            IncomingLink <- Project07/Wishes/Wish07_01\n    Wish07/\n        /* Has a crazy ass big idea.  It has been upvoted a lot.  There\u2019s been a lot of discussion during which the idea is broken down into smaller bits.  Some have been picked up, others not yet.*/\n        ?Description: \u201cGo to Mars\u201d\n            upVote(143) <~ Project08_upvote, Project 09_upvote\u2026\n        Comments/\n            ?Commenter1#1: \u201cHell yes\u201d, \u201cIt\u2019s a bit far\u201d, ?Commenter2#5: \u201cWe\u2019ll need a starship\u201d,\n            ?Commenter3#57: \u201cWe\u2019ll need icecream\u201d\n    Wish08/\n            ?Description: \u201cDesign Starship\u201d\n            upVote(23) <~ Proj99_upvote, Proj23_upvote\u2026\n            Comments/\n        ?Commenter1#2: \u201cPointy end up, flamey end down\u201d\n              IncomingLink <~ Project59/Wishes/Wish59_01\n    Wish09/\n            ?Description: \u201cMake Space Icecream\u201d\n            upVote(234) <~ Project99_upvote, Project23_upvote\u2026\n            Comments \u201cvanilla please\u201d\n        Target1 ~> Project85/Output/Outputs/icecream01\n        IncomingLink <~ Project85/Output/Issues/icecream01\nMessaging/\n    Inbox/\n    Outbox/\n    Comments/\n          Comments#1\n            ?Description: \u201cDisagree.  Forking Issue01 into Dream01 is way too early.\u201d\n                ?link ~> Project85/Issues/Issue01\n                ?link ~> Project86/Dreams/Dream01\n        Comments#2\n                ?Description: \u201cYea, what he said\u201d\n                  ?link ~> Project104/Comments/comment455\nPullRequests/\n      pullRequest01/\n        meta/ {getName(), getDescription()}\n              name: (string),\n              description: (string)\n            proposers/\n                  <- person | project\n                  <- person | project\n    Issues/\n        <- issues/issue01\n        <- issues/issue02\n        <- issues/issue07\nPredictions/\n")))}m.isMDXComponent=!0}}]);