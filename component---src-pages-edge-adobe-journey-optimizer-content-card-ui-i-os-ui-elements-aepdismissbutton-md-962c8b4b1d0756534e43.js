"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7621],{12300:function(t,e,n){n.r(e),n.d(e,{_frontmatter:function(){return s},default:function(){return x}});var i=n(87462),a=n(63366),m=(n(15007),n(64983)),o=n(91515),d=["components"],s={},r=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}},l=r("InlineAlert"),p=r("CodeBlock"),u={_frontmatter:s},c=o.Z;function x(t){var e=t.components,n=(0,a.Z)(t,d);return(0,m.mdx)(c,(0,i.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"aepdismissbutton"},"AEPDismissButton"),(0,m.mdx)("p",null,"The AEPDismissButton class is a fundamental UI component used to create a dismiss button for content cards."),(0,m.mdx)("p",null,"Customization of the dismiss button's properties can be achieved with a custom view modifier."),(0,m.mdx)("p",null,"AEPDismissButton conforms to ",(0,m.mdx)("inlineCode",{parentName:"p"},"ObservableObject"),", allowing it to be used reactively in SwiftUI views."),(0,m.mdx)("h2",{id:"public-properties"},"Public Properties"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Property"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"image"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"aepimage.md"},"AEPImage")),(0,m.mdx)("td",{parentName:"tr",align:null},"The image model representing the dismiss button's image.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"alignment"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"https://developer.apple.com/documentation/swiftui/alignment"},"Alignment")),(0,m.mdx)("td",{parentName:"tr",align:null},"The alignment of the dismiss button within the content card.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"modifier"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"AEPViewModifier")),(0,m.mdx)("td",{parentName:"tr",align:null},"A custom view modifier that can be applied to the dismiss button view for additional styling.")))),(0,m.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"All properties are marked with ",(0,m.mdx)("a",{parentName:"p",href:"https://developer.apple.com/documentation/combine/published"},"@Published"),". Any changes will trigger updates to the UI."),(0,m.mdx)("h2",{id:"customization"},"Customization"),(0,m.mdx)("p",null,"You can customize the AEPDismissButton properties when working with a template that includes a dismiss button. Here's an example:"),(0,m.mdx)(p,{slots:"heading, code",repeat:"1",languages:"Swift",mdxType:"CodeBlock"}),(0,m.mdx)("h4",{id:"swift"},"Swift"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-swift"},'class MyCustomizer: ContentCardCustomizing {\n    func customize(template: SmallImageTemplate) {        \n        // Customize the dismiss button\n        template.dismissButton?.image.icon = "xmark.diamond"  // SF Symbol name\n        template.dismissButton?.image.iconColor = .primary\n        template.dismissButton?.image.iconFont = .system(size: 10)\n        template.dismissButton?.alignment = .topTrailing\n        template.dismissButton?.modifier = AEPViewModifier(MyDismissButtonModifier())\n    }\n    \n    struct MyDismissButtonModifier: ViewModifier {\n        func body(content: Content) -> some View {\n            content\n                .padding()                \n        }\n    }\n}\n')))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-edge-adobe-journey-optimizer-content-card-ui-i-os-ui-elements-aepdismissbutton-md-962c8b4b1d0756534e43.js.map