<template>
  <div class="l-statistic-data">
    <div class="name flex items-center">
      <span>{{ data.name }}</span>
      <m-tooltip v-if="data.tips" :content="data.tips" position="top">
        <img src="@/components/l-statistic-card/images/l-statistic-card-question.png" />
      </m-tooltip>
    </div>
    <div class="value">{{ data.value }}</div>
    <div v-if="data?.subName || data?.subValue || data?.percent || data?.isUp" class="bottom flex items-center">
      <div v-if="data?.subName" class="subName">{{ data.subName }}：</div>
      <div v-if="data?.subValue" class="subValue">{{ data.subValue }}</div>
      <div
        v-if="data?.percent"
        class="percent"
        :style="{color: data.hasOwnProperty('isUp') ? (data.isUp ? '#FA4050' : '#33CC59') : '#AAABAF'}"
      >
        {{ data.percent }}
      </div>
      <div v-if="data.hasOwnProperty('isUp') && data?.value !== data?.subValue" class="isUp">
        <img v-if="data.isUp" src="./images/up.png" />
        <img v-else src="./images/down.png" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ILStatisticData} from "./interface";

defineProps<{data: ILStatisticData}>();
</script>

<style lang="scss" scoped>
.l-statistic-data {
  .name {
    height: 20px;
    font-weight: 400;
    color: #55585c;
    line-height: 20px;
    img {
      width: 14px;
      height: 14px;
      margin-left: 4px;
      cursor: pointer;
    }
  }
  .value {
    margin-top: 7px;
    height: 25px;
    font-size: 22px;
    font-weight: bold;
    color: #252931;
    line-height: 25px;
  }

  .bottom {
    margin-top: 7px;
  }
  .subName {
    height: 17px;
    font-size: 12px;
    color: #aaabaf;
    line-height: 17px;
  }
  .subValue {
    margin: 0 6px 0 -1px;
  }
  .percent {
    height: 16px;
    line-height: 16px;
  }
  .isUp {
    margin: 0 0 0 8px;
    img {
      position: relative;
      top: 1px;
      height: 12px;
    }
  }
}
</style>
