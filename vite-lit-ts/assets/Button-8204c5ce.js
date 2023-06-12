import{T as a,x as c}from"./lit-element-a8d9a028.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},m=A=>(...e)=>({_$litDirective$:A,values:e});let d=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,t){this._$Ct=e,this._$AM=n,this._$Ci=t}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i="important",p=" !"+i,h=m(class extends d{constructor(A){var e;if(super(A),A.type!==u.ATTRIBUTE||A.name!=="style"||((e=A.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(A){return Object.keys(A).reduce((e,n)=>{const t=A[n];return t==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${t};`},"")}update(A,[e]){const{style:n}=A.element;if(this.ut===void 0){this.ut=new Set;for(const t in e)this.ut.add(t);return this.render(e)}this.ut.forEach(t=>{e[t]==null&&(this.ut.delete(t),t.includes("-")?n.removeProperty(t):n[t]="")});for(const t in e){const o=e[t];if(o!=null){this.ut.add(t);const s=typeof o=="string"&&o.endsWith(p);t.includes("-")||s?n.setProperty(t,s?o.slice(0,-11):o,s?i:""):n[t]=o}}return a}});function r(){var A="/home/runner/work/storydocker-examples/storydocker-examples/examples/vite-lit-ts/src/stories/Button.ts",e="7834a5c22d36956f3ff86f9738eeac80a89e891b",n=window,t="__coverage__",o={path:"/home/runner/work/storydocker-examples/storydocker-examples/examples/vite-lit-ts/src/stories/Button.ts",statementMap:{0:{start:{line:4,column:22},end:{line:16,column:1}},1:{start:{line:5,column:15},end:{line:5,column:84}},2:{start:{line:6,column:2},end:{line:15,column:4}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:4,column:22},end:{line:4,column:23}},loc:{start:{line:4,column:78},end:{line:16,column:1}},line:4}},branchMap:{0:{loc:{start:{line:5,column:15},end:{line:5,column:84}},type:"cond-expr",locations:[{start:{line:5,column:25},end:{line:5,column:52}},{start:{line:5,column:55},end:{line:5,column:84}}],line:5},1:{loc:{start:{line:9,column:56},end:{line:9,column:72}},type:"binary-expr",locations:[{start:{line:9,column:56},end:{line:9,column:60}},{start:{line:9,column:64},end:{line:9,column:72}}],line:9}},s:{0:0,1:0,2:0},f:{0:0},b:{0:[0,0],1:[0,0]},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/storydocker-examples/storydocker-examples/examples/vite-lit-ts/src/stories/Button.ts"],names:[],mappings:"AAAA,SAAS,YAAY;AACrB,SAAS,gBAAgB;AACzB,OAAO;AA2BA,aAAM,SAAS,CAAC,EAAE,SAAS,iBAAiB,MAAM,OAAO,QAAQ,MAAmB;AACzF,QAAM,OAAO,UAAU,8BAA8B;AAErD,SAAO;AAAA;AAAA;AAAA,cAGK,CAAC,oBAAoB,qBAAqB,QAAQ,YAAY,IAAI,EAAE,KAAK,GAAG;AAAA,cAC5E,SAAS,EAAE,gBAAgB,CAAC;AAAA,eAC3B;AAAA;AAAA,QAEP;AAAA;AAAA;AAGR;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"7834a5c22d36956f3ff86f9738eeac80a89e891b"},s=n[t]||(n[t]={});(!s[A]||s[A].hash!==e)&&(s[A]=o);var l=s[A];return r=function(){return l},l}r();r().s[0]++;const f=({primary:A,backgroundColor:e,size:n,label:t,onClick:o})=>{r().f[0]++;const s=(r().s[1]++,A?(r().b[0][0]++,"storybook-button--primary"):(r().b[0][1]++,"storybook-button--secondary"));return r().s[2]++,c`
    <button
      type="button"
      class=${["storybook-button",`storybook-button--${r().b[1][0]++,n||(r().b[1][1]++,"medium")}`,s].join(" ")}
      style=${h({backgroundColor:e})}
      @click=${o}
    >
      ${t}
    </button>
  `};export{f as B};
//# sourceMappingURL=Button-8204c5ce.js.map
