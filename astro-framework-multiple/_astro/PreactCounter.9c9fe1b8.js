import{h as f}from"./hooks.module.a845df0c.js";import{l as d,k as a}from"./preact.module.f1575aff.js";var v=0;function r(o,t,l,i,_,c){var e,n,u={};for(n in t)n=="ref"?e=t[n]:u[n]=t[n];var s={type:o,props:u,key:l,ref:e,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--v,__source:_,__self:c};if(typeof o=="function"&&(e=o.defaultProps))for(n in e)u[n]===void 0&&(u[n]=e[n]);return d.vnode&&d.vnode(s),s}function b({children:o}){const[t,l]=f(0),i=()=>l(c=>c+1);return r(a,{children:[r("div",{class:"counter",children:[r("button",{onClick:()=>l(c=>c-1),children:"-"}),r("pre",{children:t}),r("button",{onClick:i,children:"+"})]}),r("div",{class:"counter-message",children:o})]})}export{b as PreactCounter};