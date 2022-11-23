<template>
  <l-content title="地图地址">
    <l-amap-address :areas="areas" @change="change"></l-amap-address>
    <div class="m-t16">表单数据 - {{ data }}</div>
  </l-content>
</template>

<script setup lang="ts">
const data = ref();
const change = (v: {area: Array<string>; address: string; lng: string; lat: string}) => {
  data.value = v;
};

// 选择省市区数据
const areas = [
  {
    value: "beijing",
    label: "北京市",
    children: [
      {
        value: "chaoyang",
        label: "朝阳区",
        children: [
          {
            value: "datunli",
            label: "大屯里",
          },
        ],
      },
    ],
  },
  {
    value: "shanghai",
    label: "上海市",
    children: [
      {
        value: "huangpu",
        label: "黄浦区",
      },
    ],
  },
];
</script>

<style lang="scss" scoped></style>
