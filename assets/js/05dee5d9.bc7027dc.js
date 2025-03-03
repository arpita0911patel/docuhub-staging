"use strict";(self.webpackChunkciroh_docuhub=self.webpackChunkciroh_docuhub||[]).push([[6164],{7589:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"products/Data Management and Access Tools/netwa/index","title":"NETWA","description":"NETWA","source":"@site/docs/products/Data Management and Access Tools/netwa/index.md","sourceDirName":"products/Data Management and Access Tools/netwa","slug":"/products/Data Management and Access Tools/netwa/","permalink":"/docs/products/Data Management and Access Tools/netwa/","draft":false,"unlisted":false,"editUrl":"https://github.com/CIROH-UA/ciroh-ua_website/edit/main/docs/products/Data Management and Access Tools/netwa/index.md","tags":[{"inline":true,"label":"netwa","permalink":"/docs/tags/netwa"}],"version":"current","sidebarPosition":11,"frontMatter":{"sidebar_position":11,"title":"NETWA","description":"NETWA","tags":["netwa"]},"sidebar":"products","previous":{"title":"HydroServer","permalink":"/docs/products/Data Management and Access Tools/hydroserver/"},"next":{"title":"Getting Started","permalink":"/docs/products/Data Management and Access Tools/netwa/gettingstarted"}}');var r=t(74848),a=t(28453);const s={sidebar_position:11,title:"NETWA",description:"NETWA",tags:["netwa"]},i="Forecast-Workflow",c={},d=[{value:"About",id:"about",level:2},{value:"Cloning the repository",id:"cloning-the-repository",level:2},{value:"Using Jupyter Notebooks",id:"using-jupyter-notebooks",level:2},{value:"Add the repo to your python path variable",id:"add-the-repo-to-your-python-path-variable",level:4},{value:"Data Grabber Demo",id:"data-grabber-demo",level:2}];function l(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"forecast-workflow",children:"Forecast-Workflow"})}),"\n",(0,r.jsx)(o.h2,{id:"about",children:"About"}),"\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.a,{href:"https://github.com/CIROH-UVM/forecast-workflow",children:"forecast-workflow"})," repository was initally created to implement the AEM3D model to generate 7-day forecasts of Harmful Algal Blooms (HABs) in Lake Champlain. However, we've created some handy data grabbers along the way that we've modified in order to make them more useful for other CIORH researchers. The scripts for these data grabbers can be found in the ",(0,r.jsx)(o.code,{children:"data/"})," folder within the repository. This page will include documentation on how to use some of these data grabber tools we've created."]}),"\n",(0,r.jsx)(o.h2,{id:"cloning-the-repository",children:"Cloning the repository"}),"\n",(0,r.jsx)(o.p,{children:"The first thing you need to do in order to be able to use the tools in forecast-workflow is clone the repository into your user space using git."}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsx)(o.li,{children:"Once logged on the testbed, open a new terminal and navigate to the directroy in which you'd like to store the repo"}),"\n",(0,r.jsxs)(o.li,{children:["Then, run ",(0,r.jsx)(o.code,{children:"git clone https://github.com/CIROH-UVM/forecast-workflow.git"})]}),"\n",(0,r.jsxs)(o.li,{children:["That's it! You now have the repo on your own personal user space.","\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsx)(o.li,{children:"Be sure to checkout the repo on GitHub every now and then to make sure you have the most recent version of the repo."}),"\n",(0,r.jsxs)(o.li,{children:["If you need to pull any updates to your local repo, simply run ",(0,r.jsx)(o.code,{children:"git pull"})," from your ",(0,r.jsx)(o.code,{children:"forecast-workflow/"})," directory"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.h2,{id:"using-jupyter-notebooks",children:"Using Jupyter Notebooks"}),"\n",(0,r.jsx)(o.p,{children:"We recommmend using Jupyter notebooks for interactive computing, but you can also import forecast-workflow tools in a plain old python script as well (see code blocks below)."}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsx)(o.li,{children:"Log onto the CIROH VM using Remote Desktop Viewer or similar software"}),"\n",(0,r.jsxs)(o.li,{children:["Open a new terminal and ",(0,r.jsx)(o.code,{children:"cd"})," to your ",(0,r.jsx)(o.code,{children:"forecast-workflow"})," directory"]}),"\n",(0,r.jsxs)(o.li,{children:["Activate the ",(0,r.jsx)(o.code,{children:"forecast"})," mamba environment with ",(0,r.jsx)(o.code,{children:"mamba activate /data/condaEnvs/forecast"})]}),"\n",(0,r.jsxs)(o.li,{children:["Run ",(0,r.jsx)(o.code,{children:"jupyter lab"})," to launch Jupyter"]}),"\n",(0,r.jsx)(o.li,{children:'If starting a new notebook, click on the kernel called "forecast" underneath the "Notebooks" banner'}),"\n",(0,r.jsx)(o.li,{children:"Or if you have a notebook you're working on, simply open that one and pick up where you left off!"}),"\n"]}),"\n",(0,r.jsx)(o.h4,{id:"add-the-repo-to-your-python-path-variable",children:"Add the repo to your python path variable"}),"\n",(0,r.jsxs)(o.p,{children:["Evertime you start or restart a jupyter kernel, you will need to add the forecast-workflow directory to your ",(0,r.jsx)(o.code,{children:"sys.path"})," variable so that python knows where to look for forecast-workflow code. You can do that with the following code block:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:'import sys\nsys.path.append("/absolute/path/to/your/forecast-workflow")\n'})}),"\n",(0,r.jsxs)(o.p,{children:["This cell should be at the top of your notebook, but you only need to run it once; comment out these lines after runing so that you do not add the same path to you ",(0,r.jsx)(o.code,{children:"sys.path"})," over and over again."]}),"\n",(0,r.jsx)(o.p,{children:"Now, you can import the data grabbers into your notebook like any other module!"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{children:"import data.nwm_fc as nwm\nimport data.gfs_fc as gfs\n"})}),"\n",(0,r.jsx)(o.p,{children:"Etc."}),"\n",(0,r.jsx)(o.h2,{id:"data-grabber-demo",children:"Data Grabber Demo"}),"\n",(0,r.jsxs)(o.p,{children:["There is a neat demo notebook that includes more in-depth instructions on how to use our data grabber tools. You can find that notebook at ",(0,r.jsx)(o.code,{children:"forecast-workflow/examples/get_data_demo.ipynb"})]})]})}function h(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>i});var n=t(96540);const r={},a=n.createContext(r);function s(e){const o=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);