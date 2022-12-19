<template>
  <l-content title="统计值数据">
    <m-row>
      <m-col v-for="item in data" :key="item.name" :span="6">
        <l-statistic-data :data="item"></l-statistic-data>
      </m-col>
    </m-row>
  </l-content>
</template>

<script setup lang="ts">
import {ILStatisticData} from "@/components/l-statistic-data/interface";

const data: Array<ILStatisticData> = [
  {
    name: "合伙人数量",
    value: "10",
    tips: "合伙人数量",
    subName: "昨日",
    subValue: "1",
    percent: "16.64%",
    isUp: false,
  },
  {
    name: "门店数量",
    value: "200",
    tips: "门店数量",
    subName: "昨日",
    subValue: "233",
    percent: "16.64%",
    isUp: true,
  },
  {
    name: "门店营业金额",
    value: "74952.93",
    tips: "门店营业金额",
    subName: "昨日",
    subValue: "7495",
    percent: "16.64%",
  },
  {
    name: "门店充值金额",
    value: "233",
    tips: "门店充值金额",
    subName: "昨日",
    subValue: "20492.23",
    percent: "16.64%",
    isUp: true,
  },
];
</script>
