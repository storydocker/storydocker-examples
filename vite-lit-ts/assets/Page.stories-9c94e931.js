import{x as u}from"./lit-element-37a63c41.js";import{H as v,L as f,a as b}from"./Header.stories-fe056a10.js";import"./Button-11976751.js";function e(){var A="/home/runner/work/storydocker-examples/storydocker-examples/examples/vite-lit-ts/src/stories/Page.ts",n="5632cf7ea8285b4e2bee2336edb27aafae204352",o=window,r="__coverage__",h={path:"/home/runner/work/storydocker-examples/storydocker-examples/examples/vite-lit-ts/src/stories/Page.ts",statementMap:{0:{start:{line:4,column:20},end:{line:60,column:1}},1:{start:{line:4,column:70},end:{line:60,column:1}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:4,column:20},end:{line:4,column:21}},loc:{start:{line:4,column:70},end:{line:60,column:1}},line:4}},branchMap:{},s:{0:0,1:0},f:{0:0},b:{},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/storydocker-examples/storydocker-examples/examples/vite-lit-ts/src/stories/Page.ts"],names:[],mappings:"AAAA,SAAS,YAAY;AACrB,SAAS,cAAc;AACvB,OAAO;AAaA,aAAM,OAAO,CAAC,EAAE,MAAM,SAAS,UAAU,gBAAgB,MAAiB;AAAA;AAAA,MAE3E,OAAO;AAAA,EACP;AAAA,EACA;AAAA,EACA;AAAA,EACA;AACF,CAAC,CAAC;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;AAAA;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"5632cf7ea8285b4e2bee2336edb27aafae204352"},a=o[r]||(o[r]={});(!a[A]||a[A].hash!==n)&&(a[A]=h);var i=a[A];return e=function(){return i},i}e();e().s[0]++;const k=({user:A,onLogin:n,onLogout:o,onCreateAccount:r})=>(e().f[0]++,e().s[1]++,u`
  <article>
    ${v({user:A,onLogin:n,onLogout:o,onCreateAccount:r})}

    <section>
      <h2>Pages in Storybook</h2>
      <p>
        We recommend building UIs with a
        <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
          <strong>component-driven</strong> </a
        >process starting with atomic components and ending with pages.
      </p>
      <p>
        Render pages with mock data. This makes it easy to build and review page states without
        needing to navigate to them in your app. Here are some handy patterns for managing page data
        in Storybook:
      </p>
      <ul>
        <li>
          Use a higher-level connected component. Storybook helps you compose such data from the
          "args" of child component stories
        </li>
        <li>
          Assemble data in the page component from your services. You can mock these services out
          using Storybook.
        </li>
      </ul>
      <p>
        Get a guided tutorial on component-driven development at
        <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
          Storybook tutorials
        </a>
        . Read more in the
        <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer"> docs </a>
        .
      </p>
      <div class="tip-wrapper">
        <span class="tip">Tip</span> Adjust the width of the canvas with the
        <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
              id="a"
              fill="#999"
            />
          </g>
        </svg>
        Viewports addon in the toolbar
      </div>
    </section>
  </article>
`),x={title:"Example/Page",render:A=>k(A)},t={args:{...f.args}},s={args:{...b.args}};var c,g,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    // More on composing args: https://storybook.js.org/docs/web-components/writing-stories/args#args-composition
    ...HeaderStories.LoggedIn.args
  }
}`,...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var p,d,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...HeaderStories.LoggedOut.args
  }
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const C=["LoggedIn","LoggedOut"];export{t as LoggedIn,s as LoggedOut,C as __namedExportsOrder,x as default};
//# sourceMappingURL=Page.stories-9c94e931.js.map
