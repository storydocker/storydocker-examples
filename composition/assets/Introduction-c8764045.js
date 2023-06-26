import{r as c,M as f}from"./index-9ca5c7fb.js";import{u as m}from"./index-e11c3550.js";import"./iframe-8b386109.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";var d={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=c,h=Symbol.for("react.element"),u=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,k=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function x(r,t,p){var o,i={},s=null,a=null;p!==void 0&&(s=""+p),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(o in t)b.call(t,o)&&!y.hasOwnProperty(o)&&(i[o]=t[o]);if(r&&r.defaultProps)for(o in t=r.defaultProps,t)i[o]===void 0&&(i[o]=t[o]);return{$$typeof:h,type:r,key:s,ref:a,props:i,_owner:k.current}}n.Fragment=u;n.jsx=x;n.jsxs=x;d.exports=n;var e=d.exports;function l(r){const t=Object.assign({h1:"h1",p:"p"},m(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"Composed Storybook"}),`
`,e.jsx("style",{children:`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 700;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span,
    .link-item p {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `}),`
`,e.jsx(t.h1,{id:"a-composed-storybook",children:"A Composed Storybook"}),`
`,e.jsx(t.p,{children:"This is a composition Storybook which contains examples of vite-based applications with Storybook installed."})]})}function R(r={}){const{wrapper:t}=Object.assign({},m(),r.components);return t?e.jsx(t,Object.assign({},r,{children:e.jsx(l,r)})):l(r)}export{R as default};
//# sourceMappingURL=Introduction-c8764045.js.map
