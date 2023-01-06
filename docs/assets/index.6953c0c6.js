import{_ as e,c as t,d as s,e as a,a as i}from"./index.3e6a50a2.js";import{a as o}from"./vue-router.b139e8fd.js";import{g as r}from"./system.1dd1c2d4.js";import{e as l,a as p,k as d,l as m,m as n,v as c,n as f,z as b,_ as j}from"./@vue.1c8907e1.js";import"./pinia.110beac1.js";import"./vue-demi.b3a9cad9.js";import"./dayjs.3346cfdf.js";import"./@amap.ff40f7ed.js";import"./custom-vue-scrollbar.49981b05.js";import"./lodash-es.4d7e79d7.js";import"./@vueuse.a3f87557.js";import"./vuedraggable.7b00f009.js";import"./vue.173a21ce.js";import"./sortablejs.bac44907.js";import"./echarts.b27b3039.js";import"./zrender.bd3e8a7f.js";import"./@wangeditor.06137fbe.js";import"./cos-js-sdk-v5.feae1743.js";import"./@xmldom.629be201.js";import"./@arco-design.a95d5ec9.js";import"./resize-observer-polyfill.8deb1e21.js";import"./compute-scroll-into-view.6058b3be.js";import"./b-tween.87ffe365.js";import"./b-validate.394bfa7b.js";import"./number-precision.08b8c2db.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./lodash.29731c5e.js";import"./qrcode.7c3f82aa.js";import"./encode-utf8.c8acd0c0.js";import"./dijkstrajs.e9faa44a.js";import"./swiper.5398209c.js";import"./@iconify.3bb184c2.js";import"./index.d41d0b60.js";import"./axios.e9656f83.js";import"./qs.6738fe0f.js";import"./side-channel.1b804660.js";import"./get-intrinsic.1675b33e.js";import"./has-symbols.caae0f97.js";import"./function-bind.cb3858f2.js";import"./has.c1051c46.js";import"./call-bind.0b5a4f26.js";import"./object-inspect.879eb855.js";import"./nprogress.835d4315.js";const u={request:r,title:"用户列表",search:{data:{},forms:[{type:"input",label:"用户信息",field:"keyword"},{type:"input",label:"用户地区",field:"area"},{type:"hidden",label:"用户地区",field:"area"},{label:"性别",field:"sex",type:"select",options:[{label:"男",value:1},{label:"女",value:2},{label:"未知",value:0}]},{label:"状态",field:"status",type:"select",options:[{label:"启用",value:1},{label:"禁用",value:0}]},{label:"注册时间",type:"daterange",field:"register_time"},{type:"input",label:"手机号",field:"phone"}]},toolbar:{leftOperates:[{name:"批量启用"},{name:"批量禁用",split:!0},{name:"导出列表"}],rightOperates:[{name:"新建用户",others:{type:"primary"}}]},table:{data:[],selectedRows:[],columns:[{type:"slot",title:"用户信息",dataIndex:"user",width:220},{title:"姓名",dataIndex:"name"},{title:"性别",dataIndex:"sex"},{title:"生日",dataIndex:"borthday"},{title:"地区",dataIndex:"area",width:150,others:{ellipsis:!0,tooltip:!0}},{title:"手机号",dataIndex:"phone",width:130},{title:"状态",dataIndex:"status"},{type:"slot",title:"操作",dataIndex:"operate"}]},footer:{pagination:{total:0,page:1,size:10}}};const v={class:"user_info flex"},h={class:"user_photo"},g=["src"],y={class:"user_message"};var x=e(l({setup(e){const r=p(u),l=o(),x=(e,t)=>{"查看"===e&&l.push("/system/account-detail"),"新建用户"===e&&l.push("/system/account-create")};return(e,o)=>{const l=t,p=s,u=a,w=i;return d(),m(w,null,{default:n((()=>[c(u,{config:j(r),onOperate:x},{user:n((({rows:e})=>[f("div",v,[f("div",h,[c(l,{config:{popover:{src:e.image,style:{width:300}}}},{"custom-trigger":n((()=>[f("img",{src:e.image},null,8,g)])),_:2},1032,["config"])]),f("div",y,b(e.nick_name),1)])])),operate:n((({rows:e})=>[c(p,{list:[{name:"查看",show:!0},{name:"禁用",show:!0,popconfirm:"确定禁用么?"}],"onHandle:click":e=>x(e)},null,8,["onHandle:click"])])),_:1},8,["config"])])),_:1})}}}),[["__scopeId","data-v-6f75cfee"]]);export{x as default};