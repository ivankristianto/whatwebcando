import{a,b as t,c,d as i,i as r,s as l,e,S as s,f as n,h as o,j as f,l as h,o as u,q as v,n as g,g as d,t as p,m as E,k as m,r as w,D as I}from"./index.9a31b5d4.js";function A(a){var t,c,i,r,l,e,s,g,A,j,G,b,P,y,D,F,V,k,x,z,C=a.article.tags.join(", ")+"",H=a.article.title+"",M=a.article.description+"",N=a.article.source+"";return{c:function(){t=n("a"),c=n("figure"),i=n("img"),e=d(),s=n("figcaption"),g=p(C),A=d(),j=n("div"),G=n("h3"),b=p(H),P=d(),y=n("p"),D=p(M),F=d(),V=n("p"),k=p("Article by "),x=p(N),this.h()},l:function(a){t=o(a,"A",{href:!0,target:!0,rel:!0,class:!0});var r=f(t);c=o(r,"FIGURE",{});var l=f(c);i=o(l,"IMG",{alt:!0,loading:!0,src:!0,class:!0}),e=E(l),s=o(l,"FIGCAPTION",{class:!0});var n=f(s);g=m(n,C),n.forEach(h),l.forEach(h),A=E(r),j=o(r,"DIV",{class:!0});var u=f(j);G=o(u,"H3",{class:!0});var v=f(G);b=m(v,H),v.forEach(h),P=E(u),y=o(u,"P",{});var d=f(y);D=m(d,M),d.forEach(h),F=E(u),V=o(u,"P",{class:!0});var p=f(V);k=m(p,"Article by "),x=m(p,N),p.forEach(h),u.forEach(h),r.forEach(h),this.h()},h:function(){u(i,"alt",r=a.article.title),u(i,"loading","lazy"),i.src!==(l=a.article.image)&&u(i,"src",l),u(i,"class","svelte-1itfw3h"),u(s,"class","svelte-1itfw3h"),u(G,"class","svelte-1itfw3h"),u(V,"class","source svelte-1itfw3h"),u(j,"class","description svelte-1itfw3h"),u(t,"href",z=a.article.url),u(t,"target","_blank"),u(t,"rel","noopener"),u(t,"class","svelte-1itfw3h")},m:function(a,r){v(a,t,r),w(t,c),w(c,i),w(c,e),w(c,s),w(s,g),w(t,A),w(t,j),w(j,G),w(G,b),w(j,P),w(j,y),w(y,D),w(j,F),w(j,V),w(V,k),w(V,x)},p:function(a,c){a.article&&r!==(r=c.article.title)&&u(i,"alt",r),a.article&&i.src!==(l=c.article.image)&&u(i,"src",l),a.article&&C!==(C=c.article.tags.join(", ")+"")&&I(g,C),a.article&&H!==(H=c.article.title+"")&&I(b,H),a.article&&M!==(M=c.article.description+"")&&I(D,M),a.article&&N!==(N=c.article.source+"")&&I(x,N),a.article&&z!==(z=c.article.url)&&u(t,"href",z)},d:function(a){a&&h(t)}}}function j(a){var t,c,i,r,l,e,s,g,A,j,G,b,P,y,D,F,V=a.article.tags.join(", ")+"",k=a.article.title+"",x=a.article.description+"";return{c:function(){t=n("a"),c=n("figure"),i=n("img"),e=d(),s=n("figcaption"),g=p(V),A=d(),j=n("div"),G=n("h3"),b=p(k),P=d(),y=n("p"),D=p(x),this.h()},l:function(a){t=o(a,"A",{rel:!0,href:!0,class:!0});var r=f(t);c=o(r,"FIGURE",{});var l=f(c);i=o(l,"IMG",{alt:!0,loading:!0,src:!0,class:!0}),e=E(l),s=o(l,"FIGCAPTION",{class:!0});var n=f(s);g=m(n,V),n.forEach(h),l.forEach(h),A=E(r),j=o(r,"DIV",{class:!0});var u=f(j);G=o(u,"H3",{class:!0});var v=f(G);b=m(v,k),v.forEach(h),P=E(u),y=o(u,"P",{});var d=f(y);D=m(d,x),d.forEach(h),u.forEach(h),r.forEach(h),this.h()},h:function(){u(i,"alt",r=a.article.title),u(i,"loading","lazy"),i.src!==(l=a.article.image)&&u(i,"src",l),u(i,"class","svelte-1itfw3h"),u(s,"class","svelte-1itfw3h"),u(G,"class","svelte-1itfw3h"),u(j,"class","description svelte-1itfw3h"),u(t,"rel","prefetch"),u(t,"href",F="/articles/"+a.article.slug+"/"),u(t,"class","svelte-1itfw3h")},m:function(a,r){v(a,t,r),w(t,c),w(c,i),w(c,e),w(c,s),w(s,g),w(t,A),w(t,j),w(j,G),w(G,b),w(j,P),w(j,y),w(y,D)},p:function(a,c){a.article&&r!==(r=c.article.title)&&u(i,"alt",r),a.article&&i.src!==(l=c.article.image)&&u(i,"src",l),a.article&&V!==(V=c.article.tags.join(", ")+"")&&I(g,V),a.article&&k!==(k=c.article.title+"")&&I(b,k),a.article&&x!==(x=c.article.description+"")&&I(D,x),a.article&&F!==(F="/articles/"+c.article.slug+"/")&&u(t,"href",F)},d:function(a){a&&h(t)}}}function G(a){var t;function c(a,t){return"wwcd"===t.article.source?j:A}var i=c(0,a),r=i(a);return{c:function(){t=n("div"),r.c(),this.h()},l:function(a){t=o(a,"DIV",{class:!0});var c=f(t);r.l(c),c.forEach(h),this.h()},h:function(){u(t,"class","article svelte-1itfw3h")},m:function(a,c){v(a,t,c),r.m(t,null)},p:function(a,l){i===(i=c(0,l))&&r?r.p(a,l):(r.d(1),(r=i(l))&&(r.c(),r.m(t,null)))},i:g,o:g,d:function(a){a&&h(t),r.d()}}}function b(a,t,c){var i=t.article;return a.$set=function(a){"article"in a&&c("article",i=a.article)},{article:i}}var P=function(n){function o(a){var s;return t(this,o),s=c(this,i(o).call(this)),r(e(s),a,b,G,l,{article:0}),s}return a(o,s),o}();export{P as A};