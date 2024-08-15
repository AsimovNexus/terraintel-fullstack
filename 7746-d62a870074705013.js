"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7746],{67746:function(e,t,s){s.r(t),s.d(t,{default:function(){return eK}});var n=s(27573),i=s(53445),a=s(80248),r=s(16096),l=s(51722),d=s(96111),c=s(84095),o=s(76987),u=s(18698),x=s(39994),m=s(53921),h=s(93226),p=s(82032),f=s(64291),j=s(84828),v=s(44115),g=s(41911),b=s(77997),N=s(92383),y=s(7505),w=s(54603),k=s(7653);let C=()=>{let e=(0,w.useRouter)(),t=(0,k.useCallback)(()=>{e.push("/new")},[e]);return(0,y.H9)(y.LT.cmdK,t),(0,k.useEffect)(()=>{let e=e=>{var s;let n=(0,N.V5)()?e.metaKey:e.ctrlKey;(null===(s=e.key)||void 0===s?void 0:s.toLowerCase())==="k"&&n&&(e.preventDefault(),t())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[t]),null};var z=s(67141),P=s(58936),_=s(31271),E=s(6700),Z=s(11492),S=s(39850),F=s(98426),A=s(92472),T=s(87050),O=s(92946),L=s(24566),H=s(24412),X=s(55231),R=s(77350),M=s(53856),I=s(41070),D=s(99733),J=s.n(D),B=s(23904),U=s(57780),V=s(60163),W=s(88521),$=()=>{let{mode:e,setMode:t}=(0,B.useTheme)();return(0,k.useEffect)(()=>{(0,y.hd)()},[e]),(0,n.jsxs)(F.Vy,{children:[(0,n.jsxs)(F.WR,{className:"text-sm",children:["Appearance ",(0,n.jsx)(L.T,{size:16})]}),(0,n.jsx)(F.nI,{children:(0,n.jsxs)(F.A2,{sideOffset:4,children:[(0,n.jsxs)(F.hP,{onSelect:()=>t("auto"),children:[(0,n.jsxs)("div",{className:"flex items-center gap-2 pr-4 text-sm",children:[(0,n.jsx)(U.u,{size:16})," System"]}),"auto"===e?(0,n.jsx)(R.J,{size:16}):(0,n.jsx)("div",{className:"h-4 w-4"})]}),(0,n.jsxs)(F.hP,{onSelect:()=>t("light"),children:[(0,n.jsxs)("div",{className:"flex items-center gap-2 text-sm",children:[(0,n.jsx)(V.k,{size:16})," Light"]}),"light"===e?(0,n.jsx)(R.J,{size:16}):(0,n.jsx)("div",{className:"h-4 w-4"})]}),(0,n.jsxs)(F.hP,{onSelect:()=>t("dark"),children:[(0,n.jsxs)("div",{className:"flex items-center gap-2 text-sm",children:[(0,n.jsx)(W.J,{size:16})," Dark"]}),"dark"===e?(0,n.jsx)(R.J,{size:16}):(0,n.jsx)("div",{className:"h-4 w-4"})]})]})})]})},G=s(33386);function K(){let e=(0,P._)(["fixed top-2.5 right-3.5 z-10 flex flex-row items-center gap-2"]);return K=function(){return e},e}function Q(){let e=(0,P._)(["\n  border\n  border-accent-pro-200\n  bg-accent-pro-900\n  rounded-lg\n  mt-1\n  mb-2\n  mx-2\n  py-2\n  px-3\n"]);return Q=function(){return e},e}function Y(e){var t;let{onOpenChange:s}=e,{track:c}=(0,E.z$)(),{account:o}=(0,r.useCurrentAccount)(),{openConsentBanner:u}=(0,S.useConsent)(),x=null==o?void 0:o.memberships.map(e=>e.organization),m=null==x?void 0:x.some(e=>e.capabilities.includes("api")),h=Object.keys(null===(t=(0,a.useConfig)("fp_menu").config)||void 0===t?void 0:t.get("features",{})).length>0,{openModal:p}=(0,i.h)(),f=(0,Z.useConfiguration)(),{value:j}=(0,T.F)("conversation_export"),v=(0,r.useHasRaven)(),g=(0,n.jsxs)(d.Z,{variant:"unstyled",size:"unset",className:"border-0.5 border-border-300 hover:border-border-200 group relative z-[1] w-full overflow-hidden rounded-lg !px-2.5 !py-2 !text-left","data-testid":"user-menu-button",children:[(0,n.jsx)("div",{className:"from-bg-500/0 to-bg-500/40 absolute inset-0 bg-gradient-to-b opacity-70 transition-opacity group-hover:opacity-100"}),(0,n.jsxs)("div",{className:"relative z-[5] flex w-full items-center gap-1.5",children:[(0,n.jsx)(l.Z,{account:o,size:"sm"}),(0,n.jsx)("div",{className:"min-w-0 flex-1 truncate text-sm",children:null==o?void 0:o.email_address}),(0,n.jsx)(O.p,{size:12})]})]});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(F.Lt,{matchTriggerWidth:!0,align:"end",unstyledTrigger:!0,trigger:g,onOpenChange:e=>{null==s||s(e)},className:"w-72",children:[(0,n.jsx)(q,{}),h&&(0,n.jsx)(F.hP,{onSelect:()=>{c({event_key:"claudeai.settings.preview_feature.opened"}),p()},className:"text-sm",children:"Feature Preview"}),(0,n.jsx)(F.u2,{}),(0,n.jsxs)(F.Vy,{children:[(0,n.jsxs)(F.WR,{className:"text-sm",children:["Learn more ",(0,n.jsx)(L.T,{size:16})]}),(0,n.jsx)(F.nI,{children:(0,n.jsxs)(F.A2,{sideOffset:4,children:[(0,n.jsx)(es,{name:"About Anthropic",path:"/"}),(0,n.jsx)(F.u2,{}),!v&&(0,n.jsx)(es,{name:"Consumer Terms",path:"/legal/consumer-terms"}),(0,n.jsx)(es,{name:"Usage Policy",path:"/legal/aup"}),(0,n.jsx)(es,{name:"Privacy Policy",path:"/legal/privacy"}),(0,n.jsx)(F.hP,{asChild:!0,children:(0,n.jsx)("button",{className:"w-full text-left text-sm",onClick:u,children:"Your Privacy Choices"})})]})})]}),m&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(F.hP,{asChild:!0,children:(0,n.jsxs)(b.default,{href:f.consoleAbsoluteUrl,target:"_blank",className:"text-sm",children:["API Console ",(0,n.jsx)(H.O,{})]})})}),(0,n.jsx)(F.hP,{asChild:!0,children:(0,n.jsxs)(b.default,{href:"https://support.anthropic.com/",target:"_blank",className:"text-sm",onClick:()=>{c({event_key:"claudeai.support.opened"})},children:["Help & Support ",(0,n.jsx)(H.O,{})]})}),(0,n.jsx)(F.u2,{}),j&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(F.hP,{asChild:!0,children:(0,n.jsx)(G.Jh,{})}),(0,n.jsx)(F.u2,{})]}),(0,n.jsx)(F.hP,{asChild:!0,children:(0,n.jsx)(b.default,{href:"/logout",className:"text-sm",children:"Log Out"})})]})," "]})}let q=()=>{let{account:e}=(0,r.useCurrentAccount)(),t=(0,k.useMemo)(()=>{var t;return null!==(t=null==e?void 0:e.memberships.map(e=>e.organization))&&void 0!==t?t:[]},[e]),s=(0,k.useMemo)(()=>J()(t.filter(e=>e.capabilities.includes("chat")),e=>!e.capabilities.includes("raven"),"name"),[t]),i=s.some(e=>e.capabilities.includes("raven"));return(0,n.jsx)(n.Fragment,{children:e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"flex justify-between px-2 pb-2 pt-1",children:(0,n.jsx)("span",{className:"text-text-500 overflow-hidden overflow-ellipsis text-sm",children:null==e?void 0:e.email_address})}),s.map(e=>(0,n.jsx)(ee,{org:e,hasTeam:i},e.uuid)),(0,n.jsx)(en,{orgs:s}),(0,n.jsx)(F.u2,{}),(0,n.jsx)(F.hP,{asChild:!0,"data-testid":"user-menu-settings",children:(0,n.jsx)(b.default,{href:"/settings/profile",className:"text-sm",children:"Settings"})}),(0,n.jsx)($,{})]})})},ee=e=>{let{org:t,hasTeam:s}=e,{switchAndRefresh:i}=(0,_.z6)(),{activeOrganization:a}=(0,r.useCurrentAccount)(),l=(0,r.useIsEnterprise)(t),d=(0,w.usePathname)(),c=l?"Enterprise":t.capabilities.includes("raven")?"Team":t.capabilities.includes("claude_pro")?"Pro":"Free",o=t.uuid===(null==a?void 0:a.uuid),u=t.capabilities.includes("raven")?t.name:"Personal",x=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)(et,{org:t}),(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("span",{className:"text-text-100 text-sm",children:u}),(0,n.jsxs)("div",{className:"text-xs",children:[(0,n.jsxs)("span",{className:"text-text-300",children:[c," plan"]}),"Free"===c&&o&&s&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(X.o,{size:12,className:"inline"}),(0,n.jsx)(b.default,{href:"/upgrade",className:"text-accent-pro-100 hover font-medium transition-all",children:"Upgrade"})]})]})]})]}),t.uuid===(null==a?void 0:a.uuid)&&(0,n.jsx)(R.J,{weight:"bold",className:"text-accent-main-100 h-4 w-4"})]});return o?(0,n.jsx)(F.AZ,{children:x}):(0,n.jsx)(F.hP,{onSelect:()=>{d.startsWith("/chat/")?i(t.uuid,"/chats"):i(t.uuid)},children:x})},et=e=>{let{org:t}=e,s=t.capabilities.includes("raven")||t.capabilities.includes("claude_pro")?"bg-accent-pro-100":"bg-text-400",i=t.capabilities.includes("raven")?(0,n.jsx)(M.$,{size:16}):(0,n.jsx)(I.n,{size:16});return(0,n.jsx)("div",{className:(0,v.Z)(s,"text-oncolor-100 flex h-7 w-7 items-center justify-center rounded-full"),children:i})},es=e=>{let{name:t,path:s}=e,{websiteBaseUrl:i}=(0,Z.useConfiguration)();return(0,n.jsx)(F.hP,{asChild:!0,children:(0,n.jsxs)(b.default,{href:"".concat(i).concat(s),target:"_blank",className:"text-sm",children:[t,(0,n.jsx)(H.O,{})]})})};A.Z.div(K());let en=e=>{let{orgs:t}=e,s=(0,r.useHasPublicEmailProvider)(),i=(0,k.useMemo)(()=>t.some(e=>e.capabilities.includes("claude_pro")),[t]);if(t.some(e=>e.capabilities.includes("raven"))||i&&s)return null;let a="Get more from Claude with Pro or Team plans.",l="Upgrade Plan ";return i&&(a="Claude's better with your teammates.",l="Add Team Plan"),(0,n.jsxs)(ei,{children:[(0,n.jsx)("p",{className:"text-text-300 text-sm",children:a}),(0,n.jsx)(b.default,{href:"/upgrade",className:"text-accent-pro-000 text-sm font-medium",children:l})]})},ei=A.Z.div(Q());var ea=s(62309);function er(e){let{type:t,href:s,onClick:i=()=>void 0,className:a,children:r}=e,l=(0,w.usePathname)();return(0,n.jsx)(b.default,{className:(0,v.Z)("hover:bg-bg-400 group -mx-1.5 flex items-center gap-1 rounded-md px-1.5 py-1 transition-colors duration-200",("chat"===t||"project"===t)&&"font-tiempos text-text-200 text-sm",l===s&&"bg-bg-400",a),href:s,onClick:i,children:"link"===t?(0,n.jsx)(n.Fragment,{children:r}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(()=>"project"===t?(0,n.jsx)(x.j,{size:16,className:"shrink-0 translate-y-px"}):"chat"===t?(0,n.jsx)(ea.J,{size:14,className:"shrink-0"}):void 0,{}),(0,n.jsx)("div",{className:"min-w-0 truncate",children:r})]})})}var el=s(94354),ed=s(10049);function ec(){let{track:e}=(0,E.z$)(),{data:t,isLoading:s}=(0,el.QR)({limit:8,offset:0});if(!s)return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h3",{className:"text-text-300 mb-1 mt-1 text-sm font-medium",children:"Recents"}),(null==t?void 0:t.length)===0?(0,n.jsx)("div",{className:"border-border-300 text-text-500 rounded-lg border border-dashed px-3 py-8 text-center text-xs",children:"Start your first conversation with Claude"}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("ul",{className:"flex flex-col gap-0.5",children:null==t?void 0:t.map(t=>(0,n.jsx)("li",{children:(0,n.jsx)(er,{type:"chat",href:"/chat/".concat(t.uuid),onClick:()=>{e({event_key:"claudeai.conversation.recent.opened",conversation_uuid:t.uuid})},children:t.name?t.name:"(New chat)"})},t.uuid))}),(0,n.jsxs)(b.default,{href:"/recents",className:"text-text-300 hover:text-text-200 -ml-px mt-2 flex items-center gap-1 text-sm",children:["View all",(0,n.jsx)(ed.o,{size:12,className:"translate-y-px"})]})]})]})}var eo=s(80726);function eu(e){let{canAccessProjects:t}=e,{data:s,isLoading:i}=(0,eo.bQ)({enabled:!!t}),{data:a,isLoading:r}=(0,el.cj)();if(t&&i||r)return;let l=null!=a?a:[],d=null!=s?s:[],c=!(null==d?void 0:d.length)&&!(null==l?void 0:l.length),o=(0,n.jsx)("div",{className:"border-border-300 text-text-500 rounded-lg border border-dashed px-3 py-8 text-center text-xs",children:t?"Star projects and chats you use often":"Star chats you use often"});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h3",{className:"text-text-300 mb-1 flex items-center gap-1.5 text-sm font-medium",children:"Starred"}),c?o:(0,n.jsxs)("ul",{className:"-mx-1.5 flex flex-1 flex-col gap-0.5 overflow-y-auto px-1.5",children:[d.map(e=>(0,n.jsx)("li",{children:(0,n.jsx)(er,{type:"project",href:"/project/".concat(e.uuid),children:e.name})},e.uuid)),l.map(e=>(0,n.jsx)("li",{children:(0,n.jsx)(er,{type:"chat",href:"/chat/".concat(e.uuid),children:e.name})},e.uuid))]})]})}var ex=s(23532),em=s(14983),eh=s(88253),ep=s.n(eh),ef=s(25211);function ej(e){return parseFloat(e.replace("rem",""))*parseFloat(window.getComputedStyle(document.documentElement).fontSize)}var ev=(e,t)=>{let s=(0,ex.useCookies)(),n="true"===s.get(em.cn.SIDEBAR_PINNED),[i,a]=(0,k.useState)(n),[r,l]=(0,k.useState)(i),d=(0,k.useCallback)(e=>{a(e),l(e),o(!1),s.set(em.cn.SIDEBAR_PINNED,e.toString())},[s]),[c,o]=(0,k.useState)(!1),{width:u=0}=(0,ef.iP)(),x=u<768;(0,k.useEffect)(()=>{i&&l(!x)},[x,i]);let m=(0,k.useRef)(0),h=(0,k.useRef)(null),[p,f]=(0,k.useState)(0);return(0,k.useEffect)(()=>{let s=ej(e),n=ej(t),a=e=>{if(!i&&!c&&!x){let{clientX:t}=e,i=(r?n:s)+12,a=r||t<m.current;if(t>i){let e=1-(t-i)/(window.outerWidth/3);f(e=ep()(e,0,1))}let d=t<=i&&a;d?(h.current&&(clearTimeout(h.current),h.current=null),l(!0)):r&&!h.current&&(h.current=setTimeout(()=>{l(d)},250)),m.current=t}},d=()=>{f(0),m.current=0,i||(h.current=setTimeout(()=>{l(!1)},500))};return document.addEventListener("mousemove",a),document.addEventListener("mouseleave",d),()=>{h.current&&(clearTimeout(h.current),h.current=null),document.removeEventListener("mousemove",a),document.removeEventListener("mouseleave",d)}},[c,r,i,l,e,t,x]),{isExpanded:r,setIsExpanded:l,isPinnedExpanded:i,setIsPinnedExpanded:d,hasDropdownOpen:c,setHasDropdownOpen:o,isMobile:x,gradientAffordanceOpacity:p}};let eg="4.5rem",eb="18rem";function eN(e){let{isExpanded:t,isPinnedExpanded:s,setHasDropdownOpen:i}=e,a=(0,z.UG)();return(0,n.jsxs)(g.E.div,{initial:s?"enter":"initial",animate:t?"enter":"initial",className:(0,v.Z)("flex min-h-0 flex-1 flex-col gap-4",!t&&"pointer-events-none"),children:[(0,n.jsxs)(g.E.ul,{variants:eC,className:"flex flex-col gap-px",children:[(0,n.jsx)("li",{children:(0,n.jsxs)(er,{type:"link",href:"/new",className:"text-accent-main-000",children:[(0,n.jsx)(eE,{className:"shrink-0"})," Start new chat"]})}),a&&(0,n.jsx)("li",{children:(0,n.jsxs)(er,{type:"link",href:"/projects",className:"text-text-100",children:[(0,n.jsx)(x.j,{size:16,className:"translate-y-[0.5px]"}),"Projects"]})})]},"main-nav"),(0,n.jsx)(g.E.div,{variants:eC,className:"flex min-h-0 flex-col",children:(0,n.jsx)(eu,{canAccessProjects:a})},"starred"),(0,n.jsx)(g.E.div,{className:"flex-1",variants:eC,children:(0,n.jsx)(ec,{})},"recents"),(0,n.jsxs)(g.E.div,{variants:ez,className:"flex flex-col pt-1",children:[(0,n.jsx)("div",{className:"translate-y-px px-2",children:(0,n.jsx)(eS,{})}),(0,n.jsx)(Y,{onOpenChange:e=>null==i?void 0:i(e)}),(0,n.jsxs)("div",{className:"mt-2 flex items-center justify-between pl-1.5 pr-1",children:[(0,n.jsx)("div",{className:"text-text-400 translate-y-[0.5px]",children:(0,n.jsx)(o.Z,{size:15})}),(0,n.jsxs)("a",{href:"https://support.anthropic.com/en/",target:"_blank",className:"text-text-300 flex translate-x-0 items-center gap-1 text-xs hover:underline",children:[(0,n.jsx)(m.H,{size:14}),"Help & support"]})]})]},"user-menu")]})}function ey(){let{isExpanded:e,setIsExpanded:t,isPinnedExpanded:s,setIsPinnedExpanded:i,setHasDropdownOpen:a,isMobile:o,gradientAffordanceOpacity:u}=ev(eg,eb),{account:x}=(0,r.useCurrentAccount)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(C,{}),(0,n.jsxs)(g.E.nav,{variants:ew,initial:s?"pinnedExpanded":"collapsed",animate:s?"pinnedExpanded":"collapsed",className:"z-20 h-screen max-md:pointer-events-none max-md:fixed",onClick:()=>{o?e&&!a&&t(!1):t(!0)},"data-testid":"menu-sidebar",children:[(0,n.jsx)("div",{className:(0,v.Z)("pointer-events-auto absolute left-2 top-3 z-20 md:hidden",e&&"opacity-0"),children:(0,n.jsx)(d.Z,{size:"icon_sm",variant:"ghost",onClick:()=>t(!0),children:(0,n.jsx)(eZ,{})})}),(0,n.jsxs)(g.E.div,{style:{width:eb},className:(0,v.Z)("fixed bottom-0 left-0 top-0 z-20 px-3 pb-4 pt-2.5",e?"pointer-events-auto":"pointer-events-none"),children:[!s&&(0,n.jsx)("div",{style:{opacity:e?0:u,width:eb,transform:"translate3d(0,0,0)",backfaceVisibility:"hidden"},className:"from-bg-500/40 to-bg-500/0 fixed left-0 top-0 h-full bg-gradient-to-r to-80% transition-opacity max-md:hidden"}),(0,n.jsx)(g.E.div,{variants:ek,initial:e?"expanded":"collapsed",animate:e?"expanded":"collapsed",transition:{type:"spring",stiffness:900,damping:50,mass:1},style:{width:eb,transform:"translate3d(0,0,0)"},className:(0,v.Z)("from-bg-300/70 to-bg-400/70 border-r-0.5 border-border-300 absolute left-0 overflow-hidden bg-gradient-to-b backdrop-blur",s?"bottom-0 top-0":"shadow-level-1 border-t-0.5 border-b-0.5 bottom-1 top-1 rounded-r-xl")}),(0,n.jsxs)(g.E.div,{initial:s?"enter":"initial",animate:e?"enter":"initial",className:(0,v.Z)("flex h-full flex-col gap-2",!e&&"pointer-events-none"),children:[(0,n.jsxs)("div",{className:"-mr-1 flex translate-y-px items-center",children:[(0,n.jsx)(e_,{isExpanded:e}),(0,n.jsxs)(g.E.div,{className:(0,v.Z)(!e&&"pointer-events-none"),variants:eP,children:[(0,n.jsx)(d.Z,{variant:"ghost",size:"icon_sm",className:"md:hidden",onClick:()=>t(!1),children:(0,n.jsx)(p.X,{size:16})}),(0,n.jsx)("div",{className:"max-md:hidden",children:(0,n.jsx)(c.Z,{side:"right",tooltipContent:s?"Unpin sidebar":"Pin sidebar",children:(0,n.jsx)(d.Z,{variant:"ghost",size:"icon_sm",onClick:()=>i(!s),"data-testid":"pin-sidebar-toggle",children:s?(0,n.jsx)(f.l,{size:16}):(0,n.jsx)(h.g,{size:16})})})})]})]}),(0,n.jsx)(eN,{isExpanded:e,isPinnedExpanded:s,setHasDropdownOpen:a})]}),!e&&(0,n.jsxs)("div",{className:"absolute bottom-4 flex flex-col items-center gap-4 max-md:hidden",children:[(0,n.jsx)("div",{className:"-translate-y-[0.5px]",children:(0,n.jsx)(l.Z,{size:"sm",account:x})}),(0,n.jsx)(g.E.div,{initial:{opacity:0,translateX:"4px"},animate:{opacity:1,translateX:"0px"},transition:{duration:.15},className:"text-text-400 relative flex h-4 w-4 items-center justify-center",children:(0,n.jsx)("button",{onClick:()=>t(!0),"aria-label":"open-sidebar","aria-pressed":e?"true":"false",children:(0,n.jsx)(j.z,{})})})]})]})]})]})}let ew={collapsed:{width:eg},pinnedExpanded:{width:eb},transition:{type:"spring",stiffness:1e3,damping:100,mass:1}},ek={collapsed:{opacity:0,translateX:"-25%",transition:{opacity:{duration:.1},translateX:{duration:.5}}},expanded:{opacity:1,translateX:"0%"}},eC={initial:{opacity:0,translateX:"-15%",filter:"blur(2px)",transition:{opacity:{duration:.05}}},enter:{opacity:1,translateX:"0%",filter:"blur(0px)",transition:{translateX:{type:"spring",stiffness:1e3,damping:50,mass:1}}}},ez={initial:{opacity:0,translateX:"-10px",transition:{duration:.05}},enter:{opacity:1,translateX:"0px",transition:{opacity:{duration:0},type:"spring",stiffness:1e3,damping:50,mass:1}}},eP={initial:{opacity:0,scale:.95,translateX:"-6px",transition:{opacity:{duration:.05}}},enter:{opacity:1,scale:1,translateX:"0px"}};function e_(e){let{isExpanded:t}=e;return(0,n.jsx)("div",{className:(0,v.Z)("ml-px flex h-9 flex-1 items-center pb-1 leading-none",!t&&"max-md:pointer-events-none max-md:opacity-0"),children:(0,n.jsxs)(b.default,{href:"/new",children:[(0,n.jsx)(u.Z,{className:(0,v.Z)("h-4 flex-shrink-0",t?"text-text-100":"text-text-300")}),""]})})}function eE(e){let{...t}=e;return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",...t,children:[(0,n.jsx)("path",{fill:"currentColor",d:"M8 1.5a6.5 6.5 0 0 1 5.74 9.55l.7 2.13a1 1 0 0 1-1.26 1.27l-2.13-.71A6.5 6.5 0 1 1 8 1.5Zm0 12a5.5 5.5 0 0 0 2.75-.74.5.5 0 0 1 .41-.04l2.34.78-.78-2.34a.5.5 0 0 1 .04-.4A5.5 5.5 0 1 0 8 13.5Z"}),(0,n.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",d:"M8 6.4v3.2M9.6 8H6.4"})]})}function eZ(e){let{size:t=24}=e;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,fill:"currentColor",viewBox:"0 0 32 32",children:(0,n.jsx)("path",{d:"M26 16a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h20a1 1 0 0 1 1 1ZM5 9h18a1 1 0 1 0 0-2H5a1 1 0 0 0 0 2Zm16 14H5a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2Z"})})}function eS(){let{activeOrganization:e}=(0,r.useCurrentAccount)(),t=(0,r.useHasRaven)(),s=(0,r.useHasProSubscription)(),i=!s&&!t,a=t&&!!(null==e?void 0:e.name);return(0,n.jsxs)("div",{className:(0,v.Z)("font-tiempos border-0.5 rounded-t-md border-b-0 bg-gradient-to-b p-1 text-center text-xs",i?"from-bg-200 to-bg-200/5 text-text-300 bg-bg-300 border-border-300":"text-accent-pro-000 from-accent-pro-100/0 to-accent-pro-100/5 border-accent-pro-200/50"),children:[t&&(a?e.name:"Team"),s&&"Professional plan",i&&"Free plan"]})}var eF=s(96755),eA=s(35046),eT=s(23285),eO=s(55791),eL=s(54570),eH=s(78618),eX=s(6632);function eR(){let e=(0,P._)(["\n  max-w-full\n  mb-3\n  pb-1\n  pl-1\n  pr-1\n  min-w-[180px]\n  md:mb-0\n  md:p-0\n  [&::-webkit-scrollbar]:bg-transparent\n  [&::-webkit-scrollbar]:h-[4px]\n  [&::-webkit-scrollbar-thumb]:bg-[rgba(0,0,0,0.15)]\n  [&::-webkit-scrollbar-thumb]:rounded-[100px]\n"]);return eR=function(){return e},e}function eM(){let e=(0,P._)(["\n  relative\n  border\n  border-border-300\n  rounded-xl\n  overflow-hidden\n"]);return eM=function(){return e},e}function eI(){let e=(0,P._)(["\n  font-styrene-display\n  font-medium\n  tracking-tighter\n  leading-[0.9em]\n  text-xl]\n"]);return eI=function(){return e},e}function eD(){let e=(0,P._)(["\n  font-styrene\n  text-text-300\n  text-md]\n"]);return eD=function(){return e},e}let eJ=e=>{var t,s,i,l,d,c,o,u,x,m,h,p;let{isOpen:f,onClose:j}=e,{track:v}=(0,E.z$)(),{account:g}=(0,r.useCurrentAccount)(),{mutate:b}=(0,eF.Ck)(),N=null===(t=(0,a.useConfig)("fp_menu").config)||void 0===t?void 0:t.get("features",{});(0,eX.i)()&&delete N.preview_feature_uses_artifacts;let[y,w]=(0,k.useState)(()=>Object.keys(N)[0]||null),[C,z]=(0,k.useState)(!1);(0,k.useEffect)(()=>{if(!C)return;let e=setTimeout(()=>{z(!1)},7e3);return()=>{clearTimeout(e)}},[C]);let P=!!y&&null!==(h=null==g?void 0:null===(s=g.settings)||void 0===s?void 0:s[y])&&void 0!==h&&h;return(0,n.jsxs)(eT.ZP,{modalSize:"xl",isOpen:f,onClose:j,hasCloseButton:!0,title:"Feature Preview",icon:(0,n.jsx)(eO.G,{size:"24"}),children:[(0,n.jsx)("div",{className:"text-text-400 text-sm",children:"Preview and provide feedback on upcoming enhancements to our platform. Please note: experimental features might influence Claude's behavior and some interactions may differ from the standard experience."}),(0,n.jsx)("div",{className:"border-border-300 mt-4 flex flex-col items-stretch gap-4 md:flex-row",children:null===y||void 0===N[y]||0===Object.keys(N).length?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(eW,{children:"No Features Available"}),(0,n.jsx)(e$,{children:"There are no features available to preview."})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(eU,{children:(0,n.jsx)("ul",{className:"-ml-3 flex gap-1 md:flex-col",children:Object.keys(N).map(e=>{var t;return(0,n.jsx)(eB,{isCurrentButton:e===y,onClick:()=>w(e),children:null===(t=N[e])||void 0===t?void 0:t.title},e)})})}),(0,n.jsx)(eV,{children:(0,n.jsxs)("div",{className:"h-auto overflow-y-auto md:h-[27em]",children:[(null===(l=N[y])||void 0===l?void 0:null===(i=l.image)||void 0===i?void 0:i.src)&&(0,n.jsx)(eH.default,{src:null!==(p=null===(c=N[y])||void 0===c?void 0:null===(d=c.image)||void 0===d?void 0:d.src)&&void 0!==p?p:"",style:{width:"100%",height:"auto"},width:null===(o=N[y])||void 0===o?void 0:o.image.width,height:null===(u=N[y])||void 0===u?void 0:u.image.height,alt:"Preview image of feature"}),(0,n.jsxs)("div",{className:"border-border-300 border-t p-4",children:[(0,n.jsxs)("div",{className:"mb-3 flex w-full items-center justify-between",children:[(0,n.jsx)("h3",{className:"font-styrene-display text-lg font-medium",children:null===(x=N[y])||void 0===x?void 0:x.title}),(0,n.jsx)("label",{className:"flex justify-between gap-2",children:(0,n.jsxs)("div",{className:"flex cursor-pointer gap-2 self-center",children:[(0,n.jsx)("span",{className:"text-text-000 self-center text-xs",children:P?"On":"Off"}),(0,n.jsx)(eA.Z,{checked:P,onChange:()=>{var e,t;g&&y&&(z(!0),v({event_key:"claudeai.settings.preview_feature.toggled",account_uuid:g.uuid,feature_id:y,action:(null==g?void 0:null===(e=g.settings)||void 0===e?void 0:e[y])===!0?"disable":"enable"}),b({...g.settings,[y]:!(null==g?void 0:null===(t=g.settings)||void 0===t?void 0:t[y])}))}})]})})]}),(0,n.jsx)("p",{className:"text-text-300 text-sm",children:null===(m=N[y])||void 0===m?void 0:m.description})]})]})})]})}),C&&(0,n.jsxs)("div",{className:"text-accent-secondary-100 bg-bg-100 mt-3 flex items-center justify-center gap-1 rounded-md px-2 py-1 text-xs",children:[(0,n.jsx)(eL.f,{})," Settings will apply to future conversations"]})]})},eB=(0,k.forwardRef)((e,t)=>{let{children:s,isCurrentButton:i,onClick:a}=e;return(0,n.jsx)("li",{children:(0,n.jsx)("button",{ref:t,onClick:a,className:(0,v.Z)(i?"bg-bg-400 font-medium":"hover:bg-bg-300","block w-full whitespace-nowrap rounded-full px-5 py-2 text-left transition-colors ease-in-out active:scale-95"),children:s})})});eB.displayName="SidebarButton";let eU=A.Z.nav(eR()),eV=A.Z.div(eM()),eW=A.Z.h2(eI()),e$=A.Z.h3(eD()),eG=()=>{var e;let{isOpen:t,closeModal:s}=(0,i.h)();return Object.keys(null===(e=(0,a.useConfig)("fp_menu").config)||void 0===e?void 0:e.get("features",{})).length>0?(0,n.jsx)(eJ,{isOpen:t,onClose:s}):null};function eK(e){let{children:t}=e;return(0,n.jsx)("div",{className:"flex min-h-screen w-full",children:(0,n.jsxs)(i.b,{children:[(0,n.jsx)(eG,{}),(0,n.jsx)(ey,{}),(0,n.jsx)("div",{className:"min-h-full w-full min-w-0 flex-1",children:t})]})})}}}]);