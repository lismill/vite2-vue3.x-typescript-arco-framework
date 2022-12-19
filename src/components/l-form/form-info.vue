<template>
  <div class="mt-[4px] color-999999 text-[13px]" v-html="info"></div>
</template>
<script setup lang="ts">
defineProps<{
  info: string;
}>();
</script>
