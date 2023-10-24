"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4964],{11188:function(e,n,i){i.r(n),i.d(n,{_frontmatter:function(){return m},default:function(){return x}});var t=i(87462),o=i(63366),a=(i(15007),i(64983)),r=i(91515),d=["components"],m={},p=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",n)}},l=p("Variant"),s=p("InlineNestedAlert"),c={_frontmatter:m},u=r.Z;function x(e){var n=e.components,i=(0,o.Z)(e,d);return(0,a.mdx)(u,(0,t.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(l,{platform:"android",task:"add",repeat:"8",mdxType:"Variant"}),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Add the library to your project.")),(0,a.mdx)(s,{variant:"warning",header:"false",iconPosition:"left",mdxType:"InlineNestedAlert"},(0,a.mdx)("p",null,"Using dynamic dependency versions is ",(0,a.mdx)("strong",{parentName:"p"},"not")," recommended for production apps. Please read the ",(0,a.mdx)("a",{parentName:"p",href:"../../resources/manage-gradle-dependencies.md"},"managing Gradle dependencies guide")," for more information.")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"implementation platform('com.adobe.marketing.mobile:sdk-bom:2.+')\nimplementation 'com.adobe.marketing.mobile:core'\nimplementation 'com.adobe.marketing.mobile:identity'\nimplementation 'com.adobe.marketing.mobile:audience'\n")),(0,a.mdx)("ol",{start:2},(0,a.mdx)("li",{parentName:"ol"},"Import the library.")),(0,a.mdx)("h4",{id:"java"},"Java"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"import com.adobe.marketing.mobile.MobileCore;\nimport com.adobe.marketing.mobile.Identity;\nimport com.adobe.marketing.mobile.Audience;\n")),(0,a.mdx)("h4",{id:"kotlin"},"Kotlin"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},"import com.adobe.marketing.mobile.MobileCore\nimport com.adobe.marketing.mobile.Identity\nimport com.adobe.marketing.mobile.Audience\n")),(0,a.mdx)(l,{platform:"ios",task:"add",repeat:"6",mdxType:"Variant"}),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"Add the ",(0,a.mdx)("a",{parentName:"p",href:"../../home/base/mobile-core/index.md"},"Mobile Core")," and Audience extensions to your project using Cocoapods.")),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("p",{parentName:"li"},"Add the following pods in your ",(0,a.mdx)("inlineCode",{parentName:"p"},"Podfile"),":"),(0,a.mdx)("pre",{parentName:"li"},(0,a.mdx)("code",{parentName:"pre",className:"language-ruby"}," pod 'AEPCore'\n pod 'AEPAudience'\n pod 'AEPIdentity'\n")))),(0,a.mdx)("p",null,"Please note that the Audience Manager extension depends on the Identity extension."),(0,a.mdx)("h4",{id:"swift"},"Swift"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-swift"},"   import AEPCore\n   import AEPAudience\n   import AEPIdentity\n")),(0,a.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-objectivec"},"   @import AEPCore;\n   @import AEPAudience;\n   @import AEPIdentity;\n")),(0,a.mdx)(l,{platform:"android",task:"register",repeat:"4",mdxType:"Variant"}),(0,a.mdx)("h4",{id:"java-1"},"Java"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},'public class MainApp extends Application {\n     private final String ENVIRONMENT_FILE_ID = "YOUR_APP_ENVIRONMENT_ID";\n\n     @Override\n     public void onCreate() {\n         super.onCreate();\n\n         MobileCore.setApplication(this);\n         MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID);\n\n         List<Class<? extends Extension>> extensions = new ArrayList<>();\n         extensions.add(Audience.EXTENSION);        \n         extensions.add(Identity.EXTENSION);        \n         MobileCore.registerExtensions(extensions, o -> {\n            Log.d(LOG_TAG, "AEP Mobile SDK is initialized");\n        });\n   }\n}\n')),(0,a.mdx)("h4",{id:"kotlin-1"},"Kotlin"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-java"},'class MyApp : Application() {\n    val ENVIRONMENT_FILE_ID = "YOUR_APP_ENVIRONMENT_ID"\n\n    override fun onCreate() {\n        super.onCreate()\n        MobileCore.setApplication(this)\n        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID)\n\n        val extensions = listOf(Audience.EXTENSION, Identity.EXTENSION)\n        MobileCore.registerExtensions(extensions) {\n            Log.d(LOG_TAG, "AEP Mobile SDK is initialized")\n        }\n    }\n}\n')),(0,a.mdx)(l,{platform:"ios",task:"register",repeat:"6",mdxType:"Variant"}),(0,a.mdx)("h4",{id:"swift-1"},"Swift"),(0,a.mdx)("p",null,"In your app's ",(0,a.mdx)("inlineCode",{parentName:"p"},"_:didFinishLaunchingWithOptions")," function, register the Audience Manager extension with the Mobile Core:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-swift"},'func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {  \n  MobileCore.registerExtensions([Audience.self, Identity.self], {\n  MobileCore.configureWith(appId: "yourAppId")\n })  \n ...\n}\n')),(0,a.mdx)("h4",{id:"objective-c-1"},"Objective-C"),(0,a.mdx)("p",null,"In your app's ",(0,a.mdx)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions")," function, register the Audience Manager extension with the Mobile Core:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-objectivec"},'- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n   [AEPMobileCore registerExtensions:@[AEPMobileAudience.class, AEPMobileIdentity.class] completion:^{\n   [AEPMobileCore configureWithAppId: @"yourAppId"];\n  }];\n  ...\n}\n')))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-solution-adobe-audience-manager-tabs-index-md-1ffeae2e773eb367e95c.js.map