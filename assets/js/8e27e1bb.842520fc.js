"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[5571],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return t?a.createElement(h,r(r({ref:n},c),{},{components:t})):a.createElement(h,r({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6333:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var a=t(3117),o=t(102),i=(t(7294),t(3905)),r=["components"],l={title:"BroadcastJob"},s=void 0,d={unversionedId:"user-manuals/broadcastjob",id:"version-v0.10/user-manuals/broadcastjob",isDocsHomePage:!1,title:"BroadcastJob",description:"This controller distributes a Pod on every node in the cluster.",source:"@site/versioned_docs/version-v0.10/user-manuals/broadcastjob.md",sourceDirName:"user-manuals",slug:"/user-manuals/broadcastjob",permalink:"/docs/user-manuals/broadcastjob",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/broadcastjob.md",tags:[],version:"v0.10",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1636707625,formattedLastUpdatedAt:"11/12/2021",frontMatter:{title:"BroadcastJob"},sidebar:"version-v0.10/docs",previous:{title:"Advanced DaemonSet",permalink:"/docs/user-manuals/advanceddaemonset"},next:{title:"AdvancedCronJob",permalink:"/docs/user-manuals/advancedcronjob"}},c=[{value:"Spec definition",id:"spec-definition",children:[{value:"Template",id:"template",children:[],level:3},{value:"Parallelism",id:"parallelism",children:[],level:3},{value:"CompletionPolicy",id:"completionpolicy",children:[{value:"Always",id:"always",children:[],level:4},{value:"Never",id:"never",children:[],level:4}],level:3}],level:2},{value:"Examples",id:"examples",children:[{value:"Monitor BroadcastJob status",id:"monitor-broadcastjob-status",children:[],level:3},{value:"ttlSecondsAfterFinished",id:"ttlsecondsafterfinished",children:[],level:3},{value:"activeDeadlineSeconds",id:"activedeadlineseconds",children:[],level:3},{value:"completionPolicy",id:"completionpolicy-1",children:[],level:3}],level:2}],p={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This controller distributes a Pod on every node in the cluster.\nLike a ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"DaemonSet"),",\na BroadcastJob makes sure a Pod is created and run on all selected nodes once in a cluster.\nLike a ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/"},"Job"),",\na BroadcastJob is expected to run to completion.  "),(0,i.kt)("p",null,"In the end, BroadcastJob does not consume any resources after each Pod succeeds on every node.\nThis controller is particularly useful when upgrading a software, e.g., Kubelet, or validation check\nin every node, which is typically needed only once within a long period of time or\nrunning an adhoc full cluster inspection script."),(0,i.kt)("p",null,"Optionally, a BroadcastJob can keep alive after all Pods on desired nodes complete\nso that a Pod will be automatically launched for every new node after it is added to the cluster."),(0,i.kt)("h2",{id:"spec-definition"},"Spec definition"),(0,i.kt)("h3",{id:"template"},"Template"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Template")," describes the Pod template used to run the job.\nNote that for the Pod restart policy, only ",(0,i.kt)("inlineCode",{parentName:"p"},"Never")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"OnFailure")," is allowed for BroadcastJob."),(0,i.kt)("h3",{id:"parallelism"},"Parallelism"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Parallelism")," specifies the maximal desired number of Pods that should be run at\nany given time. By default, there's no limit."),(0,i.kt)("p",null,"For example, if a cluster has ten nodes and ",(0,i.kt)("inlineCode",{parentName:"p"},"Parallelism")," is set to three, there can only be\nthree pods running in parallel. A new Pod is created only after one running Pod finishes."),(0,i.kt)("h3",{id:"completionpolicy"},"CompletionPolicy"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CompletionPolicy")," specifies the controller behavior when reconciling the BroadcastJob."),(0,i.kt)("h4",{id:"always"},"Always"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Always")," policy means the job will eventually complete with either failed or succeeded\ncondition. The following parameters take effect with this policy:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ActiveDeadlineSeconds")," specifies the duration in seconds relative to the startTime\nthat the job may be active before the system tries to terminate it.\nFor example, if ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveDeadlineSeconds")," is set to 60 seconds, after the BroadcastJob starts\nrunning for 60 seconds, all the running pods will be deleted and the job will be marked\nas Failed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"BackoffLimit")," specifies the number of retries before marking this job failed.\nCurrently, the number of retries are defined as the aggregated number of restart\ncounts across all Pods created by the job, i.e., the sum of the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kruiseio/kruise/blob/d61c12451d6a662736c4cfc48682fa75c73adcbc/vendor/k8s.io/api/core/v1/types.go#L2314"},"ContainerStatus.RestartCount"),"\nfor all containers in every Pod.  If this value exceeds ",(0,i.kt)("inlineCode",{parentName:"p"},"BackoffLimit"),", the job is marked\nas Failed and all running Pods are deleted. No limit is enforced if ",(0,i.kt)("inlineCode",{parentName:"p"},"BackoffLimit")," is\nnot set.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"TTLSecondsAfterFinished")," limits the lifetime of a BroadcastJob that has finished execution\n(either Complete or Failed). For example, if TTLSecondsAfterFinished is set to 10 seconds,\nthe job will be kept for 10 seconds after it finishes. Then the job along with all the Pods\nwill be deleted."))),(0,i.kt)("h4",{id:"never"},"Never"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Never")," policy means the BroadcastJob will never be marked as Failed or Succeeded even if\nall Pods run to completion. This also means above ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveDeadlineSeconds"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BackoffLimit"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"TTLSecondsAfterFinished")," parameters takes no effect if ",(0,i.kt)("inlineCode",{parentName:"p"},"Never")," policy is used.\nFor example, if user wants to perform an initial configuration validation for every newly\nadded node in the cluster, he can deploy a BroadcastJob with ",(0,i.kt)("inlineCode",{parentName:"p"},"Never")," policy."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"monitor-broadcastjob-status"},"Monitor BroadcastJob status"),(0,i.kt)("p",null," Assuming the cluster has only one node, run ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get bcj")," (shortcut name for BroadcastJob) and\nwe will see the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"}," NAME                 DESIRED   ACTIVE   SUCCEEDED   FAILED\n broadcastjob-sample  1         0        1           0\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Desired")," : The number of desired Pods. This equals to the number of matched nodes in the cluster."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Active"),": The number of active Pods."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SUCCEEDED"),": The number of succeeded Pods."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FAILED"),": The number of failed Pods.")),(0,i.kt)("h3",{id:"ttlsecondsafterfinished"},"ttlSecondsAfterFinished"),(0,i.kt)("p",null,"Run a BroadcastJob that each Pod computes a pi, with ",(0,i.kt)("inlineCode",{parentName:"p"},"ttlSecondsAfterFinished")," set to 30.\nThe job will be deleted in 30 seconds after it is finished."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: BroadcastJob\nmetadata:\n  name: broadcastjob-ttl\nspec:\n  template:\n    spec:\n      containers:\n        - name: pi\n          image: perl\n          command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n      restartPolicy: Never\n  completionPolicy:\n    type: Always\n    ttlSecondsAfterFinished: 30\n')),(0,i.kt)("h3",{id:"activedeadlineseconds"},"activeDeadlineSeconds"),(0,i.kt)("p",null,"Run a BroadcastJob that each Pod sleeps for 50 seconds, with ",(0,i.kt)("inlineCode",{parentName:"p"},"activeDeadlineSeconds")," set to 10 seconds.\nThe job will be marked as Failed after it runs for 10 seconds, and the running Pods will be deleted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: BroadcastJob\nmetadata:\n  name: broadcastjob-active-deadline\nspec:\n  template:\n    spec:\n      containers:\n        - name: sleep\n          image: busybox\n          command: ["sleep",  "50000"]\n      restartPolicy: Never\n  completionPolicy:\n    type: Always\n    activeDeadlineSeconds: 10\n')),(0,i.kt)("h3",{id:"completionpolicy-1"},"completionPolicy"),(0,i.kt)("p",null,"Run a BroadcastJob with ",(0,i.kt)("inlineCode",{parentName:"p"},"Never")," completionPolicy. The job will continue to run even if all Pods\nhave completed on all nodes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: BroadcastJob\nmetadata:\n  name: broadcastjob-never-complete\nspec:\n  template:\n    spec:\n      containers:\n        - name: sleep\n          image: busybox\n          command: ["sleep",  "5"]\n      restartPolicy: Never\n  completionPolicy:\n    type: Never\n')))}u.isMDXComponent=!0}}]);