import{_ as h}from"./iframe-14202455.js";import{d as l,R as o,r as a,C as E,A as R,H as x,D as y}from"./index-b4e22cfa.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./assert-672db55a.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-944a2f1f.js";import"./index-356e4a49.js";var c={},i=l;c.createRoot=i.createRoot,c.hydrateRoot=i.hydrateRoot;var n=new Map,D=({callback:t,children:e})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==t&&(r.current=t,t())},[t]),e},_=async(t,e)=>{let r=await w(e);return new Promise(s=>{r.render(o.createElement(D,{callback:()=>s(null)},t))})},v=(t,e)=>{let r=n.get(t);r&&(r.unmount(),n.delete(t))},w=async t=>{let e=n.get(t);return e||(e=c.createRoot(t),n.set(t,e)),e},f={code:E,a:R,...x},C=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:e}=this.props;e(t)}render(){let{hasError:t}=this.state,{children:e}=this.props;return t?null:e}},F=class{constructor(){this.render=async(t,e,r)=>{let s={...f,...e==null?void 0:e.components},m=y;return new Promise((u,p)=>{h(()=>import("./index-644bf3bc.js"),["./index-644bf3bc.js","./index-56f13c20.js","./index-b4e22cfa.js","./iframe-14202455.js","./index-d475d2ea.js","./assert-672db55a.js","./_commonjs-dynamic-modules-302442b1.js","./index-d37d4223.js","./index-944a2f1f.js","./index-356e4a49.js"],import.meta.url).then(({MDXProvider:d})=>_(o.createElement(C,{showException:p,key:Math.random()},o.createElement(d,{components:s},o.createElement(m,{context:t,docsParameter:e}))),r)).then(()=>u())})},this.unmount=t=>{v(t)}}};export{F as DocsRenderer,f as defaultComponents};
//# sourceMappingURL=DocsRenderer-3PUGWF3O-45c6185e.js.map
