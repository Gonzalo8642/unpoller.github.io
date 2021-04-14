(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{106:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var r=t(0),o=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),p=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,h=u["".concat(a,".").concat(d)]||u[d]||b[d]||l;return t?o.a.createElement(h,i(i({ref:n},c),{},{components:t})):o.a.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return c}));var r=t(3),o=(t(0),t(106));const l={id:"prometheus",title:"Prometheus"},a={unversionedId:"dependencies/prometheus",id:"dependencies/prometheus",isDocsHomePage:!1,title:"Prometheus",description:"Prometheus support was add in the 1.6 release, but was never very well documented.",source:"@site/docs/dependencies/prometheus.md",slug:"/dependencies/prometheus",permalink:"/docs/dependencies/prometheus",version:"current",sidebar:"someSidebar",previous:{title:"Grafana",permalink:"/docs/dependencies/grafana"},next:{title:"Loki",permalink:"/docs/dependencies/loki"}},i=[{value:"Single Controller",id:"single-controller",children:[]},{value:"Multiple Controllers",id:"multiple-controllers",children:[{value:"First Approach",id:"first-approach",children:[]},{value:"Second Approach",id:"second-approach",children:[]},{value:"Final Approach, NOT Recommended",id:"final-approach-not-recommended",children:[]}]}],s={toc:i};function c({components:e,...n}){return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Prometheus support was add in the 1.6 release, but was never very well documented.\nRelease 2.0 brings with it a re-write of the prometheus integration.\nMany changes were made to how one may configure a controller. This page only applies to version 2.0.1+."),Object(o.b)("p",null,"This page explains how to configure Prometheus and UniFi-Poller.\nFor help installing Prometheus you'll have to look elsewhere; that's not in this wiki at this time.\nIf you need help getting start,\n",Object(o.b)("a",{parentName:"p",href:"../dependencies/influxdb"},"InfluxDB")," is recommended."),Object(o.b)("h2",{id:"single-controller"},"Single Controller"),Object(o.b)("p",null,"Configure a single controller in ",Object(o.b)("inlineCode",{parentName:"p"},"up.conf")," (or using environment variables).\nSee ",Object(o.b)("a",{parentName:"p",href:"../install/configuration"},"Application Configuration")," and the\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/blob/master/examples/up.conf.example"},"example config file"),"\nfor help with that."),Object(o.b)("p",null,"Then you simply point prometheus at unifi-poller using a config like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n  - job_name: 'unifipoller'\n    scrape_interval: 30s\n    static_configs:\n    - targets: ['localhost:9130']\n")),Object(o.b)("p",null,"If you have other scrape configs, leave them there. Just add a new one for ",Object(o.b)("inlineCode",{parentName:"p"},"unifipoller"),".\nReplace localhost with the IP of the host running Poller.\nThat's it! Restart Prometheus and it should begin to scrape data from your controller through Poller."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"UniFi Poller needs to be accessible on TCP port 9130.\nThis may require exposing ports or modifying firewalls."))),Object(o.b)("h2",{id:"multiple-controllers"},"Multiple Controllers"),Object(o.b)("p",null,"You can either configure the controllers in unifi-poller or poll them unconfigured.\nWhen polling unconfigured, you must enable dynamic.\nYou can scrape multiple controllers in several ways. Here is a list of options:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Set all controller user/passwords the same and pass in controller URLs from Prometheus.\nTo do this, you set the username and password as the default in the unifi config."),Object(o.b)("li",{parentName:"ol"},"Configure each controller in unifi-poller and pass in urls from Prometheus.\nThis allows them to have different usernames and passwords."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"NOT Recommended:")," Configure each controller in unifi-poller and configure\nprometheus as shown above in the Single Controller section. This is useful when you\nwant to poll all the controllers at the same time from a single prometheus instance.")),Object(o.b)("h3",{id:"first-approach"},"First Approach"),Object(o.b)("p",null,"This describes approach 1 above."),Object(o.b)("p",null,"Using this approach all you need to configure for controllers in unifi-poller is the name\nand password. Example below. Any settings you provide to ","[unifi.defaults]"," will be used\nfor all controllers passed in from Prometheus. All other settings are optional."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-toml"},'[unifi]\n  # This must be enabled to do dynamic polls against unconfigured urls.\n  dynamic = true\n[unifi.defaults]\n  user       = "unifipoller"\n  pass       = "unifipoller"\n  sites      = ["all"]\n  save_ids   = false\n  save_dpi   = false\n  save_sites = true\n  verify_ssl = false\n')),Object(o.b)("p",null,"Or with env variables:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'UP_UNIFI_DYNAMIC=true\nUP_UNIFI_DEFAULT_USER="unifipoller"\nUP_UNIFI_DEFAULT_PASS="unifipoller"\n')),Object(o.b)("h3",{id:"second-approach"},"Second Approach"),Object(o.b)("p",null,"This describes approach 2 above."),Object(o.b)("p",null,"Configure each controller in up.conf or using environment variables.\nWhen Prometheus scrapes from unifi-poller the poller will map the URL directly to the one configured\nin up.conf (or using env vars). Just make sure the url you put into the prometheus configuration\nmatches the url put into the poller configuration."),Object(o.b)("p",null,"Example polling two controllers:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-toml"},'[unifi]\n  # Not needed since not dynamic.\n  dynamic = false\n[[unifi.controller]]\n  url = "http://unifi.controller:8443"\n  user = "unifipoller1"\n  pass = "unifipoller1"\n[[unifi.controller]]\n  url = "http://another.controller:8443"\n  user = "unifipoller2"\n  pass = "unifipoller2"\n')),Object(o.b)("p",null,"Or with env variables:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'UP_UNIFI_DYNAMIC=false\nUP_UNIFI_CONTROLLER_0_URL="http://unifi.controller:8443"\nUP_UNIFI_CONTROLLER_0_USER="unifipoller"\nUP_UNIFI_CONTROLLER_0_PASS="unifipoller"\nUP_UNIFI_CONTROLLER_1_URL="http://another.controller:8443"\nUP_UNIFI_CONTROLLER_1_USER="unifipoller"\nUP_UNIFI_CONTROLLER_1_PASS="unifipoller"\n')),Object(o.b)("h4",{id:"prometheus-configuration-for-urls"},"Prometheus Configuration for URLs"),Object(o.b)("p",null,"This applies to both approaches above. Configure prometheus like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n  - job_name: 'unifipoller'\n    scrape_interval: 30s\n    static_configs:\n      - targets:\n        - https://unifi.controller:8443\n        - https://another.controller:8443\n    metrics_path: /scrape\n    relabel_configs:\n     - source_labels: [__address__]\n       target_label: __param_target\n     - source_labels: [__param_target]\n       target_label: instance\n     - target_label: __address__\n       replacement: localhost:9130\n")),Object(o.b)("p",null,"Replace ",Object(o.b)("inlineCode",{parentName:"p"},"localhost")," with the IP of your unifi-poller host, and replace ",Object(o.b)("inlineCode",{parentName:"p"},"unifi.controller"),"\nand another.controller with the IPs of your controllers."),Object(o.b)("h3",{id:"final-approach-not-recommended"},"Final Approach, NOT Recommended"),Object(o.b)("p",null,"Just configure your controllers in ",Object(o.b)("inlineCode",{parentName:"p"},"up.conf")," or using env variables as explained in the\n",Object(o.b)("a",{parentName:"p",href:"../install/configuration"},"Application Configuration")," page. Then setup Prometheus like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n  - job_name: 'unifipoller'\n    scrape_interval: 30s\n    static_configs:\n    - targets: ['localhost:9130']\n")),Object(o.b)("p",null,"The standard ",Object(o.b)("inlineCode",{parentName:"p"},"/metrics")," path that the above snippet uses returns metrics for all configured controllers."))}c.isMDXComponent=!0}}]);