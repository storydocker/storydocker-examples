import{y as u,D as y}from"./preact.module.f1575aff.js";const S="modulepreload",E=function(t,n){return t.startsWith(".")?new URL(t,n).href:t},g={},R=function(n,r,i){if(!r||r.length===0)return n();const f=document.getElementsByTagName("link");return Promise.all(r.map(a=>{if(a=E(a,i),a in g)return;g[a]=!0;const o=a.endsWith(".css"),m=o?'[rel="stylesheet"]':"";if(!!i)for(let s=f.length-1;s>=0;s--){const l=f[s];if(l.href===a&&(!o||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${m}`))return;const e=document.createElement("link");if(e.rel=o?"stylesheet":S,o||(e.as="script",e.crossOrigin=""),e.href=a,document.head.appendChild(e),o)return new Promise((s,l)=>{e.addEventListener("load",s),e.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>n())},_=({value:t,name:n,hydrate:r})=>t?u(r===!1?"astro-static-slot":"astro-slot",{name:n,dangerouslySetInnerHTML:{__html:t}}):null;_.shouldComponentUpdate=()=>!1;var d=_;const h=new Map;var p=t=>async(n,r,{default:i,...f})=>{if(!t.hasAttribute("ssr"))return;for(const[c,e]of Object.entries(f))r[c]=u(d,{value:e,name:c});if(t.dataset.preactSignals){const{signal:c}=await R(()=>import("./signals.module.71af6876.js"),["/storydocker-examples/astro-framework-multiple/_astro/signals.module.71af6876.js","/storydocker-examples/astro-framework-multiple/_astro/preact.module.f1575aff.js","/storydocker-examples/astro-framework-multiple/_astro/hooks.module.a845df0c.js"],import.meta.url);let e=JSON.parse(t.dataset.preactSignals);for(const[s,l]of Object.entries(e)){if(!h.has(l)){const v=c(r[s]);h.set(l,v)}r[s]=h.get(l)}}function o({children:c}){let e=Object.fromEntries(Array.from(t.attributes).map(s=>[s.name,s.value]));return u(t.localName,e,c)}let m=t.parentNode;y(u(o,null,u(n,r,i!=null?u(d,{value:i}):i)),m,t)};export{p as default};