"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[9481],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8101:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Container Restart"},l=void 0,c={unversionedId:"user-manuals/containerrecreaterequest",id:"version-v1.3/user-manuals/containerrecreaterequest",title:"Container Restart",description:"FEATURE STATE: Kruise v0.9.0",source:"@site/versioned_docs/version-v1.3/user-manuals/containerrecreaterequest.md",sourceDirName:"user-manuals",slug:"/user-manuals/containerrecreaterequest",permalink:"/docs/v1.3/user-manuals/containerrecreaterequest",draft:!1,editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/containerrecreaterequest.md",tags:[],version:"v1.3",lastUpdatedBy:"berg",lastUpdatedAt:1665303128,formattedLastUpdatedAt:"10/9/2022",frontMatter:{title:"Container Restart"},sidebar:"docs",previous:{title:"UnitedDeployment",permalink:"/docs/v1.3/user-manuals/uniteddeployment"},next:{title:"ImagePullJob",permalink:"/docs/v1.3/user-manuals/imagepulljob"}},u={},p=[{value:"Usage",id:"usage",level:2},{value:"Submit request",id:"submit-request",level:3},{value:"Check request status",id:"check-request-status",level:3},{value:"Implementation",id:"implementation",level:2}],d={toc:p};function m(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v0.9.0"),(0,i.kt)("p",null,"ContainerRecreateRequest provides a way to let users ",(0,i.kt)("strong",{parentName:"p"},"restart/recreate")," one or more containers in an existing Pod."),(0,i.kt)("p",null,"Just like the in-place update provided in Kruise, during container recreation, other containers in the same Pod are still running.\nOnce the recreation is completed, nothing changes in the Pod except that the recreated container's restartCount is increased.\nNote that the files written into the ",(0,i.kt)("strong",{parentName:"p"},"rootfs of the previous container will be lost"),", but the data in volume mounts remain."),(0,i.kt)("p",null,"This feature relies on ",(0,i.kt)("inlineCode",{parentName:"p"},"kruise-daemon")," to stop the container in Pod.\nSo if the ",(0,i.kt)("inlineCode",{parentName:"p"},"KruiseDaemon")," feature-gate is closed, ContainerRecreateRequest will also be disabled."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"submit-request"},"Submit request"),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"ContainerRecreateRequest")," (short name ",(0,i.kt)("inlineCode",{parentName:"p"},"CRR"),") for each Pod container recreation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: ContainerRecreateRequest\nmetadata:\n  namespace: pod-namespace\n  name: xxx\nspec:\n  podName: pod-name\n  containers:       # list of container name that need to be recreated, at least one\n  - name: app\n  - name: sidecar\n  strategy:\n    failurePolicy: Fail                 # or 'Ignore'. If 'Fail', the CRR will abort when one container failed to stop or recreate\n    orderedRecreate: false              # 'true' indicates to recreate the next container only if the previous one has recreated completely\n    terminationGracePeriodSeconds: 30   # optional duration in seconds to wait the container terminating gracefully\n    unreadyGracePeriodSeconds: 3        # duration for the Pod is marked as not ready before its preStop hook is executed and it is stopped\n    minStartedSeconds: 10               # the new container will be consider as Succeeded only if it has started over minStartedSeconds\n  activeDeadlineSeconds: 300        # the CRR will be marked as Completed immediately if it has ran over deadline duration since created\n  ttlSecondsAfterFinished: 1800     # the time CRR remain as completed before the CRR is deleted\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"All fields in ",(0,i.kt)("inlineCode",{parentName:"em"},"strategy")," and the ",(0,i.kt)("inlineCode",{parentName:"em"},"activeDeadlineSeconds"),"/",(0,i.kt)("inlineCode",{parentName:"em"},"ttlSecondsAfterFinished")," in ",(0,i.kt)("inlineCode",{parentName:"em"},"spec")," are optional.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Typically, containers in list will be stopped one by one, but they may be recreating together, unless the ",(0,i.kt)("inlineCode",{parentName:"li"},"orderedRecreate")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"unreadyGracePeriodSeconds")," depends on a new feature-gate named ",(0,i.kt)("inlineCode",{parentName:"li"},"KruisePodReadinessGate"),", which indicates to inject a readinessGate during each Pod creating.\nOtherwise ",(0,i.kt)("inlineCode",{parentName:"li"},"unreadyGracePeriodSeconds")," can only work for those new Pods created by Kruise that have the readinessGate."),(0,i.kt)("li",{parentName:"ol"},"If users set ",(0,i.kt)("inlineCode",{parentName:"li"},"ttlSecondsAfterFinished"),", then CRR will automatically be deleted after completed over this time.\nOtherwise, users have to delete the CRR manually.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# for commandline you can\n$ kubectl get containerrecreateqequest -n pod-namespace\n# or just short name\n$ kubectl get crr -n pod-namespace\n")),(0,i.kt)("h3",{id:"check-request-status"},"Check request status"),(0,i.kt)("p",null,"Status of CRR looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'status:\n  completionTime: "2021-03-22T11:53:48Z"\n  containerRecreateStates:\n  - name: app\n    phase: Succeeded\n  - name: sidecar\n    phase: Succeeded\n  phase: Completed\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"status.phase")," can be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Pending"),": the CRR waits to be executed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Recreating"),": the CRR is executing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Completed"),": this CRR has completed, and ",(0,i.kt)("inlineCode",{parentName:"li"},"status.completionTime")," is the timestamp of completion")),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"status.phase=Completed")," does not mean all containers in CRR have recreated successfully.\nUsers should find the information in ",(0,i.kt)("inlineCode",{parentName:"p"},"status.containerRecreateStates"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"status.containerRecreateStates[x].phase")," can be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Pending"),": this container waits to recreate"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Recreating"),": this container is recreating"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Failed"),": this container has failed to recreate"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Succeeded"),": this container has succeeded to recreate")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"When the CRR has completed, only the containers in ",(0,i.kt)("inlineCode",{parentName:"strong"},"Succeeded")," phase are successfully recreated.")),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"When users create a CRR, Kruise webhook will inject the current containerID and restartCount into ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.containers[x].statusContext"),".\nAnd, when ",(0,i.kt)("strong",{parentName:"p"},"kruise-daemon")," starts to execute, it will skip the container if its containerID is not equal to the one in statusContext or the restartCount has been bigger,\nwhich means the container has already been recreated (maybe by in-place update)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ContainerRecreateRequest",src:n(9704).Z,width:"1924",height:"986"})),(0,i.kt)("p",null,"Typically, ",(0,i.kt)("strong",{parentName:"p"},"kruise-daemon")," will stop the container with or without preStop hook, then ",(0,i.kt)("strong",{parentName:"p"},"kubelet")," will create a new container and start again.\nFinally, ",(0,i.kt)("strong",{parentName:"p"},"kruise-daemon")," will report the container phase as ",(0,i.kt)("inlineCode",{parentName:"p"},"Succeeded")," only if the new container has started over ",(0,i.kt)("inlineCode",{parentName:"p"},"minStartedSeconds")," duration."),(0,i.kt)("p",null,"If the recreation occurs with an in-place update in the same time:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("strong",{parentName:"li"},"Kubelet")," has stopped or recreated the container because of in-place update, ",(0,i.kt)("strong",{parentName:"li"},"kruise-daemon")," will consider it already recreated."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("strong",{parentName:"li"},"kruise-daemon")," stops the container, ",(0,i.kt)("strong",{parentName:"li"},"Kubelet")," will keep to in-place update the container to the new image.")),(0,i.kt)("p",null,"If multiple ContainerRecreateRequests are submitted for one Pod, they will be executed one by one."))}m.isMDXComponent=!0},9704:function(e,t,n){t.Z=n.p+"assets/images/containerrecreaterequest-f690e891609591c68e231c23212204ca.png"}}]);