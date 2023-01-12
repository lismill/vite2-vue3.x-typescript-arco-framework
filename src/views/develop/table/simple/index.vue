<template>
  <l-content title="简单表格">
    <l-table :config="deepTableConfig">
      <template #operate="{rows}">
        <m-link :hoverable="false" @click="handleOperate(rows)">查看</m-link>
      </template>
    </l-table>
  </l-content>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {ILTable} from "@/components/l-table/interface";

const deepTableConfig: ILTable = reactive({
  table: {
    data: [],
    columns: [
      {title: "名称", dataIndex: "name"},
      {title: "年龄", dataIndex: "age"},
      {title: "地址", dataIndex: "address"},
      {type: "slot", title: "操作", dataIndex: "operate", width: 90, align: "center"},
    ],
  },
});
const handleOperate = (rows: any) => console.log(rows);

const init = (): void => {
  deepTableConfig.table.data = [{id: 1}, {id: 2}, {id: 3}];
};

onMounted(() => init());
</script>
