"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[1530],{898:function(e,d,a){a.r(d),a.d(d,{_frontmatter:function(){return o},default:function(){return f}});var n=a(87462),t=a(63366),i=(a(15007),a(64983)),s=a(91515),c=["components"],o={},p={_frontmatter:o},r=s.Z;function f(e){var d=e.components,a=(0,t.Z)(e,c);return(0,i.mdx)(r,(0,n.Z)({},p,a,{components:d,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"manage-dependencies-using-gradle"},"Manage dependencies using Gradle"),(0,i.mdx)("p",null,"Installation via ",(0,i.mdx)("a",{parentName:"p",href:"https://maven.apache.org/"},"Maven")," and ",(0,i.mdx)("a",{parentName:"p",href:"https://gradle.org/"},"Gradle")," is recommended, as it's the easiest way to get the Adobe Experience Platform Mobile SDK into your Android app."),(0,i.mdx)("p",null,"The Android installation instructions generated for mobile properties in the Data Collection UI, as indicated in the ",(0,i.mdx)("a",{parentName:"p",href:"../home/getting-started/get-the-sdk.md"},"getting started guide"),", use dynamic versioning for Gradle dependencies. This is done to simplify getting started with the latest versions of our SDKs. Use of dynamic dependency versions is ",(0,i.mdx)("strong",{parentName:"p"},"not")," recommended, as it makes builds non-deterministic, which can cause builds to break without any obvious change, and worse, can be caused by a transitive dependency that the build author has no control over."),(0,i.mdx)("p",null,"To have predictable builds, follow one of the following approaches when managing gradle dependencies."),(0,i.mdx)("h2",{id:"resolve-dependencies-using-ide"},"Resolve dependencies using IDE"),(0,i.mdx)("p",null,"To ensure consistent builds, explicitly specify the versions of dependencies and manually update them as necessary. This allows for full control over version updates and the ability to thoroughly review the dependency changelog and assess the changes before implementation."),(0,i.mdx)("p",null,"IDEs such as Android Studio or IntelliJ highlight dynamic or outdated dependencies as warnings. Follow the provided suggestions to update dependencies to appropriate versions."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"11.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/3f7df4f677685acf86c7fbedee54a9f7/5530d/dynamic-dependencies.webp 320w","/aep-mobile-sdkdocs/static/3f7df4f677685acf86c7fbedee54a9f7/0c8fb/dynamic-dependencies.webp 640w","/aep-mobile-sdkdocs/static/3f7df4f677685acf86c7fbedee54a9f7/94b1e/dynamic-dependencies.webp 1280w","/aep-mobile-sdkdocs/static/3f7df4f677685acf86c7fbedee54a9f7/0b34d/dynamic-dependencies.webp 1920w","/aep-mobile-sdkdocs/static/3f7df4f677685acf86c7fbedee54a9f7/d5269/dynamic-dependencies.webp 2560w","/aep-mobile-sdkdocs/static/3f7df4f677685acf86c7fbedee54a9f7/f5da0/dynamic-dependencies.webp 2562w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/3f7df4f677685acf86c7fbedee54a9f7/dd4a7/dynamic-dependencies.png 320w","/aep-mobile-sdkdocs/static/3f7df4f677685acf86c7fbedee54a9f7/0f09e/dynamic-dependencies.png 640w","/aep-mobile-sdkdocs/static/3f7df4f677685acf86c7fbedee54a9f7/bbbf7/dynamic-dependencies.png 1280w","/aep-mobile-sdkdocs/static/3f7df4f677685acf86c7fbedee54a9f7/ac7a9/dynamic-dependencies.png 1920w","/aep-mobile-sdkdocs/static/3f7df4f677685acf86c7fbedee54a9f7/c7a69/dynamic-dependencies.png 2560w","/aep-mobile-sdkdocs/static/3f7df4f677685acf86c7fbedee54a9f7/c2d10/dynamic-dependencies.png 2562w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/3f7df4f677685acf86c7fbedee54a9f7/bbbf7/dynamic-dependencies.png",alt:"Dynamic dependency warning",title:"Dynamic dependency warning",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\n",(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"15%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/8e271bec42c4f41f9d953bad637f3d2f/5530d/outdated-dependencies.webp 320w","/aep-mobile-sdkdocs/static/8e271bec42c4f41f9d953bad637f3d2f/0c8fb/outdated-dependencies.webp 640w","/aep-mobile-sdkdocs/static/8e271bec42c4f41f9d953bad637f3d2f/94b1e/outdated-dependencies.webp 1280w","/aep-mobile-sdkdocs/static/8e271bec42c4f41f9d953bad637f3d2f/0b34d/outdated-dependencies.webp 1920w","/aep-mobile-sdkdocs/static/8e271bec42c4f41f9d953bad637f3d2f/74a96/outdated-dependencies.webp 2070w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/8e271bec42c4f41f9d953bad637f3d2f/dd4a7/outdated-dependencies.png 320w","/aep-mobile-sdkdocs/static/8e271bec42c4f41f9d953bad637f3d2f/0f09e/outdated-dependencies.png 640w","/aep-mobile-sdkdocs/static/8e271bec42c4f41f9d953bad637f3d2f/bbbf7/outdated-dependencies.png 1280w","/aep-mobile-sdkdocs/static/8e271bec42c4f41f9d953bad637f3d2f/ac7a9/outdated-dependencies.png 1920w","/aep-mobile-sdkdocs/static/8e271bec42c4f41f9d953bad637f3d2f/e584c/outdated-dependencies.png 2070w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/8e271bec42c4f41f9d953bad637f3d2f/bbbf7/outdated-dependencies.png",alt:"Outdated dependency warning",title:"Outdated dependency warning",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("h2",{id:"locking-dependency-versions"},"Locking dependency versions"),(0,i.mdx)("p",null,"Gradle dependency locking is a feature that allows developers to lock the versions of dependencies used in a project, ensuring that the same versions are used consistently across different builds and environments. This increases a build's stability and predictability, and prevents version conflicts or unexpected behavior caused by using different versions of dependencies."),(0,i.mdx)("p",null,"Please refer to the gradle ",(0,i.mdx)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/dependency_locking.html"},"locking dependency versions guide")," to enable dependency locking in your project."))}f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-manage-gradle-dependencies-md-80af7fb04908fae9ab0c.js.map