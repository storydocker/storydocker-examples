import{_ as h}from"./iframe-62f540a1.js";import{d as l,R as o,r as a,C as E,A as R,H as x,D as y}from"./index-1a3ee0f3.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-de833af9.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-5242e4f8.js";import"./_getTag-7fd90005.js";import"./assert-a1982797.js";import"./uniq-982cede6.js";import"./index-356e4a49.js";var i={},m=l;i.createRoot=m.createRoot,i.hydrateRoot=m.hydrateRoot;var n=new Map,D=({callback:t,children:e})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==t&&(r.current=t,t())},[t]),e},_=async(t,e)=>{let r=await w(e);return new Promise(s=>{r.render(o.createElement(D,{callback:()=>s(null)},t))})},v=(t,e)=>{let r=n.get(t);r&&(r.unmount(),n.delete(t))},w=async t=>{let e=n.get(t);return e||(e=i.createRoot(t),n.set(t,e)),e},f={code:E,a:R,...x},C=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:e}=this.props;e(t)}render(){let{hasError:t}=this.state,{children:e}=this.props;return t?null:e}},U=class{constructor(){this.render=async(t,e,r)=>{let s={...f,...e==null?void 0:e.components},c=y;return new Promise((p,u)=>{h(()=>import("./index-74c960f5.js"),["./index-74c960f5.js","./index-5f67dd3b.js","./index-1a3ee0f3.js","./iframe-62f540a1.js","./index-d475d2ea.js","./_commonjsHelpers-de833af9.js","./_commonjs-dynamic-modules-302442b1.js","./index-d37d4223.js","./index-5242e4f8.js","./_getTag-7fd90005.js","./assert-a1982797.js","./uniq-982cede6.js","./index-356e4a49.js"],import.meta.url).then(({MDXProvider:d})=>_(o.createElement(C,{showException:u,key:Math.random()},o.createElement(d,{components:s},o.createElement(c,{context:t,docsParameter:e}))),r)).then(()=>p())})},this.unmount=t=>{v(t)}}};export{U as DocsRenderer,f as defaultComponents};
//# sourceMappingURL=DocsRenderer-3PUGWF3O-591b64be.js.map