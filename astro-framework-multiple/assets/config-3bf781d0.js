import{s as u}from"./index-d475d2ea.js";import{d as f}from"./index-356e4a49.js";import{S as d,e as l,a as y}from"./index-5242e4f8.js";import"./_getTag-7fd90005.js";import"./_commonjsHelpers-de833af9.js";import"./assert-a1982797.js";const{simulatePageLoad:m,simulateDOMContentLoaded:_}=__STORYBOOK_MODULE_PREVIEW_API__;var{Node:g}=u,R=(r,e)=>{let{id:i,component:o}=e;if(typeof o=="string"){let t=o;return Object.keys(r).forEach(n=>{t=t.replace(`{{${n}}}`,r[n])}),t}if(o instanceof HTMLElement){let t=o.cloneNode(!0);return Object.keys(r).forEach(n=>{t.setAttribute(n,typeof r[n]=="string"?r[n]:JSON.stringify(r[n]))}),t}if(typeof o=="function")return o(r,e);throw console.warn(f`
    Storybook's HTML renderer only supports rendering DOM elements and strings.
    Received: ${o}
  `),new Error(`Unable to render story ${i}`)};function H({storyFn:r,kind:e,name:i,showMain:o,showError:t,forceRemount:n},s){let p=r();if(o(),typeof p=="string")s.innerHTML=p,m(s);else if(p instanceof g){if(s.firstChild===p&&n===!1)return;s.innerHTML="",s.appendChild(p),_()}else t({title:`Expecting an HTML snippet or DOM node from the story: "${i}" of "${e}".`,description:f`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `})}const{useEffect:c,addons:h}=__STORYBOOK_MODULE_PREVIEW_API__;function E(r){var o;let e=(o=r==null?void 0:r.parameters.docs)==null?void 0:o.source,i=r==null?void 0:r.parameters.__isArgsStory;return(e==null?void 0:e.type)===d.DYNAMIC?!1:!i||(e==null?void 0:e.code)||(e==null?void 0:e.type)===d.CODE}function O(r,e){var n,s;let i=r(),o=(s=(n=e==null?void 0:e.parameters.docs)==null?void 0:n.source)!=null&&s.excludeDecorators?e.originalStoryFn(e.args,e):i,t;return E(e)||(typeof o=="string"?t=o:o instanceof Element&&(t=o.outerHTML)),c(()=>{let{id:p,unmappedArgs:a}=e;t&&h.getChannel().emit(y,{id:p,args:a,source:t})}),i}var I=[O],D={docs:{story:{inline:!0},source:{type:d.DYNAMIC,language:"html",code:void 0,excludeDecorators:void 0}}},N=[l],b={renderer:"html",...D};export{N as argTypesEnhancers,I as decorators,b as parameters,R as render,H as renderToCanvas};
//# sourceMappingURL=config-3bf781d0.js.map
