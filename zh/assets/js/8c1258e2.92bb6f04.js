"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[6337],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return t?a.createElement(f,l(l({ref:n},u),{},{components:t})):a.createElement(f,l({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1947:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],o={},c="\u6e38\u620f\u670d\u6c34\u5e73\u4f38\u7f29",s={unversionedId:"user-manuals/gameservers-scale",id:"user-manuals/gameservers-scale",title:"\u6e38\u620f\u670d\u6c34\u5e73\u4f38\u7f29",description:"OpenKruiseGame\u7684\u4f38\u7f29\u7279\u6027",source:"@site/i18n/zh/docusaurus-plugin-content-docs-kruisegame/current/user-manuals/gameservers-scale.md",sourceDirName:"user-manuals",slug:"/user-manuals/gameservers-scale",permalink:"/zh/kruisegame/user-manuals/gameservers-scale",draft:!1,tags:[],version:"current",lastUpdatedBy:"skkkkkkk",lastUpdatedAt:1681291192,formattedLastUpdatedAt:"2023/4/12",frontMatter:{},sidebar:"kruisegame",previous:{title:"\u6e38\u620f\u670d\u66f4\u65b0\u7b56\u7565",permalink:"/zh/kruisegame/user-manuals/update-strategy"},next:{title:"\u5bb9\u5668\u542f\u52a8\u987a\u5e8f\u63a7\u5236",permalink:"/zh/kruisegame/user-manuals/container-startup-sequence-control"}},u={},p=[{value:"OpenKruiseGame\u7684\u4f38\u7f29\u7279\u6027",id:"openkruisegame\u7684\u4f38\u7f29\u7279\u6027",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u914d\u7f6e\u6e38\u620f\u670d\u7684\u81ea\u52a8\u4f38\u7f29",id:"\u914d\u7f6e\u6e38\u620f\u670d\u7684\u81ea\u52a8\u4f38\u7f29",level:2},{value:"HPA\u793a\u4f8b",id:"hpa\u793a\u4f8b",level:3}],m={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6e38\u620f\u670d\u6c34\u5e73\u4f38\u7f29"},"\u6e38\u620f\u670d\u6c34\u5e73\u4f38\u7f29"),(0,i.kt)("h2",{id:"openkruisegame\u7684\u4f38\u7f29\u7279\u6027"},"OpenKruiseGame\u7684\u4f38\u7f29\u7279\u6027"),(0,i.kt)("p",null,"OKG\u63d0\u4f9b\u6e38\u620f\u670d\u72b6\u6001\u8bbe\u7f6e\u7684\u80fd\u529b\uff0c\u60a8\u53ef\u4ee5\u624b\u52a8/\u81ea\u52a8(\u670d\u52a1\u8d28\u91cf\u529f\u80fd)\u5730\u8bbe\u7f6e\u6e38\u620f\u670d\u7684\u8fd0\u7ef4\u72b6\u6001\u6216\u5220\u9664\u4f18\u5148\u7ea7\u3002\u5f53\u7f29\u5bb9\u65f6\uff0cGameServerSet\u8d1f\u8f7d\u4f1a\u6839\u636e\u6e38\u620f\u670d\u7684\u72b6\u6001\u8fdb\u884c\u7f29\u5bb9\u9009\u62e9\uff0c\u7f29\u5bb9\u89c4\u5219\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,"1\uff09\u6839\u636e\u6e38\u620f\u670d\u7684opsState\u7f29\u5bb9\u3002\u6309\u987a\u5e8f\u4f9d\u6b21\u7f29\u5bb9opsState\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"WaitToBeDeleted"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"None"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Maintaining"),"\u7684\u6e38\u620f\u670d"),(0,i.kt)("p",null,"2\uff09\u5f53opsState\u76f8\u540c\u65f6\uff0c\u6309\u7167DeletionPriority(\u5220\u9664\u4f18\u5148\u7ea7)\u7f29\u5bb9\uff0c\u4f18\u5148\u5220\u9664DeletionPriority\u5927\u7684\u6e38\u620f\u670d"),(0,i.kt)("p",null,"3\uff09\u5f53opsState\u4e0eDeletionPriority\u90fd\u76f8\u540c\u65f6\uff0c\u4f18\u5148\u5220\u9664\u540d\u79f0\u5c3e\u90e8\u5e8f\u53f7\u8f83\u5927\u7684\u6e38\u620f\u670d"),(0,i.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("p",null,"\u90e8\u7f72\u4e00\u4e2a\u526f\u672c\u4e3a5\u7684\u6e38\u620f\u670d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<EOF | kubectl apply -f -\napiVersion: game.kruise.io/v1alpha1\nkind: GameServerSet\nmetadata:\n  name: minecraft\n  namespace: default\nspec:\n  replicas: 5\n  updateStrategy:\n    rollingUpdate:\n      podUpdatePolicy: InPlaceIfPossible\n  gameServerTemplate:\n    spec:\n      containers:\n        - image: registry.cn-hangzhou.aliyuncs.com/acs/minecraft-demo:1.12.2\n          name: minecraft\nEOF\n")),(0,i.kt)("p",null,"\u751f\u62105\u4e2aGameServer\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get gs\nNAME          STATE   OPSSTATE   DP    UP\nminecraft-0   Ready   None       0     0\nminecraft-1   Ready   None       0     0\nminecraft-2   Ready   None       0     0\nminecraft-3   Ready   None       0     0\nminecraft-4   Ready   None       0     0\n")),(0,i.kt)("p",null,"\u5bf9minecraft-2\u8bbe\u7f6e\u5220\u9664\u4f18\u5148\u7ea7\u4e3a10\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit gs minecraft-2\n\n...\nspec:\n  deletionPriority: 10 #\u521d\u59cb\u4e3a0\uff0c\u8c03\u5927\u523010\n  opsState: None\n  updatePriority: 0\n...\n")),(0,i.kt)("p",null,"\u624b\u52a8\u7f29\u5bb9\u52304\u4e2a\u526f\u672c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl scale gss minecraft --replicas=4\ngameserverset.game.kruise.io/minecraft scale\n")),(0,i.kt)("p",null,"\u6e38\u620f\u670d\u7684\u6570\u76ee\u6700\u7ec8\u53d8\u4e3a4\uff0c\u53ef\u4ee5\u770b\u52302\u53f7\u6e38\u620f\u670d\u56e0\u4e3a\u5220\u9664\u4f18\u5148\u7ea7\u6700\u5927\u6240\u4ee5\u88ab\u5220\u9664\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get gs\nNAME          STATE      OPSSTATE   DP    UP\nminecraft-0   Ready      None       0     0\nminecraft-1   Ready      None       0     0\nminecraft-2   Deleting   None       10    0\nminecraft-3   Ready      None       0     0\nminecraft-4   Ready      None       0     0\n\n# After a while\n...\n\nkubectl get gs\nNAME          STATE   OPSSTATE   DP    UP\nminecraft-0   Ready   None       0     0\nminecraft-1   Ready   None       0     0\nminecraft-3   Ready   None       0     0\nminecraft-4   Ready   None       0     0\n")),(0,i.kt)("p",null,"\u8bbe\u7f6eminecraft-3\u7684opsState\u4e3aWaitToBeDeleted\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit gs minecraft-3\n\n...\nspec:\n  deletionPriority: 0 \n  opsState: WaitToBeDeleted #\u521d\u59cb\u4e3aNone, \u5c06\u5176\u6539\u4e3aWaitToBeDeleted\n  updatePriority: 0\n...\n")),(0,i.kt)("p",null,"\u624b\u52a8\u7f29\u5bb9\u52303\u4e2a\u526f\u672c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl scale gss minecraft --replicas=3\ngameserverset.game.kruise.io/minecraft scaled\n")),(0,i.kt)("p",null,"\u6e38\u620f\u670d\u7684\u6570\u76ee\u6700\u7ec8\u53d8\u4e3a3\uff0c\u53ef\u4ee5\u770b\u52303\u53f7\u6e38\u620f\u670d\u56e0\u4e3a\u5904\u4e8eWaitToBeDeleted\u72b6\u6001\u6240\u4ee5\u88ab\u5220\u9664\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get gs\nNAME          STATE      OPSSTATE          DP    UP\nminecraft-0   Ready      None              0     0\nminecraft-1   Ready      None              0     0\nminecraft-3   Deleting   WaitToBeDeleted   0     0\nminecraft-4   Ready      None              0     0\n\n# After a while\n...\n\nkubectl get gs\nNAME          STATE   OPSSTATE   DP    UP\nminecraft-0   Ready   None       0     0\nminecraft-1   Ready   None       0     0\nminecraft-4   Ready   None       0     0\n")),(0,i.kt)("p",null,"\u624b\u52a8\u6269\u5bb9\u56de5\u4e2a\u526f\u672c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl scale gss minecraft --replicas=5\ngameserverset.game.kruise.io/minecraft scaled\n")),(0,i.kt)("p",null,"\u6e38\u620f\u670d\u7684\u6570\u76ee\u6700\u7ec8\u53d8\u4e3a5\uff0c\u6b64\u65f6\u6269\u5bb9\u51fa\u7684\u6e38\u620f\u670d\u5e8f\u53f7\u4e3a2\u4e0e3\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get gs\nNAME          STATE   OPSSTATE   DP    UP\nminecraft-0   Ready   None       0     0\nminecraft-1   Ready   None       0     0\nminecraft-2   Ready   None       0     0\nminecraft-3   Ready   None       0     0\nminecraft-4   Ready   None       0     0\n")),(0,i.kt)("h2",{id:"\u914d\u7f6e\u6e38\u620f\u670d\u7684\u81ea\u52a8\u4f38\u7f29"},"\u914d\u7f6e\u6e38\u620f\u670d\u7684\u81ea\u52a8\u4f38\u7f29"),(0,i.kt)("p",null,"GameServerSet\u652f\u6301HPA\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u9ed8\u8ba4/\u81ea\u5b9a\u4e49\u6307\u6807\u914d\u7f6e"),(0,i.kt)("h3",{id:"hpa\u793a\u4f8b"},"HPA\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: minecraft-hpa\nspec:\n  scaleTargetRef:\n    apiVersion: game.kruise.io/v1alpha1\n    kind: GameServerSet\n    name: minecraft # GameServerSet\u5bf9\u5e94\u540d\u79f0\n  minReplicas: 1\n  maxReplicas: 10\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      target:\n        type: Utilization\n        averageUtilization: 50 # \u793a\u4f8b\u4ee5cpu\u5229\u7528\u738750%\u4e3a\u8ba1\u7b97\u6807\u51c6\n")))}d.isMDXComponent=!0}}]);