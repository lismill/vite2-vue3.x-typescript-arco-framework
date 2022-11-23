import{_ as e,f as a}from"./index.cb40ad45.js";import"./vue.9ede1274.js";import{u as s}from"./useCloneDeep.ca3a4067.js";import{a as t}from"./table.ff129d52.js";import{e as l,a as r,j as o,k as i,p as m,v as n,m as d,_ as p}from"./@vue.12b50aee.js";import"./pinia.dadc88ac.js";import"./vue-demi.8371fe3a.js";import"./dayjs.3346cfdf.js";import"./@amap.ff40f7ed.js";import"./vue-router.141201fc.js";import"./custom-vue-scrollbar.3985578f.js";import"./lodash-es.4d7e79d7.js";import"./@vueuse.09fd5858.js";import"./vuedraggable.fbd3ee9e.js";import"./sortablejs.bac44907.js";import"./echarts.a04008f2.js";import"./zrender.747e9f0e.js";import"./@wangeditor.49fbb9d4.js";import"./cos-js-sdk-v5.feae1743.js";import"./@xmldom.629be201.js";import"./@arco-design.d23ed551.js";import"./resize-observer-polyfill.8deb1e21.js";import"./compute-scroll-into-view.6058b3be.js";import"./b-tween.87ffe365.js";import"./b-validate.394bfa7b.js";import"./number-precision.08b8c2db.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./lodash.8670fc0c.js";import"./qrcode.7c3f82aa.js";import"./encode-utf8.c8acd0c0.js";import"./dijkstrajs.e9faa44a.js";import"./@iconify.3bb184c2.js";import"./index.283234c7.js";import"./axios.e9656f83.js";import"./qs.8be366fc.js";import"./side-channel.f8b5ad33.js";import"./get-intrinsic.1675b33e.js";import"./has-symbols.caae0f97.js";import"./function-bind.cb3858f2.js";import"./has.c1051c46.js";import"./call-bind.0b5a4f26.js";import"./object-inspect.a0f59e59.js";import"./nprogress.835d4315.js";const u={form:{title:"新建账号",disabled:!1,operatesAlign:"center",operates:{left:[{name:"左侧按钮",others:{type:"primary",status:"success"}},{name:"禁用表单",others:{type:"primary",status:"warning"}},{name:"启用表单",others:{type:"outline",status:"success"}}],centerShowResetButton:!0,centerShowSubmitButton:!0,right:[{name:"右侧按钮",others:{type:"primary",status:"danger"}}]},data:{switch:!1,radio:"1",checkbox:[],upload:[{name:"",url:"",response:{status:"done"}}]},others:{}},sections:[{title:"基础信息",items:[{type:"text",label:"文本",name:"text",size:"large",others:{}},{type:"switch",label:"开关",name:"switch",others:{}},{type:"number",label:"数字",name:"number",size:"mini",rules:[{required:!0,message:"请输入数字"}],info:"这是一段自定义文案 size: mini",tooltip:"当某个页面<br />需要向用户显示警告的信息时<br />当某个页面需要向用户显示警告的信息时",others:{addonAfter:"元"}},{type:"select",label:"城市",name:"city",rules:[{required:!0,message:"请选择城市"}],info:"这是一段自定义文案 size: small",options:[{key:"大",value:"big"},{key:"中",value:"medium"},{key:"小",value:"small"}],others:{fieldNames:{label:"key",value:"value"}}},{type:"select-search",label:"远程搜索",name:"selectremote",rules:[{required:!0,message:"请选择远程搜索"}],info:"这是一段自定义文案 size: small",options:[],others:{request:t,fieldNames:{label:"key",value:"value"},defaultValue:{key:"深圳",value:"shenzhen"},options:[{key:"北京",value:"beijing"}]}},{type:"cascader",label:"级联菜单",name:"cascader",info:"这是一段自定义文案 size: small",options:[{value:"浙江省",label:"浙江省",children:[{value:"杭州市",label:"杭州市",children:[{value:"西湖区",label:"西湖区"}]}]},{value:"江苏省",label:"江苏省",children:[{value:"南京市",label:"南京市",children:[{value:"鼓楼区",label:"鼓楼区"}]}]}],others:{}},{type:"input",label:"姓名",name:"name",size:"medium",rules:[{required:!0,message:"请输入姓名"}],info:"这是一段自定义文案 size: medium",tooltip:"当某个页面<br />需要向用户显示警告的信息时<br />当某个页面需要向用户显示警告的信息时",others:{}},{type:"phone",label:"手机号",name:"phone",size:"medium",rules:[{required:!0,message:"请输入手机号"},{validator:(e,a)=>{/^1[3|4|5|6|7|8|9][0-9]{9}$/.test(e)||a("请输入正确的手机号")}}],info:"这是一段自定义文案 size: medium",tooltip:"当某个页面<br />需要向用户显示警告的信息时<br />当某个页面需要向用户显示警告的信息时",others:{prepend:{name:"phone_prepend",options:[{label:"+86 中国大陆",value:"+86 中国大陆"},{label:"+852 中国香港",value:"+852 中国香港"},{label:"+853 中国澳门",value:"+853 中国澳门"},{label:"+856 中国台湾",value:"+856 中国台湾"}]}}},{type:"textarea",label:"多行文本",name:"textarea",size:"large",info:"这是一段自定义文案 size: large",rules:[{required:!0,message:"请输入多行文本"}],others:{}},{type:"upload",label:"文件上传",name:"upload",size:"large",rules:[{required:!0,message:"请上传文件"}],others:{limit:2}}]},{title:"详细信息",items:[{type:"radio",label:"性别",name:"radio",options:[{label:"男",value:"1"},{label:"女",value:"2"},{label:"未知",value:"0"}],rules:[{required:!0,message:"请选择性别"}]},{type:"checkbox",label:"城市",name:"checkbox",options:[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou"},{label:"深圳",value:"shenzhen"}],others:{}},{type:"time",label:"时间",name:"time",others:{}},{type:"date",label:"日期",name:"date",others:{picker:"year"}},{type:"daterange",label:"活动时间",name:"daterange",others:{}},{type:"daterange",label:"活动时间范围",name:"rangeTime",others:{showTime:!0}},{type:"slot",label:"自定义插槽",name:"slotName",rules:[{required:!0,message:"请输入自定义插槽"}]},{type:"editor",label:"富文本编辑器",name:"editor",size:"large",rules:[{required:!0,message:"请输入自定义插槽"}],others:{}}]}]},b={class:"bg-ffffff"};var c=e(l({setup(e){const t=r(s(u));t.form.data={text:"展示文本信息，支持 <b style='color: #ff4d4f;'>HTML</b>",editor:"<div>Hello,</div>",switch:!1,radio:"",checkbox:[],upload:[{name:"lean.png",url:"https://i.postimg.cc/8kq8ZyL2/lean.png",response:{status:"done"}}]};const l=()=>{console.log(t.form.data)},c=e=>{console.log(e,t.form.data),"禁用表单"===e&&(t.form.disabled=!0),"启用表单"===e&&(t.form.disabled=!1)};return(e,s)=>{const r=o("m-input"),u=a;return i(),m("div",b,[n(u,{config:p(t),onSubmit:l,onOperate:c},{slotName:d((({item:e})=>[n(r,{modelValue:p(t).form.data[e.name],"onUpdate:modelValue":a=>p(t).form.data[e.name]=a,disabled:p(t).form.disabled,placeholder:"请输入自定义插槽"},null,8,["modelValue","onUpdate:modelValue","disabled"])])),_:1},8,["config"])])}}}),[["__file","E:/github/vite2-vue3.x-typescript-arco-framework/src/views/develop/form/base/index.vue"]]);export{c as default};
