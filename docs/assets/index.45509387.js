import{z as a,A as e,_ as t,B as s,C as r,a as o}from"./index.a55774b5.js";import{e as i,j as m,k as n,l as c,m as d,v as p,n as l}from"./@vue.1c8907e1.js";import"./pinia.110beac1.js";import"./vue-demi.b3a9cad9.js";import"./dayjs.3346cfdf.js";import"./@amap.ff40f7ed.js";import"./vue-router.b139e8fd.js";import"./custom-vue-scrollbar.cd4e21df.js";import"./lodash-es.7eb756e6.js";import"./lodash.29731c5e.js";import"./@arco-design.917191bd.js";import"./resize-observer-polyfill.8deb1e21.js";import"./compute-scroll-into-view.6058b3be.js";import"./b-tween.87ffe365.js";import"./b-validate.394bfa7b.js";import"./number-precision.08b8c2db.js";import"./scroll-into-view-if-needed.5191fdbf.js";import"./axios.e9656f83.js";import"./qs.6738fe0f.js";import"./side-channel.1b804660.js";import"./get-intrinsic.1675b33e.js";import"./has-symbols.caae0f97.js";import"./function-bind.cb3858f2.js";import"./has.c1051c46.js";import"./call-bind.0b5a4f26.js";import"./object-inspect.879eb855.js";import"./nprogress.835d4315.js";import"./@vueuse.a3f87557.js";import"./vuedraggable.7b00f009.js";import"./vue.173a21ce.js";import"./sortablejs.bac44907.js";import"./echarts.b27b3039.js";import"./zrender.bd3e8a7f.js";import"./@wangeditor.06137fbe.js";import"./cos-js-sdk-v5.feae1743.js";import"./@xmldom.629be201.js";import"./qrcode.7c3f82aa.js";import"./encode-utf8.c8acd0c0.js";import"./dijkstrajs.e9faa44a.js";import"./swiper.5398209c.js";import"./@iconify.3bb184c2.js";const u=i({setup(e){const t=[],s=[];for(let a=0;a<24;a++)t.push({time:`${a}:00`,value:Math.ceil(100*Math.random())}),s.push({time:`${a}:00`,value:Math.ceil(100*Math.random())});const r=[{name:"今日",color:"#1251FF",area:"rgba(80, 153, 255, 0.22)",data:t},{name:"昨日",color:"#04CCCD",area:"rgba(4, 204, 205, 0.22)",data:s}];return(e,t)=>{const s=a,o=m("m-card");return n(),c(o,{title:"折线图"},{default:d((()=>[p(s,{data:r})])),_:1})}}}),j=i({setup(a){const t={name:"占比",colorList:["#FA3AA6","#9580FF","#FCAA80","#3F72FE","#34D5D6"],data:[{value:706,name:"抖音"},{value:655,name:"快手"},{value:735,name:"天猫"},{value:580,name:"京东"},{value:484,name:"有赞"}]};return(a,s)=>{const r=e,o=m("m-card");return n(),c(o,{title:"饼图"},{default:d((()=>[p(r,{data:t})])),_:1})}}});const b={style:{width:"200px",margin:"0 auto"}};var f=t(i({setup(a){const e={name:"占比",colorList:["#FA3AA6","#9580FF","#FCAA80","#3F72FE","#34D5D6"],data:[{value:706,name:"抖音"},{value:655,name:"快手"},{value:735,name:"天猫"},{value:580,name:"京东"},{value:484,name:"有赞"}]};return(a,t)=>{const r=s,o=m("m-card");return n(),c(o,{title:"饼图"},{default:d((()=>[l("div",b,[p(r,{data:e})])])),_:1})}}}),[["__scopeId","data-v-123b9e2c"]]);const v=i({setup(a){const e={xAxis:{data:["2022-03-17","2022-03-18","2022-03-19","2022-03-20","2022-03-21","2022-03-22","2022-03-23","2022-03-24","2022-03-25","2022-03-26","2022-03-27","2022-03-28"]},yAxis:{name:""},data:[{name:"上架",color:"#72AEFF",area:"rgba(58, 77, 233, 0.2)",data:[1,20,80,20,5,30,100,1,20,80,20,5,30,100]},{name:"下架",color:"#FFBD58",area:"rgba(255, 189, 88, 0.2)",data:[5,100,17,69,22,31,5,100,17,69,22,31,17,69]},{name:"浏览",color:"#35D6D7",area:"rgba(53, 214, 215, 0.2)",data:[0,20,80,75,1,55,0,20,80,75,1,55,80,75]}]};return(a,t)=>{const s=r,o=m("m-card");return n(),c(o,{title:"折线图"},{default:d((()=>[p(s,{data:e})])),_:1})}}}),F=i({setup:a=>(a,e)=>{const t=m("m-col"),s=m("m-row"),r=o;return n(),c(r,{title:"ECharts"},{default:d((()=>[p(s,{gutter:16},{default:d((()=>[p(t,{span:12},{default:d((()=>[p(u)])),_:1}),p(t,{span:12},{default:d((()=>[p(j)])),_:1}),p(t,{span:12,class:"m-t16"},{default:d((()=>[p(f)])),_:1}),p(t,{span:12,class:"m-t16"},{default:d((()=>[p(v)])),_:1})])),_:1})])),_:1})}});export{F as default};