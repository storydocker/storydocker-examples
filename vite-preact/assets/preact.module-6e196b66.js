var E,a,V,q,b,j,J,H,K,N={},Q=[],ue=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,A=Array.isArray;function k(e,t){for(var n in t)e[n]=t[n];return e}function X(e){var t=e.parentNode;t&&t.removeChild(e)}function O(e,t,n){var r,l,o,s={};for(o in t)o=="key"?r=t[o]:o=="ref"?l=t[o]:s[o]=t[o];if(arguments.length>2&&(s.children=arguments.length>3?E.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)s[o]===void 0&&(s[o]=e.defaultProps[o]);return S(e,s,r,l,null)}function S(e,t,n,r,l){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++V};return l==null&&a.vnode!=null&&a.vnode(o),o}function ce(){return{current:null}}function T(e){return e.children}function P(e,t){this.props=e,this.context=t}function w(e,t){if(t==null)return e.__?w(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?w(e):null}function Y(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Y(e)}}function I(e){(!e.__d&&(e.__d=!0)&&b.push(e)&&!L.__r++||j!==a.debounceRendering)&&((j=a.debounceRendering)||J)(L)}function L(){var e,t,n,r,l,o,s,u;for(b.sort(H);e=b.shift();)e.__d&&(t=b.length,r=void 0,l=void 0,s=(o=(n=e).__v).__e,(u=n.__P)&&(r=[],(l=k({},o)).__v=o.__v+1,R(u,o,l,n.__n,u.ownerSVGElement!==void 0,o.__h!=null?[s]:null,r,s??w(o),o.__h),oe(r,o),o.__e!=s&&Y(o)),b.length>t&&b.sort(H));L.__r=0}function Z(e,t,n,r,l,o,s,u,p,d){var _,h,c,i,f,x,v,y=r&&r.__k||Q,g=y.length;for(n.__k=[],_=0;_<t.length;_++)if((i=n.__k[_]=(i=t[_])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?S(null,i,null,null,i):A(i)?S(T,{children:i},null,null,null):i.__b>0?S(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null){if(i.__=n,i.__b=n.__b+1,(c=y[_])===null||c&&i.key==c.key&&i.type===c.type)y[_]=void 0;else for(h=0;h<g;h++){if((c=y[h])&&i.key==c.key&&i.type===c.type){y[h]=void 0;break}c=null}R(e,i,c=c||N,l,o,s,u,p,d),f=i.__e,(h=i.ref)&&c.ref!=h&&(v||(v=[]),c.ref&&v.push(c.ref,null,i),v.push(h,i.__c||f,i)),f!=null?(x==null&&(x=f),typeof i.type=="function"&&i.__k===c.__k?i.__d=p=ee(i,p,e):p=ne(e,i,c,y,f,p),typeof n.type=="function"&&(n.__d=p)):p&&c.__e==p&&p.parentNode!=e&&(p=w(c))}for(n.__e=x,_=g;_--;)y[_]!=null&&(typeof n.type=="function"&&y[_].__e!=null&&y[_].__e==n.__d&&(n.__d=_e(r).nextSibling),le(y[_],y[_]));if(v)for(_=0;_<v.length;_++)re(v[_],v[++_],v[++_])}function ee(e,t,n){for(var r,l=e.__k,o=0;l&&o<l.length;o++)(r=l[o])&&(r.__=e,t=typeof r.type=="function"?ee(r,t,n):ne(n,r,r,l,r.__e,t));return t}function te(e,t){return t=t||[],e==null||typeof e=="boolean"||(A(e)?e.some(function(n){te(n,t)}):t.push(e)),t}function ne(e,t,n,r,l,o){var s,u,p;if(t.__d!==void 0)s=t.__d,t.__d=void 0;else if(n==null||l!=o||l.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(l),s=null;else{for(u=o,p=0;(u=u.nextSibling)&&p<r.length;p+=1)if(u==l)break e;e.insertBefore(l,o),s=o}return s!==void 0?s:l.nextSibling}function _e(e){var t,n,r;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(r=_e(n)))return r}return null}function fe(e,t,n,r,l){var o;for(o in n)o==="children"||o==="key"||o in t||W(e,o,null,n[o],r);for(o in t)l&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||W(e,o,t[o],n[o],r)}function B(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||ue.test(t)?n:n+"px"}function W(e,t,n,r,l){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||B(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||B(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?G:z,o):e.removeEventListener(t,o?G:z,o);else if(t!=="dangerouslySetInnerHTML"){if(l)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function z(e){return this.l[e.type+!1](a.event?a.event(e):e)}function G(e){return this.l[e.type+!0](a.event?a.event(e):e)}function R(e,t,n,r,l,o,s,u,p){var d,_,h,c,i,f,x,v,y,g,U,C,$,D,F,m=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(p=n.__h,u=t.__e=n.__e,t.__h=null,o=[u]),(d=a.__b)&&d(t);try{e:if(typeof m=="function"){if(v=t.props,y=(d=m.contextType)&&r[d.__c],g=d?y?y.props.value:d.__:r,n.__c?x=(_=t.__c=n.__c).__=_.__E:("prototype"in m&&m.prototype.render?t.__c=_=new m(v,g):(t.__c=_=new P(v,g),_.constructor=m,_.render=ae),y&&y.sub(_),_.props=v,_.state||(_.state={}),_.context=g,_.__n=r,h=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),m.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=k({},_.__s)),k(_.__s,m.getDerivedStateFromProps(v,_.__s))),c=_.props,i=_.state,_.__v=t,h)m.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(m.getDerivedStateFromProps==null&&v!==c&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(v,g),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(v,_.__s,g)===!1||t.__v===n.__v){for(t.__v!==n.__v&&(_.props=v,_.state=_.__s,_.__d=!1),_.__e=!1,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(M){M&&(M.__=t)}),U=0;U<_._sb.length;U++)_.__h.push(_._sb[U]);_._sb=[],_.__h.length&&s.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(v,_.__s,g),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(c,i,f)})}if(_.context=g,_.props=v,_.__P=e,C=a.__r,$=0,"prototype"in m&&m.prototype.render){for(_.state=_.__s,_.__d=!1,C&&C(t),d=_.render(_.props,_.state,_.context),D=0;D<_._sb.length;D++)_.__h.push(_._sb[D]);_._sb=[]}else do _.__d=!1,C&&C(t),d=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++$<25);_.state=_.__s,_.getChildContext!=null&&(r=k(k({},r),_.getChildContext())),h||_.getSnapshotBeforeUpdate==null||(f=_.getSnapshotBeforeUpdate(c,i)),Z(e,A(F=d!=null&&d.type===T&&d.key==null?d.props.children:d)?F:[F],t,n,r,l,o,s,u,p),_.base=t.__e,t.__h=null,_.__h.length&&s.push(_),x&&(_.__E=_.__=null),_.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=pe(n.__e,t,n,r,l,o,s,p);(d=a.diffed)&&d(t)}catch(M){t.__v=null,(p||o!=null)&&(t.__e=u,t.__h=!!p,o[o.indexOf(u)]=null),a.__e(M,t,n)}}function oe(e,t){a.__c&&a.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){a.__e(r,n.__v)}})}function pe(e,t,n,r,l,o,s,u){var p,d,_,h=n.props,c=t.props,i=t.type,f=0;if(i==="svg"&&(l=!0),o!=null){for(;f<o.length;f++)if((p=o[f])&&"setAttribute"in p==!!i&&(i?p.localName===i:p.nodeType===3)){e=p,o[f]=null;break}}if(e==null){if(i===null)return document.createTextNode(c);e=l?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,c.is&&c),o=null,u=!1}if(i===null)h===c||u&&e.data===c||(e.data=c);else{if(o=o&&E.call(e.childNodes),d=(h=n.props||N).dangerouslySetInnerHTML,_=c.dangerouslySetInnerHTML,!u){if(o!=null)for(h={},f=0;f<e.attributes.length;f++)h[e.attributes[f].name]=e.attributes[f].value;(_||d)&&(_&&(d&&_.__html==d.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}if(fe(e,c,h,l,u),_)t.__k=[];else if(Z(e,A(f=t.props.children)?f:[f],t,n,r,l&&i!=="foreignObject",o,s,o?o[0]:n.__k&&w(n,0),u),o!=null)for(f=o.length;f--;)o[f]!=null&&X(o[f]);u||("value"in c&&(f=c.value)!==void 0&&(f!==e.value||i==="progress"&&!f||i==="option"&&f!==h.value)&&W(e,"value",f,h.value,!1),"checked"in c&&(f=c.checked)!==void 0&&f!==e.checked&&W(e,"checked",f,h.checked,!1))}return e}function re(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){a.__e(r,n)}}function le(e,t,n){var r,l;if(a.unmount&&a.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||re(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){a.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&le(r[l],t,n||typeof e.type!="function");n||e.__e==null||X(e.__e),e.__=e.__e=e.__d=void 0}function ae(e,t,n){return this.constructor(e,n)}function ie(e,t,n){var r,l,o;a.__&&a.__(e,t),l=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],R(t,e=(!r&&n||t).__k=O(T,null,[e]),l||N,N,t.ownerSVGElement!==void 0,!r&&n?[n]:l?null:t.firstChild?E.call(t.childNodes):null,o,!r&&n?n:l?l.__e:t.firstChild,r),oe(o,e)}function se(e,t){ie(e,t,se)}function de(e,t,n){var r,l,o,s,u=k({},e.props);for(o in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)o=="key"?r=t[o]:o=="ref"?l=t[o]:u[o]=t[o]===void 0&&s!==void 0?s[o]:t[o];return arguments.length>2&&(u.children=arguments.length>3?E.call(arguments,2):n),S(e.type,u,r||e.key,l||e.ref,null)}function he(e,t){var n={__c:t="__cC"+K++,__:e,Consumer:function(r,l){return r.children(l)},Provider:function(r){var l,o;return this.getChildContext||(l=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(s){this.props.value!==s.value&&l.some(function(u){u.__e=!0,I(u)})},this.sub=function(s){l.push(s);var u=s.componentWillUnmount;s.componentWillUnmount=function(){l.splice(l.indexOf(s),1),u&&u.call(s)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}E=Q.slice,a={__e:function(e,t,n,r){for(var l,o,s;t=t.__;)if((l=t.__c)&&!l.__)try{if((o=l.constructor)&&o.getDerivedStateFromError!=null&&(l.setState(o.getDerivedStateFromError(e)),s=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(e,r||{}),s=l.__d),s)return l.__E=l}catch(u){e=u}throw e}},V=0,q=function(e){return e!=null&&e.constructor===void 0},P.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof e=="function"&&(e=e(k({},n),this.props)),e&&k(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),I(this))},P.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),I(this))},P.prototype.render=T,b=[],J=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,H=function(e,t){return e.__v.__b-t.__v.__b},L.__r=0,K=0;const ve=Object.freeze(Object.defineProperty({__proto__:null,Component:P,Fragment:T,cloneElement:de,createContext:he,createElement:O,createRef:ce,h:O,hydrate:se,get isValidElement(){return q},get options(){return a},render:ie,toChildArray:te},Symbol.toStringTag,{value:"Module"}));export{ie as D,se as E,de as F,he as G,te as S,ce as _,P as b,T as k,a as l,ve as p,O as y};
//# sourceMappingURL=preact.module-6e196b66.js.map