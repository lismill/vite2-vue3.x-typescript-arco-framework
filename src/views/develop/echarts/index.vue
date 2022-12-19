<template>
  <l-content title="ECharts">
    <m-row :gutter="16">
      <m-col :span="12"><chart1></chart1></m-col>
      <m-col :span="12"><chart2></chart2></m-col>
      <m-col :span="12" class="m-t16"><chart3></chart3></m-col>
      <m-col :span="12" class="m-t16"><chart4></chart4></m-col>
    </m-row>
  </l-content>
</template>

<script setup lang="ts">
import chart1 from "./chart1.vue";
import chart2 from "./chart2.vue";
import chart3 from "./chart3.vue";
import chart4 from "./chart4.vue";
</script>
