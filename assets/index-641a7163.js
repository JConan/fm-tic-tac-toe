var we=Object.defineProperty;var Xe=(e,t,n)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Y=(e,t,n)=>(Xe(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function b(){}function pe(e){return e()}function re(){return Object.create(null)}function q(e){e.forEach(pe)}function _e(e){return typeof e=="function"}function I(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Oe(e){return Object.keys(e).length===0}function me(e,...t){if(e==null){for(const l of t)l(void 0);return b}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function D(e){let t;return me(e,n=>t=n)(),t}function xe(e,t,n){e.$$.on_destroy.push(me(t,n))}const Ee=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function w(e,t){e.appendChild(t)}function K(e,t,n){e.insertBefore(t,n||null)}function V(e){e.parentNode&&e.parentNode.removeChild(e)}function G(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function O(e){return document.createElement(e)}function $e(e){return document.createTextNode(e)}function H(){return $e(" ")}function Pe(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function x(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ke(e){return Array.from(e.childNodes)}function Ce(e,t){t=""+t,e.data!==t&&(e.data=t)}function F(e,t,n,l){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}function oe(e,t,n){e.classList.toggle(t,!!n)}let ne;function T(e){ne=e}function Be(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(l=>l.call(this,t))}const L=[],se=[];let S=[];const ce=[],Le=Promise.resolve();let ee=!1;function Se(){ee||(ee=!0,Le.then(be))}function te(e){S.push(e)}const J=new Set;let k=0;function be(){if(k!==0)return;const e=ne;do{try{for(;k<L.length;){const t=L[k];k++,T(t),Ve(t.$$)}}catch(t){throw L.length=0,k=0,t}for(T(null),L.length=0,k=0;se.length;)se.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];J.has(n)||(J.add(n),n())}S.length=0}while(L.length);for(;ce.length;)ce.pop()();ee=!1,J.clear(),T(e)}function Ve(e){if(e.fragment!==null){e.update(),q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(te)}}function Ae(e){const t=[],n=[];S.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),S=t}const U=new Set;let P;function Q(){P={r:0,c:[],p:P}}function Z(){P.r||q(P.c),P=P.p}function m(e,t){e&&e.i&&(U.delete(e),e.i(t))}function y(e,t,n,l){if(e&&e.o){if(U.has(e))return;U.add(e),P.c.push(()=>{U.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function C(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function j(e){e&&e.c()}function A(e,t,n){const{fragment:l,after_update:s}=e.$$;l&&l.m(t,n),te(()=>{const o=e.$$.on_mount.map(pe).filter(_e);e.$$.on_destroy?e.$$.on_destroy.push(...o):q(o),e.$$.on_mount=[]}),s.forEach(te)}function N(e,t){const n=e.$$;n.fragment!==null&&(Ae(n.after_update),q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ne(e,t){e.$$.dirty[0]===-1&&(L.push(e),Se(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function R(e,t,n,l,s,o,u=null,a=[-1]){const p=ne;T(e);const i=e.$$={fragment:null,ctx:[],props:o,update:b,not_equal:s,bound:re(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:re(),dirty:a,skip_bound:!1,root:t.target||p.$$.root};u&&u(i.root);let $=!1;if(i.ctx=n?n(e,t.props||{},(_,d,...z)=>{const v=z.length?z[0]:d;return i.ctx&&s(i.ctx[_],i.ctx[_]=v)&&(!i.skip_bound&&i.bound[_]&&i.bound[_](v),$&&Ne(e,_)),d}):[],i.update(),$=!0,q(i.before_update),i.fragment=l?l(i.ctx):!1,t.target){if(t.hydrate){const _=ke(t.target);i.fragment&&i.fragment.l(_),_.forEach(V)}else i.fragment&&i.fragment.c();t.intro&&m(e.$$.fragment),A(e,t.target,t.anchor),be()}T(p)}class W{constructor(){Y(this,"$$");Y(this,"$$set")}$destroy(){N(this,1),this.$destroy=b}$on(t,n){if(!_e(n))return b;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(t){this.$$set&&!Oe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Te="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Te);const qe="/fm-tic-tac-toe/assets/favicon-32x32.png",B=[];function Ie(e,t=b){let n;const l=new Set;function s(a){if(I(e,a)&&(e=a,n)){const p=!B.length;for(const i of l)i[1](),B.push(i,e);if(p){for(let i=0;i<B.length;i+=2)B[i][0](B[i+1]);B.length=0}}}function o(a){s(a(e))}function u(a,p=b){const i=[a,p];return l.add(i),l.size===1&&(n=t(s,o)||b),a(e),()=>{l.delete(i),l.size===0&&n&&(n(),n=null)}}return{set:s,update:o,subscribe:u}}function je(){let e=Ie(Array(9).fill(" "));function t(u,a){return D(e)[u]!==" "?!1:(e.update(i=>(i[u]=a,i)),!0)}function n(){const u=D(e),a="^(XXX|...XXX|......XXX|X..X..X..|.X..X..X.|..X..X..X|X...X...X|..X.X.X..)",p=a.replaceAll("X","O");if(u.join("").match(a))return"X";if(u.join("").match(p))return"O"}function l(u){e.set(u.split(""))}function s(){l("         ")}function o(){return D(e).filter(a=>a===" ").length%2?"X":"O"}return{...e,setCell:t,hasWinner:n,setState:l,reset:s,nextPlayer:o}}const M=je();function ze(e){let t,n,l,s;return{c(){t=O("td"),n=$e(e[0]),F(t,"--cell-image","url("+e[1]+")"),x(t,"class","svelte-1dnavca"),oe(t,"checked",e[0]!==" ")},m(o,u){K(o,t,u),w(t,n),l||(s=Pe(t,"click",e[2]),l=!0)},p(o,[u]){u&1&&Ce(n,o[0]),u&2&&F(t,"--cell-image","url("+o[1]+")"),u&1&&oe(t,"checked",o[0]!==" ")},i:b,o:b,d(o){o&&V(t),l=!1,s()}}}function Me(e,t,n){let l;const s="/fm-tic-tac-toe/assets/icon-x.svg",o="/fm-tic-tac-toe/assets/icon-o.svg";let{cellValue:u}=t;function a(p){Be.call(this,e,p)}return e.$$set=p=>{"cellValue"in p&&n(0,u=p.cellValue)},e.$$.update=()=>{e.$$.dirty&1&&n(1,l=u==="X"?s:o)},[u,l,a]}class le extends W{constructor(t){super(),R(this,t,Me,ze,I,{cellValue:0})}}function He(e){let t;return{c(){t=O("tfoot"),t.innerHTML='<tr><th style="--bg-color: var(--light-blue)" class="svelte-1imkz7h"><div><span>X (YOU)</span><span>14</span></div></th> <th style="--bg-color: var(--silver)" class="svelte-1imkz7h"><div><span>TIES</span><span>32</span></div></th> <th style="--bg-color: var(--light-yellow)" class="svelte-1imkz7h"><div><span>O (CPU)</span><span>11</span></div></th></tr>'},m(n,l){K(n,t,l)},p:b,i:b,o:b,d(n){n&&V(t)}}}class Ue extends W{constructor(t){super(),R(this,t,null,He,I,{})}}function ie(e,t,n){const l=e.slice();return l[9]=t[n],l[11]=n,l}function ue(e,t,n){const l=e.slice();return l[9]=t[n],l[11]=n,l}function fe(e,t,n){const l=e.slice();return l[9]=t[n],l[11]=n,l}function ae(e){let t,n;return t=new le({props:{cellValue:e[9]}}),t.$on("click",e[4](e[11])),{c(){j(t.$$.fragment)},m(l,s){A(t,l,s),n=!0},p(l,s){const o={};s&8&&(o.cellValue=l[9]),t.$set(o)},i(l){n||(m(t.$$.fragment,l),n=!0)},o(l){y(t.$$.fragment,l),n=!1},d(l){N(t,l)}}}function de(e){let t,n;return t=new le({props:{cellValue:e[9]}}),t.$on("click",e[4](e[11]+3)),{c(){j(t.$$.fragment)},m(l,s){A(t,l,s),n=!0},p(l,s){const o={};s&4&&(o.cellValue=l[9]),t.$set(o)},i(l){n||(m(t.$$.fragment,l),n=!0)},o(l){y(t.$$.fragment,l),n=!1},d(l){N(t,l)}}}function he(e){let t,n;return t=new le({props:{cellValue:e[9]}}),t.$on("click",e[4](e[11]+6)),{c(){j(t.$$.fragment)},m(l,s){A(t,l,s),n=!0},p(l,s){const o={};s&2&&(o.cellValue=l[9]),t.$set(o)},i(l){n||(m(t.$$.fragment,l),n=!0)},o(l){y(t.$$.fragment,l),n=!1},d(l){N(t,l)}}}function Fe(e){let t,n,l,s,o,u,a,p,i,$,_=C(e[3]),d=[];for(let c=0;c<_.length;c+=1)d[c]=ae(fe(e,_,c));const z=c=>y(d[c],1,1,()=>{d[c]=null});let v=C(e[2]),h=[];for(let c=0;c<v.length;c+=1)h[c]=de(ue(e,v,c));const ye=c=>y(h[c],1,1,()=>{h[c]=null});let E=C(e[1]),g=[];for(let c=0;c<E.length;c+=1)g[c]=he(ie(e,E,c));const ve=c=>y(g[c],1,1,()=>{g[c]=null});return i=new Ue({}),{c(){t=O("table"),n=O("tbody"),l=O("tr");for(let c=0;c<d.length;c+=1)d[c].c();s=H(),o=O("tr");for(let c=0;c<h.length;c+=1)h[c].c();u=H(),a=O("tr");for(let c=0;c<g.length;c+=1)g[c].c();p=H(),j(i.$$.fragment),x(l,"class","svelte-uq6pfu"),x(o,"class","svelte-uq6pfu"),x(a,"class","svelte-uq6pfu"),F(t,"--hover-image","url("+e[0]+")"),x(t,"class","svelte-uq6pfu")},m(c,f){K(c,t,f),w(t,n),w(n,l);for(let r=0;r<d.length;r+=1)d[r]&&d[r].m(l,null);w(n,s),w(n,o);for(let r=0;r<h.length;r+=1)h[r]&&h[r].m(o,null);w(n,u),w(n,a);for(let r=0;r<g.length;r+=1)g[r]&&g[r].m(a,null);w(t,p),A(i,t,null),$=!0},p(c,[f]){if(f&24){_=C(c[3]);let r;for(r=0;r<_.length;r+=1){const X=fe(c,_,r);d[r]?(d[r].p(X,f),m(d[r],1)):(d[r]=ae(X),d[r].c(),m(d[r],1),d[r].m(l,null))}for(Q(),r=_.length;r<d.length;r+=1)z(r);Z()}if(f&20){v=C(c[2]);let r;for(r=0;r<v.length;r+=1){const X=ue(c,v,r);h[r]?(h[r].p(X,f),m(h[r],1)):(h[r]=de(X),h[r].c(),m(h[r],1),h[r].m(o,null))}for(Q(),r=v.length;r<h.length;r+=1)ye(r);Z()}if(f&18){E=C(c[1]);let r;for(r=0;r<E.length;r+=1){const X=ie(c,E,r);g[r]?(g[r].p(X,f),m(g[r],1)):(g[r]=he(X),g[r].c(),m(g[r],1),g[r].m(a,null))}for(Q(),r=E.length;r<g.length;r+=1)ve(r);Z()}(!$||f&1)&&F(t,"--hover-image","url("+c[0]+")")},i(c){if(!$){for(let f=0;f<_.length;f+=1)m(d[f]);for(let f=0;f<v.length;f+=1)m(h[f]);for(let f=0;f<E.length;f+=1)m(g[f]);m(i.$$.fragment,c),$=!0}},o(c){d=d.filter(Boolean);for(let f=0;f<d.length;f+=1)y(d[f]);h=h.filter(Boolean);for(let f=0;f<h.length;f+=1)y(h[f]);g=g.filter(Boolean);for(let f=0;f<g.length;f+=1)y(g[f]);y(i.$$.fragment,c),$=!1},d(c){c&&V(t),G(d,c),G(h,c),G(g,c),N(i)}}}function Ke(e,t,n){let l,s,o,u,a;xe(e,M,d=>n(6,a=d));const p="/fm-tic-tac-toe/assets/icon-x-outline.svg",i="/fm-tic-tac-toe/assets/icon-o-outline.svg";let $=M.nextPlayer();const _=d=>()=>{M.setCell(d,$),n(5,$=M.nextPlayer())};return e.$$.update=()=>{e.$$.dirty&64&&n(3,l=a.slice(0,3)),e.$$.dirty&64&&n(2,s=a.slice(3,6)),e.$$.dirty&64&&n(1,o=a.slice(6,9)),e.$$.dirty&32&&n(0,u=$==="X"?p:i)},[u,o,s,l,_,$,a]}class Re extends W{constructor(t){super(),R(this,t,Ke,Fe,I,{})}}const{document:ge}=Ee;function We(e){let t,n,l,s;return l=new Re({}),{c(){t=O("link"),n=H(),j(l.$$.fragment),ge.title="Tic Tac Toe",x(t,"rel","icon"),x(t,"type","image/png"),x(t,"href",qe)},m(o,u){w(ge.head,t),K(o,n,u),A(l,o,u),s=!0},p:b,i(o){s||(m(l.$$.fragment,o),s=!0)},o(o){y(l.$$.fragment,o),s=!1},d(o){o&&V(n),V(t),N(l,o)}}}function Ye(e){return window.addEventListener("message",t=>{var n;if(t.data==="getHeight"){const l=document.body.scrollHeight;(n=t.source)==null||n.postMessage({height:l},{targetOrigin:t.origin})}}),[]}class De extends W{constructor(t){super(),R(this,t,Ye,We,I,{})}}new De({target:document.getElementById("app")});
