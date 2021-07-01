(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8],{8:(e,l,a)=>{"use strict";a.r(l),a.d(l,{default:()=>ce});var t={};a.r(t);var n={};a.r(n);var r={};a.r(r);var u={};a.r(u);var o={};a.r(o);var i={};a.r(i);var s={};a.r(s);var v={};a.r(v);var c={};a.r(c);var d={};a.r(d);var h=a(6252),p=a(9963),m=a(2262),g=a(2119),b=a(7621),k=a(480);const f=(0,h.aZ)({name:"NavLink",inheritAttrs:!1,props:{item:{type:Object,required:!0}},setup(e){const l=(0,g.yj)(),a=(0,b.WF)(),{item:t}=(0,m.BK)(e),n=(0,h.Fl)((()=>(0,k.ak)(t.value.link))),r=(0,h.Fl)((()=>(0,k.B2)(t.value.link)||(0,k.R5)(t.value.link))),u=(0,h.Fl)((()=>{if(!r.value)return t.value.target?t.value.target:n.value?"_blank":void 0})),o=(0,h.Fl)((()=>"_blank"===u.value)),i=(0,h.Fl)((()=>!n.value&&!r.value&&!o.value)),s=(0,h.Fl)((()=>{if(!r.value)return t.value.rel?t.value.rel:o.value?"noopener noreferrer":void 0})),v=(0,h.Fl)((()=>t.value.ariaLabel||t.value.text)),c=(0,h.Fl)((()=>{const e=Object.keys(a.value.locales);return e.length?!e.some((e=>e===t.value.link)):"/"!==t.value.link})),d=(0,h.Fl)((()=>!!c.value&&l.path.startsWith(t.value.link)));return{isActive:(0,h.Fl)((()=>!!i.value&&(t.value.activeMatch?new RegExp(t.value.activeMatch).test(l.path):d.value))),isBlankTarget:o,isRouterLink:i,linkRel:s,linkTarget:u,linkAriaLabel:v}}});f.render=r.render;const L=f,F=(0,h.aZ)({name:"Home",components:{NavLink:L},setup(){const e=(0,b.I2)(),l=(0,b.I5)(),a=(0,h.Fl)((()=>e.value.heroImage?(0,b.pJ)(e.value.heroImage):null)),t=(0,h.Fl)((()=>null===e.value.heroText?null:e.value.heroText||l.value.title||"Hello")),n=(0,h.Fl)((()=>e.value.heroAlt||t.value||"hero")),r=(0,h.Fl)((()=>null===e.value.tagline?null:e.value.tagline||l.value.description||"Welcome to your VuePress site")),u=(0,h.Fl)((()=>(0,k.kJ)(e.value.actions)?e.value.actions.map((({text:e,link:l,type:a="primary"})=>({text:e,link:l,type:a}))):[])),o=(0,h.Fl)((()=>(0,k.kJ)(e.value.features)?e.value.features:[])),i=(0,h.Fl)((()=>e.value.footer)),s=(0,h.Fl)((()=>e.value.footerHtml));return{heroImage:a,heroAlt:n,heroText:t,tagline:r,actions:u,features:o,footer:i,footerHtml:s}}});F.render=n.render;const w=F;var x=a(1070);const y=e=>!(0,k.ak)(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,W={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},S=()=>{const e=(0,x.X6)(),l=(0,b.Vi)(),a=(0,b.I2)();return(0,h.Fl)((()=>{var t,n;if(null!=(n=null!=(t=a.value.editLink)?t:e.value.editLink)&&!n)return null;const{repo:r,docsRepo:u=r,docsBranch:o="main",docsDir:i="",editLinkText:s}=e.value;if(!u)return null;const v=(({docsRepo:e,docsBranch:l,docsDir:a,filePathRelative:t,editLinkPattern:n})=>{const r=y(e);let u;return n?u=n:null!==r&&(u=W[r]),u?u.replace(/:repo/,(0,k.ak)(e)?e:`https://github.com/${e}`).replace(/:branch/,l).replace(/:path/,(0,k.FY)(`${(0,k.U1)(a)}/${t}`)):null})({docsRepo:u,docsBranch:o,docsDir:i,filePathRelative:l.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return v?{text:null!=s?s:"Edit this page",link:v}:null}))},N=(0,h.aZ)({name:"PageMeta",components:{NavLink:L},setup:()=>({themeLocale:(0,x.X6)(),editNavLink:S(),lastUpdated:(()=>{const e=(0,b.I5)(),l=(0,x.X6)(),a=(0,b.Vi)(),t=(0,b.I2)();return(0,h.Fl)((()=>{var n,r,u,o;return(null==(r=null!=(n=t.value.lastUpdated)?n:l.value.lastUpdated)||r)&&(null==(u=a.value.git)?void 0:u.updatedTime)?new Date(null==(o=a.value.git)?void 0:o.updatedTime).toLocaleString(e.value.lang):null}))})(),contributors:(()=>{const e=(0,x.X6)(),l=(0,b.Vi)(),a=(0,b.I2)();return(0,h.Fl)((()=>{var t,n,r,u;return null!=(n=null!=(t=a.value.contributors)?t:e.value.contributors)&&!n||null==(u=null==(r=l.value.git)?void 0:r.contributors)?null:u}))})()})});N.render=o.render;const I=N,C=e=>!1===e?null:(0,k.HD)(e)?(0,x.sC)(e):!!(0,k.PO)(e)&&e,U=(e,l,a)=>{const t=e.findIndex((e=>e.link===l));if(-1!==t){const l=e[t+a];return(null==l?void 0:l.link)?l:null}for(const t of e)if(t.children){const e=U(t.children,l,a);if(e)return e}return null},M=(0,h.aZ)({name:"PageNav",components:{NavLink:L},setup(){const e=(0,b.I2)(),l=(0,x.VU)(),a=(0,g.yj)();return{prevNavLink:(0,h.Fl)((()=>{const t=C(e.value.prev);return!1!==t?t:U(l.value,a.path,-1)})),nextNavLink:(0,h.Fl)((()=>{const t=C(e.value.next);return!1!==t?t:U(l.value,a.path,1)}))}}});M.render=i.render;const T=M,P=(0,h.aZ)({name:"Page",components:{PageMeta:I,PageNav:T}});P.render=u.render;const j=P;var R=a(3577);const H=(0,h.aZ)({name:"DropdownLink",components:{NavLink:L},props:{item:{type:Object,required:!0}},setup(e){const{item:l}=(0,m.BK)(e),a=(0,h.Fl)((()=>l.value.ariaLabel||l.value.text)),t=(0,m.iH)(!1),n=(0,g.yj)();return(0,h.YP)((()=>n.path),(()=>{t.value=!1})),{open:t,dropdownAriaLabel:a,handleDropdown:e=>{const l=0===e.detail;t.value=!!l&&!t.value},isLastItemOfArray:(e,l)=>l[l.length-1]===e}}});H.render=v.render;const B=H,z=e=>(0,k.HD)(e)?(0,x.sC)(e):e.children?{...e,children:e.children.map(z)}:e,Z=(0,h.aZ)({name:"NavbarLinks",components:{NavLink:L,DropdownLink:B},setup(){const e=(()=>{const e=(0,x.X6)();return(0,h.Fl)((()=>(e.value.navbar||[]).map(z)))})(),l=(()=>{const e=(0,g.tv)(),l=(0,b.I)(),a=(0,b.I5)(),t=(0,x.X6)();return(0,h.Fl)((()=>{var n,r;const u=Object.keys(a.value.locales);if(u.length<2)return[];const o=e.currentRoute.value.path,i=e.currentRoute.value.fullPath;return[{text:null!=(n=t.value.selectLanguageText)?n:"unkown language",ariaLabel:null!=(r=t.value.selectLanguageAriaLabel)?r:"unkown language",children:u.map((n=>{var r,u,s,v,c,d;const h=null!=(u=null==(r=a.value.locales)?void 0:r[n])?u:{},p=null!=(v=null==(s=t.value.locales)?void 0:s[n])?v:{},m=`${h.lang}`,g=null!=(c=p.selectLanguageName)?c:m;let b;if(m===a.value.lang)b=i;else{const a=o.replace(l.value,n);b=e.getRoutes().some((e=>e.path===a))?a:null!=(d=p.home)?d:n}return{text:g,link:b}}))}]}))})(),a=(()=>{const e=(0,x.X6)(),l=(0,h.Fl)((()=>e.value.repo)),a=(0,h.Fl)((()=>l.value?y(l.value):null)),t=(0,h.Fl)((()=>l.value&&!(0,k.ak)(l.value)?`https://github.com/${l.value}`:l.value)),n=(0,h.Fl)((()=>t.value?e.value.repoLabel?e.value.repoLabel:null===a.value?"Source":a.value:null));return(0,h.Fl)((()=>t.value&&n.value?[{text:n.value,link:t.value}]:[]))})();return{navbarLinks:(0,h.Fl)((()=>[...e.value,...l.value,...a.value]))}}});Z.render=s.render;const A=Z,X={class:"icon",focusable:"false",viewBox:"0 0 32 32"},$=(0,h.Wm)("path",{d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z",fill:"currentColor"},null,-1),D=(0,h.Wm)("path",{d:"M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z",fill:"currentColor"},null,-1),V=(0,h.Wm)("path",{d:"M2 15.005h5v2H2z",fill:"currentColor"},null,-1),q=(0,h.Wm)("path",{d:"M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z",fill:"currentColor"},null,-1),E=(0,h.Wm)("path",{d:"M15 25.005h2v5h-2z",fill:"currentColor"},null,-1),O=(0,h.Wm)("path",{d:"M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z",fill:"currentColor"},null,-1),G=(0,h.Wm)("path",{d:"M25 15.005h5v2h-5z",fill:"currentColor"},null,-1),J=(0,h.Wm)("path",{d:"M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z",fill:"currentColor"},null,-1),Y=(0,h.Wm)("path",{d:"M15 2.005h2v5h-2z",fill:"currentColor"},null,-1),_={class:"icon",focusable:"false",viewBox:"0 0 32 32"},K=(0,h.Wm)("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Q=(0,h.aZ)({expose:[],setup(e){const l=(0,x.vs)(),a=()=>{l.value=!l.value};return(e,t)=>((0,h.wg)(),(0,h.j4)("button",{class:"toggle-dark-button",onClick:a},[(0,h.wy)(((0,h.wg)(),(0,h.j4)("svg",X,[$,D,V,q,E,O,G,J,Y],512)),[[p.F8,!(0,m.SU)(l)]]),(0,h.wy)(((0,h.wg)(),(0,h.j4)("svg",_,[K],512)),[[p.F8,(0,m.SU)(l)]])]))}}),ee=(0,h.aZ)({name:"ToggleSidebarButton",emits:["toggle"]});ee.render=c.render;const le=ee,ae=(0,h.aZ)({expose:[],emits:["toggle-sidebar"],setup(e){const l=(0,b.I)(),a=(0,b.I5)(),t=(0,x.X6)(),n=(0,m.iH)(null),r=(0,m.iH)(null),u=(0,h.Fl)((()=>t.value.home||l.value)),o=(0,h.Fl)((()=>t.value.logo)),i=(0,h.Fl)((()=>a.value.title)),s=(0,m.iH)(0),v=(0,h.Fl)((()=>s.value?{maxWidth:s.value+"px"}:{})),c=(0,h.Fl)((()=>t.value.darkMode));function d(e,l){var a,t,n;const r=null==(n=null==(t=null==(a=null==e?void 0:e.ownerDocument)?void 0:a.defaultView)?void 0:t.getComputedStyle(e,null))?void 0:n[l],u=Number.parseInt(r,10);return Number.isNaN(u)?0:u}return(0,h.bv)((()=>{const e=d(n.value,"paddingLeft")+d(n.value,"paddingRight"),l=()=>{var l;window.innerWidth<719?s.value=0:s.value=n.value.offsetWidth-e-((null==(l=r.value)?void 0:l.offsetWidth)||0)};l(),window.addEventListener("resize",l,!1),window.addEventListener("orientationchange",l,!1)})),(e,l)=>{const a=(0,h.up)("RouterLink"),t=(0,h.up)("NavbarSearch");return(0,h.wg)(),(0,h.j4)("header",{ref:n,class:"navbar"},[(0,h.Wm)(le,{onToggle:l[1]||(l[1]=l=>e.$emit("toggle-sidebar"))}),(0,h.Wm)("span",{ref:r},[(0,h.Wm)(a,{to:(0,m.SU)(u)},{default:(0,h.w5)((()=>[(0,m.SU)(o)?((0,h.wg)(),(0,h.j4)("img",{key:0,class:"logo",src:(0,m.SU)(b.pJ)((0,m.SU)(o)),alt:(0,m.SU)(i)},null,8,["src","alt"])):(0,h.kq)("",!0),(0,m.SU)(i)?((0,h.wg)(),(0,h.j4)("span",{key:1,class:["site-name",{"can-hide":(0,m.SU)(o)}]},(0,R.zw)((0,m.SU)(i)),3)):(0,h.kq)("",!0)])),_:1},8,["to"])],512),(0,h.Wm)("div",{class:"navbar-links-wrapper",style:(0,m.SU)(v)},[(0,h.WI)(e.$slots,"before"),(0,h.Wm)(A,{class:"can-hide"}),(0,h.WI)(e.$slots,"after"),(0,m.SU)(c)?((0,h.wg)(),(0,h.j4)(Q,{key:0})):(0,h.kq)("",!0),(0,h.Wm)(t)],4)],512)}}}),te=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),ne=(e,l)=>!!((e,l)=>void 0!==l&&(e.hash===l||te(e.path)===te(l)))(e,l.link)||!!l.children&&l.children.some((l=>ne(e,l))),re=(e,l)=>e.link?(0,h.h)(L,{...l,item:e}):(0,h.h)("p",l,e.text),ue=(e,l)=>{var a;return(null===(a=e.children)||void 0===a?void 0:a.length)?(0,h.h)("ul",{class:{"sidebar-sub-items":l>0}},e.children.map((e=>(0,h.h)("li",(0,h.h)(oe,{item:e,depth:l+1}))))):null},oe=({item:e,depth:l=0})=>{const a=(0,g.yj)(),t=ne(a,e);return[re(e,{class:{"sidebar-heading":0===l,"sidebar-item":!0,active:t}}),ue(e,l)]};oe.displayName="SidebarChild",oe.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};const ie=(0,h.aZ)({name:"Sidebar",components:{NavbarLinks:A,SidebarChild:oe},setup:()=>({sidebarItems:(0,x.VU)()})});ie.render=d.render;const se=ie,ve=(0,h.aZ)({name:"Layout",components:{Home:w,Page:j,Navbar:ae,Sidebar:se,Transition:p.uT},setup(){const e=(0,b.Vi)(),l=(0,b.I2)(),a=(0,x.X6)(),t=(0,h.Fl)((()=>!1!==l.value.navbar&&!1!==a.value.navbar)),n=(0,x.VU)(),r=(0,m.iH)(!1),u=e=>{r.value="boolean"==typeof e?e:!r.value},o={x:0,y:0},i=(0,h.Fl)((()=>[{"no-navbar":!t.value,"no-sidebar":!n.value.length,"sidebar-open":r.value},l.value.pageClass]));let s;(0,h.bv)((()=>{const e=(0,g.tv)();s=e.afterEach((()=>{u(!1)}))})),(0,h.Ah)((()=>{s()}));const v=(0,x.P$)(),c=v.resolve,d=v.pending;return{frontmatter:l,page:e,containerClass:i,shouldShowNavbar:t,toggleSidebar:u,onTouchStart:e=>{o.x=e.changedTouches[0].clientX,o.y=e.changedTouches[0].clientY},onTouchEnd:e=>{const l=e.changedTouches[0].clientX-o.x,a=e.changedTouches[0].clientY-o.y;Math.abs(l)>Math.abs(a)&&Math.abs(l)>40&&(l>0&&o.x<=80?u(!0):u(!1))},onBeforeEnter:c,onBeforeLeave:d}}});ve.render=t.render;const ce=ve}}]);