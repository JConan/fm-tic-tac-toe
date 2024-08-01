var Me=Object.defineProperty;var qe=(t,e,n)=>e in t?Me(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ie=(t,e,n)=>qe(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function C(){}function ne(t,e){for(const n in e)t[n]=e[n];return t}function Le(t){return t()}function ye(){return Object.create(null)}function W(t){t.forEach(Le)}function K(t){return typeof t=="function"}function P(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function xe(t){return Object.keys(t).length===0}function Q(t,...e){if(t==null){for(const r of e)r(void 0);return C}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ce(t){let e;return Q(t,n=>e=n)(),e}function G(t,e,n){t.$$.on_destroy.push(Q(e,n))}function Fe(t,e,n,r){if(t){const s=Ue(t,e,n,r);return t[0](s)}}function Ue(t,e,n,r){return t[1]&&r?ne(n.ctx.slice(),t[1](r(e))):n.ctx}function He(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],o=Math.max(e.dirty.length,s.length);for(let u=0;u<o;u+=1)l[u]=e.dirty[u]|s[u];return l}return e.dirty|s}return e.dirty}function ze(t,e,n,r,s,l){if(s){const o=Ue(e,n,r,l);t.p(o,s)}}function Ve(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function ve(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ke(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function me(t){return t&&K(t.destroy)?t.destroy:C}function $(t,e){t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode&&t.parentNode.removeChild(t)}function Ye(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function k(t){return document.createElement(t)}function he(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function N(){return E(" ")}function _e(){return E("")}function z(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function h(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Ke=["width","height"];function Se(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set&&Ke.indexOf(r)===-1?t[r]=e[r]:h(t,r,e[r])}function Qe(t){return Array.from(t.childNodes)}function le(t,e){e=""+e,t.data!==e&&(t.data=e)}function Oe(t,e,n){t.classList.toggle(e,!!n)}let pe;function Y(t){pe=t}function V(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const q=[],fe=[];let x=[];const Ce=[],Je=Promise.resolve();let ae=!1;function Ze(){ae||(ae=!0,Je.then(Xe))}function de(t){x.push(t)}const ue=new Set;let j=0;function Xe(){if(j!==0)return;const t=pe;do{try{for(;j<q.length;){const e=q[j];j++,Y(e),et(e.$$)}}catch(e){throw q.length=0,j=0,e}for(Y(null),q.length=0,j=0;fe.length;)fe.pop()();for(let e=0;e<x.length;e+=1){const n=x[e];ue.has(n)||(ue.add(n),n())}x.length=0}while(q.length);for(;Ce.length;)Ce.pop()();ae=!1,ue.clear(),Y(t)}function et(t){if(t.fragment!==null){t.update(),W(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(de)}}function tt(t){const e=[],n=[];x.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),x=e}const te=new Set;let R;function F(){R={r:0,c:[],p:R}}function H(){R.r||W(R.c),R=R.p}function _(t,e){t&&t.i&&(te.delete(t),t.i(e))}function p(t,e,n,r){if(t&&t.o){if(te.has(t))return;te.add(t),R.c.push(()=>{te.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Ae(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function nt(t,e){const n={},r={},s={$$scope:1};let l=t.length;for(;l--;){const o=t[l],u=e[l];if(u){for(const i in o)i in u||(r[i]=1);for(const i in u)s[i]||(n[i]=u[i],s[i]=1);t[l]=u}else for(const i in o)s[i]=1}for(const o in r)o in n||(n[o]=void 0);return n}function A(t){t&&t.c()}function S(t,e,n){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),de(()=>{const l=t.$$.on_mount.map(Le).filter(K);t.$$.on_destroy?t.$$.on_destroy.push(...l):W(l),t.$$.on_mount=[]}),s.forEach(de)}function O(t,e){const n=t.$$;n.fragment!==null&&(tt(n.after_update),W(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rt(t,e){t.$$.dirty[0]===-1&&(q.push(t),Ze(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function D(t,e,n,r,s,l,o=null,u=[-1]){const i=pe;Y(t);const c=t.$$={fragment:null,ctx:[],props:l,update:C,not_equal:s,bound:ye(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:ye(),dirty:u,skip_bound:!1,root:e.target||i.$$.root};o&&o(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,d,...w)=>{const m=w.length?w[0]:d;return c.ctx&&s(c.ctx[a],c.ctx[a]=m)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](m),f&&rt(t,a)),d}):[],c.update(),f=!0,W(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const a=Qe(e.target);c.fragment&&c.fragment.l(a),a.forEach(g)}else c.fragment&&c.fragment.c();e.intro&&_(t.$$.fragment),S(t,e.target,e.anchor),Xe()}Y(i)}class L{constructor(){ie(this,"$$");ie(this,"$$set")}$destroy(){O(this,1),this.$destroy=C}$on(e,n){if(!K(n))return C;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!xe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const st="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(st);const lt="/fm-tic-tac-toe/assets/favicon-32x32.png",M=[];function ot(t,e){return{subscribe:B(t,e).subscribe}}function B(t,e=C){let n;const r=new Set;function s(u){if(P(t,u)&&(t=u,n)){const i=!M.length;for(const c of r)c[1](),M.push(c,t);if(i){for(let c=0;c<M.length;c+=2)M[c][0](M[c+1]);M.length=0}}}function l(u){s(u(t))}function o(u,i=C){const c=[u,i];return r.add(c),r.size===1&&(n=e(s,l)||C),u(t),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:s,update:l,subscribe:o}}function re(t,e,n){const r=!Array.isArray(t),s=r?[t]:t;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=e.length<2;return ot(n,(o,u)=>{let i=!1;const c=[];let f=0,a=C;const d=()=>{if(f)return;a();const m=e(r?c[0]:c,o,u);l?o(m):a=K(m)?m:C},w=s.map((m,y)=>Q(m,Z=>{c[y]=Z,f&=~(1<<y),i&&d()},()=>{f|=1<<y}));return i=!0,d(),function(){W(w),a(),i=!1}})}function it(){const{set:t,update:e,subscribe:n}=B(" ");return{subscribe:n,set(r){let s=!1;return e(l=>(s=l===" ",l!==" "?l:r)),s},reset(){t(" ")}}}function ut(t){const e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let n of e)if(n.every(r=>t.includes(r)))return n;return null}function ct(t){const e=Array(9).fill(0).map(()=>it()),n=B(),r=B(t),s=B([]),l=B([]),o=re([s,l],i=>{const c=[{index:0,player:"X"},{index:1,player:"O"}];for(const{index:f,player:a}of c){const d=ut(i[f]);if(d)return{player:a,cells:d}}}),u=re([o,s,l],([i,c,f])=>i!==void 0||c.length+f.length===9);return e.map((i,c)=>{i.subscribe(f=>{f!==" "&&(r.update(d=>d==="X"?"O":"X"),n.set({index:c,value:f}),(f==="X"?s:l).update(d=>[...d,c]))})}),{cells:e,lastChoice:n,nextPlayer:r,winner:o,endGame:u}}function Re(t="X"){const e=ct(t),{nextPlayer:n,cells:r,endGame:s,lastChoice:l,winner:o}=e,u=re([n,s,l,o],([c,f,a,d])=>({nextPlayer:c,endGame:f,lastChoice:a,winner:d})),i={select(c){r[c].set(ce(n))}};return new Proxy({...u,...i},{get(c,f){return Object.getOwnPropertyNames(c).includes(f.toString())?c[f]:r[f]}})}const X=B(Re());function Ee(t){const e=Re(ce(ce(X)).nextPlayer);return X.set(e),e}function ft(t){let e,n,r,s,l,o;const u=t[3].default,i=Fe(u,t,t[2],null);let c=[t[0],{class:r=`button ${t[1].class??""}`}],f={};for(let a=0;a<c.length;a+=1)f=ne(f,c[a]);return{c(){e=k("button"),n=k("div"),i&&i.c(),Se(e,f),Oe(e,"svelte-1hqorlt",!0)},m(a,d){b(a,e,d),$(e,n),i&&i.m(n,null),e.autofocus&&e.focus(),s=!0,l||(o=[z(e,"click",t[4]),z(e,"mouseenter",t[5]),z(e,"mouseleave",t[6]),z(e,"focus",t[7]),z(e,"blur",t[8])],l=!0)},p(a,[d]){i&&i.p&&(!s||d&4)&&ze(i,u,a,a[2],s?He(u,a[2],d,null):Ve(a[2]),null),Se(e,f=nt(c,[d&1&&a[0],(!s||d&2&&r!==(r=`button ${a[1].class??""}`))&&{class:r}])),Oe(e,"svelte-1hqorlt",!0)},i(a){s||(_(i,a),s=!0)},o(a){p(i,a),s=!1},d(a){a&&g(e),i&&i.d(a),l=!1,W(o)}}}function at(t,e,n){const r=[];let s=ke(e,r),{$$slots:l={},$$scope:o}=e;function u(d){V.call(this,t,d)}function i(d){V.call(this,t,d)}function c(d){V.call(this,t,d)}function f(d){V.call(this,t,d)}function a(d){V.call(this,t,d)}return t.$$set=d=>{n(1,e=ne(ne({},e),ve(d))),n(0,s=ke(e,r)),"$$scope"in d&&n(2,o=d.$$scope)},e=ve(e),[s,e,o,l,u,i,c,f,a]}class I extends L{constructor(e){super(),D(this,e,at,ft,P,{})}}function ee(t){const e=/(\d+)(\D*)/,[,n="0",r=""]=t.match(e)||[];return{number:parseInt(n,10),unit:r}}function Ne(t,e){const{width:n,height:r}=t;if("width"in e){const{width:l}=e;return{width:l,height:l/n*r}}const{height:s}=e;return{width:s/r*n,height:s}}function dt(t,e){const n=t.getAttribute("width"),r=t.getAttribute("height");if(n&&r)return{width:n,height:r};const s={width:n||"",height:r||""},l=e.getAttribute("width"),o=e.getAttribute("height"),u=e.getAttribute("viewBox");if(!(l&&o||u))return s;let i=0,c=0,f="",a="";if(l&&o?({number:i,unit:f}=ee(l),{number:c,unit:a}=ee(o)):u&&([,,i,c]=u.split(" ").map(d=>parseInt(d,10))),f!==a)return{width:n||l||"",height:r||o||""};if(n){const{number:d,unit:w}=ee(n),m=Ne({width:i,height:c},{width:d}),y=w||f;return{width:m.width.toFixed(2)+y,height:m.height.toFixed(2)+y}}if(r){const{number:d,unit:w}=ee(r),m=Ne({width:i,height:c},{height:d}),y=w||a;return{width:m.width.toFixed(2)+y,height:m.height.toFixed(2)+y}}return{width:i+f,height:c+a}}function ge(t,e){let n=Pe(e);async function r(){if(n.src){const s=await fetch(n.src,{cache:n.cache}),l=n.transform(await s.text()),o=new DOMParser().parseFromString(l,"image/svg+xml").documentElement;for(let u=0;u<o.attributes.length;u++){const i=o.attributes[u];!t.hasAttribute(i.name)&&!["width","height"].includes(i.name)&&t.setAttribute(i.name,i.value)}if(n.autoDimensions){const u=dt(t,o);t.setAttribute("width",u.width),t.setAttribute("height",u.height)}else t.setAttribute("width",t.getAttribute("width")||""),t.setAttribute("height",t.getAttribute("height")||"");t.innerHTML=o.innerHTML}}return r(),{update(s){n=Pe(s),r()}}}const Te={src:"",cache:"no-cache",autoDimensions:!0,transform:t=>t};function Pe(t=""){return typeof t=="string"?{...Te,src:t}:{...Te,...t}}const mt={X:{src:"assets/icon-x-outline.svg",viewBox:"0 0 65 65",defaultColor:"blue"},O:{src:"assets/icon-o-outline.svg",viewBox:"0 0 67 67",defaultColor:"yellow"}},ht={blue:{fillColor:"var(--light-blue)"},blue_outlined:{fillColor:"var(--semi-dark-navy)",strokeColor:"var(--light-blue)",strokeWidth:2},yellow:{fillColor:"var(--light-yellow)"},yellow_outlined:{fillColor:"var(--semi-dark-navy)",strokeColor:"var(--light-yellow)",strokeWidth:2},silver:{fillColor:"var(--silver)"},silver_outlined:{fillColor:"var(--semi-dark-navy)",strokeColor:"var(--silver)",strokeWidth:2}};function _t(t,e,n){const{src:r,viewBox:s,defaultColor:l}=mt[t],o=ht[`${n??l}${e?"_outlined":""}`];let u="";const{fillColor:i,strokeColor:c,strokeWidth:f,strokeOpacity:a,fillOpacity:d}=o;return u="",i&&(u+=`--fill-color: ${i};`),d&&(u+=`--fill-opacity: ${d};`),c&&(u+=`--stroke-color: ${c};`),a&&(u+=`--stroke-opacity: ${a};`),f&&(u+=`--stroke-width: ${f};`),{src:r,viewBox:s,style:u}}function pt(t){let e,n,r,s;return{c(){e=he("svg"),h(e,"role","img"),h(e,"data-name",t[0]),h(e,"data-outlined",t[1]),h(e,"class","icon svelte-1lk6fjr"),h(e,"viewBox",t[4]),h(e,"width",t[2]),h(e,"height",t[3]),h(e,"style",t[5])},m(l,o){b(l,e,o),r||(s=me(n=ge.call(null,e,t[6])),r=!0)},p(l,[o]){o&1&&h(e,"data-name",l[0]),o&2&&h(e,"data-outlined",l[1]),o&16&&h(e,"viewBox",l[4]),o&4&&h(e,"width",l[2]),o&8&&h(e,"height",l[3]),o&32&&h(e,"style",l[5]),n&&K(n.update)&&o&64&&n.update.call(null,l[6])},i:C,o:C,d(l){l&&g(e),r=!1,s()}}}function gt(t,e,n){let r,s,l,{name:o}=e,{color:u=void 0}=e,{outlined:i=!1}=e,{width:c=64}=e,{height:f=64}=e;return t.$$set=a=>{"name"in a&&n(0,o=a.name),"color"in a&&n(7,u=a.color),"outlined"in a&&n(1,i=a.outlined),"width"in a&&n(2,c=a.width),"height"in a&&n(3,f=a.height)},t.$$.update=()=>{t.$$.dirty&131&&n(6,{src:r,style:s,viewBox:l}=_t(o,i,u),r,(n(5,s),n(0,o),n(1,i),n(7,u)),(n(4,l),n(0,o),n(1,i),n(7,u)))},[o,i,c,f,l,s,r,u]}class J extends L{constructor(e){super(),D(this,e,gt,pt,P,{name:0,color:7,outlined:1,width:2,height:3})}}function bt(t){let e,n;return e=new J({props:{name:t[0].nextPlayer,outlined:!0}}),{c(){A(e.$$.fragment)},m(r,s){S(e,r,s),n=!0},p(r,s){const l={};s&1&&(l.name=r[0].nextPlayer),e.$set(l)},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){p(e.$$.fragment,r),n=!1},d(r){O(e,r)}}}function $t(t){let e,n,r,s;const l=[yt,wt],o=[];function u(i,c){return i[3]?0:1}return e=u(t),n=o[e]=l[e](t),{c(){n.c(),r=_e()},m(i,c){o[e].m(i,c),b(i,r,c),s=!0},p(i,c){let f=e;e=u(i),e===f?o[e].p(i,c):(F(),p(o[f],1,1,()=>{o[f]=null}),H(),n=o[e],n?n.p(i,c):(n=o[e]=l[e](i),n.c()),_(n,1),n.m(r.parentNode,r))},i(i){s||(_(n),s=!0)},o(i){p(n),s=!1},d(i){i&&g(r),o[e].d(i)}}}function wt(t){let e,n;return e=new J({props:{name:t[1]}}),{c(){A(e.$$.fragment)},m(r,s){S(e,r,s),n=!0},p(r,s){const l={};s&2&&(l.name=r[1]),e.$set(l)},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){p(e.$$.fragment,r),n=!1},d(r){O(e,r)}}}function yt(t){let e,n;return e=new J({props:{name:t[1],outlined:!0}}),{c(){A(e.$$.fragment)},m(r,s){S(e,r,s),n=!0},p(r,s){const l={};s&2&&(l.name=r[1]),e.$set(l)},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){p(e.$$.fragment,r),n=!1},d(r){O(e,r)}}}function vt(t){let e,n,r,s;const l=[$t,bt],o=[];function u(i,c){return i[1]!==" "?0:i[2]?1:-1}return~(e=u(t))&&(n=o[e]=l[e](t)),{c(){n&&n.c(),r=_e()},m(i,c){~e&&o[e].m(i,c),b(i,r,c),s=!0},p(i,c){let f=e;e=u(i),e===f?~e&&o[e].p(i,c):(n&&(F(),p(o[f],1,1,()=>{o[f]=null}),H()),~e?(n=o[e],n?n.p(i,c):(n=o[e]=l[e](i),n.c()),_(n,1),n.m(r.parentNode,r)):n=null)},i(i){s||(_(n),s=!0)},o(i){p(n),s=!1},d(i){i&&g(r),~e&&o[e].d(i)}}}function kt(t){let e,n;return e=new I({props:{role:"cell",class:"cell button-"+(t[0].endGame&&t[3]?t[1]==="X"?"blue":"yellow":"semi-dark"),tabindex:t[1]===" "?0:-1,disabled:!t[4],$$slots:{default:[vt]},$$scope:{ctx:t}}}),e.$on("click",t[7]),e.$on("mouseenter",t[8](!0)),e.$on("focus",t[8](!0)),e.$on("mouseleave",t[8](!1)),e.$on("blur",t[8](!1)),{c(){A(e.$$.fragment)},m(r,s){S(e,r,s),n=!0},p(r,[s]){const l={};s&11&&(l.class="cell button-"+(r[0].endGame&&r[3]?r[1]==="X"?"blue":"yellow":"semi-dark")),s&2&&(l.tabindex=r[1]===" "?0:-1),s&16&&(l.disabled=!r[4]),s&2063&&(l.$$scope={dirty:s,ctx:r}),e.$set(l)},i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){p(e.$$.fragment,r),n=!1},d(r){O(e,r)}}}function St(t,e,n){let r,s,l,o,u;G(t,X,m=>n(10,u=m));let i=u;G(t,i,m=>n(0,l=m));let{index:c}=e;const f=i[c];G(t,f,m=>n(1,o=m));const a=()=>{l.endGame||i[c].set(l.nextPlayer)};let d=!1;const w=m=>()=>{n(2,d=r?m:!1)};return t.$$set=m=>{"index"in m&&n(9,c=m.index)},t.$$.update=()=>{t.$$.dirty&3&&n(4,r=o===" "&&!l.endGame),t.$$.dirty&513&&n(3,s=l.winner&&l.winner.cells.includes(c))},[l,o,d,s,r,i,f,a,w,c]}class Ot extends L{constructor(e){super(),D(this,e,St,kt,P,{index:9})}}function Be(t,e,n){const r=t.slice();return r[1]=e[n],r[3]=n,r}function Ie(t){let e,n;return e=new Ot({props:{index:t[3]}}),{c(){A(e.$$.fragment)},m(r,s){S(e,r,s),n=!0},p:C,i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){p(e.$$.fragment,r),n=!1},d(r){O(e,r)}}}function Ge(t){let e,n,r=Ae(t[0].entries()),s=[];for(let o=0;o<r.length;o+=1)s[o]=Ie(Be(t,r,o));const l=o=>p(s[o],1,1,()=>{s[o]=null});return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=_e()},m(o,u){for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(o,u);b(o,e,u),n=!0},p(o,u){if(u&1){r=Ae(o[0].entries());let i;for(i=0;i<r.length;i+=1){const c=Be(o,r,i);s[i]?(s[i].p(c,u),_(s[i],1)):(s[i]=Ie(c),s[i].c(),_(s[i],1),s[i].m(e.parentNode,e))}for(F(),i=r.length;i<s.length;i+=1)l(i);H()}},i(o){if(!n){for(let u=0;u<r.length;u+=1)_(s[u]);n=!0}},o(o){s=s.filter(Boolean);for(let u=0;u<s.length;u+=1)p(s[u]);n=!1},d(o){o&&g(e),Ye(s,o)}}}function Ct(t){let e,n=t[0],r,s=Ge(t);return{c(){e=k("div"),s.c(),h(e,"role","grid"),h(e,"class","svelte-iamirz")},m(l,o){b(l,e,o),s.m(e,null),r=!0},p(l,[o]){o&1&&P(n,n=l[0])?(F(),p(s,1,1,C),H(),s=Ge(l),s.c(),_(s,1),s.m(e,null)):s.p(l,o)},i(l){r||(_(s),r=!0)},o(l){p(s),r=!1},d(l){l&&g(e),s.d(l)}}}function At(t,e,n){let r;return G(t,X,s=>n(0,r=s)),[r]}class Et extends L{constructor(e){super(),D(this,e,At,Ct,P,{})}}const{set:se,update:cn,subscribe:Nt}=B();X.subscribe(t=>{se(void 0),t.subscribe(e=>{e.endGame&&se("GameEnded")})});const Tt={subscribe:Nt};function Pt(){se("RestartRequested")}function We(){se(void 0)}function Bt(t){let e,n,r,s;return n=new J({props:{name:t[1].nextPlayer,color:"silver"}}),{c(){e=k("span"),A(n.$$.fragment),r=E(`
      TURN`)},m(l,o){b(l,e,o),S(n,e,null),$(e,r),s=!0},p(l,o){const u={};o&2&&(u.name=l[1].nextPlayer),n.$set(u)},i(l){s||(_(n.$$.fragment,l),s=!0)},o(l){p(n.$$.fragment,l),s=!1},d(l){l&&g(e),O(n)}}}function It(t){let e,n,r;return{c(){e=he("svg")},m(s,l){b(s,e,l),n||(r=me(ge.call(null,e,"assets/icon-restart.svg")),n=!0)},p:C,d(s){s&&g(e),n=!1,r()}}}function Gt(t){let e,n,r,s,l,o,u,i,c;return s=new I({props:{class:"next-player button-semi-dark",disabled:!0,$$slots:{default:[Bt]},$$scope:{ctx:t}}}),o=new I({props:{"aria-label":"restart",class:"restart",$$slots:{default:[It]},$$scope:{ctx:t}}}),o.$on("click",Pt),{c(){e=k("header"),n=he("svg"),r=N(),A(s.$$.fragment),l=N(),A(o.$$.fragment),h(n,"viewBox","0 0 72 32"),h(e,"class","svelte-1h2p6kk")},m(f,a){b(f,e,a),$(e,n),$(e,r),S(s,e,null),$(e,l),S(o,e,null),u=!0,i||(c=me(ge.call(null,n,"assets/logo.svg")),i=!0)},p(f,[a]){const d={};a&10&&(d.$$scope={dirty:a,ctx:f}),s.$set(d);const w={};a&8&&(w.$$scope={dirty:a,ctx:f}),o.$set(w)},i(f){u||(_(s.$$.fragment,f),_(o.$$.fragment,f),u=!0)},o(f){p(s.$$.fragment,f),p(o.$$.fragment,f),u=!1},d(f){f&&g(e),O(s),O(o),i=!1,c()}}}function Dt(t,e,n){let r,s,l,o=C,u=()=>(o(),o=Q(r,i=>n(1,l=i)),r);return G(t,X,i=>n(2,s=i)),t.$$.on_destroy.push(()=>o()),t.$$.update=()=>{t.$$.dirty&4&&u(n(0,r=s))},[r,l,s]}class Lt extends L{constructor(e){super(),D(this,e,Dt,Gt,P,{})}}function Ut(){const{set:t,update:e,subscribe:n}=B({playerOne:"X",playerTwo:"CPU"});return{subscribe:n,setPlayerOne(r){e(s=>({...s,playerOne:r}))},setOpponent(r){e(s=>({...s,playerTwo:r}))}}}const je=Ut();function Xt(t){let e,n,r,s,l,o,u;return s=new I({props:{"aria-label":"cancel",class:"no",$$slots:{default:[Wt]},$$scope:{ctx:t}}}),s.$on("click",We),o=new I({props:{"aria-label":"confirm",class:"yes button-yellow",$$slots:{default:[jt]},$$scope:{ctx:t}}}),o.$on("click",t[7]),{c(){e=k("div"),n=k("span"),n.textContent="Restart Game?",r=N(),A(s.$$.fragment),l=N(),A(o.$$.fragment),h(n,"class","svelte-1pdl8hv"),h(e,"class","game-restart")},m(i,c){b(i,e,c),$(e,n),$(e,r),S(s,e,null),$(e,l),S(o,e,null),u=!0},p(i,c){const f={};c&512&&(f.$$scope={dirty:c,ctx:i}),s.$set(f);const a={};c&512&&(a.$$scope={dirty:c,ctx:i}),o.$set(a)},i(i){u||(_(s.$$.fragment,i),_(o.$$.fragment,i),u=!0)},o(i){p(s.$$.fragment,i),p(o.$$.fragment,i),u=!1},d(i){i&&g(e),O(s),O(o)}}}function Rt(t){let e,n,r,s,l,o,u,i,c,f,a,d,w,m,y=t[2].winner&&De(t);const Z=[qt,Mt],U=[];function be(v,T){return v[2].winner?0:1}return o=be(t),u=U[o]=Z[o](t),a=new I({props:{"aria-label":"quit",class:"no",$$slots:{default:[xt]},$$scope:{ctx:t}}}),a.$on("click",We),w=new I({props:{"aria-label":"confirm",class:"yes button-yellow",$$slots:{default:[Ft]},$$scope:{ctx:t}}}),w.$on("click",t[6]),{c(){e=k("div"),n=k("div"),r=k("span"),y&&y.c(),s=N(),l=k("span"),u.c(),f=N(),A(a.$$.fragment),d=N(),A(w.$$.fragment),h(r,"class","svelte-1pdl8hv"),h(l,"style",i=t[2].winner&&"justify-self: end;"),h(l,"class","svelte-1pdl8hv"),h(n,"style",c=t[2].winner&&`--color: var(${t[2].winner.player==="X"?"--light-blue":"--light-yellow"})`),h(e,"class","game-ended svelte-1pdl8hv")},m(v,T){b(v,e,T),$(e,n),$(n,r),y&&y.m(r,null),$(n,s),$(n,l),U[o].m(l,null),$(e,f),S(a,e,null),$(e,d),S(w,e,null),m=!0},p(v,T){v[2].winner?y?y.p(v,T):(y=De(v),y.c(),y.m(r,null)):y&&(y.d(1),y=null);let oe=o;o=be(v),o===oe?U[o].p(v,T):(F(),p(U[oe],1,1,()=>{U[oe]=null}),H(),u=U[o],u?u.p(v,T):(u=U[o]=Z[o](v),u.c()),_(u,1),u.m(l,null)),(!m||T&4&&i!==(i=v[2].winner&&"justify-self: end;"))&&h(l,"style",i),(!m||T&4&&c!==(c=v[2].winner&&`--color: var(${v[2].winner.player==="X"?"--light-blue":"--light-yellow"})`))&&h(n,"style",c);const $e={};T&512&&($e.$$scope={dirty:T,ctx:v}),a.$set($e);const we={};T&512&&(we.$$scope={dirty:T,ctx:v}),w.$set(we)},i(v){m||(_(u),_(a.$$.fragment,v),_(w.$$.fragment,v),m=!0)},o(v){p(u),p(a.$$.fragment,v),p(w.$$.fragment,v),m=!1},d(v){v&&g(e),y&&y.d(),U[o].d(),O(a),O(w)}}}function Wt(t){let e;return{c(){e=E("NO, CANCEL")},m(n,r){b(n,e,r)},d(n){n&&g(e)}}}function jt(t){let e;return{c(){e=E("YES, RESTART")},m(n,r){b(n,e,r)},d(n){n&&g(e)}}}function De(t){let e,n=(t[3].playerOne===t[2].winner.player?1:2)+"",r,s;return{c(){e=E("PLAYER "),r=E(n),s=E(`
            WINS!`)},m(l,o){b(l,e,o),b(l,r,o),b(l,s,o)},p(l,o){o&12&&n!==(n=(l[3].playerOne===l[2].winner.player?1:2)+"")&&le(r,n)},d(l){l&&(g(e),g(r),g(s))}}}function Mt(t){let e;return{c(){e=E("ROUND TIED")},m(n,r){b(n,e,r)},p:C,i:C,o:C,d(n){n&&g(e)}}}function qt(t){let e,n,r;return e=new J({props:{name:t[2].winner.player}}),{c(){A(e.$$.fragment),n=E(" TAKE THE ROUND")},m(s,l){S(e,s,l),b(s,n,l),r=!0},p(s,l){const o={};l&4&&(o.name=s[2].winner.player),e.$set(o)},i(s){r||(_(e.$$.fragment,s),r=!0)},o(s){p(e.$$.fragment,s),r=!1},d(s){s&&g(n),O(e,s)}}}function xt(t){let e;return{c(){e=E("QUIT")},m(n,r){b(n,e,r)},d(n){n&&g(e)}}}function Ft(t){let e;return{c(){e=E("NEXT ROUND")},m(n,r){b(n,e,r)},d(n){n&&g(e)}}}function Ht(t){let e,n,r,s,l,o;const u=[Rt,Xt],i=[];function c(f,a){return f[2].endGame?0:1}return n=c(t),r=i[n]=u[n](t),{c(){e=k("dialog"),r.c(),s=N(),l=k("button"),h(e,"class","svelte-1pdl8hv")},m(f,a){b(f,e,a),i[n].m(e,null),t[8](e),b(f,s,a),b(f,l,a),o=!0},p(f,[a]){let d=n;n=c(f),n===d?i[n].p(f,a):(F(),p(i[d],1,1,()=>{i[d]=null}),H(),r=i[n],r?r.p(f,a):(r=i[n]=u[n](f),r.c()),_(r,1),r.m(e,null))},i(f){o||(_(r),o=!0)},o(f){p(r),o=!1},d(f){f&&(g(e),g(s),g(l)),i[n].d(),t[8](null)}}}function zt(t,e,n){let r,s,l,o,u=C,i=()=>(u(),u=Q(r,m=>n(2,o=m)),r),c;G(t,X,m=>n(4,s=m)),G(t,Tt,m=>n(5,l=m)),G(t,je,m=>n(3,c=m)),t.$$.on_destroy.push(()=>u());let f;const a=()=>Ee(),d=()=>Ee();function w(m){fe[m?"unshift":"push"](()=>{f=m,n(0,f)})}return t.$$.update=()=>{if(t.$$.dirty&33&&f)switch(l){case"RestartRequested":case"GameEnded":f.showModal();break;default:f.open&&f.close();break}t.$$.dirty&16&&i(n(1,r=s))},[f,r,o,c,s,l,a,d,w]}class Vt extends L{constructor(e){super(),D(this,e,zt,Ht,P,{})}}function Yt(){const{set:t,update:e,subscribe:n}=B({playerOne:0,playerTwo:0,tie:0});return X.subscribe(r=>{re([r,je],s=>s).subscribe(([s,l])=>{s.endGame&&e(o=>{var i;const u={...o};return s.winner?l.playerOne===((i=s.winner)==null?void 0:i.player)?u.playerOne++:u.playerTwo++:u.tie++,u})})}),{subscribe:n,reset(){t({playerOne:0,playerTwo:0,tie:0})}}}let Kt=Yt();function Qt(t){let e,n,r,s=t[0].playerOne+"",l;return{c(){e=k("div"),n=k("span"),n.textContent="X (YOU)",r=k("span"),l=E(s),h(r,"class","score-counter svelte-azetoi"),h(e,"class","score-display")},m(o,u){b(o,e,u),$(e,n),$(e,r),$(r,l)},p(o,u){u&1&&s!==(s=o[0].playerOne+"")&&le(l,s)},d(o){o&&g(e)}}}function Jt(t){let e,n,r,s=t[0].tie+"",l;return{c(){e=k("div"),n=k("span"),n.textContent="TIES",r=k("span"),l=E(s),h(r,"class","score-counter svelte-azetoi"),h(e,"class","score-display")},m(o,u){b(o,e,u),$(e,n),$(e,r),$(r,l)},p(o,u){u&1&&s!==(s=o[0].tie+"")&&le(l,s)},d(o){o&&g(e)}}}function Zt(t){let e,n,r,s=t[0].playerTwo+"",l;return{c(){e=k("div"),n=k("span"),n.textContent="O (CPU)",r=k("span"),l=E(s),h(r,"class","score-counter svelte-azetoi"),h(e,"class","score-display")},m(o,u){b(o,e,u),$(e,n),$(e,r),$(r,l)},p(o,u){u&1&&s!==(s=o[0].playerTwo+"")&&le(l,s)},d(o){o&&g(e)}}}function en(t){let e,n,r,s,l,o,u;return n=new I({props:{class:"score button-blue no-shadow",disabled:!0,$$slots:{default:[Qt]},$$scope:{ctx:t}}}),s=new I({props:{class:"score no-shadow",disabled:!0,$$slots:{default:[Jt]},$$scope:{ctx:t}}}),o=new I({props:{class:"score button-yellow no-shadow",disabled:!0,$$slots:{default:[Zt]},$$scope:{ctx:t}}}),{c(){e=k("div"),A(n.$$.fragment),r=N(),A(s.$$.fragment),l=N(),A(o.$$.fragment),h(e,"class","score-bar svelte-azetoi")},m(i,c){b(i,e,c),S(n,e,null),$(e,r),S(s,e,null),$(e,l),S(o,e,null),u=!0},p(i,[c]){const f={};c&3&&(f.$$scope={dirty:c,ctx:i}),n.$set(f);const a={};c&3&&(a.$$scope={dirty:c,ctx:i}),s.$set(a);const d={};c&3&&(d.$$scope={dirty:c,ctx:i}),o.$set(d)},i(i){u||(_(n.$$.fragment,i),_(s.$$.fragment,i),_(o.$$.fragment,i),u=!0)},o(i){p(n.$$.fragment,i),p(s.$$.fragment,i),p(o.$$.fragment,i),u=!1},d(i){i&&g(e),O(n),O(s),O(o)}}}function tn(t,e,n){let r;return G(t,Kt,s=>n(0,r=s)),[r]}class nn extends L{constructor(e){super(),D(this,e,tn,en,P,{})}}function rn(t){let e,n,r,s,l,o,u,i;return e=new Lt({}),r=new Et({}),l=new nn({}),u=new Vt({}),{c(){A(e.$$.fragment),n=N(),A(r.$$.fragment),s=N(),A(l.$$.fragment),o=N(),A(u.$$.fragment)},m(c,f){S(e,c,f),b(c,n,f),S(r,c,f),b(c,s,f),S(l,c,f),b(c,o,f),S(u,c,f),i=!0},p:C,i(c){i||(_(e.$$.fragment,c),_(r.$$.fragment,c),_(l.$$.fragment,c),_(u.$$.fragment,c),i=!0)},o(c){p(e.$$.fragment,c),p(r.$$.fragment,c),p(l.$$.fragment,c),p(u.$$.fragment,c),i=!1},d(c){c&&(g(n),g(s),g(o)),O(e,c),O(r,c),O(l,c),O(u,c)}}}class sn extends L{constructor(e){super(),D(this,e,null,rn,P,{})}}function ln(t){let e,n,r,s;return r=new sn({}),{c(){e=k("link"),n=N(),A(r.$$.fragment),document.title="Tic Tac Toe",h(e,"rel","icon"),h(e,"type","image/png"),h(e,"href",lt)},m(l,o){$(document.head,e),b(l,n,o),S(r,l,o),s=!0},p:C,i(l){s||(_(r.$$.fragment,l),s=!0)},o(l){p(r.$$.fragment,l),s=!1},d(l){l&&g(n),g(e),O(r,l)}}}class on extends L{constructor(e){super(),D(this,e,null,ln,P,{})}}new on({target:document.getElementById("app")});
