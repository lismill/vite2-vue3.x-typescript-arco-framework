function r(r,t){return void 0===t&&(t=15),+parseFloat(Number(r).toPrecision(t))}function t(r){var t=r.toString().split(/[eE]/),n=(t[0].split(".")[1]||"").length-+(t[1]||0);return n>0?n:0}function n(n){if(-1===n.toString().indexOf("e"))return Number(n.toString().replace(".",""));var e=t(n);return e>0?r(Number(n)*Math.pow(10,e)):Number(n)}function e(r){u&&(r>Number.MAX_SAFE_INTEGER||r<Number.MIN_SAFE_INTEGER)&&console.warn(r+" is beyond boundary when transfer to integer, the results may not be accurate")}function o(r,t){var n=r[0],e=r[1],o=r.slice(2),a=t(n,e);return o.forEach((function(r){a=t(a,r)})),a}function a(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(r.length>2)return o(r,a);var u=r[0],f=r[1],h=n(u),c=n(f),l=t(u)+t(f),v=h*c;return e(v),v/Math.pow(10,l)}function i(){for(var u=[],f=0;f<arguments.length;f++)u[f]=arguments[f];if(u.length>2)return o(u,i);var h=u[0],c=u[1],l=n(h),v=n(c);return e(l),e(v),a(l/v,r(Math.pow(10,t(c)-t(h))))}var u=!0;var f={strip:r,plus:function r(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];if(n.length>2)return o(n,r);var i=n[0],u=n[1],f=Math.pow(10,Math.max(t(i),t(u)));return(a(i,f)+a(u,f))/f},minus:function r(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];if(n.length>2)return o(n,r);var i=n[0],u=n[1],f=Math.pow(10,Math.max(t(i),t(u)));return(a(i,f)-a(u,f))/f},times:a,divide:i,round:function(r,t){var n=Math.pow(10,t),e=i(Math.round(Math.abs(a(r,n))),n);return r<0&&0!==e&&(e=a(e,-1)),e},digitLength:t,float2Fixed:n,enableBoundaryChecking:function(r){void 0===r&&(r=!0),u=r}};export{f as i};
