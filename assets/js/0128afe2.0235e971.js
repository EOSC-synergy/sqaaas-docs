"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,u=d["".concat(c,".").concat(h)]||d[h]||m[h]||i;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6687:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Triggering the Assessment"},o=void 0,s={unversionedId:"quality_assessment_and_awarding/operation",id:"quality_assessment_and_awarding/operation",isDocsHomePage:!1,title:"Triggering the Assessment",description:"Running a quality assessment for your code repository is a quite",source:"@site/docs/quality_assessment_and_awarding/operation.md",sourceDirName:"quality_assessment_and_awarding",slug:"/quality_assessment_and_awarding/operation",permalink:"/quality_assessment_and_awarding/operation",version:"current",frontMatter:{title:"Triggering the Assessment"},sidebar:"tutorialSidebar",previous:{title:"Badging in EOSC-Synergy",permalink:"/quality_assessment_and_awarding/synergy_badging_approach"},next:{title:"Analysing the results",permalink:"/quality_assessment_and_awarding/report"}},c=[{value:"Tools for the Assessment",id:"tools-for-the-assessment",children:[]}],l={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Running a quality assessment for your code repository is a quite\nstraightforward task, you just need to provide its URL and click on ",(0,r.kt)("em",{parentName:"p"},'"Start\nAssessment"')," button as follows:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/qaa.gif"})),(0,r.kt)("p",null,"The state of the assessment will be displayed in the popup that appears once\nstarted. Once finished successfully, you will be taken to the results view."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There are two main stages it will go through, 1) ",(0,r.kt)("em",{parentName:"p"},"the pipeline creation\nand execution"),", 2) ",(0,r.kt)("em",{parentName:"p"},"the validation of the results"),". The former relies on the core\nfunctionality provided by the Pipeline as a Service in order to compose and\nrun a pipeline with all the supported quality criteria. The specific tools and\ncommands to run are built upon the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eosc-synergy/sqaaas-tooling"},"SQAaaS tooling metadata"),"."),(0,r.kt)("p",{parentName:"div"},"Once having the results from the pipeline, the next step is to validate the\nobtained results. This task is done with the aid of the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eosc-synergy/sqaaas-reporting"},"SQAaaS reporting")," component,\na plugin-based tool that parses each output and estimates whether each\nquality criterion (as well as associated subcriteria) has been successfully\nfulfilled by the code being analysed."))),(0,r.kt)("h4",{id:"settings"},"Settings"),(0,r.kt)("p",null,"Current customization boils down to the specification of a different code\nrepository for the documentation, other than the one that hosts the code. This\nis a common practice, so in case that your\n",(0,r.kt)("a",{parentName:"p",href:"https://www.writethedocs.org/guide/docs-as-code/"},"docs-as-code")," are not\nmaintained in the same repo as the code, be sure to add this URL by clicking on\nthe ",(0,r.kt)("em",{parentName:"p"},'"External repo for documentation?"')," checkbox:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/qaa_docs_repo.png"})),(0,r.kt)("h2",{id:"tools-for-the-assessment"},"Tools for the Assessment"),(0,r.kt)("p",null,"The SQAaaS platform executes multiple checks for assessing each criterion and\nassociated subcriteria. According to the given criterion, the check might\nconsist on ensuring the presence of a set of files (e.g. licenses or code of\nconduct for the documentation criterion) or running existing open source tools\naccording to the programming language in use."),(0,r.kt)("p",null,"In the current version, the SQAaaS provides support for the following tools: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:"center"},"Python"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Golang"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Ruby"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Java"),(0,r.kt)("th",{parentName:"tr",align:"center"},"JavaScript"),(0,r.kt)("th",{parentName:"tr",align:"center"},"JSON"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Dockerfile"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Code Style (",(0,r.kt)("inlineCode",{parentName:"td"},"QC.Sty"),")"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://flake8.pycqa.org/en/latest/"},"flake8")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://staticcheck.io/"},"staticcheck")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://rubocop.org/"},"rubocop")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://checkstyle.sourceforge.io/"},"checkstyle")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://stylelint.io/"},"stylelint")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/zaach/jsonlint"},"jsonlint")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/hadolint/hadolint"},"hadolint"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Security Static Analysis (",(0,r.kt)("inlineCode",{parentName:"td"},"QC.Sec"),")"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://bandit.readthedocs.io/"},"bandit")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/securego/gosec"},"gosec")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);