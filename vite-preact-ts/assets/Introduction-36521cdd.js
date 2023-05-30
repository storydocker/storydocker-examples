import{M as i}from"./index-fb855ca1.js";import{o as e}from"./jsxRuntime.module-7a4f4e3c.js";import{u as o}from"./index-bcd5eb95.js";import{k as s}from"./preact.module-6e196b66.js";import"./iframe-343e2d91.js";import"../sb-preview/runtime.js";import"./hooks.module-6340cc51.js";import"./index-d475d2ea.js";import"./_commonjsHelpers-87174ba5.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const a=""+new URL("code-brackets-9ef6443e.svg",import.meta.url).href,l=""+new URL("colors-ac9401f3.svg",import.meta.url).href,c=""+new URL("comments-f15a6837.svg",import.meta.url).href,d=""+new URL("direction-94a9917f.svg",import.meta.url).href,p=""+new URL("flow-275142c6.svg",import.meta.url).href,m=""+new URL("plugin-57148314.svg",import.meta.url).href,h=""+new URL("repo-fb4ece47.svg",import.meta.url).href,g=""+new URL("stackalt-2ad81543.svg",import.meta.url).href;function n(r){const t=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a"},o(),r.components);return e(s,{children:[e(i,{title:"Example/Introduction"}),`
`,e("style",{children:`
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
`,e(t.h1,{id:"welcome-to-storybook",children:"Welcome to Storybook"}),`
`,e(t.p,{children:[`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,e(t.strong,{children:"stories"})," to revisit during development, testing, or QA."]}),`
`,e(t.p,{children:[`Browse example stories now by navigating to them in the sidebar.
View their code in the `,e(t.code,{children:"stories"}),` directory to learn how they work.
We recommend building UIs with a `,e(t.a,{href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer",children:e(t.strong,{children:"component-driven"})})," process starting with atomic components and ending with pages."]}),`
`,e("div",{className:"subheading",children:"Configure"}),`
`,e("div",{className:"link-list",children:[e("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank",children:[e("img",{src:m,alt:"plugin"}),e("span",{children:e(t.p,{children:[e("strong",{children:"Presets for popular tools"}),`
Easy setup for TypeScript, SCSS and more.`]})})]}),e("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank",children:[e("img",{src:g,alt:"Build"}),e("span",{children:e(t.p,{children:[e("strong",{children:"Build configuration"}),`
How to customize webpack and Babel`]})})]}),e("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank",children:[e("img",{src:l,alt:"colors"}),e("span",{children:e(t.p,{children:[e("strong",{children:"Styling"}),`
How to load and configure CSS libraries`]})})]}),e("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank",children:[e("img",{src:p,alt:"flow"}),e("span",{children:e(t.p,{children:[e("strong",{children:"Data"}),`
Providers and mocking for data libraries`]})})]})]}),`
`,e("div",{className:"subheading",children:"Learn"}),`
`,e("div",{className:"link-list",children:[e("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank",children:[e("img",{src:h,alt:"repo"}),e("span",{children:e(t.p,{children:[e("strong",{children:"Storybook documentation"}),`
Configure, customize, and extend`]})})]}),e("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank",children:[e("img",{src:d,alt:"direction"}),e("span",{children:e(t.p,{children:[e("strong",{children:"In-depth guides"}),`
Best practices from leading teams`]})})]}),e("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank",children:[e("img",{src:a,alt:"code"}),e("span",{children:e(t.p,{children:[e("strong",{children:"GitHub project"}),`
View the source and add issues`]})})]}),e("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank",children:[e("img",{src:c,alt:"comments"}),e("span",{children:e(t.p,{children:[e("strong",{children:"Discord chat"}),`
Chat with maintainers and the community`]})})]})]}),`
`,e("div",{className:"tip-wrapper",children:e(t.p,{children:[e("span",{className:"tip",children:"Tip"}),"Edit the Markdown in"," ",`
`,e("code",{children:"stories/Introduction.stories.mdx"})]})})]})}function j(r={}){const{wrapper:t}=Object.assign({},o(),r.components);return t?e(t,Object.assign({},r,{children:e(n,r)})):n(r)}export{j as default};
//# sourceMappingURL=Introduction-36521cdd.js.map
