"use strict";(self.webpackChunk_dreamcatcher_tech_dreamcatcher_website=self.webpackChunk_dreamcatcher_tech_dreamcatcher_website||[]).push([[64013],{4118:function(e,t,a){a.d(t,{Z:function(){return N}});var r=a(80102),n=a(67294),l=a(86010),c=a(68277),i=a(39960),s=a(95999),m="sidebar_TMXw",o="sidebarItemTitle_V4zb",u="sidebarItemList_uHd5",d="sidebarItem_spIe",g="sidebarItemLink_eqrF",b="sidebarItemLinkActive_XZSJ";function E(e){var t=e.sidebar;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:d},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:b},e.title))})))))}var p=a(13102);function v(e){var t=e.sidebar;return n.createElement("ul",{className:"menu__list"},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function f(e){return n.createElement(p.Zo,{component:v,props:e})}var h=a(87524);function _(e){var t=e.sidebar,a=(0,h.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(f,{sidebar:t}):n.createElement(E,{sidebar:t}):null}var k=["sidebar","toc","children"];function N(e){var t=e.sidebar,a=e.toc,i=e.children,s=(0,r.Z)(e,k),m=t&&t.items.length>0;return n.createElement(c.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(_,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&n.createElement("div",{className:"col col--2"},a))))}},63881:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var r=a(67294),n=a(4118),l=a(7774),c=a(95999);var i="tag_Shcx";function s(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:i},r.createElement(l.Z,e))}))),r.createElement("hr",null))}function m(e){var t=function(e){var t={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var a=e[0],r=t[0];return a.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}(e.tags);return r.createElement("section",{className:"margin-vert--lg"},t.map((function(e){return r.createElement(s,{key:e.letter,letterEntry:e})})))}var o=a(1944),u=a(35281),d=a(14739),g=a(86010);function b(e){var t=e.tags,a=e.sidebar,l=(0,c.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return r.createElement(o.FG,{className:(0,g.Z)(u.k.wrapper.blogPages,u.k.page.blogTagsListPage)},r.createElement(o.d,{title:l}),r.createElement(d.Z,{tag:"blog_tags_list"}),r.createElement(n.Z,{sidebar:a},r.createElement("h1",null,l),r.createElement(m,{tags:t})))}},7774:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(67294),n=a(86010),l=a(39960),c="tag_hD8n",i="tagRegular_D6E_",s="tagWithCount_i0QQ";function m(e){var t=e.permalink,a=e.label,m=e.count;return r.createElement(l.Z,{href:t,className:(0,n.Z)(c,m?s:i)},a,m&&r.createElement("span",null,m))}}}]);