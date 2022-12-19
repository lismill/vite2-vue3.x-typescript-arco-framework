<template>
  <div class="area">
    <div>
      <m-cascader
        v-model="form.area"
        path-mode
        :options="areas"
        :style="{width: '320px'}"
        placeholder="请选择"
        allow-clear
        allow-search
        :field-names="{value: 'label'}"
        @change="search"
      />
    </div>
    <m-textarea
      v-model="form.address"
      class="mt-[16px]"
      style="width: 768px"
      placeholder="请输入详细地址"
      allow-clear
      @change="search"
    ></m-textarea>
  </div>
  <div class="p-[24px] amap">
    <div class="flex">
      <div class="flex items-center">
        <div class="mr-[16px] label">经度</div>
        <m-input v-model="form.lng" style="width: 300px" placeholder="请输入"></m-input>
      </div>
      <div class="flex items-center ml-[32px]">
        <div class="mr-[16px] label">纬度</div>
        <m-input v-model="form.lat" style="width: 300px" placeholder="请输入"></m-input>
      </div>
    </div>
    <div class="mt-[24px]" style="width: 720px">
      <l-amap :custom-map="customMap"></l-amap>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{areas: Array<any>}>();

const emits = defineEmits(["change"]);
const rMap: any = ref();
const RAMap: any = ref();
const form = reactive({area: [], address: "", lng: "", lat: ""});

// 添加自定义事件
const search = () => {
  rMap.value.plugin("AMap.PlaceSearch", () => {
    const placeSearch = new RAMap.value.PlaceSearch({pageSize: 1, map: rMap.value});
    placeSearch.search(`${form.area.join()}${form.address}`, (status: string, result: any) => {
      if (status === "complete") {
        if (result.poiList?.pois?.length) {
          const {lng, lat} = result.poiList.pois[0].location;
          form.lng = String(lng);
          form.lat = String(lat);
        }
      }
    });
  });
  emits("change", form);
};
// 扩展定制地图方法
const customMap = (map: any, AMap: any) => {
  rMap.value = map;
  RAMap.value = AMap;
};
</script>

<style lang="scss" scoped>
.amap {
  width: 768px;
  margin-top: 10px;
  background-color: #f9fbff;
  .label {
    width: 28px;
    color: #55585c;
  }
}
</style>
