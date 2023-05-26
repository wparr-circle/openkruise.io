"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[7278],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return s}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),k=p(n),s=r,N=k["".concat(u,".").concat(s)]||k[s]||d[s]||l;return n?a.createElement(N,i(i({ref:t},o),{},{components:n})):a.createElement(N,i({ref:t},o))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var m={};for(var u in t)hasOwnProperty.call(t,u)&&(m[u]=t[u]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5947:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],m={},u="\u5b89\u88c5",p={unversionedId:"installation",id:"installation",title:"\u5b89\u88c5",description:"\u5b89\u88c5OpenKruiseGame\u9700\u5b89\u88c5Kruise\u4e0eKruise-Game\uff0c\u4e14\u8981\u6c42 Kubernetes\u7248\u672c >= 1.16",source:"@site/i18n/zh/docusaurus-plugin-content-docs-kruisegame/current/installation.md",sourceDirName:".",slug:"/installation",permalink:"/zh/kruisegame/installation",draft:!1,tags:[],version:"current",lastUpdatedBy:"skkkkkkk",lastUpdatedAt:1685069311,formattedLastUpdatedAt:"2023/5/26",frontMatter:{},sidebar:"kruisegame",previous:{title:"OpenKruiseGame\u7b80\u4ecb",permalink:"/zh/kruisegame/introduction"},next:{title:"\u8bbe\u8ba1\u7406\u5ff5",permalink:"/zh/kruisegame/design-concept"}},o={},d=[{value:"\u5b89\u88c5Kruise",id:"\u5b89\u88c5kruise",level:2},{value:"\u5b89\u88c5Kruise-Game",id:"\u5b89\u88c5kruise-game",level:4},{value:"\u53ef\u9009\uff1a\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u5b89\u88c5/\u5347\u7ea7",id:"\u53ef\u9009\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u5b89\u88c5\u5347\u7ea7",level:4},{value:"\u53ef\u9009\uff1a\u4e2d\u56fd\u5730\u533a\u7684\u955c\u50cf",id:"\u53ef\u9009\u4e2d\u56fd\u5730\u533a\u7684\u955c\u50cf",level:4},{value:"\u5378\u8f7d",id:"\u5378\u8f7d",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}],k={toc:d};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("p",null,"\u5b89\u88c5OpenKruiseGame\u9700\u5b89\u88c5Kruise\u4e0eKruise-Game\uff0c\u4e14\u8981\u6c42 Kubernetes\u7248\u672c >= 1.16"),(0,l.kt)("h2",{id:"\u5b89\u88c5kruise"},"\u5b89\u88c5Kruise"),(0,l.kt)("p",null,"\u5efa\u8bae\u91c7\u7528 helm v3.5+ \u6765\u5b89\u88c5 Kruise"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Firstly add openkruise charts repository if you haven't do this.\n$ helm repo add openkruise https://openkruise.github.io/charts/\n\n# [Optional]\n$ helm repo update\n\n# Install the latest version.\n$ helm install kruise openkruise/kruise --version 1.4.0\n")),(0,l.kt)("p",null,"\xb7"),(0,l.kt)("h4",{id:"\u5b89\u88c5kruise-game"},"\u5b89\u88c5Kruise-Game"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ helm install kruise-game openkruise/kruise-game --version 0.3.0\n")),(0,l.kt)("h4",{id:"\u53ef\u9009\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u5b89\u88c5\u5347\u7ea7"},"\u53ef\u9009\uff1a\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u5b89\u88c5/\u5347\u7ea7"),(0,l.kt)("p",null,"\u4e0b\u8868\u5217\u51fa\u4e86 kruise-game \u7684\u53ef\u914d\u7f6e\u53c2\u6570\u53ca\u5176\u9ed8\u8ba4\u503c\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"installation.namespace")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-game \u5b89\u88c5\u5230\u7684 namespace\uff0c\u4e00\u822c\u4e0d\u5efa\u8bae\u4fee\u6539"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kruise-game-system"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"installation.createNamespace")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u9700\u8981\u521b\u5efa\u4e0a\u8ff0 namespace\uff0c\u4e00\u822c\u4e0d\u5efa\u8bae\u4fee\u6539\uff0c\u9664\u975e\u6307\u5b9a\u5b89\u88c5\u5230\u5df2\u6709\u7684 ns \u4e2d"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kruiseGame.fullname")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-game \u90e8\u7f72\u548c\u5176\u4ed6\u914d\u7f6e\u7684\u540d\u79f0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kruise-game-controller-manager"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kruiseGame.healthBindPort")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u68c0\u67e5 kruise-game \u5bb9\u5668\u5065\u5eb7\u68c0\u67e5\u7684\u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"8082"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kruiseGame.webhook.port")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-game \u5bb9\u5668\u670d\u52a1\u7684 webhook \u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"443"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kruiseGame.webhook.targetPort")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e MutatingWebhookConfigurations \u4e2d\u5de5\u4f5c\u8d1f\u8f7d\u7684 ObjectSelector"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"9876"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"replicaCount")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-game \u7684\u671f\u671b\u526f\u672c\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"image.repository")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-game \u7684\u955c\u50cf\u4ed3\u5e93"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"openkruise/kruise-game-manager"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"image.tag")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-game \u7684\u955c\u50cf\u7248\u672c"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"v0.2.1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"image.pullPolicy")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-game \u7684\u955c\u50cf\u62c9\u53d6\u7b56\u7565"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Always"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"serviceAccount.annotations")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-game\u7684serviceAccount\u6ce8\u89e3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"}," "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resources.limits.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-game\u5bb9\u5668\u7684CPU\u8d44\u6e90\u9650\u5236"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"500m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resources.limits.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-game\u5bb9\u5668\u7684\u5185\u5b58\u8d44\u6e90\u9650\u5236"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1Gi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resources.requests.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-game\u5bb9\u5668\u7684CPU\u8d44\u6e90\u8bf7\u6c42"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"resources.requests.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"kruise-game\u5bb9\u5668\u7684\u5185\u5b58\u8d44\u6e90\u8bf7\u6c42"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"64Mi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"prometheus.enabled")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u521b\u5efa\u6307\u6807\u76d1\u63a7\u670d\u52a1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"prometheus.monitorService.port")),(0,l.kt)("td",{parentName:"tr",align:null},"monitorService\u7684\u76d1\u542c\u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"8080"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scale.service.port")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f38\u7f29\u670d\u52a1\u76d1\u542c\u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"6000"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"scale.service.targetPort")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f38\u7f29\u670d\u52a1\u76ee\u6807\u7aef\u53e3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"6000"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"network.totalWaitTime")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b49\u5f85\u7f51\u7edcReady\u7684\u6700\u957f\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u79d2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"60"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"network.probeIntervalTime")),(0,l.kt)("td",{parentName:"tr",align:null},"\u63a2\u6d4b\u7f51\u7edc\u72b6\u6001\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\u662f\u79d2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"5"))))),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," \u53c2\u6570\u6307\u5b9a\u6bcf\u4e2a\u53c2\u6570\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"helm install"),",\u4f8b\u5982,"),(0,l.kt)("h4",{id:"\u53ef\u9009\u4e2d\u56fd\u5730\u533a\u7684\u955c\u50cf"},"\u53ef\u9009\uff1a\u4e2d\u56fd\u5730\u533a\u7684\u955c\u50cf"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5728\u4e2d\u56fd\u5e76\u4e14\u65e0\u6cd5\u4ece\u5b98\u65b9 DockerHub \u62c9\u53d6\u955c\u50cf\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6258\u7ba1\u5728\u963f\u91cc\u4e91\u4e0a\u7684\u955c\u50cf:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm install kruise-game https://... --set image.repository=registry.cn-hangzhou.aliyuncs.com/acs/kruise-game-manager:v0.2.1\n...\n")),(0,l.kt)("h2",{id:"\u5378\u8f7d"},"\u5378\u8f7d"),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u8fd9\u5c06\u5bfc\u81f4\u5220\u9664 kruise-game \u521b\u5efa\u7684\u6240\u6709\u8d44\u6e90\uff0c\u5305\u62ec webhook \u914d\u7f6e\u3001\u670d\u52a1\u3001\u547d\u540d\u7a7a\u95f4\u3001CRD \u548c CR \u5b9e\u4f8b kruise-game \u63a7\u5236\u5668\uff01\n\u8bf7\u4ec5\u5728\u60a8\u5b8c\u5168\u4e86\u89e3\u540e\u679c\u540e\u624d\u8fd9\u6837\u505a\u3002\n\u5982\u679c\u5b89\u88c5\u4e86 helm charts\uff0c\u5219\u5378\u8f7d kruise-game:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm uninstall kruise-game\nrelease "kruise-game" uninstalled\n')),(0,l.kt)("h2",{id:"whats-next"},"What's Next"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u63a8\u8350\u4f60:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e86\u89e3 kruise-game \u7684 ",(0,l.kt)("a",{parentName:"li",href:"/zh/kruisegame/user-manuals/deploy-gameservers"},"\u90e8\u7f72\u6e38\u620f\u670d"),".")))}s.isMDXComponent=!0}}]);