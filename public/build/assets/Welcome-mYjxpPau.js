import{r as M,j as l,R as B,H as qe}from"./app-BX6cveP2.js";import{F as Xe,a as Ue}from"./XMarkIcon-DiJz_fDL.js";function Ke({title:e,titleId:r,...t},i){return M.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":r},t),e?M.createElement("title",{id:r},e):null,M.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"}))}const Ze=M.forwardRef(Ke);function Qe({title:e,titleId:r,...t},i){return M.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":r},t),e?M.createElement("title",{id:r},e):null,M.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 15.75 7.5-7.5 7.5 7.5"}))}const Je=M.forwardRef(Qe);function et({onVerTodos:e}){const[r,t]=M.useState(!1),[i,a]=M.useState(!1);M.useEffect(()=>{const o=()=>{a(window.scrollY>20)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:`
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          .mobile-menu {
            display: block !important;
          }
          .main-navbar {
            padding: 10px 16px !important;
            height: 64px !important;
          }
          .main-navbar img {
            height: 40px !important;
          }
          .mobile-menu {
            padding: 6px !important;
          }
          .mobile-menu svg {
            width: 24px;
            height: 24px;
          }
        }
        @media (max-width: 360px) {
          .main-navbar {
            padding: 8px 12px !important;
            height: 60px !important;
          }
          .main-navbar img {
            height: 36px !important;
          }
          .mobile-menu {
            padding: 4px !important;
          }
          .mobile-menu svg {
            width: 22px;
            height: 22px;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 998;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mobile-menu-content {
          text-align: center;
        }
        .mobile-menu-item {
          display: block;
          color: #0f172a;
          text-decoration: none;
          font-size: 20px;
          font-weight: 600;
          margin: 24px 0;
          transition: color 0.2s;
          cursor: pointer;
          background: none;
          border: none;
          width: 100%;
        }
        .mobile-menu-item:hover {
          color: #003DA5;
        }
        .nav-btn-outline {
          color: #003DA5;
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          border: 2px solid rgba(0,61,165,0.3);
          padding: 10px 24px;
          border-radius: 50px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          background: transparent;
        }
        .nav-btn-outline:hover {
          background: #003DA5;
          border-color: #003DA5;
          color: white;
          box-shadow: 0 10px 20px rgba(0,61,165,0.15);
          transform: translateY(-2px);
        }
        .nav-btn-primary {
          background: linear-gradient(135deg, #003DA5 0%, #D4A017 100%);
          color: white;
          padding: 12px 28px;
          border-radius: 50px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          transition: transform 0.3s, box-shadow 0.3s;
          box-shadow: 0 4px 15px rgba(0, 61, 165, 0.2);
          display: inline-block;
          position: relative;
          overflow: hidden;
        }
        .nav-btn-primary::after {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-20deg);
          transition: all 0.6s ease;
        }
        .nav-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 61, 165, 0.3);
        }
        .nav-btn-primary:hover::after {
          left: 150%;
        }
      `}),l.jsxs("nav",{className:"main-navbar",style:{position:"fixed",top:0,left:0,right:0,zIndex:999,background:i?"rgba(255, 255, 255, 0.85)":"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderBottom:"1px solid rgba(15, 23, 42, 0.05)",boxShadow:i?"0 10px 30px rgba(15, 23, 42, 0.04)":"none",padding:"16px 48px",display:"flex",justifyContent:"space-between",alignItems:"center",height:"90px",transition:"all 0.3s ease"},children:[l.jsx("div",{onClick:n,style:{display:"inline-flex",alignItems:"center",cursor:"pointer",transition:"transform 0.3s ease"},onMouseEnter:o=>o.currentTarget.style.transform="scale(1.02)",onMouseLeave:o=>o.currentTarget.style.transform="scale(1)",children:l.jsx("img",{src:"/imagenes/logo-iha.png",alt:"IHA",style:{height:"65px",objectFit:"contain",transition:"height 0.3s ease"}})}),l.jsxs("div",{className:"nav-links",style:{display:"flex",gap:"32px",alignItems:"center"},children:[l.jsx("a",{href:"#servicios",style:{color:"#475569",textDecoration:"none",fontSize:"15px",fontWeight:"700",transition:"color 0.2s",cursor:"pointer"},onMouseEnter:o=>o.target.style.color="#003DA5",onMouseLeave:o=>o.target.style.color="#475569",children:"Servicios"}),l.jsx("a",{href:"#contacto",style:{color:"#475569",textDecoration:"none",fontSize:"15px",fontWeight:"700",transition:"color 0.2s",cursor:"pointer"},onMouseEnter:o=>o.target.style.color="#003DA5",onMouseLeave:o=>o.target.style.color="#475569",children:"Contacto"}),l.jsx("button",{onClick:e,className:"nav-btn-outline",children:"Ver Catálogo"}),l.jsx("a",{href:"https://wa.me/527225645160",target:"_blank",rel:"noreferrer",className:"nav-btn-primary",children:"Cotizar Proyecto"})]}),l.jsx("button",{className:"mobile-menu",onClick:()=>t(!r),style:{background:"rgba(0,61,165,0.05)",border:"1px solid rgba(0,61,165,0.1)",color:"#003DA5",cursor:"pointer",padding:"8px",borderRadius:"12px",transition:"all 0.2s"},children:r?l.jsx(Xe,{className:"w-8 h-8"}):l.jsx(Ue,{className:"w-8 h-8"})})]}),l.jsx("div",{style:{height:"90px"}}),r&&l.jsx("div",{className:"mobile-menu-overlay",onClick:()=>t(!1),children:l.jsxs("div",{className:"mobile-menu-content",onClick:o=>o.stopPropagation(),children:[l.jsx("a",{href:"#servicios",className:"mobile-menu-item",onClick:()=>t(!1),children:"Servicios"}),l.jsx("a",{href:"#contacto",className:"mobile-menu-item",onClick:()=>t(!1),children:"Contacto"}),l.jsx("button",{className:"mobile-menu-item",style:{color:"#003DA5"},onClick:()=>{t(!1),e&&e()},children:"Ver Catálogo"}),l.jsx("a",{href:"https://wa.me/527225645160",target:"_blank",rel:"noreferrer",className:"nav-btn-primary",style:{marginTop:"20px"},onClick:()=>t(!1),children:"Cotizar por WhatsApp"})]})})]})}function ye(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function be(e={},r={}){const t=["__proto__","constructor","prototype"];Object.keys(r).filter(i=>t.indexOf(i)<0).forEach(i=>{typeof e[i]>"u"?e[i]=r[i]:ye(r[i])&&ye(e[i])&&Object.keys(r[i]).length>0&&be(e[i],r[i])})}const ke={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function V(){const e=typeof document<"u"?document:{};return be(e,ke),e}const tt={document:ke,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function $(){const e=typeof window<"u"?window:{};return be(e,tt),e}function it(e=""){return e.trim().split(" ").filter(r=>!!r.trim())}function rt(e){const r=e;Object.keys(r).forEach(t=>{try{r[t]=null}catch{}try{delete r[t]}catch{}})}function ze(e,r=0){return setTimeout(e,r)}function re(){return Date.now()}function nt(e){const r=$();let t;return r.getComputedStyle&&(t=r.getComputedStyle(e,null)),!t&&e.currentStyle&&(t=e.currentStyle),t||(t=e.style),t}function at(e,r="x"){const t=$();let i,a,n;const o=nt(e);return t.WebKitCSSMatrix?(a=o.transform||o.webkitTransform,a.split(",").length>6&&(a=a.split(", ").map(c=>c.replace(",",".")).join(", ")),n=new t.WebKitCSSMatrix(a==="none"?"":a)):(n=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=n.toString().split(",")),r==="x"&&(t.WebKitCSSMatrix?a=n.m41:i.length===16?a=parseFloat(i[12]):a=parseFloat(i[4])),r==="y"&&(t.WebKitCSSMatrix?a=n.m42:i.length===16?a=parseFloat(i[13]):a=parseFloat(i[5])),a||0}function te(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function st(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function W(...e){const r=Object(e[0]);for(let t=1;t<e.length;t+=1){const i=e[t];if(i!=null&&!st(i)){const a=Object.keys(Object(i)).filter(n=>n!=="__proto__"&&n!=="constructor"&&n!=="prototype");for(let n=0,o=a.length;n<o;n+=1){const c=a[n],s=Object.getOwnPropertyDescriptor(i,c);s!==void 0&&s.enumerable&&(te(r[c])&&te(i[c])?i[c].__swiper__?r[c]=i[c]:W(r[c],i[c]):!te(r[c])&&te(i[c])?(r[c]={},i[c].__swiper__?r[c]=i[c]:W(r[c],i[c])):r[c]=i[c])}}}return r}function U(e,r,t){e.style.setProperty(r,t)}function Me({swiper:e,targetPosition:r,side:t}){const i=$(),a=-e.translate;let n=null,o;const c=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const s=r>a?"next":"prev",d=(p,v)=>s==="next"&&p>=v||s==="prev"&&p<=v,m=()=>{o=new Date().getTime(),n===null&&(n=o);const p=Math.max(Math.min((o-n)/c,1),0),v=.5-Math.cos(p*Math.PI)/2;let u=a+v*(r-a);if(d(u,r)&&(u=r),e.wrapperEl.scrollTo({[t]:u}),d(u,r)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[t]:u})}),i.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=i.requestAnimationFrame(m)};m()}function R(e,r=""){const t=$(),i=[...e.children];return t.HTMLSlotElement&&e instanceof HTMLSlotElement&&i.push(...e.assignedElements()),r?i.filter(a=>a.matches(r)):i}function ot(e,r){const t=[r];for(;t.length>0;){const i=t.shift();if(e===i)return!0;t.push(...i.children,...i.shadowRoot?i.shadowRoot.children:[],...i.assignedElements?i.assignedElements():[])}}function lt(e,r){const t=$();let i=r.contains(e);return!i&&t.HTMLSlotElement&&r instanceof HTMLSlotElement&&(i=[...r.assignedElements()].includes(e),i||(i=ot(e,r))),i}function ne(e){try{console.warn(e);return}catch{}}function ae(e,r=[]){const t=document.createElement(e);return t.classList.add(...Array.isArray(r)?r:it(r)),t}function dt(e,r){const t=[];for(;e.previousElementSibling;){const i=e.previousElementSibling;r?i.matches(r)&&t.push(i):t.push(i),e=i}return t}function ct(e,r){const t=[];for(;e.nextElementSibling;){const i=e.nextElementSibling;r?i.matches(r)&&t.push(i):t.push(i),e=i}return t}function q(e,r){return $().getComputedStyle(e,null).getPropertyValue(r)}function se(e){let r=e,t;if(r){for(t=0;(r=r.previousSibling)!==null;)r.nodeType===1&&(t+=1);return t}}function Ie(e,r){const t=[];let i=e.parentElement;for(;i;)r?i.matches(r)&&t.push(i):t.push(i),i=i.parentElement;return t}function ge(e,r,t){const i=$();return e[r==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(e,null).getPropertyValue(r==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(e,null).getPropertyValue(r==="width"?"margin-left":"margin-bottom"))}function F(e){return(Array.isArray(e)?e:[e]).filter(r=>!!r)}function ee(e,r=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:t=>t}).createHTML(r):e.innerHTML=r}let le;function pt(){const e=$(),r=V();return{smoothScroll:r.documentElement&&r.documentElement.style&&"scrollBehavior"in r.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&r instanceof e.DocumentTouch)}}function Pe(){return le||(le=pt()),le}let de;function ut({userAgent:e}={}){const r=Pe(),t=$(),i=t.navigator.platform,a=e||t.navigator.userAgent,n={ios:!1,android:!1},o=t.screen.width,c=t.screen.height,s=a.match(/(Android);?[\s\/]+([\d.]+)?/);let d=a.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const m=a.match(/(iPod)(.*OS\s([\d_]+))?/),p=!d&&a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=i==="Win32";let u=i==="MacIntel";const h=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&u&&r.touch&&h.indexOf(`${o}x${c}`)>=0&&(d=a.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),u=!1),s&&!v&&(n.os="android",n.android=!0),(d||p||m)&&(n.os="ios",n.ios=!0),n}function Le(e={}){return de||(de=ut(e)),de}let ce;function ft(){const e=$(),r=Le();let t=!1;function i(){const c=e.navigator.userAgent.toLowerCase();return c.indexOf("safari")>=0&&c.indexOf("chrome")<0&&c.indexOf("android")<0}if(i()){const c=String(e.navigator.userAgent);if(c.includes("Version/")){const[s,d]=c.split("Version/")[1].split(" ")[0].split(".").map(m=>Number(m));t=s<16||s===16&&d<2}}const a=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),n=i(),o=n||a&&r.ios;return{isSafari:t||n,needPerspectiveFix:t,need3dFix:o,isWebView:a}}function Ae(){return ce||(ce=ft()),ce}function mt({swiper:e,on:r,emit:t}){const i=$();let a=null,n=null;const o=()=>{!e||e.destroyed||!e.initialized||(t("beforeResize"),t("resize"))},c=()=>{!e||e.destroyed||!e.initialized||(a=new ResizeObserver(m=>{n=i.requestAnimationFrame(()=>{const{width:p,height:v}=e;let u=p,h=v;m.forEach(({contentBoxSize:y,contentRect:w,target:f})=>{f&&f!==e.el||(u=w?w.width:(y[0]||y).inlineSize,h=w?w.height:(y[0]||y).blockSize)}),(u!==p||h!==v)&&o()})}),a.observe(e.el))},s=()=>{n&&i.cancelAnimationFrame(n),a&&a.unobserve&&e.el&&(a.unobserve(e.el),a=null)},d=()=>{!e||e.destroyed||!e.initialized||t("orientationchange")};r("init",()=>{if(e.params.resizeObserver&&typeof i.ResizeObserver<"u"){c();return}i.addEventListener("resize",o),i.addEventListener("orientationchange",d)}),r("destroy",()=>{s(),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",d)})}function gt({swiper:e,extendParams:r,on:t,emit:i}){const a=[],n=$(),o=(d,m={})=>{const p=n.MutationObserver||n.WebkitMutationObserver,v=new p(u=>{if(e.__preventObserver__)return;if(u.length===1){i("observerUpdate",u[0]);return}const h=function(){i("observerUpdate",u[0])};n.requestAnimationFrame?n.requestAnimationFrame(h):n.setTimeout(h,0)});v.observe(d,{attributes:typeof m.attributes>"u"?!0:m.attributes,childList:e.isElement||(typeof m.childList>"u"?!0:m).childList,characterData:typeof m.characterData>"u"?!0:m.characterData}),a.push(v)},c=()=>{if(e.params.observer){if(e.params.observeParents){const d=Ie(e.hostEl);for(let m=0;m<d.length;m+=1)o(d[m])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}},s=()=>{a.forEach(d=>{d.disconnect()}),a.splice(0,a.length)};r({observer:!1,observeParents:!1,observeSlideChildren:!1}),t("init",c),t("destroy",s)}var ht={on(e,r,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof r!="function")return i;const a=t?"unshift":"push";return e.split(" ").forEach(n=>{i.eventsListeners[n]||(i.eventsListeners[n]=[]),i.eventsListeners[n][a](r)}),i},once(e,r,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof r!="function")return i;function a(...n){i.off(e,a),a.__emitterProxy&&delete a.__emitterProxy,r.apply(i,n)}return a.__emitterProxy=r,i.on(e,a,t)},onAny(e,r){const t=this;if(!t.eventsListeners||t.destroyed||typeof e!="function")return t;const i=r?"unshift":"push";return t.eventsAnyListeners.indexOf(e)<0&&t.eventsAnyListeners[i](e),t},offAny(e){const r=this;if(!r.eventsListeners||r.destroyed||!r.eventsAnyListeners)return r;const t=r.eventsAnyListeners.indexOf(e);return t>=0&&r.eventsAnyListeners.splice(t,1),r},off(e,r){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||e.split(" ").forEach(i=>{typeof r>"u"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((a,n)=>{(a===r||a.__emitterProxy&&a.__emitterProxy===r)&&t.eventsListeners[i].splice(n,1)})}),t},emit(...e){const r=this;if(!r.eventsListeners||r.destroyed||!r.eventsListeners)return r;let t,i,a;return typeof e[0]=="string"||Array.isArray(e[0])?(t=e[0],i=e.slice(1,e.length),a=r):(t=e[0].events,i=e[0].data,a=e[0].context||r),i.unshift(a),(Array.isArray(t)?t:t.split(" ")).forEach(o=>{r.eventsAnyListeners&&r.eventsAnyListeners.length&&r.eventsAnyListeners.forEach(c=>{c.apply(a,[o,...i])}),r.eventsListeners&&r.eventsListeners[o]&&r.eventsListeners[o].forEach(c=>{c.apply(a,i)})}),r}};function xt(){const e=this;let r,t;const i=e.el;typeof e.params.width<"u"&&e.params.width!==null?r=e.params.width:r=i.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?t=e.params.height:t=i.clientHeight,!(r===0&&e.isHorizontal()||t===0&&e.isVertical())&&(r=r-parseInt(q(i,"padding-left")||0,10)-parseInt(q(i,"padding-right")||0,10),t=t-parseInt(q(i,"padding-top")||0,10)-parseInt(q(i,"padding-bottom")||0,10),Number.isNaN(r)&&(r=0),Number.isNaN(t)&&(t=0),Object.assign(e,{width:r,height:t,size:e.isHorizontal()?r:t}))}function bt(){const e=this;function r(C,E){return parseFloat(C.getPropertyValue(e.getDirectionLabel(E))||0)}const t=e.params,{wrapperEl:i,slidesEl:a,rtlTranslate:n,wrongRTL:o}=e,c=e.virtual&&t.virtual.enabled,s=c?e.virtual.slides.length:e.slides.length,d=R(a,`.${e.params.slideClass}, swiper-slide`),m=c?e.virtual.slides.length:d.length;let p=[];const v=[],u=[];let h=t.slidesOffsetBefore;typeof h=="function"&&(h=t.slidesOffsetBefore.call(e));let y=t.slidesOffsetAfter;typeof y=="function"&&(y=t.slidesOffsetAfter.call(e));const w=e.snapGrid.length,f=e.slidesGrid.length,g=e.size-h-y;let x=t.spaceBetween,S=-h,T=0,I=0;if(typeof g>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*g:typeof x=="string"&&(x=parseFloat(x)),e.virtualSize=-x-h-y,d.forEach(C=>{n?C.style.marginLeft="":C.style.marginRight="",C.style.marginBottom="",C.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(U(i,"--swiper-centered-offset-before",""),U(i,"--swiper-centered-offset-after","")),t.cssMode&&(U(i,"--swiper-slides-offset-before",`${h}px`),U(i,"--swiper-slides-offset-after",`${y}px`));const z=t.grid&&t.grid.rows>1&&e.grid;z?e.grid.initSlides(d):e.grid&&e.grid.unsetSlides();let b;const P=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(C=>typeof t.breakpoints[C].slidesPerView<"u").length>0;for(let C=0;C<m;C+=1){b=0;const E=d[C];if(!(E&&(z&&e.grid.updateSlide(C,E,d),q(E,"display")==="none"))){if(c&&t.slidesPerView==="auto")t.virtual.slidesPerViewAutoSlideSize&&(b=t.virtual.slidesPerViewAutoSlideSize),b&&E&&(t.roundLengths&&(b=Math.floor(b)),E.style[e.getDirectionLabel("width")]=`${b}px`);else if(t.slidesPerView==="auto"){P&&(E.style[e.getDirectionLabel("width")]="");const k=getComputedStyle(E),L=E.style.transform,A=E.style.webkitTransform;if(L&&(E.style.transform="none"),A&&(E.style.webkitTransform="none"),t.roundLengths)b=e.isHorizontal()?ge(E,"width"):ge(E,"height");else{const O=r(k,"width"),G=r(k,"padding-left"),D=r(k,"padding-right"),j=r(k,"margin-left"),N=r(k,"margin-right"),_=k.getPropertyValue("box-sizing");if(_&&_==="border-box")b=O+j+N;else{const{clientWidth:Y,offsetWidth:Ye}=E;b=O+G+D+j+N+(Ye-Y)}}L&&(E.style.transform=L),A&&(E.style.webkitTransform=A),t.roundLengths&&(b=Math.floor(b))}else b=(g-(t.slidesPerView-1)*x)/t.slidesPerView,t.roundLengths&&(b=Math.floor(b)),E&&(E.style[e.getDirectionLabel("width")]=`${b}px`);E&&(E.swiperSlideSize=b),u.push(b),t.centeredSlides?(S=S+b/2+T/2+x,T===0&&C!==0&&(S=S-g/2-x),C===0&&(S=S-g/2-x),Math.abs(S)<1/1e3&&(S=0),t.roundLengths&&(S=Math.floor(S)),I%t.slidesPerGroup===0&&p.push(S),v.push(S)):(t.roundLengths&&(S=Math.floor(S)),(I-Math.min(e.params.slidesPerGroupSkip,I))%e.params.slidesPerGroup===0&&p.push(S),v.push(S),S=S+b+x),e.virtualSize+=b+x,T=b,I+=1}}if(e.virtualSize=Math.max(e.virtualSize,g)+y,n&&o&&(t.effect==="slide"||t.effect==="coverflow")&&(i.style.width=`${e.virtualSize+x}px`),t.setWrapperSize&&(i.style[e.getDirectionLabel("width")]=`${e.virtualSize+x}px`),z&&e.grid.updateWrapperSize(b,p),!t.centeredSlides){const C=t.slidesPerView!=="auto"&&t.slidesPerView%1!==0,E=t.snapToSlideEdge&&!t.loop&&(t.slidesPerView==="auto"||C);let k=p.length;if(E){let A;if(t.slidesPerView==="auto"){A=1;let O=0;for(let G=u.length-1;G>=0&&(O+=u[G]+(G<u.length-1?x:0),O<=g);G-=1)A=u.length-G}else A=Math.floor(t.slidesPerView);k=Math.max(m-A,0)}const L=[];for(let A=0;A<p.length;A+=1){let O=p[A];t.roundLengths&&(O=Math.floor(O)),E?A<=k&&L.push(O):p[A]<=e.virtualSize-g&&L.push(O)}p=L,Math.floor(e.virtualSize-g)-Math.floor(p[p.length-1])>1&&(E||p.push(e.virtualSize-g))}if(c&&t.loop){const C=u[0]+x;if(t.slidesPerGroup>1){const E=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/t.slidesPerGroup),k=C*t.slidesPerGroup;for(let L=0;L<E;L+=1)p.push(p[p.length-1]+k)}for(let E=0;E<e.virtual.slidesBefore+e.virtual.slidesAfter;E+=1)t.slidesPerGroup===1&&p.push(p[p.length-1]+C),v.push(v[v.length-1]+C),e.virtualSize+=C}if(p.length===0&&(p=[0]),x!==0){const C=e.isHorizontal()&&n?"marginLeft":e.getDirectionLabel("marginRight");d.filter((E,k)=>!t.cssMode||t.loop?!0:k!==d.length-1).forEach(E=>{E.style[C]=`${x}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let C=0;u.forEach(k=>{C+=k+(x||0)}),C-=x;const E=C>g?C-g:0;p=p.map(k=>k<=0?-h:k>E?E+y:k)}if(t.centerInsufficientSlides){let C=0;if(u.forEach(E=>{C+=E+(x||0)}),C-=x,C<g){const E=(g-C)/2;p.forEach((k,L)=>{p[L]=k-E}),v.forEach((k,L)=>{v[L]=k+E})}}if(Object.assign(e,{slides:d,snapGrid:p,slidesGrid:v,slidesSizesGrid:u}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){U(i,"--swiper-centered-offset-before",`${-p[0]}px`),U(i,"--swiper-centered-offset-after",`${e.size/2-u[u.length-1]/2}px`);const C=-e.snapGrid[0],E=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(k=>k+C),e.slidesGrid=e.slidesGrid.map(k=>k+E)}if(m!==s&&e.emit("slidesLengthChange"),p.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==f&&e.emit("slidesGridLengthChange"),t.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!c&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const C=`${t.containerModifierClass}backface-hidden`,E=e.el.classList.contains(C);m<=t.maxBackfaceHiddenSlides?E||e.el.classList.add(C):E&&e.el.classList.remove(C)}}function vt(e){const r=this,t=[],i=r.virtual&&r.params.virtual.enabled;let a=0,n;typeof e=="number"?r.setTransition(e):e===!0&&r.setTransition(r.params.speed);const o=c=>i?r.slides[r.getSlideIndexByData(c)]:r.slides[c];if(r.params.slidesPerView!=="auto"&&r.params.slidesPerView>1)if(r.params.centeredSlides)(r.visibleSlides||[]).forEach(c=>{t.push(c)});else for(n=0;n<Math.ceil(r.params.slidesPerView);n+=1){const c=r.activeIndex+n;if(c>r.slides.length&&!i)break;t.push(o(c))}else t.push(o(r.activeIndex));for(n=0;n<t.length;n+=1)if(typeof t[n]<"u"){const c=t[n].offsetHeight;a=c>a?c:a}(a||a===0)&&(r.wrapperEl.style.height=`${a}px`)}function yt(){const e=this,r=e.slides,t=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let i=0;i<r.length;i+=1)r[i].swiperSlideOffset=(e.isHorizontal()?r[i].offsetLeft:r[i].offsetTop)-t-e.cssOverflowAdjustment()}const we=(e,r,t)=>{r&&!e.classList.contains(t)?e.classList.add(t):!r&&e.classList.contains(t)&&e.classList.remove(t)};function wt(e=this&&this.translate||0){const r=this,t=r.params,{slides:i,rtlTranslate:a,snapGrid:n}=r;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&r.updateSlidesOffset();let o=-e;a&&(o=e),r.visibleSlidesIndexes=[],r.visibleSlides=[];let c=t.spaceBetween;typeof c=="string"&&c.indexOf("%")>=0?c=parseFloat(c.replace("%",""))/100*r.size:typeof c=="string"&&(c=parseFloat(c));for(let s=0;s<i.length;s+=1){const d=i[s];let m=d.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(m-=i[0].swiperSlideOffset);const p=(o+(t.centeredSlides?r.minTranslate():0)-m)/(d.swiperSlideSize+c),v=(o-n[0]+(t.centeredSlides?r.minTranslate():0)-m)/(d.swiperSlideSize+c),u=-(o-m),h=u+r.slidesSizesGrid[s],y=u>=0&&u<=r.size-r.slidesSizesGrid[s],w=u>=0&&u<r.size-1||h>1&&h<=r.size||u<=0&&h>=r.size;w&&(r.visibleSlides.push(d),r.visibleSlidesIndexes.push(s)),we(d,w,t.slideVisibleClass),we(d,y,t.slideFullyVisibleClass),d.progress=a?-p:p,d.originalProgress=a?-v:v}}function St(e){const r=this;if(typeof e>"u"){const m=r.rtlTranslate?-1:1;e=r&&r.translate&&r.translate*m||0}const t=r.params,i=r.maxTranslate()-r.minTranslate();let{progress:a,isBeginning:n,isEnd:o,progressLoop:c}=r;const s=n,d=o;if(i===0)a=0,n=!0,o=!0;else{a=(e-r.minTranslate())/i;const m=Math.abs(e-r.minTranslate())<1,p=Math.abs(e-r.maxTranslate())<1;n=m||a<=0,o=p||a>=1,m&&(a=0),p&&(a=1)}if(t.loop){const m=r.getSlideIndexByData(0),p=r.getSlideIndexByData(r.slides.length-1),v=r.slidesGrid[m],u=r.slidesGrid[p],h=r.slidesGrid[r.slidesGrid.length-1],y=Math.abs(e);y>=v?c=(y-v)/h:c=(y+h-u)/h,c>1&&(c-=1)}Object.assign(r,{progress:a,progressLoop:c,isBeginning:n,isEnd:o}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&r.updateSlidesProgress(e),n&&!s&&r.emit("reachBeginning toEdge"),o&&!d&&r.emit("reachEnd toEdge"),(s&&!n||d&&!o)&&r.emit("fromEdge"),r.emit("progress",a)}const pe=(e,r,t)=>{r&&!e.classList.contains(t)?e.classList.add(t):!r&&e.classList.contains(t)&&e.classList.remove(t)};function Tt(){const e=this,{slides:r,params:t,slidesEl:i,activeIndex:a}=e,n=e.virtual&&t.virtual.enabled,o=e.grid&&t.grid&&t.grid.rows>1,c=p=>R(i,`.${t.slideClass}${p}, swiper-slide${p}`)[0];let s,d,m;if(n)if(t.loop){let p=a-e.virtual.slidesBefore;p<0&&(p=e.virtual.slides.length+p),p>=e.virtual.slides.length&&(p-=e.virtual.slides.length),s=c(`[data-swiper-slide-index="${p}"]`)}else s=c(`[data-swiper-slide-index="${a}"]`);else o?(s=r.find(p=>p.column===a),m=r.find(p=>p.column===a+1),d=r.find(p=>p.column===a-1)):s=r[a];s&&(o||(m=ct(s,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!m&&(m=r[0]),d=dt(s,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!d===0&&(d=r[r.length-1]))),r.forEach(p=>{pe(p,p===s,t.slideActiveClass),pe(p,p===m,t.slideNextClass),pe(p,p===d,t.slidePrevClass)}),e.emitSlidesClasses()}const ie=(e,r)=>{if(!e||e.destroyed||!e.params)return;const t=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,i=r.closest(t());if(i){let a=i.querySelector(`.${e.params.lazyPreloaderClass}`);!a&&e.isElement&&(i.shadowRoot?a=i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(a=i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),a&&!a.lazyPreloaderManaged&&a.remove())})),a&&!a.lazyPreloaderManaged&&a.remove()}},ue=(e,r)=>{if(!e.slides[r])return;const t=e.slides[r].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},he=e=>{if(!e||e.destroyed||!e.params)return;let r=e.params.lazyPreloadPrevNext;const t=e.slides.length;if(!t||!r||r<0)return;r=Math.min(r,t);const i=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),a=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=a,c=[o-r];c.push(...Array.from({length:r}).map((s,d)=>o+i+d)),e.slides.forEach((s,d)=>{c.includes(s.column)&&ue(e,d)});return}const n=a+i-1;if(e.params.rewind||e.params.loop)for(let o=a-r;o<=n+r;o+=1){const c=(o%t+t)%t;(c<a||c>n)&&ue(e,c)}else for(let o=Math.max(a-r,0);o<=Math.min(n+r,t-1);o+=1)o!==a&&(o>n||o<a)&&ue(e,o)};function Ct(e){const{slidesGrid:r,params:t}=e,i=e.rtlTranslate?e.translate:-e.translate;let a;for(let n=0;n<r.length;n+=1)typeof r[n+1]<"u"?i>=r[n]&&i<r[n+1]-(r[n+1]-r[n])/2?a=n:i>=r[n]&&i<r[n+1]&&(a=n+1):i>=r[n]&&(a=n);return t.normalizeSlideIndex&&(a<0||typeof a>"u")&&(a=0),a}function Et(e){const r=this,t=r.rtlTranslate?r.translate:-r.translate,{snapGrid:i,params:a,activeIndex:n,realIndex:o,snapIndex:c}=r;let s=e,d;const m=u=>{let h=u-r.virtual.slidesBefore;return h<0&&(h=r.virtual.slides.length+h),h>=r.virtual.slides.length&&(h-=r.virtual.slides.length),h};if(typeof s>"u"&&(s=Ct(r)),i.indexOf(t)>=0)d=i.indexOf(t);else{const u=Math.min(a.slidesPerGroupSkip,s);d=u+Math.floor((s-u)/a.slidesPerGroup)}if(d>=i.length&&(d=i.length-1),s===n&&!r.params.loop){d!==c&&(r.snapIndex=d,r.emit("snapIndexChange"));return}if(s===n&&r.params.loop&&r.virtual&&r.params.virtual.enabled){r.realIndex=m(s);return}const p=r.grid&&a.grid&&a.grid.rows>1;let v;if(r.virtual&&a.virtual.enabled)a.loop?v=m(s):v=s;else if(p){const u=r.slides.find(y=>y.column===s);let h=parseInt(u.getAttribute("data-swiper-slide-index"),10);Number.isNaN(h)&&(h=Math.max(r.slides.indexOf(u),0)),v=Math.floor(h/a.grid.rows)}else if(r.slides[s]){const u=r.slides[s].getAttribute("data-swiper-slide-index");u?v=parseInt(u,10):v=s}else v=s;Object.assign(r,{previousSnapIndex:c,snapIndex:d,previousRealIndex:o,realIndex:v,previousIndex:n,activeIndex:s}),r.initialized&&he(r),r.emit("activeIndexChange"),r.emit("snapIndexChange"),(r.initialized||r.params.runCallbacksOnInit)&&(o!==v&&r.emit("realIndexChange"),r.emit("slideChange"))}function jt(e,r){const t=this,i=t.params;let a=e.closest(`.${i.slideClass}, swiper-slide`);!a&&t.isElement&&r&&r.length>1&&r.includes(e)&&[...r.slice(r.indexOf(e)+1,r.length)].forEach(c=>{!a&&c.matches&&c.matches(`.${i.slideClass}, swiper-slide`)&&(a=c)});let n=!1,o;if(a){for(let c=0;c<t.slides.length;c+=1)if(t.slides[c]===a){n=!0,o=c;break}}if(a&&n)t.clickedSlide=a,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(a.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=o;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}i.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var kt={updateSize:xt,updateSlides:bt,updateAutoHeight:vt,updateSlidesOffset:yt,updateSlidesProgress:wt,updateProgress:St,updateSlidesClasses:Tt,updateActiveIndex:Et,updateClickedSlide:jt};function zt(e=this.isHorizontal()?"x":"y"){const r=this,{params:t,rtlTranslate:i,translate:a,wrapperEl:n}=r;if(t.virtualTranslate)return i?-a:a;if(t.cssMode)return a;let o=at(n,e);return o+=r.cssOverflowAdjustment(),i&&(o=-o),o||0}function Mt(e,r){const t=this,{rtlTranslate:i,params:a,wrapperEl:n,progress:o}=t;let c=0,s=0;const d=0;t.isHorizontal()?c=i?-e:e:s=e,a.roundLengths&&(c=Math.floor(c),s=Math.floor(s)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?c:s,a.cssMode?n[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-c:-s:a.virtualTranslate||(t.isHorizontal()?c-=t.cssOverflowAdjustment():s-=t.cssOverflowAdjustment(),n.style.transform=`translate3d(${c}px, ${s}px, ${d}px)`);let m;const p=t.maxTranslate()-t.minTranslate();p===0?m=0:m=(e-t.minTranslate())/p,m!==o&&t.updateProgress(e),t.emit("setTranslate",t.translate,r)}function It(){return-this.snapGrid[0]}function Pt(){return-this.snapGrid[this.snapGrid.length-1]}function Lt(e=0,r=this.params.speed,t=!0,i=!0,a){const n=this,{params:o,wrapperEl:c}=n;if(n.animating&&o.preventInteractionOnTransition)return!1;const s=n.minTranslate(),d=n.maxTranslate();let m;if(i&&e>s?m=s:i&&e<d?m=d:m=e,n.updateProgress(m),o.cssMode){const p=n.isHorizontal();if(r===0)c[p?"scrollLeft":"scrollTop"]=-m;else{if(!n.support.smoothScroll)return Me({swiper:n,targetPosition:-m,side:p?"left":"top"}),!0;c.scrollTo({[p?"left":"top"]:-m,behavior:"smooth"})}return!0}return r===0?(n.setTransition(0),n.setTranslate(m),t&&(n.emit("beforeTransitionStart",r,a),n.emit("transitionEnd"))):(n.setTransition(r),n.setTranslate(m),t&&(n.emit("beforeTransitionStart",r,a),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(v){!n||n.destroyed||v.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,n.animating=!1,t&&n.emit("transitionEnd"))}),n.wrapperEl.addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd))),!0}var At={getTranslate:zt,setTranslate:Mt,minTranslate:It,maxTranslate:Pt,translateTo:Lt};function Dt(e,r){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${e}ms`,t.wrapperEl.style.transitionDelay=e===0?"0ms":""),t.emit("setTransition",e,r)}function De({swiper:e,runCallbacks:r,direction:t,step:i}){const{activeIndex:a,previousIndex:n}=e;let o=t;o||(a>n?o="next":a<n?o="prev":o="reset"),e.emit(`transition${i}`),r&&o==="reset"?e.emit(`slideResetTransition${i}`):r&&a!==n&&(e.emit(`slideChangeTransition${i}`),o==="next"?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`))}function Nt(e=!0,r){const t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),De({swiper:t,runCallbacks:e,direction:r,step:"Start"}))}function Ot(e=!0,r){const t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),De({swiper:t,runCallbacks:e,direction:r,step:"End"}))}var Bt={setTransition:Dt,transitionStart:Nt,transitionEnd:Ot};function _t(e=0,r,t=!0,i,a){typeof e=="string"&&(e=parseInt(e,10));const n=this;let o=e;o<0&&(o=0);const{params:c,snapGrid:s,slidesGrid:d,previousIndex:m,activeIndex:p,rtlTranslate:v,wrapperEl:u,enabled:h}=n;if(!h&&!i&&!a||n.destroyed||n.animating&&c.preventInteractionOnTransition)return!1;typeof r>"u"&&(r=n.params.speed);const y=Math.min(n.params.slidesPerGroupSkip,o);let w=y+Math.floor((o-y)/n.params.slidesPerGroup);w>=s.length&&(w=s.length-1);const f=-s[w];if(c.normalizeSlideIndex)for(let z=0;z<d.length;z+=1){const b=-Math.floor(f*100),P=Math.floor(d[z]*100),C=Math.floor(d[z+1]*100);typeof d[z+1]<"u"?b>=P&&b<C-(C-P)/2?o=z:b>=P&&b<C&&(o=z+1):b>=P&&(o=z)}if(n.initialized&&o!==p&&(!n.allowSlideNext&&(v?f>n.translate&&f>n.minTranslate():f<n.translate&&f<n.minTranslate())||!n.allowSlidePrev&&f>n.translate&&f>n.maxTranslate()&&(p||0)!==o))return!1;o!==(m||0)&&t&&n.emit("beforeSlideChangeStart"),n.updateProgress(f);let g;o>p?g="next":o<p?g="prev":g="reset";const x=n.virtual&&n.params.virtual.enabled;if(!(x&&a)&&(v&&-f===n.translate||!v&&f===n.translate))return n.updateActiveIndex(o),c.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),c.effect!=="slide"&&n.setTranslate(f),g!=="reset"&&(n.transitionStart(t,g),n.transitionEnd(t,g)),!1;if(c.cssMode){const z=n.isHorizontal(),b=v?f:-f;if(r===0)x&&(n.wrapperEl.style.scrollSnapType="none",n._immediateVirtual=!0),x&&!n._cssModeVirtualInitialSet&&n.params.initialSlide>0?(n._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{u[z?"scrollLeft":"scrollTop"]=b})):u[z?"scrollLeft":"scrollTop"]=b,x&&requestAnimationFrame(()=>{n.wrapperEl.style.scrollSnapType="",n._immediateVirtual=!1});else{if(!n.support.smoothScroll)return Me({swiper:n,targetPosition:b,side:z?"left":"top"}),!0;u.scrollTo({[z?"left":"top"]:b,behavior:"smooth"})}return!0}const I=Ae().isSafari;return x&&!a&&I&&n.isElement&&n.virtual.update(!1,!1,o),n.setTransition(r),n.setTranslate(f),n.updateActiveIndex(o),n.updateSlidesClasses(),n.emit("beforeTransitionStart",r,i),n.transitionStart(t,g),r===0?n.transitionEnd(t,g):n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function(b){!n||n.destroyed||b.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(t,g))}),n.wrapperEl.addEventListener("transitionend",n.onSlideToWrapperTransitionEnd)),!0}function Ft(e=0,r,t=!0,i){typeof e=="string"&&(e=parseInt(e,10));const a=this;if(a.destroyed)return;typeof r>"u"&&(r=a.params.speed);const n=a.grid&&a.params.grid&&a.params.grid.rows>1;let o=e;if(a.params.loop)if(a.virtual&&a.params.virtual.enabled)o=o+a.virtual.slidesBefore;else{let c;if(n){const y=o*a.params.grid.rows;c=a.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===y).column}else c=a.getSlideIndexByData(o);const s=n?Math.ceil(a.slides.length/a.params.grid.rows):a.slides.length,{centeredSlides:d,slidesOffsetBefore:m,slidesOffsetAfter:p}=a.params,v=d||!!m||!!p;let u=a.params.slidesPerView;u==="auto"?u=a.slidesPerViewDynamic():(u=Math.ceil(parseFloat(a.params.slidesPerView,10)),v&&u%2===0&&(u=u+1));let h=s-c<u;if(v&&(h=h||c<Math.ceil(u/2)),i&&v&&a.params.slidesPerView!=="auto"&&!n&&(h=!1),h){const y=v?c<a.activeIndex?"prev":"next":c-a.activeIndex-1<a.params.slidesPerView?"next":"prev";a.loopFix({direction:y,slideTo:!0,activeSlideIndex:y==="next"?c+1:c-s+1,slideRealIndex:y==="next"?a.realIndex:void 0})}if(n){const y=o*a.params.grid.rows;o=a.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===y).column}else o=a.getSlideIndexByData(o)}return requestAnimationFrame(()=>{a.slideTo(o,r,t,i)}),a}function $t(e,r=!0,t){const i=this,{enabled:a,params:n,animating:o}=i;if(!a||i.destroyed)return i;typeof e>"u"&&(e=i.params.speed);let c=n.slidesPerGroup;n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(c=Math.max(i.slidesPerViewDynamic("current",!0),1));const s=i.activeIndex<n.slidesPerGroupSkip?1:c,d=i.virtual&&n.virtual.enabled;if(n.loop){if(o&&!d&&n.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&n.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+s,e,r,t)}),!0}return n.rewind&&i.isEnd?i.slideTo(0,e,r,t):i.slideTo(i.activeIndex+s,e,r,t)}function Wt(e,r=!0,t){const i=this,{params:a,snapGrid:n,slidesGrid:o,rtlTranslate:c,enabled:s,animating:d}=i;if(!s||i.destroyed)return i;typeof e>"u"&&(e=i.params.speed);const m=i.virtual&&a.virtual.enabled;if(a.loop){if(d&&!m&&a.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const p=c?i.translate:-i.translate;function v(g){return g<0?-Math.floor(Math.abs(g)):Math.floor(g)}const u=v(p),h=n.map(g=>v(g)),y=a.freeMode&&a.freeMode.enabled;let w=n[h.indexOf(u)-1];if(typeof w>"u"&&(a.cssMode||y)){let g;n.forEach((x,S)=>{u>=x&&(g=S)}),typeof g<"u"&&(w=y?n[g]:n[g>0?g-1:g])}let f=0;if(typeof w<"u"&&(f=o.indexOf(w),f<0&&(f=i.activeIndex-1),a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(f=f-i.slidesPerViewDynamic("previous",!0)+1,f=Math.max(f,0))),a.rewind&&i.isBeginning){const g=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(g,e,r,t)}else if(a.loop&&i.activeIndex===0&&a.cssMode)return requestAnimationFrame(()=>{i.slideTo(f,e,r,t)}),!0;return i.slideTo(f,e,r,t)}function Gt(e,r=!0,t){const i=this;if(!i.destroyed)return typeof e>"u"&&(e=i.params.speed),i.slideTo(i.activeIndex,e,r,t)}function Rt(e,r=!0,t,i=.5){const a=this;if(a.destroyed)return;typeof e>"u"&&(e=a.params.speed);let n=a.activeIndex;const o=Math.min(a.params.slidesPerGroupSkip,n),c=o+Math.floor((n-o)/a.params.slidesPerGroup),s=a.rtlTranslate?a.translate:-a.translate;if(s>=a.snapGrid[c]){const d=a.snapGrid[c],m=a.snapGrid[c+1];s-d>(m-d)*i&&(n+=a.params.slidesPerGroup)}else{const d=a.snapGrid[c-1],m=a.snapGrid[c];s-d<=(m-d)*i&&(n-=a.params.slidesPerGroup)}return n=Math.max(n,0),n=Math.min(n,a.slidesGrid.length-1),a.slideTo(n,e,r,t)}function Vt(){const e=this;if(e.destroyed)return;const{params:r,slidesEl:t}=e,i=r.slidesPerView==="auto"?e.slidesPerViewDynamic():r.slidesPerView;let a=e.getSlideIndexWhenGrid(e.clickedIndex),n;const o=e.isElement?"swiper-slide":`.${r.slideClass}`,c=e.grid&&e.params.grid&&e.params.grid.rows>1;if(r.loop){if(e.animating)return;n=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),r.centeredSlides?e.slideToLoop(n):a>(c?(e.slides.length-i)/2-(e.params.grid.rows-1):e.slides.length-i)?(e.loopFix(),a=e.getSlideIndex(R(t,`${o}[data-swiper-slide-index="${n}"]`)[0]),ze(()=>{e.slideTo(a)})):e.slideTo(a)}else e.slideTo(a)}var Ht={slideTo:_t,slideToLoop:Ft,slideNext:$t,slidePrev:Wt,slideReset:Gt,slideToClosest:Rt,slideToClickedSlide:Vt};function Yt(e,r){const t=this,{params:i,slidesEl:a}=t;if(!i.loop||t.virtual&&t.params.virtual.enabled)return;const n=()=>{R(a,`.${i.slideClass}, swiper-slide`).forEach((h,y)=>{h.setAttribute("data-swiper-slide-index",y)})},o=()=>{const u=R(a,`.${i.slideBlankClass}`);u.forEach(h=>{h.remove()}),u.length>0&&(t.recalcSlides(),t.updateSlides())},c=t.grid&&i.grid&&i.grid.rows>1;i.loopAddBlankSlides&&(i.slidesPerGroup>1||c)&&o();const s=i.slidesPerGroup*(c?i.grid.rows:1),d=t.slides.length%s!==0,m=c&&t.slides.length%i.grid.rows!==0,p=u=>{for(let h=0;h<u;h+=1){const y=t.isElement?ae("swiper-slide",[i.slideBlankClass]):ae("div",[i.slideClass,i.slideBlankClass]);t.slidesEl.append(y)}};if(d){if(i.loopAddBlankSlides){const u=s-t.slides.length%s;p(u),t.recalcSlides(),t.updateSlides()}else ne("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else if(m){if(i.loopAddBlankSlides){const u=i.grid.rows-t.slides.length%i.grid.rows;p(u),t.recalcSlides(),t.updateSlides()}else ne("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else n();const v=i.centeredSlides||!!i.slidesOffsetBefore||!!i.slidesOffsetAfter;t.loopFix({slideRealIndex:e,direction:v?void 0:"next",initial:r})}function qt({slideRealIndex:e,slideTo:r=!0,direction:t,setTranslate:i,activeSlideIndex:a,initial:n,byController:o,byMousewheel:c}={}){const s=this;if(!s.params.loop)return;s.emit("beforeLoopFix");const{slides:d,allowSlidePrev:m,allowSlideNext:p,slidesEl:v,params:u}=s,{centeredSlides:h,slidesOffsetBefore:y,slidesOffsetAfter:w,initialSlide:f}=u,g=h||!!y||!!w;if(s.allowSlidePrev=!0,s.allowSlideNext=!0,s.virtual&&u.virtual.enabled){r&&(!g&&s.snapIndex===0?s.slideTo(s.virtual.slides.length,0,!1,!0):g&&s.snapIndex<u.slidesPerView?s.slideTo(s.virtual.slides.length+s.snapIndex,0,!1,!0):s.snapIndex===s.snapGrid.length-1&&s.slideTo(s.virtual.slidesBefore,0,!1,!0)),s.allowSlidePrev=m,s.allowSlideNext=p,s.emit("loopFix");return}let x=u.slidesPerView;x==="auto"?x=s.slidesPerViewDynamic():(x=Math.ceil(parseFloat(u.slidesPerView,10)),g&&x%2===0&&(x=x+1));const S=u.slidesPerGroupAuto?x:u.slidesPerGroup;let T=g?Math.max(S,Math.ceil(x/2)):S;T%S!==0&&(T+=S-T%S),T+=u.loopAdditionalSlides,s.loopedSlides=T;const I=s.grid&&u.grid&&u.grid.rows>1;d.length<x+T||s.params.effect==="cards"&&d.length<x+T*2?ne("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):I&&u.grid.fill==="row"&&ne("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const z=[],b=[],P=I?Math.ceil(d.length/u.grid.rows):d.length,C=n&&P-f<x&&!g;let E=C?f:s.activeIndex;typeof a>"u"?a=s.getSlideIndex(d.find(j=>j.classList.contains(u.slideActiveClass))):E=a;const k=t==="next"||!t,L=t==="prev"||!t;let A=0,O=0;const D=(I?d[a].column:a)+(g&&typeof i>"u"?-x/2+.5:0);if(D<T){A=Math.max(T-D,S);for(let j=0;j<T-D;j+=1){const N=j-Math.floor(j/P)*P;if(I){const _=P-N-1;for(let Y=d.length-1;Y>=0;Y-=1)d[Y].column===_&&z.push(Y)}else z.push(P-N-1)}}else if(D+x>P-T){O=Math.max(D-(P-T*2),S),C&&(O=Math.max(O,x-P+f+1));for(let j=0;j<O;j+=1){const N=j-Math.floor(j/P)*P;I?d.forEach((_,Y)=>{_.column===N&&b.push(Y)}):b.push(N)}}if(s.__preventObserver__=!0,requestAnimationFrame(()=>{s.__preventObserver__=!1}),s.params.effect==="cards"&&d.length<x+T*2&&(b.includes(a)&&b.splice(b.indexOf(a),1),z.includes(a)&&z.splice(z.indexOf(a),1)),L&&z.forEach(j=>{d[j].swiperLoopMoveDOM=!0,v.prepend(d[j]),d[j].swiperLoopMoveDOM=!1}),k&&b.forEach(j=>{d[j].swiperLoopMoveDOM=!0,v.append(d[j]),d[j].swiperLoopMoveDOM=!1}),s.recalcSlides(),u.slidesPerView==="auto"?s.updateSlides():I&&(z.length>0&&L||b.length>0&&k)&&s.slides.forEach((j,N)=>{s.grid.updateSlide(N,j,s.slides)}),u.watchSlidesProgress&&s.updateSlidesOffset(),r){if(z.length>0&&L){if(typeof e>"u"){const j=s.slidesGrid[E],_=s.slidesGrid[E+A]-j;c?s.setTranslate(s.translate-_):(s.slideTo(E+Math.ceil(A),0,!1,!0),i&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-_,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-_))}else if(i){const j=I?z.length/u.grid.rows:z.length;s.slideTo(s.activeIndex+j,0,!1,!0),s.touchEventsData.currentTranslate=s.translate}}else if(b.length>0&&k)if(typeof e>"u"){const j=s.slidesGrid[E],_=s.slidesGrid[E-O]-j;c?s.setTranslate(s.translate-_):(s.slideTo(E-O,0,!1,!0),i&&(s.touchEventsData.startTranslate=s.touchEventsData.startTranslate-_,s.touchEventsData.currentTranslate=s.touchEventsData.currentTranslate-_))}else{const j=I?b.length/u.grid.rows:b.length;s.slideTo(s.activeIndex-j,0,!1,!0)}}if(s.allowSlidePrev=m,s.allowSlideNext=p,s.controller&&s.controller.control&&!o){const j={slideRealIndex:e,direction:t,setTranslate:i,activeSlideIndex:a,byController:!0};Array.isArray(s.controller.control)?s.controller.control.forEach(N=>{!N.destroyed&&N.params.loop&&N.loopFix({...j,slideTo:N.params.slidesPerView===u.slidesPerView?r:!1})}):s.controller.control instanceof s.constructor&&s.controller.control.params.loop&&s.controller.control.loopFix({...j,slideTo:s.controller.control.params.slidesPerView===u.slidesPerView?r:!1})}s.emit("loopFix")}function Xt(){const e=this,{params:r,slidesEl:t}=e;if(!r.loop||!t||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const i=[];e.slides.forEach(a=>{const n=typeof a.swiperSlideIndex>"u"?a.getAttribute("data-swiper-slide-index")*1:a.swiperSlideIndex;i[n]=a}),e.slides.forEach(a=>{a.removeAttribute("data-swiper-slide-index")}),i.forEach(a=>{t.append(a)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var Ut={loopCreate:Yt,loopFix:qt,loopDestroy:Xt};function Kt(e){const r=this;if(!r.params.simulateTouch||r.params.watchOverflow&&r.isLocked||r.params.cssMode)return;const t=r.params.touchEventsTarget==="container"?r.el:r.wrapperEl;r.isElement&&(r.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=e?"grabbing":"grab",r.isElement&&requestAnimationFrame(()=>{r.__preventObserver__=!1})}function Zt(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var Qt={setGrabCursor:Kt,unsetGrabCursor:Zt};function Jt(e,r=this){function t(i){if(!i||i===V()||i===$())return null;i.assignedSlot&&(i=i.assignedSlot);const a=i.closest(e);return!a&&!i.getRootNode?null:a||t(i.getRootNode().host)}return t(r)}function Se(e,r,t){const i=$(),{params:a}=e,n=a.edgeSwipeDetection,o=a.edgeSwipeThreshold;return n&&(t<=o||t>=i.innerWidth-o)?n==="prevent"?(r.preventDefault(),!0):!1:!0}function ei(e){const r=this,t=V();let i=e;i.originalEvent&&(i=i.originalEvent);const a=r.touchEventsData;if(i.type==="pointerdown"){if(a.pointerId!==null&&a.pointerId!==i.pointerId)return;a.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(a.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){Se(r,i,i.targetTouches[0].pageX);return}const{params:n,touches:o,enabled:c}=r;if(!c||!n.simulateTouch&&i.pointerType==="mouse"||r.animating&&n.preventInteractionOnTransition)return;!r.animating&&n.cssMode&&n.loop&&r.loopFix();let s=i.target;if(n.touchEventsTarget==="wrapper"&&!lt(s,r.wrapperEl)||"which"in i&&i.which===3||"button"in i&&i.button>0||a.isTouched&&a.isMoved)return;const d=!!n.noSwipingClass&&n.noSwipingClass!=="",m=i.composedPath?i.composedPath():i.path;d&&i.target&&i.target.shadowRoot&&m&&(s=m[0]);const p=n.noSwipingSelector?n.noSwipingSelector:`.${n.noSwipingClass}`,v=!!(i.target&&i.target.shadowRoot);if(n.noSwiping&&(v?Jt(p,s):s.closest(p))){r.allowClick=!0;return}if(n.swipeHandler&&!s.closest(n.swipeHandler))return;o.currentX=i.pageX,o.currentY=i.pageY;const u=o.currentX,h=o.currentY;if(!Se(r,i,u))return;Object.assign(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=u,o.startY=h,a.touchStartTime=re(),r.allowClick=!0,r.updateSize(),r.swipeDirection=void 0,n.threshold>0&&(a.allowThresholdMove=!1);let y=!0;s.matches(a.focusableElements)&&(y=!1,s.nodeName==="SELECT"&&(a.isTouched=!1)),t.activeElement&&t.activeElement.matches(a.focusableElements)&&t.activeElement!==s&&(i.pointerType==="mouse"||i.pointerType!=="mouse"&&!s.matches(a.focusableElements))&&t.activeElement.blur();const w=y&&r.allowTouchMove&&n.touchStartPreventDefault;(n.touchStartForcePreventDefault||w)&&!s.isContentEditable&&i.preventDefault(),n.freeMode&&n.freeMode.enabled&&r.freeMode&&r.animating&&!n.cssMode&&r.freeMode.onTouchStart(),r.emit("touchStart",i)}function ti(e){const r=V(),t=this,i=t.touchEventsData,{params:a,touches:n,rtlTranslate:o,enabled:c}=t;if(!c||!a.simulateTouch&&e.pointerType==="mouse")return;let s=e;if(s.originalEvent&&(s=s.originalEvent),s.type==="pointermove"&&(i.touchId!==null||s.pointerId!==i.pointerId))return;let d;if(s.type==="touchmove"){if(d=[...s.changedTouches].find(T=>T.identifier===i.touchId),!d||d.identifier!==i.touchId)return}else d=s;if(!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",s);return}const m=d.pageX,p=d.pageY;if(s.preventedByNestedSwiper){n.startX=m,n.startY=p;return}if(!t.allowTouchMove){s.target.matches(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(n,{startX:m,startY:p,currentX:m,currentY:p}),i.touchStartTime=re());return}if(a.touchReleaseOnEdges&&!a.loop)if(t.isVertical()){if(p<n.startY&&t.translate<=t.maxTranslate()||p>n.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else{if(o&&(m>n.startX&&-t.translate<=t.maxTranslate()||m<n.startX&&-t.translate>=t.minTranslate()))return;if(!o&&(m<n.startX&&t.translate<=t.maxTranslate()||m>n.startX&&t.translate>=t.minTranslate()))return}if(r.activeElement&&r.activeElement.matches(i.focusableElements)&&r.activeElement!==s.target&&s.pointerType!=="mouse"&&r.activeElement.blur(),r.activeElement&&s.target===r.activeElement&&s.target.matches(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}i.allowTouchCallbacks&&t.emit("touchMove",s),n.previousX=n.currentX,n.previousY=n.currentY,n.currentX=m,n.currentY=p;const v=n.currentX-n.startX,u=n.currentY-n.startY;if(t.params.threshold&&Math.sqrt(v**2+u**2)<t.params.threshold)return;if(typeof i.isScrolling>"u"){let T;t.isHorizontal()&&n.currentY===n.startY||t.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:v*v+u*u>=25&&(T=Math.atan2(Math.abs(u),Math.abs(v))*180/Math.PI,i.isScrolling=t.isHorizontal()?T>a.touchAngle:90-T>a.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",s),typeof i.startMoving>"u"&&(n.currentX!==n.startX||n.currentY!==n.startY)&&(i.startMoving=!0),i.isScrolling||s.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!a.cssMode&&s.cancelable&&s.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&s.stopPropagation();let h=t.isHorizontal()?v:u,y=t.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;a.oneWayMovement&&(h=Math.abs(h)*(o?1:-1),y=Math.abs(y)*(o?1:-1)),n.diff=h,h*=a.touchRatio,o&&(h=-h,y=-y);const w=t.touchesDirection;t.swipeDirection=h>0?"prev":"next",t.touchesDirection=y>0?"prev":"next";const f=t.params.loop&&!a.cssMode,g=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!i.isMoved){if(f&&g&&t.loopFix({direction:t.swipeDirection}),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(T)}i.allowMomentumBounce=!1,a.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",s)}if(new Date().getTime(),a._loopSwapReset!==!1&&i.isMoved&&i.allowThresholdMove&&w!==t.touchesDirection&&f&&g&&Math.abs(h)>=1){Object.assign(n,{startX:m,startY:p,currentX:m,currentY:p,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}t.emit("sliderMove",s),i.isMoved=!0,i.currentTranslate=h+i.startTranslate;let x=!0,S=a.resistanceRatio;if(a.touchReleaseOnEdges&&(S=0),h>0?(f&&g&&i.allowThresholdMove&&i.currentTranslate>(a.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(a.slidesPerView!=="auto"&&t.slides.length-a.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>t.minTranslate()&&(x=!1,a.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+h)**S))):h<0&&(f&&g&&i.allowThresholdMove&&i.currentTranslate<(a.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(a.slidesPerView!=="auto"&&t.slides.length-a.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(a.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(a.slidesPerView,10)))}),i.currentTranslate<t.maxTranslate()&&(x=!1,a.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-h)**S))),x&&(s.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),a.threshold>0)if(Math.abs(h)>a.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,n.diff=t.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY;return}}else{i.currentTranslate=i.startTranslate;return}!a.followFinger||a.cssMode||((a.freeMode&&a.freeMode.enabled&&t.freeMode||a.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),a.freeMode&&a.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function ii(e){const r=this,t=r.touchEventsData;let i=e;i.originalEvent&&(i=i.originalEvent);let a;if(i.type==="touchend"||i.type==="touchcancel"){if(a=[...i.changedTouches].find(T=>T.identifier===t.touchId),!a||a.identifier!==t.touchId)return}else{if(t.touchId!==null||i.pointerId!==t.pointerId)return;a=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(r.browser.isSafari||r.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:o,touches:c,rtlTranslate:s,slidesGrid:d,enabled:m}=r;if(!m||!o.simulateTouch&&i.pointerType==="mouse")return;if(t.allowTouchCallbacks&&r.emit("touchEnd",i),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&o.grabCursor&&r.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}o.grabCursor&&t.isMoved&&t.isTouched&&(r.allowSlideNext===!0||r.allowSlidePrev===!0)&&r.setGrabCursor(!1);const p=re(),v=p-t.touchStartTime;if(r.allowClick){const T=i.path||i.composedPath&&i.composedPath();r.updateClickedSlide(T&&T[0]||i.target,T),r.emit("tap click",i),v<300&&p-t.lastClickTime<300&&r.emit("doubleTap doubleClick",i)}if(t.lastClickTime=re(),ze(()=>{r.destroyed||(r.allowClick=!0)}),!t.isTouched||!t.isMoved||!r.swipeDirection||c.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let u;if(o.followFinger?u=s?r.translate:-r.translate:u=-t.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){r.freeMode.onTouchEnd({currentPos:u});return}const h=u>=-r.maxTranslate()&&!r.params.loop;let y=0,w=r.slidesSizesGrid[0];for(let T=0;T<d.length;T+=T<o.slidesPerGroupSkip?1:o.slidesPerGroup){const I=T<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof d[T+I]<"u"?(h||u>=d[T]&&u<d[T+I])&&(y=T,w=d[T+I]-d[T]):(h||u>=d[T])&&(y=T,w=d[d.length-1]-d[d.length-2])}let f=null,g=null;o.rewind&&(r.isBeginning?g=o.virtual&&o.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1:r.isEnd&&(f=0));const x=(u-d[y])/w,S=y<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(v>o.longSwipesMs){if(!o.longSwipes){r.slideTo(r.activeIndex);return}r.swipeDirection==="next"&&(x>=o.longSwipesRatio?r.slideTo(o.rewind&&r.isEnd?f:y+S):r.slideTo(y)),r.swipeDirection==="prev"&&(x>1-o.longSwipesRatio?r.slideTo(y+S):g!==null&&x<0&&Math.abs(x)>o.longSwipesRatio?r.slideTo(g):r.slideTo(y))}else{if(!o.shortSwipes){r.slideTo(r.activeIndex);return}r.navigation&&(i.target===r.navigation.nextEl||i.target===r.navigation.prevEl)?i.target===r.navigation.nextEl?r.slideTo(y+S):r.slideTo(y):(r.swipeDirection==="next"&&r.slideTo(f!==null?f:y+S),r.swipeDirection==="prev"&&r.slideTo(g!==null?g:y))}}function Te(){const e=this,{params:r,el:t}=e;if(t&&t.offsetWidth===0)return;r.breakpoints&&e.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:a,snapGrid:n}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const c=o&&r.loop;if((r.slidesPerView==="auto"||r.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!c){const s=o?e.virtual.slides:e.slides;e.slideTo(s.length-1,0,!1,!0)}else e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=a,e.allowSlideNext=i,e.params.watchOverflow&&n!==e.snapGrid&&e.checkOverflow()}function ri(e){const r=this;r.enabled&&(r.allowClick||(r.params.preventClicks&&e.preventDefault(),r.params.preventClicksPropagation&&r.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function ni(){const e=this,{wrapperEl:r,rtlTranslate:t,enabled:i}=e;if(!i)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-r.scrollLeft:e.translate=-r.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let a;const n=e.maxTranslate()-e.minTranslate();n===0?a=0:a=(e.translate-e.minTranslate())/n,a!==e.progress&&e.updateProgress(t?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function ai(e){const r=this;ie(r,e.target),!(r.params.cssMode||r.params.slidesPerView!=="auto"&&!r.params.autoHeight)&&r.update()}function si(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Ne=(e,r)=>{const t=V(),{params:i,el:a,wrapperEl:n,device:o}=e,c=!!i.nested,s=r==="on"?"addEventListener":"removeEventListener",d=r;!a||typeof a=="string"||(t[s]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:c}),a[s]("touchstart",e.onTouchStart,{passive:!1}),a[s]("pointerdown",e.onTouchStart,{passive:!1}),t[s]("touchmove",e.onTouchMove,{passive:!1,capture:c}),t[s]("pointermove",e.onTouchMove,{passive:!1,capture:c}),t[s]("touchend",e.onTouchEnd,{passive:!0}),t[s]("pointerup",e.onTouchEnd,{passive:!0}),t[s]("pointercancel",e.onTouchEnd,{passive:!0}),t[s]("touchcancel",e.onTouchEnd,{passive:!0}),t[s]("pointerout",e.onTouchEnd,{passive:!0}),t[s]("pointerleave",e.onTouchEnd,{passive:!0}),t[s]("contextmenu",e.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&a[s]("click",e.onClick,!0),i.cssMode&&n[s]("scroll",e.onScroll),i.updateOnWindowResize?e[d](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Te,!0):e[d]("observerUpdate",Te,!0),a[s]("load",e.onLoad,{capture:!0}))};function oi(){const e=this,{params:r}=e;e.onTouchStart=ei.bind(e),e.onTouchMove=ti.bind(e),e.onTouchEnd=ii.bind(e),e.onDocumentTouchStart=si.bind(e),r.cssMode&&(e.onScroll=ni.bind(e)),e.onClick=ri.bind(e),e.onLoad=ai.bind(e),Ne(e,"on")}function li(){Ne(this,"off")}var di={attachEvents:oi,detachEvents:li};const Ce=(e,r)=>e.grid&&r.grid&&r.grid.rows>1;function ci(){const e=this,{realIndex:r,initialized:t,params:i,el:a}=e,n=i.breakpoints;if(!n||n&&Object.keys(n).length===0)return;const o=V(),c=i.breakpointsBase==="window"||!i.breakpointsBase?i.breakpointsBase:"container",s=["window","container"].includes(i.breakpointsBase)||!i.breakpointsBase?e.el:o.querySelector(i.breakpointsBase),d=e.getBreakpoint(n,c,s);if(!d||e.currentBreakpoint===d)return;const p=(d in n?n[d]:void 0)||e.originalParams,v=Ce(e,i),u=Ce(e,p),h=e.params.grabCursor,y=p.grabCursor,w=i.enabled;v&&!u?(a.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!v&&u&&(a.classList.add(`${i.containerModifierClass}grid`),(p.grid.fill&&p.grid.fill==="column"||!p.grid.fill&&i.grid.fill==="column")&&a.classList.add(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),h&&!y?e.unsetGrabCursor():!h&&y&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(I=>{if(typeof p[I]>"u")return;const z=i[I]&&i[I].enabled,b=p[I]&&p[I].enabled;z&&!b&&e[I].disable(),!z&&b&&e[I].enable()});const f=p.direction&&p.direction!==i.direction,g=i.loop&&(p.slidesPerView!==i.slidesPerView||f),x=i.loop;f&&t&&e.changeDirection(),W(e.params,p);const S=e.params.enabled,T=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!S?e.disable():!w&&S&&e.enable(),e.currentBreakpoint=d,e.emit("_beforeBreakpoint",p),t&&(g?(e.loopDestroy(),e.loopCreate(r),e.updateSlides()):!x&&T?(e.loopCreate(r),e.updateSlides()):x&&!T&&e.loopDestroy()),e.emit("breakpoint",p)}function pi(e,r="window",t){if(!e||r==="container"&&!t)return;let i=!1;const a=$(),n=r==="window"?a.innerHeight:t.clientHeight,o=Object.keys(e).map(c=>{if(typeof c=="string"&&c.indexOf("@")===0){const s=parseFloat(c.substr(1));return{value:n*s,point:c}}return{value:c,point:c}});o.sort((c,s)=>parseInt(c.value,10)-parseInt(s.value,10));for(let c=0;c<o.length;c+=1){const{point:s,value:d}=o[c];r==="window"?a.matchMedia(`(min-width: ${d}px)`).matches&&(i=s):d<=t.clientWidth&&(i=s)}return i||"max"}var ui={setBreakpoint:ci,getBreakpoint:pi};function fi(e,r){const t=[];return e.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(a=>{i[a]&&t.push(r+a)}):typeof i=="string"&&t.push(r+i)}),t}function mi(){const e=this,{classNames:r,params:t,rtl:i,el:a,device:n}=e,o=fi(["initialized",t.direction,{"free-mode":e.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:n.android},{ios:n.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);r.push(...o),a.classList.add(...r),e.emitContainerClasses()}function gi(){const e=this,{el:r,classNames:t}=e;!r||typeof r=="string"||(r.classList.remove(...t),e.emitContainerClasses())}var hi={addClasses:mi,removeClasses:gi};function xi(){const e=this,{isLocked:r,params:t}=e,{slidesOffsetBefore:i}=t;if(i){const a=e.slides.length-1,n=e.slidesGrid[a]+e.slidesSizesGrid[a]+i*2;e.isLocked=e.size>n}else e.isLocked=e.snapGrid.length===1;t.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),t.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),r&&r!==e.isLocked&&(e.isEnd=!1),r!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var bi={checkOverflow:xi},xe={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function vi(e,r){return function(i={}){const a=Object.keys(i)[0],n=i[a];if(typeof n!="object"||n===null){W(r,i);return}if(e[a]===!0&&(e[a]={enabled:!0}),a==="navigation"&&e[a]&&e[a].enabled&&!e[a].prevEl&&!e[a].nextEl&&(e[a].auto=!0),["pagination","scrollbar"].indexOf(a)>=0&&e[a]&&e[a].enabled&&!e[a].el&&(e[a].auto=!0),!(a in e&&"enabled"in n)){W(r,i);return}typeof e[a]=="object"&&!("enabled"in e[a])&&(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),W(r,i)}}const fe={eventsEmitter:ht,update:kt,translate:At,transition:Bt,slide:Ht,loop:Ut,grabCursor:Qt,events:di,breakpoints:ui,checkOverflow:bi,classes:hi},me={};let ve=class H{constructor(...r){let t,i;r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)==="Object"?i=r[0]:[t,i]=r,i||(i={}),i=W({},i),t&&!i.el&&(i.el=t);const a=V();if(i.el&&typeof i.el=="string"&&a.querySelectorAll(i.el).length>1){const s=[];return a.querySelectorAll(i.el).forEach(d=>{const m=W({},i,{el:d});s.push(new H(m))}),s}const n=this;n.__swiper__=!0,n.support=Pe(),n.device=Le({userAgent:i.userAgent}),n.browser=Ae(),n.eventsListeners={},n.eventsAnyListeners=[],n.modules=[...n.__modules__],i.modules&&Array.isArray(i.modules)&&i.modules.forEach(s=>{typeof s=="function"&&n.modules.indexOf(s)<0&&n.modules.push(s)});const o={};n.modules.forEach(s=>{s({params:i,swiper:n,extendParams:vi(i,o),on:n.on.bind(n),once:n.once.bind(n),off:n.off.bind(n),emit:n.emit.bind(n)})});const c=W({},xe,o);return n.params=W({},c,me,i),n.originalParams=W({},n.params),n.passedParams=W({},i),n.params&&n.params.on&&Object.keys(n.params.on).forEach(s=>{n.on(s,n.params.on[s])}),n.params&&n.params.onAny&&n.onAny(n.params.onAny),Object.assign(n,{enabled:n.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return n.params.direction==="horizontal"},isVertical(){return n.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:n.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:n.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),n.emit("_swiper"),n.params.init&&n.init(),n}getDirectionLabel(r){return this.isHorizontal()?r:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[r]}getSlideIndex(r){const{slidesEl:t,params:i}=this,a=R(t,`.${i.slideClass}, swiper-slide`),n=se(a[0]);return se(r)-n}getSlideIndexByData(r){return this.getSlideIndex(this.slides.find(t=>t.getAttribute("data-swiper-slide-index")*1===r))}getSlideIndexWhenGrid(r){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?r=Math.floor(r/this.params.grid.rows):this.params.grid.fill==="row"&&(r=r%Math.ceil(this.slides.length/this.params.grid.rows))),r}recalcSlides(){const r=this,{slidesEl:t,params:i}=r;r.slides=R(t,`.${i.slideClass}, swiper-slide`)}enable(){const r=this;r.enabled||(r.enabled=!0,r.params.grabCursor&&r.setGrabCursor(),r.emit("enable"))}disable(){const r=this;r.enabled&&(r.enabled=!1,r.params.grabCursor&&r.unsetGrabCursor(),r.emit("disable"))}setProgress(r,t){const i=this;r=Math.min(Math.max(r,0),1);const a=i.minTranslate(),o=(i.maxTranslate()-a)*r+a;i.translateTo(o,typeof t>"u"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const r=this;if(!r.params._emitClasses||!r.el)return;const t=r.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(r.params.containerModifierClass)===0);r.emit("_containerClasses",t.join(" "))}getSlideClasses(r){const t=this;return t.destroyed?"":r.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const r=this;if(!r.params._emitClasses||!r.el)return;const t=[];r.slides.forEach(i=>{const a=r.getSlideClasses(i);t.push({slideEl:i,classNames:a}),r.emit("_slideClass",i,a)}),r.emit("_slideClasses",t)}slidesPerViewDynamic(r="current",t=!1){const i=this,{params:a,slides:n,slidesGrid:o,slidesSizesGrid:c,size:s,activeIndex:d}=i;let m=1;if(typeof a.slidesPerView=="number")return a.slidesPerView;if(a.centeredSlides){let p=n[d]?Math.ceil(n[d].swiperSlideSize):0,v;for(let u=d+1;u<n.length;u+=1)n[u]&&!v&&(p+=Math.ceil(n[u].swiperSlideSize),m+=1,p>s&&(v=!0));for(let u=d-1;u>=0;u-=1)n[u]&&!v&&(p+=n[u].swiperSlideSize,m+=1,p>s&&(v=!0))}else if(r==="current")for(let p=d+1;p<n.length;p+=1)(t?o[p]+c[p]-o[d]<s:o[p]-o[d]<s)&&(m+=1);else for(let p=d-1;p>=0;p-=1)o[d]-o[p]<s&&(m+=1);return m}update(){const r=this;if(!r||r.destroyed)return;const{snapGrid:t,params:i}=r;i.breakpoints&&r.setBreakpoint(),[...r.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&ie(r,o)}),r.updateSize(),r.updateSlides(),r.updateProgress(),r.updateSlidesClasses();function a(){const o=r.rtlTranslate?r.translate*-1:r.translate,c=Math.min(Math.max(o,r.maxTranslate()),r.minTranslate());r.setTranslate(c),r.updateActiveIndex(),r.updateSlidesClasses()}let n;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)a(),i.autoHeight&&r.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&r.isEnd&&!i.centeredSlides){const o=r.virtual&&i.virtual.enabled?r.virtual.slides:r.slides;n=r.slideTo(o.length-1,0,!1,!0)}else n=r.slideTo(r.activeIndex,0,!1,!0);n||a()}i.watchOverflow&&t!==r.snapGrid&&r.checkOverflow(),r.emit("update")}changeDirection(r,t=!0){const i=this,a=i.params.direction;return r||(r=a==="horizontal"?"vertical":"horizontal"),r===a||r!=="horizontal"&&r!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${a}`),i.el.classList.add(`${i.params.containerModifierClass}${r}`),i.emitContainerClasses(),i.params.direction=r,i.slides.forEach(n=>{r==="vertical"?n.style.width="":n.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(r){const t=this;t.rtl&&r==="rtl"||!t.rtl&&r==="ltr"||(t.rtl=r==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(r){const t=this;if(t.mounted)return!0;let i=r||t.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const a=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(a()):R(i,a())[0];return!o&&t.params.createElements&&(o=ae("div",t.params.wrapperClass),i.append(o),R(i,`.${t.params.slideClass}`).forEach(c=>{o.append(c)})),Object.assign(t,{el:i,wrapperEl:o,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:o,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||q(i,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||q(i,"direction")==="rtl"),wrongRTL:q(o,"display")==="-webkit-box"}),!0}init(r){const t=this;if(t.initialized||t.mount(r)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();const a=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&a.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),a.forEach(n=>{n.complete?ie(t,n):n.addEventListener("load",o=>{ie(t,o.target)})}),he(t),t.initialized=!0,he(t),t.emit("init"),t.emit("afterInit"),t}destroy(r=!0,t=!0){const i=this,{params:a,el:n,wrapperEl:o,slides:c}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),a.loop&&i.loopDestroy(),t&&(i.removeClasses(),n&&typeof n!="string"&&n.removeAttribute("style"),o&&o.removeAttribute("style"),c&&c.length&&c.forEach(s=>{s.classList.remove(a.slideVisibleClass,a.slideFullyVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass),s.removeAttribute("style"),s.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(s=>{i.off(s)}),r!==!1&&(i.el&&typeof i.el!="string"&&(i.el.swiper=null),rt(i)),i.destroyed=!0),null}static extendDefaults(r){W(me,r)}static get extendedDefaults(){return me}static get defaults(){return xe}static installModule(r){H.prototype.__modules__||(H.prototype.__modules__=[]);const t=H.prototype.__modules__;typeof r=="function"&&t.indexOf(r)<0&&t.push(r)}static use(r){return Array.isArray(r)?(r.forEach(t=>H.installModule(t)),H):(H.installModule(r),H)}};Object.keys(fe).forEach(e=>{Object.keys(fe[e]).forEach(r=>{ve.prototype[r]=fe[e][r]})});ve.use([mt,gt]);const Oe=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_snapToSlideEdge","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function X(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function K(e,r){const t=["__proto__","constructor","prototype"];Object.keys(r).filter(i=>t.indexOf(i)<0).forEach(i=>{typeof e[i]>"u"?e[i]=r[i]:X(r[i])&&X(e[i])&&Object.keys(r[i]).length>0?r[i].__swiper__?e[i]=r[i]:K(e[i],r[i]):e[i]=r[i]})}function Be(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function _e(e={}){return e.pagination&&typeof e.pagination.el>"u"}function Fe(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function $e(e=""){const r=e.split(" ").map(i=>i.trim()).filter(i=>!!i),t=[];return r.forEach(i=>{t.indexOf(i)<0&&t.push(i)}),t.join(" ")}function yi(e=""){return e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function wi({swiper:e,slides:r,passedParams:t,changedParams:i,nextEl:a,prevEl:n,scrollbarEl:o,paginationEl:c}){const s=i.filter(b=>b!=="children"&&b!=="direction"&&b!=="wrapperClass"),{params:d,pagination:m,navigation:p,scrollbar:v,virtual:u,thumbs:h}=e;let y,w,f,g,x,S,T,I;i.includes("thumbs")&&t.thumbs&&t.thumbs.swiper&&!t.thumbs.swiper.destroyed&&d.thumbs&&(!d.thumbs.swiper||d.thumbs.swiper.destroyed)&&(y=!0),i.includes("controller")&&t.controller&&t.controller.control&&d.controller&&!d.controller.control&&(w=!0),i.includes("pagination")&&t.pagination&&(t.pagination.el||c)&&(d.pagination||d.pagination===!1)&&m&&!m.el&&(f=!0),i.includes("scrollbar")&&t.scrollbar&&(t.scrollbar.el||o)&&(d.scrollbar||d.scrollbar===!1)&&v&&!v.el&&(g=!0),i.includes("navigation")&&t.navigation&&(t.navigation.prevEl||n)&&(t.navigation.nextEl||a)&&(d.navigation||d.navigation===!1)&&p&&!p.prevEl&&!p.nextEl&&(x=!0);const z=b=>{e[b]&&(e[b].destroy(),b==="navigation"?(e.isElement&&(e[b].prevEl.remove(),e[b].nextEl.remove()),d[b].prevEl=void 0,d[b].nextEl=void 0,e[b].prevEl=void 0,e[b].nextEl=void 0):(e.isElement&&e[b].el.remove(),d[b].el=void 0,e[b].el=void 0))};i.includes("loop")&&e.isElement&&(d.loop&&!t.loop?S=!0:!d.loop&&t.loop?T=!0:I=!0),s.forEach(b=>{if(X(d[b])&&X(t[b]))Object.assign(d[b],t[b]),(b==="navigation"||b==="pagination"||b==="scrollbar")&&"enabled"in t[b]&&!t[b].enabled&&z(b);else{const P=t[b];(P===!0||P===!1)&&(b==="navigation"||b==="pagination"||b==="scrollbar")?P===!1&&z(b):d[b]=t[b]}}),s.includes("controller")&&!w&&e.controller&&e.controller.control&&d.controller&&d.controller.control&&(e.controller.control=d.controller.control),i.includes("children")&&r&&u&&d.virtual.enabled?(u.slides=r,u.update(!0)):i.includes("virtual")&&u&&d.virtual.enabled&&(r&&(u.slides=r),u.update(!0)),i.includes("children")&&r&&d.loop&&(I=!0),y&&h.init()&&h.update(!0),w&&(e.controller.control=d.controller.control),f&&(e.isElement&&(!c||typeof c=="string")&&(c=document.createElement("div"),c.classList.add("swiper-pagination"),c.part.add("pagination"),e.el.appendChild(c)),c&&(d.pagination.el=c),m.init(),m.render(),m.update()),g&&(e.isElement&&(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-scrollbar"),o.part.add("scrollbar"),e.el.appendChild(o)),o&&(d.scrollbar.el=o),v.init(),v.updateSize(),v.setTranslate()),x&&(e.isElement&&((!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-button-next"),ee(a,e.navigation.arrowSvg),a.part.add("button-next"),e.el.appendChild(a)),(!n||typeof n=="string")&&(n=document.createElement("div"),n.classList.add("swiper-button-prev"),ee(n,e.navigation.arrowSvg),n.part.add("button-prev"),e.el.appendChild(n))),a&&(d.navigation.nextEl=a),n&&(d.navigation.prevEl=n),p.init(),p.update()),i.includes("allowSlideNext")&&(e.allowSlideNext=t.allowSlideNext),i.includes("allowSlidePrev")&&(e.allowSlidePrev=t.allowSlidePrev),i.includes("direction")&&e.changeDirection(t.direction,!1),(S||I)&&e.loopDestroy(),(T||I)&&e.loopCreate(),e.update()}function Si(e={},r=!0){const t={on:{}},i={},a={};K(t,xe),t._emitClasses=!0,t.init=!1;const n={},o=Oe.map(s=>s.replace(/_/,"")),c=Object.assign({},e);return Object.keys(c).forEach(s=>{typeof e[s]>"u"||(o.indexOf(s)>=0?X(e[s])?(t[s]={},a[s]={},K(t[s],e[s]),K(a[s],e[s])):(t[s]=e[s],a[s]=e[s]):s.search(/on[A-Z]/)===0&&typeof e[s]=="function"?r?i[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:t.on[`${s[2].toLowerCase()}${s.substr(3)}`]=e[s]:n[s]=e[s])}),["navigation","pagination","scrollbar"].forEach(s=>{t[s]===!0&&(t[s]={}),t[s]===!1&&delete t[s]}),{params:t,passedParams:a,rest:n,events:i}}function Ti({el:e,nextEl:r,prevEl:t,paginationEl:i,scrollbarEl:a,swiper:n},o){Be(o)&&r&&t&&(n.params.navigation.nextEl=r,n.originalParams.navigation.nextEl=r,n.params.navigation.prevEl=t,n.originalParams.navigation.prevEl=t),_e(o)&&i&&(n.params.pagination.el=i,n.originalParams.pagination.el=i),Fe(o)&&a&&(n.params.scrollbar.el=a,n.originalParams.scrollbar.el=a),n.init(e)}function Ci(e,r,t,i,a){const n=[];if(!r)return n;const o=s=>{n.indexOf(s)<0&&n.push(s)};if(t&&i){const s=i.map(a),d=t.map(a);s.join("")!==d.join("")&&o("children"),i.length!==t.length&&o("children")}return Oe.filter(s=>s[0]==="_").map(s=>s.replace(/_/,"")).forEach(s=>{if(s in e&&s in r)if(X(e[s])&&X(r[s])){const d=Object.keys(e[s]),m=Object.keys(r[s]);d.length!==m.length?o(s):(d.forEach(p=>{e[s][p]!==r[s][p]&&o(s)}),m.forEach(p=>{e[s][p]!==r[s][p]&&o(s)}))}else e[s]!==r[s]&&o(s)}),n}const Ei=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.emit("_virtualUpdated"),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function oe(){return oe=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},oe.apply(this,arguments)}function We(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function Ge(e){const r=[];return B.Children.toArray(e).forEach(t=>{We(t)?r.push(t):t.props&&t.props.children&&Ge(t.props.children).forEach(i=>r.push(i))}),r}function ji(e){const r=[],t={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return B.Children.toArray(e).forEach(i=>{if(We(i))r.push(i);else if(i.props&&i.props.slot&&t[i.props.slot])t[i.props.slot].push(i);else if(i.props&&i.props.children){const a=Ge(i.props.children);a.length>0?a.forEach(n=>r.push(n)):t["container-end"].push(i)}else t["container-end"].push(i)}),{slides:r,slots:t}}function ki(e,r,t){if(!t)return null;const i=m=>{let p=m;return m<0?p=r.length+m:p>=r.length&&(p=p-r.length),p},a=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${t.offset}px`}:{top:`${t.offset}px`},{from:n,to:o}=t,c=e.params.loop?-r.length:0,s=e.params.loop?r.length*2:r.length,d=[];for(let m=c;m<s;m+=1)m>=n&&m<=o&&d.push(r[i(m)]);return d.map((m,p)=>B.cloneElement(m,{swiper:e,style:a,key:m.props.virtualIndex||m.key||`slide-${p}`}))}function Q(e,r){return typeof window>"u"?M.useEffect(e,r):M.useLayoutEffect(e,r)}const Ee=M.createContext(null),zi=M.createContext(null),Re=M.forwardRef(({className:e,tag:r="div",wrapperTag:t="div",children:i,onSwiper:a,...n}={},o)=>{let c=!1;const[s,d]=M.useState("swiper"),[m,p]=M.useState(null),[v,u]=M.useState(!1),h=M.useRef(!1),y=M.useRef(null),w=M.useRef(null),f=M.useRef(null),g=M.useRef(null),x=M.useRef(null),S=M.useRef(null),T=M.useRef(null),I=M.useRef(null),{params:z,passedParams:b,rest:P,events:C}=Si(n),{slides:E,slots:k}=ji(i),L=()=>{u(!v)};Object.assign(z.on,{_containerClasses(j,N){d(N)}});const A=()=>{Object.assign(z.on,C),c=!0;const j={...z};if(delete j.wrapperClass,w.current=new ve(j),w.current.virtual&&w.current.params.virtual.enabled){w.current.virtual.slides=E;const N={cache:!1,slides:E,renderExternal:p,renderExternalUpdate:!1};K(w.current.params.virtual,N),K(w.current.originalParams.virtual,N)}};y.current||A(),w.current&&w.current.on("_beforeBreakpoint",L);const O=()=>{c||!C||!w.current||Object.keys(C).forEach(j=>{w.current.on(j,C[j])})},G=()=>{!C||!w.current||Object.keys(C).forEach(j=>{w.current.off(j,C[j])})};M.useEffect(()=>()=>{w.current&&w.current.off("_beforeBreakpoint",L)}),M.useEffect(()=>{!h.current&&w.current&&(w.current.emitSlidesClasses(),h.current=!0)}),Q(()=>{if(o&&(o.current=y.current),!!y.current)return w.current.destroyed&&A(),Ti({el:y.current,nextEl:x.current,prevEl:S.current,paginationEl:T.current,scrollbarEl:I.current,swiper:w.current},z),a&&!w.current.destroyed&&a(w.current),()=>{w.current&&!w.current.destroyed&&w.current.destroy(!0,!1)}},[]),Q(()=>{O();const j=Ci(b,f.current,E,g.current,N=>N.key);return f.current=b,g.current=E,j.length&&w.current&&!w.current.destroyed&&wi({swiper:w.current,slides:E,passedParams:b,changedParams:j,nextEl:x.current,prevEl:S.current,scrollbarEl:I.current,paginationEl:T.current}),()=>{G()}}),Q(()=>{Ei(w.current)},[m]);function D(){return z.virtual?ki(w.current,E,m):E.map((j,N)=>B.cloneElement(j,{swiper:w.current,swiperSlideIndex:N}))}return B.createElement(r,oe({ref:y,className:$e(`${s}${e?` ${e}`:""}`)},P),B.createElement(zi.Provider,{value:w.current},k["container-start"],B.createElement(t,{className:yi(z.wrapperClass)},k["wrapper-start"],D(),k["wrapper-end"]),Be(z)&&B.createElement(B.Fragment,null,B.createElement("div",{ref:S,className:"swiper-button-prev"}),B.createElement("div",{ref:x,className:"swiper-button-next"})),Fe(z)&&B.createElement("div",{ref:I,className:"swiper-scrollbar"}),_e(z)&&B.createElement("div",{ref:T,className:"swiper-pagination"}),k["container-end"]))});Re.displayName="Swiper";const Ve=M.forwardRef(({tag:e="div",children:r,className:t="",swiper:i,zoom:a,lazy:n,virtualIndex:o,swiperSlideIndex:c,...s}={},d)=>{const m=M.useRef(null),[p,v]=M.useState("swiper-slide"),[u,h]=M.useState(!1);function y(x,S,T){S===m.current&&v(T)}Q(()=>{if(typeof c<"u"&&(m.current.swiperSlideIndex=c),d&&(d.current=m.current),!(!m.current||!i)){if(i.destroyed){p!=="swiper-slide"&&v("swiper-slide");return}return i.on("_slideClass",y),()=>{i&&i.off("_slideClass",y)}}}),Q(()=>{i&&m.current&&!i.destroyed&&v(i.getSlideClasses(m.current))},[i]);const w={isActive:p.indexOf("swiper-slide-active")>=0,isVisible:p.indexOf("swiper-slide-visible")>=0,isPrev:p.indexOf("swiper-slide-prev")>=0,isNext:p.indexOf("swiper-slide-next")>=0},f=()=>typeof r=="function"?r(w):r,g=()=>{h(!0)};return B.createElement(e,oe({ref:m,className:$e(`${p}${t?` ${t}`:""}`),"data-swiper-slide-index":o,onLoad:g},s),a&&B.createElement(Ee.Provider,{value:w},B.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof a=="number"?a:void 0},f(),n&&!u&&B.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}}))),!a&&B.createElement(Ee.Provider,{value:w},f(),n&&!u&&B.createElement("div",{className:"swiper-lazy-preloader",ref:x=>{x&&(x.lazyPreloaderManaged=!0)}})))});Ve.displayName="SwiperSlide";function He(e,r,t,i){return e.params.createElements&&Object.keys(i).forEach(a=>{if(!t[a]&&t.auto===!0){let n=R(e.el,`.${i[a]}`)[0];n||(n=ae("div",i[a]),n.className=i[a],e.el.append(n)),t[a]=n,r[a]=n}}),t}const je='<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';function Mi({swiper:e,extendParams:r,on:t,emit:i}){r({navigation:{nextEl:null,prevEl:null,addIcons:!0,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null,arrowSvg:je};function a(u){let h;return u&&typeof u=="string"&&e.isElement&&(h=e.el.querySelector(u)||e.hostEl.querySelector(u),h)?h:(u&&(typeof u=="string"&&(h=[...document.querySelectorAll(u)]),e.params.uniqueNavElements&&typeof u=="string"&&h&&h.length>1&&e.el.querySelectorAll(u).length===1?h=e.el.querySelector(u):h&&h.length===1&&(h=h[0])),u&&!h?u:h)}function n(u,h){const y=e.params.navigation;u=F(u),u.forEach(w=>{w&&(w.classList[h?"add":"remove"](...y.disabledClass.split(" ")),w.tagName==="BUTTON"&&(w.disabled=h),e.params.watchOverflow&&e.enabled&&w.classList[e.isLocked?"add":"remove"](y.lockClass))})}function o(){const{nextEl:u,prevEl:h}=e.navigation;if(e.params.loop){n(h,!1),n(u,!1);return}n(h,e.isBeginning&&!e.params.rewind),n(u,e.isEnd&&!e.params.rewind)}function c(u){u.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),i("navigationPrev"))}function s(u){u.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),i("navigationNext"))}function d(){const u=e.params.navigation;if(e.params.navigation=He(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(u.nextEl||u.prevEl))return;let h=a(u.nextEl),y=a(u.prevEl);Object.assign(e.navigation,{nextEl:h,prevEl:y}),h=F(h),y=F(y);const w=(f,g)=>{if(f){if(u.addIcons&&f.matches(".swiper-button-next,.swiper-button-prev")&&!f.querySelector("svg")){const x=document.createElement("div");ee(x,je),f.appendChild(x.querySelector("svg")),x.remove()}f.addEventListener("click",g==="next"?s:c)}!e.enabled&&f&&f.classList.add(...u.lockClass.split(" "))};h.forEach(f=>w(f,"next")),y.forEach(f=>w(f,"prev"))}function m(){let{nextEl:u,prevEl:h}=e.navigation;u=F(u),h=F(h);const y=(w,f)=>{w.removeEventListener("click",f==="next"?s:c),w.classList.remove(...e.params.navigation.disabledClass.split(" "))};u.forEach(w=>y(w,"next")),h.forEach(w=>y(w,"prev"))}t("init",()=>{e.params.navigation.enabled===!1?v():(d(),o())}),t("toEdge fromEdge lock unlock",()=>{o()}),t("destroy",()=>{m()}),t("enable disable",()=>{let{nextEl:u,prevEl:h}=e.navigation;if(u=F(u),h=F(h),e.enabled){o();return}[...u,...h].filter(y=>!!y).forEach(y=>y.classList.add(e.params.navigation.lockClass))}),t("click",(u,h)=>{let{nextEl:y,prevEl:w}=e.navigation;y=F(y),w=F(w);const f=h.target;let g=w.includes(f)||y.includes(f);if(e.isElement&&!g){const x=h.path||h.composedPath&&h.composedPath();x&&(g=x.find(S=>y.includes(S)||w.includes(S)))}if(e.params.navigation.hideOnClick&&!g){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===f||e.pagination.el.contains(f)))return;let x;y.length?x=y[0].classList.contains(e.params.navigation.hiddenClass):w.length&&(x=w[0].classList.contains(e.params.navigation.hiddenClass)),i(x===!0?"navigationShow":"navigationHide"),[...y,...w].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))}});const p=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),d(),o()},v=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),m()};Object.assign(e.navigation,{enable:p,disable:v,update:o,init:d,destroy:m})}function Z(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function Ii({swiper:e,extendParams:r,on:t,emit:i}){const a="swiper-pagination";r({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:f=>f,formatFractionTotal:f=>f,bulletClass:`${a}-bullet`,bulletActiveClass:`${a}-bullet-active`,modifierClass:`${a}-`,currentClass:`${a}-current`,totalClass:`${a}-total`,hiddenClass:`${a}-hidden`,progressbarFillClass:`${a}-progressbar-fill`,progressbarOppositeClass:`${a}-progressbar-opposite`,clickableClass:`${a}-clickable`,lockClass:`${a}-lock`,horizontalClass:`${a}-horizontal`,verticalClass:`${a}-vertical`,paginationDisabledClass:`${a}-disabled`}}),e.pagination={el:null,bullets:[]};let n,o=0;function c(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function s(f,g){const{bulletActiveClass:x}=e.params.pagination;f&&(f=f[`${g==="prev"?"previous":"next"}ElementSibling`],f&&(f.classList.add(`${x}-${g}`),f=f[`${g==="prev"?"previous":"next"}ElementSibling`],f&&f.classList.add(`${x}-${g}-${g}`)))}function d(f,g,x){if(f=f%x,g=g%x,g===f+1)return"next";if(g===f-1)return"previous"}function m(f){const g=f.target.closest(Z(e.params.pagination.bulletClass));if(!g)return;f.preventDefault();const x=se(g)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===x)return;const S=d(e.realIndex,x,e.slides.length);S==="next"?e.slideNext():S==="previous"?e.slidePrev():e.slideToLoop(x)}else e.slideTo(x)}function p(){const f=e.rtl,g=e.params.pagination;if(c())return;let x=e.pagination.el;x=F(x);let S,T;const I=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,z=e.params.loop?Math.ceil(I/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(T=e.previousRealIndex||0,S=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(S=e.snapIndex,T=e.previousSnapIndex):(T=e.previousIndex||0,S=e.activeIndex||0),g.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const b=e.pagination.bullets;let P,C,E;if(g.dynamicBullets&&(n=ge(b[0],e.isHorizontal()?"width":"height"),x.forEach(k=>{k.style[e.isHorizontal()?"width":"height"]=`${n*(g.dynamicMainBullets+4)}px`}),g.dynamicMainBullets>1&&T!==void 0&&(o+=S-(T||0),o>g.dynamicMainBullets-1?o=g.dynamicMainBullets-1:o<0&&(o=0)),P=Math.max(S-o,0),C=P+(Math.min(b.length,g.dynamicMainBullets)-1),E=(C+P)/2),b.forEach(k=>{const L=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(A=>`${g.bulletActiveClass}${A}`)].map(A=>typeof A=="string"&&A.includes(" ")?A.split(" "):A).flat();k.classList.remove(...L)}),x.length>1)b.forEach(k=>{const L=se(k);L===S?k.classList.add(...g.bulletActiveClass.split(" ")):e.isElement&&k.setAttribute("part","bullet"),g.dynamicBullets&&(L>=P&&L<=C&&k.classList.add(...`${g.bulletActiveClass}-main`.split(" ")),L===P&&s(k,"prev"),L===C&&s(k,"next"))});else{const k=b[S];if(k&&k.classList.add(...g.bulletActiveClass.split(" ")),e.isElement&&b.forEach((L,A)=>{L.setAttribute("part",A===S?"bullet-active":"bullet")}),g.dynamicBullets){const L=b[P],A=b[C];for(let O=P;O<=C;O+=1)b[O]&&b[O].classList.add(...`${g.bulletActiveClass}-main`.split(" "));s(L,"prev"),s(A,"next")}}if(g.dynamicBullets){const k=Math.min(b.length,g.dynamicMainBullets+4),L=(n*k-n)/2-E*n,A=f?"right":"left";b.forEach(O=>{O.style[e.isHorizontal()?A:"top"]=`${L}px`})}}x.forEach((b,P)=>{if(g.type==="fraction"&&(b.querySelectorAll(Z(g.currentClass)).forEach(C=>{C.textContent=g.formatFractionCurrent(S+1)}),b.querySelectorAll(Z(g.totalClass)).forEach(C=>{C.textContent=g.formatFractionTotal(z)})),g.type==="progressbar"){let C;g.progressbarOpposite?C=e.isHorizontal()?"vertical":"horizontal":C=e.isHorizontal()?"horizontal":"vertical";const E=(S+1)/z;let k=1,L=1;C==="horizontal"?k=E:L=E,b.querySelectorAll(Z(g.progressbarFillClass)).forEach(A=>{A.style.transform=`translate3d(0,0,0) scaleX(${k}) scaleY(${L})`,A.style.transitionDuration=`${e.params.speed}ms`})}g.type==="custom"&&g.renderCustom?(ee(b,g.renderCustom(e,S+1,z)),P===0&&i("paginationRender",b)):(P===0&&i("paginationRender",b),i("paginationUpdate",b)),e.params.watchOverflow&&e.enabled&&b.classList[e.isLocked?"add":"remove"](g.lockClass)})}function v(){const f=e.params.pagination;if(c())return;const g=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let x=e.pagination.el;x=F(x);let S="";if(f.type==="bullets"){let T=e.params.loop?Math.ceil(g/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&T>g&&(T=g);for(let I=0;I<T;I+=1)f.renderBullet?S+=f.renderBullet.call(e,I,f.bulletClass):S+=`<${f.bulletElement} ${e.isElement?'part="bullet"':""} class="${f.bulletClass}"></${f.bulletElement}>`}f.type==="fraction"&&(f.renderFraction?S=f.renderFraction.call(e,f.currentClass,f.totalClass):S=`<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`),f.type==="progressbar"&&(f.renderProgressbar?S=f.renderProgressbar.call(e,f.progressbarFillClass):S=`<span class="${f.progressbarFillClass}"></span>`),e.pagination.bullets=[],x.forEach(T=>{f.type!=="custom"&&ee(T,S||""),f.type==="bullets"&&e.pagination.bullets.push(...T.querySelectorAll(Z(f.bulletClass)))}),f.type!=="custom"&&i("paginationRender",x[0])}function u(){e.params.pagination=He(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const f=e.params.pagination;if(!f.el)return;let g;typeof f.el=="string"&&e.isElement&&(g=e.el.querySelector(f.el)),!g&&typeof f.el=="string"&&(g=[...document.querySelectorAll(f.el)]),g||(g=f.el),!(!g||g.length===0)&&(e.params.uniqueNavElements&&typeof f.el=="string"&&Array.isArray(g)&&g.length>1&&(g=[...e.el.querySelectorAll(f.el)],g.length>1&&(g=g.find(x=>Ie(x,".swiper")[0]===e.el))),Array.isArray(g)&&g.length===1&&(g=g[0]),Object.assign(e.pagination,{el:g}),g=F(g),g.forEach(x=>{f.type==="bullets"&&f.clickable&&x.classList.add(...(f.clickableClass||"").split(" ")),x.classList.add(f.modifierClass+f.type),x.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.type==="bullets"&&f.dynamicBullets&&(x.classList.add(`${f.modifierClass}${f.type}-dynamic`),o=0,f.dynamicMainBullets<1&&(f.dynamicMainBullets=1)),f.type==="progressbar"&&f.progressbarOpposite&&x.classList.add(f.progressbarOppositeClass),f.clickable&&x.addEventListener("click",m),e.enabled||x.classList.add(f.lockClass)}))}function h(){const f=e.params.pagination;if(c())return;let g=e.pagination.el;g&&(g=F(g),g.forEach(x=>{x.classList.remove(f.hiddenClass),x.classList.remove(f.modifierClass+f.type),x.classList.remove(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.clickable&&(x.classList.remove(...(f.clickableClass||"").split(" ")),x.removeEventListener("click",m))})),e.pagination.bullets&&e.pagination.bullets.forEach(x=>x.classList.remove(...f.bulletActiveClass.split(" ")))}t("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const f=e.params.pagination;let{el:g}=e.pagination;g=F(g),g.forEach(x=>{x.classList.remove(f.horizontalClass,f.verticalClass),x.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass)})}),t("init",()=>{e.params.pagination.enabled===!1?w():(u(),v(),p())}),t("activeIndexChange",()=>{typeof e.snapIndex>"u"&&p()}),t("snapIndexChange",()=>{p()}),t("snapGridLengthChange",()=>{v(),p()}),t("destroy",()=>{h()}),t("enable disable",()=>{let{el:f}=e.pagination;f&&(f=F(f),f.forEach(g=>g.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),t("lock unlock",()=>{p()}),t("click",(f,g)=>{const x=g.target,S=F(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S&&S.length>0&&!x.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&x===e.navigation.nextEl||e.navigation.prevEl&&x===e.navigation.prevEl))return;const T=S[0].classList.contains(e.params.pagination.hiddenClass);i(T===!0?"paginationShow":"paginationHide"),S.forEach(I=>I.classList.toggle(e.params.pagination.hiddenClass))}});const y=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=F(f),f.forEach(g=>g.classList.remove(e.params.pagination.paginationDisabledClass))),u(),v(),p()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=F(f),f.forEach(g=>g.classList.add(e.params.pagination.paginationDisabledClass))),h()};Object.assign(e.pagination,{enable:y,disable:w,render:v,update:p,init:u,destroy:h})}function Pi({swiper:e,extendParams:r,on:t,emit:i,params:a}){e.autoplay={running:!1,paused:!1,timeLeft:0},r({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let n,o,c=a&&a.autoplay?a.autoplay.delay:3e3,s=a&&a.autoplay?a.autoplay.delay:3e3,d,m=new Date().getTime(),p,v,u,h,y,w;function f(D){!e||e.destroyed||!e.wrapperEl||D.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",f),!(w||D.detail&&D.detail.bySwiperTouchMove)&&P())}const g=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?p=!0:p&&(s=d,p=!1);const D=e.autoplay.paused?d:m+s-new Date().getTime();e.autoplay.timeLeft=D,i("autoplayTimeLeft",D,D/c),o=requestAnimationFrame(()=>{g()})},x=()=>{let D;return e.virtual&&e.params.virtual.enabled?D=e.slides.find(N=>N.classList.contains("swiper-slide-active")):D=e.slides[e.activeIndex],D?parseInt(D.getAttribute("data-swiper-autoplay"),10):void 0},S=()=>{let D=e.params.autoplay.delay;const j=x();return!Number.isNaN(j)&&j>0&&(D=j),D},T=D=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(o),g();let j=D;typeof j>"u"&&(j=S(),c=j,s=j),d=j;const N=e.params.speed,_=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(N,!0,!0),i("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,N,!0,!0),i("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(N,!0,!0),i("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,N,!0,!0),i("autoplay")),e.params.cssMode&&(m=new Date().getTime(),requestAnimationFrame(()=>{T()})))};return j>0?(clearTimeout(n),n=setTimeout(()=>{_()},j)):requestAnimationFrame(()=>{_()}),j},I=()=>{m=new Date().getTime(),e.autoplay.running=!0,T(),i("autoplayStart")},z=()=>{e.autoplay.running=!1,clearTimeout(n),cancelAnimationFrame(o),i("autoplayStop")},b=(D,j)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(n),D||(y=!0);const N=()=>{i("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",f):P()};if(e.autoplay.paused=!0,j){N();return}d=(d||e.params.autoplay.delay)-(new Date().getTime()-m),!(e.isEnd&&d<0&&!e.params.loop)&&(d<0&&(d=0),N())},P=()=>{e.isEnd&&d<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(m=new Date().getTime(),y?(y=!1,T(d)):T(),e.autoplay.paused=!1,i("autoplayResume"))},C=()=>{if(e.destroyed||!e.autoplay.running)return;const D=V();D.visibilityState==="hidden"&&(y=!0,b(!0)),D.visibilityState==="visible"&&P()},E=D=>{D.pointerType==="mouse"&&(y=!0,w=!0,!(e.animating||e.autoplay.paused)&&b(!0))},k=D=>{D.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&P())},L=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",E),e.el.addEventListener("pointerleave",k))},A=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",E),e.el.removeEventListener("pointerleave",k))},O=()=>{V().addEventListener("visibilitychange",C)},G=()=>{V().removeEventListener("visibilitychange",C)};t("init",()=>{e.params.autoplay.enabled&&(L(),O(),I())}),t("destroy",()=>{A(),G(),e.autoplay.running&&z()}),t("_freeModeStaticRelease",()=>{(u||y)&&P()}),t("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?z():b(!0,!0)}),t("beforeTransitionStart",(D,j,N)=>{e.destroyed||!e.autoplay.running||(N||!e.params.autoplay.disableOnInteraction?b(!0,!0):z())}),t("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){z();return}v=!0,u=!1,y=!1,h=setTimeout(()=>{y=!0,u=!0,b(!0)},200)}}),t("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!v)){if(clearTimeout(h),clearTimeout(n),e.params.autoplay.disableOnInteraction){u=!1,v=!1;return}u&&e.params.cssMode&&P(),u=!1,v=!1}}),t("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(d=S(),c=S())}),Object.assign(e.autoplay,{start:I,stop:z,pause:b,resume:P})}function Li({proyectos:e=[],onProductoClick:r}){const[t,i]=M.useState(!1);M.useEffect(()=>{i(!0)},[]);const n=(o=>{const c=[],s=new Set;for(const d of o){const m=d.category?.id||"sin-categoria";s.has(m)||(s.add(m),c.push(d))}return c})(e);return!t||n.length===0?null:l.jsxs("section",{className:"hero-fullscreen",style:{width:"100%",height:"auto",minHeight:"100vh",position:"relative",background:"#f8fafc",overflow:"hidden",marginTop:"0",display:"flex",flexDirection:"column"},children:[l.jsxs("div",{className:"animate-fade-in-down hero-title-container",style:{paddingBottom:"0",textAlign:"center",paddingLeft:"20px",paddingRight:"20px",zIndex:10,position:"relative",display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsxs("div",{style:{background:"rgba(212, 160, 23, 0.08)",padding:"8px 24px",borderRadius:"50px",marginBottom:"20px",border:"1px solid rgba(212, 160, 23, 0.3)",boxShadow:"0 4px 20px rgba(212, 160, 23, 0.1)",backdropFilter:"blur(10px)",display:"inline-flex",alignItems:"center",gap:"8px"},children:[l.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#D4A017",boxShadow:"0 0 10px #D4A017"}}),l.jsx("span",{style:{color:"#b8860b",fontWeight:"800",fontSize:"13px",letterSpacing:"2px",textTransform:"uppercase"},children:"Excelencia Arquitectónica"})]}),l.jsxs("h1",{className:"hero-main-title",style:{fontWeight:"900",lineHeight:"1.05",margin:0,color:"#0f172a",letterSpacing:"-2px",maxWidth:"900px"},children:["IHA ",l.jsx("br",{className:"mobile-break"}),l.jsx("span",{style:{background:"linear-gradient(135deg, #003DA5 0%, #0066ff 50%, #D4A017 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",display:"inline-block",paddingBottom:"8px"},children:"Innovación en Herrería y Aluminio"})]}),l.jsx("p",{className:"hero-subtitle",style:{color:"#475569",marginTop:"16px",fontWeight:"500",maxWidth:"650px",lineHeight:"1.6"},children:"Soluciones de alta gama, diseñadas a la medida exacta de tu proyecto con los más altos estándares de calidad."})]}),l.jsx(Re,{modules:[Mi,Ii,Pi],speed:1e3,navigation:!0,autoHeight:!0,pagination:{clickable:!0},autoplay:{delay:5e3,disableOnInteraction:!1},className:"premium-hero-swiper light-theme animate-fade-in-up",style:{flex:1,width:"100%",marginTop:"20px"},children:n.map(o=>l.jsx(Ve,{style:{background:"#f8fafc",height:"auto"},children:l.jsx("div",{className:"hero-slide-inner",style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",padding:"0 5vw",paddingBottom:"60px"},children:l.jsxs("div",{className:"hero-slide-container",style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%",maxWidth:"1400px",height:"100%",zIndex:2,gap:"60px"},children:[l.jsxs("div",{className:"hero-text-content",style:{flex:"1",maxWidth:"600px"},children:[l.jsxs("span",{className:"hero-slide-tag",style:{display:"inline-block",color:"#d4a017",fontWeight:"800",textTransform:"uppercase",letterSpacing:"3px",marginBottom:"16px"},children:["— ",o.category?.name||"Destacado Premium"]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",marginBottom:"40px"},className:"hero-slide-title-wrapper",children:[l.jsx("h2",{className:"hero-slide-title",style:{fontWeight:"900",lineHeight:"1.05",margin:"0",color:"#0f172a",letterSpacing:"-1px"},children:o.title}),o.price&&l.jsx("span",{className:"hero-slide-price",style:{display:"inline-block",background:"#f8fafc",border:"2px solid #e2e8f0",color:"#0f172a",padding:"12px 24px",borderRadius:"16px",fontWeight:"900",width:"fit-content",boxShadow:"0 4px 15px rgba(15,23,42,0.05)"},children:new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN"}).format(o.price)})]}),l.jsxs("div",{className:"hero-buttons",style:{display:"flex",gap:"20px",flexWrap:"wrap"},children:[l.jsx("button",{onClick:()=>r(o),style:{background:"#003DA5",color:"white",padding:"18px 44px",borderRadius:"50px",border:"none",fontSize:"16px",fontWeight:"700",cursor:"pointer",boxShadow:"0 10px 30px rgba(0, 61, 165, 0.3)",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"},className:"btn-modern-primary",children:"Ver Detalles"}),l.jsx("a",{href:`https://wa.me/527225645160?text=Hola,%20me%20interesa%20el%20proyecto:%20${encodeURIComponent(o.title)}`,target:"_blank",rel:"noreferrer",style:{background:"white",color:"#0f172a",padding:"16px 44px",borderRadius:"50px",border:"1px solid #e2e8f0",fontSize:"16px",fontWeight:"700",textDecoration:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",boxShadow:"0 10px 30px rgba(15, 23, 42, 0.05)",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"},className:"btn-modern-secondary",children:"Comprar Ahora"})]})]}),l.jsx("div",{className:"hero-image-content",style:{flex:"1",display:"flex",justifyContent:"center",alignItems:"center",height:"100%",position:"relative",width:"100%"},children:l.jsxs("div",{className:"image-modern-wrapper",children:[l.jsx("img",{src:o.image_path?o.image_path.startsWith("/")||o.image_path.startsWith("data:image")?o.image_path:`${o.image_path}`:"/imagenes/asador-1.png",alt:o.title,className:"hero-modern-photo"}),l.jsx("div",{className:"shape-decoration"})]})})]})})},o.id))}),l.jsx("style",{children:`
        /* Animaciones Modernas */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .animate-fade-in-down {
          animation: fadeInDown 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Typography Defaults */
        .hero-title-container { padding-top: 130px; }
        .hero-main-title { font-size: clamp(32px, 6vw, 72px); }
        .hero-subtitle { font-size: clamp(16px, 2vw, 22px); }
        .hero-slide-title { font-size: clamp(32px, 5vw, 68px); }
        .hero-slide-price { font-size: 24px; }
        .hero-slide-tag { font-size: 14px; }
        .mobile-break { display: none; }

        /* Estilos de Imagen Moderna y Estandarizada */
        .image-modern-wrapper {
          position: relative;
          width: 100%;
          max-width: 600px;
          aspect-ratio: 4 / 3; /* ESTÁNDAR: Todas las imágenes miden exactamente lo mismo */
          border-radius: 24px;
          perspective: 1000px;
          margin: 0 auto;
        }
        
        .hero-modern-photo {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Recorta la imagen sobrante sin deformarla */
          border-radius: 24px;
          box-shadow: 0 30px 60px rgba(15, 23, 42, 0.15);
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 2;
        }
        
        .image-modern-wrapper:hover .hero-modern-photo {
          transform: translateY(-10px) scale(1.02);
        }

        .shape-decoration {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 100%;
          height: 100%;
          border: 2px solid #003DA5;
          border-radius: 24px;
          z-index: 1;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .image-modern-wrapper:hover .shape-decoration {
          transform: translate(15px, 15px);
        }

        /* Botones Hover Modernos */
        .btn-modern-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(0, 61, 165, 0.4) !important;
          background: #002b80 !important;
        }
        .btn-modern-secondary:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(15, 23, 42, 0.1) !important;
          border-color: #003DA5 !important;
          color: #003DA5 !important;
        }

        /* Estilos Swiper Tema Claro */
        .premium-hero-swiper .swiper-button-next,
        .premium-hero-swiper .swiper-button-prev {
          color: #0f172a !important;
          background: white;
          border: 1px solid #e2e8f0;
          width: 56px !important;
          height: 56px !important;
          border-radius: 50%;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 20px rgba(15,23,42,0.05);
        }
        
        .premium-hero-swiper .swiper-button-next:hover,
        .premium-hero-swiper .swiper-button-prev:hover {
          background: #003DA5;
          color: white !important;
          transform: scale(1.1);
          border-color: #003DA5;
          box-shadow: 0 15px 30px rgba(0,61,165,0.2);
        }

        .premium-hero-swiper .swiper-button-next:after,
        .premium-hero-swiper .swiper-button-prev:after {
          font-size: 20px !important;
          font-weight: 900;
        }

        .premium-hero-swiper .swiper-pagination {
          bottom: 20px !important;
        }

        .premium-hero-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #cbd5e1;
          border-radius: 50%;
          opacity: 1;
          transition: all 0.4s ease;
          margin: 0 8px !important;
        }

        .premium-hero-swiper .swiper-pagination-bullet-active {
          width: 32px;
          border-radius: 12px;
          background: #003DA5;
          box-shadow: 0 4px 10px rgba(0,61,165,0.3);
        }

        /* Responsive */
        @media (max-width: 992px) {
          .hero-slide-container {
            flex-direction: column !important;
            justify-content: center !important;
            text-align: center;
            padding-top: 0;
            gap: 40px !important;
          }
          .hero-text-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-buttons {
            justify-content: center;
          }
          .hero-image-content {
            justify-content: center !important;
            width: 100%;
          }
          .image-modern-wrapper {
            width: calc(100% - 20px);
            max-width: 500px;
            height: auto;
            aspect-ratio: 4 / 3;
            margin: 0 auto;
          }
          .shape-decoration {
            top: -10px;
            right: -10px;
          }
        }

        @media (max-width: 768px) {
          .hero-title-container { padding-top: 100px; padding-bottom: 16px; }
          .hero-main-title { font-size: clamp(28px, 6vw, 44px); line-height: 1.1; }
          .hero-subtitle { font-size: clamp(14px, 3.5vw, 18px); margin-top: 12px; }
          .hero-slide-tag { font-size: 11px; }
          .mobile-break { display: block; }
          .hero-fullscreen { min-height: auto; height: auto; }
        }

        @media (max-width: 480px) {
          .hero-fullscreen {
            height: auto !important;
            min-height: 100vh !important;
            padding-bottom: 40px;
          }
          .hero-title-container { padding-top: 80px; padding-left: 16px; padding-right: 16px; }
          .hero-main-title { font-size: clamp(24px, 8vw, 36px); letter-spacing: -1px; }
          .hero-slide-title { font-size: clamp(22px, 7vw, 32px); letter-spacing: -0.5px; }
          .hero-slide-price { font-size: clamp(16px, 5vw, 20px); padding: 8px 16px; }
          .hero-slide-title-wrapper { gap: 12px; margin-bottom: 24px; }
          .hero-slide-tag { font-size: 10px; margin-bottom: 8px; }
          
          .hero-buttons {
            flex-direction: column;
            width: 100%;
            gap: 16px;
          }
          .hero-buttons button, .hero-buttons a {
            width: 100%;
            justify-content: center;
            padding: 16px 20px !important;
            font-size: 15px;
          }
          .premium-hero-swiper .swiper-button-next,
          .premium-hero-swiper .swiper-button-prev {
            display: none !important;
          }
          .hero-slide-inner {
            padding-left: 16px !important;
            padding-right: 16px !important;
            padding-bottom: 40px !important;
          }
          .hero-slide-container {
             gap: 32px !important;
          }
          .image-modern-wrapper {
             width: calc(100% - 10px);
             margin: 0 auto;
          }
        }
      `})]})}function J({onClose:e,productos:r=[],categoriaSeleccionada:t=null,seleccionadoInicial:i=null}){const[a,n]=M.useState(i||null),[o,c]=M.useState(!t);M.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]);const s=o?r:r.filter(p=>p.category_id===t?.id),d=o?"Catálogo Global":`Proyectos de ${t?.name||"esta categoría"}`,m=p=>p?new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN"}).format(p):null;return l.jsxs("div",{style:{position:"fixed",inset:0,zIndex:9999,background:"rgba(15, 23, 42, 0.7)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",display:"flex",alignItems:"center",justifyContent:"center",overflowY:"auto"},onClick:e,className:"modal-overlay",children:[a?l.jsxs("div",{onClick:p=>p.stopPropagation(),className:"modern-glass-modal detail-modal animate-modal-in",style:{position:"relative",background:"#ffffff",borderRadius:"32px",border:"1px solid rgba(148,163,184,0.2)",width:"100%",maxWidth:"1000px",maxHeight:"90vh",overflowY:"auto",boxShadow:"0 40px 100px rgba(0,0,0,0.1)",boxSizing:"border-box"},children:[l.jsxs("div",{className:"detail-sticky-header",style:{position:"sticky",top:0,left:0,width:"100%",background:"rgba(255,255,255,0.9)",backdropFilter:"blur(10px)",zIndex:10,display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid rgba(15,23,42,0.05)",boxSizing:"border-box"},children:[l.jsxs("button",{onClick:()=>n(null),className:"btn-back-modern",children:[l.jsx("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),l.jsx("span",{children:"Volver a la galería"})]}),l.jsx("button",{onClick:e,className:"btn-close-modern","aria-label":"Cerrar",children:l.jsx("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})]}),l.jsxs("div",{className:"detail-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"48px",padding:"40px"},children:[l.jsxs("div",{className:"detail-image-wrapper",children:[l.jsx("img",{src:a.image_path?a.image_path.startsWith("/")||a.image_path.startsWith("data:image")?a.image_path:`${a.image_path}`:"/imagenes/asador-1.png",alt:a.title,className:"detail-img"}),l.jsx("div",{className:"tech-corner top-left"}),l.jsx("div",{className:"tech-corner bottom-right"})]}),l.jsxs("div",{className:"detail-info",style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px",flexWrap:"wrap",gap:"12px"},children:[l.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[l.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#D4A017"}}),l.jsx("span",{style:{color:"#D4A017",fontSize:"13px",fontWeight:"800",letterSpacing:"2px",textTransform:"uppercase"},children:a.category?.name||"Proyecto Especial"})]}),a.price&&l.jsx("div",{style:{background:"#f8fafc",border:"1px solid #e2e8f0",color:"#0f172a",padding:"8px 16px",borderRadius:"12px",fontWeight:"900",fontSize:"20px"},children:m(a.price)})]}),l.jsx("h2",{style:{fontSize:"clamp(28px, 3vw, 44px)",fontWeight:"900",margin:"0 0 24px",color:"#0f172a",lineHeight:"1.1",letterSpacing:"-1px",wordBreak:"break-word"},children:a.title}),l.jsx("div",{style:{width:"40px",height:"3px",background:"#003DA5",marginBottom:"24px"}}),l.jsx("p",{style:{color:"#475569",marginBottom:"40px",fontSize:"16px",lineHeight:"1.8"},children:a.description||"Diseño y fabricación a medida utilizando los mejores materiales del mercado para garantizar durabilidad y resistencia extrema."}),l.jsxs("a",{href:`https://wa.me/527225645160?text=Hola,%20me%20interesa%20iniciar%20un%20proyecto%20basado%20en:%20${encodeURIComponent(a.title)}`,target:"_blank",rel:"noreferrer",className:"btn-tech-primary",children:[l.jsx("span",{children:"Cotizar Proyecto Similar"}),l.jsx("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]})]})]})]}):l.jsxs("div",{onClick:p=>p.stopPropagation(),className:"modern-glass-modal animate-modal-in",style:{position:"relative",background:"rgba(255, 255, 255, 0.95)",borderRadius:"32px",border:"1px solid rgba(255, 255, 255, 0.5)",width:"100%",maxWidth:"1280px",maxHeight:"90vh",overflowY:"auto",boxShadow:"0 40px 100px rgba(0,0,0,0.1)",boxSizing:"border-box"},children:[l.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"4px",background:"linear-gradient(90deg, #003DA5, #D4A017)"}}),l.jsx("button",{onClick:e,className:"btn-close-modern","aria-label":"Cerrar",children:l.jsx("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})}),l.jsxs("div",{style:{marginBottom:"56px",textAlign:"center"},children:[l.jsx("span",{style:{background:"rgba(0, 61, 165, 0.05)",color:"#003DA5",padding:"8px 24px",borderRadius:"50px",fontSize:"13px",fontWeight:"800",letterSpacing:"2px",textTransform:"uppercase",border:"1px solid rgba(0, 61, 165, 0.1)",display:"inline-block",marginBottom:"20px"},children:"Portafolio de Soluciones"}),l.jsx("h2",{style:{color:"#0f172a",fontSize:"clamp(28px, 4vw, 56px)",fontWeight:"900",margin:"0 0 16px",letterSpacing:"-1px",wordBreak:"break-word"},children:d}),l.jsx("p",{style:{color:"#475569",fontSize:"18px",margin:"0 auto",maxWidth:"650px",lineHeight:"1.6"},children:"Explora nuestra colección de proyectos arquitectónicos. Cada pieza representa nuestro compromiso con la innovación y la calidad estructural."}),!o&&l.jsxs("button",{onClick:()=>c(!0),className:"btn-ver-todos",style:{marginTop:"24px"},children:["Explorar todo el portafolio",l.jsx("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 8l4 4m0 0l-4 4m4-4H3"})})]})]}),l.jsx("div",{className:"productos-grid",style:{display:"grid",gap:"32px"},children:s.length>0?s.map((p,v)=>l.jsxs("div",{onClick:()=>n(p),className:"premium-product-card",style:{animationDelay:`${v*.05}s`},children:[l.jsxs("div",{className:"card-image-container",children:[l.jsx("img",{src:p.image_path?p.image_path.startsWith("/")||p.image_path.startsWith("data:image")?p.image_path:`${p.image_path}`:"/imagenes/asador-1.png",alt:p.title,className:"product-img"}),l.jsx("div",{className:"card-gradient-overlay"}),l.jsx("div",{className:"card-badge",children:p.category?.name||"Diseño Especial"}),l.jsx("div",{className:"view-details-hover",children:l.jsx("span",{children:"Ver Detalles Técnicos"})})]}),l.jsxs("div",{className:"card-content",children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"16px"},children:[l.jsx("h3",{className:"product-title",children:p.title}),p.price&&l.jsx("span",{style:{background:"rgba(212,160,23,0.1)",color:"#D4A017",padding:"6px 12px",borderRadius:"8px",fontWeight:"800",fontSize:"15px",whiteSpace:"nowrap"},children:m(p.price)})]}),l.jsx("div",{className:"tech-line"})]})]},p.id)):l.jsxs("div",{style:{gridColumn:"1/-1",textAlign:"center",padding:"80px 20px",background:"#f8fafc",borderRadius:"24px",border:"1px dashed #cbd5e1"},children:[l.jsx("div",{style:{width:"64px",height:"64px",background:"rgba(0,61,165,0.05)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px"},children:l.jsx("svg",{width:"32",height:"32",fill:"none",stroke:"#64748b",strokeWidth:"1.5",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),l.jsx("h4",{style:{color:"#0f172a",fontSize:"20px",fontWeight:"800",marginBottom:"8px"},children:"Categoría en Desarrollo"}),l.jsx("p",{style:{color:"#64748b",fontSize:"16px",margin:0},children:"Aún no hay proyectos documentados para esta sección."})]})})]}),l.jsx("style",{children:`
        /* Animations */
        @keyframes modalFadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes cardFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-modal-in {
          animation: modalFadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Buttons */
        .btn-close-modern {
          position: absolute;
          top: 32px;
          right: 32px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #f8fafc;
          color: #64748b;
          border: 1px solid #e2e8f0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 20;
        }
        .btn-close-modern:hover {
          background: #fee2e2;
          color: #ef4444;
          border-color: #fca5a5;
          transform: rotate(90deg);
        }

        .btn-back-modern {
          display: flex;
          align-items: center;
          gap: 12px;
          background: transparent;
          color: #64748b;
          border: none;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 8px 0;
        }
        .btn-back-modern:hover {
          color: #003DA5;
          transform: translateX(-4px);
        }

        .btn-ver-todos {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #003DA5;
          border: none;
          font-weight: 800;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          border-bottom: 2px solid transparent;
          padding-bottom: 2px;
        }
        .btn-ver-todos:hover {
          color: #D4A017;
          border-color: #D4A017;
          gap: 12px;
        }

        .btn-tech-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: #0f172a;
          color: white;
          padding: 20px 40px;
          border-radius: 16px;
          text-decoration: none;
          font-weight: 800;
          font-size: 16px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 25px rgba(15,23,42,0.2);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .btn-tech-primary:hover {
          background: #003DA5;
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(0,61,165,0.3);
        }

        /* Product Cards */
        .premium-product-card {
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(15,23,42,0.05);
          box-shadow: 0 10px 30px rgba(15,23,42,0.04);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          animation: cardFadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          display: flex;
          flex-direction: column;
        }
        .premium-product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0,61,165,0.1);
          border-color: rgba(0,61,165,0.2);
        }

        .card-image-container {
          position: relative;
          height: 280px;
          overflow: hidden;
        }
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .premium-product-card:hover .product-img {
          transform: scale(1.1);
        }

        .card-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15,23,42,0.8), transparent 60%);
          opacity: 0.6;
          transition: opacity 0.4s ease;
        }
        .premium-product-card:hover .card-gradient-overlay {
          opacity: 0.8;
          background: linear-gradient(to top, rgba(0,61,165,0.9), transparent 60%);
        }

        .card-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(4px);
          color: #0f172a;
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .view-details-hover {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.4s ease;
        }
        .premium-product-card:hover .view-details-hover {
          opacity: 1;
        }
        .view-details-hover span {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.5);
          color: white;
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 14px;
          transform: translateY(20px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .premium-product-card:hover .view-details-hover span {
          transform: translateY(0);
        }

        .card-content {
          padding: 24px;
          background: #ffffff;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .product-title {
          color: #0f172a;
          font-size: 20px;
          font-weight: 800;
          margin: 0 0 16px;
          line-height: 1.3;
        }
        .tech-line {
          width: 40px;
          height: 3px;
          background: #cbd5e1;
          transition: all 0.4s ease;
          margin-top: auto;
        }
        .premium-product-card:hover .tech-line {
          width: 80px;
          background: #003DA5;
        }

        /* Layout Defaults */
        .productos-grid {
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        }

        /* Detail Modal */
        .modal-overlay { padding: 24px; }
        .modern-glass-modal { padding: 64px; }
        .detail-sticky-header { padding: 24px 40px; }

        .detail-image-wrapper {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: #f1f5f9;
        }
        .detail-img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
        }
        .tech-corner {
          position: absolute;
          width: 40px;
          height: 40px;
          border: 4px solid #003DA5;
          z-index: 2;
        }
        .top-left { top: 24px; left: 24px; border-right: none; border-bottom: none; }
        .bottom-right { bottom: 24px; right: 24px; border-left: none; border-top: none; }

        @media (max-width: 992px) {
          .detail-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .detail-img {
            height: 350px !important;
          }
          .modern-glass-modal {
            padding: 32px !important;
          }
        }
        
        @media (max-width: 768px) {
          .modal-overlay { padding: 12px !important; }
          .productos-grid {
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          }
          .modern-glass-modal {
            padding: 24px !important;
            border-radius: 20px !important;
          }
          .detail-sticky-header {
            padding: 16px 20px !important;
          }
          .detail-img {
            height: 280px !important;
          }
          .detail-modal {
            padding: 0 !important;
          }
          .detail-grid {
            padding: 24px !important;
          }
          .btn-close-modern {
            top: 16px;
            right: 16px;
            width: 40px;
            height: 40px;
          }
        }
        @media (max-width: 480px) {
          .modal-overlay { padding: 8px !important; }
          .modern-glass-modal { padding: 16px !important; border-radius: 16px !important; }
          .detail-sticky-header { padding: 12px 16px !important; }
          .detail-grid { padding: 16px !important; gap: 24px !important; }
          .btn-tech-primary {
            width: 100%;
            font-size: 14px;
            padding: 16px 20px;
          }
          .detail-img {
            height: auto !important;
            aspect-ratio: 4/3;
          }
          .productos-grid {
            grid-template-columns: 1fr !important;
          }
          .card-image-container {
            height: 240px;
          }
        }
      `})]})}const Ai={ventanas:{desc:"Sistemas corredizos y abatibles de alta ingeniería espacial."},puertas:{desc:"Seguridad perimetral con diseños de vanguardia."},zaguanes:{desc:"Automatización y estética superior para tu hogar."},escaleras:{desc:"Estructuras arquitectónicas de máxima solidez."},barandales:{desc:"Líneas limpias y minimalistas para espacios modernos."},otros:{desc:"Desarrollo de proyectos especiales y a medida."}};function Di({proyectos:e,categorias:r=[]}){const[t,i]=M.useState(null),[a,n]=M.useState(null),[o,c]=M.useState(!1),[s,d]=M.useState(null),m=p=>{i(t===p?null:p)};return l.jsxs("section",{id:"servicios",className:"section servicios-section",style:{background:"linear-gradient(180deg, #f1f5f9 0%, #ffffff 50%, #f8fafc 100%)",position:"relative",overflow:"hidden"},children:[l.jsx("div",{style:{position:"absolute",top:"-10%",left:"-5%",width:"400px",height:"400px",background:"radial-gradient(circle, rgba(0,61,165,0.03) 0%, transparent 70%)",filter:"blur(40px)",zIndex:0}}),l.jsx("div",{style:{position:"absolute",bottom:"10%",right:"-10%",width:"500px",height:"500px",background:"radial-gradient(circle, rgba(212,160,23,0.03) 0%, transparent 70%)",filter:"blur(50px)",zIndex:0}}),l.jsxs("div",{className:"section-inner animate-on-scroll servicios-inner",style:{maxWidth:"1300px",margin:"0 auto",position:"relative",zIndex:1},children:[l.jsxs("div",{style:{textAlign:"center",marginBottom:"80px"},children:[l.jsx("span",{style:{display:"inline-block",background:"rgba(0, 61, 165, 0.05)",color:"#003DA5",padding:"8px 20px",borderRadius:"50px",fontSize:"14px",fontWeight:"800",letterSpacing:"2px",textTransform:"uppercase",marginBottom:"16px",border:"1px solid rgba(0, 61, 165, 0.1)"},children:"Catálogo de Soluciones"}),l.jsxs("h2",{className:"servicios-title",style:{fontWeight:"900",margin:"0 0 20px",color:"#0f172a",letterSpacing:"-1px"},children:["Nuestros ",l.jsx("span",{style:{color:"#003DA5"},children:"Servicios"})]}),l.jsx("p",{style:{color:"#64748b",fontSize:"18px",maxWidth:"700px",margin:"0 auto",lineHeight:"1.6"},children:"Desarrollamos estructuras metálicas con precisión milimétrica, combinando resistencia industrial con acabados de alta estética para arquitectura contemporánea."})]}),l.jsx("div",{className:"servicios-accordion",children:r.map(p=>{const v=t===p.id,u=e?e.filter(h=>h.category_id===p.id):[];return l.jsxs("div",{className:"modern-accordion-item",style:{background:v?"#ffffff":"transparent",borderRadius:v?"24px":"0",boxShadow:v?"0 20px 40px rgba(15,23,42,0.04)":"none",borderBottom:v?"none":"1px solid rgba(15,23,42,0.06)",marginBottom:v?"16px":"0",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",padding:v?"10px 24px 32px":"0 16px"},children:[l.jsxs("button",{onClick:()=>m(p.id),style:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"32px 0",background:"transparent",border:"none",color:v?"#003DA5":"#0f172a",fontSize:"24px",fontWeight:"800",cursor:"pointer",textAlign:"left",transition:"all 0.3s ease"},className:"accordion-btn",children:[l.jsx("span",{style:{textTransform:"uppercase",letterSpacing:"1px"},children:p.name}),l.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:v?"rgba(0,61,165,0.1)":"rgba(15,23,42,0.04)",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s ease"},className:"icon-wrapper",children:v?l.jsx(Je,{className:"w-5 h-5",style:{color:"#003DA5"}}):l.jsx(Ze,{className:"w-5 h-5",style:{color:"#64748b"}})})]}),l.jsx("div",{style:{maxHeight:v?"2000px":"0",opacity:v?1:0,overflow:"hidden",transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"},children:l.jsxs("div",{children:[l.jsx("p",{style:{color:"#475569",fontSize:"16px",marginBottom:"32px",lineHeight:"1.6",borderLeft:"3px solid #D4A017",paddingLeft:"16px"},children:Ai[p.slug]?.desc||"Ingeniería y diseño a medida con materiales de máxima durabilidad."}),u.length>0?l.jsxs("div",{children:[l.jsx("div",{className:"servicios-grid",style:{display:"grid",gap:"32px"},children:u.slice(0,3).map(h=>l.jsxs("div",{onClick:()=>n(h),className:"futuristic-card",children:[l.jsxs("div",{className:"card-image-wrapper",children:[l.jsx("img",{src:h.image_path?h.image_path.startsWith("/")||h.image_path.startsWith("data:image")?h.image_path:`${h.image_path}`:"/imagenes/asador-1.png",alt:h.title,className:"card-image"}),l.jsx("div",{className:"card-overlay",children:l.jsx("span",{className:"view-btn",children:"Ver Especificaciones"})})]}),l.jsxs("div",{style:{padding:"24px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"12px",marginBottom:"8px"},children:[l.jsx("h4",{style:{color:"#0f172a",margin:"0",fontSize:"18px",fontWeight:"800"},children:h.title}),h.price&&l.jsx("span",{className:"card-price",style:{color:"#D4A017",fontWeight:"800",whiteSpace:"nowrap"},children:new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN"}).format(h.price)})]}),l.jsx("div",{style:{width:"30px",height:"2px",background:"#D4A017",transition:"width 0.3s ease"},className:"card-line"})]})]},h.id))}),u.length>3&&l.jsx("div",{style:{textAlign:"center",marginTop:"48px"},children:l.jsxs("button",{onClick:()=>d(p),className:"btn-outline-modern",children:["Explorar Catálogo Completo de ",p.name]})})]}):l.jsx("div",{style:{background:"#f8fafc",padding:"30px",borderRadius:"16px",textAlign:"center",border:"1px dashed #cbd5e1"},children:l.jsx("p",{style:{color:"#64748b",fontSize:"15px",margin:0},children:"Sistemas en desarrollo para esta categoría."})})]})})]},p.id)})}),l.jsx("div",{style:{textAlign:"center",marginTop:"80px"},children:l.jsx("button",{onClick:()=>c(!0),className:"btn-glow-modern",children:"Acceder al Portafolio Global"})})]}),l.jsx("style",{children:`
        /* Animaciones Futuras y Modernas */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-on-scroll {
          animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Layout defaults */
        .servicios-section { padding: 120px 0; }
        .servicios-inner { padding: 0 40px; }
        .servicios-title { font-size: clamp(32px, 5vw, 56px); }
        .servicios-grid { grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); }
        .card-price { font-size: 15px; }

        /* Hover de Acordeon */
        .accordion-btn:hover { color: #003DA5 !important; }
        .accordion-btn:hover .icon-wrapper { background: rgba(0,61,165,0.1) !important; transform: scale(1.1); }
        .modern-accordion-item { border: 1px solid transparent; }
        .modern-accordion-item:hover { border-color: rgba(15,23,42,0.05); }

        /* Tarjetas Futuristas */
        .futuristic-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(15,23,42,0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 25px rgba(15,23,42,0.03);
          position: relative;
        }
        .futuristic-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0,61,165,0.2);
          box-shadow: 0 20px 40px rgba(0,61,165,0.1);
        }
        .futuristic-card:hover .card-line { width: 60px !important; }
        
        .card-image-wrapper {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
        }
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .futuristic-card:hover .card-image {
          transform: scale(1.08);
        }
        
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,61,165,0.8), rgba(0,61,165,0.2));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .futuristic-card:hover .card-overlay { opacity: 1; }
        
        .view-btn {
          color: white;
          font-weight: 700;
          font-size: 14px;
          padding: 10px 24px;
          border: 2px solid white;
          border-radius: 50px;
          transform: translateY(20px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .futuristic-card:hover .view-btn { transform: translateY(0); }

        /* Botones Futuros */
        .btn-outline-modern {
          background: transparent;
          color: #0f172a;
          border: 1px solid #cbd5e1;
          padding: 14px 40px;
          border-radius: 50px;
          font-weight: 800;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-outline-modern:hover {
          background: #0f172a;
          color: white;
          border-color: #0f172a;
          box-shadow: 0 10px 20px rgba(15,23,42,0.15);
          transform: translateY(-2px);
        }

        .btn-glow-modern {
          background: linear-gradient(135deg, #003DA5 0%, #002b80 100%);
          color: white;
          padding: 18px 56px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          font-weight: 800;
          font-size: 16px;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 30px rgba(0,61,165,0.3);
          position: relative;
          overflow: hidden;
        }
        .btn-glow-modern::after {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-20deg);
          transition: all 0.6s ease;
        }
        .btn-glow-modern:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(0,61,165,0.4);
        }
        .btn-glow-modern:hover::after {
          left: 150%;
        }

        @media (max-width: 768px) {
          .servicios-section { padding: 60px 0; }
          .servicios-inner { padding: 0 16px; }
          .servicios-grid { grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px !important; }
          .accordion-btn { font-size: 18px !important; padding: 20px 0 !important; }
          .modern-accordion-item { padding: 0 12px !important; }
          .card-image-wrapper { height: 200px; }
          .card-price { font-size: 14px; }
          .btn-glow-modern { padding: 14px 24px; font-size: 13px; width: 100%; display: block; text-align: center; }
          .btn-outline-modern { padding: 12px 20px; font-size: 13px; width: 100%; display: block; text-align: center; }
        }

        @media (max-width: 480px) {
          .servicios-section { padding: 40px 0; }
          .servicios-grid { grid-template-columns: 1fr; gap: 16px !important; }
          .accordion-btn { font-size: 15px !important; padding: 16px 0 !important; }
          .accordion-btn span { max-width: 85%; }
          .card-image-wrapper { height: auto; aspect-ratio: 4/3; }
          .futuristic-card > div:last-child { padding: 16px !important; }
          .modern-accordion-item { border-radius: 16px !important; }
        }
      `}),a&&l.jsx(J,{onClose:()=>n(null),seleccionadoInicial:a}),s&&l.jsx(J,{onClose:()=>d(null),productos:e,categoriaSeleccionada:s}),o&&l.jsx(J,{onClose:()=>c(!1),productos:e})]})}function Ni(){const[e,r]=M.useState({nombre:"",correo:"",telefono:"",categoria:"",presupuesto:"",descripcion:"",urgencia:"normal"}),[t,i]=M.useState(!1),[a,n]=M.useState(null),o=d=>r({...e,[d.target.name]:d.target.value}),c=d=>{d.preventDefault();const m=`SOLICITUD DE COTIZACIÓN

Nombre: ${e.nombre}
Correo: ${e.correo}
Teléfono: ${e.telefono}
Servicio: ${e.categoria}
Presupuesto estimado: ${e.presupuesto||"No especificado"}
Urgencia: ${e.urgencia}
Descripción:
${e.descripcion}`;window.open(`https://wa.me/527225645160?text=${encodeURIComponent(m)}`,"_blank"),i(!0),setTimeout(()=>{r({nombre:"",correo:"",telefono:"",categoria:"",presupuesto:"",descripcion:"",urgencia:"normal"}),i(!1)},2e3)},s=d=>({width:"100%",background:a===d?"#ffffff":"rgba(255,255,255,0.7)",border:"1px solid",borderColor:a===d?"#003DA5":"rgba(148,163,184,0.3)",borderRadius:"16px",padding:"16px 20px",color:"#0f172a",fontSize:"15px",outline:"none",transition:"all 0.3s ease",boxShadow:a===d?"0 0 0 4px rgba(0,61,165,0.1)":"none",fontFamily:"inherit"});return l.jsxs("section",{id:"contacto",className:"section contacto-section",style:{background:"linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)",position:"relative",overflow:"hidden"},children:[l.jsx("div",{style:{position:"absolute",top:"10%",right:"-5%",width:"300px",height:"300px",background:"radial-gradient(circle, rgba(212,160,23,0.05) 0%, transparent 70%)",filter:"blur(40px)",zIndex:0}}),l.jsx("div",{style:{position:"absolute",bottom:"-10%",left:"-5%",width:"500px",height:"500px",background:"radial-gradient(circle, rgba(0,61,165,0.03) 0%, transparent 70%)",filter:"blur(50px)",zIndex:0}}),l.jsxs("div",{className:"section-inner contacto-inner",style:{maxWidth:"1300px",margin:"0 auto",position:"relative",zIndex:1},children:[l.jsxs("div",{style:{textAlign:"center",marginBottom:"80px"},className:"animate-on-scroll",children:[l.jsx("span",{style:{display:"inline-block",background:"transparent",color:"#D4A017",padding:"6px 16px",borderRadius:"50px",fontSize:"13px",fontWeight:"800",letterSpacing:"2px",textTransform:"uppercase",marginBottom:"16px",border:"1px solid rgba(212, 160, 23, 0.3)"},children:"Conexión Directa"}),l.jsxs("h2",{className:"contacto-title",style:{fontWeight:"900",color:"#0f172a",lineHeight:1.1,marginBottom:"20px",letterSpacing:"-1px"},children:["Inicia tu ",l.jsx("span",{style:{color:"#003DA5"},children:"Proyecto"})]}),l.jsx("p",{style:{color:"#64748b",fontSize:"18px",maxWidth:"600px",margin:"0 auto"},children:"Nuestros ingenieros y especialistas están listos para materializar tus ideas con la más alta tecnología."})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1.2fr",gap:"60px",alignItems:"center"},className:"contacto-grid animate-on-scroll",children:[l.jsxs("div",{className:"info-modern-card",children:[l.jsxs("div",{className:"info-content-wrapper",style:{padding:"48px",position:"relative",zIndex:2},children:[l.jsxs("h3",{style:{color:"#0f172a",fontSize:"24px",fontWeight:"800",marginBottom:"40px",display:"flex",alignItems:"center",gap:"12px"},children:[l.jsx("div",{style:{width:"12px",height:"12px",background:"#D4A017",borderRadius:"50%"}}),"Coordenadas de Contacto"]}),l.jsxs("div",{className:"info-row",children:[l.jsx("p",{className:"info-label",children:"Teléfono Directo"}),l.jsx("p",{className:"info-value",children:"+52 722 564 5160"})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("p",{className:"info-label",children:"Correo Electrónico"}),l.jsx("p",{className:"info-value",style:{wordBreak:"break-all"},children:"caba146bucio@gmail.com"})]}),l.jsxs("div",{className:"info-row",style:{marginBottom:"48px"},children:[l.jsx("p",{className:"info-label",children:"Razón Social"}),l.jsx("p",{className:"info-value",children:"IHA Innovacion en Herreria y Aluminio"})]}),l.jsxs("div",{children:[l.jsx("p",{className:"info-label",style:{marginBottom:"16px"},children:"Plataformas Digitales"}),l.jsx("a",{href:"https://www.facebook.com/profile.php?id=100063488973885",target:"_blank",rel:"noreferrer",className:"social-btn-tech",children:l.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:l.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})})})]})]}),l.jsx("div",{className:"card-decoration-line"})]}),l.jsx("div",{children:l.jsxs("form",{onSubmit:c,className:"tech-form-container",children:[l.jsxs("div",{className:"contacto-form-grid",style:{display:"grid",gap:"20px"},children:[l.jsx("input",{name:"nombre",value:e.nombre,onChange:o,required:!0,placeholder:"Tu nombre completo",style:s("nombre"),onFocus:()=>n("nombre"),onBlur:()=>n(null)}),l.jsx("input",{name:"correo",type:"email",value:e.correo,onChange:o,required:!0,placeholder:"Tu correo electrónico",style:s("correo"),onFocus:()=>n("correo"),onBlur:()=>n(null)})]}),l.jsxs("div",{style:{display:"grid",gap:"20px"},className:"contacto-form-grid",children:[l.jsx("input",{name:"telefono",value:e.telefono,onChange:o,placeholder:"Teléfono móvil",style:s("telefono"),onFocus:()=>n("telefono"),onBlur:()=>n(null)}),l.jsxs("div",{style:{position:"relative"},children:[l.jsxs("select",{name:"urgencia",value:e.urgencia,onChange:o,style:{...s("urgencia"),appearance:"none"},onFocus:()=>n("urgencia"),onBlur:()=>n(null),children:[l.jsx("option",{value:"bajo",children:"Prioridad: Baja"}),l.jsx("option",{value:"normal",children:"Prioridad: Normal"}),l.jsx("option",{value:"alta",children:"Prioridad: Alta"})]}),l.jsx("div",{className:"select-arrow"})]})]}),l.jsxs("div",{style:{position:"relative"},children:[l.jsxs("select",{name:"categoria",value:e.categoria,onChange:o,required:!0,style:{...s("categoria"),appearance:"none"},onFocus:()=>n("categoria"),onBlur:()=>n(null),children:[l.jsx("option",{value:"",children:"¿Qué sistema necesitas desarrollar?"}),l.jsx("option",{children:"Ventanas de aluminio"}),l.jsx("option",{children:"Puertas y zaguanes"}),l.jsx("option",{children:"Barandales"}),l.jsx("option",{children:"Escaleras"}),l.jsx("option",{children:"Asador de tambor"}),l.jsx("option",{children:"Otro proyecto personalizado"})]}),l.jsx("div",{className:"select-arrow"})]}),l.jsxs("div",{style:{position:"relative"},children:[l.jsxs("select",{name:"presupuesto",value:e.presupuesto,onChange:o,style:{...s("presupuesto"),appearance:"none"},onFocus:()=>n("presupuesto"),onBlur:()=>n(null),children:[l.jsx("option",{value:"",children:"Rango de Inversión Estimada"}),l.jsx("option",{children:"$1,000 - $5,000"}),l.jsx("option",{children:"$5,000 - $15,000"}),l.jsx("option",{children:"$15,000 - $50,000"}),l.jsx("option",{children:"$50,000+"})]}),l.jsx("div",{className:"select-arrow"})]}),l.jsx("textarea",{name:"descripcion",value:e.descripcion,onChange:o,required:!0,rows:5,placeholder:"Describe los detalles técnicos de tu proyecto...",style:{...s("descripcion"),resize:"none"},onFocus:()=>n("descripcion"),onBlur:()=>n(null)}),l.jsxs("button",{type:"submit",className:`btn-submit-tech ${t?"success":""}`,disabled:t,children:[t?l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"8px",justifyContent:"center"},children:[l.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("polyline",{points:"20 6 9 17 4 12"})}),"Transmisión Exitosa"]}):l.jsx("span",{children:"Procesar Cotización"}),!t&&l.jsx("div",{className:"btn-sweep"})]})]})})]})]}),l.jsx("style",{children:`
        /* Estilos Generales y Animaciones */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-on-scroll {
          animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Layout defaults */
        .contacto-section { padding: 120px 0; }
        .contacto-inner { padding: 0 40px; }
        .contacto-title { font-size: clamp(36px, 5vw, 56px); }
        .contacto-form-grid { grid-template-columns: 1fr 1fr; }

        /* Información de Contacto Modernizada */
        .info-modern-card {
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 32px;
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow: 0 30px 60px rgba(15,23,42,0.05);
          position: relative;
          overflow: hidden;
        }
        .card-decoration-line {
          position: absolute;
          top: 0; left: 0;
          width: 8px; height: 100%;
          background: linear-gradient(to bottom, #003DA5, #D4A017);
        }
        
        .info-row {
          margin-bottom: 28px;
          transition: transform 0.3s ease;
        }
        .info-row:hover {
          transform: translateX(10px);
        }
        .info-label {
          color: #64748b;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          margin: 0 0 8px;
          text-transform: uppercase;
        }
        .info-value {
          color: #0f172a;
          font-size: 18px;
          font-weight: 700;
          margin: 0;
          line-height: 1.4;
        }

        .social-btn-tech {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          color: #003DA5;
          background: white;
          text-decoration: none;
          border: 1px solid rgba(0,61,165,0.1);
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 20px rgba(0,61,165,0.05);
        }
        .social-btn-tech:hover {
          background: #003DA5;
          color: white;
          transform: translateY(-5px) rotate(5deg);
          box-shadow: 0 15px 30px rgba(0,61,165,0.2);
        }

        /* Formulario Tech */
        .tech-form-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.9);
          border-radius: 32px;
          padding: 48px;
          box-shadow: 0 20px 40px rgba(15,23,42,0.03);
        }
        
        select option {
          background-color: #ffffff;
          color: #0f172a;
          padding: 12px;
          font-family: inherit;
        }

        .select-arrow {
          position: absolute;
          top: 50%;
          right: 20px;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 6px solid #64748b;
          pointer-events: none;
        }

        .btn-submit-tech {
          background: #003DA5;
          color: #FFFFFF;
          padding: 20px;
          border-radius: 16px;
          border: none;
          font-size: 16px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          margin-top: 12px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0,61,165,0.2);
        }
        .btn-submit-tech:hover:not(.success) {
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(0,61,165,0.3);
          background: #002b80;
        }
        .btn-submit-tech.success {
          background: #10B981;
          box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
          transform: scale(1.02);
        }
        .btn-submit-tech span {
          position: relative;
          z-index: 2;
        }
        .btn-sweep {
          position: absolute;
          top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-20deg);
          transition: all 0.6s ease;
          z-index: 1;
        }
        .btn-submit-tech:hover .btn-sweep {
          left: 150%;
        }

        @media (max-width: 992px) {
          .contacto-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .tech-form-container {
            padding: 40px !important;
          }
        }
        @media (max-width: 768px) {
          .contacto-section { padding: 80px 0; }
          .contacto-inner { padding: 0 24px; }
          .contacto-title { font-size: clamp(28px, 8vw, 36px); }
          .contacto-form-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .info-content-wrapper {
            padding: 32px !important;
          }
          .info-value { font-size: 16px; }
        }
        @media (max-width: 480px) {
          .contacto-section { padding: 60px 0; }
          .tech-form-container {
            padding: 24px !important;
            border-radius: 24px !important;
            gap: 20px !important;
          }
          .info-content-wrapper {
            padding: 24px !important;
          }
          .info-modern-card {
            border-radius: 24px !important;
          }
          .btn-submit-tech {
            padding: 16px;
            font-size: 15px;
            width: 100%;
          }
          input, select, textarea {
            padding: 16px 20px !important;
            font-size: 15px !important;
          }
        }
      `})]})}function Oi({productos:e=[]}){const[r,t]=M.useState(0),i=e.length>0?e[r]:null,a=m=>m?.image_path?m.image_path.startsWith("/")||m.image_path.startsWith("data:image")?m.image_path:`${m.image_path}`:"/imagenes/asador-1.png",n=e.length>0?e.map(m=>({src:a(m),label:m.title})):[{src:"/imagenes/asador-1.png",label:"Imagen no disponible"}],o=i?.description?i.description.split(`
`).filter(m=>m.trim()).slice(0,4):["Ingeniería de precisión con estructura de alta resistencia","Sistemas modulares adaptables al entorno","Acabados anticorrosivos premium","Diseño ergonómico y vanguardista"],c=`https://wa.me/527225645160?text=Hola,%20me%20interesa%20en%20${encodeURIComponent(i?.title||"un producto")}`,s=()=>{t(m=>(m+1)%n.length)},d=()=>{t(m=>m===0?n.length-1:m-1)};return l.jsxs("section",{id:"asador",className:"section asador-section",style:{background:"linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",position:"relative",overflow:"hidden"},children:[l.jsx("div",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"1px",background:"linear-gradient(90deg, transparent, rgba(0,61,165,0.1), transparent)"}}),l.jsx("div",{style:{position:"absolute",bottom:"0",right:"0",width:"100%",height:"1px",background:"linear-gradient(90deg, transparent, rgba(212,160,23,0.1), transparent)"}}),l.jsxs("div",{className:"section-inner asador-grid animate-fade-in asador-inner",style:{display:"grid",gridTemplateColumns:"1fr 1fr",alignItems:"center",maxWidth:"1300px",margin:"0 auto",position:"relative",zIndex:1},children:[l.jsxs("div",{className:"gallery-container",style:{minWidth:0},children:[l.jsxs("div",{className:"main-image-wrapper",style:{position:"relative",borderRadius:"24px",overflow:"hidden",marginBottom:"24px",background:"#f1f5f9",boxShadow:"0 30px 60px rgba(15,23,42,0.08)"},children:[l.jsx("div",{className:"corner-accent top-left"}),l.jsx("div",{className:"corner-accent bottom-right"}),l.jsx("img",{src:n[r]?.src,alt:n[r]?.label,className:"asador-image modern-image-transition"},`main-img-${r}`),l.jsx("div",{style:{position:"absolute",inset:"0",border:"1px solid rgba(255,255,255,0.4)",borderRadius:"24px",pointerEvents:"none"}}),n.length>1&&l.jsxs(l.Fragment,{children:[l.jsx("button",{onClick:d,className:"carousel-arrow left-arrow",children:l.jsx("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"})})}),l.jsx("button",{onClick:s,className:"carousel-arrow right-arrow",children:l.jsx("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:l.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"})})})]})]}),n.length>1&&l.jsx("div",{style:{display:"flex",gap:"16px",overflowX:"auto",paddingBottom:"8px"},className:"hide-scrollbar",children:n.map((m,p)=>l.jsxs("div",{onClick:()=>t(p),className:`thumbnail-wrapper ${r===p?"active":""}`,style:{minWidth:"80px",flex:"0 0 auto"},children:[l.jsx("img",{src:m.src,alt:m.label,style:{width:"100%",height:"80px",objectFit:"cover",display:"block"}}),r===p&&l.jsx("div",{className:"active-glow"})]},`thumb-${p}`))}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginTop:"24px"},children:[l.jsx("div",{style:{height:"1px",background:"rgba(15,23,42,0.1)",flex:1}}),l.jsxs("p",{style:{color:"#64748b",fontSize:"12px",fontWeight:"600",letterSpacing:"1px",textTransform:"uppercase",margin:0},children:[r+1," DE ",n.length," PROYECTOS DISPONIBLES"]}),l.jsx("div",{style:{height:"1px",background:"rgba(15,23,42,0.1)",flex:1}})]})]}),l.jsxs("div",{className:"product-info-card modern-info-transition",style:{background:"rgba(255, 255, 255, 0.6)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderRadius:"32px",padding:"48px",border:"1px solid rgba(255, 255, 255, 0.8)",boxShadow:"0 25px 50px rgba(15,23,42,0.03)"},children:[l.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",marginBottom:"24px"},children:[l.jsx("span",{style:{background:"linear-gradient(135deg, #003DA5 0%, #0052cc 100%)",color:"white",padding:"6px 16px",borderRadius:"50px",fontSize:"12px",fontWeight:"800",letterSpacing:"1px",textTransform:"uppercase",boxShadow:"0 4px 15px rgba(0,61,165,0.2)"},children:"Innovación Destacada"}),l.jsx("span",{style:{background:"transparent",color:"#d4a017",padding:"6px 16px",borderRadius:"50px",fontSize:"13px",fontWeight:"700",border:"1px solid rgba(212,160,23,0.3)"},children:i?.category?.name||"Prototipo Premium"})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginBottom:"16px"},children:[l.jsx("h2",{className:"asador-title",style:{fontWeight:"900",margin:"0",color:"#0f172a",lineHeight:"1.1",letterSpacing:"-1px"},children:i?.title||"Estructura Modular Avanzada"}),i?.price&&l.jsx("span",{className:"asador-price",style:{background:"#f8fafc",border:"1px solid #e2e8f0",color:"#0f172a",borderRadius:"12px",fontWeight:"900",width:"fit-content"},children:new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN"}).format(i.price)})]}),l.jsx("p",{style:{color:"#475569",fontSize:"18px",marginBottom:"32px",lineHeight:"1.6"},children:i?i.description?.split(`
`)[0]||"Desarrollo de ingeniería personalizada.":"Arquitectura metálica concebida para durar."}),l.jsxs("div",{style:{marginBottom:"40px"},children:[l.jsx("p",{style:{color:"#0f172a",fontSize:"14px",fontWeight:"800",textTransform:"uppercase",letterSpacing:"1.5px",marginBottom:"16px"},children:"Especificaciones Técnicas"}),l.jsx("div",{style:{display:"grid",gap:"12px"},children:o.map((m,p)=>l.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"12px"},children:[l.jsx("div",{style:{width:"20px",height:"20px",borderRadius:"50%",background:"rgba(212,160,23,0.1)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:"2px"},children:l.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#D4A017"}})}),l.jsx("p",{style:{color:"#334155",fontSize:"15px",margin:"0",lineHeight:"1.5",fontWeight:"500"},children:typeof m=="string"?m.trim():m})]},`spec-${p}`))})]}),l.jsxs("a",{href:c,target:"_blank",rel:"noreferrer",className:"btn-tech-glow",children:[l.jsx("span",{children:"Iniciar Proyecto Ahora"}),l.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),l.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]},`info-${r}`)]}),l.jsx("style",{children:`
        /* Animaciones */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-in {
          animation: fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .modern-info-transition {
          animation: fadeSlideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Layout defaults */
        .asador-section { padding: 120px 0; }
        .asador-inner { padding: 0 40px; gap: 64px; }
        .asador-title { font-size: clamp(32px, 4vw, 48px); }
        .asador-price { font-size: 24px; padding: 8px 16px; }

        /* Estilos de Imagen Tech */
        .asador-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
        }
        .modern-image-transition {
          animation: fadeIn 0.6s ease-out;
        }
        
        .corner-accent {
          position: absolute;
          width: 30px;
          height: 30px;
          border: 3px solid #003DA5;
          z-index: 10;
          opacity: 0.8;
          transition: all 0.3s ease;
        }
        .top-left { top: 20px; left: 20px; border-right: none; border-bottom: none; border-radius: 8px 0 0 0; }
        .bottom-right { bottom: 20px; right: 20px; border-left: none; border-top: none; border-radius: 0 0 8px 0; }
        
        .main-image-wrapper:hover .top-left { top: 15px; left: 15px; transform: scale(1.2); }
        .main-image-wrapper:hover .bottom-right { bottom: 15px; right: 15px; transform: scale(1.2); }

        /* Controles Carrusel */
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(4px);
          border: none;
          border-radius: 50%;
          color: #003DA5;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 20;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .carousel-arrow:hover {
          background: #003DA5;
          color: white;
          transform: translateY(-50%) scale(1.1);
        }
        .left-arrow { left: 16px; }
        .right-arrow { right: 16px; }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .thumbnail-wrapper {
          cursor: pointer;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          border: 2px solid transparent;
          transition: all 0.3s ease;
          opacity: 0.5;
        }
        .thumbnail-wrapper:hover {
          opacity: 1;
          transform: translateY(-4px);
        }
        .thumbnail-wrapper.active {
          opacity: 1;
          border-color: #003DA5;
          box-shadow: 0 8px 16px rgba(0,61,165,0.2);
          transform: scale(1.05);
        }
        .active-glow {
          position: absolute;
          bottom: 0; left: 0; right: 0; height: 40%;
          background: linear-gradient(to top, rgba(0,61,165,0.6), transparent);
          pointer-events: none;
        }

        /* Botón Tech */
        .btn-tech-glow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          background: #0f172a;
          color: white;
          padding: 20px;
          border-radius: 20px;
          text-decoration: none;
          font-weight: 800;
          font-size: 16px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255,255,255,0.1);
          position: relative;
          overflow: hidden;
        }
        .btn-tech-glow::before {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(135deg, rgba(0,61,165,0) 0%, rgba(0,61,165,0.4) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .btn-tech-glow:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(15,23,42,0.2);
          background: #003DA5;
          border-color: #0052cc;
        }
        .btn-tech-glow:hover::before { opacity: 1; }
        .btn-tech-glow span, .btn-tech-glow svg { position: relative; z-index: 1; }
        .btn-tech-glow:hover svg { transform: translateX(5px); transition: transform 0.3s ease; }

        @media (max-width: 992px) {
          .asador-grid {
            grid-template-columns: 1fr !important;
          }
          .asador-inner { gap: 40px !important; }
          .asador-image {
            height: 400px !important;
          }
          .product-info-card {
            padding: 32px !important;
          }
        }
        @media (max-width: 768px) {
          .asador-section { padding: 60px 0; }
          .asador-inner { padding: 0 16px; gap: 24px !important; }
          .asador-title { font-size: clamp(24px, 6vw, 32px); }
          .asador-price { font-size: 18px; }
          .product-info-card {
            padding: 24px !important;
            border-radius: 20px !important;
          }
          .btn-tech-glow {
            padding: 16px;
            font-size: 15px;
            width: 100%;
          }
        }
        @media (max-width: 480px) {
          .asador-image {
            height: auto !important;
            width: 100%;
            aspect-ratio: 4/3;
            object-fit: cover;
          }
          .gallery-container {
            margin: 0 -16px; /* Bleed to edge on mobile */
            width: 100vw;
            max-width: 100vw;
            overflow: hidden;
          }
          .hide-scrollbar {
            padding: 0 16px 8px 16px !important;
            max-width: 100vw;
            box-sizing: border-box;
          }
          .main-image-wrapper {
            border-radius: 0;
            margin-bottom: 12px !important;
          }
          .thumbnail-wrapper {
            min-width: 60px !important;
          }
          .thumbnail-wrapper img {
            height: 60px !important;
          }
        }
      `})]})}function Bi(){return l.jsxs("footer",{style:{background:"#f0f0f8",borderTop:"1px solid rgba(0,61,165,0.15)"},children:[l.jsx("style",{children:`
        .footer-inner {
          padding: 60px 40px 32px;
          max-width: 1300px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            text-align: center;
          }
          .footer-grid > div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .footer-inner {
            padding: 40px 16px 24px;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            gap: 24px !important;
          }
          .footer-inner {
            padding: 32px 16px 20px;
          }
          .footer-grid img {
            height: 48px !important;
          }
        }
      `}),l.jsxs("div",{className:"footer-inner",children:[l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"48px",marginBottom:"48px"},className:"footer-grid",children:[l.jsxs("div",{children:[l.jsx("a",{href:"#top",style:{display:"inline-flex",textDecoration:"none"},children:l.jsx("img",{src:"/imagenes/logo-iha.png",alt:"IHA",style:{height:"56px",objectFit:"contain",marginBottom:"20px",cursor:"pointer"}})}),l.jsx("p",{style:{color:"#2d2d2d",fontSize:"14px",lineHeight:1.8,maxWidth:"260px"},children:"Innovación en Herrería y Aluminio. Fabricación directa, diseño personalizado."})]}),l.jsxs("div",{children:[l.jsx("p",{style:{background:"linear-gradient(90deg, #D4A017 0%, #003DA5 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:"700",fontSize:"11px",letterSpacing:"0.14em",marginBottom:"20px"},children:"SERVICIOS"}),["Ventanas","Puertas","Canceles","Barandales","Domos","Asadores"].map(e=>l.jsx("a",{href:"#servicios",style:{display:"block",color:"#2d2d2d",fontSize:"14px",margin:"0 0 10px",textDecoration:"none",transition:"color 0.2s",cursor:"pointer"},children:e},e))]}),l.jsxs("div",{children:[l.jsx("p",{style:{background:"linear-gradient(90deg, #D4A017 0%, #003DA5 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:"700",fontSize:"11px",letterSpacing:"0.14em",marginBottom:"20px"},children:"CONTACTO"}),l.jsx("a",{href:"tel:+527225645160",style:{display:"block",color:"#2d2d2d",fontSize:"14px",margin:"0 0 10px",textDecoration:"none",transition:"color 0.2s",cursor:"pointer"},children:"722 564 5160"}),l.jsx("a",{href:"mailto:caba146bucio@gmail.com",style:{display:"block",color:"#2d2d2d",fontSize:"13px",margin:"0 0 20px",textDecoration:"none",transition:"color 0.2s",cursor:"pointer"},children:"caba146bucio@gmail.com"})]})]}),l.jsx("div",{style:{borderTop:"1px solid rgba(0,61,165,0.3)",paddingTop:"24px"},children:l.jsxs("p",{style:{color:"#2d2d2d",fontSize:"13px",margin:0},children:["© ",new Date().getFullYear()," IHA Innovacion en Herreria y Aluminio"]})})]})]})}function $i({proyectos:e,categorias:r}){const[t,i]=M.useState(null),[a,n]=M.useState(!1);return l.jsxs(l.Fragment,{children:[l.jsx(qe,{title:"Inicio | IHA Innovacion en Herreria y Aluminio"}),l.jsx("style",{children:`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
            `}),l.jsxs("div",{id:"top",style:{fontFamily:"DM Sans, sans-serif",minHeight:"100vh",background:"linear-gradient(135deg, #f8f8fc 0%, #f5f5fa 30%, #f2f0f8 60%, #efeff5 100%)"},children:[l.jsx(et,{onVerTodos:()=>n(!0)}),l.jsxs("main",{children:[l.jsx(Li,{proyectos:e,onProductoClick:i}),l.jsx(Di,{proyectos:e,categorias:r}),l.jsx(Oi,{productos:e}),l.jsx(Ni,{})]}),l.jsx(Bi,{})]}),t&&l.jsx(J,{onClose:()=>i(null),productos:e,categoriaSeleccionada:null,seleccionadoInicial:t}),a&&l.jsx(J,{onClose:()=>n(!1),productos:e})]})}export{$i as default};
