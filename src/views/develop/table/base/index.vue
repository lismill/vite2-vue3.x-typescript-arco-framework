<template>
  <l-content>
    <l-table :config="deepConfig" @operate="handleOperate" @sorter:change="sorterChange">
      <!-- 自定义头部插槽 -->
      <template #custom-header><m-alert :show-icon="false">自定义头部插槽</m-alert></template>

      <!-- 自定义中间插槽 -->
      <template #custom-center><m-alert :show-icon="false">自定义中间插槽</m-alert></template>

      <!-- 自定义底部插槽 -->
      <template #custom-footer><m-alert :show-icon="false">自定义底部插槽</m-alert></template>

      <!-- 自定义搜索插槽 -->
      <template #slot>
        <m-input v-if="deepConfig.search" v-model="deepConfig.search.data['slot']" placeholder="请输入插槽"></m-input>
      </template>

      <!-- 自定义表格插槽 -->
      <template #image>
        <div class="flex items-center">
          <l-popover-image
            :config="{
              popover: {
                src: 'https://i.postimg.cc/8kq8ZyL2/lean.png',
                style: {width: 300},
              },
            }"
          >
            <template #custom-trigger>
              <img style="width: 36px; height: 36px; border-radius: 50%" src="https://i.postimg.cc/8kq8ZyL2/lean.png" />
            </template>
          </l-popover-image>
          <div class="ml-[10px]">
            <p>Lean</p>
            <p>123456789@163.com</p>
          </div>
        </div>
      </template>
      <template #operate="{rows, index}">
        <l-table-operate
          :list="operateList"
          @handle:click="(name) => handleOperate(name, rows, index)"
        ></l-table-operate>
      </template>
    </l-table>
  </l-content>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {useRouter} from "vue-router";
import {config} from "./config";
import {useCloneDeep} from "@/hooks/useCloneDeep";
import {ILTableOperate} from "@/components/l-table-operate/interface";
import {useMessage} from "@/hooks/useMessage";

const ROUTER = useRouter();
const deepConfig = reactive(useCloneDeep(config));

/**
 * 自定义排序
 * @param dataIndex
 * @param direction
 */
const sorterChange = (dataIndex: string, direction: string) => console.log(dataIndex, direction);

/**
 * 模拟设置已选数据
 */
setTimeout(() => {
  deepConfig.table.selectedRows = [
    {
      id: 1,
      name: "Robert Hall - 还提供了一个全局配置方法，在调用前提前配置，全局一次生效。还提供了一个全局配置方法，在调用前提前配置，全局一次生效。",
      date: "1994-11-22",
      city: "黑龙江省-张家口市-狮子山区",
      guid: "BEFabf1e-B0D9-30d4-e4DA-afD14B66d5d8",
    },
    {
      id: 3,
      name: "Betty Gonzalez - 还提供了一个全局配置方法，在调用前提前配置，全局一次生效。还提供了一个全局配置方法，在调用前提前配置，全局一次生效。",
      date: "2021-01-03",
      city: "黑龙江省-淄博市-公安县",
      guid: "F85BBbf4-1f79-A616-7E08-5B49E17cb274",
    },
  ];
}, 3500);

/**
 * 操作按钮
 */
const operateList: Array<ILTableOperate> = [
  {name: "编辑", show: true},
  {name: "详情", show: true},
  {name: "删除", show: true, popconfirm: "确定删除么?"},
  {name: "复制", show: true},
  {name: "导出数据", show: true},
];

/**
 * 操作功能
 */
const handleOperate = (key: string, rows?: any, index?: number) => {
  switch (key) {
    case "创建账号":
      ROUTER.push({name: "/develop/form/base", query: {operate: "create"}});
      break;
    case "编辑":
      ROUTER.push({name: "/develop/form/base", query: {operate: "edit"}});
      break;
    case "详情":
      ROUTER.push({name: "/develop/form/base", query: {operate: "view"}});
      break;
    default:
      useMessage().success(`${key}: - index: ${index}`);
      break;
  }
};
</script>

<style lang="scss" scoped></style>
