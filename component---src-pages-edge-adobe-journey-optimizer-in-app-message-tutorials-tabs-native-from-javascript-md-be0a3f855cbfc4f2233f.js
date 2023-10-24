"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4656],{80599:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return p},default:function(){return g}});var t,s=n(87462),i=n(63366),l=(n(15007),n(64983)),r=n(91515),o=["components"],p={},d=(t="Variant",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),m={_frontmatter:p},c=r.Z;function g(e){var a=e.components,n=(0,i.Z)(e,o);return(0,l.mdx)(c,(0,s.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)(d,{platform:"android",function:"register",repeat:"5",mdxType:"Variant"}),(0,l.mdx)("p",null,"In the ",(0,l.mdx)("inlineCode",{parentName:"p"},"shouldShowMessage")," function of the ",(0,l.mdx)("inlineCode",{parentName:"p"},"MessagingDelegate"),", call ",(0,l.mdx)("inlineCode",{parentName:"p"},"public void handleJavascriptMessage(final String name, final AdobeCallback<String> callback)")," to register your handler."),(0,l.mdx)("p",null,"The name of the message you intend to pass from the JavaScript side should be specified in the first parameter."),(0,l.mdx)("p",null,"The following example shows a handler that dispatches a ",(0,l.mdx)("inlineCode",{parentName:"p"},"decisioning.propositionInteract")," Experience Event natively when the JavaScript of the in-app message posts a ",(0,l.mdx)("inlineCode",{parentName:"p"},"myInappCallback")," message:"),(0,l.mdx)("h4",{id:"java"},"Java"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-java"},'@Override\npublic boolean shouldShowMessage(FullscreenMessage fullscreenMessage) {\n  Message message = (Message) fullscreenMessage.getParent();\n  \n  // in-line handling of JavaScript calls\n  message.handleJavascriptMessage("myInappCallback", new AdobeCallback<String>() {\n    @Override\n    public void call(String content) {\n      System.out.println("JavaScript body passed to native callback: " + content);\n      message.track(content, MessagingEdgeEventType.IN_APP_INTERACT);\n    }\n  });\n}\n')),(0,l.mdx)(d,{platform:"ios",function:"register",repeat:"5",mdxType:"Variant"}),(0,l.mdx)("p",null,"In the ",(0,l.mdx)("inlineCode",{parentName:"p"},"shouldShowMessage")," function of the ",(0,l.mdx)("inlineCode",{parentName:"p"},"MessagingDelegate"),", call ",(0,l.mdx)("a",{parentName:"p",href:"./class-message.md#handlejavascriptmessage_withhandler"},(0,l.mdx)("inlineCode",{parentName:"a"},"handleJavascriptMessage(_:withHandler)"))," to register your handler."),(0,l.mdx)("p",null,"The name of the message you intend to pass from the JavaScript side should be specified in the first parameter."),(0,l.mdx)("p",null,"The following example shows a handler that dispatches a ",(0,l.mdx)("inlineCode",{parentName:"p"},"decisioning.propositionInteract")," Experience Event natively when the JavaScript of the in-app message posts a ",(0,l.mdx)("inlineCode",{parentName:"p"},"myInappCallback")," message:"),(0,l.mdx)("h4",{id:"swift"},"Swift"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-swift"},'func shouldShowMessage(message: Showable) -> Bool {    \n    let fullscreenMessage = message as? FullscreenMessage\n    let message = fullscreenMessage?.parent\n\n    // in-line handling of JavaScript calls\n    message?.handleJavascriptMessage("myInappCallback") { content\n\n        print("JavaScript body passed to native callback: \\(content ?? "empty")")\n\n        message?.track(content as? String, withEdgeEventType: .inappInteract)\n    }\n\n    return true\n}\n')))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-edge-adobe-journey-optimizer-in-app-message-tutorials-tabs-native-from-javascript-md-be0a3f855cbfc4f2233f.js.map