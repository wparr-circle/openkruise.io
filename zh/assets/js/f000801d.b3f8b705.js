"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[1328],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4601:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],p={title:"OpenKruise \u7b80\u4ecb",slug:"/"},l="OpenKruise \u662f\u4ec0\u4e48",u={unversionedId:"introduction",id:"version-v0.10/introduction",isDocsHomePage:!1,title:"OpenKruise \u7b80\u4ecb",description:"\u6b22\u8fce\u6765\u5230 OpenKruise \u7684\u4e16\u754c\uff01",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.10/introduction.md",sourceDirName:".",slug:"/",permalink:"/zh/docs/",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/introduction.md",tags:[],version:"v0.10",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1636707625,formattedLastUpdatedAt:"2021/11/12",frontMatter:{title:"OpenKruise \u7b80\u4ecb",slug:"/"},sidebar:"version-v0.10/docs",next:{title:"\u5b89\u88c5",permalink:"/zh/docs/installation"}},s=[{value:"\u6838\u5fc3\u80fd\u529b",id:"\u6838\u5fc3\u80fd\u529b",children:[],level:2},{value:"\u5173\u7cfb\u5bf9\u6bd4",id:"\u5173\u7cfb\u5bf9\u6bd4",children:[{value:"OpenKruise vs. Kubernetes",id:"openkruise-vs-kubernetes",children:[],level:3},{value:"OpenKruise vs. Platform-as-a-Service (PaaS)",id:"openkruise-vs-platform-as-a-service-paas",children:[],level:3}],level:2},{value:"What&#39;s Next",id:"whats-next",children:[],level:2}],c={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"openkruise-\u662f\u4ec0\u4e48"},"OpenKruise \u662f\u4ec0\u4e48"),(0,i.kt)("p",null,"\u6b22\u8fce\u6765\u5230 OpenKruise \u7684\u4e16\u754c\uff01"),(0,i.kt)("p",null,"OpenKruise \u662f\u4e00\u4e2a\u57fa\u4e8e Kubernetes \u7684\u6269\u5c55\u5957\u4ef6\uff0c\u4e3b\u8981\u805a\u7126\u4e8e\u4e91\u539f\u751f\u5e94\u7528\u7684\u81ea\u52a8\u5316\uff0c\u6bd4\u5982",(0,i.kt)("em",{parentName:"p"},"\u90e8\u7f72\u3001\u53d1\u5e03\u3001\u8fd0\u7ef4\u4ee5\u53ca\u53ef\u7528\u6027\u9632\u62a4"),"\u3002"),(0,i.kt)("p",null,"OpenKruise \u63d0\u4f9b\u7684\u7edd\u5927\u90e8\u5206\u80fd\u529b\u90fd\u662f\u57fa\u4e8e CRD \u6269\u5c55\u6765\u5b9a\u4e49\uff0c\u5b83\u4eec\u4e0d\u5b58\u5728\u4e8e\u4efb\u4f55\u5916\u90e8\u4f9d\u8d56\uff0c\u53ef\u4ee5\u8fd0\u884c\u5728\u4efb\u610f\u7eaf\u51c0\u7684 Kubernetes \u96c6\u7fa4\u4e2d\u3002"),(0,i.kt)("h2",{id:"\u6838\u5fc3\u80fd\u529b"},"\u6838\u5fc3\u80fd\u529b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u589e\u5f3a\u7248\u672c\u7684 Workloads")),(0,i.kt)("p",{parentName:"li"},"  OpenKruise \u5305\u542b\u4e86\u4e00\u7cfb\u5217\u589e\u5f3a\u7248\u672c\u7684 Workloads\uff08\u5de5\u4f5c\u8d1f\u8f7d\uff09\uff0c\u6bd4\u5982 CloneSet\u3001Advanced StatefulSet\u3001Advanced DaemonSet\u3001BroadcastJob \u7b49\u3002"),(0,i.kt)("p",{parentName:"li"},"  \u5b83\u4eec\u4e0d\u4ec5\u652f\u6301\u7c7b\u4f3c\u4e8e Kubernetes \u539f\u751f Workloads \u7684\u57fa\u7840\u529f\u80fd\uff0c\u8fd8\u63d0\u4f9b\u4e86\u5982\u539f\u5730\u5347\u7ea7\u3001\u53ef\u914d\u7f6e\u7684\u6269\u7f29\u5bb9/\u53d1\u5e03\u7b56\u7565\u3001\u5e76\u53d1\u64cd\u4f5c\u7b49\u3002"),(0,i.kt)("p",{parentName:"li"},"  \u5176\u4e2d\uff0c\u539f\u5730\u5347\u7ea7\u662f\u4e00\u79cd\u5347\u7ea7\u5e94\u7528\u5bb9\u5668\u955c\u50cf\u751a\u81f3\u73af\u5883\u53d8\u91cf\u7684\u5168\u65b0\u65b9\u5f0f\u3002\u5b83\u53ea\u4f1a\u7528\u65b0\u7684\u955c\u50cf\u91cd\u5efa Pod \u4e2d\u7684\u7279\u5b9a\u5bb9\u5668\uff0c\u6574\u4e2a Pod \u4ee5\u53ca\u5176\u4e2d\u7684\u5176\u4ed6\u5bb9\u5668\u90fd\u4e0d\u4f1a\u88ab\u5f71\u54cd\u3002\u56e0\u6b64\u5b83\u5e26\u6765\u4e86\u66f4\u5feb\u7684\u53d1\u5e03\u901f\u5ea6\uff0c\u4ee5\u53ca\u907f\u514d\u4e86\u5bf9\u5176\u4ed6 Scheduler\u3001CNI\u3001CSI \u7b49\u7ec4\u4ef6\u7684\u8d1f\u9762\u5f71\u54cd\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u5e94\u7528\u7684\u65c1\u8def\u7ba1\u7406")),(0,i.kt)("p",{parentName:"li"},"  OpenKruise \u63d0\u4f9b\u4e86\u591a\u79cd\u901a\u8fc7\u65c1\u8def\u7ba1\u7406\u5e94\u7528 sidecar \u5bb9\u5668\u3001\u591a\u533a\u57df\u90e8\u7f72\u7684\u65b9\u5f0f\uff0c\u201c\u65c1\u8def\u201d \u610f\u5473\u7740\u4f60\u53ef\u4ee5\u4e0d\u9700\u8981\u4fee\u6539\u5e94\u7528\u7684 Workloads \u6765\u5b9e\u73b0\u5b83\u4eec\u3002"),(0,i.kt)("p",{parentName:"li"},"  \u6bd4\u5982\uff0cSidecarSet \u80fd\u5e2e\u52a9\u4f60\u5728\u6240\u6709\u5339\u914d\u7684 Pod \u521b\u5efa\u7684\u65f6\u5019\u90fd\u6ce8\u5165\u7279\u5b9a\u7684 sidecar \u5bb9\u5668\uff0c\u751a\u81f3\u53ef\u4ee5\u539f\u5730\u5347\u7ea7\u5df2\u7ecf\u6ce8\u5165\u7684 sidecar \u5bb9\u5668\u955c\u50cf\u3001\u5e76\u4e14\u5bf9 Pod \u4e2d\u5176\u4ed6\u5bb9\u5668\u4e0d\u9020\u6210\u5f71\u54cd\u3002"),(0,i.kt)("p",{parentName:"li"},"  \u800c WorkloadSpread \u53ef\u4ee5\u7ea6\u675f\u65e0\u72b6\u6001 Workload \u6269\u5bb9\u51fa\u6765 Pod \u7684\u533a\u57df\u5206\u5e03\uff0c\u8d4b\u4e88\u5355\u4e00 workload \u7684\u591a\u533a\u57df\u548c\u5f39\u6027\u90e8\u7f72\u7684\u80fd\u529b\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u9ad8\u53ef\u7528\u6027\u9632\u62a4")),(0,i.kt)("p",{parentName:"li"},"  OpenKruise \u5728\u4e3a\u5e94\u7528\u7684\u9ad8\u53ef\u7528\u6027\u9632\u62a4\u65b9\u9762\u4e5f\u505a\u51fa\u4e86\u5f88\u591a\u52aa\u529b\u3002"),(0,i.kt)("p",{parentName:"li"},"  \u76ee\u524d\u5b83\u53ef\u4ee5\u4fdd\u62a4\u4f60\u7684 Kubernetes \u8d44\u6e90\u4e0d\u53d7\u7ea7\u8054\u5220\u9664\u673a\u5236\u7684\u5e72\u6270\uff0c\u5305\u62ec CRD\u3001Namespace\u3001\u4ee5\u53ca\u51e0\u4e4e\u5168\u90e8\u7684 Workloads \u7c7b\u578b\u8d44\u6e90\u3002"),(0,i.kt)("p",{parentName:"li"},"  \u76f8\u6bd4\u4e8e Kubernetes \u539f\u751f\u7684 PDB \u53ea\u63d0\u4f9b\u9488\u5bf9 Pod Eviction \u7684\u9632\u62a4\uff0cPodUnavailableBudget \u80fd\u591f\u9632\u62a4 Pod Deletion\u3001Eviction\u3001Update \u7b49\u8bb8\u591a\u79cd voluntary disruption \u573a\u666f\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u9ad8\u7ea7\u7684\u5e94\u7528\u8fd0\u7ef4\u80fd\u529b")),(0,i.kt)("p",{parentName:"li"},"  OpenKruise \u4e5f\u63d0\u4f9b\u4e86\u5f88\u591a\u9ad8\u7ea7\u7684\u8fd0\u7ef4\u80fd\u529b\u6765\u5e2e\u52a9\u4f60\u66f4\u597d\u5730\u7ba1\u7406\u5e94\u7528\u3002"),(0,i.kt)("p",{parentName:"li"},"  \u4f60\u53ef\u4ee5\u901a\u8fc7 ImagePullJob \u6765\u5728\u4efb\u610f\u8303\u56f4\u7684\u8282\u70b9\u4e0a\u9884\u5148\u62c9\u53d6\u67d0\u4e9b\u955c\u50cf\uff0c\u6216\u8005\u6307\u5b9a\u67d0\u4e2a Pod \u4e2d\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u5bb9\u5668\u88ab\u539f\u5730\u91cd\u542f\u3002"))),(0,i.kt)("h2",{id:"\u5173\u7cfb\u5bf9\u6bd4"},"\u5173\u7cfb\u5bf9\u6bd4"),(0,i.kt)("h3",{id:"openkruise-vs-kubernetes"},"OpenKruise vs. Kubernetes"),(0,i.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0cOpenKruise \u5bf9\u4e8e Kubernetes \u662f\u4e00\u4e2a\u8f85\u52a9\u6269\u5c55\u89d2\u8272\u3002"),(0,i.kt)("p",null,"Kubernetes \u81ea\u8eab\u5df2\u7ecf\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5e94\u7528\u90e8\u7f72\u7ba1\u7406\u7684\u529f\u80fd\uff0c\u6bd4\u5982\u4e00\u4e9b",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/"},"\u57fa\u7840\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002\n\u4f46\u5bf9\u4e8e\u5927\u89c4\u6a21\u5e94\u7528\u4e0e\u96c6\u7fa4\u7684\u573a\u666f\uff0c\u8fd9\u4e9b\u57fa\u7840\u529f\u80fd\u662f\u8fdc\u8fdc\u4e0d\u591f\u7684\u3002"),(0,i.kt)("p",null,"OpenKruise \u53ef\u4ee5\u88ab\u5f88\u5bb9\u6613\u5730\u5b89\u88c5\u5230\u4efb\u610f Kubernetes \u96c6\u7fa4\u4e2d\uff0c\u5b83\u5f25\u8865\u4e86 Kubernetes \u5728\u5e94\u7528\u90e8\u7f72\u3001\u5347\u7ea7\u3001\u9632\u62a4\u3001\u8fd0\u7ef4 \u7b49\u9886\u57df\u7684\u4e0d\u8db3\u3002"),(0,i.kt)("h3",{id:"openkruise-vs-platform-as-a-service-paas"},"OpenKruise vs. Platform-as-a-Service (PaaS)"),(0,i.kt)("p",null,"OpenKruise ",(0,i.kt)("strong",{parentName:"p"},"\u4e0d\u662f"),"\u4e00\u4e2a PaaS \u5e73\u53f0\uff0c\u5e76\u4e14\u4e5f",(0,i.kt)("strong",{parentName:"p"},"\u4e0d\u4f1a"),"\u63d0\u4f9b\u4efb\u4f55 PaaS \u5c42\u7684\u80fd\u529b\u3002"),(0,i.kt)("p",null,"\u5b83\u662f\u4e00\u4e2a Kubernetes \u7684\u6807\u51c6\u6269\u5c55\u5957\u4ef6\uff0c\u76ee\u524d\u5305\u62ec ",(0,i.kt)("inlineCode",{parentName:"p"},"kruise-manager")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"kruise-daemon")," \u4e24\u4e2a\u7ec4\u4ef6\u3002\nPaaS \u5e73\u53f0\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 OpenKruise \u63d0\u4f9b\u7684\u8fd9\u4e9b\u6269\u5c55\u529f\u80fd\uff0c\u6765\u4f7f\u5f97\u5e94\u7528\u90e8\u7f72\u3001\u7ba1\u7406\u6d41\u7a0b\u66f4\u52a0\u5f3a\u5927\u4e0e\u9ad8\u6548\u3002"),(0,i.kt)("h2",{id:"whats-next"},"What's Next"),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u63a8\u8350\u4f60\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5f00\u59cb ",(0,i.kt)("a",{parentName:"li",href:"./installation"},"\u5b89\u88c5\u4f7f\u7528 OpenKruise"),"."),(0,i.kt)("li",{parentName:"ul"},"\u4e86\u89e3 OpenKruise \u7684 ",(0,i.kt)("a",{parentName:"li",href:"core-concepts/architecture"},"\u7cfb\u7edf\u67b6\u6784"),".")))}d.isMDXComponent=!0}}]);