"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8992],{70491:function(e,a,i){i.r(a),i.d(a,{_frontmatter:function(){return o},default:function(){return p}});var l=i(87462),c=i(63366),n=(i(15007),i(64983)),t=i(91515),s=["components"],o={},d={_frontmatter:o},r=t.Z;function p(e){var a=e.components,i=(0,c.Z)(e,s);return(0,n.mdx)(r,(0,l.Z)({},d,i,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"lifecycle-for-edge-network-behavior-reference"},"Lifecycle for Edge Network behavior reference"),(0,n.mdx)("p",null,"The Lifecycle for Edge Network extension introduces a new way of collecting Lifecycle data and tracking sessions. Unlike the previous Lifecycle extension, which used a configurable timeout window for session tracking, this extension emits Application Launch and Close events, treating each pair as an independent session. As a result of not relying on a session timeout window to identify new sessions, the potential Lifecycle states are simplified."),(0,n.mdx)("h2",{id:"general-behavior"},"General behavior"),(0,n.mdx)("p",null,"The Lifecycle for Edge Network extension relies solely on the Lifecycle events dispatched by the ",(0,n.mdx)("a",{parentName:"p",href:"../../home/base/mobile-core/lifecycle/api-reference.md#lifecyclestart"},(0,n.mdx)("inlineCode",{parentName:"a"},"lifecycleStart"))," and ",(0,n.mdx)("a",{parentName:"p",href:"../../home/base/mobile-core/lifecycle/api-reference.md#lifecyclepause"},(0,n.mdx)("inlineCode",{parentName:"a"},"lifecyclePause"))," calls to determine the start and end of new sessions and to calculate lifecycle data."),(0,n.mdx)("p",null,"A Lifecycle session is the time between a ",(0,n.mdx)("inlineCode",{parentName:"p"},"lifecycleStart")," call and a ",(0,n.mdx)("inlineCode",{parentName:"p"},"lifecyclePause")," call. A new session is detected when ",(0,n.mdx)("inlineCode",{parentName:"p"},"lifecycleStart")," is called after app first launch or after a ",(0,n.mdx)("inlineCode",{parentName:"p"},"lifecyclePause"),"."),(0,n.mdx)("p",null,"All events that are not Lifecycle start or Lifecycle pause do not affect Lifecycle state or data. Starting MobileCore using ",(0,n.mdx)("inlineCode",{parentName:"p"},"registerExtensions")," does not automatically start a Lifecycle session nor does it affect Lifecycle data."),(0,n.mdx)("h4",{id:"event-reference"},"Event reference"),(0,n.mdx)("p",null,"Events dispatched by the Lifecycle extension to support Adobe Experience Platform Edge Network workflows include:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"../../home/base/mobile-core/lifecycle/event-reference.md#lifecycle-application-foreground"},"Lifecycle Application Launch (Foreground)")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"../../home/base/mobile-core/lifecycle/event-reference.md#lifecycle-application-background"},"Lifecycle Application Close (Background)"))),(0,n.mdx)("p",null,"For full event details, please read the ",(0,n.mdx)("a",{parentName:"p",href:"../../home/base/mobile-core/lifecycle/event-reference.md"},"Lifecycle event reference"),"."),(0,n.mdx)("h4",{id:"data-payloads"},"Data payloads"),(0,n.mdx)("p",null,"The Lifecycle for Edge Network event payloads are defined by the Platform Mobile Lifecycle Details XDM field group, and include information about the application, device, and environment when the event occurred. Please refer to ",(0,n.mdx)("a",{parentName:"p",href:"metrics.md"},"Lifecycle for Edge Network data")," for the data included with these events."),(0,n.mdx)("h2",{id:"expected-lifecycle-scenarios"},"Expected Lifecycle scenarios"),(0,n.mdx)("p",null,"The following Lifecycle workflows show examples of the expected ordering of Lifecycle events."),(0,n.mdx)("h3",{id:"app-launch-and-close"},"App launch and close"),(0,n.mdx)("p",null,"This scenario shows the standard Lifecycle workflow, with expected Lifecycle API calls."),(0,n.mdx)("p",null,(0,n.mdx)("img",{parentName:"p",src:"/aep-mobile-sdkdocs/assets/b5e0f27e5c72ae6fa68c697329e54907/lifecycle-app-launch-and-close.svg",alt:null})),(0,n.mdx)("h3",{id:"on-app-crash-or-force-close"},"On app crash or force close"),(0,n.mdx)("p",null,"This scenario shows the standard Lifecycle workflow when the application crashes or is force closed, preventing ",(0,n.mdx)("inlineCode",{parentName:"p"},"lifecyclePause")," from being called."),(0,n.mdx)("p",null,(0,n.mdx)("img",{parentName:"p",src:"/aep-mobile-sdkdocs/assets/e2ea162b85a1d68463f8322f94e01540/lifecycle-crash.svg",alt:null})),(0,n.mdx)("h3",{id:"rapid-successive-lifecyclepause-and-lifecyclestart-calls"},"Rapid successive lifecyclePause and lifecycleStart calls"),(0,n.mdx)("p",null,"This scenario shows the handling of rapid successive calls to ",(0,n.mdx)("inlineCode",{parentName:"p"},"lifecyclePause")," followed by ",(0,n.mdx)("inlineCode",{parentName:"p"},"lifecycleStart"),". This is designed to accommodate use cases such as in Android, where Lifecycle APIs are linked to the Android Activity lifecycle callback methods. When users transition between activities within the same app, this logic prevents these transitions from being tracked as individual sessions."),(0,n.mdx)("p",null,(0,n.mdx)("img",{parentName:"p",src:"/aep-mobile-sdkdocs/assets/eb387acfd6fcc8b7b7235ea8288e7ba7/lifecycle-rapid-successive-calls.svg",alt:null})),(0,n.mdx)("h2",{id:"troubleshooting-unexpected-lifecycle-scenarios"},"Troubleshooting unexpected Lifecycle scenarios"),(0,n.mdx)("p",null,"The following Lifecycle workflows show examples of the unexpected ordering of Lifecycle events that can impact Lifecycle data and can indicate an incorrect implementation of the Lifecycle APIs. To address the following scenarios, refer to the ",(0,n.mdx)("a",{parentName:"p",href:"../../home/base/mobile-core/lifecycle/index.md#register-lifecycle-with-mobile-core-and-add-appropriate-startpause-calls"},"implementation guide for Lifecycle"),"."),(0,n.mdx)("h3",{id:"consecutive-lifecycle-api-calls"},"Consecutive Lifecycle API calls"),(0,n.mdx)("p",null,"Consecutive ",(0,n.mdx)("inlineCode",{parentName:"p"},"lifecycleStart")," and consecutive ",(0,n.mdx)("inlineCode",{parentName:"p"},"lifecyclePause")," API calls will not update their respective timestamps stored in persistence, and Lifecycle data is not changed."),(0,n.mdx)("h4",{id:"consecutive-lifecyclestart-api-calls"},"Consecutive ",(0,n.mdx)("inlineCode",{parentName:"h4"},"lifecycleStart")," API calls"),(0,n.mdx)("p",null,(0,n.mdx)("img",{parentName:"p",src:"/aep-mobile-sdkdocs/assets/822736cf6a76cce90c4b0073fa8cbe6b/lifecycle-start-after-start.svg",alt:null})),(0,n.mdx)("h4",{id:"consecutive-lifecyclepause-api-calls"},"Consecutive ",(0,n.mdx)("inlineCode",{parentName:"h4"},"lifecyclePause")," API calls"),(0,n.mdx)("p",null,(0,n.mdx)("img",{parentName:"p",src:"/aep-mobile-sdkdocs/assets/16f3db44f4426c60a1562e0164474ff0/lifecycle-pause-after-pause.svg",alt:null})),(0,n.mdx)("h3",{id:"missing-pause-app-terminated"},"Missing pause, app terminated"),(0,n.mdx)("p",null,"This scenario looks the same as a standard crash, but the underlying reason is an incorrect implementation where ",(0,n.mdx)("inlineCode",{parentName:"p"},"lifecyclePause")," is not called before the app is terminated."),(0,n.mdx)("p",null,(0,n.mdx)("img",{parentName:"p",src:"/aep-mobile-sdkdocs/assets/d2173d34a0f0b4c7021fd2cd77da52c9/lifecycle-missing-pause-terminated.svg",alt:null})),(0,n.mdx)("h3",{id:"missing-pause-app-still-in-memory"},"Missing pause, app still in memory"),(0,n.mdx)("p",null,"This scenario shows an example of ",(0,n.mdx)("a",{parentName:"p",href:"#consecutive-lifecyclestart-api-calls"},"consecutive ",(0,n.mdx)("inlineCode",{parentName:"a"},"lifecycleStart")," API calls"),". The app close is not detected because ",(0,n.mdx)("inlineCode",{parentName:"p"},"lifecyclePause")," is not called. As the app is not removed from memory, the current session continues."),(0,n.mdx)("p",null,(0,n.mdx)("img",{parentName:"p",src:"/aep-mobile-sdkdocs/assets/e64ee3aa8ab3e72d1d539a342fba96d1/lifecycle-missing-pause-not-terminated.svg",alt:null})),(0,n.mdx)("p",null,"In this scenario, the ",(0,n.mdx)("inlineCode",{parentName:"p"},"lifecycleStart")," call (5a) is not detected as a new session nor a crash. It will have the consequence of a ",(0,n.mdx)("a",{parentName:"p",href:"#consecutive-lifecyclestart-api-calls"},"consecutive ",(0,n.mdx)("inlineCode",{parentName:"a"},"lifecycleStart")," API call"),"."),(0,n.mdx)("h3",{id:"missing-start"},"Missing start"),(0,n.mdx)("p",null,"This scenario shows an example of a missing ",(0,n.mdx)("inlineCode",{parentName:"p"},"lifecycleStart")," call (1). The new session is not detected because ",(0,n.mdx)("inlineCode",{parentName:"p"},"lifecycleStart")," is not called."),(0,n.mdx)("p",null,(0,n.mdx)("img",{parentName:"p",src:"/aep-mobile-sdkdocs/assets/728e0a2277d276e597e5c27b14cf6096/lifecycle-missing-start.svg",alt:null})),(0,n.mdx)("p",null,"In this scenario, the ",(0,n.mdx)("inlineCode",{parentName:"p"},"lifecyclePause")," call (3a) will dispatch an Application Close event only if the Lifecycle extension state is not already set to Pause (that is, ",(0,n.mdx)("inlineCode",{parentName:"p"},"lifecyclePause")," has not been called before the current call). Otherwise, it is effectively a ",(0,n.mdx)("a",{parentName:"p",href:"#consecutive-lifecyclepause-api-calls"},"consecutive ",(0,n.mdx)("inlineCode",{parentName:"a"},"lifecyclePause")," API call"),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-edge-lifecycle-for-edge-network-behavior-reference-md-5f268e00d82de49132f2.js.map