import{s as K,n as Y,r as Q}from"../chunks/scheduler.e108d1fd.js";import{S as V,i as W,s as D,r as J,y as X,f as h,c as N,u as Z,a as B,v as tt,d as et,t as lt,w as at,g as b,m as S,h as v,j as A,n as x,z as H,k,x as _,A as U,o as q,B as j}from"../chunks/index.bbcc9712.js";import{e as P}from"../chunks/each.e59479a4.js";import{I as st}from"../chunks/InfoPage.12623d3a.js";function M(l,t,o){const a=l.slice();return a[6]=t[o][0],a[7]=t[o][1],a}function z(l,t,o){const a=l.slice();return a[10]=t[o],a}function ot(l,t,o){const a=l.slice();return a[13]=t[o],a}function rt(l){let t,o;return{c(){t=b("td"),o=S(l[13]),this.h()},l(a){t=v(a,"TD",{class:!0});var s=A(t);o=x(s,l[13]),s.forEach(h),this.h()},h(){k(t,"class","px-2 py-3 text-lg last:text-right")},m(a,s){B(a,t,s),_(t,o)},p:Y,d(a){a&&h(t)}}}function F(l){let t,o=l[10]+"",a;return{c(){t=b("td"),a=S(o),this.h()},l(s){t=v(s,"TD",{class:!0});var n=A(t);a=x(n,o),n.forEach(h),this.h()},h(){k(t,"class","px-2 py-3 capitalize underline-offset-2 first:group-data-[active=true]:underline")},m(s,n){B(s,t,n),_(t,a)},p:Y,d(s){s&&h(t)}}}function G(l){let t,o,a,s,n="-",E,g,d=l[0].get(l[6])+"",f,C,m,R="+",w,y,L,$,O=P([l[6].replaceAll("_"," ").toLowerCase(),l[7]]),c=[];for(let e=0;e<2;e+=1)c[e]=F(z(l,O,e));function r(){return l[4](l[6])}function p(){return l[5](l[6])}return{c(){t=b("tr");for(let e=0;e<2;e+=1)c[e].c();o=D(),a=b("td"),s=b("button"),s.textContent=n,E=D(),g=b("span"),f=S(d),C=D(),m=b("button"),m.textContent=R,w=D(),this.h()},l(e){t=v(e,"TR",{"data-active":!0,class:!0});var u=A(t);for(let T=0;T<2;T+=1)c[T].l(u);o=N(u),a=v(u,"TD",{class:!0});var i=A(a);s=v(i,"BUTTON",{class:!0,["data-svelte-h"]:!0}),H(s)!=="svelte-19hccxb"&&(s.textContent=n),E=N(i),g=v(i,"SPAN",{class:!0});var I=A(g);f=x(I,d),I.forEach(h),C=N(i),m=v(i,"BUTTON",{class:!0,["data-svelte-h"]:!0}),H(m)!=="svelte-n37xq8"&&(m.textContent=R),i.forEach(h),w=N(u),u.forEach(h),this.h()},h(){k(s,"class","w-6 bg-slate-200 rounded dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600"),k(g,"class","mx-2"),k(m,"class","w-6 bg-slate-200 rounded dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600"),k(a,"class","px-2 text-right"),k(t,"data-active",y=l[0].get(l[6])>0),k(t,"class","group odd:bg-slate-100 dark:odd:bg-slate-800")},m(e,u){B(e,t,u);for(let i=0;i<2;i+=1)c[i]&&c[i].m(t,null);_(t,o),_(t,a),_(a,s),_(a,E),_(a,g),_(g,f),_(a,C),_(a,m),_(t,w),L||($=[U(s,"click",r),U(m,"click",p)],L=!0)},p(e,u){if(l=e,u&4){O=P([l[6].replaceAll("_"," ").toLowerCase(),l[7]]);let i;for(i=0;i<2;i+=1){const I=z(l,O,i);c[i]?c[i].p(I,u):(c[i]=F(I),c[i].c(),c[i].m(t,o))}for(;i<2;i+=1)c[i].d(1)}u&1&&d!==(d=l[0].get(l[6])+"")&&q(f,d),u&1&&y!==(y=l[0].get(l[6])>0)&&k(t,"data-active",y)},d(e){e&&h(t),j(c,e),L=!1,Q($)}}}function nt(l){let t,o,a,s,n,E="Clear",g,d,f,C,m,R,w,y,L=P(["Name","Calories","Quantity"]),$=[];for(let r=0;r<3;r+=1)$[r]=rt(ot(l,L,r));let O=P(Object.entries(l[2])),c=[];for(let r=0;r<O.length;r+=1)c[r]=G(M(l,O,r));return{c(){t=b("div"),o=S("Total Calories: "),a=S(l[1]),s=D(),n=b("button"),n.textContent=E,g=D(),d=b("table"),f=b("thead"),C=b("tr");for(let r=0;r<3;r+=1)$[r].c();m=D(),R=b("tbody");for(let r=0;r<c.length;r+=1)c[r].c();this.h()},l(r){t=v(r,"DIV",{class:!0});var p=A(t);o=x(p,"Total Calories: "),a=x(p,l[1]),s=N(p),n=v(p,"BUTTON",{class:!0,["data-svelte-h"]:!0}),H(n)!=="svelte-1b2pztt"&&(n.textContent=E),p.forEach(h),g=N(r),d=v(r,"TABLE",{});var e=A(d);f=v(e,"THEAD",{});var u=A(f);C=v(u,"TR",{});var i=A(C);for(let T=0;T<3;T+=1)$[T].l(i);i.forEach(h),u.forEach(h),m=N(e),R=v(e,"TBODY",{});var I=A(R);for(let T=0;T<c.length;T+=1)c[T].l(I);I.forEach(h),e.forEach(h),this.h()},h(){k(n,"class","underline"),k(t,"class","flex justify-between")},m(r,p){B(r,t,p),_(t,o),_(t,a),_(t,s),_(t,n),B(r,g,p),B(r,d,p),_(d,f),_(f,C);for(let e=0;e<3;e+=1)$[e]&&$[e].m(C,null);_(d,m),_(d,R);for(let e=0;e<c.length;e+=1)c[e]&&c[e].m(R,null);w||(y=U(n,"click",l[3]),w=!0)},p(r,p){if(p&2&&q(a,r[1]),p&5){O=P(Object.entries(r[2]));let e;for(e=0;e<O.length;e+=1){const u=M(r,O,e);c[e]?c[e].p(u,p):(c[e]=G(u),c[e].c(),c[e].m(R,null))}for(;e<c.length;e+=1)c[e].d(1);c.length=O.length}},d(r){r&&(h(t),h(g),h(d)),j($,r),j(c,r),w=!1,y()}}}function ct(l){let t,o,a;return o=new st({props:{title:"Calorie Calculator",description:"Calorie calculator for common foods.",$$slots:{default:[nt]},$$scope:{ctx:l}}}),{c(){t=D(),J(o.$$.fragment),this.h()},l(s){X("svelte-1rftsp2",document.head).forEach(h),t=N(s),Z(o.$$.fragment,s),this.h()},h(){document.title="Calorie Calculator"},m(s,n){B(s,t,n),tt(o,s,n),a=!0},p(s,[n]){const E={};n&65539&&(E.$$scope={dirty:n,ctx:s}),o.$set(E)},i(s){a||(et(o.$$.fragment,s),a=!0)},o(s){lt(o.$$.fragment,s),a=!1},d(s){s&&h(t),at(o,s)}}}function it(l,t,o){let a;const s={EGG:120,BEEF:70,CHICKEN:70,CHEERIOS:140,OATMEAL:160,TORTILLA:450,CHIPS:75,NUTS:800,YOGURT:150,MUFFIN:400,BREAD:80,HONEY:60,PROTEIN_BAR:300,PROTEIN_POWDER:120,SHREDDED_CHEESE:110,RICE:200};let n=new Map(Object.keys(s).map(f=>[f,0]));const E=()=>o(0,n=new Map(Object.keys(s).map(f=>[f,0]))),g=f=>{n.set(f,Math.max(0,n.get(f)-1)),o(0,n)},d=f=>{n.set(f,n.get(f)+1),o(0,n)};return l.$$.update=()=>{l.$$.dirty&1&&o(1,a=Array.from(n.entries()).reduce((f,[C,m])=>f+m*s[C],0))},[n,a,s,E,g,d]}class dt extends V{constructor(t){super(),W(this,t,it,ct,K,{})}}export{dt as component};