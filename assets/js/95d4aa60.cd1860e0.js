"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1539:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"Tools for the quality assessment"},s=void 0,i={unversionedId:"advanced/tools_for_the_assessment",id:"advanced/tools_for_the_assessment",isDocsHomePage:!1,title:"Tools for the quality assessment",description:"Once the 'Run Assessment' button is clicked the SQAaaS will go through two",source:"@site/docs/advanced/tools_for_the_assessment.md",sourceDirName:"advanced",slug:"/advanced/tools_for_the_assessment",permalink:"/advanced/tools_for_the_assessment",version:"current",frontMatter:{title:"Tools for the quality assessment"},sidebar:"tutorialSidebar",previous:{title:"The pipeline repositories",permalink:"/advanced/pipeline_repository"}},l=[],c={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Once the 'Run Assessment' button is clicked the SQAaaS will go through two\nmain stages: 1) ",(0,o.kt)("em",{parentName:"p"},"the pipeline creation and execution"),", 2) ",(0,o.kt)("em",{parentName:"p"},"the validation\nof the results"),". The former leverages the Pipeline as a Service module in\norder to compose and run a pipeline with all the supported quality criteria."),(0,o.kt)("p",null,"The specific tools and commands to run are built upon the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eosc-synergy/sqaaas-tooling"},"SQAaaS tooling metadata"),"."),(0,o.kt)("p",null,"Once having the results from the pipeline, the next step is to validate the\nobtained results. This task is done with the aid of the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eosc-synergy/sqaaas-reporting"},"SQAaaS reporting")," component,\na plugin-based tool that parses each output and estimates whether each\nquality criterion (as well as associated subcriteria) has been successfully\nfulfilled by the code being analysed."))}u.isMDXComponent=!0}}]);