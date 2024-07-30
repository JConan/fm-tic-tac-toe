var Pe=Object.defineProperty;var Be=(t,e,n)=>e in t?Pe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Q=(t,e,n)=>Be(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function b(){}function q(t,e){for(const n in e)t[n]=e[n];return t}function Ce(t){return t()}function ce(){return Object.create(null)}function O(t){t.forEach(Ce)}function U(t){return typeof t=="function"}function S(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ne(t){return Object.keys(t).length===0}function V(t,...e){if(t==null){for(const r of e)r(void 0);return b}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function fe(t){let e;return V(t,n=>e=n)(),e}function X(t,e,n){t.$$.on_destroy.push(V(e,n))}function Ee(t,e,n,r){if(t){const o=Se(t,e,n,r);return t[0](o)}}function Se(t,e,n,r){return t[1]&&r?q(n.ctx.slice(),t[1](r(e))):n.ctx}function Ie(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const i=[],l=Math.max(e.dirty.length,o.length);for(let u=0;u<l;u+=1)i[u]=e.dirty[u]|o[u];return i}return e.dirty|o}return e.dirty}function Le(t,e,n,r,o,i){if(o){const l=Se(e,n,r,i);t.p(l,o)}}function De(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function ae(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function de(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function re(t){return t&&U(t.destroy)?t.destroy:b}function E(t,e){t.appendChild(e)}function w(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function Te(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function L(t){return document.createElement(t)}function oe(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ie(t){return document.createTextNode(t)}function z(){return ie(" ")}function se(){return ie("")}function W(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const We=["width","height"];function he(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set&&We.indexOf(r)===-1?t[r]=e[r]:g(t,r,e[r])}function Ge(t){return Array.from(t.childNodes)}function ge(t,e,n){t.classList.toggle(e,!!n)}let le;function j(t){le=t}function G(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const N=[],me=[];let I=[];const _e=[],Xe=Promise.resolve();let Z=!1;function je(){Z||(Z=!0,Xe.then(Ae))}function ee(t){I.push(t)}const Y=new Set;let P=0;function Ae(){if(P!==0)return;const t=le;do{try{for(;P<N.length;){const e=N[P];P++,j(e),Fe(e.$$)}}catch(e){throw N.length=0,P=0,e}for(j(null),N.length=0,P=0;me.length;)me.pop()();for(let e=0;e<I.length;e+=1){const n=I[e];Y.has(n)||(Y.add(n),n())}I.length=0}while(N.length);for(;_e.length;)_e.pop()();Z=!1,Y.clear(),j(t)}function Fe(t){if(t.fragment!==null){t.update(),O(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ee)}}function Ue(t){const e=[],n=[];I.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),I=e}const M=new Set;let A;function R(){A={r:0,c:[],p:A}}function K(){A.r||O(A.c),A=A.p}function m(t,e){t&&t.i&&(M.delete(t),t.i(e))}function _(t,e,n,r){if(t&&t.o){if(M.has(t))return;M.add(t),A.c.push(()=>{M.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function be(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function He(t,e){const n={},r={},o={$$scope:1};let i=t.length;for(;i--;){const l=t[i],u=e[i];if(u){for(const s in l)s in u||(r[s]=1);for(const s in u)o[s]||(n[s]=u[s],o[s]=1);t[i]=u}else for(const s in l)o[s]=1}for(const l in r)l in n||(n[l]=void 0);return n}function k(t){t&&t.c()}function $(t,e,n){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),ee(()=>{const i=t.$$.on_mount.map(Ce).filter(U);t.$$.on_destroy?t.$$.on_destroy.push(...i):O(i),t.$$.on_mount=[]}),o.forEach(ee)}function v(t,e){const n=t.$$;n.fragment!==null&&(Ue(n.after_update),O(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Me(t,e){t.$$.dirty[0]===-1&&(N.push(t),je(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(t,e,n,r,o,i,l=null,u=[-1]){const s=le;j(t);const c=t.$$={fragment:null,ctx:[],props:i,update:b,not_equal:o,bound:ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:ce(),dirty:u,skip_bound:!1,root:e.target||s.$$.root};l&&l(c.root);let a=!1;if(c.ctx=n?n(t,e.props||{},(f,d,...p)=>{const h=p.length?p[0]:d;return c.ctx&&o(c.ctx[f],c.ctx[f]=h)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](h),a&&Me(t,f)),d}):[],c.update(),a=!0,O(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const f=Ge(e.target);c.fragment&&c.fragment.l(f),f.forEach(y)}else c.fragment&&c.fragment.c();e.intro&&m(t.$$.fragment),$(t,e.target,e.anchor),Ae()}j(s)}class T{constructor(){Q(this,"$$");Q(this,"$$set")}$destroy(){v(this,1),this.$destroy=b}$on(e,n){if(!U(n))return b;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!Ne(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const qe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(qe);const ze="/fm-tic-tac-toe/assets/favicon-32x32.png",B=[];function Ve(t,e){return{subscribe:x(t,e).subscribe}}function x(t,e=b){let n;const r=new Set;function o(u){if(S(t,u)&&(t=u,n)){const s=!B.length;for(const c of r)c[1](),B.push(c,t);if(s){for(let c=0;c<B.length;c+=2)B[c][0](B[c+1]);B.length=0}}}function i(u){o(u(t))}function l(u,s=b){const c=[u,s];return r.add(c),r.size===1&&(n=e(o,i)||b),u(t),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:o,update:i,subscribe:l}}function te(t,e,n){const r=!Array.isArray(t),o=r?[t]:t;if(!o.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const i=e.length<2;return Ve(n,(l,u)=>{let s=!1;const c=[];let a=0,f=b;const d=()=>{if(a)return;f();const h=e(r?c[0]:c,l,u);i?l(h):f=U(h)?h:b},p=o.map((h,C)=>V(h,Oe=>{c[C]=Oe,a&=~(1<<C),s&&d()},()=>{a|=1<<C}));return s=!0,d(),function(){O(p),f(),s=!1}})}function Re(){const{set:t,update:e,subscribe:n}=x(" ");return{subscribe:n,set(r){let o=!1;return e(i=>(o=i===" ",i!==" "?i:r)),o},reset(){t(" ")}}}function Ke(t){const e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let n of e)if(n.every(r=>t.includes(r)))return n;return null}function Je(t){const e=Array(9).fill(0).map(()=>Re()),n=x(),r=x(t),o=x([]),i=x([]),l=te([o,i],s=>{const c=[{index:0,player:"X"},{index:1,player:"O"}];for(const{index:a,player:f}of c){const d=Ke(s[a]);if(d)return{player:f,cells:d}}}),u=te([l,o,i],([s,c,a])=>s!==void 0||c.length+a.length===9);return e.map((s,c)=>{s.subscribe(a=>{a!==" "&&(r.update(d=>d==="X"?"O":"X"),n.set({index:c,value:a}),(a==="X"?o:i).update(d=>[...d,c]))})}),{cells:e,lastChoice:n,nextPlayer:r,winner:l,endGame:u}}function xe(t="X"){const e=Je(t),{nextPlayer:n,cells:r,endGame:o,lastChoice:i,winner:l}=e,u=te([n,o,i,l],([s,c,a,f])=>({nextPlayer:s,endGame:c,lastChoice:a,winner:f}));return new Proxy({...u},{get(s,c){return Object.getOwnPropertyNames(s).includes(c.toString())?s[c]:r[c]}})}const F=x(xe());function Qe(t){const e=xe(fe(fe(F)).nextPlayer);return F.set(e),e}function Ye(t){let e,n,r,o,i,l;const u=t[3].default,s=Ee(u,t,t[2],null);let c=[t[0],{class:r=`button ${t[1].class??""}`}],a={};for(let f=0;f<c.length;f+=1)a=q(a,c[f]);return{c(){e=L("button"),n=L("div"),s&&s.c(),he(e,a),ge(e,"svelte-1gpdnuy",!0)},m(f,d){w(f,e,d),E(e,n),s&&s.m(n,null),e.autofocus&&e.focus(),o=!0,i||(l=[W(e,"click",t[4]),W(e,"mouseenter",t[5]),W(e,"mouseleave",t[6]),W(e,"focus",t[7]),W(e,"blur",t[8])],i=!0)},p(f,[d]){s&&s.p&&(!o||d&4)&&Le(s,u,f,f[2],o?Ie(u,f[2],d,null):De(f[2]),null),he(e,a=He(c,[d&1&&f[0],(!o||d&2&&r!==(r=`button ${f[1].class??""}`))&&{class:r}])),ge(e,"svelte-1gpdnuy",!0)},i(f){o||(m(s,f),o=!0)},o(f){_(s,f),o=!1},d(f){f&&y(e),s&&s.d(f),i=!1,O(l)}}}function Ze(t,e,n){const r=[];let o=de(e,r),{$$slots:i={},$$scope:l}=e;function u(d){G.call(this,t,d)}function s(d){G.call(this,t,d)}function c(d){G.call(this,t,d)}function a(d){G.call(this,t,d)}function f(d){G.call(this,t,d)}return t.$$set=d=>{n(1,e=q(q({},e),ae(d))),n(0,o=de(e,r)),"$$scope"in d&&n(2,l=d.$$scope)},e=ae(e),[o,e,l,i,u,s,c,a,f]}class ne extends T{constructor(e){super(),D(this,e,Ze,Ye,S,{})}}function H(t){const e=/(\d+)(\D*)/,[,n="0",r=""]=t.match(e)||[];return{number:parseInt(n,10),unit:r}}function pe(t,e){const{width:n,height:r}=t;if("width"in e){const{width:i}=e;return{width:i,height:i/n*r}}const{height:o}=e;return{width:o/r*n,height:o}}function et(t,e){const n=t.getAttribute("width"),r=t.getAttribute("height");if(n&&r)return{width:n,height:r};const o={width:n||"",height:r||""},i=e.getAttribute("width"),l=e.getAttribute("height"),u=e.getAttribute("viewBox");if(!(i&&l||u))return o;let s=0,c=0,a="",f="";if(i&&l?({number:s,unit:a}=H(i),{number:c,unit:f}=H(l)):u&&([,,s,c]=u.split(" ").map(d=>parseInt(d,10))),a!==f)return{width:n||i||"",height:r||l||""};if(n){const{number:d,unit:p}=H(n),h=pe({width:s,height:c},{width:d}),C=p||a;return{width:h.width.toFixed(2)+C,height:h.height.toFixed(2)+C}}if(r){const{number:d,unit:p}=H(r),h=pe({width:s,height:c},{height:d}),C=p||f;return{width:h.width.toFixed(2)+C,height:h.height.toFixed(2)+C}}return{width:s+a,height:c+f}}function ue(t,e){let n=we(e);async function r(){if(n.src){const o=await fetch(n.src,{cache:n.cache}),i=n.transform(await o.text()),l=new DOMParser().parseFromString(i,"image/svg+xml").documentElement;for(let u=0;u<l.attributes.length;u++){const s=l.attributes[u];!t.hasAttribute(s.name)&&!["width","height"].includes(s.name)&&t.setAttribute(s.name,s.value)}if(n.autoDimensions){const u=et(t,l);t.setAttribute("width",u.width),t.setAttribute("height",u.height)}else t.setAttribute("width",t.getAttribute("width")||""),t.setAttribute("height",t.getAttribute("height")||"");t.innerHTML=l.innerHTML}}return r(),{update(o){n=we(o),r()}}}const ye={src:"",cache:"no-cache",autoDimensions:!0,transform:t=>t};function we(t=""){return typeof t=="string"?{...ye,src:t}:{...ye,...t}}const tt={X:{src:"assets/icon-x-outline.svg",viewBox:"0 0 65 65",defaultColor:"blue"},O:{src:"assets/icon-o-outline.svg",viewBox:"0 0 67 67",defaultColor:"yellow"}},nt={blue:{fillColor:"var(--light-blue)"},blue_outlined:{fillColor:"var(--semi-dark-navy)",strokeColor:"var(--light-blue)",strokeWidth:2},yellow:{fillColor:"var(--light-yellow)"},yellow_outlined:{fillColor:"var(--semi-dark-navy)",strokeColor:"var(--light-yellow)",strokeWidth:2},silver:{fillColor:"var(--silver)"},silver_outlined:{fillColor:"var(--semi-dark-navy)",strokeColor:"var(--silver)",strokeWidth:2}};function rt(t,e,n){const{src:r,viewBox:o,defaultColor:i}=tt[t],l=nt[`${n??i}${e?"_outlined":""}`];let u="";const{fillColor:s,strokeColor:c,strokeWidth:a,strokeOpacity:f,fillOpacity:d}=l;return u="",s&&(u+=`--fill-color: ${s};`),d&&(u+=`--fill-opacity: ${d};`),c&&(u+=`--stroke-color: ${c};`),f&&(u+=`--stroke-opacity: ${f};`),a&&(u+=`--stroke-width: ${a};`),{src:r,viewBox:o,style:u}}function ot(t){let e,n,r,o;return{c(){e=oe("svg"),g(e,"role","img"),g(e,"data-name",t[0]),g(e,"data-outlined",t[1]),g(e,"class","icon svelte-1lk6fjr"),g(e,"viewBox",t[4]),g(e,"width",t[2]),g(e,"height",t[3]),g(e,"style",t[5])},m(i,l){w(i,e,l),r||(o=re(n=ue.call(null,e,t[6])),r=!0)},p(i,[l]){l&1&&g(e,"data-name",i[0]),l&2&&g(e,"data-outlined",i[1]),l&16&&g(e,"viewBox",i[4]),l&4&&g(e,"width",i[2]),l&8&&g(e,"height",i[3]),l&32&&g(e,"style",i[5]),n&&U(n.update)&&l&64&&n.update.call(null,i[6])},i:b,o:b,d(i){i&&y(e),r=!1,o()}}}function it(t,e,n){let r,o,i,{name:l}=e,{color:u=void 0}=e,{outlined:s=!1}=e,{width:c=64}=e,{height:a=64}=e;return t.$$set=f=>{"name"in f&&n(0,l=f.name),"color"in f&&n(7,u=f.color),"outlined"in f&&n(1,s=f.outlined),"width"in f&&n(2,c=f.width),"height"in f&&n(3,a=f.height)},t.$$.update=()=>{t.$$.dirty&131&&n(6,{src:r,style:o,viewBox:i}=rt(l,s,u),r,(n(5,o),n(0,l),n(1,s),n(7,u)),(n(4,i),n(0,l),n(1,s),n(7,u)))},[l,s,c,a,i,o,r,u]}class J extends T{constructor(e){super(),D(this,e,it,ot,S,{name:0,color:7,outlined:1,width:2,height:3})}}function st(t){let e,n;return e=new J({props:{name:t[0].nextPlayer,outlined:!0}}),{c(){k(e.$$.fragment)},m(r,o){$(e,r,o),n=!0},p(r,o){const i={};o&1&&(i.name=r[0].nextPlayer),e.$set(i)},i(r){n||(m(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){v(e,r)}}}function lt(t){let e,n,r,o;const i=[ct,ut],l=[];function u(s,c){return s[3]?0:1}return e=u(t),n=l[e]=i[e](t),{c(){n.c(),r=se()},m(s,c){l[e].m(s,c),w(s,r,c),o=!0},p(s,c){let a=e;e=u(s),e===a?l[e].p(s,c):(R(),_(l[a],1,1,()=>{l[a]=null}),K(),n=l[e],n?n.p(s,c):(n=l[e]=i[e](s),n.c()),m(n,1),n.m(r.parentNode,r))},i(s){o||(m(n),o=!0)},o(s){_(n),o=!1},d(s){s&&y(r),l[e].d(s)}}}function ut(t){let e,n;return e=new J({props:{name:t[1]}}),{c(){k(e.$$.fragment)},m(r,o){$(e,r,o),n=!0},p(r,o){const i={};o&2&&(i.name=r[1]),e.$set(i)},i(r){n||(m(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){v(e,r)}}}function ct(t){let e,n;return e=new J({props:{name:t[1],outlined:!0}}),{c(){k(e.$$.fragment)},m(r,o){$(e,r,o),n=!0},p(r,o){const i={};o&2&&(i.name=r[1]),e.$set(i)},i(r){n||(m(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){v(e,r)}}}function ft(t){let e,n,r,o;const i=[lt,st],l=[];function u(s,c){return s[1]!==" "?0:s[2]?1:-1}return~(e=u(t))&&(n=l[e]=i[e](t)),{c(){n&&n.c(),r=se()},m(s,c){~e&&l[e].m(s,c),w(s,r,c),o=!0},p(s,c){let a=e;e=u(s),e===a?~e&&l[e].p(s,c):(n&&(R(),_(l[a],1,1,()=>{l[a]=null}),K()),~e?(n=l[e],n?n.p(s,c):(n=l[e]=i[e](s),n.c()),m(n,1),n.m(r.parentNode,r)):n=null)},i(s){o||(m(n),o=!0)},o(s){_(n),o=!1},d(s){s&&y(r),~e&&l[e].d(s)}}}function at(t){let e,n;return e=new ne({props:{role:"cell",class:"cell button-"+(t[0].endGame&&t[3]?t[1]==="X"?"blue":"yellow":"semi-dark"),tabindex:t[1]===" "?0:-1,disabled:!t[4],$$slots:{default:[ft]},$$scope:{ctx:t}}}),e.$on("click",t[7]),e.$on("mouseenter",t[8](!0)),e.$on("focus",t[8](!0)),e.$on("mouseleave",t[8](!1)),e.$on("blur",t[8](!1)),{c(){k(e.$$.fragment)},m(r,o){$(e,r,o),n=!0},p(r,[o]){const i={};o&11&&(i.class="cell button-"+(r[0].endGame&&r[3]?r[1]==="X"?"blue":"yellow":"semi-dark")),o&2&&(i.tabindex=r[1]===" "?0:-1),o&16&&(i.disabled=!r[4]),o&2063&&(i.$$scope={dirty:o,ctx:r}),e.$set(i)},i(r){n||(m(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){v(e,r)}}}function dt(t,e,n){let r,o,i,l,u;X(t,F,h=>n(10,u=h));let s=u;X(t,s,h=>n(0,i=h));let{index:c}=e;const a=s[c];X(t,a,h=>n(1,l=h));const f=()=>{i.endGame||s[c].set(i.nextPlayer)};let d=!1;const p=h=>()=>{n(2,d=r?h:!1)};return t.$$set=h=>{"index"in h&&n(9,c=h.index)},t.$$.update=()=>{t.$$.dirty&3&&n(4,r=l===" "&&!i.endGame),t.$$.dirty&513&&n(3,o=i.winner&&i.winner.cells.includes(c))},[i,l,d,o,r,s,a,f,p,c]}class ht extends T{constructor(e){super(),D(this,e,dt,at,S,{index:9})}}function $e(t,e,n){const r=t.slice();return r[1]=e[n],r[3]=n,r}function ve(t){let e,n;return e=new ht({props:{index:t[3]}}),{c(){k(e.$$.fragment)},m(r,o){$(e,r,o),n=!0},p:b,i(r){n||(m(e.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),n=!1},d(r){v(e,r)}}}function ke(t){let e,n,r=be(t[0].entries()),o=[];for(let l=0;l<r.length;l+=1)o[l]=ve($e(t,r,l));const i=l=>_(o[l],1,1,()=>{o[l]=null});return{c(){for(let l=0;l<o.length;l+=1)o[l].c();e=se()},m(l,u){for(let s=0;s<o.length;s+=1)o[s]&&o[s].m(l,u);w(l,e,u),n=!0},p(l,u){if(u&1){r=be(l[0].entries());let s;for(s=0;s<r.length;s+=1){const c=$e(l,r,s);o[s]?(o[s].p(c,u),m(o[s],1)):(o[s]=ve(c),o[s].c(),m(o[s],1),o[s].m(e.parentNode,e))}for(R(),s=r.length;s<o.length;s+=1)i(s);K()}},i(l){if(!n){for(let u=0;u<r.length;u+=1)m(o[u]);n=!0}},o(l){o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)_(o[u]);n=!1},d(l){l&&y(e),Te(o,l)}}}function gt(t){let e,n=t[0],r,o=ke(t);return{c(){e=L("div"),o.c(),g(e,"role","grid"),g(e,"class","svelte-iamirz")},m(i,l){w(i,e,l),o.m(e,null),r=!0},p(i,[l]){l&1&&S(n,n=i[0])?(R(),_(o,1,1,b),K(),o=ke(i),o.c(),m(o,1),o.m(e,null)):o.p(i,l)},i(i){r||(m(o),r=!0)},o(i){_(o),r=!1},d(i){i&&y(e),o.d(i)}}}function mt(t,e,n){let r;return X(t,F,o=>n(0,r=o)),[r]}class _t extends T{constructor(e){super(),D(this,e,mt,gt,S,{})}}function bt(t){let e,n,r,o;return n=new J({props:{name:t[1].nextPlayer,color:"silver"}}),{c(){e=L("span"),k(n.$$.fragment),r=ie(`
      TURN`)},m(i,l){w(i,e,l),$(n,e,null),E(e,r),o=!0},p(i,l){const u={};l&2&&(u.name=i[1].nextPlayer),n.$set(u)},i(i){o||(m(n.$$.fragment,i),o=!0)},o(i){_(n.$$.fragment,i),o=!1},d(i){i&&y(e),v(n)}}}function pt(t){let e,n,r;return{c(){e=oe("svg")},m(o,i){w(o,e,i),n||(r=re(ue.call(null,e,"assets/icon-restart.svg")),n=!0)},p:b,d(o){o&&y(e),n=!1,r()}}}function yt(t){let e,n,r,o,i,l,u,s,c;return o=new ne({props:{class:"next-player button-semi-dark",disabled:!0,$$slots:{default:[bt]},$$scope:{ctx:t}}}),l=new ne({props:{class:"restart",$$slots:{default:[pt]},$$scope:{ctx:t}}}),l.$on("click",t[3]),{c(){e=L("header"),n=oe("svg"),r=z(),k(o.$$.fragment),i=z(),k(l.$$.fragment),g(n,"viewBox","0 0 72 32"),g(e,"class","svelte-1dra8na")},m(a,f){w(a,e,f),E(e,n),E(e,r),$(o,e,null),E(e,i),$(l,e,null),u=!0,s||(c=re(ue.call(null,n,"assets/logo.svg")),s=!0)},p(a,[f]){const d={};f&18&&(d.$$scope={dirty:f,ctx:a}),o.$set(d);const p={};f&16&&(p.$$scope={dirty:f,ctx:a}),l.$set(p)},i(a){u||(m(o.$$.fragment,a),m(l.$$.fragment,a),u=!0)},o(a){_(o.$$.fragment,a),_(l.$$.fragment,a),u=!1},d(a){a&&y(e),v(o),v(l),s=!1,c()}}}function wt(t,e,n){let r,o,i,l=b,u=()=>(l(),l=V(r,c=>n(1,i=c)),r);X(t,F,c=>n(2,o=c)),t.$$.on_destroy.push(()=>l());const s=()=>Qe();return t.$$.update=()=>{t.$$.dirty&4&&u(n(0,r=o))},[r,i,o,s]}class $t extends T{constructor(e){super(),D(this,e,wt,yt,S,{})}}function vt(t){let e,n,r,o,i,l;return r=new $t({}),i=new _t({}),{c(){e=L("link"),n=z(),k(r.$$.fragment),o=z(),k(i.$$.fragment),document.title="Tic Tac Toe",g(e,"rel","icon"),g(e,"type","image/png"),g(e,"href",ze)},m(u,s){E(document.head,e),w(u,n,s),$(r,u,s),w(u,o,s),$(i,u,s),l=!0},p:b,i(u){l||(m(r.$$.fragment,u),m(i.$$.fragment,u),l=!0)},o(u){_(r.$$.fragment,u),_(i.$$.fragment,u),l=!1},d(u){u&&(y(n),y(o)),y(e),v(r,u),v(i,u)}}}class kt extends T{constructor(e){super(),D(this,e,null,vt,S,{})}}new kt({target:document.getElementById("app")});
