"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5007],{25312:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return c},default:function(){return g}});var a,i=t(87462),r=t(63366),d=(t(15007),t(64983)),o=t(91515),l=["components"],c={},m=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),p={_frontmatter:c},s=o.Z;function g(e){var n=e.components,t=(0,r.Z)(e,l);return(0,d.mdx)(s,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"contentcard---deprecated"},"ContentCard - DEPRECATED"),(0,d.mdx)(m,{variant:"warning",slots:"header, text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"Notice of deprecation"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"ContentCard")," classes are deprecated as of ",(0,d.mdx)("inlineCode",{parentName:"p"},"v5.2.0")," (iOS) and ",(0,d.mdx)("inlineCode",{parentName:"p"},"v3.2.0")," (Android). They will be removed in the next major release of the Messaging extension."),(0,d.mdx)("p",null,"An object representing the default content card created in the Adobe Journey Optimizer UI."),(0,d.mdx)("p",null,"Content cards must be rendered by the app developer. Tracking a content card is done via calls to the ",(0,d.mdx)("a",{parentName:"p",href:"#track_withedgeeventtype"},(0,d.mdx)("inlineCode",{parentName:"a"},"track(_:withEdgeEventType:)"))," API."),(0,d.mdx)("h2",{id:"ios-interface"},"iOS Interface"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"@objc(AEPContentCard)\n@objcMembers\npublic class ContentCard: NSObject, Codable {\n    /// Plain-text title for the content card\n    public let title: String\n\n    /// Plain-text body representing the content for the content card\n    public let body: String\n\n    /// String representing a URI that contains an image to be used for this content card\n    public let imageUrl: String?\n\n    /// Contains a URL to be opened if the user interacts with the content card\n    public let actionUrl: String?\n\n    /// Required if `actionUrl` is provided. Text to be used in title of button or link in content card\n    public let actionTitle: String?\n\n    ...\n}\n")),(0,d.mdx)("h3",{id:"public-functions"},"Public functions"),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"track_withedgeeventtype"},"track(_:withEdgeEventType:)"),(0,d.mdx)("p",null,"Tracks an interaction with the given ",(0,d.mdx)("inlineCode",{parentName:"p"},"ContentCard"),"."),(0,d.mdx)("h4",{id:"syntax"},"Syntax"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"public func track(_ interaction: String? = nil, withEdgeEventType eventType: MessagingEdgeEventType)\n")),(0,d.mdx)("h4",{id:"parameters"},"Parameters"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("em",{parentName:"li"},"interaction")," - a custom ",(0,d.mdx)("inlineCode",{parentName:"li"},"String")," value to be recorded in the interaction"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("em",{parentName:"li"},"eventType")," - the ",(0,d.mdx)("a",{parentName:"li",href:"./messaging-edge-event-type.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"MessagingEdgeEventType"))," to be used for the ensuing Edge Event")),(0,d.mdx)("h4",{id:"example"},"Example"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},'var contentCard: ContentCard\n\n// tracking a display\ncontentCard.track(withEdgeEventType: .display)\n\n// tracking a user interaction\ncontentCard.track("itemSelected", withEdgeEventType: .interact)\n')),(0,d.mdx)("h2",{id:"android-interface"},"Android Interface"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"public class ContentCard {\n    // Plain-text title for the content card\n    private String title;\n\n    // Plain-text body representing the content for the content card\n    private String body;\n\n    // String representing a URI that contains an image to be used for this content card\n    private String imageUrl;\n\n    // Contains a URL to be opened if the user interacts with the content card\n    private String actionUrl;\n\n    // Required if actionUrl is provided. Text to be used in title of button or link in content card\n    private String actionTitle;\n\n    public String getTitle() { return title; }\n\n    public String getBody() { return body; }\n\n    @Nullable public String getImageUrl() { return imageUrl; }\n\n    @Nullable public String getActionUrl() { return actionUrl; }\n\n    @Nullable public String getActionTitle() { return actionTitle; }\n\n    ...\n}\n")),(0,d.mdx)("h3",{id:"public-functions-1"},"Public functions"),(0,d.mdx)("hr",null),(0,d.mdx)("h3",{id:"track"},"track"),(0,d.mdx)("p",null,"Tracks an interaction with the given ",(0,d.mdx)("inlineCode",{parentName:"p"},"ContentCard"),"."),(0,d.mdx)("h4",{id:"syntax-1"},"Syntax"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"public void track(final String interaction, final MessagingEdgeEventType eventType);\n")),(0,d.mdx)("h4",{id:"parameters-1"},"Parameters"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("em",{parentName:"li"},"interaction")," - a custom ",(0,d.mdx)("inlineCode",{parentName:"li"},"String")," value to be recorded in the interaction"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("em",{parentName:"li"},"eventType")," - the ",(0,d.mdx)("a",{parentName:"li",href:"./messaging-edge-event-type.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"MessagingEdgeEventType"))," to be used for the ensuing Edge Event")),(0,d.mdx)("h4",{id:"example-1"},"Example"),(0,d.mdx)("h4",{id:"kotlin"},"Kotlin"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-kotlin"},'// Get content card schema data from a PropositionItem object\nval contentCardData = item?.contentCardSchemaData\nval contentCard = contentCardData?.contentCard\n\n// tracking a display\ncontentCard?.track(null, MessagingEdgeEventType.DISPLAY)\n\n// tracking a user interaction\ncontentCard?.track("itemSelected", MessagingEdgeEventType.INTERACT)\n')),(0,d.mdx)("h4",{id:"java"},"Java"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},'// Get content card schema data from a PropositionItem object\nContentCardSchemaData contentCardData = item.getContentCardSchemaData();\nContentCard contentCard = contentCardData.getContentCard();\n\n// tracking a display\ncontentCard.track(null, MessagingEdgeEventType.DISPLAY);\n\n// tracking a user interaction\ncontentCard.track("itemSelected", MessagingEdgeEventType.INTERACT);\n')))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-edge-adobe-journey-optimizer-public-classes-content-card-md-c9f1d54d8696365c8ca9.js.map