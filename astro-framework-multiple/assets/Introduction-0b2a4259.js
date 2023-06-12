import{r as c,M as f,S as h}from"./index-cbf7e502.js";import{u as m}from"./index-60212978.js";import"./iframe-19e8c536.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-c45868c5.js";import"./index-356e4a49.js";var d={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=c,u=Symbol.for("react.element"),k=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,y=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function x(t,r,p){var o,i={},s=null,a=null;p!==void 0&&(s=""+p),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(a=r.ref);for(o in r)b.call(r,o)&&!w.hasOwnProperty(o)&&(i[o]=r[o]);if(t&&t.defaultProps)for(o in r=t.defaultProps,r)i[o]===void 0&&(i[o]=r[o]);return{$$typeof:u,type:t,key:s,ref:a,props:i,_owner:y.current}}n.Fragment=k;n.jsx=x;n.jsxs=x;d.exports=n;var e=d.exports;function l(t){const r=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2"},m(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"Parent/Introduction"}),`
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
`,e.jsx(r.h1,{id:"multi-framework-composition-storybook-example",children:"Multi-framework composition Storybook example"}),`
`,e.jsxs(r.p,{children:["This example shows how to use Storybook to compose a UI from multiple frameworks. See ",e.jsx(r.a,{href:"https://github.com/storydocker/storydocker-examples/blob/main/experimental/astro-framework-multiple",target:"_blank",rel:"nofollow noopener noreferrer",children:"storydocker-examples/experimental/astro-framework-multiple"})," for the source code."]}),`
`,e.jsx(r.h2,{id:"astro",children:"Astro"}),`
`,e.jsx(r.p,{children:"Output of the Astro story, which imports the Astro distribution HTML."}),`
`,e.jsx(h,{id:"parent-astro--dist"})]})}function F(t={}){const{wrapper:r}=Object.assign({},m(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(l,t)})):l(t)}export{F as default};
//# sourceMappingURL=Introduction-0b2a4259.js.map
