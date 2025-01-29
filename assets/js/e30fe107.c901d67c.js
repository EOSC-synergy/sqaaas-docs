"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[878],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(p,".").concat(d)]||u[d]||h[d]||r;return n?i.createElement(m,o(o({ref:t},l),{},{components:n})):i.createElement(m,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5955:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],s={title:"Why Pipeline as a Service?"},p=void 0,c={unversionedId:"pipeline_as_a_service/intro",id:"pipeline_as_a_service/intro",isDocsHomePage:!1,title:"Why Pipeline as a Service?",description:"The Pipeline as a Service module offers developers with a graphical means",source:"@site/docs/pipeline_as_a_service/intro.md",sourceDirName:"pipeline_as_a_service",slug:"/pipeline_as_a_service/intro",permalink:"/pipeline_as_a_service/intro",version:"current",frontMatter:{title:"Why Pipeline as a Service?"},sidebar:"tutorialSidebar",previous:{title:"What is SQAaaS?",permalink:"/"},next:{title:"Composing your CI/CD pipeline",permalink:"/pipeline_as_a_service/the_2_step_process"}},l=[{value:"Bringing over good practices to research",id:"bringing-over-good-practices-to-research",children:[]},{value:"What can the Pipeline as a Service do for you?",id:"what-can-the-pipeline-as-a-service-do-for-you",children:[{value:"1. Pipeline composition &amp; sharing",id:"1-pipeline-composition--sharing",children:[]},{value:"2. Pipeline testing &amp; refactoring",id:"2-pipeline-testing--refactoring",children:[]}]},{value:"The process of making up a CI/CD pipeline",id:"the-process-of-making-up-a-cicd-pipeline",children:[]},{value:"Characteristics of the pipelines",id:"characteristics-of-the-pipelines",children:[]}],h={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Pipeline as a Service")," module offers developers with a graphical means\nto compose workflows, aka CI/CD pipelines, that carry out the software\nverification and validation (V&V) processes in an automated fashion. Hence,\nthe CI/CD pipelines are associated with code repositories, since it is the\ncode or documentation (docs-as-code) the main target of the quality checks\nthat are defined in them."),(0,r.kt)("h2",{id:"bringing-over-good-practices-to-research"},"Bringing over good practices to research"),(0,r.kt)("p",null,"Through the web-based composition of the CI/CD pipelines, the SQAaaS aims at\nbringing over their proven benefits to researchers that develop their own\nsoftware solutions, without the need to permeate down into the nitty-gritty of\ncurrent technology offerings, such as\n",(0,r.kt)("a",{parentName:"p",href:"https://www.jenkins.io/doc/book/pipeline/"},"Jenkins"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/actions"},"GitHub Actions")," or\n",(0,r.kt)("a",{parentName:"p",href:"https://travis-ci.org/"},"Travis CI")," (just to mention a few), which can be a\ndaunting task oftentimes."),(0,r.kt)("p",null,"With this approach, individuals and communities within the research ecosystem\nwill be more aware of the positive impact that relying on CI/CD pipelines\nbrings in the short and long term when it comes to manage the software\ndevelopment life cycle."),(0,r.kt)("h2",{id:"what-can-the-pipeline-as-a-service-do-for-you"},"What can the Pipeline as a Service do for you?"),(0,r.kt)("h3",{id:"1-pipeline-composition--sharing"},"1. Pipeline composition & sharing"),(0,r.kt)("p",null,"The main feature and objective of the Pipeline as a Service module is to\ncompose on-demand and ready-to-use CI/CD pipelines based on the feedback of\nthe user. Thus, the web interface provides a means to distribute the resultant\npipeline so it can be successfully added to the target code repository:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Downloading the pipeline as a ZIP file, so that the developer needs to\nmanually extract & push to the desired repository."),(0,r.kt)("li",{parentName:"ol"},"Through a ",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/pull-requests"},"GitHub's pull request"),".\nThis option will automatically create a pull request to a given target\nrepository. By simply merging the pull request, the pipeline will be added\nto your code repository.")),(0,r.kt)("h3",{id:"2-pipeline-testing--refactoring"},"2. Pipeline testing & refactoring"),(0,r.kt)("p",null,"Being able to test the brand-new pipeline is a helpful feature to secure its\noperation once is added to the code repository. Any failure or unintended\nbehaviour can be worked out by refactoring the stages that the pipeline was\nbroken down into."),(0,r.kt)("h2",{id:"the-process-of-making-up-a-cicd-pipeline"},"The process of making up a CI/CD pipeline"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/pipeline_step_1.png"})),(0,r.kt)("p",null,"The Pipeline as a Service guides you through a series of steps where settings\nfor the main actors in a CI/CD pipeline can be filled up, in particular:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"repositories"),", where the code and/or documentation lies.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"services")," that will take part in the software V&V.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"criteria"),", which groups the checks into specific software\nquality-related criteria. Each criterion can have multiple checks, and one\ncheck represents a different stage in the pipeline."),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There are contraints in regards to the supported technologies and standards for\nthe pipeline actors above (check out the\n",(0,r.kt)("a",{parentName:"p",href:"#characteristics-of-the-pipelines"},"pipeline characteristics section"),"\nfor additional details):"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Only Git repositories are supported."),(0,r.kt)("li",{parentName:"ul"},"Only container-based services (such as ",(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker"),")\ncan be defined."),(0,r.kt)("li",{parentName:"ul"},"The selectable criteria belongs to the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/indigo-dc/sqa-baseline"},"A set of Common Software Quality\nAssurance Baseline Criteria for Research\nProjects")," standard.")))))),(0,r.kt)("p",null,"The last step (step 4) provides a summary of the resultant pipeline and access\nto the ",(0,r.kt)("em",{parentName:"p"},"testing-refactoring-sharing")," features described in the previous\nsection."),(0,r.kt)("h2",{id:"characteristics-of-the-pipelines"},"Characteristics of the pipelines"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"CI/CD pipelines can be placed either in the same repository as the code or\ndocumentation, or in a separate repository. The first option is the\n",(0,r.kt)("em",{parentName:"li"},"recommended approach")," since the pipeline will react promptly to the\nrepository events (e.g. push & pull operations) and be triggered\nautomatically without the need of additional customization."),(0,r.kt)("li",{parentName:"ol"},"CI/CD pipelines are technology-specific",(0,r.kt)("sup",{parentName:"li",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git")," is the de-facto tool for source code or\ndocumentation version control, and thus, the solution being adopted by\nSQAaaS. This means that ",(0,r.kt)("em",{parentName:"li"},"only git-based code repositories are supported"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jenkins.io/doc/book/pipeline/"},"Jenkins Pipeline as Code")," are\nthe underlying technology of the CI/CD pipelines composed through the\ncurrent SQAaaS module. This means that ",(0,r.kt)("em",{parentName:"li"},"a Jenkins CI service is always\nrequired for the CI/CD pipelines to be executed"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker Compose")," is the container\norchestration engine used to deploy the services that take part in the\nCI/CD work. This means that the Jenkins CI service shall be configured to\nsupport Docker Compose agents.")))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"For certain features, such as pipeline execution and sharing (via\npull requests), the current version of the Pipeline as a Service\nmodule only supports ",(0,r.kt)("a",{parentName:"li",href:"https://github.com"},"GitHub")," plaform through the\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/rest"},"GitHub API"),". This is not an issue from\nthe end user's perspective, as the resultant CI/CD pipelines can be\nused in any Git environment or social coding platform other than\nGitHub, such as ",(0,r.kt)("a",{parentName:"li",href:"https://about.gitlab.com/"},"Gitlab"),".",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);