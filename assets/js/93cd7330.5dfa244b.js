"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[15],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return n?i.createElement(m,a(a({ref:t},l),{},{components:n})):i.createElement(m,a({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1791:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],s={title:"Step 1 - the Repositories"},p=void 0,c={unversionedId:"pipeline_as_a_service/step_1_repositories",id:"pipeline_as_a_service/step_1_repositories",isDocsHomePage:!1,title:"Step 1 - the Repositories",description:"Changes in the code repositories are the source of all the work performed by",source:"@site/docs/pipeline_as_a_service/step_1_repositories.md",sourceDirName:"pipeline_as_a_service",slug:"/pipeline_as_a_service/step_1_repositories",permalink:"/pipeline_as_a_service/step_1_repositories",version:"current",frontMatter:{title:"Step 1 - the Repositories"},sidebar:"tutorialSidebar",previous:{title:"Composing your CI/CD pipeline",permalink:"/pipeline_as_a_service/the_2_step_process"},next:{title:"Step 2 - the (Quality) Criteria",permalink:"/pipeline_as_a_service/step_2_criteria"}},l=[{value:"Defining repositories",id:"defining-repositories",children:[]},{value:"Advanced options",id:"advanced-options",children:[]}],d={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Changes in the code repositories are the source of all the work performed by\nthe CI/CD pipelines. By reacting in an automated fashion to those changes,\npipelines help developers (of code, documentation and/or whatever plain-text\nbased data) in the maintenance tasks."),(0,o.kt)("p",null,"There are two main approaches when it comes to linking CI/CD pipelines with\ncode:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Place your pipeline next to the code, i.e. in the same repository where the\nsource code is handled."),(0,o.kt)("li",{parentName:"ol"},"Place your pipeline in a separate repository.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Approaches to link pipeline & code")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Handling both code and the CI/CD pipeline in the same repository is the\nrecommended approach"))," (unless there are specific constraints within the\nsoftware project), and it is indeed the default behavior within most CI\nsolutions."),(0,o.kt)("p",{parentName:"div"},"As a matter of fact, ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"if your pipeline only needs to work with the existing\ncode, this step can be skipped"))," (this is the reason behind marking it as\noptional) since the contents will be fetched automatically."))),(0,o.kt)("h3",{id:"defining-repositories"},"Defining repositories"),(0,o.kt)("p",null,'The Repository view let\'s you define any "external" (i.e. not the repo that\ncontains the CI/CD pipeline) repository that shall be accessible during the\npipeline execution. There are a number of reasons why you would like to do\nthat as when the documentation (',(0,o.kt)("em",{parentName:"p"},"docs-as-code"),") or deployment files\n(",(0,o.kt)("em",{parentName:"p"},"Infrastructure as Code"),") are maintained outside the main repository."),(0,o.kt)("p",null,"First, enable the repository definition by clicking on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Yes")," checkbox.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"+ Add repository")," form will open up so that you can specificy the i) URL\nand ii) branch from the repository to be fetched. You can add as many external\nrepositories as you want."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/add_new_repo.gif"})),(0,o.kt)("h3",{id:"advanced-options"},"Advanced options"),(0,o.kt)("p",null,"The Repository view offers additional features for more complex scenarios:\ncredentials and environment customization."),(0,o.kt)("h4",{id:"credentials"},"Credentials"),(0,o.kt)("p",null,"Credentials (",(0,o.kt)("inlineCode",{parentName:"p"},"Add Credentials")," section) are used whenever the pipeline is\nrequired to access an external service that enforces authentication, such as\nprivate code repositories or push-permissions to container registries."),(0,o.kt)("p",null,"Since the current implementation of the SQAaaS uses the JePL library for the\npipeline definition, which in turn relies on Jenkins CI, the ","[type of\ncredentials are those supported by this latter technology]","\n(",(0,o.kt)("a",{parentName:"p",href:"https://www.jenkins.io/doc/book/using/using-credentials/"},"https://www.jenkins.io/doc/book/using/using-credentials/"),").\nAs a result, ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"the credential identifier to be used has to be previously\ndefined in Jenkins"))," before being used in this section. This is a limitation\nwe expect to solve in future versions."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/credentials.png"})),(0,o.kt)("p",null,"Once the credentials' form has been filled out, click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Credentials")," for\nthe SQAaaS to track them."),(0,o.kt)("h4",{id:"environment"},"Environment"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Customize Environment")," section allows you to set environment variables\nthat will be accessible at runtime. You can add as many variables as you like\nby clicking on ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Env Var")," button."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/envvars.png"})))}u.isMDXComponent=!0}}]);