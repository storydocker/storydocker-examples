import{i as _,d,e as O,f as x,g as I,h as B,j as z,k as H,l as L,m as q,n as D,p as W,q as N,s as $,u as j,v as p,S as F}from"./runtime-core.esm-bundler.cb8618aa.js";const U="http://www.w3.org/2000/svg",u=typeof document<"u"?document:null,b=u&&u.createElement("template"),X={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t?u.createElementNS(U,e):u.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>u.createTextNode(e),createComment:e=>u.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>u.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,r){const f=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{b.innerHTML=i?`<svg>${e}</svg>`:e;const c=b.content;if(i){const o=c.firstChild;for(;o.firstChild;)c.appendChild(o.firstChild);c.removeChild(o)}t.insertBefore(c,n)}return[f?f.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function G(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function J(e,t,n){const i=e.style,s=d(n);if(n&&!s){if(t&&!d(t))for(const r in t)n[r]==null&&g(i,r,"");for(const r in n)g(i,r,n[r])}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const A=/\s*!important$/;function g(e,t,n){if(H(n))n.forEach(i=>g(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=K(e,t);A.test(n)?e.setProperty(L(i),n.replace(A,""),"important"):e[i]=n}}const E=["Webkit","Moz","ms"],m={};function K(e,t){const n=m[t];if(n)return n;let i=q(t);if(i!=="filter"&&i in e)return m[t]=i;i=D(i);for(let s=0;s<E.length;s++){const r=E[s]+i;if(r in e)return m[t]=r}return t}const v="http://www.w3.org/1999/xlink";function Q(e,t,n,i,s){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(v,t.slice(6,t.length)):e.setAttributeNS(v,t,n);else{const r=W(t);n==null||r&&!N(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function Y(e,t,n,i,s,r,f){if(t==="innerHTML"||t==="textContent"){i&&f(i,s,r),e[t]=n??"";return}const c=e.tagName;if(t==="value"&&c!=="PROGRESS"&&!c.includes("-")){e._value=n;const l=c==="OPTION"?e.getAttribute("value"):e.value,S=n??"";l!==S&&(e.value=S),n==null&&e.removeAttribute(t);return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=N(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(t)}function Z(e,t,n,i){e.addEventListener(t,n,i)}function V(e,t,n,i){e.removeEventListener(t,n,i)}function y(e,t,n,i,s=null){const r=e._vei||(e._vei={}),f=r[t];if(i&&f)f.value=i;else{const[c,o]=k(t);if(i){const l=r[t]=nt(i,s);Z(e,c,l,o)}else f&&(V(e,c,f,o),r[t]=void 0)}}const C=/(?:Once|Passive|Capture)$/;function k(e){let t;if(C.test(e)){t={};let i;for(;i=e.match(C);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):L(e.slice(2)),t]}let h=0;const tt=Promise.resolve(),et=()=>h||(tt.then(()=>h=0),h=Date.now());function nt(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;$(it(i,n.value),t,5,[i])};return n.value=e,n.attached=et(),n}function it(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const T=/^on[a-z]/,st=(e,t,n,i,s=!1,r,f,c,o)=>{t==="class"?G(e,i,s):t==="style"?J(e,n,i):B(t)?z(t)||y(e,t,n,i,f):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):rt(e,t,i,s))?Y(e,t,i,r,f,c,o):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),Q(e,t,i,s))};function rt(e,t,n,i){return i?!!(t==="innerHTML"||t==="textContent"||t in e&&T.test(t)&&_(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||T.test(t)&&d(n)?!1:t in e}const R=I({patchProp:st},X);let a,P=!1;function ot(){return a||(a=O(R))}function ct(){return a=P?a:x(R),P=!0,a}const ft=(...e)=>{const t=ot().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=M(i);if(!s)return;const r=t._component;!_(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const f=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),f},t},lt=(...e)=>{const t=ct().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=M(i);if(s)return n(s,!0,s instanceof SVGElement)},t};function M(e){return d(e)?document.querySelector(e):e}const w=()=>{},ut=j({props:{value:String,name:String},setup({name:e,value:t}){return t?()=>p("astro-slot",{name:e,innerHTML:t}):()=>null}}),dt=e=>async(t,n,i,{client:s})=>{if(delete n.class,!e.hasAttribute("ssr"))return;const r=t.name?`${t.name} Host`:void 0,f={};for(const[o,l]of Object.entries(i))f[o]=()=>p(ut,{value:l,name:o==="default"?void 0:o});let c=p(t,n,f);if(at(t.setup)&&(c=p(F,null,c)),s==="only"){const o=ft({name:r,render:()=>c});await w(),o.mount(e,!1)}else{const o=lt({name:r,render:()=>c});await w(),o.mount(e,!0)}};function at(e){const t=e?.constructor;return t&&t.name==="AsyncFunction"}export{dt as default};
