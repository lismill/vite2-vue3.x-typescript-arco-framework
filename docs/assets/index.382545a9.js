import"./vue.9ede1274.js";import{_ as e,j as s}from"./index.19c6a257.js";import{e as a,a as o,j as r,k as t,p as i,n as l,s as m,v as d,_ as p,m as u,aT as n,aS as f,y as c}from"./@vue.12b50aee.js";import"./@amap.ff40f7ed.js";import"./pinia.dadc88ac.js";import"./vue-demi.8371fe3a.js";import"./dayjs.3346cfdf.js";import"./vue-router.141201fc.js";import"./custom-vue-scrollbar.3985578f.js";import"./lodash-es.4d7e79d7.js";import"./@vueuse.09fd5858.js";import"./vuedraggable.fbd3ee9e.js";import"./sortablejs.bac44907.js";import"./echarts.a04008f2.js";import"./zrender.747e9f0e.js";import"./@wangeditor.49fbb9d4.js";import"./cos-js-sdk-v5.feae1743.js";import"./@xmldom.629be201.js";import"./@arco-design.d23ed551.js";import"./resize-observer-polyfill.8deb1e21.js";import"./compute-scroll-into-view.6058b3be.js";import"./b-tween.87ffe365.js";import"./b-validate.394bfa7b.js";import"./number-precision.08b8c2db.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./lodash.658ca158.js";import"./qrcode.7c3f82aa.js";import"./encode-utf8.c8acd0c0.js";import"./dijkstrajs.e9faa44a.js";import"./@iconify.3bb184c2.js";const j=e=>(n("data-v-4b21b787"),e=e(),f(),e),b={class:"login"},v=j((()=>l("img",{class:"info",src:"./assets/login.1fed3082.png"},null,-1))),g={class:"content"},_=j((()=>l("h3",null,"管理系统 - 登录",-1))),h=c(" 登录页面可根据项目具体的需求，进行自定义配置 "),w=c("登录");var y=e(a({setup(e){const a=o({username:"",password:""}),n=({values:e,errors:a})=>{a||(console.log(e),s("/"))};return(e,s)=>{const o=r("m-input"),f=r("m-form-item"),c=r("m-button"),j=r("m-form");return t(),i("div",b,[v,l("div",g,[_,m(" form "),d(j,{model:p(a),"auto-label-width":!0,onSubmit:n},{default:u((()=>[d(f,{field:"username",rules:[{required:!0,message:"请输入用户名"}]},{default:u((()=>[d(o,{modelValue:p(a).username,"onUpdate:modelValue":s[0]||(s[0]=e=>p(a).username=e),placeholder:"请输入用户名"},null,8,["modelValue"])])),_:1}),d(f,{field:"password",rules:[{required:!0,message:"请输入密码"}]},{default:u((()=>[d(o,{modelValue:p(a).password,"onUpdate:modelValue":s[1]||(s[1]=e=>p(a).password=e),placeholder:"请输入密码"},null,8,["modelValue"])])),_:1}),d(f,{style:{"margin-top":"10px","line-height":"20px"}},{default:u((()=>[h])),_:1}),d(f,null,{default:u((()=>[d(c,{type:"primary",long:"","html-type":"submit"},{default:u((()=>[w])),_:1})])),_:1})])),_:1},8,["model"])])])}}}),[["__scopeId","data-v-4b21b787"],["__file","E:/github/vite2-vue3.x-typescript-arco-framework/src/views/_login/index.vue"]]);export{y as default};