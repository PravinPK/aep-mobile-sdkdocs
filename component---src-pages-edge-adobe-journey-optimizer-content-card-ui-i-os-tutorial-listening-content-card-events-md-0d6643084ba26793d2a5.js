"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5864],{63111:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return s},default:function(){return h}});var a=t(87462),i=t(63366),o=(t(15007),t(64983)),r=t(91515),d=["components"],s={},l=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",n)}},m=l("CodeBlock"),c=l("InlineAlert"),p={_frontmatter:s},u=r.Z;function h(e){var n=e.components,t=(0,i.Z)(e,d);return(0,o.mdx)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"listening-to-content-card-events"},"Listening to Content Card Events"),(0,o.mdx)("p",null,"This tutorial explains how to listen to content card events in your application."),(0,o.mdx)("h2",{id:"overview"},"Overview"),(0,o.mdx)("p",null,"The Messaging extension provides a way to listen to events from content cards displayed in your application. The following functions can be implemented in conformance with the ",(0,o.mdx)("a",{parentName:"p",href:"../public-classes/contentcarduieventlistening.md"},"ContentCardUIEventListening")," protocol:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"onDisplay")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"onDismiss")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"onInteract"))),(0,o.mdx)("h2",{id:"implement-contentcardeventlistening"},"Implement ContentCardEventListening"),(0,o.mdx)("p",null,"Complete the following steps to listen to content card events:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Conform to the ",(0,o.mdx)("a",{parentName:"li",href:"../public-classes/contentcarduieventlistening.md"},"ContentCardUIEventListening")," protocol in your class or struct and implement the desired methods."),(0,o.mdx)("li",{parentName:"ol"},"Pass the listener to the ",(0,o.mdx)("a",{parentName:"li",href:"../api-usage.md#getcontentcardsui"},"getContentCardsUI")," API.")),(0,o.mdx)("p",null,"Below is an example implementation of ",(0,o.mdx)("inlineCode",{parentName:"p"},"ContentCardEventListening"),":"),(0,o.mdx)(m,{slots:"heading, code",repeat:"1",languages:"Swift",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"swift"},"Swift"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},'struct HomePage: View, ContentCardUIEventListening {\n    \n    @State var savedCards : [ContentCardUI] = []\n    \n    var body: some View {\n        ScrollView (.vertical) {\n          // Display the content cards here\n        }\n        .onAppear() {\n            let homePageSurface = Surface(path: "homepage")\n            // 2. Pass the listener to the getContentCardsUI API\n            AEPSwiftUI.getContentCardsUI(for: homePageSurface,\n                                         listener: self) { result in\n                switch result {\n                case .success(let cards):\n                    savedCards = cards\n                    \n                case .failure(let error):\n                    // handle error here                    \n                }\n            }\n        }\n    }\n    \n    // Implement the ContentCardUIEventListening protocol methods\n    func onDisplay(_ card: ContentCardUI) {\n        // Handle the card display event\n    }\n    \n    func onDismiss(_ card: ContentCardUI) {\n        // Handle the card dismiss event\n    }\n    \n    func onInteract(_ card: ContentCardUI, _ interactionId: String, actionURL: URL?) -> Bool {\n        // Handle the card interaction event\n        return false\n    }\n}\n')),(0,o.mdx)("h2",{id:"handling-actionable-urls"},"Handling actionable URLs"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"onInteract")," method provides an optional ",(0,o.mdx)("inlineCode",{parentName:"p"},"actionURL")," parameter associated with the interaction event. The return value of this method determines how the URL is handled."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Returns ",(0,o.mdx)("inlineCode",{parentName:"p"},"true")," if your application has successfully handled the URL. This indicates to the SDK that no further action is needed.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Returns ",(0,o.mdx)("inlineCode",{parentName:"p"},"false")," to allow the SDK to process the URL."))),(0,o.mdx)(m,{slots:"heading, code",repeat:"1",languages:"Swift",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"swift-1"},"Swift"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"func onInteract(_ card: ContentCardUI, _ interactionId: String, actionURL: URL?) -> Bool {\n    guard let url = actionURL else { return false }\n    \n    // Your application handles the actionable URL here\n\n    // Return true to indicate that the SDK need not process the URL\n    return true\n}\n")),(0,o.mdx)("h2",{id:"removing-content-cards-on-dismiss"},"Removing content cards on dismiss"),(0,o.mdx)(c,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Removing a dismissed content card from the UI is the responsibility of the app developer."),(0,o.mdx)("p",null,"To remove a content card from the UI when the user dismisses it, implement the ",(0,o.mdx)("inlineCode",{parentName:"p"},"onDismiss")," method:"),(0,o.mdx)(m,{slots:"heading, code",repeat:"1",languages:"Swift",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"swift-2"},"Swift"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"    func onDismiss(_ card: ContentCardUI) {\n        savedCards.removeAll(where: { $0.id == card.id })\n    }\n")),(0,o.mdx)("p",null,"This implementation ensures that the dismissed card is removed from the ",(0,o.mdx)("inlineCode",{parentName:"p"},"savedCards")," array, which should trigger a UI update if the array is used to populate your view."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-edge-adobe-journey-optimizer-content-card-ui-i-os-tutorial-listening-content-card-events-md-0d6643084ba26793d2a5.js.map