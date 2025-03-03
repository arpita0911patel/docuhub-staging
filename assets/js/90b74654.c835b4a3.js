"use strict";(self.webpackChunkciroh_docuhub=self.webpackChunkciroh_docuhub||[]).push([[6604],{5091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"services/cloudservices/index","title":"Public Cloud","description":"In tandem with the power of the public cloud, our team of researchers, hydrologists, and engineers at CIROH is committed to advancing our understanding of hydrologic processes, improving operational hydrologic forecasting techniques and workflows, collaborating on community water modeling, converting forecasts into practical solutions, and utilizing water predictions to help guide decision-making processes.","source":"@site/docs/services/cloudservices/index.md","sourceDirName":"services/cloudservices","slug":"/services/cloudservices/","permalink":"/docuhub-staging/docs/services/cloudservices/","draft":false,"unlisted":false,"editUrl":"https://github.com/CIROH-UA/ciroh-ua_website/edit/main/docs/services/cloudservices/index.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Public Cloud"},"sidebar":"services","previous":{"title":"Infrastructure Access","permalink":"/docuhub-staging/docs/services/access"},"next":{"title":"CIROH AWS Account","permalink":"/docuhub-staging/docs/services/cloudservices/aws/"}}');var s=n(74848),o=n(28453),i=n(99563);const c={sidebar_position:3,title:"Public Cloud"},l="Public Cloud Services",a={},d=[];function u(e){const t={h1:"h1",header:"header",hr:"hr",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"public-cloud-services",children:"Public Cloud Services"})}),"\n",(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"hero-content",children:[(0,s.jsx)("div",{className:"hero-text",children:(0,s.jsxs)("p",{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"In tandem with the power of the public cloud"}),", our team of researchers, hydrologists, and engineers at CIROH is committed to advancing our understanding of hydrologic processes, improving operational hydrologic forecasting techniques and workflows, collaborating on community water modeling, converting forecasts into practical solutions, and utilizing water predictions to help guide decision-making processes."]}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"By leveraging the scalability and flexibility of public cloud platforms like AWS and Google Cloud"}),", CIROH Cloud empowers our team to conduct groundbreaking research in hydrology. This translates into a robust and efficient computing environment that accelerates discovery and innovation."]})]})}),(0,s.jsx)("div",{className:"hero-image",style:{textAlign:"center"},children:(0,s.jsx)("img",{src:"/img/water_products.png",alt:"Water Tools",style:{width:"50%"}})})]})}),"\n",(0,s.jsx)(t.hr,{}),"\n","\n",(0,s.jsx)(i.A,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},99563:(e,t,n)=>{n.d(t,{A:()=>v});n(96540);var r=n(34164),s=n(93751),o=n(56289),i=n(81430),c=n(22887),l=n(50539),a=n(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(74848);function h(e){let{href:t,children:n}=e;return(0,u.jsx)(o.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:s,description:o}=e;return(0,u.jsxs)(h,{href:t,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),o&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function p(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function g(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(g,{item:t});case"category":return(0,u.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,u.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const o=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(f,{item:e})},t)))})}},81430:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(96540),s=n(40797);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),o=n.pluralForms.indexOf(s);return r[Math.min(o,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);