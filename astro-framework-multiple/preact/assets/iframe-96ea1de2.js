import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const _ of e.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&c(_)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const d="modulepreload",f=function(o,n){return new URL(o,n).href},a={},r=function(n,s,c){if(!s||s.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=f(e,c),e in a)return;a[e]=!0;const _=e.endsWith(".css"),m=_?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const O=t[l];if(O.href===e&&(!_||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const i=document.createElement("link");if(i.rel=_?"stylesheet":d,_||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),_)return new Promise((l,O)=>{i.addEventListener("load",l),i.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n())},{createChannel:R}=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,{createChannel:p}=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,{addons:u}=__STORYBOOK_MODULE_PREVIEW_API__,E=R({page:"preview"});u.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;if(window.CONFIG_TYPE==="DEVELOPMENT"){const o=p({});u.setServerChannel(o),window.__STORYBOOK_SERVER_CHANNEL__=o}const P={"./.framework-storybooks/stories/PreactCounter.stories.js":async()=>r(()=>import("./PreactCounter.stories-7e29e7e0.js"),["./PreactCounter.stories-7e29e7e0.js","./uniq-2be76c37.js","./preact.module-6e196b66.js","./_commonjsHelpers-87174ba5.js","./index-8a57c06c.js","./index-d475d2ea.js","./index-1e878d04.js","./index-356e4a49.js"],import.meta.url)};async function T(o){return P[o]()}const{composeConfigs:S,PreviewWeb:w,ClientApi:L}=__STORYBOOK_MODULE_PREVIEW_API__,h=async()=>{const o=await Promise.all([r(()=>import("./config-0761ab00.js"),["./config-0761ab00.js","./preact.module-6e196b66.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-bd1dd951.js"),[],import.meta.url),r(()=>import("./preview-a60aa466.js"),[],import.meta.url),r(()=>import("./preview-770cc08b.js"),["./preview-770cc08b.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-2cd4e1a1.js"),["./preview-2cd4e1a1.js","./index-d475d2ea.js"],import.meta.url),r(()=>import("./preview-d8c963a4.js"),["./preview-d8c963a4.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-b1164a2e.js"),["./preview-b1164a2e.js","./index-d475d2ea.js"],import.meta.url),r(()=>import("./preview-5ef354f3.js"),["./preview-5ef354f3.js","./index-d475d2ea.js","./index-d37d4223.js"],import.meta.url),r(()=>import("./preview-e4a627cf.js"),["./preview-e4a627cf.js","./index-d475d2ea.js","./index-8a57c06c.js","./_commonjsHelpers-87174ba5.js"],import.meta.url),r(()=>import("./preview-1e7500ec.js"),[],import.meta.url)]);return S(o)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new w;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new L({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:T,getProjectAnnotations:h});export{r as _};
//# sourceMappingURL=iframe-96ea1de2.js.map
