"use strict";var x=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var b=x(function(F,p){
function h(e,r,s,v,a,n,t){var i,u,f,l,c,o,y,q;for(i=r.data,u=a.data,f=r.accessors[0],l=a.accessors[1],c=!1,o=v,y=t,q=0;q<e;q++)!c&&f(i,o)&&(c=!0),l(u,y,c),o+=s,y+=n;return a}p.exports=h
});var g=x(function(G,P){
var d=require('@stdlib/array-base-arraylike2object/dist'),w=b();function z(e,r,s,v,a,n,t){var i,u,f,l,c,o;if(e<=0)return a;if(u=d(r),f=d(a),u.accessorProtocol||f.accessorProtocol)return w(e,u,s,v,f,n,t),a;for(i=!1,l=v,c=t,o=0;o<e;o++)!i&&r[l]&&(i=!0),a[c]=i,l+=s,c+=n;return a}P.exports=z
});var m=x(function(H,k){
var j=require('@stdlib/strided-base-stride2offset/dist'),A=g();function B(e,r,s,v,a){var n=j(e,s),t=j(e,a);return A(e,r,s,n,v,a,t)}k.exports=B
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=m(),D=g();C(R,"ndarray",D);module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
