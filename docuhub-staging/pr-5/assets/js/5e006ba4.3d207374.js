"use strict";(self.webpackChunkciroh_docuhub=self.webpackChunkciroh_docuhub||[]).push([[8258],{39784:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>n,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"services/cloudservices/ciroh jupyterhub/documentation/directory/index","title":"JupyterHub User Directory","description":"2i2c JupyterHub File System","source":"@site/docs/services/cloudservices/ciroh jupyterhub/documentation/directory/index.md","sourceDirName":"services/cloudservices/ciroh jupyterhub/documentation/directory","slug":"/services/cloudservices/ciroh jupyterhub/documentation/directory/","permalink":"/docs/services/cloudservices/ciroh jupyterhub/documentation/directory/","draft":false,"unlisted":false,"editUrl":"https://github.com/CIROH-UA/ciroh-ua_website/edit/main/docs/services/cloudservices/ciroh jupyterhub/documentation/directory/index.md","tags":[{"inline":true,"label":"2i2c","permalink":"/docs/tags/2-i-2-c"},{"inline":true,"label":"JupyterHub","permalink":"/docs/tags/jupyter-hub"},{"inline":true,"label":"GCP","permalink":"/docs/tags/gcp"},{"inline":true,"label":"notebook","permalink":"/docs/tags/notebook"},{"inline":true,"label":"directory","permalink":"/docs/tags/directory"},{"inline":true,"label":"filesystem","permalink":"/docs/tags/filesystem"}],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"JupyterHub User Directory","description":"2i2c JupyterHub File System","tags":["2i2c","JupyterHub","GCP","notebook","directory","filesystem"]},"sidebar":"services","previous":{"title":"Documentation and Tutorial","permalink":"/docs/services/cloudservices/ciroh jupyterhub/documentation/"},"next":{"title":"Manage files in GCP bucket","permalink":"/docs/services/cloudservices/ciroh jupyterhub/documentation/gcp-object-storage/"}}');var r=o(74848),s=o(28453);const n={sidebar_position:1,title:"JupyterHub User Directory",description:"2i2c JupyterHub File System",tags:["2i2c","JupyterHub","GCP","notebook","directory","filesystem"]},c=void 0,d={},a=[{value:"1. <code>/home/jovyan</code>",id:"1-homejovyan",level:3},{value:"2. <code>/home/jovyan/shared</code>",id:"2-homejovyanshared",level:3},{value:"3. <code>/tmp</code>",id:"3-tmp",level:3}];function u(e){const t={a:"a",code:"code",h3:"h3",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["This is a guide for understanding the File System in CIROH JupyterHub. You can find detailed explanation on ",(0,r.jsx)(t.a,{href:"https://docs.2i2c.org/user/topics/data/filesystem/",children:"2i2c docs site"}),"."]}),"\n",(0,r.jsxs)(t.h3,{id:"1-homejovyan",children:["1. ",(0,r.jsx)(t.code,{children:"/home/jovyan"})]}),"\n",(0,r.jsxs)(t.p,{children:["This is your home directory and is same for all JupyterHub users. ",(0,r.jsx)(t.strong,{children:"Only you can access files in your home directory."})," Any files you place in your home directory persists between sessions. It is recommended to use only for notebooks and code since it is not suitable for large datasets."]}),"\n",(0,r.jsxs)(t.h3,{id:"2-homejovyanshared",children:["2. ",(0,r.jsx)(t.code,{children:"/home/jovyan/shared"})]}),"\n",(0,r.jsxs)(t.p,{children:["This is the shared ",(0,r.jsx)(t.strong,{children:"readonly"})," directory. All users can access and read from the shared directory. Only the hub admins can add and delete data from this directory."]}),"\n",(0,r.jsxs)(t.h3,{id:"3-tmp",children:["3. ",(0,r.jsx)(t.code,{children:"/tmp"})]}),"\n",(0,r.jsx)(t.p,{children:"This is a non persistient directory. This means any files you add under /tmp direcotry will be deleted once you log out. This directory can be used to store data temporary data."})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>n,x:()=>c});var i=o(96540);const r={},s=i.createContext(r);function n(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);