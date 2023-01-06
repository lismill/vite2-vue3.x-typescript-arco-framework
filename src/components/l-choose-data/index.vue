<template>
  <div class="l-market-coupon">
    <!-- operate -->
    <div v-if="!disabled" class="flex items-center">
      <m-button type="primary" @click="visible = true">{{ title }}</m-button>
      <slot></slot>
    </div>
    <!-- modal -->
    <l-modal
      ref="refModal"
      :visible="visible"
      :title="title"
      :others="{
        width: '1200px',
        okText: '添加数据',
        modalClass: 'l-market-coupon',
      }"
      @handle:cancel="visible = false"
      @handle:ok="handleOk"
    >
      <CustomVueScrollbar style="max-height: calc(100vh - 320px)">
        <l-table :config="deepModalTableConfig"></l-table>
      </CustomVueScrollbar>
    </l-modal>
    <!-- selected -->
    <l-table v-if="showSelected" class="mt-[16px]" :class="{'mt-[0]': disabled}" :config="deepSelectedTableConfig">
      <template #operate="{rows}">
        <m-popconfirm content="确定删除数据么?" type="warning" @ok="remove(rows)">
          <m-link :hoverable="false">删除</m-link>
        </m-popconfirm>
      </template>
    </l-table>
  </div>
</template>

<script setup lang="ts">
import CustomVueScrollbar from "custom-vue-scrollbar";
import "custom-vue-scrollbar/dist/style.css";
import uniqBy from "lodash-es/uniqBy";
import {ILTable} from "../l-table/interface";
import {modalTableConfig, selectedTableConfig} from "./config";
import {useMessage} from "@/hooks/useMessage";

const props = withDefaults(
  defineProps<{
    title?: string;
    showSelected?: boolean;
    disabled?: boolean;
    max?: number;
    modalTableConfig?: ILTable | any;
    selectedTableConfig?: ILTable | any;
  }>(),
  {
    title: "添加数据",
    showSelected: true,
    disabled: false,
    max: 100,
    modalTableConfig,
    selectedTableConfig,
  },
);
const emits = defineEmits(["change:data"]);
const refModal = ref();
const visible = ref(false);
const deepModalTableConfig = reactive(props.modalTableConfig);
const deepSelectedTableConfig = reactive(props.selectedTableConfig);

// 设置默认数据
const setDefaultData = (data: Array<any>) => {
  deepSelectedTableConfig.table.data = data;
  deepModalTableConfig.table.selectedRows = data;
  disabledData();
};

// 禁用弹出框中已选数据
const disabledData = () => {
  const DATAS = deepModalTableConfig.table.data.map((item: {id: string | number}) => {
    return deepSelectedTableConfig.table.data.find((choose: {id: string | number}) => choose.id === item.id)
      ? {...item, disabled: true}
      : {...item, disabled: false};
  });
  deepModalTableConfig.table.data = DATAS;
  emits("change:data", deepSelectedTableConfig.table.data);
};
// 添加数据
const handleOk = () => {
  const CHOOSE_DATAS = uniqBy(
    [...deepSelectedTableConfig.table.data, ...props.modalTableConfig.table.selectedRows],
    "id",
  );
  if (CHOOSE_DATAS.length > props.max) {
    useMessage().error(`最多选择${props.max}条数据`);
    deepModalTableConfig.table.selectedRows = deepSelectedTableConfig.table.data;
    return;
  }
  deepSelectedTableConfig.table.data = CHOOSE_DATAS;
  visible.value = false;
  disabledData();
};
// 删除数据
const remove = (rows: any) => {
  const RESULT = deepSelectedTableConfig.table.data.filter((item: {id: string | number}) => item.id !== rows.id);
  deepSelectedTableConfig.table.data = RESULT;
  deepModalTableConfig.table.selectedRows = RESULT;
  disabledData();
};

// 禁用状态
watch(
  () => props.disabled,
  (b: boolean) => {
    if (b) {
      deepSelectedTableConfig.table.columns = selectedTableConfig.table.columns.filter((item) => item.title !== "操作");
      delete deepSelectedTableConfig.table.selectedRows;
    }
  },
  {immediate: true},
);

defineExpose({setDefaultData});
</script>

<style lang="scss">
.l-market-coupon {
  .scrollbar__thumbPlaceholder--vertical {
    width: 8px;
    top: -1px !important;
    right: -12px !important;
  }
}
</style>
