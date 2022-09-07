import{_ as e,a as t,b as s,c as a}from"./index.0e835f45.js";import{a as i}from"./vue-router.7e3777f9.js";import{g as o}from"./system.e8958185.js";import{e as r,a as l,k as p,p as d,v as c,m,n,z as f,_ as b}from"./@vue.3e609ab1.js";import"./pinia.6fec25bd.js";import"./vue-demi.b3a9cad9.js";import"./dayjs.3346cfdf.js";import"./@amap.ff40f7ed.js";import"./custom-vue-scrollbar.5b0acc03.js";import"./lodash-es.4d7e79d7.js";import"./@vueuse.c09e96e0.js";import"./vuedraggable.0a415f81.js";import"./vue.9dc35038.js";import"./sortablejs.16db4011.js";import"./echarts.b27b3039.js";import"./zrender.bd3e8a7f.js";import"./@wangeditor.5e7c3240.js";import"./cos-js-sdk-v5.0f9ab674.js";import"./@xmldom.7c488d63.js";import"./@arco-design.77e4e9d4.js";import"./resize-observer-polyfill.8deb1e21.js";import"./compute-scroll-into-view.6058b3be.js";import"./b-tween.87ffe365.js";import"./b-validate.394bfa7b.js";import"./number-precision.08b8c2db.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./lodash.8670fc0c.js";import"./qrcode.0b1705aa.js";import"./encode-utf8.c8acd0c0.js";import"./dijkstrajs.3f6842ac.js";import"./@iconify.3bb184c2.js";import"./index.04266c33.js";import"./axios.e9656f83.js";import"./qs.4ee191bc.js";import"./side-channel.98f420ff.js";import"./get-intrinsic.1675b33e.js";import"./has-symbols.caae0f97.js";import"./function-bind.cb3858f2.js";import"./has.c1051c46.js";import"./call-bind.0b5a4f26.js";import"./object-inspect.ab370ca2.js";import"./nprogress.835d4315.js";const j={request:o,title:"用户列表",search:{data:{},forms:[{type:"input",label:"用户信息",field:"keyword"},{type:"input",label:"用户地区",field:"area"},{type:"hidden",label:"用户地区",field:"area"},{label:"性别",field:"sex",type:"select",options:[{label:"男",value:1},{label:"女",value:2},{label:"未知",value:0}]},{label:"状态",field:"status",type:"select",options:[{label:"启用",value:1},{label:"禁用",value:0}]},{label:"注册时间",type:"daterange",field:"register_time"},{type:"input",label:"手机号",field:"phone"}]},toolbar:{leftOperates:[{name:"批量启用"},{name:"批量禁用",split:!0},{name:"导出列表"}],rightOperates:[{name:"新建用户",others:{type:"primary"}}]},table:{data:[],selectedRows:[],columns:[{type:"slot",title:"用户信息",dataIndex:"user",width:220},{title:"姓名",dataIndex:"name"},{title:"性别",dataIndex:"sex"},{title:"生日",dataIndex:"borthday"},{title:"地区",dataIndex:"area",width:150,others:{ellipsis:!0,tooltip:!0}},{title:"手机号",dataIndex:"phone",width:130},{title:"状态",dataIndex:"status"},{type:"slot",title:"操作",dataIndex:"operate"}]},footer:{pagination:{total:0,page:1,size:10}}};const u={class:"bg-ffffff p-24"},v={class:"user_info flex"},g={class:"user_photo"},h=["src"],y={class:"user_message"};var x=e(r({setup(e){const o=l(j),r=i(),x=(e,t)=>{"查看"===e&&r.push("/system/account-detail"),"新建用户"===e&&r.push("/system/account-create")};return(e,i)=>{const r=t,l=s,j=a;return p(),d("div",u,[c(j,{config:b(o),onOperate:x},{user:m((({rows:e})=>[n("div",v,[n("div",g,[c(r,{config:{popover:{src:e.image,style:{width:300}}}},{"custom-trigger":m((()=>[n("img",{src:e.image},null,8,h)])),_:2},1032,["config"])]),n("div",y,f(e.nick_name),1)])])),operate:m((({rows:e})=>[c(l,{list:[{name:"查看",show:!0},{name:"禁用",show:!0,popconfirm:"确定禁用么?"}],"onHandle:click":e=>x(e)},null,8,["onHandle:click"])])),_:1},8,["config"])])}}}),[["__scopeId","data-v-1247e657"]]);export{x as default};
