<template>
  <m-modal
    :visible="visible"
    v-bind="{...defaultConfig, ...others}"
    @ok="emits('handle:ok')"
    @cancel="emits('handle:cancel')"
    @open="emits('handle:open')"
  >
    <template #title>{{ title }}</template>
    <slot></slot>
  </m-modal>
</template>

<script setup lang="ts">
defineProps<{visible: boolean; title: string; others?: {[key: string]: any}}>();

const defaultConfig = {
  titleAlign: "start",
  draggable: true,
};
const emits = defineEmits(["handle:ok", "handle:cancel", "handle:open"]);
</script>
