"use strict";(self.webpackChunkpollerdox=self.webpackChunkpollerdox||[]).push([[164],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1606:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(3117),a=(t(7294),t(3905));const o={id:"docker",title:"Docker"},i=void 0,l={unversionedId:"install/docker",id:"install/docker",title:"Docker",description:"This page assumes that you have decided to start Unpoller with Docker using the command line.",source:"@site/docs/install/docker.md",sourceDirName:"install",slug:"/install/docker",permalink:"/docs/install/docker",draft:!1,tags:[],version:"current",frontMatter:{id:"docker",title:"Docker"},sidebar:"someSidebar",previous:{title:"Docker Compose",permalink:"/docs/install/dockercompose"},next:{title:"FreeBSD",permalink:"/docs/install/freebsd"}},s={},u=[{value:"First",id:"first",level:2},{value:"Pull the Image",id:"pull-the-image",level:2},{value:"Container Configuration",id:"container-configuration",level:2},{value:"Using Environment Variables",id:"using-environment-variables",level:3},{value:"Using Configuration File",id:"using-configuration-file",level:3},{value:"Next Steps",id:"next-steps",level:2}],p={toc:u};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page assumes that you have decided to start Unpoller with Docker using the command line."),(0,a.kt)("h2",{id:"first"},"First"),(0,a.kt)("p",null,"Make sure you have set up a user on your controller for Unpoller to poll. You must have\na working (and supported) version of ",(0,a.kt)("a",{parentName:"p",href:"../dependencies/grafana"},"Grafana")," and at\nleast one of ",(0,a.kt)("a",{parentName:"p",href:"../dependencies/influxDB"},"InfluxDB")," or ",(0,a.kt)("a",{parentName:"p",href:"../dependencies/prometheus"},"Prometheus"),".\nIf you don't have them, follow these instructions for installing\n",(0,a.kt)("a",{parentName:"p",href:"../dependencies/influxdb"},"InfluxDB")," and ",(0,a.kt)("a",{parentName:"p",href:"../dependencies/grafana"},"Grafana"),"."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"pull-the-image"},"Pull the Image"),(0,a.kt)("p",null,"First pull the image from Docker Hub using"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull golift/unpoller\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Details of tags available are described in ",(0,a.kt)("a",{parentName:"p",href:"../help/docker_faq"},"Docker - FAQ"),".")),(0,a.kt)("h2",{id:"container-configuration"},"Container Configuration"),(0,a.kt)("p",null,"Unpoller's Docker container can be configured in two ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Using environment variables."),(0,a.kt)("li",{parentName:"ol"},"Using a configuration file.")),(0,a.kt)("p",null,"There is a detailed description of the configuration parameters on the\n",(0,a.kt)("a",{parentName:"p",href:"../install/configuration"},"Application Configuration")," page.\nA decision should be made which method of configuration to use. Both are explained below."),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"When configuring make sure that you do ",(0,a.kt)("strong",{parentName:"p"},"not")," include ",(0,a.kt)("inlineCode",{parentName:"p"},":8443")," on the url of the controller\nif you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"unifios"),". Those are: UDM Pro, UDM, UXG, or CkoudKey with recent firmware.")),(0,a.kt)("h3",{id:"using-environment-variables"},"Using Environment Variables"),(0,a.kt)("p",null,"If you are using the command line and have decided to use environment variables then start the\ncontainer using the following command (and pass in other environment variables you wish to)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'docker run -e UP_UNIFI_DEFAULT_PASS="your-secret-pasword"  golift/unpoller:latest\n')),(0,a.kt)("h3",{id:"using-configuration-file"},"Using Configuration File"),(0,a.kt)("p",null,"If you choose to use a configuration file:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Copy this ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/unpoller/unpoller/blob/master/examples/up.conf.example"},"example config file")),(0,a.kt)("li",{parentName:"ul"},"Edit it as necessary (in particular ensure that the ",(0,a.kt)("inlineCode",{parentName:"li"},"[unifi]"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"user")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"pass")," variables are set)"),(0,a.kt)("li",{parentName:"ul"},"Save it as ",(0,a.kt)("inlineCode",{parentName:"li"},"unpoller.conf")," in the local location you use for Docker storage.")),(0,a.kt)("p",null,"Start the container by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -v /your-local-location/unpoller.conf:/config/unpoller.conf golift/unpoller\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Make sure that UniFi Poller is actively writing to the database before going any further.")),(0,a.kt)("p",null,"In both cases, if all has worked, then you should start seeing lines like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-none"},"[INFO] UniFi Metrics Recorded. Sites: 1, Clients: 67, UAP: 6, USG/UDM: 1, USW: 5, IDS Events: 0, Points: 1837, Fields: 11307, Errs: 0, Elapsed: 599ms\n")),(0,a.kt)("p",null,"If you don't see these lines then look for errors and double-check your work.\nIf you do then you can stop the container, and then start it again in daemon mode by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"-d")," flag."),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install ",(0,a.kt)("a",{parentName:"li",href:"/docs/dependencies/grafana"},"Grafana and Plugins"),"."),(0,a.kt)("li",{parentName:"ol"},"Finish ",(0,a.kt)("a",{parentName:"li",href:"../install/grafana"},"Setting-up Grafana"),".")))}c.isMDXComponent=!0}}]);