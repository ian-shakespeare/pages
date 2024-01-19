import{s as W,n as z}from"../chunks/scheduler.e108d1fd.js";import{S as F,i as R,s as c,r as S,y as j,f as a,c as d,u as D,a as s,v as G,d as J,t as q,w as E,g as m,h as u,z as x,k as b}from"../chunks/index.bbcc9712.js";import{I as A}from"../chunks/InfoPage.12623d3a.js";function B(M){let l,r="Visas and Customs",o,t,i=`In order to enter Japan, you must complete a customs form.
    You can do this on arrival or
    <a class="underline" href="https://vjw-lp.digital.go.jp/en/">here (Visit Japan Web)</a>
    ahead of time. <b>You do not need to register for a Visa</b>.
    You will be given a Tourism Visa on arrival.
    You do not need to register one ahead of time.`,h,g,$,f,I="Mobile Data",w,v,V=`Your ability to use mobile data will depend entirely on your carrier.
    My carrier (Google Fi) has international coverage for no additional charge,
    but I&#39;m not sure of the coverage of any other carriers.
    We will be using a <a class="underline" href="https://discord.gg/8a7Gv8kCPa">Discord Server</a>
    for WiFi messaging.`,k,y,H,p,Y="Weather",P,_,L=`Typical March weather in Tokyo ranges between 40-60°F, with slight to moderate rainfall.
    I'd recommend a good sweater, long pants, water-resistant shoes, and an umbrella
    (you can purchase an umbrella for <$5 at any convenience store in Tokyo).`,T,C;return{c(){l=m("h2"),l.textContent=r,o=c(),t=m("p"),t.innerHTML=i,h=c(),g=m("hr"),$=c(),f=m("h2"),f.textContent=I,w=c(),v=m("p"),v.innerHTML=V,k=c(),y=m("hr"),H=c(),p=m("h2"),p.textContent=Y,P=c(),_=m("p"),_.textContent=L,T=c(),C=m("hr"),this.h()},l(e){l=u(e,"H2",{class:!0,["data-svelte-h"]:!0}),x(l)!=="svelte-z43m4t"&&(l.textContent=r),o=d(e),t=u(e,"P",{["data-svelte-h"]:!0}),x(t)!=="svelte-ntrtdb"&&(t.innerHTML=i),h=d(e),g=u(e,"HR",{class:!0}),$=d(e),f=u(e,"H2",{class:!0,["data-svelte-h"]:!0}),x(f)!=="svelte-nxngnk"&&(f.textContent=I),w=d(e),v=u(e,"P",{["data-svelte-h"]:!0}),x(v)!=="svelte-14iz3ce"&&(v.innerHTML=V),k=d(e),y=u(e,"HR",{class:!0}),H=d(e),p=u(e,"H2",{class:!0,["data-svelte-h"]:!0}),x(p)!=="svelte-c62u7y"&&(p.textContent=Y),P=d(e),_=u(e,"P",{["data-svelte-h"]:!0}),x(_)!=="svelte-95smtg"&&(_.textContent=L),T=d(e),C=u(e,"HR",{class:!0}),this.h()},h(){b(l,"class","text-2xl font-semibold"),b(g,"class","my-2 border-slate-200 dark:border-slate-700"),b(f,"class","text-2xl font-semibold"),b(y,"class","my-2 border-slate-200 dark:border-slate-700"),b(p,"class","text-2xl font-semibold"),b(C,"class","my-2 border-slate-200 dark:border-slate-700")},m(e,n){s(e,l,n),s(e,o,n),s(e,t,n),s(e,h,n),s(e,g,n),s(e,$,n),s(e,f,n),s(e,w,n),s(e,v,n),s(e,k,n),s(e,y,n),s(e,H,n),s(e,p,n),s(e,P,n),s(e,_,n),s(e,T,n),s(e,C,n)},p:z,d(e){e&&(a(l),a(o),a(t),a(h),a(g),a($),a(f),a(w),a(v),a(k),a(y),a(H),a(p),a(P),a(_),a(T),a(C))}}}function K(M){let l,r,o;return r=new A({props:{title:"Packing and Preparing",description:"Information regarding Visas, mobile data, weather, and more.",$$slots:{default:[B]},$$scope:{ctx:M}}}),{c(){l=c(),S(r.$$.fragment),this.h()},l(t){j("svelte-my7r27",document.head).forEach(a),l=d(t),D(r.$$.fragment,t),this.h()},h(){document.title="Packing and Preparing"},m(t,i){s(t,l,i),G(r,t,i),o=!0},p(t,[i]){const h={};i&1&&(h.$$scope={dirty:i,ctx:t}),r.$set(h)},i(t){o||(J(r.$$.fragment,t),o=!0)},o(t){q(r.$$.fragment,t),o=!1},d(t){t&&a(l),E(r,t)}}}class U extends F{constructor(l){super(),R(this,l,null,K,W,{})}}export{U as component};