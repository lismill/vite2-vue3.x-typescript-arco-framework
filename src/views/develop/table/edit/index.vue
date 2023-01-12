<template>
  <l-content title="编辑表格">
    <m-form ref="form" class="l-table-edit" :model="deepTableConfig.table" :auto-label-width="true">
      <l-table :config="deepTableConfig">
        <template #operate="{rows}">
          <l-table-operate :list="operateList(rows)" @handle:click="(name) => handleOperate(name, rows)" />
        </template>
        <template #number="{index}">
          <m-form-item
            :field="`data.${index}.number`"
            :rules="[{required: true, message: '数量不能为空'}]"
            :validate-trigger="['change', 'input']"
          >
            <m-input-number v-model="deepTableConfig.table.data[index].number" placeholder="请输入"></m-input-number>
          </m-form-item>
        </template>
        <template #address="{index}">
          <m-form-item
            :field="`data.${index}.address`"
            :rules="[{required: true, message: '地址不能为空'}]"
            :validate-trigger="['change', 'input']"
          >
            <m-input v-model="deepTableConfig.table.data[index].address" placeholder="请输入"></m-input>
          </m-form-item>
        </template>
      </l-table>
    </m-form>

    <!-- 操作 -->
    <m-space>
      <m-button type="primary" @click="submit">校验表单</m-button>
      <m-button type="primary" status="success" @click="reset">重置表单</m-button>
      <m-button type="outline" status="success" @click="add">新增数据</m-button>
    </m-space>
  </l-content>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {ILTable} from "@/components/l-table/interface";

const form = ref();
const deepTableConfig: ILTable = reactive({
  table: {
    data: [],
    columns: [
      {title: "#", width: 50, dataIndex: ""},
      {title: "名称", dataIndex: "name"},
      {title: "年龄", dataIndex: "age"},
      {type: "slot", title: "地址", dataIndex: "address"},
      {type: "slot", title: "数量", dataIndex: "number"},
      {type: "slot", title: "操作", dataIndex: "operate", width: 120, align: "center"},
    ],
  },
});
const operateList = (rows: any) => {
  return [
    {name: "查看", show: true},
    {name: "删除", show: rows.id, popconfirm: "确定删除么?"},
  ];
};
const handleOperate = (name: string, rows: any) => {
  switch (name) {
    case "删除":
      deepTableConfig.table.data = deepTableConfig.table.data.filter((item) => item.id !== rows.id);
      break;
    default:
      break;
  }
};
const add = () => {
  deepTableConfig.table.data.push({
    id: Date.now(),
    name: Math.random(),
    age: Math.random(),
  });
};
const submit = () => form.value.validate().then((res: any) => console.log(res));
const reset = () => form.value.resetFields();
const init = () => {
  deepTableConfig.table.data = [
    {id: 1, name: Math.random(), age: Math.random()},
    {id: 2, name: Math.random(), age: Math.random()},
    {id: 3, name: Math.random(), age: Math.random()},
  ];
};
onMounted(() => init());
</script>
