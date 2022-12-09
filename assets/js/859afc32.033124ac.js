"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[719],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),l=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(r),h=n,f=m["".concat(s,".").concat(h)]||m[h]||u[h]||a;return r?i.createElement(f,o(o({ref:t},c),{},{components:r})):i.createElement(f,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<a;l++)o[l]=r[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2706:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var i=r(7462),n=(r(7294),r(3905));const a={},o="Composing your CI/CD pipeline",p={unversionedId:"pipeline_as_a_service/the_2_step_process",id:"pipeline_as_a_service/the_2_step_process",title:"Composing your CI/CD pipeline",description:"The Pipeline as a Service will guide you through a 2-step process that will",source:"@site/docs/pipeline_as_a_service/the_2_step_process.md",sourceDirName:"pipeline_as_a_service",slug:"/pipeline_as_a_service/the_2_step_process",permalink:"/pipeline_as_a_service/the_2_step_process",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Why Pipeline as a Service?",permalink:"/pipeline_as_a_service/intro"},next:{title:"Step 1 - the Repositories",permalink:"/pipeline_as_a_service/step_1_repositories"}},s={},l=[{value:"The 2-step process",id:"the-2-step-process",level:3},{value:"The Summary view",id:"the-summary-view",level:3}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"composing-your-cicd-pipeline"},"Composing your CI/CD pipeline"),(0,n.kt)("p",null,"The Pipeline as a Service will guide you through a 2-step process that will\nallow you to create ready-to-be-used CI/CD pipelines."),(0,n.kt)("admonition",{title:"Naming your pipeline",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"As an initial requirement, the web will ask you to provide a name for the\npipeline. It is mainly required for the internal operation of the SQAaaS (e.g\nto create the associated code repository, to be used as the job name in the CI\nsystem), so it is not crucial for the pipeline itself, but it is highly\nrecommended to provide a meaningful name."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img/pipeline_naming.gif"})),(0,n.kt)("p",{parentName:"admonition"},"Once set, click on ",(0,n.kt)("em",{parentName:"p"},"Create pipeline")," in order to start the process.")),(0,n.kt)("h3",{id:"the-2-step-process"},"The 2-step process"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("a",{parentName:"li",href:"/pipeline_as_a_service/step_1_repositories"},"Repositories")),(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("a",{parentName:"li",href:"/pipeline_as_a_service/step_2_criteria"},"Quality Criteria"))),(0,n.kt)("h3",{id:"the-summary-view"},"The Summary view"),(0,n.kt)("p",null,"After completing the previous steps, the web interface will redirect you to the\nSummary view and show a popup message with the exit status result from the\npipeline creation process."),(0,n.kt)("p",null,"The Pipeline as a Service offers a number of features in order to visualize,\nshare and try out your brand new CI/CD pipeline. We explain them on the\n",(0,n.kt)("a",{parentName:"p",href:"/pipeline_as_a_service/summary"},"Summary section"),"."))}u.isMDXComponent=!0}}]);