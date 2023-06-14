import{C as c,i as Ee,e as $,W as se,T as ye,F as we,I as $e,g as Ce}from"./DocsRenderer-EYKKDMVH-4e6c99a7.js";import{a as w,F as U,p as T,h as H,T as L,y as ke,E as Ne,i as Y}from"./uniq-2be76c37.js";import{a as x}from"./index-1e878d04.js";import{a as Ie}from"./_commonjsHelpers-87174ba5.js";import"./iframe-96ea1de2.js";import"../sb-preview/runtime.js";import"./preact.module-6e196b66.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function k(){return(k=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function J(e,r){if(e==null)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r.indexOf(t=i[n])>=0||(a[t]=e[t]);return a}function V(e){var r=w(e),t=w(function(n){r.current&&r.current(n)});return r.current=e,t.current}var M=function(e,r,t){return r===void 0&&(r=0),t===void 0&&(t=1),e>t?t:e<r?r:e},R=function(e){return"touches"in e},A=function(e){return e&&e.ownerDocument.defaultView||self},re=function(e,r,t){var n=e.getBoundingClientRect(),a=R(r)?function(i,l){for(var o=0;o<i.length;o++)if(i[o].identifier===l)return i[o];return i[0]}(r.touches,t):r;return{left:M((a.pageX-(n.left+A(e).pageXOffset))/n.width),top:M((a.pageY-(n.top+A(e).pageYOffset))/n.height)}},te=function(e){!R(e)&&e.preventDefault()},Q=c.memo(function(e){var r=e.onMove,t=e.onKey,n=J(e,["onMove","onKey"]),a=w(null),i=V(r),l=V(t),o=w(null),u=w(!1),s=U(function(){var _=function(v){te(v),(R(v)?v.touches.length>0:v.buttons>0)&&a.current?i(re(a.current,v,o.current)):E(!1)},N=function(){return E(!1)};function E(v){var h=u.current,b=A(a.current),C=v?b.addEventListener:b.removeEventListener;C(h?"touchmove":"mousemove",_),C(h?"touchend":"mouseup",N)}return[function(v){var h=v.nativeEvent,b=a.current;if(b&&(te(h),!function(F,O){return O&&!R(F)}(h,u.current)&&b)){if(R(h)){u.current=!0;var C=h.changedTouches||[];C.length&&(o.current=C[0].identifier)}b.focus(),i(re(b,h,o.current)),E(!0)}},function(v){var h=v.which||v.keyCode;h<37||h>40||(v.preventDefault(),l({left:h===39?.05:h===37?-.05:0,top:h===40?.05:h===38?-.05:0}))},E]},[l,i]),g=s[0],d=s[1],f=s[2];return T(function(){return f},[f]),c.createElement("div",k({},n,{onTouchStart:g,onMouseDown:g,className:"react-colorful__interactive",ref:a,onKeyDown:d,tabIndex:0,role:"slider"}))}),P=function(e){return e.filter(Boolean).join(" ")},Z=function(e){var r=e.color,t=e.left,n=e.top,a=n===void 0?.5:n,i=P(["react-colorful__pointer",e.className]);return c.createElement("div",{className:i,style:{top:100*a+"%",left:100*t+"%"}},c.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))},p=function(e,r,t){return r===void 0&&(r=0),t===void 0&&(t=Math.pow(10,r)),Math.round(t*e)/t},Te={grad:.9,turn:360,rad:360/(2*Math.PI)},Me=function(e){return de(G(e))},G=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?p(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?p(parseInt(e.substring(6,8),16)/255,2):1}},Oe=function(e,r){return r===void 0&&(r="deg"),Number(e)*(Te[r]||1)},Se=function(e){var r=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?He({h:Oe(r[1],r[2]),s:Number(r[3]),l:Number(r[4]),a:r[5]===void 0?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},He=function(e){var r=e.s,t=e.l;return{h:e.h,s:(r*=(t<50?t:100-t)/100)>0?2*r/(t+r)*100:0,v:t+r,a:e.a}},Re=function(e){return Pe(fe(e))},ce=function(e){var r=e.s,t=e.v,n=e.a,a=(200-r)*t/100;return{h:p(e.h),s:p(a>0&&a<200?r*t/100/(a<=100?a:200-a)*100:0),l:p(a/2),a:p(n,2)}},K=function(e){var r=ce(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},B=function(e){var r=ce(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},fe=function(e){var r=e.h,t=e.s,n=e.v,a=e.a;r=r/360*6,t/=100,n/=100;var i=Math.floor(r),l=n*(1-t),o=n*(1-(r-i)*t),u=n*(1-(1-r+i)*t),s=i%6;return{r:p(255*[n,o,l,l,u,n][s]),g:p(255*[u,n,n,o,l,l][s]),b:p(255*[l,l,u,n,n,o][s]),a:p(a,2)}},Le=function(e){var r=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?de({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:r[7]===void 0?1:Number(r[7])/(r[8]?100:1)}):{h:0,s:0,v:0,a:1}},z=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},Pe=function(e){var r=e.r,t=e.g,n=e.b,a=e.a,i=a<1?z(p(255*a)):"";return"#"+z(r)+z(t)+z(n)+i},de=function(e){var r=e.r,t=e.g,n=e.b,a=e.a,i=Math.max(r,t,n),l=i-Math.min(r,t,n),o=l?i===r?(t-n)/l:i===t?2+(n-r)/l:4+(r-t)/l:0;return{h:p(60*(o<0?o+6:o)),s:p(i?l/i*100:0),v:p(i/255*100),a}},he=c.memo(function(e){var r=e.hue,t=e.onChange,n=P(["react-colorful__hue",e.className]);return c.createElement("div",{className:n},c.createElement(Q,{onMove:function(a){t({h:360*a.left})},onKey:function(a){t({h:M(r+360*a.left,0,360)})},"aria-label":"Hue","aria-valuenow":p(r),"aria-valuemax":"360","aria-valuemin":"0"},c.createElement(Z,{className:"react-colorful__hue-pointer",left:r/360,color:K({h:r,s:100,v:100,a:1})})))}),ge=c.memo(function(e){var r=e.hsva,t=e.onChange,n={backgroundColor:K({h:r.h,s:100,v:100,a:1})};return c.createElement("div",{className:"react-colorful__saturation",style:n},c.createElement(Q,{onMove:function(a){t({s:100*a.left,v:100-100*a.top})},onKey:function(a){t({s:M(r.s+100*a.left,0,100),v:M(r.v-100*a.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+p(r.s)+"%, Brightness "+p(r.v)+"%"},c.createElement(Z,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:K(r)})))}),me=function(e,r){if(e===r)return!0;for(var t in e)if(e[t]!==r[t])return!1;return!0},ve=function(e,r){return e.replace(/\s/g,"")===r.replace(/\s/g,"")},ze=function(e,r){return e.toLowerCase()===r.toLowerCase()||me(G(e),G(r))};function pe(e,r,t){var n=V(t),a=H(function(){return e.toHsva(r)}),i=a[0],l=a[1],o=w({color:r,hsva:i});T(function(){if(!e.equal(r,o.current.color)){var s=e.toHsva(r);o.current={hsva:s,color:r},l(s)}},[r,e]),T(function(){var s;me(i,o.current.hsva)||e.equal(s=e.fromHsva(i),o.current.color)||(o.current={hsva:i,color:s},n(s))},[i,e,n]);var u=L(function(s){l(function(g){return Object.assign({},g,s)})},[]);return[i,u]}var We=typeof window<"u"?ke:T,je=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},ne=new Map,be=function(e){We(function(){var r=e.current?e.current.ownerDocument:document;if(r!==void 0&&!ne.has(r)){var t=r.createElement("style");t.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,ne.set(r,t);var n=je();n&&t.setAttribute("nonce",n),r.head.appendChild(t)}},[])},Be=function(e){var r=e.className,t=e.colorModel,n=e.color,a=n===void 0?t.defaultColor:n,i=e.onChange,l=J(e,["className","colorModel","color","onChange"]),o=w(null);be(o);var u=pe(t,a,i),s=u[0],g=u[1],d=P(["react-colorful",r]);return c.createElement("div",k({},l,{ref:o,className:d}),c.createElement(ge,{hsva:s,onChange:g}),c.createElement(he,{hue:s.h,onChange:g,className:"react-colorful__last-control"}))},Xe={defaultColor:"000",toHsva:Me,fromHsva:function(e){return Re({h:e.h,s:e.s,v:e.v,a:1})},equal:ze},Fe=function(e){return c.createElement(Be,k({},e,{colorModel:Xe}))},De=function(e){var r=e.className,t=e.hsva,n=e.onChange,a={backgroundImage:"linear-gradient(90deg, "+B(Object.assign({},t,{a:0}))+", "+B(Object.assign({},t,{a:1}))+")"},i=P(["react-colorful__alpha",r]),l=p(100*t.a);return c.createElement("div",{className:i},c.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),c.createElement(Q,{onMove:function(o){n({a:o.left})},onKey:function(o){n({a:M(t.a+o.left)})},"aria-label":"Alpha","aria-valuetext":l+"%","aria-valuenow":l,"aria-valuemin":"0","aria-valuemax":"100"},c.createElement(Z,{className:"react-colorful__alpha-pointer",left:t.a,color:B(t)})))},xe=function(e){var r=e.className,t=e.colorModel,n=e.color,a=n===void 0?t.defaultColor:n,i=e.onChange,l=J(e,["className","colorModel","color","onChange"]),o=w(null);be(o);var u=pe(t,a,i),s=u[0],g=u[1],d=P(["react-colorful",r]);return c.createElement("div",k({},l,{ref:o,className:d}),c.createElement(ge,{hsva:s,onChange:g}),c.createElement(he,{hue:s.h,onChange:g}),c.createElement(De,{hsva:s,onChange:g,className:"react-colorful__last-control"}))},Ve={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:Se,fromHsva:B,equal:ve},Ae=function(e){return c.createElement(xe,k({},e,{colorModel:Ve}))},Ge={defaultColor:"rgba(0, 0, 0, 1)",toHsva:Le,fromHsva:function(e){var r=fe(e);return"rgba("+r.r+", "+r.g+", "+r.b+", "+r.a+")"},equal:ve},Ke=function(e){return c.createElement(xe,k({},e,{colorModel:Ge}))},qe=Ne,Ue=function(){return qe.Date.now()},Ye=Ue,Je=/\s/;function Qe(e){for(var r=e.length;r--&&Je.test(e.charAt(r)););return r}var Ze=Qe,er=Ze,rr=/^\s+/;function tr(e){return e&&e.slice(0,er(e)+1).replace(rr,"")}var nr=tr,ar=nr,ae=Y,or=Ee,oe=0/0,ir=/^[-+]0x[0-9a-f]+$/i,lr=/^0b[01]+$/i,ur=/^0o[0-7]+$/i,sr=parseInt;function cr(e){if(typeof e=="number")return e;if(or(e))return oe;if(ae(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=ae(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=ar(e);var t=lr.test(e);return t||ur.test(e)?sr(e.slice(2),t?2:8):ir.test(e)?oe:+e}var fr=cr,dr=Y,D=Ye,ie=fr,hr="Expected a function",gr=Math.max,mr=Math.min;function vr(e,r,t){var n,a,i,l,o,u,s=0,g=!1,d=!1,f=!0;if(typeof e!="function")throw new TypeError(hr);r=ie(r)||0,dr(t)&&(g=!!t.leading,d="maxWait"in t,i=d?gr(ie(t.maxWait)||0,r):i,f="trailing"in t?!!t.trailing:f);function _(m){var y=n,S=a;return n=a=void 0,s=m,l=e.apply(S,y),l}function N(m){return s=m,o=setTimeout(h,r),g?_(m):l}function E(m){var y=m-u,S=m-s,ee=r-y;return d?mr(ee,i-S):ee}function v(m){var y=m-u,S=m-s;return u===void 0||y>=r||y<0||d&&S>=i}function h(){var m=D();if(v(m))return b(m);o=setTimeout(h,E(m))}function b(m){return o=void 0,f&&n?_(m):(n=a=void 0,l)}function C(){o!==void 0&&clearTimeout(o),s=0,n=u=a=o=void 0}function F(){return o===void 0?l:b(D())}function O(){var m=D(),y=v(m);if(n=arguments,a=this,u=m,y){if(o===void 0)return N(u);if(d)return clearTimeout(o),o=setTimeout(h,r),_(u)}return o===void 0&&(o=setTimeout(h,r)),l}return O.cancel=C,O.flush=F,O}var pr=vr,br=pr,xr=Y,_r="Expected a function";function Er(e,r,t){var n=!0,a=!0;if(typeof e!="function")throw new TypeError(_r);return xr(t)&&(n="leading"in t?!!t.leading:n,a="trailing"in t?!!t.trailing:a),br(e,r,{leading:n,maxWait:r,trailing:a})}var yr=Er;const wr=Ie(yr);var $r=$.div({position:"relative",maxWidth:250}),Cr=$(se)({position:"absolute",zIndex:1,top:4,left:4}),kr=$.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),Nr=$(ye)(({theme:e})=>({fontFamily:e.typography.fonts.base})),Ir=$.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),Tr=$.div(({theme:e,active:r})=>({width:16,height:16,boxShadow:r?`${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`:`${e.appBorderColor} 0 0 0 1px inset`,borderRadius:e.appBorderRadius})),Mr=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,le=({value:e,active:r,onClick:t,style:n,...a})=>{let i=`linear-gradient(${e}, ${e}), ${Mr}, linear-gradient(#fff, #fff)`;return c.createElement(Tr,{...a,active:r,onClick:t,style:{...n,backgroundImage:i}})},Or=$(we.Input)(({theme:e})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base})),Sr=$($e)(({theme:e})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color})),_e=(e=>(e.RGB="rgb",e.HSL="hsl",e.HEX="hex",e))(_e||{}),W=Object.values(_e),Hr=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,Rr=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,Lr=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,q=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,Pr=/^\s*#?([0-9a-f]{3})\s*$/i,zr={hex:Fe,rgb:Ke,hsl:Ae},j={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},ue=e=>{let r=e==null?void 0:e.match(Hr);if(!r)return[0,0,0,1];let[,t,n,a,i=1]=r;return[t,n,a,i].map(Number)},I=e=>{if(!e)return;let r=!0;if(Rr.test(e)){let[l,o,u,s]=ue(e),[g,d,f]=x.rgb.hsl([l,o,u])||[0,0,0];return{valid:r,value:e,keyword:x.rgb.keyword([l,o,u]),colorSpace:"rgb",rgb:e,hsl:`hsla(${g}, ${d}%, ${f}%, ${s})`,hex:`#${x.rgb.hex([l,o,u]).toLowerCase()}`}}if(Lr.test(e)){let[l,o,u,s]=ue(e),[g,d,f]=x.hsl.rgb([l,o,u])||[0,0,0];return{valid:r,value:e,keyword:x.hsl.keyword([l,o,u]),colorSpace:"hsl",rgb:`rgba(${g}, ${d}, ${f}, ${s})`,hsl:e,hex:`#${x.hsl.hex([l,o,u]).toLowerCase()}`}}let t=e.replace("#",""),n=x.keyword.rgb(t)||x.hex.rgb(t),a=x.rgb.hsl(n),i=e;if(/[^#a-f0-9]/i.test(e)?i=t:q.test(e)&&(i=`#${t}`),i.startsWith("#"))r=q.test(i);else try{x.keyword.hex(i)}catch{r=!1}return{valid:r,value:i,keyword:x.rgb.keyword(n),colorSpace:"hex",rgb:`rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,hsl:`hsla(${a[0]}, ${a[1]}%, ${a[2]}%, 1)`,hex:i}},Wr=(e,r,t)=>{if(!e||!(r!=null&&r.valid))return j[t];if(t!=="hex")return(r==null?void 0:r[t])||j[t];if(!r.hex.startsWith("#"))try{return`#${x.keyword.hex(r.hex)}`}catch{return j.hex}let n=r.hex.match(Pr);if(!n)return q.test(r.hex)?r.hex:j.hex;let[a,i,l]=n[1].split("");return`#${a}${a}${i}${i}${l}${l}`},jr=(e,r)=>{let[t,n]=H(e||""),[a,i]=H(()=>I(t)),[l,o]=H((a==null?void 0:a.colorSpace)||"hex");T(()=>{let d=e||"",f=I(d);n(d),i(f),o((f==null?void 0:f.colorSpace)||"hex")},[e]);let u=U(()=>Wr(t,a,l).toLowerCase(),[t,a,l]),s=L(d=>{let f=I(d),_=(f==null?void 0:f.value)||d||"";n(_),_===""&&(i(void 0),r(void 0)),f&&(i(f),o(f.colorSpace),r(f.value))},[r]),g=L(()=>{let d=W.indexOf(l)+1;d>=W.length&&(d=0),o(W[d]);let f=(a==null?void 0:a[W[d]])||"";n(f),r(f)},[a,l,r]);return{value:t,realValue:u,updateValue:s,color:a,colorSpace:l,cycleColorSpace:g}},X=e=>e.replace(/\s*/,"").toLowerCase(),Br=(e,r,t)=>{let[n,a]=H(r!=null&&r.valid?[r]:[]);T(()=>{r===void 0&&a([])},[r]);let i=U(()=>(e||[]).map(o=>typeof o=="string"?I(o):o.title?{...I(o.color),keyword:o.title}:I(o.color)).concat(n).filter(Boolean).slice(-27),[e,n]),l=L(o=>{o!=null&&o.valid&&(i.some(u=>X(u[t])===X(o[t]))||a(u=>u.concat(o)))},[t,i]);return{presets:i,addPreset:l}},Xr=({name:e,value:r,onChange:t,onFocus:n,onBlur:a,presetColors:i,startOpen:l=!1})=>{let o=L(wr(t,200),[t]),{value:u,realValue:s,updateValue:g,color:d,colorSpace:f,cycleColorSpace:_}=jr(r,o),{presets:N,addPreset:E}=Br(i,d,f),v=zr[f];return c.createElement($r,null,c.createElement(Cr,{startOpen:l,closeOnOutsideClick:!0,onVisibleChange:()=>E(d),tooltip:c.createElement(kr,null,c.createElement(v,{color:s==="transparent"?"#000000":s,onChange:g,onFocus:n,onBlur:a}),N.length>0&&c.createElement(Ir,null,N.map((h,b)=>c.createElement(se,{key:`${h.value}-${b}`,hasChrome:!1,tooltip:c.createElement(Nr,{note:h.keyword||h.value})},c.createElement(le,{value:h[f],active:d&&X(h[f])===X(d[f]),onClick:()=>g(h.value)})))))},c.createElement(le,{value:s,style:{margin:4}})),c.createElement(Or,{id:Ce(e),value:u,onChange:h=>g(h.target.value),onFocus:h=>h.target.select(),placeholder:"Choose color..."}),u?c.createElement(Sr,{icon:"markup",onClick:_}):null)},Qr=Xr;export{Xr as ColorControl,Qr as default};
//# sourceMappingURL=Color-3YIJY6X7-5f4452f1.js.map
