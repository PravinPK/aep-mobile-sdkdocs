"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4658],{11578:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return h}});var n,d=a(87462),r=a(63366),i=(a(15007),a(64983)),m=a(91515),o=["components"],l={},p=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),s={_frontmatter:l},x=m.Z;function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.mdx)(x,(0,d.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"experience-data-model-xdm-experience-events"},"Experience Data Model (XDM) Experience Events"),(0,i.mdx)("p",null,"The Adobe Experience Platform Edge extension can send events that follow a previously defined Experience Data Model (XDM) schema to Adobe Experience Edge Network. This extension automatically adds Identity information to each Experience event as described in this document."),(0,i.mdx)("h2",{id:"event-structure"},"Event structure"),(0,i.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"This extension provides public APIs to build XDM Experience events; these events ",(0,i.mdx)("strong",{parentName:"p"},"should not")," be confused with the events that are built by using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Mobile Core")," extension, as they are built based on XDM schemas."),(0,i.mdx)("p",null,"An XDM Experience event has the following structure:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:"left"},"Data"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Required"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Timestamp"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"The auto populated timestamp when the Experience Platform event is sent to the AEP Edge mobile extension.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Event ID"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Unique event identifier that is auto generated by the SDK.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Event type"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"The event type, for example ",(0,i.mdx)("inlineCode",{parentName:"td"},"commerce:orderDetails"),". Refer to ",(0,i.mdx)("a",{parentName:"td",href:"https://github.com/adobe/xdm/blob/master/docs/reference/classes/experienceevent.schema.md#xdmeventtype-known-values"},"xdm:eventType Known Values")," for more examples.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"XDM data"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Data following the XDM schema that is defined in the Schema Editor.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Data"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"No"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"The JSON-formatted, free-form data that can be associated with an event.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Dataset ID"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"No"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Using the AEP Edge extension, you can send data to multiple datasets based on your needs and configuration in Adobe Experience Platform. When sending an experience event and providing a dataset identifier, this identifier is used for redirecting the data to the specified AEP dataset instead of the default dataset set in the datastream configuration.")))),(0,i.mdx)("h2",{id:"identity"},"Identity"),(0,i.mdx)("p",null,"Here are the identity properties the AEP Edge mobile extension automatically adds to each Experience Event:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"ECID"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"The Experience Cloud Identifier (ECID)  that is generated by the Adobe Experiece Platform Mobile SDK is added to the Experience event's ",(0,i.mdx)("inlineCode",{parentName:"td"},"XDM IdentityMap")," .")))),(0,i.mdx)("h2",{id:"implementation-details"},"Implementation Details"),(0,i.mdx)("p",null,"Implementation details are automatically collected by the Edge Network extension and are sent with every Experience Event. The implementation details format is defined in ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/adobe/xdm/blob/master/components/datatypes/industry-verticals/implementationdetails.schema.json"},"XDM"),"."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Version"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"The version string is a concatenation of the AEP Mobile Core extension version plus the Edge Network extension version. For example, ",(0,i.mdx)("inlineCode",{parentName:"td"},"3.3.2+1.2.0"),".")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Name"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"The name is a unique URI identifier for the AEP Mobile SDK on each supported platform. For example, ",(0,i.mdx)("inlineCode",{parentName:"td"},"https://ns.adobe.com/experience/mobilesdk/ios")," for the Mobile SDK on iOS, or ",(0,i.mdx)("inlineCode",{parentName:"td"},"https://ns.adobe.com/experience/mobilesdk/android/reactnative")," for the Mobile SDK on Android using the React Native wrapper.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"Environment"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"For a mobile application the environment is always ",(0,i.mdx)("inlineCode",{parentName:"td"},"app"),".")))),(0,i.mdx)("p",null,'If you would like to include this information in your dataset, add the "Implementation Details" field group to the schema tied to your dataset.'))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-edge-edge-network-xdm-experience-events-md-be6464c4b7a2b0dbeeda.js.map