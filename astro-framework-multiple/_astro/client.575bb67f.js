import{y as f,D as v}from"./preact.module.f1575aff.js";const y="modulepreload",S=function(t,s){return t.startsWith(".")?new URL(t,s).href:t},d={},E=function(s,a,o){if(!a||a.length===0)return s();const m=document.getElementsByTagName("link");return Promise.all(a.map(r=>{if(r=S(r,o),r in d)return;d[r]=!0;const i=r.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!o)for(let n=m.length-1;n>=0;n--){const u=m[n];if(u.href===r&&(!i||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const e=document.createElement("link");if(e.rel=i?"stylesheet":y,i||(e.as="script",e.crossOrigin=""),e.href=r,document.head.appendChild(e),i)return new Promise((n,u)=>{e.addEventListener("load",n),e.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>s())},_=({value:t,name:s})=>t?f("astro-slot",{name:s,dangerouslySetInnerHTML:{__html:t}}):null;_.shouldComponentUpdate=()=>!1;var g=_;const h=new Map;var k=t=>async(s,a,{default:o,...m})=>{if(!t.hasAttribute("ssr"))return;for(const[l,c]of Object.entries(m))a[l]=f(g,{value:c,name:l});if(t.dataset.preactSignals){const{signal:l}=await E(()=>import("./signals.module.7d5f0b01.js"),["/storydocker-examples/astro-framework-multiple/_astro/signals.module.7d5f0b01.js","/storydocker-examples/astro-framework-multiple/_astro/preact.module.f1575aff.js","/storydocker-examples/astro-framework-multiple/_astro/hooks.module.9ee1d4a4.js"],import.meta.url);let c=JSON.parse(t.dataset.preactSignals);for(const[e,n]of Object.entries(c)){if(!h.has(n)){const u=l(a[e]);h.set(n,u)}a[e]=h.get(n)}}function i({children:l}){let c=Object.fromEntries(Array.from(t.attributes).map(e=>[e.name,e.value]));return f(t.localName,c,l)}v(f(i,null,f(s,a,o!=null?f(g,{value:o}):o)),t.parentNode,t)};export{k as default};
