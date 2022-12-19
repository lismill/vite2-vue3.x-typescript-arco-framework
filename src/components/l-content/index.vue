<template>
  <div class="p-[24px] bg-white rounded-[8px]">
    <h3 v-if="title" class="section-title">{{ title }}</h3>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
defineProps<{title?: string}>();
</script>
