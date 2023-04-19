"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[2964],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6445:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={},c="Hot Update",u={unversionedId:"user-manuals/hot-update",id:"user-manuals/hot-update",title:"Hot Update",description:"Feature overview",source:"@site/kruisegame/user-manuals/hot-update.md",sourceDirName:"user-manuals",slug:"/user-manuals/hot-update",permalink:"/kruisegame/user-manuals/hot-update",draft:!1,tags:[],version:"current",lastUpdatedBy:"skkkkkkk",lastUpdatedAt:1681291192,formattedLastUpdatedAt:"4/12/2023",frontMatter:{},sidebar:"kruisegame",previous:{title:"Deploy Gameservers",permalink:"/kruisegame/user-manuals/deploy-gameservers"},next:{title:"Update Strategy",permalink:"/kruisegame/user-manuals/update-strategy"}},p={},l=[{value:"Feature overview",id:"feature-overview",level:2},{value:"Example",id:"example",level:2}],d={toc:l};function m(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hot-update"},"Hot Update"),(0,o.kt)("h2",{id:"feature-overview"},"Feature overview"),(0,o.kt)("p",null,"In gaming scenarios, game server scripts and scenario resources are hot update files and are often deployed as sidecar containers in pods.\nWhen these files need to be updated, we hope that the main program on the engine side of the game server is not negatively affected.\nHowever, in a Kubernetes-native cluster, updates to a container in a pod can cause the pod to be recreated. This fails to meet the requirements of in-update."),(0,o.kt)("p",null,"OpenKruiseGame provides the in-place upgrade capability, which allows you to update a specific container in a pod without affecting the lifecycle of the pod as a whole.\nAs shown in the following figure, a hot update operation is performed on the container in blue, and no hot update operation is performed on the container in orange. After we update the version of the Game Script container from V1 to V2, the whole pod is not recreated, the container in orange is not affected, and Game Engine runs normally and smoothly."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"hot-update.png",src:n(2200).Z,width:"712",height:"266"})),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Deploy a game server with sidecar containers. In this step, use GameServerSet as the workload of the game server, and set podUpdatePolicy to InPlaceIfPossible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<EOF | kubectl apply -f -\napiVersion: game.kruise.io/v1alpha1\nkind: GameServerSet\nmetadata:\n  name: minecraft\n  namespace: default\nspec:\n  replicas: 3\n  updateStrategy:\n    rollingUpdate:\n      podUpdatePolicy: InPlaceIfPossible\n  gameServerTemplate:\n    spec:\n      containers:\n        - image: registry.cn-hangzhou.aliyuncs.com/acs/minecraft-demo:1.12.2\n          name: minecraft\n        - image: registry.cn-hangzhou.aliyuncs.com/gs-demo/sidecar:v0.1\n          name: sidecar\nEOF\n")),(0,o.kt)("p",null,"Three game servers and three corresponding pods are created:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get gs\nNAME          STATE   OPSSTATE   DP    UP\nminecraft-0   Ready   None       0     0\nminecraft-1   Ready   None       0     0\nminecraft-2   Ready   None       0     0\n\nkubectl get pod\nNAME            READY   STATUS    RESTARTS   AGE\nminecraft-0     2/2     Running   0          13s\nminecraft-1     2/2     Running   0          13s\nminecraft-2     2/2     Running   0          13s\n")),(0,o.kt)("p",null,"When a hot update is required, we want to update the sidecar containers without affecting the lifecycle of the whole pod. In this case, we need only to update the container image version corresponding to GameServerSet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit gss minecraft\n...\n      - image: registry.cn-hangzhou.aliyuncs.com/gs-demo/sidecar:v0.2\n        name: sidecar\n...\n")),(0,o.kt)("p",null,"Wait for a period of time, then you can find that the three pods are all updated, the values of RESTARTS are all changed to 1, but the values of Age have increased. The hot update of the game server is complete."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod\nNAME              READY   STATUS    RESTARTS      AGE\nminecraft-0       2/2     Running   1 (33s ago)   8m55s\nminecraft-1       2/2     Running   1 (37s ago)   8m54s\nminecraft-2       2/2     Running   1 (49s ago)   8m54s\n")))}m.isMDXComponent=!0},2200:function(e,t,n){t.Z=n.p+"assets/images/hot-update-1dd12ed5397ac13cd11a381d2358855c.png"}}]);