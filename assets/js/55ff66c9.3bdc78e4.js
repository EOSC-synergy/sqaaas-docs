"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[17],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||o;return n?i.createElement(u,r(r({ref:t},c),{},{components:n})):i.createElement(u,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9406:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],s={title:"Step 2 - the Tooling"},l=void 0,p={unversionedId:"pipeline_as_a_service/step_2_tooling",id:"pipeline_as_a_service/step_2_tooling",isDocsHomePage:!1,title:"Step 2 - the Tooling",description:"The CI/CD pipelines need to have access at runtime to the required tools",source:"@site/docs/pipeline_as_a_service/step_2_tooling.md",sourceDirName:"pipeline_as_a_service",slug:"/pipeline_as_a_service/step_2_tooling",permalink:"/pipeline_as_a_service/step_2_tooling",version:"current",frontMatter:{title:"Step 2 - the Tooling"},sidebar:"tutorialSidebar",previous:{title:"Step 1 - the Repositories",permalink:"/pipeline_as_a_service/step_1_repositories"},next:{title:"Step 3 - the (Quality) Criteria",permalink:"/pipeline_as_a_service/step_3_criteria"}},c=[{value:"How to define a tooling service",id:"how-to-define-a-tooling-service",children:[{value:"Pulling an image from a Docker registry",id:"pulling-an-image-from-a-docker-registry",children:[]},{value:"Building the image from a Dockerfile description",id:"building-the-image-from-a-dockerfile-description",children:[]},{value:"Advanced options",id:"advanced-options",children:[]}]}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The CI/CD pipelines need to have access at runtime to the required tools\nthat perform the defined tasks. The Tooling view provides the ability to\ndefine custom container-based services that host such tool stack."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Pre-defined services")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The SQAaaS supports most popular tools for tackling the analysis of the\nsupported quality criteria. These tools are both generic-purpose and relative\nto specific programming languages. In the current version, the SQAaaS supports\nonly Python and Java programming languages."),(0,o.kt)("p",{parentName:"div"},"We've got you covered for these SQAaaS-supported tools: you do not need to\ndefine services for them. This is the reason why this step is optional (i.e.\nwhenever the pipeline work relies entirely on the supported tools). A clear\nexception to this rule is when requiring a different version of the tool than\nthe one supported."))),(0,o.kt)("h2",{id:"how-to-define-a-tooling-service"},"How to define a tooling service"),(0,o.kt)("p",null,"As already introduced, the ",(0,o.kt)("em",{parentName:"p"},"tooling services")," are based on Docker containers.\nHence, there are two main ways to define them, either by ",(0,o.kt)("strong",{parentName:"p"},"pulling")," or\n",(0,o.kt)("strong",{parentName:"p"},"building"),"."),(0,o.kt)("h3",{id:"pulling-an-image-from-a-docker-registry"},"Pulling an image from a Docker registry"),(0,o.kt)("p",null,"The image has to be already available in a Docker registry for this feature to\nwork. By default, the pipeline will use ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub"),'.\nFollow the steps on "Docker image name syntax" to use a different registry.'),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Docker image name syntax")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The syntax for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Image Name")," field follows the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/tag/#extended-description"},"Docker syntax for image names"),". Note that:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"In order to use a registry other than Docker Hub (",(0,o.kt)("inlineCode",{parentName:"li"},"registry-1.docker.io"),")\nyou need to prefix the image name with such registry's hostname, such as\n",(0,o.kt)("inlineCode",{parentName:"li"},"myregistryhost:5000/fedora/httpd:version1.0")),(0,o.kt)("li",{parentName:"ul"},"You can use the values of the available environment variables to compose\nthe image name. This includes the ones defined in ",(0,o.kt)("a",{parentName:"li",href:"step_1_repositories##environment"},"Step 1")," and also the\nones exposed by the Jenkins plugins, such as the ",(0,o.kt)("inlineCode",{parentName:"li"},"GIT_*")," variables from the\n",(0,o.kt)("a",{parentName:"li",href:"https://plugins.jenkins.io/git/#environment-variables"},"Git plugin"),".")))),(0,o.kt)("p",null,"The following figure showcases the process of defining a tooling service:"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/tooling_pull.gif"})),(0,o.kt)("p",null,"When clicking on ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Service")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"python3-service")," in the example will be\navailable when defining the pipeline work in the next ",(0,o.kt)("em",{parentName:"p"},"Criteria")," step."),(0,o.kt)("h3",{id:"building-the-image-from-a-dockerfile-description"},"Building the image from a Dockerfile description"),(0,o.kt)("p",null,"In some cases, a custom Docker image needs to be built out of a Dockerfile\npresent in the code repository. The required parameters differ slightly from\nthe ones used when fetching an existing image from an external registry:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Dockerfile Location")," (required) shall contain the relative path (taken from\nthe root path of the repository) to the Dockerfile. ",(0,o.kt)("em",{parentName:"li"},"No default value is set")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Build arguments")," (optional) contains a list of key-value items that will be\nprovided to Docker at build time. Follows the\n",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/build/#set-build-time-variables---build-arg"},"Docker convention for build arguments"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Would you like to push the Docker image to a registry?")," (optional): if\nrequired, the built image can be pushed to a Docker registry. To successfully\nperform this operation credentials are needed. As it happened when ",(0,o.kt)("a",{parentName:"li",href:"/pipeline_as_a_service/step_1_repositories#Credentials"},"accessing\nprivate repositories in Step 1"),", we only\nsupport for the time being credentials defined in the Jenkins service.\nHowever, there is a workaround to save time if you just want to test the push\nprocess out. This implies using a catch-all credential that will push the\nresultant image to the EOSC-Synergy organization at Docker Hub.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is present at the root of the repository, you still need\nto set the value in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile Location"),". This is due to the fact that\nboth the ",(0,o.kt)("em",{parentName:"p"},"context")," (directory name) and ",(0,o.kt)("em",{parentName:"p"},"dockerfile")," (file name) values are\ntaken from such value."))),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/tooling_build.gif"})),(0,o.kt)("h3",{id:"advanced-options"},"Advanced options"),(0,o.kt)("p",null,"Through the Advanced options section, the Tooling view offers a more detailed\nconfiguration of some of the Docker parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Hostname")," is the equivalent of\n",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/compose-file/compose-file-v3/#domainname-hostname-ipc-mac_address-privileged-read_only-shm_size-stdin_open-tty-user-working_dir"},"Docker Compose's ",(0,o.kt)("inlineCode",{parentName:"a"},"hostname")," property"),",\nwhich sets the container hostname so it can be reached from other containers."),(0,o.kt)("li",{parentName:"ul"},"Volumes:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Volume Type")," refers to the type of the volume. Currently, ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/storage/bind-mounts/"},"only ",(0,o.kt)("inlineCode",{parentName:"a"},"bind")," is\nsupported"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Volume Source")," specifies the source path of the volume (for named volumes,\nthe name of the volume shall be used)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Volume Target")," points to the destination path where the directory will be\nmounted in the container.")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can add as many volumes as you need. Remember to click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Volume"),"\nbutton for each defined volume."))))}m.isMDXComponent=!0}}]);