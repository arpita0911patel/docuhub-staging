"use strict";(self.webpackChunkciroh_docuhub=self.webpackChunkciroh_docuhub||[]).push([[5009],{78363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"products/Evaluation Tools/index","title":"Evaluation Tools","description":"Evaluation Tools","source":"@site/docs/products/Evaluation Tools/index.md","sourceDirName":"products/Evaluation Tools","slug":"/products/Evaluation Tools/","permalink":"/docs/products/Evaluation Tools/","draft":false,"unlisted":false,"editUrl":"https://github.com/CIROH-UA/ciroh-ua_website/edit/main/docs/products/Evaluation Tools/index.md","tags":[{"inline":true,"label":"CSES","permalink":"/docs/tags/cses"},{"inline":true,"label":"TEEHR","permalink":"/docs/tags/teehr"}],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Evaluation Tools","description":"Evaluation Tools","tags":["CSES","TEEHR"]},"sidebar":"products","previous":{"title":"Community Cyberinfrastructure and NextGen Office Hours","permalink":"/docs/products/Community Hydrologic Modeling Framework/ngiabOfficeHours"},"next":{"title":"CSES","permalink":"/docs/products/Evaluation Tools/cses/"}}');var r=n(74848),s=n(28453),i=n(99563);const c={sidebar_position:3,title:"Evaluation Tools",description:"Evaluation Tools",tags:["CSES","TEEHR"]},l=void 0,a={},u=[];function d(e){const t={hr:"hr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.hr,{}),"\n","\n",(0,r.jsx)(i.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},99563:(e,t,n)=>{n.d(t,{A:()=>E});n(96540);var o=n(34164),r=n(93751),s=n(56289),i=n(81430),c=n(22887),l=n(50539),a=n(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(s.A,{href:t,className:(0,o.A)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:r,description:s}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,o.A)("text--truncate",u.cardTitle),title:r,children:[n," ",r]}),s&&(0,d.jsx)("p",{className:(0,o.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e;const n=(0,r.Nr)(t),o=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??o(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,r.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,r.$S)();return(0,d.jsx)(E,{items:n.items,className:t})}function E(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,r.d1)(t);return(0,d.jsx)("section",{className:(0,o.A)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},81430:(e,t,n)=>{n.d(t,{W:()=>a});var o=n(96540),r=n(40797);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,o.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const o=e.split("|");if(1===o.length)return o[0];o.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${o.length}: ${e}`);const r=n.select(t),s=n.pluralForms.indexOf(r);return o[Math.min(s,o.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var o=n(96540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);