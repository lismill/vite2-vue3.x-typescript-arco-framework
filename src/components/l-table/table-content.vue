<template>
  <div v-if="config.table?.columns?.length" class="l-table-content mb-[24px]">
    <m-table
      v-bind="{...defaultConfig, ...config.table?.others}"
      :columns="config.table.columns"
      :data="config.table.data"
      :selected-keys="selectedRowKeys()"
      @selection-change="selectionChange"
      @sorter-change="(dataIndex: string, direction: string) => emits('sorter:change', dataIndex, direction)"
    >
      <!-- 内容 -->
      <template #columns>
        <m-table-column
          v-for="item in config.table.columns"
          :key="item.title"
          :title="item.title"
          :width="item.width"
          :align="item.align"
          v-bind="item.others"
        >
          <!-- 自定义标题 -->
          <template #title>
            <m-tooltip v-if="item.titleTips" :content="item.titleTips">
              {{ item.title }}
              <icon-question-circle-fill
                size="16"
                style="color: #86909c; position: relative; top: 1px; cursor: pointer"
              />
            </m-tooltip>
            <span v-else>{{ item.title }}</span>
          </template>
          <template #cell="{record, rowIndex}">
            <!-- 自定义插槽 -->
            <template v-if="item?.type === 'slot'">
              <slot :name="item?.dataIndex ?? ''" :rows="record" :index="rowIndex"></slot>
            </template>
            <!-- 表格列 -->
            <template v-else>
              <!-- 序号 -->
              <template v-if="['#', '序号'].includes(item.title)">{{ rowIndex + 1 }}</template>
              <!-- 默认列 -->
              <template v-else>
                {{ typeof record[item.dataIndex] === "undefined" ? "-" : record[item.dataIndex] }}
              </template>
            </template>
          </template>
        </m-table-column>
      </template>
    </m-table>
  </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {IconQuestionCircleFill} from "@arco-design/web-vue/es/icon";

const props = defineProps<{config: any}>();
const config = reactive(props.config);
const emits = defineEmits(["sorter:change"]);

/**
 * 选择数据
 * @param rowKeys
 */
const selectionChange = (rowKeys: Array<string>) => {
  const DATA: any = [];
  rowKeys.forEach((id: string | number) => {
    DATA.push(config.table.data.find((item: {id: string | number}) => Number(item.id) === Number(id)));
  });
  config.table.selectedRows = DATA;
};

/**
 * 已选中的数据
 */
const selectedRowKeys = () => {
  return config.table?.selectedRows ? config.table.selectedRows.map((item: any) => item.id) : [];
};

/**
 * 初始化数据
 */
const defaultConfig = {
  size: "large",
  bordered: false,
  pagination: false,
  scroll: {x: "100%"},
  rowKey: "id",
  rowSelection: config.table?.selectedRows
    ? {
        type: config.table?.selectedType ?? "checkbox",
        showCheckedAll: true,
        onlyCurrent: false,
        selectedRowKeys: selectedRowKeys(),
      }
    : null,
};
</script>
