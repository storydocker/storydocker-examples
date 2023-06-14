import{r as l}from"./index.ed373d49.js";var p={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=l,f=Symbol.for("react.element"),_=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,m=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function a(o,e,c){var r,s={},t=null,u=null;c!==void 0&&(t=""+c),e.key!==void 0&&(t=""+e.key),e.ref!==void 0&&(u=e.ref);for(r in e)x.call(e,r)&&!j.hasOwnProperty(r)&&(s[r]=e[r]);if(o&&o.defaultProps)for(r in e=o.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:f,type:o,key:t,ref:u,props:s,_owner:m.current}}i.Fragment=_;i.jsx=a;i.jsxs=a;p.exports=i;var n=p.exports;function y({children:o}){const[e,c]=l.useState(0),r=()=>c(t=>t+1),s=()=>c(t=>t-1);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"counter",children:[n.jsx("button",{onClick:s,children:"-"}),n.jsx("pre",{children:e}),n.jsx("button",{onClick:r,children:"+"})]}),n.jsx("div",{className:"counter-message",children:o})]})}export{y as ReactCounter};
