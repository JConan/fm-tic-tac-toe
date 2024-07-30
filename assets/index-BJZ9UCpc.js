var Ae=Object.defineProperty;var Oe=(t,e,n)=>e in t?Ae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var V=(t,e,n)=>Oe(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function b(){}function H(t,e){for(const n in e)t[n]=e[n];return t}function we(t){return t()}function re(){return Object.create(null)}function O(t){t.forEach(we)}function G(t){return typeof t=="function"}function x(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function xe(t){return Object.keys(t).length===0}function Y(t,...e){if(t==null){for(const r of e)r(void 0);return b}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function oe(t){let e;return Y(t,n=>e=n)(),e}function j(t,e,n){t.$$.on_destroy.push(Y(e,n))}function Ne(t,e,n,r){if(t){const o=ye(t,e,n,r);return t[0](o)}}function ye(t,e,n,r){return t[1]&&r?H(n.ctx.slice(),t[1](r(e))):n.ctx}function Pe(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const s=[],l=Math.max(e.dirty.length,o.length);for(let c=0;c<l;c+=1)s[c]=e.dirty[c]|o[c];return s}return e.dirty|o}return e.dirty}function Be(t,e,n,r,o,s){if(o){const l=ye(e,n,r,s);t.p(l,o)}}function Ee(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function ie(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function se(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function Ie(t){return t&&G(t.destroy)?t.destroy:b}function ke(t,e){t.appendChild(e)}function k(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode&&t.parentNode.removeChild(t)}function Le(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function U(t){return document.createElement(t)}function De(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Z(t){return document.createTextNode(t)}function le(){return Z(" ")}function ee(){return Z("")}function I(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Ge=["width","height"];function ce(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set&&Ge.indexOf(r)===-1?t[r]=e[r]:g(t,r,e[r])}function Te(t){return Array.from(t.childNodes)}function ue(t,e,n){t.classList.toggle(e,!!n)}let te;function D(t){te=t}function L(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const B=[],fe=[];let E=[];const ae=[],We=Promise.resolve();let K=!1;function Xe(){K||(K=!0,We.then(ve))}function J(t){E.push(t)}const R=new Set;let N=0;function ve(){if(N!==0)return;const t=te;do{try{for(;N<B.length;){const e=B[N];N++,D(e),je(e.$$)}}catch(e){throw B.length=0,N=0,e}for(D(null),B.length=0,N=0;fe.length;)fe.pop()();for(let e=0;e<E.length;e+=1){const n=E[e];R.has(n)||(R.add(n),n())}E.length=0}while(B.length);for(;ae.length;)ae.pop()();K=!1,R.clear(),D(t)}function je(t){if(t.fragment!==null){t.update(),O(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}function Fe(t){const e=[],n=[];E.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),E=e}const F=new Set;let C;function z(){C={r:0,c:[],p:C}}function q(){C.r||O(C.c),C=C.p}function m(t,e){t&&t.i&&(F.delete(t),t.i(e))}function _(t,e,n,r){if(t&&t.o){if(F.has(t))return;F.add(t),C.c.push(()=>{F.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function de(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function He(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const l=t[s],c=e[s];if(c){for(const i in l)i in c||(r[i]=1);for(const i in c)o[i]||(n[i]=c[i],o[i]=1);t[s]=c}else for(const i in l)o[i]=1}for(const l in r)l in n||(n[l]=void 0);return n}function A(t){t&&t.c()}function v(t,e,n){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),J(()=>{const s=t.$$.on_mount.map(we).filter(G);t.$$.on_destroy?t.$$.on_destroy.push(...s):O(s),t.$$.on_mount=[]}),o.forEach(J)}function $(t,e){const n=t.$$;n.fragment!==null&&(Fe(n.after_update),O(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ue(t,e){t.$$.dirty[0]===-1&&(B.push(t),Xe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function T(t,e,n,r,o,s,l=null,c=[-1]){const i=te;D(t);const u=t.$$={fragment:null,ctx:[],props:s,update:b,not_equal:o,bound:re(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:re(),dirty:c,skip_bound:!1,root:e.target||i.$$.root};l&&l(u.root);let a=!1;if(u.ctx=n?n(t,e.props||{},(f,d,...w)=>{const h=w.length?w[0]:d;return u.ctx&&o(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),a&&Ue(t,f)),d}):[],u.update(),a=!0,O(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const f=Te(e.target);u.fragment&&u.fragment.l(f),f.forEach(p)}else u.fragment&&u.fragment.c();e.intro&&m(t.$$.fragment),v(t,e.target,e.anchor),ve()}D(i)}class W{constructor(){V(this,"$$");V(this,"$$set")}$destroy(){$(this,1),this.$destroy=b}$on(e,n){if(!G(n))return b;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!xe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Me="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Me);const ze="/fm-tic-tac-toe/assets/favicon-32x32.png",P=[];function qe(t,e){return{subscribe:S(t,e).subscribe}}function S(t,e=b){let n;const r=new Set;function o(c){if(x(t,c)&&(t=c,n)){const i=!P.length;for(const u of r)u[1](),P.push(u,t);if(i){for(let u=0;u<P.length;u+=2)P[u][0](P[u+1]);P.length=0}}}function s(c){o(c(t))}function l(c,i=b){const u=[c,i];return r.add(u),r.size===1&&(n=e(o,s)||b),c(t),()=>{r.delete(u),r.size===0&&n&&(n(),n=null)}}return{set:o,update:s,subscribe:l}}function Q(t,e,n){const r=!Array.isArray(t),o=r?[t]:t;if(!o.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=e.length<2;return qe(n,(l,c)=>{let i=!1;const u=[];let a=0,f=b;const d=()=>{if(a)return;f();const h=e(r?u[0]:u,l,c);s?l(h):f=G(h)?h:b},w=o.map((h,y)=>Y(h,Se=>{u[y]=Se,a&=~(1<<y),i&&d()},()=>{a|=1<<y}));return i=!0,d(),function(){O(w),f(),i=!1}})}function Ve(){const{set:t,update:e,subscribe:n}=S(" ");return{subscribe:n,set(r){let o=!1;return e(s=>(o=s===" ",s!==" "?s:r)),o},reset(){t(" ")}}}function Re(t){const e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let n of e)if(n.every(r=>t.includes(r)))return n;return null}function Ke(t){const e=Array(9).fill(0).map(()=>Ve()),n=S(),r=S(t),o=S([]),s=S([]),l=Q([o,s],i=>{const u=[{index:0,player:"X"},{index:1,player:"O"}];for(const{index:a,player:f}of u){const d=Re(i[a]);if(d)return{player:f,cells:d}}}),c=Q([l,o,s],([i,u,a])=>i!==void 0||u.length+a.length===9);return e.map((i,u)=>{i.subscribe(a=>{a!==" "&&(r.update(d=>d==="X"?"O":"X"),n.set({index:u,value:a}),(a==="X"?o:s).update(d=>[...d,u]))})}),{cells:e,lastChoice:n,nextPlayer:r,winner:l,endGame:c}}function $e(t="X"){const e=Ke(t),{nextPlayer:n,cells:r,endGame:o,lastChoice:s,winner:l}=e,c=Q([n,o,s,l],([i,u,a,f])=>({nextPlayer:i,endGame:u,lastChoice:a,winner:f}));return new Proxy({...c},{get(i,u){return Object.getOwnPropertyNames(i).includes(u.toString())?i[u]:r[u]}})}const M=S($e());function Je(t){const e=$e(oe(oe(M)).nextPlayer);return M.set(e),e}function Qe(t){let e,n,r,o,s,l;const c=t[3].default,i=Ne(c,t,t[2],null);let u=[t[0],{class:r=`button ${t[1].class??""}`}],a={};for(let f=0;f<u.length;f+=1)a=H(a,u[f]);return{c(){e=U("button"),n=U("div"),i&&i.c(),ce(e,a),ue(e,"svelte-2pz360",!0)},m(f,d){k(f,e,d),ke(e,n),i&&i.m(n,null),e.autofocus&&e.focus(),o=!0,s||(l=[I(e,"click",t[4]),I(e,"mouseenter",t[5]),I(e,"mouseleave",t[6]),I(e,"focus",t[7]),I(e,"blur",t[8])],s=!0)},p(f,[d]){i&&i.p&&(!o||d&4)&&Be(i,c,f,f[2],o?Pe(c,f[2],d,null):Ee(f[2]),null),ce(e,a=He(u,[d&1&&f[0],(!o||d&2&&r!==(r=`button ${f[1].class??""}`))&&{class:r}])),ue(e,"svelte-2pz360",!0)},i(f){o||(m(i,f),o=!0)},o(f){_(i,f),o=!1},d(f){f&&p(e),i&&i.d(f),s=!1,O(l)}}}function Ye(t,e,n){const r=[];let o=se(e,r),{$$slots:s={},$$scope:l}=e;function c(d){L.call(this,t,d)}function i(d){L.call(this,t,d)}function u(d){L.call(this,t,d)}function a(d){L.call(this,t,d)}function f(d){L.call(this,t,d)}return t.$$set=d=>{n(1,e=H(H({},e),ie(d))),n(0,o=se(e,r)),"$$scope"in d&&n(2,l=d.$$scope)},e=ie(e),[o,e,l,s,c,i,u,a,f]}class Ce extends W{constructor(e){super(),T(this,e,Ye,Qe,x,{})}}function X(t){const e=/(\d+)(\D*)/,[,n="0",r=""]=t.match(e)||[];return{number:parseInt(n,10),unit:r}}function he(t,e){const{width:n,height:r}=t;if("width"in e){const{width:s}=e;return{width:s,height:s/n*r}}const{height:o}=e;return{width:o/r*n,height:o}}function Ze(t,e){const n=t.getAttribute("width"),r=t.getAttribute("height");if(n&&r)return{width:n,height:r};const o={width:n||"",height:r||""},s=e.getAttribute("width"),l=e.getAttribute("height"),c=e.getAttribute("viewBox");if(!(s&&l||c))return o;let i=0,u=0,a="",f="";if(s&&l?({number:i,unit:a}=X(s),{number:u,unit:f}=X(l)):c&&([,,i,u]=c.split(" ").map(d=>parseInt(d,10))),a!==f)return{width:n||s||"",height:r||l||""};if(n){const{number:d,unit:w}=X(n),h=he({width:i,height:u},{width:d}),y=w||a;return{width:h.width.toFixed(2)+y,height:h.height.toFixed(2)+y}}if(r){const{number:d,unit:w}=X(r),h=he({width:i,height:u},{height:d}),y=w||f;return{width:h.width.toFixed(2)+y,height:h.height.toFixed(2)+y}}return{width:i+a,height:u+f}}function et(t,e){let n=me(e);async function r(){if(n.src){const o=await fetch(n.src,{cache:n.cache}),s=n.transform(await o.text()),l=new DOMParser().parseFromString(s,"image/svg+xml").documentElement;for(let c=0;c<l.attributes.length;c++){const i=l.attributes[c];!t.hasAttribute(i.name)&&!["width","height"].includes(i.name)&&t.setAttribute(i.name,i.value)}if(n.autoDimensions){const c=Ze(t,l);t.setAttribute("width",c.width),t.setAttribute("height",c.height)}else t.setAttribute("width",t.getAttribute("width")||""),t.setAttribute("height",t.getAttribute("height")||"");t.innerHTML=l.innerHTML}}return r(),{update(o){n=me(o),r()}}}const ge={src:"",cache:"no-cache",autoDimensions:!0,transform:t=>t};function me(t=""){return typeof t=="string"?{...ge,src:t}:{...ge,...t}}const tt={X:{src:"assets/icon-x-outline.svg",viewBox:"0 0 65 65",defaultColor:"blue"},O:{src:"assets/icon-o-outline.svg",viewBox:"0 0 67 67",defaultColor:"yellow"}},nt={blue:{fillColor:"var(--light-blue)"},blue_outlined:{fillColor:"var(--semi-dark-navy)",strokeColor:"var(--light-blue)",strokeWidth:2},yellow:{fillColor:"var(--light-yellow)"},yellow_outlined:{fillColor:"var(--dark-navy)",strokeColor:"var(--light-yellow)",strokeWidth:2}};function rt(t,e,n){const{src:r,viewBox:o,defaultColor:s}=tt[t],l=nt[`${n??s}${e?"_outlined":""}`];let c="";const{fillColor:i,strokeColor:u,strokeWidth:a,strokeOpacity:f,fillOpacity:d}=l;return c="",i&&(c+=`--fill-color: ${i};`),d&&(c+=`--fill-opacity: ${d};`),u&&(c+=`--stroke-color: ${u};`),f&&(c+=`--stroke-opacity: ${f};`),a&&(c+=`--stroke-width: ${a};`),{src:r,viewBox:o,style:c}}function ot(t){let e,n,r,o;return{c(){e=De("svg"),g(e,"role","img"),g(e,"data-name",t[0]),g(e,"data-outlined",t[1]),g(e,"class","icon svelte-1lk6fjr"),g(e,"viewBox",t[4]),g(e,"width",t[2]),g(e,"height",t[3]),g(e,"style",t[5])},m(s,l){k(s,e,l),r||(o=Ie(n=et.call(null,e,t[6])),r=!0)},p(s,[l]){l&1&&g(e,"data-name",s[0]),l&2&&g(e,"data-outlined",s[1]),l&16&&g(e,"viewBox",s[4]),l&4&&g(e,"width",s[2]),l&8&&g(e,"height",s[3]),l&32&&g(e,"style",s[5]),n&&G(n.update)&&l&64&&n.update.call(null,s[6])},i:b,o:b,d(s){s&&p(e),r=!1,o()}}}function it(t,e,n){let r,o,s,{name:l}=e,{color:c=void 0}=e,{outlined:i=!1}=e,{width:u=64}=e,{height:a=64}=e;return t.$$set=f=>{"name"in f&&n(0,l=f.name),"color"in f&&n(7,c=f.color),"outlined"in f&&n(1,i=f.outlined),"width"in f&&n(2,u=f.width),"height"in f&&n(3,a=f.height)},t.$$.update=()=>{t.$$.dirty&131&&n(6,{src:r,style:o,viewBox:s}=rt(l,i,c),r,(n(5,o),n(0,l),n(1,i),n(7,c)),(n(4,s),n(0,l),n(1,i),n(7,c)))},[l,i,u,a,s,o,r,c]}class ne extends W{constructor(e){super(),T(this,e,it,ot,x,{name:0,color:7,outlined:1,width:2,height:3})}}function st(t){let e,n;return e=new ne({props:{name:t[0].nextPlayer,outlined:!0}}),{c(){A(e.$$.fragment)},m(r,o){v(e,r,o),n=!0},p(r,o){const s={};o&1&&(s.name=r[0].nextPlayer),e.$set(s)},i(r){n||(m(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){$(e,r)}}}function lt(t){let e,n,r,o;const s=[ut,ct],l=[];function c(i,u){return i[3]?0:1}return e=c(t),n=l[e]=s[e](t),{c(){n.c(),r=ee()},m(i,u){l[e].m(i,u),k(i,r,u),o=!0},p(i,u){let a=e;e=c(i),e===a?l[e].p(i,u):(z(),_(l[a],1,1,()=>{l[a]=null}),q(),n=l[e],n?n.p(i,u):(n=l[e]=s[e](i),n.c()),m(n,1),n.m(r.parentNode,r))},i(i){o||(m(n),o=!0)},o(i){_(n),o=!1},d(i){i&&p(r),l[e].d(i)}}}function ct(t){let e,n;return e=new ne({props:{name:t[1]}}),{c(){A(e.$$.fragment)},m(r,o){v(e,r,o),n=!0},p(r,o){const s={};o&2&&(s.name=r[1]),e.$set(s)},i(r){n||(m(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){$(e,r)}}}function ut(t){let e,n;return e=new ne({props:{name:t[1],outlined:!0}}),{c(){A(e.$$.fragment)},m(r,o){v(e,r,o),n=!0},p(r,o){const s={};o&2&&(s.name=r[1]),e.$set(s)},i(r){n||(m(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){$(e,r)}}}function ft(t){let e,n,r,o;const s=[lt,st],l=[];function c(i,u){return i[1]!==" "?0:i[2]?1:-1}return~(e=c(t))&&(n=l[e]=s[e](t)),{c(){n&&n.c(),r=ee()},m(i,u){~e&&l[e].m(i,u),k(i,r,u),o=!0},p(i,u){let a=e;e=c(i),e===a?~e&&l[e].p(i,u):(n&&(z(),_(l[a],1,1,()=>{l[a]=null}),q()),~e?(n=l[e],n?n.p(i,u):(n=l[e]=s[e](i),n.c()),m(n,1),n.m(r.parentNode,r)):n=null)},i(i){o||(m(n),o=!0)},o(i){_(n),o=!1},d(i){i&&p(r),~e&&l[e].d(i)}}}function at(t){let e,n;return e=new Ce({props:{role:"cell",class:"cell button-"+(t[0].endGame&&t[3]?t[1]==="X"?"blue":"yellow":"semi-dark"),tabindex:t[1]===" "?0:-1,disabled:!t[4],$$slots:{default:[ft]},$$scope:{ctx:t}}}),e.$on("click",t[7]),e.$on("mouseenter",t[8](!0)),e.$on("focus",t[8](!0)),e.$on("mouseleave",t[8](!1)),e.$on("blur",t[8](!1)),{c(){A(e.$$.fragment)},m(r,o){v(e,r,o),n=!0},p(r,[o]){const s={};o&11&&(s.class="cell button-"+(r[0].endGame&&r[3]?r[1]==="X"?"blue":"yellow":"semi-dark")),o&2&&(s.tabindex=r[1]===" "?0:-1),o&16&&(s.disabled=!r[4]),o&2063&&(s.$$scope={dirty:o,ctx:r}),e.$set(s)},i(r){n||(m(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){$(e,r)}}}function dt(t,e,n){let r,o,s,l,c;j(t,M,h=>n(10,c=h));let i=c;j(t,i,h=>n(0,s=h));let{index:u}=e;const a=i[u];j(t,a,h=>n(1,l=h));const f=()=>{s.endGame||i[u].set(s.nextPlayer)};let d=!1;const w=h=>()=>{n(2,d=r?h:!1)};return t.$$set=h=>{"index"in h&&n(9,u=h.index)},t.$$.update=()=>{t.$$.dirty&3&&n(4,r=l===" "&&!s.endGame),t.$$.dirty&513&&n(3,o=s.winner&&s.winner.cells.includes(u))},[s,l,d,o,r,i,a,f,w,u]}class ht extends W{constructor(e){super(),T(this,e,dt,at,x,{index:9})}}function _e(t,e,n){const r=t.slice();return r[1]=e[n],r[3]=n,r}function be(t){let e,n;return e=new ht({props:{index:t[3]}}),{c(){A(e.$$.fragment)},m(r,o){v(e,r,o),n=!0},p:b,i(r){n||(m(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){$(e,r)}}}function pe(t){let e,n,r=de(t[0].entries()),o=[];for(let l=0;l<r.length;l+=1)o[l]=be(_e(t,r,l));const s=l=>_(o[l],1,1,()=>{o[l]=null});return{c(){for(let l=0;l<o.length;l+=1)o[l].c();e=ee()},m(l,c){for(let i=0;i<o.length;i+=1)o[i]&&o[i].m(l,c);k(l,e,c),n=!0},p(l,c){if(c&1){r=de(l[0].entries());let i;for(i=0;i<r.length;i+=1){const u=_e(l,r,i);o[i]?(o[i].p(u,c),m(o[i],1)):(o[i]=be(u),o[i].c(),m(o[i],1),o[i].m(e.parentNode,e))}for(z(),i=r.length;i<o.length;i+=1)s(i);q()}},i(l){if(!n){for(let c=0;c<r.length;c+=1)m(o[c]);n=!0}},o(l){o=o.filter(Boolean);for(let c=0;c<o.length;c+=1)_(o[c]);n=!1},d(l){l&&p(e),Le(o,l)}}}function gt(t){let e,n=t[0],r,o=pe(t);return{c(){e=U("div"),o.c(),g(e,"role","grid"),g(e,"class","svelte-iamirz")},m(s,l){k(s,e,l),o.m(e,null),r=!0},p(s,[l]){l&1&&x(n,n=s[0])?(z(),_(o,1,1,b),q(),o=pe(s),o.c(),m(o,1),o.m(e,null)):o.p(s,l)},i(s){r||(m(o),r=!0)},o(s){_(o),r=!1},d(s){s&&p(e),o.d(s)}}}function mt(t,e,n){let r;return j(t,M,o=>n(0,r=o)),[r]}class _t extends W{constructor(e){super(),T(this,e,mt,gt,x,{})}}function bt(t){let e;return{c(){e=Z("Reset")},m(n,r){k(n,e,r)},d(n){n&&p(e)}}}function pt(t){let e,n,r,o,s,l;return r=new Ce({props:{$$slots:{default:[bt]},$$scope:{ctx:t}}}),r.$on("click",t[0]),s=new _t({}),{c(){e=U("link"),n=le(),A(r.$$.fragment),o=le(),A(s.$$.fragment),document.title="Tic Tac Toe",g(e,"rel","icon"),g(e,"type","image/png"),g(e,"href",ze)},m(c,i){ke(document.head,e),k(c,n,i),v(r,c,i),k(c,o,i),v(s,c,i),l=!0},p(c,[i]){const u={};i&2&&(u.$$scope={dirty:i,ctx:c}),r.$set(u)},i(c){l||(m(r.$$.fragment,c),m(s.$$.fragment,c),l=!0)},o(c){_(r.$$.fragment,c),_(s.$$.fragment,c),l=!1},d(c){c&&(p(n),p(o)),p(e),$(r,c),$(s,c)}}}function wt(t){return[()=>Je()]}class yt extends W{constructor(e){super(),T(this,e,wt,pt,x,{})}}new yt({target:document.getElementById("app")});
