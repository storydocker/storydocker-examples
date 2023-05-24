const o=`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width">
		<meta name="generator" content="Astro v2.4.5">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
	<link rel="stylesheet" href="/storydocker-examples/astro-framework-multiple/_astro/index.e9c2bc16.css" /></head>
	<body>
		<main>
			<style>astro-island,astro-slot{display:contents}</style><script>(self.Astro=self.Astro||{}).visible=(s,c,n)=>{const r=async()=>{await(await s())()};let i=new IntersectionObserver(e=>{for(const t of e)if(t.isIntersecting){i.disconnect(),r();break}});for(let e=0;e<n.children.length;e++){const t=n.children[e];i.observe(t)}},window.dispatchEvent(new Event("astro:visible"));var l;{const c={0:t=>t,1:t=>JSON.parse(t,o),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(JSON.parse(t,o)),5:t=>new Set(JSON.parse(t,o)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(JSON.parse(t)),9:t=>new Uint16Array(JSON.parse(t)),10:t=>new Uint32Array(JSON.parse(t))},o=(t,s)=>{if(t===""||!Array.isArray(s))return s;const[e,n]=s;return e in c?c[e](n):void 0};customElements.get("astro-island")||customElements.define("astro-island",(l=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=()=>{if(!this.hydrator||this.parentElement&&this.parentElement.closest("astro-island[ssr]"))return;const s=this.querySelectorAll("astro-slot"),e={},n=this.querySelectorAll("template[data-astro-template]");for(const r of n){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(const r of s){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("name")||"default"]=r.innerHTML)}const a=this.hasAttribute("props")?JSON.parse(this.getAttribute("props"),o):{};this.hydrator(this)(this.Component,a,e,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),window.removeEventListener("astro:hydrate",this.hydrate),window.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((s,e)=>{e.disconnect(),this.childrenConnectedCallback()}).observe(this,{childList:!0})}async childrenConnectedCallback(){window.addEventListener("astro:hydrate",this.hydrate);let s=this.getAttribute("before-hydration-url");s&&await import(s),this.start()}start(){const s=JSON.parse(this.getAttribute("opts")),e=this.getAttribute("client");if(Astro[e]===void 0){window.addEventListener(\`astro:\${e}\`,()=>this.start(),{once:!0});return}Astro[e](async()=>{const n=this.getAttribute("renderer-url"),[a,{default:r}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),i=this.getAttribute("component-export")||"default";if(!i.includes("."))this.Component=a[i];else{this.Component=a;for(const d of i.split("."))this.Component=this.Component[d]}return this.hydrator=r,this.hydrate},s,this)}attributeChangedCallback(){this.hydrator&&this.hydrate()}},l.observedAttributes=["props"],l))}<\/script><astro-island uid="2tyEAi" prefix="r0" component-url="/storydocker-examples/astro-framework-multiple/_astro/ReactCounter.fe965db1.js" component-export="Counter" renderer-url="/storydocker-examples/astro-framework-multiple/_astro/client.5dccb351.js" props="{}" ssr="" client="visible" opts="{&quot;name&quot;:&quot;react.Counter&quot;,&quot;value&quot;:true}" await-children=""><div class="counter"><button>-</button><pre>0</pre><button>+</button></div><div class="counter-message"><astro-slot>
				<h1>Hello from React!</h1>
			</astro-slot></div></astro-island>

			<astro-island uid="Z1RIMJx" component-url="/storydocker-examples/astro-framework-multiple/_astro/PreactCounter.60dc5762.js" component-export="PreactCounter" renderer-url="/storydocker-examples/astro-framework-multiple/_astro/client.575bb67f.js" props="{}" ssr="" client="visible" opts="{&quot;name&quot;:&quot;PreactCounter&quot;,&quot;value&quot;:true}" await-children=""><div class="counter"><button>-</button><pre>0</pre><button>+</button></div><div class="counter-message"><astro-slot>
				<h1>Hello from Preact!</h1>
			</astro-slot></div></astro-island>

			<astro-island uid="MpT7J" component-url="/storydocker-examples/astro-framework-multiple/_astro/VueCounter.da8b7b23.js" component-export="default" renderer-url="/storydocker-examples/astro-framework-multiple/_astro/client.3931103e.js" props="{}" ssr="" client="visible" opts="{&quot;name&quot;:&quot;VueCounter&quot;,&quot;value&quot;:true}" await-children=""><!--[--><div class="counter"><button>-</button><pre>0</pre><button>+</button></div><div class="counter-message"><!--[--><astro-slot>
				<h1>Hello from Vue!</h1>
			</astro-slot><!--]--></div><!--]--></astro-island>

			<astro-island uid="Z1mYKWA" component-url="/storydocker-examples/astro-framework-multiple/_astro/SvelteCounter.92a3e870.js" component-export="default" renderer-url="/storydocker-examples/astro-framework-multiple/_astro/client.c4e17359.js" props="{}" ssr="" client="visible" opts="{&quot;name&quot;:&quot;SvelteCounter&quot;,&quot;value&quot;:true}" await-children="">


<div class="counter"><button>-</button>
	<pre>0</pre>
	<button>+</button></div>
<div class="counter-message"><astro-slot>
				<h1>Hello from Svelte!</h1>
			</astro-slot></div></astro-island>
		</main>
	</body></html>`,n={title:"Parent/Astro",render:()=>o},t={};var e,r,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const a=["Dist"];export{t as Dist,a as __namedExportsOrder,n as default};
//# sourceMappingURL=Astro.stories-08c61243.js.map
