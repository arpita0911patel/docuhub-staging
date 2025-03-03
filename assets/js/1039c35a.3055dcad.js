"use strict";(self.webpackChunkciroh_docuhub=self.webpackChunkciroh_docuhub||[]).push([[356],{37526:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"policies/DataAndCodeSharingPolicy/index","title":"Data and Code Sharing","description":"The Cooperative Institute for Research to Operations in Hydrology (CIROH) is committed to an open data policy that will maximize the impact and broad use of data and research products produced by CIROH projects and will also ensure that Federal data sharing requirements are met. This policy document is intended to assist CIROH investigators in creating and sharing high-quality data and research products. We begin with guiding principles, after which the specific policy and recommendations are stated. This document also provides guidance and instructions that may be useful to CIROH investigators in meeting the terms of this policy. Finally, we also include an appendix with further details about the specific data sharing requirements of CIROH\u2019s partner agencies. We consider this policy to be a living document that will be revised as the needs of CIROH investigators and CIROH partner agencies evolve.","source":"@site/docs/policies/DataAndCodeSharingPolicy/index.md","sourceDirName":"policies/DataAndCodeSharingPolicy","slug":"/policies/DataAndCodeSharingPolicy/","permalink":"/docuhub-staging/docs/policies/DataAndCodeSharingPolicy/","draft":false,"unlisted":false,"editUrl":"https://github.com/CIROH-UA/ciroh-ua_website/edit/main/docs/policies/DataAndCodeSharingPolicy/index.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Data and Code Sharing"},"sidebar":"policies","previous":{"title":"Policies and Best Practices","permalink":"/docuhub-staging/docs/policies/intro"},"next":{"title":"Policy and Guidance","permalink":"/docuhub-staging/docs/policies/DataAndCodeSharingPolicy/Policies"}}');var s=i(74848),r=i(28453),a=i(99563);const o={sidebar_position:2,title:"Data and Code Sharing"},c=void 0,l={},d=[];function u(e){const t={hr:"hr",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"hero-content",children:[(0,s.jsx)("div",{className:"hero-text",children:(0,s.jsx)("p",{children:(0,s.jsx)(t.p,{children:"The Cooperative Institute for Research to Operations in Hydrology (CIROH) is committed to an open data policy that will maximize the impact and broad use of data and research products produced by CIROH projects and will also ensure that Federal data sharing requirements are met. This policy document is intended to assist CIROH investigators in creating and sharing high-quality data and research products. We begin with guiding principles, after which the specific policy and recommendations are stated. This document also provides guidance and instructions that may be useful to CIROH investigators in meeting the terms of this policy. Finally, we also include an appendix with further details about the specific data sharing requirements of CIROH\u2019s partner agencies. We consider this policy to be a living document that will be revised as the needs of CIROH investigators and CIROH partner agencies evolve."})})}),(0,s.jsx)("div",{className:"hero-image",style:{textAlign:"center"},children:(0,s.jsx)("img",{src:"/img/datasharing.jpeg",alt:"Water Tools",style:{width:"50%"}})})]})}),"\n",(0,s.jsx)(t.hr,{}),"\n","\n",(0,s.jsx)(a.A,{})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},99563:(e,t,i)=>{i.d(t,{A:()=>y});i(96540);var n=i(34164),s=i(93751),r=i(56289),a=i(81430),o=i(22887),c=i(50539),l=i(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=i(74848);function h(e){let{href:t,children:i}=e;return(0,u.jsx)(r.A,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:i})}function p(e){let{href:t,icon:i,title:s,description:r}=e;return(0,u.jsxs)(h,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:s,children:[i," ",s]}),r&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:r,children:r})]})}function m(e){let{item:t}=e;const i=(0,s.Nr)(t),n=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?(0,u.jsx)(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function g(e){let{item:t}=e;const i=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:i,title:t.label,description:t.description??n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(g,{item:t});case"category":return(0,u.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const i=(0,s.$S)();return(0,u.jsx)(y,{items:i.items,className:t})}function y(e){const{items:t,className:i}=e;if(!t)return(0,u.jsx)(x,{...e});const r=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,n.A)("row",i),children:r.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(f,{item:e})},t)))})}},81430:(e,t,i)=>{i.d(t,{W:()=>l});var n=i(96540),s=i(40797);const r=["zero","one","two","few","many","other"];function a(e){return r.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function l(){const e=c();return{selectMessage:(t,i)=>function(e,t,i){const n=e.split("|");if(1===n.length)return n[0];n.length>i.pluralForms.length&&console.error(`For locale=${i.locale}, a maximum of ${i.pluralForms.length} plural forms are expected (${i.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=i.select(t),r=i.pluralForms.indexOf(s);return n[Math.min(r,n.length-1)]}(i,t,e)}}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(96540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);