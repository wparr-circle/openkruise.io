"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[974],{8106:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"v1.3","label":"v1.3","banner":null,"badge":true,"className":"docs-version-v1.3","isLast":true,"docsSidebars":{"docs":[{"type":"category","label":"Getting Started","collapsed":false,"items":[{"type":"link","label":"Introduction","href":"/docs/","docId":"introduction"},{"type":"link","label":"Installation","href":"/docs/installation","docId":"installation"}],"collapsible":true},{"type":"category","label":"Core Concepts","collapsed":false,"items":[{"type":"link","label":"Architecture","href":"/docs/core-concepts/architecture","docId":"core-concepts/architecture"},{"type":"link","label":"InPlace Update","href":"/docs/core-concepts/inplace-update","docId":"core-concepts/inplace-update"}],"collapsible":true},{"type":"category","label":"User Manuals","collapsed":true,"items":[{"type":"category","label":"Typical Workloads","items":[{"type":"link","label":"CloneSet","href":"/docs/user-manuals/cloneset","docId":"user-manuals/cloneset"},{"type":"link","label":"Advanced StatefulSet","href":"/docs/user-manuals/advancedstatefulset","docId":"user-manuals/advancedstatefulset"},{"type":"link","label":"Advanced DaemonSet","href":"/docs/user-manuals/advanceddaemonset","docId":"user-manuals/advanceddaemonset"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Job Workloads","items":[{"type":"link","label":"BroadcastJob","href":"/docs/user-manuals/broadcastjob","docId":"user-manuals/broadcastjob"},{"type":"link","label":"AdvancedCronJob","href":"/docs/user-manuals/advancedcronjob","docId":"user-manuals/advancedcronjob"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Sidecar container Management","items":[{"type":"link","label":"SidecarSet","href":"/docs/user-manuals/sidecarset","docId":"user-manuals/sidecarset"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Multi-domain Management","items":[{"type":"link","label":"WorkloadSpread","href":"/docs/user-manuals/workloadspread","docId":"user-manuals/workloadspread"},{"type":"link","label":"UnitedDeployment","href":"/docs/user-manuals/uniteddeployment","docId":"user-manuals/uniteddeployment"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Enhanced Operations","items":[{"type":"link","label":"Container Restart","href":"/docs/user-manuals/containerrecreaterequest","docId":"user-manuals/containerrecreaterequest"},{"type":"link","label":"ImagePullJob","href":"/docs/user-manuals/imagepulljob","docId":"user-manuals/imagepulljob"},{"type":"link","label":"Container Launch Priority","href":"/docs/user-manuals/containerlaunchpriority","docId":"user-manuals/containerlaunchpriority"},{"type":"link","label":"ResourceDistribution","href":"/docs/user-manuals/resourcedistribution","docId":"user-manuals/resourcedistribution"},{"type":"link","label":"PersistentPodState","href":"/docs/user-manuals/persistentpodstate","docId":"user-manuals/persistentpodstate"},{"type":"link","label":"PodProbeMarker","href":"/docs/user-manuals/podprobemarker","docId":"user-manuals/podprobemarker"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Application Protection","items":[{"type":"link","label":"Deletion Protection","href":"/docs/user-manuals/deletionprotection","docId":"user-manuals/deletionprotection"},{"type":"link","label":"PodUnavailableBudget","href":"/docs/user-manuals/podunavailablebudget","docId":"user-manuals/podunavailablebudget"}],"collapsed":true,"collapsible":true}],"collapsible":true},{"type":"category","label":"Best Practices","collapsed":true,"items":[{"type":"link","label":"HPA configuration","href":"/docs/best-practices/hpa-configuration","docId":"best-practices/hpa-configuration"},{"type":"link","label":"Cloud-Native Devops Best Practices(1) - Continuous Integration (CI) + OpenKruise Image Pre-download","href":"/docs/best-practices/ci-pipeline-image-predownload","docId":"best-practices/ci-pipeline-image-predownload"},{"type":"link","label":"Cloud-Native Devops Best Practices(2) - GitOps + OpenKruise CloneSet","href":"/docs/best-practices/gitops-with-kruise","docId":"best-practices/gitops-with-kruise"},{"type":"link","label":"Best Practice for Managing Log Collection Sidecar Containers","href":"/docs/best-practices/log-container-sidecarset","docId":"best-practices/log-container-sidecarset"},{"type":"link","label":"CloneSet lifecycle -- Insert Customized Logic Into Pod Lifecycle","href":"/docs/best-practices/cloneset-lifecycle","docId":"best-practices/cloneset-lifecycle"},{"type":"link","label":"Extreme Elastic Schedule Solution Based on HPA and WorkloadSpread","href":"/docs/best-practices/elastic-deployment","docId":"best-practices/elastic-deployment"},{"type":"link","label":"BroadcastJob + Advanced CronJob Help You Maintain Kubernetes Nodes","href":"/docs/best-practices/acronjob+broadcastjob","docId":"best-practices/acronjob+broadcastjob"}],"collapsible":true},{"type":"category","label":"Developer Manuals","collapsed":true,"items":[{"type":"link","label":"Golang client","href":"/docs/developer-manuals/go-client","docId":"developer-manuals/go-client"},{"type":"link","label":"Java client","href":"/docs/developer-manuals/java-client","docId":"developer-manuals/java-client"},{"type":"link","label":"Other languages","href":"/docs/developer-manuals/other-languages","docId":"developer-manuals/other-languages"}],"collapsible":true},{"type":"category","label":"Reference","collapsed":true,"items":[{"type":"category","label":"CLI tools","items":[{"type":"link","label":"Kubectl Plugin","href":"/docs/cli-tool/kubectl-plugin","docId":"cli-tool/kubectl-plugin"},{"type":"link","label":"Kustomize ResourceDistribution Generator","href":"/docs/cli-tool/kustomize-plugin","docId":"cli-tool/kustomize-plugin"}],"collapsed":true,"collapsible":true}],"collapsible":true},{"type":"link","label":"FAQ","href":"/docs/faq","docId":"faq"}]},"docs":{"best-practices/acronjob+broadcastjob":{"id":"best-practices/acronjob+broadcastjob","title":"BroadcastJob + Advanced CronJob Help You Maintain Kubernetes Nodes","description":"Kubernetes node operation and maintenance is always a tedious work. For example, the available storage space in node is basically in a nearly monotonous decreasing trend in the native Kubernetes system. However, excessive disk pressure may lead to a series of problems, such as un-schedule of the nodes, and the eviction of pods, affecting the stability of the cluster.","sidebar":"docs"},"best-practices/ci-pipeline-image-predownload":{"id":"best-practices/ci-pipeline-image-predownload","title":"Cloud-Native Devops Best Practices(1) - Continuous Integration (CI) + OpenKruise Image Pre-download","description":"What is Devops\uff1f","sidebar":"docs"},"best-practices/cloneset-lifecycle":{"id":"best-practices/cloneset-lifecycle","title":"CloneSet lifecycle -- Insert Customized Logic Into Pod Lifecycle","description":"Due to various historical reasons or objective factors, the existing system architectures of some companies are not compatible with Kubernetes very well. For example, some companies use another service registration and discovery center, which is totally independent with Kubernetes, instead of  Kubernetes Service. Under this architecture, users will encounter many problems if they want to manage their infrastructure and  applications with Kubernetes.","sidebar":"docs"},"best-practices/elastic-deployment":{"id":"best-practices/elastic-deployment","title":"Extreme Elastic Schedule Solution Based on HPA and WorkloadSpread","description":"Since 0.10.0 version\uff0cOpenKruise have proposed a multi-domain CRD with by-pass architecture, namely, WorkloadSpread. WorkloadSpread allows a Workload to distribute its Pods to different node, zone, even different clusters and providers, as well as to apply differential configurations in different domains.This CRD can give Workloads the ability of multi-domain scatter, elastic schedule and fine management in a non-intrusive manner.","sidebar":"docs"},"best-practices/gitops-with-kruise":{"id":"best-practices/gitops-with-kruise","title":"Cloud-Native Devops Best Practices(2) - GitOps + OpenKruise CloneSet","description":"What is GitOps\uff1f","sidebar":"docs"},"best-practices/hpa-configuration":{"id":"best-practices/hpa-configuration","title":"HPA configuration","description":"Kruise workloads, such as CloneSet, Advanced StatefulSet, UnitedDeployment, are all implemented scale subresource,","sidebar":"docs"},"best-practices/log-container-sidecarset":{"id":"best-practices/log-container-sidecarset","title":"Best Practice for Managing Log Collection Sidecar Containers","description":"Kubernetes Container Log Collection","sidebar":"docs"},"cli-tool/kubectl-plugin":{"id":"cli-tool/kubectl-plugin","title":"Kubectl Plugin","description":"Kruise-tools provides commandline tools for kruise features, such as kubectl-kruise, which is a standard plugin of kubectl.","sidebar":"docs"},"cli-tool/kustomize-plugin":{"id":"cli-tool/kustomize-plugin","title":"Kustomize ResourceDistribution Generator","description":"Kruise-tools provides a series of generators and Transformers for Kruise features, which is a third party plug-in for Kustomize.","sidebar":"docs"},"core-concepts/architecture":{"id":"core-concepts/architecture","title":"Architecture","description":"The overall architecture of OpenKruise is shown as below:","sidebar":"docs"},"core-concepts/inplace-update":{"id":"core-concepts/inplace-update","title":"InPlace Update","description":"In-place Update is one of the key features provided by OpenKruise.","sidebar":"docs"},"developer-manuals/go-client":{"id":"developer-manuals/go-client","title":"Golang client","description":"If you want to create/get/update/delete those OpenKruise resources in a Golang project or list-watch them using informer,","sidebar":"docs"},"developer-manuals/java-client":{"id":"developer-manuals/java-client","title":"Java client","description":"We do have a client-java repository,","sidebar":"docs"},"developer-manuals/other-languages":{"id":"developer-manuals/other-languages","title":"Other languages","description":"Currently, Kruise has not supported SDK for languages other than Golang and Java.","sidebar":"docs"},"faq":{"id":"faq","title":"FAQ","description":"","sidebar":"docs"},"installation":{"id":"installation","title":"Installation","description":"Since v1.0.0 (alpha/beta), OpenKruise requires Kubernetes version >= 1.16.","sidebar":"docs"},"introduction":{"id":"introduction","title":"Introduction","description":"Welcome to OpenKruise!","sidebar":"docs"},"user-manuals/advancedcronjob":{"id":"user-manuals/advancedcronjob","title":"AdvancedCronJob","description":"AdvancedCronJob is an enhanced version of CronJob.","sidebar":"docs"},"user-manuals/advanceddaemonset":{"id":"user-manuals/advanceddaemonset","title":"Advanced DaemonSet","description":"This controller enhances the rolling update workflow of Kubernetes DaemonSet","sidebar":"docs"},"user-manuals/advancedstatefulset":{"id":"user-manuals/advancedstatefulset","title":"Advanced StatefulSet","description":"This controller enhances the rolling update workflow of Kubernetes StatefulSet","sidebar":"docs"},"user-manuals/broadcastjob":{"id":"user-manuals/broadcastjob","title":"BroadcastJob","description":"This controller distributes a Pod on every node in the cluster.","sidebar":"docs"},"user-manuals/cloneset":{"id":"user-manuals/cloneset","title":"CloneSet","description":"This controller provides advanced features to efficiently manage stateless applications that","sidebar":"docs"},"user-manuals/containerlaunchpriority":{"id":"user-manuals/containerlaunchpriority","title":"Container Launch Priority","description":"FEATURE STATE: Kruise v1.0.0","sidebar":"docs"},"user-manuals/containerrecreaterequest":{"id":"user-manuals/containerrecreaterequest","title":"Container Restart","description":"FEATURE STATE: Kruise v0.9.0","sidebar":"docs"},"user-manuals/deletionprotection":{"id":"user-manuals/deletionprotection","title":"Deletion Protection","description":"FEATURE STATE: Kruise v0.9.0","sidebar":"docs"},"user-manuals/imagepulljob":{"id":"user-manuals/imagepulljob","title":"ImagePullJob","description":"NodeImage and ImagePullJob are new CRDs provided since Kruise v0.8.0 version.","sidebar":"docs"},"user-manuals/persistentpodstate":{"id":"user-manuals/persistentpodstate","title":"PersistentPodState","description":"FEATURE STATE: Kruise v1.2.0","sidebar":"docs"},"user-manuals/podprobemarker":{"id":"user-manuals/podprobemarker","title":"PodProbeMarker","description":"FEATURE STATE: Kruise v1.3.0","sidebar":"docs"},"user-manuals/podunavailablebudget":{"id":"user-manuals/podunavailablebudget","title":"PodUnavailableBudget","description":"FEATURE STATE: Kruise v0.10.0","sidebar":"docs"},"user-manuals/resourcedistribution":{"id":"user-manuals/resourcedistribution","title":"ResourceDistribution","description":"For the scenario, where the namespace-scoped resources such as Secret and ConfigMap need to be distributed or synchronized to different namespaces, the native k8s currently only supports manual distribution and synchronization by users one-by-one, which is very inconvenient.","sidebar":"docs"},"user-manuals/sidecarset":{"id":"user-manuals/sidecarset","title":"SidecarSet","description":"This controller leverages the admission webhook to automatically","sidebar":"docs"},"user-manuals/uniteddeployment":{"id":"user-manuals/uniteddeployment","title":"UnitedDeployment","description":"This controller provides a new way to manage pods in multi-domain by using multiple workloads.","sidebar":"docs"},"user-manuals/workloadspread":{"id":"user-manuals/workloadspread","title":"WorkloadSpread","description":"FEATURE STATE: Kruise v0.10.0","sidebar":"docs"}}}')}}]);