<template>
  <l-content title="弹出编辑表格">
    <l-modal
      title="弹出编辑表格"
      :visible="visible"
      :others="{width: '1000px'}"
      @handle:cancel="visible = false"
      @handle:ok="submit"
      @handle:open="open"
    >
      <m-spin :loading="loading">
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
                <m-input-number
                  v-model="deepTableConfig.table.data[index].number"
                  placeholder="请输入"
                ></m-input-number>
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
          <m-button type="primary" status="success" @click="reset">重置表单</m-button>
          <m-button type="outline" status="success" @click="add">新增数据</m-button>
        </m-space>
      </m-spin>
    </l-modal>
    <m-button type="primary" @click="visible = true">打开弹出框</m-button>
  </l-content>
</template>

<script setup lang="ts">
import {ILTable} from "@/components/l-table/interface";
import {useMessage} from "@/hooks/useMessage";

const loading = ref(false);
const visible = ref(false);
watch(
  () => visible.value,
  (v: boolean) => {
    v && (loading.value = true);
  },
);
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
const submit = () => {
  form.value.validate().then((res: any) => {
    if (!res) {
      console.log(deepTableConfig.table.data);
      visible.value = false;
    } else {
      useMessage().error("请完整填写表单");
    }
  });
};
const open = () => {
  reset();
  deepTableConfig.table.data = [
    {id: 1, name: Math.random(), age: Math.random()},
    {id: 2, name: Math.random(), age: Math.random()},
    {id: 3, name: Math.random(), age: Math.random()},
  ];
  setTimeout(() => (loading.value = false), 1000);
};
const reset = () => form.value.resetFields();
</script>
