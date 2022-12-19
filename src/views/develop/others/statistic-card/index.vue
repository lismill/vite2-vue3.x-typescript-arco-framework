<template>
  <l-content title="统计值卡片">
    <l-statistic-card :data="data()" @statistic:card:change="statisticCardChange"></l-statistic-card>
  </l-content>
</template>

<script setup lang="ts">
import {IData} from "@/components/l-statistic-card/interface";

const statisticCardChange = (data: IData) => {
  console.log(data);
};

const data = () => {
  const arr: Array<IData> = [];
  for (let i = 0; i < 10; i++) {
    arr.push({
      data_type: "进货单数",
      name: "进货单数",
      value: "200000",
      tips: "进货单数的提示信息",
      header: {
        name: "昨日",
        value: "4",
        percent: "22%",
        status: "up",
      },
      footer: {
        name: "今日",
        value: "524",
        percent: "43%",
        status: "down",
      },
    });
  }
  return arr;
};
</script>

<style lang="scss" scoped></style>
