var ve=Object.defineProperty;var Xe=(e,t,n)=>t in e?ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Y=(e,t,n)=>(Xe(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();function b(){}function ge(e){return e()}function re(){return Object.create(null)}function I(e){e.forEach(ge)}function pe(e){return typeof e=="function"}function j(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function we(e){return Object.keys(e).length===0}function _e(e,...t){if(e==null){for(const l of t)l(void 0);return b}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function D(e){let t;return _e(e,n=>t=n)(),t}function Oe(e,t,n){e.$$.on_destroy.push(_e(t,n))}function X(e,t){e.appendChild(t)}function K(e,t,n){e.insertBefore(t,n||null)}function L(e){e.parentNode&&e.parentNode.removeChild(e)}function G(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function O(e){return document.createElement(e)}function me(e){return document.createTextNode(e)}function U(){return me(" ")}function xe(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function x(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Pe(e){return Array.from(e.childNodes)}function ke(e,t){t=""+t,e.data!==t&&(e.data=t)}function H(e,t,n,l){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}function ce(e,t,n){e.classList.toggle(t,!!n)}let ne;function q(e){ne=e}function Ee(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(l=>l.call(this,t))}const S=[],se=[];let V=[];const oe=[],Ce=Promise.resolve();let ee=!1;function Be(){ee||(ee=!0,Ce.then($e))}function te(e){V.push(e)}const J=new Set;let E=0;function $e(){if(E!==0)return;const e=ne;do{try{for(;E<S.length;){const t=S[E];E++,q(t),Se(t.$$)}}catch(t){throw S.length=0,E=0,t}for(q(null),S.length=0,E=0;se.length;)se.pop()();for(let t=0;t<V.length;t+=1){const n=V[t];J.has(n)||(J.add(n),n())}V.length=0}while(S.length);for(;oe.length;)oe.pop()();ee=!1,J.clear(),q(e)}function Se(e){if(e.fragment!==null){e.update(),I(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(te)}}function Ve(e){const t=[],n=[];V.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),V=t}const F=new Set;let k;function Q(){k={r:0,c:[],p:k}}function Z(){k.r||I(k.c),k=k.p}function m(e,t){e&&e.i&&(F.delete(e),e.i(t))}function y(e,t,n,l){if(e&&e.o){if(F.has(e))return;F.add(e),k.c.push(()=>{F.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function C(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function T(e){e&&e.c()}function A(e,t,n){const{fragment:l,after_update:s}=e.$$;l&&l.m(t,n),te(()=>{const c=e.$$.on_mount.map(ge).filter(pe);e.$$.on_destroy?e.$$.on_destroy.push(...c):I(c),e.$$.on_mount=[]}),s.forEach(te)}function N(e,t){const n=e.$$;n.fragment!==null&&(Ve(n.after_update),I(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Le(e,t){e.$$.dirty[0]===-1&&(S.push(e),Be(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function R(e,t,n,l,s,c,u=null,a=[-1]){const p=ne;q(e);const i=e.$$={fragment:null,ctx:[],props:c,update:b,not_equal:s,bound:re(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:re(),dirty:a,skip_bound:!1,root:t.target||p.$$.root};u&&u(i.root);let $=!1;if(i.ctx=n?n(e,t.props||{},(_,d,...z)=>{const v=z.length?z[0]:d;return i.ctx&&s(i.ctx[_],i.ctx[_]=v)&&(!i.skip_bound&&i.bound[_]&&i.bound[_](v),$&&Le(e,_)),d}):[],i.update(),$=!0,I(i.before_update),i.fragment=l?l(i.ctx):!1,t.target){if(t.hydrate){const _=Pe(t.target);i.fragment&&i.fragment.l(_),_.forEach(L)}else i.fragment&&i.fragment.c();t.intro&&m(e.$$.fragment),A(e,t.target,t.anchor),$e()}q(p)}class W{constructor(){Y(this,"$$");Y(this,"$$set")}$destroy(){N(this,1),this.$destroy=b}$on(t,n){if(!pe(n))return b;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(t){this.$$set&&!we(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ae="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ae);const Ne="/fm-tic-tac-toe/assets/favicon-32x32.png",B=[];function qe(e,t=b){let n;const l=new Set;function s(a){if(j(e,a)&&(e=a,n)){const p=!B.length;for(const i of l)i[1](),B.push(i,e);if(p){for(let i=0;i<B.length;i+=2)B[i][0](B[i+1]);B.length=0}}}function c(a){s(a(e))}function u(a,p=b){const i=[a,p];return l.add(i),l.size===1&&(n=t(s,c)||b),a(e),()=>{l.delete(i),l.size===0&&n&&(n(),n=null)}}return{set:s,update:c,subscribe:u}}function Ie(){let e=qe(Array(9).fill(" "));function t(u,a){return D(e)[u]!==" "?!1:(e.update(i=>(i[u]=a,i)),!0)}function n(){const u=D(e),a="^(XXX|...XXX|......XXX|X..X..X..|.X..X..X.|..X..X..X|X...X...X|..X.X.X..)",p=a.replaceAll("X","O");if(u.join("").match(a))return"X";if(u.join("").match(p))return"O"}function l(u){e.set(u.split(""))}function s(){l("         ")}function c(){return D(e).filter(a=>a===" ").length%2?"X":"O"}return{...e,setCell:t,hasWinner:n,setState:l,reset:s,nextPlayer:c}}const M=Ie();function je(e){let t,n,l,s;return{c(){t=O("td"),n=me(e[0]),H(t,"--cell-image","url("+e[1]+")"),x(t,"class","svelte-1dnavca"),ce(t,"checked",e[0]!==" ")},m(c,u){K(c,t,u),X(t,n),l||(s=xe(t,"click",e[2]),l=!0)},p(c,[u]){u&1&&ke(n,c[0]),u&2&&H(t,"--cell-image","url("+c[1]+")"),u&1&&ce(t,"checked",c[0]!==" ")},i:b,o:b,d(c){c&&L(t),l=!1,s()}}}function Te(e,t,n){let l;const s="/fm-tic-tac-toe/assets/icon-x.svg",c="/fm-tic-tac-toe/assets/icon-o.svg";let{cellValue:u}=t;function a(p){Ee.call(this,e,p)}return e.$$set=p=>{"cellValue"in p&&n(0,u=p.cellValue)},e.$$.update=()=>{e.$$.dirty&1&&n(1,l=u==="X"?s:c)},[u,l,a]}class le extends W{constructor(t){super(),R(this,t,Te,je,j,{cellValue:0})}}function ze(e){let t;return{c(){t=O("tfoot"),t.innerHTML='<tr><th style="--bg-color: var(--light-blue)" class="svelte-1imkz7h"><div><span>X (YOU)</span><span>14</span></div></th> <th style="--bg-color: var(--silver)" class="svelte-1imkz7h"><div><span>TIES</span><span>32</span></div></th> <th style="--bg-color: var(--light-yellow)" class="svelte-1imkz7h"><div><span>O (CPU)</span><span>11</span></div></th></tr>'},m(n,l){K(n,t,l)},p:b,i:b,o:b,d(n){n&&L(t)}}}class Me extends W{constructor(t){super(),R(this,t,null,ze,j,{})}}function ie(e,t,n){const l=e.slice();return l[9]=t[n],l[11]=n,l}function ue(e,t,n){const l=e.slice();return l[9]=t[n],l[11]=n,l}function fe(e,t,n){const l=e.slice();return l[9]=t[n],l[11]=n,l}function ae(e){let t,n;return t=new le({props:{cellValue:e[9]}}),t.$on("click",e[4](e[11])),{c(){T(t.$$.fragment)},m(l,s){A(t,l,s),n=!0},p(l,s){const c={};s&8&&(c.cellValue=l[9]),t.$set(c)},i(l){n||(m(t.$$.fragment,l),n=!0)},o(l){y(t.$$.fragment,l),n=!1},d(l){N(t,l)}}}function de(e){let t,n;return t=new le({props:{cellValue:e[9]}}),t.$on("click",e[4](e[11]+3)),{c(){T(t.$$.fragment)},m(l,s){A(t,l,s),n=!0},p(l,s){const c={};s&4&&(c.cellValue=l[9]),t.$set(c)},i(l){n||(m(t.$$.fragment,l),n=!0)},o(l){y(t.$$.fragment,l),n=!1},d(l){N(t,l)}}}function he(e){let t,n;return t=new le({props:{cellValue:e[9]}}),t.$on("click",e[4](e[11]+6)),{c(){T(t.$$.fragment)},m(l,s){A(t,l,s),n=!0},p(l,s){const c={};s&2&&(c.cellValue=l[9]),t.$set(c)},i(l){n||(m(t.$$.fragment,l),n=!0)},o(l){y(t.$$.fragment,l),n=!1},d(l){N(t,l)}}}function Ue(e){let t,n,l,s,c,u,a,p,i,$,_=C(e[3]),d=[];for(let o=0;o<_.length;o+=1)d[o]=ae(fe(e,_,o));const z=o=>y(d[o],1,1,()=>{d[o]=null});let v=C(e[2]),h=[];for(let o=0;o<v.length;o+=1)h[o]=de(ue(e,v,o));const be=o=>y(h[o],1,1,()=>{h[o]=null});let P=C(e[1]),g=[];for(let o=0;o<P.length;o+=1)g[o]=he(ie(e,P,o));const ye=o=>y(g[o],1,1,()=>{g[o]=null});return i=new Me({}),{c(){t=O("table"),n=O("tbody"),l=O("tr");for(let o=0;o<d.length;o+=1)d[o].c();s=U(),c=O("tr");for(let o=0;o<h.length;o+=1)h[o].c();u=U(),a=O("tr");for(let o=0;o<g.length;o+=1)g[o].c();p=U(),T(i.$$.fragment),x(l,"class","svelte-uq6pfu"),x(c,"class","svelte-uq6pfu"),x(a,"class","svelte-uq6pfu"),H(t,"--hover-image","url("+e[0]+")"),x(t,"class","svelte-uq6pfu")},m(o,f){K(o,t,f),X(t,n),X(n,l);for(let r=0;r<d.length;r+=1)d[r]&&d[r].m(l,null);X(n,s),X(n,c);for(let r=0;r<h.length;r+=1)h[r]&&h[r].m(c,null);X(n,u),X(n,a);for(let r=0;r<g.length;r+=1)g[r]&&g[r].m(a,null);X(t,p),A(i,t,null),$=!0},p(o,[f]){if(f&24){_=C(o[3]);let r;for(r=0;r<_.length;r+=1){const w=fe(o,_,r);d[r]?(d[r].p(w,f),m(d[r],1)):(d[r]=ae(w),d[r].c(),m(d[r],1),d[r].m(l,null))}for(Q(),r=_.length;r<d.length;r+=1)z(r);Z()}if(f&20){v=C(o[2]);let r;for(r=0;r<v.length;r+=1){const w=ue(o,v,r);h[r]?(h[r].p(w,f),m(h[r],1)):(h[r]=de(w),h[r].c(),m(h[r],1),h[r].m(c,null))}for(Q(),r=v.length;r<h.length;r+=1)be(r);Z()}if(f&18){P=C(o[1]);let r;for(r=0;r<P.length;r+=1){const w=ie(o,P,r);g[r]?(g[r].p(w,f),m(g[r],1)):(g[r]=he(w),g[r].c(),m(g[r],1),g[r].m(a,null))}for(Q(),r=P.length;r<g.length;r+=1)ye(r);Z()}(!$||f&1)&&H(t,"--hover-image","url("+o[0]+")")},i(o){if(!$){for(let f=0;f<_.length;f+=1)m(d[f]);for(let f=0;f<v.length;f+=1)m(h[f]);for(let f=0;f<P.length;f+=1)m(g[f]);m(i.$$.fragment,o),$=!0}},o(o){d=d.filter(Boolean);for(let f=0;f<d.length;f+=1)y(d[f]);h=h.filter(Boolean);for(let f=0;f<h.length;f+=1)y(h[f]);g=g.filter(Boolean);for(let f=0;f<g.length;f+=1)y(g[f]);y(i.$$.fragment,o),$=!1},d(o){o&&L(t),G(d,o),G(h,o),G(g,o),N(i)}}}function Fe(e,t,n){let l,s,c,u,a;Oe(e,M,d=>n(6,a=d));const p="/fm-tic-tac-toe/assets/icon-x-outline.svg",i="/fm-tic-tac-toe/assets/icon-o-outline.svg";let $=M.nextPlayer();const _=d=>()=>{M.setCell(d,$),n(5,$=M.nextPlayer())};return e.$$.update=()=>{e.$$.dirty&64&&n(3,l=a.slice(0,3)),e.$$.dirty&64&&n(2,s=a.slice(3,6)),e.$$.dirty&64&&n(1,c=a.slice(6,9)),e.$$.dirty&32&&n(0,u=$==="X"?p:i)},[u,c,s,l,_,$,a]}class He extends W{constructor(t){super(),R(this,t,Fe,Ue,j,{})}}function Ke(e){let t,n,l,s;return l=new He({}),{c(){t=O("link"),n=U(),T(l.$$.fragment),document.title="Tic Tac Toe",x(t,"rel","icon"),x(t,"type","image/png"),x(t,"href",Ne)},m(c,u){X(document.head,t),K(c,n,u),A(l,c,u),s=!0},p:b,i(c){s||(m(l.$$.fragment,c),s=!0)},o(c){y(l.$$.fragment,c),s=!1},d(c){c&&L(n),L(t),N(l,c)}}}class Re extends W{constructor(t){super(),R(this,t,null,Ke,j,{})}}new Re({target:document.getElementById("app")});
