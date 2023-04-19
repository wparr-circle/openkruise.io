"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[2160],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),k=r,c=d["".concat(u,".").concat(k)]||d[k]||p[k]||l;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={},u="Installation",s={unversionedId:"installation",id:"installation",title:"Installation",description:"Requirements",source:"@site/kruisegame/installation.md",sourceDirName:".",slug:"/installation",permalink:"/kruisegame/installation",draft:!1,tags:[],version:"current",lastUpdatedBy:"skkkkkkk",lastUpdatedAt:1681291192,formattedLastUpdatedAt:"4/12/2023",frontMatter:{},sidebar:"kruisegame",previous:{title:"Introduction",permalink:"/kruisegame/introduction"},next:{title:"Design Concept",permalink:"/kruisegame/design-concept"}},m={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Install Kruise",id:"install-kruise",level:2},{value:"Install Kruise-Game",id:"install-kruise-game",level:2},{value:"Optional: install/upgrade with customized configurations",id:"optional-installupgrade-with-customized-configurations",level:2},{value:"Optional: the local image for China",id:"optional-the-local-image-for-china",level:3},{value:"Uninstall",id:"uninstall",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}],d={toc:p};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"Install Kubernetes Cluster, requires ",(0,l.kt)("strong",{parentName:"p"},"Kubernetes version >= 1.16"),"."),(0,l.kt)("h2",{id:"install-kruise"},"Install Kruise"),(0,l.kt)("p",null,"We recommend that you use Helm V3.5 or later to install Kruise."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Firstly add openkruise charts repository if you haven't do this.\n$ helm repo add openkruise https://openkruise.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Install the latest version.\n$ helm install kruise openkruise/kruise --version 1.4.0\n")),(0,l.kt)("h2",{id:"install-kruise-game"},"Install Kruise-Game"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ helm install kruise-game openkruise/kruise-game --version 0.2.1\n")),(0,l.kt)("h2",{id:"optional-installupgrade-with-customized-configurations"},"Optional: install/upgrade with customized configurations"),(0,l.kt)("p",null,"The following table lists the configurable parameters of the kruise-game chart and their default values."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"installation.namespace")),(0,l.kt)("td",{parentName:"tr",align:null},"Namespace for kruise-game operation installation"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kruise-game-system"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"installation.createNamespace")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to create the installation.namespace"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kruiseGame.fullname")),(0,l.kt)("td",{parentName:"tr",align:null},"Nick name for kruise-game deployment and other configurations"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kruise-game-controller-manager"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kruiseGame.healthBindPort")),(0,l.kt)("td",{parentName:"tr",align:null},"Port for checking health of kruise-game container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"8082"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kruiseGame.webhook.port")),(0,l.kt)("td",{parentName:"tr",align:null},"Port of webhook served by kruise-game container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"443"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kruiseGame.webhook.targetPort")),(0,l.kt)("td",{parentName:"tr",align:null},"ObjectSelector for workloads in MutatingWebhookConfigurations"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"9876"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"replicaCount")),(0,l.kt)("td",{parentName:"tr",align:null},"Replicas of kruise-game deployment"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"image.repository")),(0,l.kt)("td",{parentName:"tr",align:null},"Repository for kruise-game image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"openkruise/kruise-game-manager"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"image.tag")),(0,l.kt)("td",{parentName:"tr",align:null},"Tag for kruise-game image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"v0.2.1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"image.pullPolicy")),(0,l.kt)("td",{parentName:"tr",align:null},"ImagePullPolicy for kruise-game container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Always"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"serviceAccount.annotations")),(0,l.kt)("td",{parentName:"tr",align:null},"The annotations for serviceAccount of kruise-game"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"}," "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resources.limits.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource limit of kruise-game container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"500m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resources.limits.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource limit of kruise-game container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1Gi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resources.requests.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource request of kruise-game container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resources.requests.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource request of kruise-game container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"64Mi"))))),(0,l.kt)("p",null,"Specify each parameter using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"helm install"),". For example,"),(0,l.kt)("h3",{id:"optional-the-local-image-for-china"},"Optional: the local image for China"),(0,l.kt)("p",null,"If you are in China and have problem to pull image from official DockerHub, you can use the registry hosted on Alibaba Cloud:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm install kruise-game https://... --set image.repository=registry.cn-hangzhou.aliyuncs.com/acs/kruise-game-manager:v0.2.1\n...\n")),(0,l.kt)("h2",{id:"uninstall"},"Uninstall"),(0,l.kt)("p",null,"Note that this will lead to all resources created by kruise-game, including webhook configurations, services, namespace, CRDs and CR instances kruise-game controller, to be deleted!"),(0,l.kt)("p",null,"Please do this ONLY when you fully understand the consequence."),(0,l.kt)("p",null,"To uninstall kruise-game if it is installed with helm charts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm uninstall kruise-game\nrelease "kruise-game" uninstalled\n')),(0,l.kt)("h2",{id:"whats-next"},"What's Next"),(0,l.kt)("p",null,"Here are some recommended next steps:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Learn kruise-game's ",(0,l.kt)("a",{parentName:"li",href:"/kruisegame/user-manuals/deploy-gameservers"},"Deploy GameServers"),".")))}k.isMDXComponent=!0}}]);