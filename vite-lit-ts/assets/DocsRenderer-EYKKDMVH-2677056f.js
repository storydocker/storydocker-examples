import{_ as h}from"./iframe-8f8d736c.js";import{a as l,R as o,r as a,C as d,A as E,H as R,D as x}from"./index-000f4d66.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-c45868c5.js";import"./index-356e4a49.js";var c={},i=l;c.createRoot=i.createRoot,c.hydrateRoot=i.hydrateRoot;var n=new Map,y=({callback:t,children:e})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==t&&(r.current=t,t())},[t]),e},_=async(t,e)=>{let r=await w(e);return new Promise(s=>{r.render(o.createElement(y,{callback:()=>s(null)},t))})},v=(t,e)=>{let r=n.get(t);r&&(r.unmount(),n.delete(t))},w=async t=>{let e=n.get(t);return e||(e=c.createRoot(t),n.set(t,e)),e},D={code:d,a:E,...R},f=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:e}=this.props;e(t)}render(){let{hasError:t}=this.state,{children:e}=this.props;return t?null:e}},B=class{constructor(){this.render=async(t,e,r)=>{let s={...D,...e==null?void 0:e.components};return new Promise((m,u)=>{h(()=>import("./index-a1de4f26.js"),["./index-a1de4f26.js","./index-b1123588.js","./index-000f4d66.js","./iframe-8f8d736c.js","./_commonjsHelpers-725317a4.js","./index-d475d2ea.js","./index-d37d4223.js","./index-c45868c5.js","./index-356e4a49.js"],import.meta.url).then(({MDXProvider:p})=>_(o.createElement(f,{showException:u,key:Math.random()},o.createElement(p,{components:s},o.createElement(x,{context:t,docsParameter:e}))),r)).then(m)})},this.unmount=t=>{v(t)}}};export{B as DocsRenderer,D as defaultComponents};
//# sourceMappingURL=DocsRenderer-EYKKDMVH-2677056f.js.map
