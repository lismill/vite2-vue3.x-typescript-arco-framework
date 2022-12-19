<template>
  <l-content title="编辑表格">
    <l-table-edit :config="deepConfig">
      <template #custom>custom-slot</template>
    </l-table-edit>
    <div class="mt-[16px]">
      {{ deepConfig.data }}
    </div>
  </l-content>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {useCloneDeep} from "@/hooks/useCloneDeep";
import {config} from "./config";

const deepConfig = reactive(useCloneDeep(config));
</script>
