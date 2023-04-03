"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[4174],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3399:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Kustomize ResourceDistribution Generator"},l=void 0,u={unversionedId:"cli-tool/kustomize-plugin",id:"version-v1.3/cli-tool/kustomize-plugin",title:"Kustomize ResourceDistribution Generator",description:"Kruise-tools provides a series of generators and Transformers for Kruise features, which is a third party plug-in for Kustomize.",source:"@site/versioned_docs/version-v1.3/cli-tool/kustomize-plugin.md",sourceDirName:"cli-tool",slug:"/cli-tool/kustomize-plugin",permalink:"/docs/v1.3/cli-tool/kustomize-plugin",draft:!1,editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/cli-tool/kustomize-plugin.md",tags:[],version:"v1.3",lastUpdatedBy:"dong",lastUpdatedAt:1666578497,formattedLastUpdatedAt:"10/24/2022",frontMatter:{title:"Kustomize ResourceDistribution Generator"},sidebar:"docs",previous:{title:"Kubectl Plugin",permalink:"/docs/v1.3/cli-tool/kubectl-plugin"},next:{title:"FAQ",permalink:"/docs/v1.3/faq"}},p={},c=[{value:"ResourceDistribution Generator",id:"resourcedistribution-generator",level:2},{value:"Download ResourceDistribution generaotor",id:"download-resourcedistribution-generaotor",level:3},{value:"API Description",id:"api-description",level:3},{value:"Resource Field",id:"resource-field",level:3},{value:"ResourceDistribution from File",id:"resourcedistribution-from-file",level:4},{value:"ResourceDistribution from Literals",id:"resourcedistribution-from-literals",level:4},{value:"ResourceDistribution from env file",id:"resourcedistribution-from-env-file",level:4},{value:"Targets Field",id:"targets-field",level:3},{value:"Options and ResourceOptions Field",id:"options-and-resourceoptions-field",level:3},{value:"A Complete Use Case",id:"a-complete-use-case",level:3},{value:"Use the ResourceDistribution Generator in ArgoCD",id:"use-the-resourcedistribution-generator-in-argocd",level:3},{value:"The use of plug-in",id:"the-use-of-plug-in",level:4}],d={toc:c};function m(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise-tools"},"Kruise-tools")," provides a series of generators and Transformers for Kruise features, which is a third party plug-in for Kustomize."),(0,i.kt)("h2",{id:"resourcedistribution-generator"},"ResourceDistribution Generator"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"ResourceDistribution Generator Since v1.0.0 (alpha/beta) requires Kustomize version >= 4.3.0. Please refer to the  ",(0,i.kt)("a",{parentName:"p",href:"https://kubectl.docs.kubernetes.io/installation/kustomize/"},"Kustomize")," for installation.")),(0,i.kt)("p",null,"When using Kustomize to manage applications, the generator provided with Kustomize can directly read files as data content to create Configmap or Secret, avoiding various format errors that are easy to occur during manual replication. The ResourceDistribution Generator is a third-party plug-in for Kustomize that can be used to create a ResourceDistribution by reading files as data content."),(0,i.kt)("h3",{id:"download-resourcedistribution-generaotor"},"Download ResourceDistribution generaotor"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise-tools/releases"},"This page")," provides the path to download binary files for common versions. Currently ",(0,i.kt)("inlineCode",{parentName:"p"},"Linux"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Darwin")," (OS X), ",(0,i.kt)("inlineCode",{parentName:"p"},"Windows")," provide ",(0,i.kt)("inlineCode",{parentName:"p"},"X86_64")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ARM64 "),". If you use some other system or architecture, you must download the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise-tools/blob/master/cmd/resourcedistributiongenerator"},"source code")," and perform ",(0,i.kt)("inlineCode",{parentName:"p"},"Go Build")," to build the binary"),(0,i.kt)("h3",{id:"api-description"},"API Description"),(0,i.kt)("p",null,"ResourceDistributionGenerator is the Exec KRM functions plugin of kusomize. It is mainly composed of ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"targets")," fields. After the build, it will generate ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"targets")," content corresponding to ResourceDistribution. The ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," is used to set the name of the generated resourceDistribution. The annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"config.kubernetes.io/function")," needs to write the path of this plugin in the file system. If a relative path is used, it needs to be relative to A kustomization file that references the configuration file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: ResourceDistributionGenerator\nmetadata:\n  name: rdname\n  annotations:\n    config.kubernetes.io/function: |\n      exec:\n        path: ./plugins/resourcedistributiongenerator\nresource:\n    ... ...\ntargets:\n    ... ...\n")),(0,i.kt)("h3",{id:"resource-field"},"Resource Field"),(0,i.kt)("p",null,"The contents of the ",(0,i.kt)("inlineCode",{parentName:"p"},"resource")," field are used to generate the distributed resources. The ",(0,i.kt)("inlineCode",{parentName:"p"},"literals"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"files"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"envs")," fields are used in the same way as in ",(0,i.kt)("a",{parentName:"p",href:"https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/configmapgenerator/"},"Configmap or Secret")," Generator."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resourceKind"),": Specify the resource kind to distribute, Secret or ConfigMap;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resourceName"),": Set the name of the distribution resource, that is, the name of the Secret or ConfigMap;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"literals"),": create data content using key/value pairs in the given literals;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"files"),": create data content with the given file name and content;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"envs"),": create data content using key/value pairs in the file;")),(0,i.kt)("p",null,"A correctly configured resource field is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: ResourceDistributionGenerator\nmetadata:\n  ... ... \nresource:\n  resourceKind: ConfigMap\n  resourceName: cmname\n  files:\n    - file.properties\n  literals:\n    - JAVA_HOME=/opt/java/jdk\ntargets:\n    ... ...\n")),(0,i.kt)("h4",{id:"resourcedistribution-from-file"},"ResourceDistribution from File"),(0,i.kt)("p",null,"ResourceDistribution Resources may be generated from files - such as a java ",(0,i.kt)("inlineCode",{parentName:"p"},".properties"),"file. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," Generate a ResourceDistribution with a data item containing the contents of a file."),(0,i.kt)("p",null,"The ResourceDistribution will have data values populated from the file contents. The contents of each file will appear as a single data item in the ResourceDistribution keyed by the filename."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"File Input")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: ResourceDistributionGenerator\nmetadata:\n  ... ... \nresource:\n  resourceKind: ConfigMap\n  resourceName: cmname\n  files:\n    - application.properties\ntargets:\n    ... ...\n")),(0,i.kt)("p",null,"application.properties"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"FOO=Bar\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Build Output")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: ResourceDistribution\nmetadata:\n  ... ...\nspec:\n  resource:\n    apiVersion: v1\n    data:\n      application.properties: |\n        FOO=Bar\n    kind: ConfigMap\n    metadata:\n      name: cmname\n  targets:\n    ... ...\n")),(0,i.kt)("h4",{id:"resourcedistribution-from-literals"},"ResourceDistribution from Literals"),(0,i.kt)("p",null,"ResourceDistribution Resources may be generated from literal key-value pairs - such as JAVA_HOME=/opt/java/jdk. "),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"The key/value are separated by a ",(0,i.kt)("inlineCode",{parentName:"li"},"=")," sign (left side is the key)"),(0,i.kt)("li",{parentName:"ul"},"The value of each literal will appear as a data item in the ResourceDistribution keyed by its key."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," Create a ResourceDistribution with 2 data items generated from literals."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"File Input")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: ResourceDistributionGenerator\nmetadata:\n  ... ...\nresource:\n  resourceKind: ConfigMap\n  resourceName: cmname\n  literals:\n    - JAVA_HOME=/opt/java/jdk\n    - JAVA_TOOL_OPTIONS=-agentlib:hprof\ntargets:\n  ... ...\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Build Output")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: ResourceDistribution\nmetadata:\n  ... ...\nspec:\n  resource:\n    apiVersion: v1\n    data:\n      JAVA_HOME: /opt/java/jdk\n      JAVA_TOOL_OPTIONS: -agentlib:hprof\n    kind: ConfigMap\n    metadata:\n      name: cmname\n  targets:\n    ... ...\n")),(0,i.kt)("h4",{id:"resourcedistribution-from-env-file"},"ResourceDistribution from env file"),(0,i.kt)("p",null,"ResourceDistribution Resources may be generated from key-value pairs much the same as using the literals option but taking the key-value pairs from an environment file. "),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"The key/value pairs inside of the environment file are separated by a ",(0,i.kt)("inlineCode",{parentName:"li"},"=")," sign (left side is the key)"),(0,i.kt)("li",{parentName:"ul"},"The value of each line will appear as a data item in the ResourceDistribution keyed by its key."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," Create a ResourceDistribution with 3 data items generated from an environment file."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"File Input")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: ResourceDistributionGenerator\nmetadata:\n  ... ...\nresource:\n  resourceKind: ConfigMap\n  resourceName: cmname\n  envs:\n    - tracing.env\ntargets:\n  ... ...\n")),(0,i.kt)("p",null,"tracing.env"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ENABLE_TRACING=true\nSAMPLER_TYPE=probabilistic\nSAMPLER_PARAMETERS=0.1\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Build Output")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: ResourceDistribution\nmetadata:\n  ... ...\nspec:\n  resource:\n    apiVersion: v1\n    data:\n      ENABLE_TRACING: "true"\n      SAMPLER_TYPE: "probabilistic"\n      SAMPLER_PARAMETERS: "0.1"\n    kind: ConfigMap\n    metadata:\n      name: cmname\n  targets:\n    ... ...\n')),(0,i.kt)("h3",{id:"targets-field"},"Targets Field"),(0,i.kt)("p",null,"The usage of the ",(0,i.kt)("inlineCode",{parentName:"p"},"targets")," field is basically the same as that of the ",(0,i.kt)("inlineCode",{parentName:"p"},"targets")," field in ResourceDistribution. Note that the contents of the ",(0,i.kt)("inlineCode",{parentName:"p"},"includedNamespaces")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"excludedNamespaces")," fields are directly the names of the namespaces."),(0,i.kt)("p",null,"A correctly configured targets field is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: ResourceDistributionGenerator\nmetadata:\n  ... ... \nresource:\n    ... ...\ntargets:\n  allNamespaces: true\n  excludedNamespaces:\n    - ns-2\n  includedNamespaces:\n    - ns-1\n  namespaceLabelSelector:\n    matchLabels:\n      group: "test"\n')),(0,i.kt)("h3",{id:"options-and-resourceoptions-field"},"Options and ResourceOptions Field"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"resourceOptions")," fields are used to set annotations or labels for the generated ResourceDistribution and the Resource (ie ConfigMap or Secret) in it, respectively."),(0,i.kt)("p",null,"A correctly configured ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"resourceOptions")," fields is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: ResourceDistributionGenerator\nmetadata:\n  ... ... \nresource:\n  ... ...\n  resourceOptions:\n    annotations:\n      dashboard: "1"\n    labels:\n      environment: "dev"\ntargets:\n    ... ...\noptions:\n  annotations:\n    type: "slave"\n  labels:\n    version: "stable"\n')),(0,i.kt)("h3",{id:"a-complete-use-case"},"A Complete Use Case"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a demo directory as a workspace and enter. Place the downloaded ResourceDistributionGenerator plugin in the current directory and enter the following command to create a configuration file named rdGenerator.yaml.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'cat > rdGenerator.yaml <<EOF\n#rdGenerator.yaml\napiVersion: apps.kruise.io/v1alpha1\nkind: ResourceDistributionGenerator\nmetadata:\n  name: rdname\n  annotations:\n    config.kubernetes.io/function: |\n      exec:\n        path: ./resourcedistributiongenerator\nresource:\n  resourceKind: ConfigMap\n  resourceName: cmname\n  files:\n    - application.properties\n  literals:\n    - JAVA_HOME=/opt/java/jdk\n  resourceOptions:\n    annotations:\n      dashboard: "1"\noptions:\n  labels:\n    app.kubernetes.io/name: "app1"\ntargets:\n  includedNamespaces:\n    - ns-1\n  namespaceLabelSelector:\n    matchLabels:\n      group: "test"\nEOF\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Create the application.properties file using the following command as file input.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"cat > application.properties <<EOF\nFOO=Bar\nFIRST=1\nSECOND=2\nLAST=3\nEOF\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Create the kustomization file with the following command.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"cat > kustomization.yaml <<EOF\n#kustomization.yaml\napiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\ngenerators:\n- rdGenerator.yaml\nEOF\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"kustomize build --enable-alpha-plugins --enable-exec .")," command to build application, the effect is as follows")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: ResourceDistribution\nmetadata:\n  labels:\n    app.kubernetes.io/name: app1\n  name: rdname\nspec:\n  resource:\n    apiVersion: v1\n    data:\n      JAVA_HOME: /opt/java/jdk\n      application.properties: |\n        FOO=Bar\n        FIRST=1\n        SECOND=2\n        LAST=3\n    kind: ConfigMap\n    metadata:\n      annotations:\n        dashboard: "1"\n      name: cmname\n  targets:\n    includedNamespaces:\n      list:\n      - name: ns-1\n    namespaceLabelSelector:\n      matchLabels:\n        group: test\n')),(0,i.kt)("h3",{id:"use-the-resourcedistribution-generator-in-argocd"},"Use the ResourceDistribution Generator in ArgoCD"),(0,i.kt)("p",null,"In argocd, the usage of the kustomize plugin is the same as above. In addition to that, add a build option to kustomize that allows third-party plugins. Find the configMap named argocd-cm in the kubernetes cluster and add the following to the ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," field ",(0,i.kt)("inlineCode",{parentName:"p"},"kustomize.buildOptions : --enable-alpha-plugins --enable-exec")," to add build options for third-party plugins to the default version of kustomize. See ",(0,i.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/user-guide/kustomize/#kustomize-build-optionsparameters"},"ArgoCD")," for more information. ",(0,i.kt)("strong",{parentName:"p"},"You can use this ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/openkruise/samples/tree/master/resourcedistribution-generator"},"sample")," directly in argocd"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: argocd-cm\n  namespace: argocd\n  labels:\n    app.kubernetes.io/name: argocd-cm\n    app.kubernetes.io/part-of: argocd\ndata:\n    kustomize.buildOptions: --enable-alpha-plugins --enable-exec\n")),(0,i.kt)("h4",{id:"the-use-of-plug-in"},"The use of plug-in"),(0,i.kt)("p",null,"Add the resourcedistributiongenerator plugin to argocd's git repository and fill in the plugin location in the annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"config.kubernetes.io/function")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"#rdGenerator.yaml\napiVersion: apps.kruise.io/v1alpha1\nkind: ResourceDistributionGenerator\nmetadata:\n  ...\n  annotations:\n    config.kubernetes.io/function: |\n      exec:\n        path: ./resourcedistributiongenerator\n")),(0,i.kt)("p",null,"Referenced by the generator field of kustomization.yaml."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"#kustomization.yaml\napiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\ngenerators:\n- rdGenerator.yaml\n")),(0,i.kt)("p",null,"After uploading the Git repository, deploy the project by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"argocd app sync myapp")," command or clicking the Sync button in the UI."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ContainerRecreateRequest",src:n(7088).Z,width:"2012",height:"1138"})))}m.isMDXComponent=!0},7088:function(e,t,n){t.Z=n.p+"assets/images/resourcedistributiongenerator-c0493bac80f654213addb9c50fc59743.png"}}]);