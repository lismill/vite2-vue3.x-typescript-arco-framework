var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,p=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&n(e,r,t[r]);if(s)for(var r of s(t))o.call(t,r)&&n(e,r,t[r]);return e},i=(e,s)=>t(e,r(s));import{a as l}from"./axios.e9656f83.js";import{l as d}from"./qs.8be366fc.js";import{n as c}from"./nprogress.835d4315.js";const u={request(e){return this.setupPostParams(e),this.setupSpecialParams(e),e},response:e=>e.data,error(e){console.log(e)},setupPostParams(e){var t;"POST"===(null==(t=e.method)?void 0:t.toUpperCase())&&(e.headers=i(p({},e.headers),{"Content-Type":"application/json;charset=utf-8"}))},setupSpecialParams(e){var t,r,s,a,o,n,l;(null==(t=e.params)?void 0:t.extends)&&("GET"===(null==(r=e.method)?void 0:r.toUpperCase())&&"_blank"===(null==(s=e.params.extends)?void 0:s.target)&&(delete e.params.extends,window.open(`${e.url}?${d.stringify(e.params)}`),y(e)),delete e.params.extends),(null==(a=e.data)?void 0:a.extends)&&("POST"===(null==(o=e.method)?void 0:o.toUpperCase())&&(null==(n=e.data.extends)?void 0:n.contentType)&&(e.headers=i(p({},e.headers),{"Content-Type":null==(l=e.data.extends)?void 0:l.contentType})),delete e.data.extends)}},m=l.create({baseURL:"",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"},withCredentials:!0,timeout:1e4,transformRequest:[e=>JSON.stringify(e)],transformResponse:[e=>"string"==typeof e&&e.startsWith("{")?JSON.parse(e):{}]}),f=new Map,y=e=>{const t=[e.method,e.url,d.stringify(e.params),d.stringify(e.data)].join("&");if(f.has(t)){f.get(t)(t),f.delete(t)}};m.interceptors.request.use((e=>(y(e),(e=>{const t=[e.method,e.url,d.stringify(e.params),d.stringify(e.data)].join("&");e.cancelToken=e.cancelToken||new l.CancelToken((e=>{f.has(t)||f.set(t,e)}))})(e),c.start(),u.request(e))),(e=>{console.log("request error:::",e)})),m.interceptors.response.use((e=>(y(e),c.done(),u.response(e))),(e=>(c.done(),l.isCancel(e)?{}:(e.response&&u.error(e.response),Promise.reject(e)))));export{m as s};