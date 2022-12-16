<template>
  <div class="framework-breadcrumb">
    <m-breadcrumb>
      <m-breadcrumb-item>
        <span class="cursor-pointer" @click="ROUTER.push('/')">首页</span>
      </m-breadcrumb-item>
      <m-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.name">
        <span v-if="index !== breadcrumbs.length - 1" class="cursor-pointer" @click="ROUTER.push(item)">
          {{ item.meta?.title }}
        </span>
        <span v-else>{{ OPERATES_TITLE }}{{ item.meta?.title }}</span>
      </m-breadcrumb-item>
    </m-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import {watch, ref} from "vue";
import {useRoute, useRouter} from "vue-router";

const breadcrumbs: any = ref([]);
const ROUTE = useRoute();
const ROUTER = useRouter();

const OPERATES: any = {create: "创建", edit: "编辑", view: "查看"};
const OPERATES_TITLE = OPERATES[ROUTE.query?.operate as string];

watch(
  () => ROUTE.path,
  () => {
    breadcrumbs.value = ROUTE.matched;
  },
  {
    immediate: true,
  },
);
</script>
