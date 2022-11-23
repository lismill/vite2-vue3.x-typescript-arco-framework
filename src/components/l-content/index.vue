<template>
  <div class="bg-ffffff p-24 rounded-8">
    <h3 class="section-title">{{ title }}</h3>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
defineProps<{title: string}>();
</script>
