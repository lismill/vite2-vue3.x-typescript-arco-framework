import"./vue.396df759.js";import{_ as e,j as s}from"./index.41a316f1.js";import{e as o,a,j as r,k as t,p as i,n as l,s as m,v as d,_ as p,m as u,aT as n,aS as f,y as c}from"./@vue.e78f9803.js";import"./@amap.ff40f7ed.js";import"./pinia.9f6b6080.js";import"./vue-demi.aab6a729.js";import"./dayjs.3346cfdf.js";import"./vue-router.3c7701ee.js";import"./custom-vue-scrollbar.dad2d67a.js";import"./lodash-es.4d7e79d7.js";import"./@vueuse.7fc0f81f.js";import"./vuedraggable.df166501.js";import"./sortablejs.16db4011.js";import"./echarts.e0857eaa.js";import"./zrender.747e9f0e.js";import"./@wangeditor.e702190f.js";import"./cos-js-sdk-v5.0f9ab674.js";import"./@xmldom.7c488d63.js";import"./@arco-design.48477bc0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./compute-scroll-into-view.6058b3be.js";import"./b-tween.87ffe365.js";import"./b-validate.394bfa7b.js";import"./number-precision.08b8c2db.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./lodash.8670fc0c.js";import"./qrcode.0b1705aa.js";import"./encode-utf8.c8acd0c0.js";import"./dijkstrajs.3f6842ac.js";import"./@iconify.3bb184c2.js";const j=e=>(n("data-v-4b21b787"),e=e(),f(),e),b={class:"login"},v=j((()=>l("img",{class:"info",src:"./assets/login.1fed3082.png"},null,-1))),g={class:"content"},_=j((()=>l("h3",null,"管理系统 - 登录",-1))),w=c(" 登录页面可根据项目具体的需求，进行自定义配置 "),h=c("登录");var y=e(o({setup(e){const o=a({username:"",password:""}),n=({values:e,errors:o})=>{o||(console.log(e),s("/"))};return(e,s)=>{const a=r("m-input"),f=r("m-form-item"),c=r("m-button"),j=r("m-form");return t(),i("div",b,[v,l("div",g,[_,m(" form "),d(j,{model:p(o),"auto-label-width":!0,onSubmit:n},{default:u((()=>[d(f,{field:"username",rules:[{required:!0,message:"请输入用户名"}]},{default:u((()=>[d(a,{modelValue:p(o).username,"onUpdate:modelValue":s[0]||(s[0]=e=>p(o).username=e),placeholder:"请输入用户名"},null,8,["modelValue"])])),_:1}),d(f,{field:"password",rules:[{required:!0,message:"请输入密码"}]},{default:u((()=>[d(a,{modelValue:p(o).password,"onUpdate:modelValue":s[1]||(s[1]=e=>p(o).password=e),placeholder:"请输入密码"},null,8,["modelValue"])])),_:1}),d(f,{style:{"margin-top":"10px","line-height":"20px"}},{default:u((()=>[w])),_:1}),d(f,null,{default:u((()=>[d(c,{type:"primary",long:"","html-type":"submit"},{default:u((()=>[h])),_:1})])),_:1})])),_:1},8,["model"])])])}}}),[["__scopeId","data-v-4b21b787"],["__file","C:/Users/Administrator/Desktop/vite2-vue3.x-typescript-arco-framework/src/views/_login/index.vue"]]);export{y as default};