<template>
  <l-content title="富文本编辑器">
    <l-editor :config="config" @change="(html) => (content = html)"></l-editor>
    <div class="m-t16">{{ content }}</div>
  </l-content>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue";
import {ILEditor} from "@/components/l-editor/interface";

const config: ILEditor = reactive({
  content: "<div>Hello,</div>",
});
const content = ref("");
</script>
