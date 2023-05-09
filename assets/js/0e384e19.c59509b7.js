"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||h[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},426:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={slug:"/",sidebar_position:1,title:"What is SQAaaS?"},o=void 0,s={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"What is SQAaaS?",description:"SQAaaS has been created with the intention of bringing over novel quality",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1,title:"What is SQAaaS?"},sidebar:"tutorialSidebar",next:{title:"Why Pipeline as a Service?",permalink:"/pipeline_as_a_service/intro"}},c=[{value:"Why care about quality in research software?",id:"why-care-about-quality-in-research-software",children:[]},{value:"Following the Open Science path",id:"following-the-open-science-path",children:[]},{value:"Fostering quality in research software",id:"fostering-quality-in-research-software",children:[]}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SQAaaS has been created with the intention of bringing over novel quality\npractices when it comes to developing software in research environments."),(0,a.kt)("p",null,"The SQAaaS platform is developed by CSIC, LIP and UPV."),(0,a.kt)("a",{href:"https://www.csic.es/en",target:"_blank",style:{textDecoration:"none"}}," ",(0,a.kt)("img",{src:"/img/logo-csic.png",height:"60",style:{margin:"0 18px 0 0"}})," "),(0,a.kt)("a",{href:"https://www.lip.pt/?lang=en",target:"_blank",style:{textDecoration:"none"}}," ",(0,a.kt)("img",{src:"/img/logo-lip.png",height:"60",style:{margin:"0 18px"}})," "),(0,a.kt)("a",{href:"https://www.upv.es/en",target:"_blank",style:{textDecoration:"none"}}," ",(0,a.kt)("img",{src:"/img/logo-upv.png",height:"60",style:{margin:"0 18px"}})," "),(0,a.kt)("h2",{id:"why-care-about-quality-in-research-software"},"Why care about quality in research software?"),(0,a.kt)("p",null,"It often happens that research software is not produced in accordance with some\nminimal quality conventions, making it difficult to be adopted, reused or\nsustained in the long term."),(0,a.kt)("p",null,"This appears as a key structural issue since the\nresearch work has to be subject to continual revision and refinement, as the\nonly form to achieve steady innovation."),(0,a.kt)("h2",{id:"following-the-open-science-path"},"Following the Open Science path"),(0,a.kt)("p",null,"The present and future of science, the Open Science paradigm, promotes not only\nthe values of openness and accessibility, but in the specific case of software,\nalso those aligned with the Software Quality Assurance (SQA) processes.\nRegardless of their expertise, the SQAaaS platform aids researchers to meet the\ngood SQA practices when writing code, and it does it through the adherence to\nthe DevOps culture, and in particular, through the concept of CI/CD pipelines."),(0,a.kt)("h2",{id:"fostering-quality-in-research-software"},"Fostering quality in research software"),(0,a.kt)("p",null,"The SQAaaS portal offers access to two different features, each one with its\nown purpose and audience:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"pipeline_as_a_service/intro"},(0,a.kt)("strong",{parentName:"a"},"Pipeline as a Service"))," module provides\nthe end user with a graphical means to compose the CI/CD pipelines that will\nverify and validate (V&V) her software. To facilitate the task, each stage in\nthe pipeline executes a unit of work that is contextualized in a specific SQA\ncriterion. The SQAaaS supports SQA criteria both for\n",(0,a.kt)("a",{parentName:"li",href:"https://indigo-dc.github.io/sqa-baseline/"},"software")," and\n",(0,a.kt)("a",{parentName:"li",href:"https://eosc-synergy.github.io/service-qa-baseline/"},"services")," standards.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Common audience: computational scientists, research software engineers\n(RSEs) and/or any developer code for tackling"))),(0,a.kt)("li",{parentName:"ul"},"The\n",(0,a.kt)("a",{parentName:"li",href:"quality_assessment_and_awarding/intro"},(0,a.kt)("strong",{parentName:"a"},"Quality Assessment and Awarding")),"\n(QAA) module performs a comprehensive\nSQA analysis in accordance with the criteria from the aforementioned\nstandards for software and services. As a result, this module provides not\nonly a report summarizing the results of the assessment and pointers to\nimprove, but in case that a minimum set of criteria have been met, the QAA\nreturns a digital badge (provided by ",(0,a.kt)("a",{parentName:"li",href:"https://info.badgr.com/"},"Badgr"),")\nshowcasing the achievements being accomplished by the software.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Common audience: any stakeholder within the research ecosystem, from\nresearchers (individuals, communities) to policy makers or funding\norganisations.")))),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/sqaaas.png"})))}p.isMDXComponent=!0}}]);