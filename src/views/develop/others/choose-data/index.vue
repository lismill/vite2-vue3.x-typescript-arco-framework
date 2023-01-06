<template>
  <l-content title="选择数据">
    <l-choose-data ref="refLChooseData" v-bind="config" @change:data="changeData">
      <div class="ml-[8px]">已选数据{{ selected.length }}</div>
    </l-choose-data>
  </l-content>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";

const config = reactive({
  // disabled: true,
  // showSelected: false,
  // max: 3,
});
const selected = ref([]);
const changeData = (v: any) => (selected.value = v);

// 设置默认数据
const refLChooseData = ref();
setTimeout(() => {
  refLChooseData.value.setDefaultData([{id: 2}, {id: 3}, {id: 6}]);
}, 1600);
</script>
