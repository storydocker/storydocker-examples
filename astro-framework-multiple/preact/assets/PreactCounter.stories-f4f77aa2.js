import{h as f}from"./hooks.module-6340cc51.js";import{l as C,k as M}from"./preact.module-6e196b66.js";var v=0;function c(e,t,l,a,s,n){var o,r,u={};for(r in t)r=="ref"?o=t[r]:u[r]=t[r];var m={type:e,props:u,key:l,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--v,__source:s,__self:n};if(typeof e=="function"&&(o=e.defaultProps))for(r in o)u[r]===void 0&&(u[r]=o[r]);return C.vnode&&C.vnode(m),m}function A(){var e="/home/runner/work/storydocker-examples/storydocker-examples/experimental/astro-framework-multiple/src/components/PreactCounter.tsx",t="629b1f84ccdbe4604a4948ec13eaed49dee4be09",l=window,a="__coverage__",s={path:"/home/runner/work/storydocker-examples/storydocker-examples/experimental/astro-framework-multiple/src/components/PreactCounter.tsx",statementMap:{0:{start:{line:8,column:28},end:{line:8,column:39}},1:{start:{line:9,column:14},end:{line:9,column:42}},2:{start:{line:9,column:20},end:{line:9,column:42}},3:{start:{line:9,column:36},end:{line:9,column:41}},4:{start:{line:10,column:19},end:{line:10,column:47}},5:{start:{line:10,column:25},end:{line:10,column:47}},6:{start:{line:10,column:41},end:{line:10,column:46}},7:{start:{line:11,column:2},end:{line:27,column:5}}},fnMap:{0:{name:"PreactCounter",decl:{start:{line:5,column:16},end:{line:5,column:29}},loc:{start:{line:7,column:3},end:{line:28,column:1}},line:7},1:{name:"(anonymous_1)",decl:{start:{line:9,column:14},end:{line:9,column:15}},loc:{start:{line:9,column:20},end:{line:9,column:42}},line:9},2:{name:"(anonymous_2)",decl:{start:{line:9,column:29},end:{line:9,column:30}},loc:{start:{line:9,column:36},end:{line:9,column:41}},line:9},3:{name:"(anonymous_3)",decl:{start:{line:10,column:19},end:{line:10,column:20}},loc:{start:{line:10,column:25},end:{line:10,column:47}},line:10},4:{name:"(anonymous_4)",decl:{start:{line:10,column:34},end:{line:10,column:35}},loc:{start:{line:10,column:41},end:{line:10,column:46}},line:10}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},f:{0:0,1:0,2:0,3:0,4:0},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/storydocker-examples/storydocker-examples/experimental/astro-framework-multiple/src/components/PreactCounter.tsx"],names:["useState","jsx","_jsx","jsxs","_jsxs","Fragment","_Fragment","PreactCounter","children","count","setCount","add","i","subtract","class","onClick"],mappings:"AAEA,SAASA,gBAAgB;AAEzB,SAAAC,OAAAC,YAAA;AAAA,SAAAC,QAAAC,aAAA;AAAA,SAAAC,YAAAC,iBAAA;AACO,gBAASC,cAAc;AAAA,EAAEC;AAAS,GAAG;AAC3C,QAAM,CAACC,OAAOC,QAAQ,IAAIV,SAAS,CAAC;AACpC,QAAMW,MAAMA,MAAMD,SAAUE,OAAMA,IAAI,CAAC;AACvC,QAAMC,WAAWA,MAAMH,SAAUE,OAAMA,IAAI,CAAC;AAE5C,SACCR,MAAAE,WAAA;AAAA,IAAAE,WACCJ,MAAA,OAAA;AAAA,MAAKU,OAAM;AAAA,MAASN,WACnBN,KAAA,UAAA;AAAA,QAAQa,SAASF;AAAAA,QAASL,UAAC;AAAA,MAAC,CAAQ,GACpCN,KAAA,OAAA;AAAA,QAAAM,UAAMC;AAAAA,MAAK,CAAM,GACjBP,KAAA,UAAA;AAAA,QAAQa,SAASJ;AAAAA,QAAIH,UAAC;AAAA,MAAC,CAAQ,CAAC;AAAA,IAAA,CAC5B,GACLN,KAAA,OAAA;AAAA,MAAKY,OAAM;AAAA,MAAiBN;AAAAA,IAAU,CAAM,CAAC;AAAA,EAAA,CAC5C;AAEJ;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"629b1f84ccdbe4604a4948ec13eaed49dee4be09"},n=l[a]||(l[a]={});(!n[e]||n[e].hash!==t)&&(n[e]=s);var o=n[e];return A=function(){return o},o}A();function h({children:e}){A().f[0]++;const[t,l]=(A().s[0]++,f(0));A().s[1]++;const a=()=>(A().f[1]++,A().s[2]++,l(n=>(A().f[2]++,A().s[3]++,n+1)));A().s[4]++;const s=()=>(A().f[3]++,A().s[5]++,l(n=>(A().f[4]++,A().s[6]++,n-1)));return A().s[7]++,c(M,{children:[c("div",{class:"counter",children:[c("button",{onClick:s,children:"-"}),c("pre",{children:t}),c("button",{onClick:a,children:"+"})]}),c("div",{class:"counter-message",children:e})]})}const x={title:"Preact",component:h},i={args:{children:"Preact Counter"}};var d,p,_;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Preact Counter'
  }
}`,...(_=(p=i.parameters)==null?void 0:p.docs)==null?void 0:_.source}}};const b=["Preact"];export{i as Preact,b as __namedExportsOrder,x as default};
//# sourceMappingURL=PreactCounter.stories-f4f77aa2.js.map