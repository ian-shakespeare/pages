import{s as x,n as k}from"../chunks/scheduler.e108d1fd.js";import{S as y,i as C,s as p,r as D,y as z,f as d,c as $,u as L,a as v,v as w,d as A,t as H,w as I,g as h,h as m,j as u,z as M,k as _,x as f,A as P,m as E,n as T}from"../chunks/index.2c788b53.js";import{e as R}from"../chunks/each.e59479a4.js";import{I as S}from"../chunks/InfoPage.5b697575.js";function j(c,t,e){const o=c.slice();return o[1]=t[e][0],o[2]=t[e][1],o}function q(c){let t,e,o,a,r,l,s;return{c(){t=h("tr"),e=h("td"),o=E(c[1]),a=p(),r=h("td"),l=E(c[2]),s=p(),this.h()},l(i){t=m(i,"TR",{class:!0});var n=u(t);e=m(n,"TD",{class:!0});var g=u(e);o=T(g,c[1]),g.forEach(d),a=$(n),r=m(n,"TD",{class:!0});var b=u(r);l=T(b,c[2]),b.forEach(d),s=$(n),n.forEach(d),this.h()},h(){_(e,"class","p-2"),_(r,"class","p-2"),_(t,"class","rounded even:bg-slate-100 even:dark:bg-slate-800")},m(i,n){v(i,t,n),f(t,e),f(e,o),f(t,a),f(t,r),f(r,l),f(t,s)},p:k,d(i){i&&d(t)}}}function B(c){let t,e,o='<th class="p-2">Date</th> <th class="p-2">Event</th>',a,r=R([]),l=[];for(let s=0;s<0;s+=1)l[s]=q(j(c,r,s));return{c(){t=h("table"),e=h("tr"),e.innerHTML=o,a=p();for(let s=0;s<0;s+=1)l[s].c();this.h()},l(s){t=m(s,"TABLE",{});var i=u(t);e=m(i,"TR",{class:!0,["data-svelte-h"]:!0}),M(e)!=="svelte-1rsd3b"&&(e.innerHTML=o),a=$(i);for(let n=0;n<0;n+=1)l[n].l(i);i.forEach(d),this.h()},h(){_(e,"class","text-left font-semibold")},m(s,i){v(s,t,i),f(t,e),f(t,a);for(let n=0;n<0;n+=1)l[n]&&l[n].m(t,null)},p:k,d(s){s&&d(t),P(l,s)}}}function F(c){let t,e,o;return e=new S({props:{title:"Diet Calculator",description:"Calorie calculator for common foods.",$$slots:{default:[B]},$$scope:{ctx:c}}}),{c(){t=p(),D(e.$$.fragment),this.h()},l(a){z("svelte-7kz2dz",document.head).forEach(d),t=$(a),L(e.$$.fragment,a),this.h()},h(){document.title="Diet Calculator"},m(a,r){v(a,t,r),w(e,a,r),o=!0},p(a,[r]){const l={};r&32&&(l.$$scope={dirty:r,ctx:a}),e.$set(l)},i(a){o||(A(e.$$.fragment,a),o=!0)},o(a){H(e.$$.fragment,a),o=!1},d(a){a&&d(t),I(e,a)}}}function G(c){return[]}class Q extends y{constructor(t){super(),C(this,t,G,F,x,{})}}export{Q as component};
