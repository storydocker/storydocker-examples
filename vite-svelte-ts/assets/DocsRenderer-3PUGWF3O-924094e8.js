import{_ as h}from"./iframe-0ebf5255.js";import{d as l,R as o,r as a,C as E,A as R,H as x,D as y}from"./index-642bd449.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-de833af9.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";var i={},c=l;i.createRoot=c.createRoot,i.hydrateRoot=c.hydrateRoot;var n=new Map,D=({callback:t,children:e})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==t&&(r.current=t,t())},[t]),e},_=async(t,e)=>{let r=await w(e);return new Promise(s=>{r.render(o.createElement(D,{callback:()=>s(null)},t))})},v=(t,e)=>{let r=n.get(t);r&&(r.unmount(),n.delete(t))},w=async t=>{let e=n.get(t);return e||(e=i.createRoot(t),n.set(t,e)),e},f={code:E,a:R,...x},C=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:e}=this.props;e(t)}render(){let{hasError:t}=this.state,{children:e}=this.props;return t?null:e}},I=class{constructor(){this.render=async(t,e,r)=>{let s={...f,...e==null?void 0:e.components},m=y;return new Promise((p,u)=>{h(()=>import("./index-dbac8caf.js"),["./index-dbac8caf.js","./index-93722fe0.js","./index-642bd449.js","./iframe-0ebf5255.js","./index-d475d2ea.js","./_commonjsHelpers-de833af9.js","./_commonjs-dynamic-modules-302442b1.js","./index-d37d4223.js","./index-c7e0cd4c.js","./assert-1bda9b76.js","./index-356e4a49.js"],import.meta.url).then(({MDXProvider:d})=>_(o.createElement(C,{showException:u,key:Math.random()},o.createElement(d,{components:s},o.createElement(m,{context:t,docsParameter:e}))),r)).then(()=>p())})},this.unmount=t=>{v(t)}}};export{I as DocsRenderer,f as defaultComponents};
//# sourceMappingURL=DocsRenderer-3PUGWF3O-924094e8.js.map