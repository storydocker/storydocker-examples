const o=`<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width">
		<meta name="generator" content="Astro v2.6.3">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
	<link rel="stylesheet" href="/storydocker-examples/astro-framework-multiple/_astro/index.e9c2bc16.css" /></head>
	<body>
		<main>
			<style>astro-island,astro-slot,astro-static-slot{display:contents}</style><script>(()=>{var r=(s,c,i)=>{let o=async()=>{await(await s())()},n=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting){n.disconnect(),o();break}});for(let e=0;e<i.children.length;e++){let t=i.children[e];n.observe(t)}};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event("astro:visible"));})();;(()=>{var c;{let d={0:t=>t,1:t=>JSON.parse(t,o),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(JSON.parse(t,o)),5:t=>new Set(JSON.parse(t,o)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(JSON.parse(t)),9:t=>new Uint16Array(JSON.parse(t)),10:t=>new Uint32Array(JSON.parse(t))},o=(t,r)=>{if(t===""||!Array.isArray(r))return r;let[e,n]=r;return e in d?d[e](n):void 0};customElements.get("astro-island")||customElements.define("astro-island",(c=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=()=>{var l;if(!this.hydrator||!this.isConnected||(l=this.parentElement)!=null&&l.closest("astro-island[ssr]"))return;let r=this.querySelectorAll("astro-slot"),e={},n=this.querySelectorAll("template[data-astro-template]");for(let s of n){let i=s.closest(this.tagName);!i||!i.isSameNode(this)||(e[s.getAttribute("data-astro-template")||"default"]=s.innerHTML,s.remove())}for(let s of r){let i=s.closest(this.tagName);!i||!i.isSameNode(this)||(e[s.getAttribute("name")||"default"]=s.innerHTML)}let a=this.hasAttribute("props")?JSON.parse(this.getAttribute("props"),o):{};this.hydrator(this)(this.Component,a,e,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),window.removeEventListener("astro:hydrate",this.hydrate),window.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((r,e)=>{e.disconnect(),setTimeout(()=>this.childrenConnectedCallback(),0)}).observe(this,{childList:!0})}async childrenConnectedCallback(){window.addEventListener("astro:hydrate",this.hydrate);let r=this.getAttribute("before-hydration-url");r&&await import(r),this.start()}start(){let r=JSON.parse(this.getAttribute("opts")),e=this.getAttribute("client");if(Astro[e]===void 0){window.addEventListener(\`astro:\${e}\`,()=>this.start(),{once:!0});return}Astro[e](async()=>{let n=this.getAttribute("renderer-url"),[a,{default:l}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),s=this.getAttribute("component-export")||"default";if(!s.includes("."))this.Component=a[s];else{this.Component=a;for(let i of s.split("."))this.Component=this.Component[i]}return this.hydrator=l,this.hydrate},r,this)}attributeChangedCallback(){this.hydrate()}},c.observedAttributes=["props"],c))}})();<\/script><astro-island uid="2tyEAi" prefix="r0" component-url="/storydocker-examples/astro-framework-multiple/_astro/ReactCounter.fe965db1.js" component-export="Counter" renderer-url="/storydocker-examples/astro-framework-multiple/_astro/client.2ce19805.js" props="{}" ssr="" client="visible" opts="{&quot;name&quot;:&quot;react.Counter&quot;,&quot;value&quot;:true}" await-children=""><div class="counter"><button>-</button><pre>0</pre><button>+</button></div><div class="counter-message"><astro-slot>
				<h1>Hello from React!</h1>
			</astro-slot></div></astro-island>

			<astro-island uid="Z1RIMJx" component-url="/storydocker-examples/astro-framework-multiple/_astro/PreactCounter.9c9fe1b8.js" component-export="PreactCounter" renderer-url="/storydocker-examples/astro-framework-multiple/_astro/client.56e74c33.js" props="{}" ssr="" client="visible" opts="{&quot;name&quot;:&quot;PreactCounter&quot;,&quot;value&quot;:true}" await-children=""><div class="counter"><button>-</button><pre>0</pre><button>+</button></div><div class="counter-message"><astro-slot>
				<h1>Hello from Preact!</h1>
			</astro-slot></div></astro-island>

			<astro-island uid="MpT7J" component-url="/storydocker-examples/astro-framework-multiple/_astro/VueCounter.cdb9d81d.js" component-export="default" renderer-url="/storydocker-examples/astro-framework-multiple/_astro/client.ebd8d773.js" props="{}" ssr="" client="visible" opts="{&quot;name&quot;:&quot;VueCounter&quot;,&quot;value&quot;:true}" await-children=""><!--[--><div class="counter"><button>-</button><pre>0</pre><button>+</button></div><div class="counter-message"><!--[--><astro-slot>
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
//# sourceMappingURL=Astro.stories-30c5f7eb.js.map
