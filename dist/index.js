"use strict";var x=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var b=x(function(F,p){
function h(e,r,c,v,a,n,t){var i,u,f,l,s,o,y,q;for(i=r.data,u=a.data,f=r.accessors[0],l=a.accessors[1],s=!1,o=v,y=t,q=0;q<e;q++)!s&&f(i,o)&&(s=!0),l(u,y,s),o+=c,y+=n;return a}p.exports=h
});var g=x(function(G,P){
var d=require('@stdlib/array-base-arraylike2object/dist'),w=b();function z(e,r,c,v,a,n,t){var i,u,f,l,s,o;if(e<=0)return a;if(u=d(r),f=d(a),u.accessorProtocol||f.accessorProtocol)return w(e,u,c,v,f,n,t),a;for(i=!1,l=v,s=t,o=0;o<e;o++)!i&&r[l]&&(i=!0),a[s]=i,l+=c,s+=n;return a}P.exports=z
});var m=x(function(H,k){
var j=require('@stdlib/strided-base-stride2offset/dist'),A=g();function B(e,r,c,v,a){var n=j(e,c),t=j(e,a);return A(e,r,c,n,v,a,t)}k.exports=B
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=m(),D=g();C(R,"ndarray",D);module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
