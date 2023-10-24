"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8451],{79615:function(e,t,i){i.r(t),i.d(t,{_frontmatter:function(){return l},default:function(){return c}});var n=i(87462),a=i(63366),d=(i(15007),i(64983)),r=i(91515),s=i(63732),o=["components"],l={},m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",t)}},p=m("TabsBlock"),u=m("InlineAlert"),x={_frontmatter:l},h=r.Z;function c(e){var t=e.components,i=(0,a.Z)(e,o);return(0,d.mdx)(h,(0,n.Z)({},x,i,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"api-reference"},"API Reference"),(0,d.mdx)("h2",{id:"extensionversion"},"extensionVersion"),(0,d.mdx)("p",null,"The extensionVersion() API returns the version of the Identity for Edge Network extension."),(0,d.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(s.default,{query:"platform=android&api=extension-version",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(s.default,{query:"platform=ios&api=extension-version",mdxType:"Tabs"}),(0,d.mdx)("h2",{id:"getexperiencecloudid"},"getExperienceCloudId"),(0,d.mdx)("p",null,"This API retrieves the Experience Cloud ID (ECID) that was generated when the app was initially launched. This ID is preserved between app upgrades, is saved and restored during the standard application backup process, and is removed at uninstall."),(0,d.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(s.default,{query:"platform=android&api=get-experience-cloud-id",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(s.default,{query:"platform=ios&api=get-experience-cloud-id",mdxType:"Tabs"}),(0,d.mdx)("h2",{id:"getidentities"},"getIdentities"),(0,d.mdx)("p",null,"Get all identities in the Identity for Edge Network extension, including customer identifiers which were previously added."),(0,d.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(s.default,{query:"platform=android&api=get-identities",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(s.default,{query:"platform=ios&api=get-identities",mdxType:"Tabs"}),(0,d.mdx)("h2",{id:"geturlvariables"},"getUrlVariables"),(0,d.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"This API is available with version 1.1.0 and above."),(0,d.mdx)("p",null,"Returns the identifiers in a URL's query parameters for consumption in ",(0,d.mdx)("strong",{parentName:"p"},"hybrid mobile applications"),". The response will ",(0,d.mdx)("strong",{parentName:"p"},"not")," return any leading ",(0,d.mdx)("inlineCode",{parentName:"p"},"&")," or ",(0,d.mdx)("inlineCode",{parentName:"p"},"?"),", since the caller is responsible for placing the variables in the resulting URL in the correct locations. If an error occurs while retrieving the URL variables, the callback handler will return a ",(0,d.mdx)("inlineCode",{parentName:"p"},"null")," value. Otherwise, the encoded string is returned."),(0,d.mdx)("p",null,"An example of an encoded string is as follows: ",(0,d.mdx)("inlineCode",{parentName:"p"},'"adobe_mc=TS%3DTIMESTAMP_VALUE%7CMCMID%3DYOUR_ECID%7CMCORGID%3D9YOUR_EXPERIENCE_CLOUD_ID"')),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"MCMID"),": This is also known as the Experience Cloud ID (ECID)."),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"MCORGID"),": This is also known as the Experience Cloud Organization ID."),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"TS"),": The timestamp that is taken when the request was made.")),(0,d.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(s.default,{query:"platform=android&api=get-url-variables",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(s.default,{query:"platform=ios&api=get-url-variables",mdxType:"Tabs"}),(0,d.mdx)("h2",{id:"registerextension"},"registerExtension"),(0,d.mdx)(u,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"Deprecated as of 2.0.0. Please use the ",(0,d.mdx)("a",{parentName:"p",href:"../../home/base/mobile-core/api-reference.md#registerextensions"},"MobileCore.registerExtensions")," API instead."),(0,d.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(s.default,{query:"platform=android&api=register-extension",mdxType:"Tabs"}),(0,d.mdx)("h2",{id:"removeidentity"},"removeIdentity"),(0,d.mdx)("p",null,"Remove the identity from the stored client-side ",(0,d.mdx)("a",{parentName:"p",href:"#identitymap"},"IdentityMap"),". The Identity extension will stop sending the identifier to the Edge Network. Using this API does not remove the identifier from the server-side User Profile Graph or Identity Graph."),(0,d.mdx)("p",null,"Identities with an empty ",(0,d.mdx)("em",{parentName:"p"},"id")," or ",(0,d.mdx)("em",{parentName:"p"},"namespace")," are not allowed and are ignored."),(0,d.mdx)("p",null,"Removing identities using a reserved namespace is not allowed using this API. The reserved namespaces are:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"ECID"),(0,d.mdx)("li",{parentName:"ul"},"IDFA"),(0,d.mdx)("li",{parentName:"ul"},"GAID")),(0,d.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(s.default,{query:"platform=android&api=remove-identity",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(s.default,{query:"platform=ios&api=remove-identity",mdxType:"Tabs"}),(0,d.mdx)("h2",{id:"resetidentities"},"resetIdentities"),(0,d.mdx)("p",null,"Clears all identities stored in the Identity extension and generates a new Experience Cloud ID (ECID). Using this API does not remove the identifiers from the server-side User Profile Graph or Identity Graph."),(0,d.mdx)("p",null,"This is a destructive action, since once an ECID is removed it cannot be reused. The new ECID generated by this API can increase metrics like unique visitors when a new user profile is created."),(0,d.mdx)("p",null,"Some example use cases for this API are:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"During debugging, to see how new ECIDs (and other identifiers paired with it) behave with existing rules and metrics."),(0,d.mdx)("li",{parentName:"ul"},"A last-resort reset for when an ECID should no longer be used.")),(0,d.mdx)("p",null,"This API is ",(0,d.mdx)("strong",{parentName:"p"},"not")," recommended for:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Resetting a user's consent and privacy settings; see ",(0,d.mdx)("a",{parentName:"li",href:"../../resources/privacy-and-gdpr.md"},"Privacy and GDPR"),"."),(0,d.mdx)("li",{parentName:"ul"},"Removing existing custom identifiers; use the ",(0,d.mdx)("a",{parentName:"li",href:"#removeidentity"},(0,d.mdx)("inlineCode",{parentName:"a"},"removeIdentity"))," API instead."),(0,d.mdx)("li",{parentName:"ul"},"Removing a previously synced advertising identifier after the advertising tracking settings were changed by the user; use the ",(0,d.mdx)("a",{parentName:"li",href:"../../home/base/mobile-core/identity/api-reference.md#setadvertisingidentifier"},(0,d.mdx)("inlineCode",{parentName:"a"},"setAdvertisingIdentifier"))," API instead.")),(0,d.mdx)(u,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"The Identity for Edge Network extension does not read the Mobile SDK's privacy status, and therefore setting the SDK's privacy status to opt-out will not automatically clear the identities from the Identity for Edge Network extension."),(0,d.mdx)("p",null,"See ",(0,d.mdx)("a",{parentName:"p",href:"../../home/base/mobile-core/api-reference.md#resetidentities"},(0,d.mdx)("inlineCode",{parentName:"a"},"MobileCore.resetIdentities"))," for more details."),(0,d.mdx)("h2",{id:"setadvertisingidentifier"},"setAdvertisingIdentifier"),(0,d.mdx)("p",null,"When this API is called with a valid advertising identifier, the Identity for Edge Network extension includes the advertising identifier in the XDM Identity Map using the namespace ",(0,d.mdx)("inlineCode",{parentName:"p"},"GAID")," (Google Advertising ID) in Android and ",(0,d.mdx)("inlineCode",{parentName:"p"},"IDFA")," (Identifier for Advertisers) in iOS. If the API is called with the empty string (",(0,d.mdx)("inlineCode",{parentName:"p"},'""'),"), ",(0,d.mdx)("inlineCode",{parentName:"p"},"null"),"/",(0,d.mdx)("inlineCode",{parentName:"p"},"nil"),", or the all-zeros UUID string values, the advertising identifier is removed from the XDM Identity Map (if previously set)."),(0,d.mdx)("p",null,"The advertising identifier is preserved between app upgrades, is saved and restored during the standard application backup process, and is removed at uninstall."),(0,d.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(s.default,{query:"platform=android&api=set-advertising-identifier",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(s.default,{query:"platform=ios&api=set-advertising-identifier",mdxType:"Tabs"}),(0,d.mdx)("h2",{id:"updateidentities"},"updateIdentities"),(0,d.mdx)("p",null,"Update the currently known identities within the SDK. The Identity extension will merge the received identifiers with the previously saved ones in an additive manner; no identities are removed by this API."),(0,d.mdx)("p",null,"Identities with an empty ",(0,d.mdx)("em",{parentName:"p"},"id")," or ",(0,d.mdx)("em",{parentName:"p"},"namespace")," are not allowed and are ignored."),(0,d.mdx)("p",null,"Updating identities using a reserved namespace is not allowed using this API. The reserved namespaces are:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"ECID"),(0,d.mdx)("li",{parentName:"ul"},"IDFA"),(0,d.mdx)("li",{parentName:"ul"},"GAID")),(0,d.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(s.default,{query:"platform=android&api=update-identities",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(s.default,{query:"platform=ios&api=update-identities",mdxType:"Tabs"}),(0,d.mdx)("h2",{id:"public-classes"},"Public Classes"),(0,d.mdx)("h3",{id:"identitymap"},"IdentityMap"),(0,d.mdx)("p",null,"Defines a map containing a set of end user identities, keyed on either namespace integration code or the namespace ID of the identity. The values of the map are an array, meaning that more than one identity of each namespace may be carried."),(0,d.mdx)("p",null,"The format of the IdentityMap class is defined by the ",(0,d.mdx)("a",{parentName:"p",href:"https://github.com/adobe/xdm/blob/master/docs/reference/mixins/shared/identitymap.schema.md"},"XDM Identity Map Schema"),"."),(0,d.mdx)("p",null,"For more information, please read an overview of the ",(0,d.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/experience-platform/identity/home.html"},"Identity Service"),"."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'"identityMap" : {\n    "Email" : [\n      {\n        "id" : "user@example.com",\n        "authenticatedState" : "authenticated",\n        "primary" : false\n      }\n    ],\n    "Phone" : [\n      {\n        "id" : "1234567890",\n        "authenticatedState" : "ambiguous",\n        "primary" : false\n      },\n      {\n        "id" : "5557891234",\n        "authenticatedState" : "ambiguous",\n        "primary" : false\n      }\n    ],\n    "ECID" : [\n      {\n        "id" : "44809014977647551167356491107014304096",\n        "authenticatedState" : "ambiguous",\n        "primary" : true\n      }\n    ]\n  }\n')),(0,d.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(s.default,{query:"platform=android&api=identity-map",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(s.default,{query:"platform=ios&api=identity-map",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"identityitem"},"IdentityItem"),(0,d.mdx)("p",null,"Defines an identity to be included in an ",(0,d.mdx)("a",{parentName:"p",href:"#identitymap"},"IdentityMap"),"."),(0,d.mdx)("p",null,"The format of the IdentityItem class is defined by the ",(0,d.mdx)("a",{parentName:"p",href:"https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/identityitem.schema.md"},"XDM Identity Item Schema"),"."),(0,d.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(s.default,{query:"platform=android&api=identity-item",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(s.default,{query:"platform=ios&api=identity-item",mdxType:"Tabs"}),(0,d.mdx)("h3",{id:"authenticatedstate"},"AuthenticatedState"),(0,d.mdx)("p",null,"Defines the state an ",(0,d.mdx)("a",{parentName:"p",href:"#identityitem"},"Identity Item")," is authenticated for."),(0,d.mdx)("p",null,"The possible authenticated states are:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Ambiguous - the state is ambiguous or not defined"),(0,d.mdx)("li",{parentName:"ul"},"Authenticated - the user is identified by a login or similar action"),(0,d.mdx)("li",{parentName:"ul"},"LoggedOut - the user was identified by a login action at a previous time, but is not logged in now")),(0,d.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(s.default,{query:"platform=android&api=authenticated-state",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(s.default,{query:"platform=ios&api=authenticated-state",mdxType:"Tabs"}))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-edge-identity-for-edge-network-api-reference-md-4fb248dca2bb004bca35.js.map