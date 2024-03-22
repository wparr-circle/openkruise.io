"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[6971],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),k=a,d=m["".concat(p,".").concat(k)]||m[k]||c[k]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8192:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={title:"Golang client"},p=void 0,s={unversionedId:"developer-manuals/go-client",id:"developer-manuals/go-client",title:"Golang client",description:"If you want to create/get/update/delete those OpenKruise resources in a Golang project or list-watch them using informer,",source:"@site/docs/developer-manuals/go-client.md",sourceDirName:"developer-manuals",slug:"/developer-manuals/go-client",permalink:"/docs/next/developer-manuals/go-client",draft:!1,editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/developer-manuals/go-client.md",tags:[],version:"current",lastUpdatedBy:"berg",lastUpdatedAt:1711105168,formattedLastUpdatedAt:"3/22/2024",frontMatter:{title:"Golang client"},sidebar:"docs",previous:{title:"BroadcastJob + Advanced CronJob Help You Maintain Kubernetes Nodes",permalink:"/docs/next/best-practices/acronjob+broadcastjob"},next:{title:"Java client",permalink:"/docs/next/developer-manuals/java-client"}},u={},c=[{value:"Usage",id:"usage",level:2},{value:"Use kruise-api directly",id:"use-kruise-api-directly",level:3},{value:"Use kruise-api with controller-runtime",id:"use-kruise-api-with-controller-runtime",level:3}],m={toc:c};function k(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you want to create/get/update/delete those OpenKruise resources in a Golang project or list-watch them using informer,\nyou may need a Golang client for OpenKruise."),(0,i.kt)("p",null,"In that way, you should use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise-api"},"kruise-api")," repository,\nwhich only includes schema definition and clientsets of Kruise."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"DO NOT")," bring the whole ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise"},"kruise")," repository as dependency into your project."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Firstly, import ",(0,i.kt)("inlineCode",{parentName:"p"},"kruise-api")," into your ",(0,i.kt)("inlineCode",{parentName:"p"},"go.mod")," file (the version better to be the Kruise version you installed):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"require github.com/openkruise/kruise-api v1.6.0\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Kubernetes Version in your Project"),(0,i.kt)("th",{parentName:"tr",align:null},"Import Kruise-api < v0.10"),(0,i.kt)("th",{parentName:"tr",align:null},"Import Kruise-api >= v0.10"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"< 1.18"),(0,i.kt)("td",{parentName:"tr",align:null},"v0.x.y (x <= 9)"),(0,i.kt)("td",{parentName:"tr",align:null},"v0.x.y-legacy (x >= 10)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},">= 1.18"),(0,i.kt)("td",{parentName:"tr",align:null},"v0.x.y-1.18 (7 <= x <= 9)"),(0,i.kt)("td",{parentName:"tr",align:null},"v0.x.y (x >= 10)")))),(0,i.kt)("p",null,"Then, there are two ways to use ",(0,i.kt)("inlineCode",{parentName:"p"},"kruise-api")," in your code: use it directly or with ",(0,i.kt)("inlineCode",{parentName:"p"},"controller-runtime"),"."),(0,i.kt)("p",null,"It is recommended that you can use it with ",(0,i.kt)("inlineCode",{parentName:"p"},"controller-runtime")," if your project is generated by\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kubebuilder"},"kubebuilder")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/operator-framework/operator-sdk"},"operator-sdk"),",\nwhich means ",(0,i.kt)("inlineCode",{parentName:"p"},"controller-runtime")," is already imported in your project.\nOtherwise, you may use it directly."),(0,i.kt)("h3",{id:"use-kruise-api-directly"},"Use kruise-api directly"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"New Kruise client using your rest config:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import kruiseclientset "github.com/openkruise/kruise-api/client/clientset/versioned"\n\n// cfg is the rest config defined in client-go, you should get it using kubeconfig or serviceaccount\nkruiseClient := kruiseclientset.NewForConfigOrDie(cfg)\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Get/List Kruise resources:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"cloneSet, err := kruiseClient.AppsV1alpha1().CloneSets(namespace).Get(name, metav1.GetOptions{})\ncloneSetList, err := kruiseClient.AppsV1alpha1().CloneSets(namespace).List(metav1.ListOptions{})\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Create/Update Kruise resources:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import kruiseappsv1alpha1 "github.com/openkruise/kruise-api/apps/v1alpha1"\n\ncloneSet := kruiseappsv1alpha1.CloneSet{\n    // ...\n}\nerr = kruiseClient.AppsV1alpha1().CloneSets(namespace).Create(&cloneSet, metav1.CreateOptions)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// Get first\ncloneSet, err := kruiseClient.AppsV1alpha1().CloneSets(namespace).Get(name, metav1.GetOptions{})\nif err != nil {\n    return err\n}\n\n// Modify object, such as replicas or template\ncloneSet.Spec.Replicas = utilpointer.Int32Ptr(5)\n\n// Update\n// This might get conflict, should retry it\nif err = kruiseClient.AppsV1alpha1().CloneSets(namespace).Update(&cloneSet, metav1.UpdateOptions); err != nil {\n    return err\n}\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Watch Kruise resources:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import kruiseinformer "github.com/openkruise/kruise-api/client/informers/externalversions"\n\nkruiseInformerFactory := kruiseinformer.NewSharedInformerFactory(kruiseClient, 0)\nkruiseInformerFactory.Apps().V1alpha1().CloneSets().Informer().AddEventHandler(...)\nkruiseInformerFactory.Start(...)\n')),(0,i.kt)("h3",{id:"use-kruise-api-with-controller-runtime"},"Use kruise-api with controller-runtime"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add kruise apis into the scheme in your ",(0,i.kt)("inlineCode",{parentName:"li"},"main.go"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import kruiseapi "github.com/openkruise/kruise-api"\n\n// ...\n_ = kruiseapi.AddToScheme(scheme)\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"New client")),(0,i.kt)("p",null,"This is needed when use controller-runtime client directly."),(0,i.kt)("p",null,"If your project is generated by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kubebuilder"},"kubebuilder")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/operator-framework/operator-sdk"},"operator-sdk"),",\nyou should get the client from ",(0,i.kt)("inlineCode",{parentName:"p"},"mgr.GetClient()")," instead of the example below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import "sigs.k8s.io/controller-runtime/pkg/client"\n\napiClient, err := client.New(c, client.Options{Scheme: scheme})\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Get/List")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    kruiseappsv1alpha1 "github.com/openkruise/kruise-api/apps/v1alpha1"\n    "sigs.k8s.io/controller-runtime/pkg/client"\n)\n\ncloneSet := kruiseappsv1alpha1.CloneSet{}\nerr = apiClient.Get(context.TODO(), types.NamespacedName{Namespace: namespace, Name: name}, &cloneSet)\n\ncloneSetList := kruiseappsv1alpha1.CloneSetList{}\nerr = apiClient.List(context.TODO(), &cloneSetList, client.InNamespace(instance.Namespace))\n')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Create/Update/Delete")),(0,i.kt)("p",null,"Create a new CloneSet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import kruiseappsv1alpha1 "github.com/openkruise/kruise-api/apps/v1alpha1"\n\ncloneSet := kruiseappsv1alpha1.CloneSet{\n    // ...\n}\nerr = apiClient.Create(context.TODO(), &cloneSet)\n')),(0,i.kt)("p",null,"Update an existing CloneSet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import kruiseappsv1alpha1 "github.com/openkruise/kruise-api/apps/v1alpha1"\n\n// Get first\ncloneSet := kruiseappsv1alpha1.CloneSet{}\nif err = apiClient.Get(context.TODO(), types.NamespacedName{Namespace: namespace, Name: name}, &cloneSet); err != nil {\n    return err\n}\n\n// Modify object, such as replicas or template\ncloneSet.Spec.Replicas = utilpointer.Int32Ptr(5)\n\n// Update\n// This might get conflict, should retry it\nif err = apiClient.Update(context.TODO(), &cloneSet); err != nil {\n    return err\n}\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"List watch and informer")),(0,i.kt)("p",null,"If your project is generated by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kubebuilder"},"kubebuilder")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/operator-framework/operator-sdk"},"operator-sdk")," and get the client from ",(0,i.kt)("inlineCode",{parentName:"p"},"mgr.GetClient()"),",\nthen methods like ",(0,i.kt)("inlineCode",{parentName:"p"},"Get"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"List")," have already queried from informer instead of apiserver."))}k.isMDXComponent=!0}}]);