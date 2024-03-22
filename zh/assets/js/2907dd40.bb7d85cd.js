"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[3003],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},344:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Job Sidecar Terminator"},u=void 0,c={unversionedId:"user-manuals/jobsidecarterminator",id:"user-manuals/jobsidecarterminator",title:"Job Sidecar Terminator",description:"FEATURE STATE: Kruise v1.4.0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-manuals/jobsidecarterminator.md",sourceDirName:"user-manuals",slug:"/user-manuals/jobsidecarterminator",permalink:"/zh/docs/next/user-manuals/jobsidecarterminator",draft:!1,editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/jobsidecarterminator.md",tags:[],version:"current",lastUpdatedBy:"berg",lastUpdatedAt:1711105168,formattedLastUpdatedAt:"2024/3/22",frontMatter:{title:"Job Sidecar Terminator"},sidebar:"docs",previous:{title:"SidecarSet",permalink:"/zh/docs/next/user-manuals/sidecarset"},next:{title:"Container Launch Priority",permalink:"/zh/docs/next/user-manuals/containerlaunchpriority"}},s={},p=[{value:"\u4f7f\u7528\u524d\u63d0",id:"\u4f7f\u7528\u524d\u63d0",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u5bf9\u4e8e\u8fd0\u884c\u4e8e\u666e\u901a\u8282\u70b9\u7684 Pod",id:"\u5bf9\u4e8e\u8fd0\u884c\u4e8e\u666e\u901a\u8282\u70b9\u7684-pod",level:3},{value:"\u5bf9\u4e8e\u8fd0\u884c\u4e8e\u865a\u62df\u8282\u70b9\u7684 Pod",id:"\u5bf9\u4e8e\u8fd0\u884c\u4e8e\u865a\u62df\u8282\u70b9\u7684-pod",level:3},{value:"\u6b65\u9aa4\u4e00: \u51c6\u5907\u4e00\u4e2a\u5feb\u901f\u9000\u51fa\u955c\u50cf",id:"\u6b65\u9aa4\u4e00-\u51c6\u5907\u4e00\u4e2a\u5feb\u901f\u9000\u51fa\u955c\u50cf",level:4},{value:"\u6b65\u9aa4\u4e8c: \u914d\u7f6e\u4f60\u7684 sidecar \u5bb9\u5668",id:"\u6b65\u9aa4\u4e8c-\u914d\u7f6e\u4f60\u7684-sidecar-\u5bb9\u5668",level:4},{value:"\u5ffd\u7565 Sidecar \u5bb9\u5668\u9000\u51fa\u7801\u975e0",id:"\u5ffd\u7565-sidecar-\u5bb9\u5668\u9000\u51fa\u7801\u975e0",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v1.4.0"),(0,i.kt)("p",null,"\u5bf9\u4e8e Job \u7c7b\u578b\u7684 Workload\uff0c\u6211\u4eec\u901a\u5e38\u5e0c\u671b\u5f53\u8fd9\u4e9b Pod \u4e2d\u6267\u884c\u4e1a\u52a1\u903b\u8f91\u7684\u4e3b\u5bb9\u5668\u5b8c\u6210\u4efb\u52a1\u5e76\u9000\u51fa\u540e\uff0c\u65e5\u5fd7\u6536\u96c6\u7b49 sidecar \u5bb9\u5668\u4e5f\u80fd\u591f\u4e3b\u52a8\u9000\u51fa\uff0c\u4ece\u800c\u4f7f\u5f97\u8fd9\u4e9b Job Controller \u80fd\u591f\u6b63\u786e\u5224\u65ad Pod \u6240\u5904\u7684\u5b8c\u6210\u72b6\u6001\uff0c\u907f\u514d\u4e00\u4e9b\u9519\u8bef\u7684\u4fe1\u606f\u4e0a\u62a5\u548c\u6d41\u7a0b\u5f02\u5e38\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u5728 Kruise \u4e2d\u52a0\u5165\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"SidecarTerminator")," \u7684\u63a7\u5236\u5668\uff0c\u4e13\u95e8\u7528\u4e8e\u5728\u6b64\u7c7b\u573a\u666f\u4e0b\uff0c\u76d1\u542c\u4e3b\u5bb9\u5668\u7684\u5b8c\u6210\u72b6\u6001\uff0c\u5e76\u9009\u62e9\u5408\u9002\u7684\u65f6\u673a\u7ec8\u6b62\u6389 Pod \u4e2d\u7684 sidecar \u5bb9\u5668\uff0c\u800c\u4e14\u65e0\u9700\u5bf9\u4e1a\u52a1\u8fdb\u884c\u4fb5\u5165\u5f0f\u6539\u9020\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528\u524d\u63d0"},"\u4f7f\u7528\u524d\u63d0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u5b89\u88c5\u6216\u5347\u7ea7 Kruise \u65f6\u542f\u7528 JobSidecarTerminator Feature-Gate\uff08\u9ed8\u8ba4\u5173\u95ed\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u5b89\u88c5\u6216\u5347\u7ea7 Kruise \u65f6\u542f\u7528 KruiseDaemon Feature-Gate\uff08\u9ed8\u8ba4\u5f00\u542f\uff09\u3002")),(0,i.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,i.kt)("h3",{id:"\u5bf9\u4e8e\u8fd0\u884c\u4e8e\u666e\u901a\u8282\u70b9\u7684-pod"},"\u5bf9\u4e8e\u8fd0\u884c\u4e8e\u666e\u901a\u8282\u70b9\u7684 Pod"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u8fd0\u884c\u4e8e\u666e\u901a\u8282\u70b9\u7684 Pod\uff0c\u4f7f\u7528\u8be5\u7279\u6027\u975e\u5e38\u7b80\u5355\uff0c\u7528\u6237\u53ea\u9700\u8981\u5728\u8981\u5728\u76ee\u6807 sidecar \u5bb9\u5668\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u7279\u6b8a\u7684 env \u5bf9\u5176\u8fdb\u884c\u6807\u8bc6\uff0c\u63a7\u5236\u5668\u4f1a\u5728\u6070\u5f53\u7684\u65f6\u673a\u5229\u7528 Kruise Daemon \u63d0\u4f9b\u7684 ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/next/user-manuals/containerrecreaterequest"},"CRR")," \u7684\u80fd\u529b\uff0c\u5c06\u8fd9\u4e9b sidecar \u5bb9\u5668\u7ec8\u6b62\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: Job\nspec:\n  template:\n    spec:\n      containers:\n        - name: sidecar\n          env:\n            - name: KRUISE_TERMINATE_SIDECAR_WHEN_JOB_EXIT\n              value: "true"\n        - name: main\n... ...\n')),(0,i.kt)("h3",{id:"\u5bf9\u4e8e\u8fd0\u884c\u4e8e\u865a\u62df\u8282\u70b9\u7684-pod"},"\u5bf9\u4e8e\u8fd0\u884c\u4e8e\u865a\u62df\u8282\u70b9\u7684 Pod"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e9b\u63d0\u4f9b Serverless \u5bb9\u5668\u7684\u5e73\u53f0\uff0c\u4f8b\u5982 ",(0,i.kt)("a",{parentName:"p",href:"https://www.aliyun.com/product/eci"},"ECI")," \u6216\u8005 ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/cn/fargate/"},"Fargate"),", \u5176 Pods \u53ea\u80fd\u8fd0\u884c\u4e8e ",(0,i.kt)("a",{parentName:"p",href:"https://virtual-kubelet.io/#:~:text=Virtual%20Kubelet%20is%20an%20open,as%20serverless%20cloud%20container%20platforms."},"Virtual-Kubelet")," \u4e4b\u7c7b\u7684\u865a\u62df\u8282\u70b9\u3002 \u7136\u800c\uff0cKruise Daemon \u65e0\u6cd5\u90e8\u7f72\u548c\u5de5\u4f5c\u5728\u8fd9\u4e9b\u865a\u62df\u8282\u70b9\u4e4b\u4e0a\uff0c\u5bfc\u81f4\u65e0\u6cd5\u4f7f\u7528 CRR \u80fd\u529b\u5c06\u5bb9\u5668\u7ec8\u6b62\u3002\n\u4f46\u5e78\u8fd0\u5730\u662f\uff0c\u6211\u4eec\u53ef\u4ee5\u501f\u52a9\u539f\u751f Kubernetes \u63d0\u4f9b\u7684 Pod \u539f\u5730\u5347\u7ea7\u673a\u5236\u6765\u8fbe\u5230\u540c\u6837\u7684\u76ee\u7684\uff1a\u53ea\u9700\u8981\u6784\u9020\u4e00\u4e2a\u7279\u6b8a\u955c\u50cf\uff0c\u8fd9\u4e2a\u955c\u50cf\u7684\u552f\u4e00\u4f5c\u7528\u5c31\u662f\u5f53\u88ab\u62c9\u8d77\u540e\uff0c\u4f1a\u5feb\u901f\u5730\u4e3b\u52a8\u9000\u51fa\uff0c\u8fd9\u6837\u4e00\u6765\uff0c\u53ea\u9700\u8981\u5728\u9000\u51fa sidecar \u65f6\uff0c\u5c06\u539f\u672c\u7684 sidecar \u955c\u50cf\u66ff\u6362\u4e3a\u5feb\u901f\u9000\u51fa\u955c\u50cf\uff0c\u5373\u53ef\u8fbe\u5230\u9000\u51fa sidecar \u7684\u76ee\u7684\u3002"),(0,i.kt)("h4",{id:"\u6b65\u9aa4\u4e00-\u51c6\u5907\u4e00\u4e2a\u5feb\u901f\u9000\u51fa\u955c\u50cf"},"\u6b65\u9aa4\u4e00: \u51c6\u5907\u4e00\u4e2a\u5feb\u901f\u9000\u51fa\u955c\u50cf"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8be5\u955c\u50cf\u53ea\u9700\u8981\u5177\u5907\u975e\u5e38\u7b80\u5355\u7684\u903b\u8f91\uff1a\u5f53\u5176\u88ab\u62c9\u8d77\u540e\uff0c\u76f4\u63a5\u9000\u51fa\uff0c\u4e14\u9000\u51fa\u7801\u4e3a 0\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8be5\u955c\u50cf\u9700\u8981\u517c\u5bb9\u539f sidecar \u955c\u50cf\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"commands")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"args"),"\uff0c\u4ee5\u9632\u5bb9\u5668\u88ab\u62c9\u8d77\u65f6\u62a5\u9519\u3002")),(0,i.kt)("h4",{id:"\u6b65\u9aa4\u4e8c-\u914d\u7f6e\u4f60\u7684-sidecar-\u5bb9\u5668"},"\u6b65\u9aa4\u4e8c: \u914d\u7f6e\u4f60\u7684 sidecar \u5bb9\u5668"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: Job\nspec:\n  template:\n    spec:\n      containers:\n        - name: sidecar\n          env:\n            - name: KRUISE_TERMINATE_SIDECAR_WHEN_JOB_EXIT_WITH_IMAGE\n              value: "example/quick-exit:v1.0.0"\n        - name: main\n... ...\n')),(0,i.kt)("p",null," \u4f7f\u7528\u4f60\u81ea\u5df1\u51c6\u5907\u7684\u5feb\u901f\u9000\u51fa\u955c\u50cf\u6765\u66ff\u6362\u4e0a\u8ff0 ",(0,i.kt)("inlineCode",{parentName:"p"},'"example/quick-exit:v1.0.0"'),"."),(0,i.kt)("h3",{id:"\u5ffd\u7565-sidecar-\u5bb9\u5668\u9000\u51fa\u7801\u975e0"},"\u5ffd\u7565 Sidecar \u5bb9\u5668\u9000\u51fa\u7801\u975e0"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v1.6.0"),(0,i.kt)("p",null,"\u5728\u4e4b\u524d\u7684\u7248\u672c\uff0c\u8981\u6c42 Sidecar \u5bb9\u5668\u80fd\u591f\u63a5\u53d7\u3001\u5904\u7406 ",(0,i.kt)("inlineCode",{parentName:"p"},"SIGTERM")," \u4fe1\u53f7\uff0c\u5e76\u4e14\u9000\u51fa\u7801\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"\u3002\u5426\u5219\uff0c\u5c06\u4f1a\u5bfc\u81f4 Pod Phase=Failed\u3002"),(0,i.kt)("p",null,"\u4ece Kruise 1.6.0 \u7248\u672c\u5f00\u59cb\uff0c\u5c06\u5ffd\u7565 Sidecar \u5bb9\u5668\u9000\u51fa\u7801 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u975e0")," \u7684\u60c5\u51b5\uff0cPod Phase \u72b6\u6001\u53ea\u4f9d\u8d56\u4e8e Main \u5bb9\u5668\u6210\u529f\u4e0e\u5426\u3002"),(0,i.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"sidecar \u5bb9\u5668\u5fc5\u987b\u80fd\u591f\u54cd\u5e94 ",(0,i.kt)("inlineCode",{parentName:"li"},"SIGTERM")," \u4fe1\u53f7\u3002\u5f53\u6536\u5230\u6b64\u4fe1\u53f7\u65f6\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"EntryPoint")," \u8fdb\u7a0b\u5fc5\u987b\u9000\u51fa(\u5373 sidecar \u5bb9\u5668\u9000\u51fa)\uff0c\u4e14\u9000\u51fa\u7801\u5e94\u5f53\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8be5\u7279\u6027\u9002\u7528\u4e8e\u4efb\u610f Job \u7c7b\u578b Workload \u6240\u7ba1\u7406\u7684 Pod\uff0c\u53ea\u8981\u5b83\u4eec\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"RestartPolicy")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"Never/OnFailure")," \u5373\u53ef\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5177\u6709\u73af\u5883\u53d8\u91cf ",(0,i.kt)("inlineCode",{parentName:"li"},"KRUISE_TERMINATE_SIDECAR_WHEN_JOB_EXIT")," \u7684\u5bb9\u5668\u5c06\u88ab\u89c6\u4e3a sidecar \u5bb9\u5668\uff0c\u5176\u4ed6\u5bb9\u5668\u5c06\u88ab\u89c6\u4e3a\u4e3b\u5bb9\u5668\uff0c\u5f53",(0,i.kt)("strong",{parentName:"li"},"\u6240\u6709"),"\u4e3b\u5bb9\u5668\u5b8c\u6210\u540e\uff0csidecar \u5bb9\u5668\u624d\u4f1a\u88ab\u7ec8\u6b62\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"Never"),' \u91cd\u542f\u7b56\u7565\u4e0b\uff0c\u4e3b\u5bb9\u5668\u4e00\u65e6\u9000\u51fa\uff0c\u5c06\u88ab\u89c6\u4e3a"\u5df2\u5b8c\u6210"\u3002'),(0,i.kt)("li",{parentName:"ul"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"OnFailure")," \u91cd\u542f\u7b56\u7565\u4e0b\uff0c\u4e3b\u5bb9\u5668\u9000\u51fa\u4ee3\u7801\u5fc5\u987b\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"0"),'\uff0c\u624d\u4f1a\u88ab\u89c6\u4e3a"\u5df2\u5b8c\u6210"\u3002'))),(0,i.kt)("li",{parentName:"ul"},"\u4e14\u8fd0\u884c\u5728\u666e\u901a\u8282\u70b9\u65b9\u5f0f\u4e0b\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"KRUISE_TERMINATE_SIDECAR_WHEN_JOB_EXIT")," \u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e",(0,i.kt)("inlineCode",{parentName:"li"},"KRUISE_TERMINATE_SIDECAR_WHEN_JOB_EXIT_WITH_IMAGE"))))}m.isMDXComponent=!0}}]);