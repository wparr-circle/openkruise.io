"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[6035],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return p}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),d=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=d(e.components);return t.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},b=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=d(r),p=o,m=b["".concat(i,".").concat(p)]||b[p]||u[p]||a;return r?t.createElement(m,c(c({ref:n},s),{},{components:r})):t.createElement(m,c({ref:n},s))}));function p(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=b;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var d=2;d<a;d++)c[d]=r[d];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5837:function(e,n,r){r.r(n),r.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],l={title:"BroadcastJob + Advanced CronJob \u5b9a\u671f\u6e05\u7406\u8282\u70b9\u78c1\u76d8"},i=void 0,d={unversionedId:"best-practices/acronjob+broadcastjob",id:"version-v1.3/best-practices/acronjob+broadcastjob",title:"BroadcastJob + Advanced CronJob \u5b9a\u671f\u6e05\u7406\u8282\u70b9\u78c1\u76d8",description:"\u76f8\u8f83\u4e8e CPU\u3001\u5185\u5b58\u8fd9\u7c7b\u5177\u6709\u8f83\u9ad8\u7075\u6d3b\u6027\u7684\u8d44\u6e90\uff0c\u8282\u70b9\u78c1\u76d8\u5b58\u50a8\u53ef\u7528\u7a7a\u95f4\u5728 Kubernetes \u539f\u751f\u4f53\u7cfb\u4e2d\u57fa\u672c\u4e0a\u5904\u4e8e\u4e00\u79cd\u5355\u8c03\u9012\u51cf\u7684\u5bbf\u547d\uff0c\u78c1\u76d8\u538b\u529b\u68c0\u6d4b\u548c\u63a7\u5236\u6210\u4e3a\u8282\u70b9\u8fd0\u7ef4\u5fc5\u4e0d\u53ef\u5c11\u7684\u4e00\u73af\uff0c\u5426\u5219\u8fc7\u5927\u7684\u78c1\u76d8\u538b\u529b\u53ef\u80fd\u5bfc\u81f4\u8be5\u8282\u70b9\u65e0\u6cd5\u8c03\u5ea6\uff0c\u751a\u81f3\u5bfc\u81f4\u8282\u70b9\u4e0a\u7684 Pod \u88ab\u9a71\u9010\u7b49\u7b49\u4e00\u7cfb\u5217\u526f\u4f5c\u7528\uff0c\u5f71\u54cd\u96c6\u7fa4\u7684\u7a33\u5b9a\u6027\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.3/best-practices/acronjob+broadcastjob.md",sourceDirName:"best-practices",slug:"/best-practices/acronjob+broadcastjob",permalink:"/zh/docs/v1.3/best-practices/acronjob+broadcastjob",draft:!1,editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/best-practices/acronjob+broadcastjob.md",tags:[],version:"v1.3",lastUpdatedBy:"berg",lastUpdatedAt:1665303128,formattedLastUpdatedAt:"2022/10/9",frontMatter:{title:"BroadcastJob + Advanced CronJob \u5b9a\u671f\u6e05\u7406\u8282\u70b9\u78c1\u76d8"},sidebar:"docs",previous:{title:"\u57fa\u4e8eHPA\u7684\u6781\u81f4\u5f39\u6027\u8c03\u5ea6\u6700\u4f73\u5b9e\u8df5",permalink:"/zh/docs/v1.3/best-practices/elastic-deployment"},next:{title:"Golang client",permalink:"/zh/docs/v1.3/developer-manuals/go-client"}},s={},u=[{value:"\u73af\u5883\u8bf4\u660e",id:"\u73af\u5883\u8bf4\u660e",level:2},{value:"Advanced Cron Job \u914d\u7f6e",id:"advanced-cron-job-\u914d\u7f6e",level:2},{value:"\u955c\u50cf\u6784\u5efa",id:"\u955c\u50cf\u6784\u5efa",level:2},{value:"cleaner.sh \u811a\u672c\u793a\u4f8b",id:"cleanersh-\u811a\u672c\u793a\u4f8b",level:3},{value:"Dockerfile \u793a\u4f8b",id:"dockerfile-\u793a\u4f8b",level:3},{value:"\u6548\u679c\u5c55\u793a",id:"\u6548\u679c\u5c55\u793a",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],b={toc:u};function p(e){var n=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},b,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u76f8\u8f83\u4e8e CPU\u3001\u5185\u5b58\u8fd9\u7c7b\u5177\u6709\u8f83\u9ad8\u7075\u6d3b\u6027\u7684\u8d44\u6e90\uff0c\u8282\u70b9\u78c1\u76d8\u5b58\u50a8\u53ef\u7528\u7a7a\u95f4\u5728 Kubernetes \u539f\u751f\u4f53\u7cfb\u4e2d\u57fa\u672c\u4e0a\u5904\u4e8e\u4e00\u79cd\u5355\u8c03\u9012\u51cf\u7684\u5bbf\u547d\uff0c\u78c1\u76d8\u538b\u529b\u68c0\u6d4b\u548c\u63a7\u5236\u6210\u4e3a\u8282\u70b9\u8fd0\u7ef4\u5fc5\u4e0d\u53ef\u5c11\u7684\u4e00\u73af\uff0c\u5426\u5219\u8fc7\u5927\u7684\u78c1\u76d8\u538b\u529b\u53ef\u80fd\u5bfc\u81f4\u8be5\u8282\u70b9\u65e0\u6cd5\u8c03\u5ea6\uff0c\u751a\u81f3\u5bfc\u81f4\u8282\u70b9\u4e0a\u7684 Pod \u88ab\u9a71\u9010\u7b49\u7b49\u4e00\u7cfb\u5217\u526f\u4f5c\u7528\uff0c\u5f71\u54cd\u96c6\u7fa4\u7684\u7a33\u5b9a\u6027\u3002"),(0,a.kt)("p",null,"Kubernetes Job \u7684\u4f5c\u4e1a\u6a21\u5f0f\u663e\u7136\u975e\u5e38\u5408\u9002\u505a\u8fd9\u7c7b\u4e00\u6b21\u6027\u7684\u4e34\u65f6\u5de5\u4f5c\uff0c\u56e0\u4e3a\u5b83\u4e0d\u50cf\u5e38\u9a7b\u5bbf\u4e3b\u673a\u7684 Agent \u9700\u8981\u6d88\u8017\u8282\u70b9\u8d44\u6e90\uff0cJob \u53ea\u9700\u8981\u4e34\u65f6\u5730\u5360\u7528\u4e00\u4e9b\u8282\u70b9\u8d44\u6e90\uff0c\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\u540e\u4f1a\u81ea\u52a8\u91ca\u653e\u3002\u7136\u800c Kubernetes \u539f\u751f Job \u5728\u8282\u70b9\u8fd0\u7ef4\u8fd9\u7c7b\u573a\u666f\u4e0b\uff0c\u5b58\u5728\u4ee5\u4e0b\u9650\u5236\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9ed8\u8ba4\u7684\u8c03\u5ea6\u89c4\u5219\u662f\u968f\u673a\u7684\uff0c\u4e00\u4e2a\u8282\u70b9\u4e0a\u53ef\u80fd\u521b\u5efa\u591a\u4e2a Pod\uff0c\u9020\u6210\u91cd\u590d\u4f5c\u4e1a\u7684\u95ee\u9898\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u65e0\u6cd5\u81ea\u9002\u5e94\u96c6\u7fa4\u8282\u70b9\u7684\u89c4\u6a21\uff0c\u5f53\u96c6\u7fa4\u4e2d\u6dfb\u52a0/\u5220\u9664\u4e00\u4e2a\u8282\u70b9\u65f6\uff0c\u9700\u8981\u8fd0\u7ef4\u4eba\u5458\u624b\u52a8\u8c03\u6574 Job \u7684\u914d\u7f6e\u3002")),(0,a.kt)("p",null,"OpenKruise BroadcastJob \u5219\u5f88\u597d\u5730\u514b\u670d\u4e86\u539f\u751f Job \u5728\u8282\u70b9\u8fd0\u7ef4\u573a\u666f\u4e2d\u7684\u4e0d\u8db3\u4e4b\u5904\u3002\u5b83\u5141\u8bb8\u7528\u6237\u4ee5\u7c7b\u4f3c DaemonSet \u8c03\u5ea6\u7684\u65b9\u5f0f\u6765\u7f16\u6392 Pod\uff0c\u5f53\u7528\u6237\u521b\u5efa BroadcastJob \u540e\uff0c\u5b83\u4f1a\u9ed8\u8ba4\u5728\u96c6\u7fa4\u7684\u6bcf\u4e00\u4e2a worker \u8282\u70b9\u521b\u5efa\u4e00\u4e2a Pod\uff0c\u6267\u884c\u5b8c\u6210\u4e4b\u540e\u4f1a\u81ea\u52a8\u5bf9 Pod \u8fdb\u884c\u6e05\u7406\u3002\u540c\u65f6\uff0c\u642d\u914d Advanced CronJob\uff0c\u53ef\u4ee5\u5c06 BroadcastJob \u8fdb\u884c\u5b9a\u65f6\u53d1\u4e0b\uff0c\u4ece\u800c\u5b9e\u73b0\u5b9a\u65f6\u6e05\u7406\u8282\u70b9\u78c1\u76d8\u7684\u80fd\u529b\u3002\u672c\u6587\u4f1a\u4ee5\u5b9a\u671f\u6e05\u7406\u8282\u70b9\u4e2d\u5b58\u50a8\u7684\u65e0\u7528\u955c\u50cf\u8fd9\u4e00\u573a\u666f\u6765\u8fdb\u884c\u6f14\u793a\u5982\u4f55\u4f7f\u7528 Advanced CronJob \u548c BroadcastJob\u3002"),(0,a.kt)("h2",{id:"\u73af\u5883\u8bf4\u660e"},"\u73af\u5883\u8bf4\u660e"),(0,a.kt)("p",null,"\u53d7\u8d44\u6e90\u6240\u9650\uff0c\u6211\u4eec\u5728\u4e00\u53f0 ECS\uff08\u5bbf\u4e3b\u673a\uff09\u4e0a\u9762\u90e8\u7f72\u4e86\u4e00\u4e2a Kind \u96c6\u7fa4\u8fdb\u884c\u6f14\u793a\uff08\u8282\u70b9\u5747\u91c7\u7528 containerd\uff09\u3002 \u8be5 Kind \u96c6\u7fa4\u5171\u5305\u542b\u4e09\u4e2a\u8282\u70b9\uff0c\u5176\u4e2d\u4e00\u4e2a master \u8282\u70b9\uff0c\u4e24\u4e2a worker \u8282\u70b9:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ k get node\nNAME                   STATUS   ROLES                  AGE   VERSION\ncontrol-plane   Ready    control-plane,master   42d   v1.21.1\nworker          Ready    <none>                 42d   v1.21.1\nworker2         Ready    <none>                 42d   v1.21.1\n")),(0,a.kt)("p",null,"\u5728\u6f14\u793a\u4e4b\u524d\uff0c",(0,a.kt)("em",{parentName:"p"},"\u6211\u4eec\u53ef\u4ee5\u5148\u6765\u770b\u4e00\u4e0b")," ECS\uff08\u5bbf\u4e3b\u673a\uff09\u7684\u78c1\u76d8\u538b\u529b\u60c5\u51b5\uff0c\u65b9\u4fbf\u8ddf\u6e05\u7406\u4e4b\u540e\u7684\u6548\u679c\u8fdb\u884c\u5bf9\u6bd4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"root@kruise:~# df -h\nFilesystem      Size  Used Avail Use% Mounted on\nudev            7.7G     0  7.7G   0% /dev\ntmpfs           1.6G  1.4M  1.6G   1% /run\n/dev/vda1        79G   63G   13G  84% /\ntmpfs           7.7G     0  7.7G   0% /dev/shm\ntmpfs           5.0M     0  5.0M   0% /run/lock\ntmpfs           7.7G     0  7.7G   0% /sys/fs/cgroup\ntmpfs           1.6G     0  1.6G   0% /run/user/0\noverlay          79G   63G   13G  84% /var/lib/docker/overlay2/94e3ec1c3a45a43e4ffa34c654bc3639007eb2fb5d4e9724fed056c6bb8d119f/merged\noverlay          79G   63G   13G  84% /var/lib/docker/overlay2/7718d5a17be239ade398f907f82acf2c90fb7752a90a667114a573c60757d23b/merged\noverlay          79G   63G   13G  84% /var/lib/docker/overlay2/0f78036c619c03fb37ec8029e5718bb206472971169bb2711bee06af21228763/merged\noverlay          79G   63G   13G  84% /var/lib/docker/overlay2/029e008a7c5b754e4246c8fc55bf189c83a0b8b1df50c2ecb67d1734095b935b/merged\noverlay          79G   63G   13G  84% /var/lib/docker/overlay2/899a50ca07b4e2de08d627dbb1e6f1cc9e1eb0c048a71c4905854f31bf51f056/merged\noverlay          79G   63G   13G  84% /var/lib/docker/overlay2/c72de0669810b5dcbf4b2726c0c32765fbbb1e4c21826f59533414fb474c826a/merged\noverlay          79G   63G   13G  84% /var/lib/docker/overlay2/af8c22b65e7ae64f15f0132baed91550adfe81cd4e088e2bb84e01476619340a/merged\noverlay          79G   63G   13G  84% /var/lib/docker/overlay2/454a7e90cb3c723dc6b22b0d54e60714700b4c0bcf947b29206d882c6a2c25fe/merged\n")),(0,a.kt)("p",null,"\u6211\u4eec\u4e5f\u6765\u67e5\u770b\u4e00\u4e0b worker \u8282\u70b9\u5b58\u50a8\u955c\u50cf\u7684\u60c5\u51b5, \u53ef\u4ee5\u770b\u5230\u8be5\u8282\u70b9\u76ee\u524d\u6709 125 \u4e2a images\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"root@kruise:~# docker exec -it worker /bin/sh\n$ crictl images | wc -l\n125\n$ crictl images\nREPOSITORY                                TAG                  IMAGE ID          SIZE\ndocker.io/minchou/cleaner                 v1                   7e36ca8e9d40      68.6MB\ndocker.io/minchou/rollout                 v0.7.3               120dc8c670ef      57MB\ndocker.io/minchou/rollout                 v0.7.2               2f1f320cd94a      57MB\ndocker.io/minchou/rollout                 v0.7.1               c90679a2e4ff      57MB\ndocker.io/minchou/rollout                 v0.7.0               a81db48ec891      57MB\ndocker.io/minchou/rollout                 v0.6.2               af5ef616c30e      55.9MB\ndocker.io/minchou/rollout                 v0.6.1               71ba2e84e92e      55.9MB\ndocker.io/minchou/rollout                 v0.6.0               3fe9eb8f0144      55.9MB\n... .... ... ....\n")),(0,a.kt)("h2",{id:"advanced-cron-job-\u914d\u7f6e"},"Advanced Cron Job \u914d\u7f6e"),(0,a.kt)("p",null,"job.yaml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: AdvancedCronJob\nmetadata:\n  name: acj-test\nspec:\n  schedule: "*/5 * * * *"\n  startingDeadlineSeconds: 60\n  template:\n    broadcastJobTemplate:\n      spec:\n        template:\n          spec:\n            containers:\n              - name: node-cleaner\n                image: minchou/cleaner:v1\n                imagePullPolicy: IfNotPresent\n                env:\n                # crictl use this env to find conatiner runtime socket\n                # this value should consistent with the path of mounted \n                # container runtime socket file \n                - name: CONTAINER_RUNTIME_ENDPOINT\n                  value: unix:///var/run/containerd/containerd.sock\n                volumeMounts:\n                  # mount container runtime socket file to this path\n                - name: containerd\n                  mountPath: /var/run/containerd\n            volumes:\n            - name: containerd\n              hostPath:\n                path: /var/run/containerd\n            restartPolicy: OnFailure\n        completionPolicy:\n          type: Always\n          ttlSecondsAfterFinished: 90\n        failurePolicy:\n          type: Continue\n          restartLimit: 3\n')),(0,a.kt)("p",null,"\u56e0\u4e3a\u9700\u8981\u62ff\u5230\u5bbf\u4e3b\u673a\u4e0a\u7684 containerd.socket \u624d\u80fd\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"crictl rmi")," \u4e4b\u7c7b\u7684\u955c\u50cf\u6e05\u7406\u547d\u4ee4\uff0c\u56e0\u6b64\u6b64\u5904\u9700\u8981\u4ee5 hostPath \u7684\u65b9\u5f0f\u5c06\u8be5 ",(0,a.kt)("inlineCode",{parentName:"p"},"containerd.sock")," \u6587\u4ef6\u8fdb\u884c\u6302\u8f7d\u3002\u5982\u679c\u4f60\u7684\u5bbf\u4e3b\u673a\u4e0a\u4f7f\u7528\u7684\u662f\u5176\u4ed6\u7c7b\u578b\u7684\u5bb9\u5668\u8fd0\u884c\u65f6\uff0c\u4e5f\u9700\u8981\u5c06\u5176\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u6302\u8f7d\u5230 Pod\u3002"),(0,a.kt)("p",null,"\u7c7b\u4f3c\u7684\uff0c\u5982\u679c\u4f60\u5e94\u7528\u7684\u65e5\u5fd7\u4e5f\u662f\u76f4\u63a5\u5199\u5728\u5bbf\u4e3b\u673a\u76ee\u5f55\u4e0b\u9762\uff0c\u4e5f\u53ef\u4ee5\u7528\u8fd9\u79cd\u65b9\u5f0f\u5c06\u5176\u6302\u8f7d\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"/temp/logs")," Pod \u76ee\u5f55\u4e0b\uff0c\u4e00\u5e76\u8fdb\u884c\u6e05\u7406\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u66f4\u65b9\u4fbf\u6211\u4eec\u89c2\u5bdf job \u8fd0\u884c\u7684\u60c5\u51b5\uff0c\u8fd9\u91cc\u5c06 CronJob \u5b9a\u4e49\u6210\u6bcf\u9694 5 \u5206\u949f\u6267\u884c\u4e00\u6b21\u6e05\u9664\u52a8\u4f5c\uff0c\u5373\uff0c\u5b9a\u4e49 Advanced CronJob \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"schedule")," \u5b57\u6bb5\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},'"*/5 * * * *"'),"\u3002\u5b9e\u9645\u4e0a\uff0c\u771f\u5b9e\u7684\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u6bcf\u9694\u51e0\u5929\u751a\u81f3\u51e0\u5468\u6e05\u7406\u4e00\u6b21\uff0c\u5177\u4f53\u914d\u7f6e\u65b9\u6cd5\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/robfig/cron"},"Cron \u8868\u8fbe\u5f0f"),"\u3002"),(0,a.kt)("h2",{id:"\u955c\u50cf\u6784\u5efa"},"\u955c\u50cf\u6784\u5efa"),(0,a.kt)("p",null,"\u6587\u4ef6\u76ee\u5f55\u7ed3\u6784\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ tree\n.\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 cleaner.sh\n\u2514\u2500\u2500 crictl-v1.23.0-linux-amd64.tar.gz\n")),(0,a.kt)("p",null,"\u4e3a\u4e86\u6253\u955c\u50cf\u5feb\u4e00\u70b9\uff0c\u6211\u4eec\u5c06 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/cri-tools/releases"},"crictl-v1.23.0-linux-amd64.tar.gz")," \u6587\u4ef6\u63d0\u524d\u4e0b\u8f7d\u597d\uff0c\u5e76\u653e\u5728\u4e0e Dockerfile \u540c\u4e00\u76ee\u5f55\u4e0b\u3002"),(0,a.kt)("h3",{id:"cleanersh-\u811a\u672c\u793a\u4f8b"},"cleaner.sh \u811a\u672c\u793a\u4f8b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u5982\u679c\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528\uff0c\u8bf7\u4e25\u683c\u6821\u9a8c\u597d\u81ea\u5df1\u7684\u6e05\u9664\u811a\u672c\uff01")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/sh\n\necho "container runtime endpoint:" $CONTAINER_RUNTIME_ENDPOINT\n\n# clean up docker resources if have\ncrictl ps > /dev/null\nif [ $? -eq 0 ]\nthen\n    # Implement your customized script here, such as\n    # get the images that is used, these images cannot be deleted\n    crictl ps | awk \'{if(NR>1){print $2}}\' > used-images.txt\n\n    # @@ You can choose the images you want to clean according to your requirement @@\n    # **      Here, we will clean all images from my docker.io/minchou repo!       **\n    crictl images | grep -i "docker.io/minchou"| awk \'{print $3}\' > target-images.txt\n\n    # filter out the used images and delete thoese unused images\n    sort target-images.txt used-images.txt used-images.txt| uniq -u | xargs -r crictl rmi \nelse\n    echo "crictl does not exist"\nfi\n\nexit 0\n')),(0,a.kt)("h3",{id:"dockerfile-\u793a\u4f8b"},"Dockerfile \u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'FROM alpine\n\nCOPY crictl-v1.23.0-linux-amd64.tar.gz ./\nRUN  tar zxvf crictl-v1.23.0-linux-amd64.tar.gz -C /bin && rm crictl-v1.23.0-linux-amd64.tar.gz\n\nCOPY cleaner.sh /bin/\nRUN chmod +x /bin/cleaner.sh \n\nCMD ["bash", "/bin/cleaner.sh"]\n')),(0,a.kt)("h2",{id:"\u6548\u679c\u5c55\u793a"},"\u6548\u679c\u5c55\u793a"),(0,a.kt)("p",null,"\u6253\u5305\u955c\u50cf\u5e76\u4e0a\u4f20\u81f3\u81ea\u5df1\u7684\u955c\u50cf\u4ed3\u5e93\uff0c\u6b64\u5904\u4ee5\u6211\u81ea\u5df1\u7684 docker hub \u4ed3\u5e93\u4e3a\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker build . -t minchou/cleaner:v1 && docker push minchou/cleaner:v1\n")),(0,a.kt)("p",null,"\u7136\u540e\u4e0b\u53d1 Advanced CronJob \u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl apply -f job.yaml\nadvancedcronjob.apps.kruise.io/acj-test created\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u5728 Kruise \u7684\u65e5\u5fd7\u4e2d\u770b\u5230\u8be5 job \u7684\u4e0b\u4e00\u6b21\u6267\u884c\u7684\u65f6\u95f4\u4e3a 2022-03-24 08:50:00 +0000 UTC\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ kubectl -n kruise-system logs kruise-controller-manager-745594ff76-9nwwx --tail 1000 | grep "no upcoming scheduled times, sleeping until next now"\nI0324 08:45:08.131928       1 advancedcronjob_broadcastjob_controller.go:290] no upcoming scheduled times, sleeping until next now 2022-03-24 08:45:08.131896998 +0000 UTC m=+535162.957711312 and next run 2022-03-24 08:50:00 +0000 UTC default/acj-test\n')),(0,a.kt)("p",null,"\u5230\u65f6\u95f4\u540e\uff0cAdvanced CronJob \u5f00\u59cb\u6267\u884c\u3002 \u6211\u4eec\u6765\u770b\u4e00\u4e0b worker \u8282\u70b9\u7684 Pod \u65e5\u5fd7\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl logs acj-test-1648111800-8t8bx\ncontainer runtime endpoint: unix:///var/run/containerd/containerd.sock\nDeleted: docker.io/minchou/rollout:v0.2.7\nDeleted: docker.io/minchou/rollout:v0.4.1\nDeleted: docker.io/minchou/rollout:v0.7.3\nDeleted: docker.io/minchou/rollout:br-5\nDeleted: docker.io/minchou/rollout:v0.4.2\nDeleted: docker.io/minchou/kruiserollout:br-f\nDeleted: docker.io/minchou/rollout:v0.7.2\nDeleted: docker.io/minchou/rollout:v0.4.0\nDeleted: docker.io/minchou/rollout:v0.3.8\nDeleted: docker.io/minchou/rollout:v0.3.0\nDeleted: docker.io/minchou/kruiserollout:br-2\nDeleted: docker.io/minchou/rollout:br-3\n... ... ... ...\n")),(0,a.kt)("p",null,"\u53ef\u89c1 ",(0,a.kt)("inlineCode",{parentName:"p"},"cleaner.sh")," \u811a\u672c\u8d77\u4f5c\u7528\u4e86\uff0c\u76ee\u6807\u955c\u50cf\u5df2\u7ecf\u88ab\u5220\u9664\uff0c\u7136\u540e\u6211\u4eec\u518d\u770b\u4e00\u4e0b ECS\uff08\u5bbf\u4e3b\u673a\uff09\u7684\u78c1\u76d8\u538b\u529b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"root@kruise011162126109:~# df -h\nFilesystem      Size  Used Avail Use% Mounted on\nudev            7.7G     0  7.7G   0% /dev\ntmpfs           1.6G  1.4M  1.6G   1% /run\n/dev/vda1        79G   44G   32G  59% /\ntmpfs           7.7G     0  7.7G   0% /dev/shm\ntmpfs           5.0M     0  5.0M   0% /run/lock\ntmpfs           7.7G     0  7.7G   0% /sys/fs/cgroup\ntmpfs           1.6G     0  1.6G   0% /run/user/0\noverlay          79G   44G   32G  59% /var/lib/docker/overlay2/94e3ec1c3a45a43e4ffa34c654bc3639007eb2fb5d4e9724fed056c6bb8d119f/merged\noverlay          79G   44G   32G  59% /var/lib/docker/overlay2/7718d5a17be239ade398f907f82acf2c90fb7752a90a667114a573c60757d23b/merged\noverlay          79G   44G   32G  59% /var/lib/docker/overlay2/0f78036c619c03fb37ec8029e5718bb206472971169bb2711bee06af21228763/merged\noverlay          79G   44G   32G  59% /var/lib/docker/overlay2/029e008a7c5b754e4246c8fc55bf189c83a0b8b1df50c2ecb67d1734095b935b/merged\noverlay          79G   44G   32G  59% /var/lib/docker/overlay2/899a50ca07b4e2de08d627dbb1e6f1cc9e1eb0c048a71c4905854f31bf51f056/merged\noverlay          79G   44G   32G  59% /var/lib/docker/overlay2/c72de0669810b5dcbf4b2726c0c32765fbbb1e4c21826f59533414fb474c826a/merged\noverlay          79G   44G   32G  59% /var/lib/docker/overlay2/af8c22b65e7ae64f15f0132baed91550adfe81cd4e088e2bb84e01476619340a/merged\noverlay          79G   44G   32G  59% /var/lib/docker/overlay2/454a7e90cb3c723dc6b22b0d54e60714700b4c0bcf947b29206d882c6a2c25fe/merged\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u78c1\u76d8\u538b\u529b\u5df2\u7ecf\u4ece\u4e4b\u524d\u7684 84% \u4e0b\u964d\u5230\u4e86 59%\uff0c\u4e0b\u964d\u8fd8\u662f\u8f83\u4e3a\u663e\u8457\u7684\u3002 \u6700\u540e\u6211\u4eec\u518d\u4ece kruise \u7684\u65e5\u5fd7\u4e2d\u635e\u4e00\u4e0b\u4e0b\u4e00\u6b21\u7684\u6267\u884c\u65f6\u95f4\uff0c\u53ef\u4ee5\u770b\u5230\u4e0b\u6b21\u6267\u884c\u786e\u5b9e\u662f 5 \u5206\u949f\u540e\uff082022-03-24 08:55:00 +0000 UTC\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ kubectl -n kruise-system logs kruise-controller-manager-745594ff76-9nwwx --tail 1000 | grep "no upcoming scheduled times, sleeping until next now"\nI0324 08:50:02.226008       1 advancedcronjob_broadcastjob_controller.go:290] no upcoming scheduled times, sleeping until next now 2022-03-24 08:50:02.225973654 +0000 UTC m=+535457.051787976 and next run 2022-03-24 08:55:00 +0000 UTC default/acj-test\n')),(0,a.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u4f8b\u5b50\u53ef\u4ee5\u770b\u5230 Advanced CronJob + BroadcastJob + \u81ea\u5b9a\u4e49\u811a\u672c\u7684\u7ec4\u5408\u53ef\u4ee5\u8f7b\u677e\u5730\u505a\u5230\u5b9a\u65f6\u6e05\u7406\u8282\u70b9\u65e0\u7528\u955c\u50cf\u7684\u80fd\u529b\u3002\u5f53\u7136\uff0c\u8fd9\u4e5f\u53ea\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u8282\u70b9\u8fd0\u7ef4\u793a\u4f8b\uff0c\u5982\u679c\u4f60\u9047\u5230\u5176\u4ed6\u7c7b\u4f3c\u7684\u9700\u8981\u5b9a\u671f\u8fd0\u7ef4\u8282\u70b9\u7684\u9700\u6c42\uff0c\u5e0c\u671b\u4e0a\u8ff0\u793a\u4f8b\u4f1a\u5bf9\u4f60\u6709\u6240\u542f\u53d1\u548c\u5e2e\u52a9\u3002"))}p.isMDXComponent=!0}}]);