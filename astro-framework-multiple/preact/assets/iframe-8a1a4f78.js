import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const _ of e.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&l(_)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const R="modulepreload",f=function(o,n){return new URL(o,n).href},O={},r=function(n,s,l){if(!s||s.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=f(e,l),e in O)return;O[e]=!0;const _=e.endsWith(".css"),d=_?'[rel="stylesheet"]':"";if(!!l)for(let c=t.length-1;c>=0;c--){const a=t[c];if(a.href===e&&(!_||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${d}`))return;const i=document.createElement("link");if(i.rel=_?"stylesheet":R,_||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),_)return new Promise((c,a)=>{i.addEventListener("load",c),i.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n())},{createChannel:p}=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,{createChannel:S}=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,{addons:E}=__STORYBOOK_MODULE_PREVIEW_API__,m=p({page:"preview"});E.setChannel(m);window.__STORYBOOK_ADDONS_CHANNEL__=m;const{SERVER_CHANNEL_URL:u}=globalThis;if(u){const o=S({url:u});E.setServerChannel(o),window.__STORYBOOK_SERVER_CHANNEL__=o}const T={"./.framework-storybooks/stories/PreactCounter.stories.js":async()=>r(()=>import("./PreactCounter.stories-697fe981.js"),["./PreactCounter.stories-697fe981.js","./hooks.module-95fa258b.js","./preact.module-6e196b66.js"],import.meta.url)};async function P(o){return T[o]()}const{composeConfigs:w,PreviewWeb:L,ClientApi:h}=__STORYBOOK_MODULE_PREVIEW_API__,A=async()=>{const o=await Promise.all([r(()=>import("./config-0761ab00.js"),["./config-0761ab00.js","./preact.module-6e196b66.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-acdd0a7b.js"),[],import.meta.url),r(()=>import("./preview-a60aa466.js"),[],import.meta.url),r(()=>import("./preview-770cc08b.js"),["./preview-770cc08b.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-2cd4e1a1.js"),["./preview-2cd4e1a1.js","./index-d475d2ea.js"],import.meta.url),r(()=>import("./preview-d8c963a4.js"),["./preview-d8c963a4.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-b1164a2e.js"),["./preview-b1164a2e.js","./index-d475d2ea.js"],import.meta.url),r(()=>import("./preview-5ef354f3.js"),["./preview-5ef354f3.js","./index-d475d2ea.js","./index-d37d4223.js"],import.meta.url),r(()=>import("./preview-b038cc74.js"),["./preview-b038cc74.js","./index-d475d2ea.js","./_commonjsHelpers-725317a4.js"],import.meta.url),r(()=>import("./preview-1e7500ec.js"),[],import.meta.url)]);return w(o)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new h({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:P,getProjectAnnotations:A});export{r as _};
//# sourceMappingURL=iframe-8a1a4f78.js.map
