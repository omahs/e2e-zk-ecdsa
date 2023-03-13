"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{4852:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(9231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),h=a,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2312:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7583),a=(r(9231),r(4852));const o={sidebar_position:1},i="Zk-ECDSA",s={unversionedId:"intro",id:"intro",title:"Zk-ECDSA",description:"Introduction",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/e2e-zk-ecdsa/docs/intro",draft:!1,editUrl:"https://github.com/privacy-scaling-explorations/tree/main/docs/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial",permalink:"/e2e-zk-ecdsa/docs/category/tutorial"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"ECDSA",id:"ecdsa",level:3},{value:"ZkSNARK",id:"zksnark",level:3},{value:"ECDSA in a SNARK?",id:"ecdsa-in-a-snark",level:3},{value:"Challenges",id:"challenges",level:2},{value:"Possible applications",id:"possible-applications",level:3},{value:"Similar Work - Resources",id:"similar-work---resources",level:3},{value:"Product Vision: &quot;Zkfy ECDSA signatures&quot;",id:"product-vision-zkfy-ecdsa-signatures",level:2},{value:"Workflow Examples",id:"workflow-examples",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zk-ecdsa"},"Zk-ECDSA"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("h3",{id:"ecdsa"},"ECDSA"),(0,a.kt)("p",null,"A cornerstone of Ethereum blockchain internals is the use of asymmetric cryptography.",(0,a.kt)("br",{parentName:"p"}),"\n","One owes 2 keys: one is public and identifies a user: it can be looked up on chain (or rather the corresponding address). The other is used to sign messages.",(0,a.kt)("br",{parentName:"p"}),"\n","Signed messages are broadcasted and validated on chain at protocol level and/or by smart contracts (",(0,a.kt)("inlineCode",{parentName:"p"},"ecrecover"),") in order to authenticate users and carry out actions (transactions) on their behalf.",(0,a.kt)("br",{parentName:"p"}),"\n","The Ethereum blockchain especially relies on the ECDSA to produce and verify these signatures. Any Ethereum transaction requires building and verifying such signatures."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/YjyBDA3.png",alt:"default-sigram"})),(0,a.kt)("h3",{id:"zksnark"},"ZkSNARK"),(0,a.kt)("p",null,"These transactions are publicly observable, which is a privacy concern. To address it, ZkSNARK proving systems have been developed. ZkSNARKs allow to prove claims about the execution of arbitrary computation. Combined with relays, ZkSNARK enable the performing of on chain transactions that preserve the anonymity of the users."),(0,a.kt)("h3",{id:"ecdsa-in-a-snark"},"ECDSA in a SNARK?"),(0,a.kt)("p",null,"So on one side we know that transactions requires the computation of ECDSA signatures.",(0,a.kt)("br",{parentName:"p"}),"\n","On the other side we know we can perform zero knowledge proofs of arbitrary computation in a ZkSNARK to preserve users' privacy.",(0,a.kt)("br",{parentName:"p"}),"\n","Perfect! Let's perform ECDSA computations in a SNARK..."),(0,a.kt)("p",null,'Unfortunately it is not so easy.\nCurrent zkSNARK proving systems rely on elliptic curves that only allow operations on "finite fields" (group of numbers represented as residues modulo a specific prime). It restricts the maximum value that can be used: zkSNARK proofs can only be 254 bits big. But ECDSA involves (elliptic curve) arithmetic on 256-bit numbers. 256 > 254...meaning overflowing issues.',(0,a.kt)("br",{parentName:"p"}),"\n",'That\'s why the ECDSA curve is said to be not "SNARK friendly" and to involve "non-native" arithmetic which is challenging.',(0,a.kt)("br",{parentName:"p"}),"\n","This challenge is precisely what the ZK-ECDSA intends to address."),(0,a.kt)("h2",{id:"challenges"},"Challenges"),(0,a.kt)("p",null,"Performing ECDSA computation in a SNARK is the main challenge we will try to address.",(0,a.kt)("br",{parentName:"p"}),"\n","Doing will address other challenges that stemmed out of working around that challenge in the first place.",(0,a.kt)("br",{parentName:"p"}),"\n","Indeed, there already exist privacy tools and applications that leverage snarks to sucessfully preserve the anonymity of users. However they work around the ECDSA challenge by computing something else than the honest computation of an ECDSA signature itself."),(0,a.kt)("p",null,"For instance Tornado Cash relies on the proof of a ownwership of a note that belong to a set of unspent notes managed by a merkle tree smart contract. Some drawbacks of this solution are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"users having to manage a new secret"),": the safe management of ones' private keys is enough of personal responsiblity already"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"managing the anonymity set",(0,a.kt)("sup",{parentName:"strong",id:"fnref-first"},(0,a.kt)("a",{parentName:"sup",href:"#fn-first",className:"footnote-ref"},"first"))," with a smart contract"),": this smart contract is a potential ",(0,a.kt)("a",{parentName:"li",href:"https://home.treasury.gov/news/press-releases/jy0916"},"censorship")," target.\nSome organizations can publicly observe who interacted which a given contract, then enforce restriction at applications levels, to effectively prevent these users from performing future transactions.\n",(0,a.kt)("img",{parentName:"li",src:"https://i.imgur.com/M60Tm71.png",alt:"tornado-cash-diagram"}))),(0,a.kt)("p",null,"Another example is ",(0,a.kt)("a",{parentName:"p",href:"http://semaphore.appliedzkp.org/"},"Semaphore"),". Semaphore allows to make anonymous blockchain identity claims. It goes around the ECDSA-in-a-SNARK computation challenge by ",(0,a.kt)("a",{parentName:"p",href:"http://semaphore.appliedzkp.org/docs/guides/identities"},"creating a new identity")," whose verification process will be more SNARK friendly. So a drawback here is again ",(0,a.kt)("strong",{parentName:"p"},"requiring the user to manage an extra secret piece."),"\n",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/P4L8StW.png",alt:"sempahore-diagram"})),(0,a.kt)("p",null,"Instead the goal is to verify more directly the honest computation of ECDSA in a SNARK. By doing so we would address the 2 main drawbacks mentionned above. It would require neither a smart contract to manage an anonymity set nor the management of new secret(s) beyond one's own private key.\n",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/lLEY7c9.png",alt:"goal-diagram"})),(0,a.kt)("h3",{id:"possible-applications"},"Possible applications"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Proof of membership"),": proof of owernship of the private key corresponding to an address belonging to a given group\nEx: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/jefflau/zk-identity"},"Proof of Dark Forest Winner")),(0,a.kt)("li",{parentName:"ul"},"Private airdrop"),(0,a.kt)("li",{parentName:"ul"},"Private NFT vault"),(0,a.kt)("li",{parentName:"ul"},"DAOs & Governance: private voting\nUnlike ",(0,a.kt)("a",{parentName:"li",href:"https://snapshot.org/"},"Snapshot")," which aggregates votes off chain, perform on chain verification that a given signatures threshold has been reached.")),(0,a.kt)("h3",{id:"similar-work---resources"},"Similar Work - Resources"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://0xparc.org/blog/zk-ecdsa-1"},"https://0xparc.org/blog/zk-ecdsa-1")),(0,a.kt)("h2",{id:"product-vision-zkfy-ecdsa-signatures"},'Product Vision: "Zkfy ECDSA signatures"'),(0,a.kt)("p",null,"For users, that want to anonymously prove membership of a group on the Ethereum network, a web application would allow proving and verifying membership on a on chain group on the fly.\nUnlike Mixers, it wouldn't require smart contracts to manage an anonymity set, therefore it offers greater resistance to censorship risks (see address blacklisting risk).",(0,a.kt)("br",{parentName:"p"}),"\n","Unlike ",(0,a.kt)("a",{parentName:"p",href:"http://semaphore.appliedzkp.org/"},"Semaphore")," or ",(0,a.kt)("a",{parentName:"p",href:"https://interep.link/"},"Interep"),", it wouldn't require the creation of a new identiy and the management of corresponding secret, therefore offering a better UX."),(0,a.kt)("h3",{id:"workflow-examples"},"Workflow Examples"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A user able to select the attributes that should define the anonymity set. Corresponding artifacts required to gnerate proofs and verifications are generated accordingly.\n",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/Kf6HtvQ.png",alt:null}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The on chain querying to generate the anonymity set, the proof generation and the verification are performed by separate APIs that can be integrated in a web application to gate access to some content/action.\n",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/TGrnNdS.png",alt:null})))),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-first"},"Set of addresses that meet a given criteria at a given time.",(0,a.kt)("a",{parentName:"li",href:"#fnref-first",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);