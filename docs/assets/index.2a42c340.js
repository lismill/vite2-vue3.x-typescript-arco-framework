import{_ as e,g as a}from"./index.41a316f1.js";import"./vue.396df759.js";import{u as s}from"./useCloneDeep.ca3a4067.js";import{e as t,a as l,j as r,k as o,p as i,v as m,m as d,_ as n,n as p,z as u,y as b}from"./@vue.e78f9803.js";import"./pinia.9f6b6080.js";import"./vue-demi.aab6a729.js";import"./dayjs.3346cfdf.js";import"./@amap.ff40f7ed.js";import"./vue-router.3c7701ee.js";import"./custom-vue-scrollbar.dad2d67a.js";import"./lodash-es.4d7e79d7.js";import"./@vueuse.7fc0f81f.js";import"./vuedraggable.df166501.js";import"./sortablejs.16db4011.js";import"./echarts.e0857eaa.js";import"./zrender.747e9f0e.js";import"./@wangeditor.e702190f.js";import"./cos-js-sdk-v5.0f9ab674.js";import"./@xmldom.7c488d63.js";import"./@arco-design.48477bc0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./compute-scroll-into-view.6058b3be.js";import"./b-tween.87ffe365.js";import"./b-validate.394bfa7b.js";import"./number-precision.08b8c2db.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./lodash.8670fc0c.js";import"./qrcode.0b1705aa.js";import"./encode-utf8.c8acd0c0.js";import"./dijkstrajs.3f6842ac.js";import"./@iconify.3bb184c2.js";const f={dialog:{title:"弹出创建表单",visible:!1},form:{operates:{centerShowResetButton:!0,left:[{name:"自定义左侧",others:{status:"danger"}}],right:[{name:"自定义右侧",others:{status:"success"}}]},data:{switch:!1,radio:"1",checkbox:[],text:"展示文本信息，支持 <b style='color: #ff4d4f;'>HTML</b>"}},sections:[{title:"基础信息",items:[{type:"text",label:"文本",name:"text",size:"large",others:{}},{type:"switch",label:"开关",name:"switch",others:{}},{type:"number",label:"数字",name:"number",size:"mini",rules:[{required:!0,message:"请输入数字"}],info:"这是一段自定义文案 size: mini",tooltip:"当某个页面<br />需要向用户显示警告的信息时<br />当某个页面需要向用户显示警告的信息时",others:{addonAfter:"元"}},{type:"select",label:"城市",name:"city",rules:[{required:!0,message:"请选择城市"}],info:"这是一段自定义文案 size: small",options:[{key:"大",value:"big"},{key:"中",value:"medium"},{key:"小",value:"small"}],others:{fieldNames:{label:"key",value:"value"}}},{type:"cascader",label:"级联菜单",name:"cascader",info:"这是一段自定义文案 size: small",options:[{value:"浙江省",label:"浙江省",children:[{value:"杭州市",label:"杭州市",children:[{value:"西湖区",label:"西湖区"}]}]},{value:"江苏省",label:"江苏省",children:[{value:"南京市",label:"南京市",children:[{value:"鼓楼区",label:"鼓楼区"}]}]}],others:{}},{type:"input",label:"姓名",name:"name",size:"medium",rules:[{required:!0,message:"请输入姓名"}],info:"这是一段自定义文案 size: medium",tooltip:"当某个页面<br />需要向用户显示警告的信息时<br />当某个页面需要向用户显示警告的信息时",others:{}},{type:"textarea",label:"多行文本",name:"textarea",size:"large",info:"这是一段自定义文案 size: large",rules:[{required:!0,message:"请输入多行文本"}],others:{}},{type:"upload",label:"文件上传",name:"upload",size:"large",rules:[{required:!0,message:"请上传文件"}],others:{limit:2}}]},{title:"详细信息",items:[{type:"radio",label:"性别",name:"radio",size:"large",options:[{label:"男",value:"1"},{label:"女",value:"2"},{label:"未知",value:"0"}]},{type:"checkbox",label:"城市",name:"checkbox",size:"large",options:[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou"},{label:"深圳",value:"shenzhen"}],others:{}},{type:"time",label:"时间",name:"time",others:{}},{type:"date",label:"日期",name:"date",others:{picker:"year"}},{type:"daterange",label:"活动时间",name:"daterange",others:{}},{type:"daterange",label:"活动时间范围",name:"rangeTime",others:{showTime:!0}},{type:"slot",label:"自定义插槽",name:"slotName",rules:[{required:!0,message:"请输入自定义插槽"}]}]}]},c={class:"bg-ffffff p-24"},v=b("弹出表单"),j={class:"m-t16"};var h=e(t({setup(e){const t=l(s(f)),b=()=>{console.log("submit:::",t.form.data)},h=e=>{console.log(e,t.form.data)};return(e,l)=>{const g=r("m-button"),y=r("m-input"),z=a;return o(),i("div",c,[m(g,{type:"primary",onClick:l[0]||(l[0]=e=>n(t).dialog.visible=!0)},{default:d((()=>[v])),_:1}),p("div",j,u(n(t).form.data),1),m(z,{config:n(t),"default-form-data":n(s)(n(f).form.data),onSubmit:b,onOperate:h},{slotName:d((({item:e})=>[m(y,{modelValue:n(t).form.data[e.name],"onUpdate:modelValue":a=>n(t).form.data[e.name]=a,disabled:n(t).form.disabled,placeholder:"请输入自定义插槽"},null,8,["modelValue","onUpdate:modelValue","disabled"])])),_:1},8,["config","default-form-data"])])}}}),[["__file","C:/Users/Administrator/Desktop/vite2-vue3.x-typescript-arco-framework/src/views/develop/form/dialog/index.vue"]]);export{h as default};