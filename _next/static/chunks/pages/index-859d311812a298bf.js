(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2725:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4979)}])},4979:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return a}});var o=n(5893),i=n(2673),r=n(3393),t=n(2702);n(9128);var l=n(2643);let a=[{depth:2,value:"About",id:"about"},{depth:2,value:"V6.0.0 Information",id:"v600-information"},{depth:2,value:"Usage",id:"usage"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",code:"code",h2:"h2",p:"p",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong",a:"a",pre:"pre",span:"span"},(0,l.a)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.h1,{children:["A ",(0,o.jsx)(s.code,{children:"<Video>"})," component for React Native"]}),"\n",(0,o.jsx)(s.h2,{id:"about",children:"About"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"react-native-video"})," is a React Native library that provides a Video component that renders media content such as videos and streams"]}),"\n",(0,o.jsx)(s.p,{children:"It allows to stream video files (m3u, mpd, mp4, ...) inside your react native application."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Exoplayer for android"}),"\n",(0,o.jsx)(s.li,{children:"AVplayer for iOS, tvOS and visionOS"}),"\n",(0,o.jsx)(s.li,{children:"Windows UWP for windows"}),"\n",(0,o.jsx)(s.li,{children:"Trick mode support"}),"\n",(0,o.jsx)(s.li,{children:"Subtitles (embeded or side loaded)"}),"\n",(0,o.jsx)(s.li,{children:"DRM support"}),"\n",(0,o.jsx)(s.li,{children:"Client side Ads insertion (via google IMA)"}),"\n",(0,o.jsx)(s.li,{children:"Pip (ios)"}),"\n",(0,o.jsx)(s.li,{children:"Embedded playback controls"}),"\n",(0,o.jsx)(s.li,{children:"And much more"}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"The aim of this package is to have a thin and exhaustive control of player."}),"\n",(0,o.jsx)(s.h2,{id:"v600-information",children:"V6.0.0 Information"}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.p,{children:["⚠️ ",(0,o.jsx)(s.strong,{children:"Version 6"}),": The following documentation refer to features only available through the v6.0.0 releases.\nAs major rework has been done in case of doubt, you can still use ",(0,o.jsx)(s.a,{href:"https://github.com/TheWidlarzGroup/react-native-video/blob/v5.2.0/README.md",children:"version 5.2.x, see documentation"})]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Version 6.x requires ",(0,o.jsx)(s.strong,{children:"react-native >= 0.68.2"})]}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsxs)(s.p,{children:["⚠️ from ",(0,o.jsx)(s.strong,{children:"6.0.0-beta.8"})," requires also ",(0,o.jsx)(s.strong,{children:"iOS >= 13.0"})," (default in react-native 0.73)"]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["For older versions of react-native, ",(0,o.jsx)(s.a,{href:"https://github.com/TheWidlarzGroup/react-native-video/tree/v5.2.0",children:"please use version 5.x"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(s.pre,{"data-language":"javascript","data-theme":"default",children:(0,o.jsxs)(s.code,{"data-language":"javascript","data-theme":"default",children:[(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Load the module"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" Video"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {VideoRef} "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'react-native-video'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:" "}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Within your render function, assuming you have a file called"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:'// "background.mp4" in your project. You can include multiple videos'})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// on a single screen if you like."})}),"\n",(0,o.jsx)(s.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"VideoPlayer"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"videoRef"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"useRef"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"VideoRef"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">("}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"background"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"require"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./background.mp4'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"   <"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Video"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Can be a URL or a local file."})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"source"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{background}"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Store reference  "})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ref"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{videoRef}"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Callback when remote video is buffering                                      "})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"onBuffer"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{onBuffer}"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Callback when video cannot be loaded              "})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"onError"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{onError}               "})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"style"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"styles"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".backgroundVideo}"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"   />"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" )"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:" "}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Later on in your styles.."})}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"var"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" styles "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"StyleSheet"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".create"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  backgroundVideo"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    position"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'absolute'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    top"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    left"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    bottom"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    right"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})})]})})]})}let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.a)(),e.components);return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/index.md",route:"/",timestamp:1715095509e3,pageMap:[{kind:"Meta",data:{index:"Introduction",installation:"Installation",component:"API",other:"Other",separator_versions:{type:"separator",title:""},updating:"Updating",changelog:{title:"Changelog",newWindow:!0,href:"https://github.com/TheWidlarzGroup/react-native-video/blob/master/CHANGELOG.md"},separator_community:{type:"separator",title:""},projects:"Useful projects"}},{kind:"Folder",name:"component",route:"/component",children:[{kind:"Meta",data:{props:"Properties",drm:"DRM",ads:"Ads",events:"Events",methods:"Methods"}},{kind:"MdxPage",name:"ads",route:"/component/ads"},{kind:"MdxPage",name:"drm",route:"/component/drm"},{kind:"MdxPage",name:"events",route:"/component/events"},{kind:"MdxPage",name:"methods",route:"/component/methods"},{kind:"MdxPage",name:"props",route:"/component/props"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"other",route:"/other",children:[{kind:"Meta",data:{caching:"Caching",misc:"Misc",debug:"Debugging","new-arch":"New Architecture"}},{kind:"MdxPage",name:"caching",route:"/other/caching"},{kind:"MdxPage",name:"debug",route:"/other/debug"},{kind:"MdxPage",name:"misc",route:"/other/misc"},{kind:"MdxPage",name:"new-arch",route:"/other/new-arch"}]},{kind:"MdxPage",name:"projects",route:"/projects"},{kind:"MdxPage",name:"updating",route:"/updating"}],flexsearch:{codeblocks:!0},title:"A <Video> component for React Native",headings:a},pageNextRoute:"/",nextraLayout:r.ZP,themeConfig:t.Z};s.default=(0,i.j)(c)},2702:function(e,s,n){"use strict";var o=n(5893);n(7294),s.Z={head:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{name:"language",content:"en"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,o.jsx)("meta",{name:"description",content:"Video component for React Native"}),(0,o.jsx)("meta",{name:"og:title",content:"React Native Video"}),(0,o.jsx)("meta",{name:"og:description",content:"A Video component for React Native"}),(0,o.jsx)("meta",{name:"og:image",content:"https://react-native-video.github.io/react-native-video/thumbnail.jpg"}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{name:"twitter:title",content:"React Native Video"}),(0,o.jsx)("meta",{name:"twitter:description",content:"A Video component for React Native"}),(0,o.jsx)("meta",{name:"twitter:image",content:"https://react-native-video.github.io/react-native-video/thumbnail.jpg"}),(0,o.jsx)("meta",{name:"twitter:image:alt",content:"React Native Video"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,o.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap",rel:"stylesheet"})]}),logo:(0,o.jsxs)("span",{children:["\uD83C\uDFAC ",(0,o.jsx)("strong",{children:"Video component"})," for React Native"]}),faviconGlyph:"\uD83C\uDFAC",project:{link:"https://github.com/TheWidlarzGroup/react-native-video"},docsRepositoryBase:"https://github.com/TheWidlarzGroup/react-native-video/tree/master/docs/",footer:{text:(0,o.jsxs)("span",{children:["Built with love ❤️ by ",(0,o.jsx)("strong",{children:"React Native Community"})]})},useNextSeoProps:()=>({titleTemplate:"%s – Video"})}},5789:function(){}},function(e){e.O(0,[774,890,888,179],function(){return e(e.s=2725)}),_N_E=e.O()}]);