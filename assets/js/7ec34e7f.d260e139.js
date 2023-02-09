"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[99],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=c(n),u=a,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||i;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[h]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1410:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={title:"Analysing the results"},s=void 0,o={unversionedId:"quality_assessment_and_awarding/report",id:"quality_assessment_and_awarding/report",isDocsHomePage:!1,title:"Analysing the results",description:"The results obtained by the QAA module highlight the achievements that",source:"@site/docs/quality_assessment_and_awarding/report.md",sourceDirName:"quality_assessment_and_awarding",slug:"/quality_assessment_and_awarding/report",permalink:"/quality_assessment_and_awarding/report",version:"current",frontMatter:{title:"Analysing the results"},sidebar:"tutorialSidebar",previous:{title:"Triggering the Assessment",permalink:"/quality_assessment_and_awarding/operation"},next:{title:"Scan GitHub organisation in Jenkins",permalink:"/advanced/jenkins_scan_organisation"}},l=[{value:"Awarding through Badges",id:"awarding-through-badges",children:[]}],c={toc:l},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The results obtained by the QAA module highlight the achievements that\ncharacterize a given code repository, and point developers or code owners to\nthose specific parts where quality can be improved. Thus, the ultimate goal is\nto increase the overall quality of the code so that the software product takes\ncredit."),(0,a.kt)("p",null,"The results view shows a report detailing the validity of the criteria covered\nduring the assessment. This validity is estimated on the basis of the results\nand criticality provided by the individual subcriteria. This means that only\nthe subcriteria with the highest level of criticality is considered for the\ncriterion's overall success."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/criterion_results.png"})),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The codes that identify the subcriteria are aligned, as stated throughout the\ndocs, with the ",(0,a.kt)("a",{parentName:"p",href:"https://indigo-dc.github.io/sqa-baseline/"},"A set of Common Software Quality Assurance Baseline Criteria\nfor Research Projects")," document."))),(0,a.kt)("h3",{id:"awarding-through-badges"},"Awarding through Badges"),(0,a.kt)("p",null,"Reporting is complemented with awarding when the software being analysed\nreaches a minimum level of quality. This is based on the fact that, similarly\nto the subcriteria covered above, not all the criteria have the same level of\nimportance. We have previously established those levels in the\n",(0,a.kt)("a",{parentName:"p",href:"/quality_assessment_and_awarding/synergy_badging_approach"},"Badging in EOSC-Synergy"),"."),(0,a.kt)("p",null,"Whenever the assessed code repository has reached any of the required levels\nof quality, a digital badge will be displayed on top of the report as shown\nin the next image:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/award.png"})))}h.isMDXComponent=!0}}]);