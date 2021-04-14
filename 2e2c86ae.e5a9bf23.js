(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{106:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),u=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=u(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(t),p=a,m=b["".concat(l,".").concat(p)]||b[p]||d[p]||i;return t?r.a.createElement(m,o(o({ref:n},c),{},{components:t})):r.a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return c}));var a=t(3),r=(t(0),t(106));const i={id:"webserver",title:"Webserver"},l={unversionedId:"advanced/webserver",id:"advanced/webserver",isDocsHomePage:!1,title:"Webserver",description:"Poller has a built-in and disabled by default web server.",source:"@site/docs/advanced/webserver.md",slug:"/advanced/webserver",permalink:"/docs/advanced/webserver",version:"current",sidebar:"someSidebar",previous:{title:"InfluxDB",permalink:"/docs/dependencies/influxdb"},next:{title:"API",permalink:"/docs/advanced/api"}},o=[{value:"Usage",id:"usage",children:[]},{value:"Authentication",id:"authentication",children:[{value:"Making a Password Hash",id:"making-a-password-hash",children:[]}]},{value:"Advanced",id:"advanced",children:[]}],s={toc:o};function c({components:e,...n}){return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Poller has a built-in and ",Object(r.b)("strong",{parentName:"p"},"disabled by default")," web server.\nThe web server provides some very basic information about your UniFi environment, devices and clients.\nAt the time of this writing it is ",Object(r.b)("a",{parentName:"p",href:"API"},"only an API"),", but a simple human interface (read-only) is planned."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"The web server was added in UniFi Poller v2.0.2.\n")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"You must enable the web server if you wish to use it.\nTo enable the web server without authentication this is all you need to do:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-toml"},"[webserver]\n  enable = true\n")),Object(r.b)("p",null,"or, with an environment variable:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"UP_WEBSERVER_ENABLE=true\n")),Object(r.b)("h2",{id:"authentication"},"Authentication"),Object(r.b)("p",null,"By default there is no authentication.\nTo enable authentication, add a username and password. Like this (",Object(r.b)("inlineCode",{parentName:"p"},"captain")," is the username):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-toml"},'[webserver.accounts]\n  username = "password hash goes here"\n  captain = "$2a$04$a2XvB0gvTXW6d4rHUXQdduUDBrQB3/2lGTxZXQ32Sd9hYDxrz.oHm"\n')),Object(r.b)("p",null,"Using an env variable (",Object(r.b)("inlineCode",{parentName:"p"},"captain")," is the username):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},'UP_WEBSERVER_ACCOUNTS_captain="$2a$04$a2XvB0gvTXW6d4rHUXQdduUDBrQB3/2lGTxZXQ32Sd9hYDxrz.oHm"\n')),Object(r.b)("h3",{id:"making-a-password-hash"},"Making a Password Hash"),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"unifi-poller")," to make a web server account password hash. Like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-console"},"unifi-poller -e -\nEnter Password:\n$2a$04$a2XvB0gvTXW6d4rHUXQdduUDBrQB3/2lGTxZXQ32Sd9hYDxrz.oHm\n")),Object(r.b)("p",null,"Using Docker:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker pull golift/unifi-poller\ndocker -it golift/unifi-poller -e -\nEnter Password:\n$2a$04$yOE5zjJs2Gg0jsGQpE7j2ucKiNndUGEzpX6BsLoKl0hkxBvE81z8.\n")),Object(r.b)("h2",{id:"advanced"},"Advanced"),Object(r.b)("p",null,"These are the advanced settings and their default values."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-toml"},'  port          = 37288\n  html_path     = "/usr/lib/unifi-poller/web"\n  ssl_cert_path = ""\n  ssl_key_path  = ""\n  max_events    = 200\n')),Object(r.b)("p",null,"The default HTML path is installed by any package or the Official Golift Docker image.\nThis usually does not need to be changed. Exception are BSD and macOS.\nThe HTML path on these OSes is /usr/local/lib/unifi-poller/web."),Object(r.b)("p",null,"An SSL listener may be enabled instead of standard HTTP by providing an SSL Cert File and Key File paths."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"max_events")," setting controls memory usage. For small or home sites you can safely set this to 1000 or higher.\nThis setting dictates how many logs are kept in memory.\nThe setting is a global setting that applies to all log queues.\nThere are several log queues per plugin."))}c.isMDXComponent=!0}}]);