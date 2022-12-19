<template>
  <div class="l-statistic-card">
    <div class="tabs flex items-center">
      <swiper
        :modules="modules"
        slides-per-view="auto"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          disabledClass: 'my-button-disabled',
        }"
        :slide-to-clicked-slide="true"
      >
        <swiper-slide v-for="(item, index) in data" :key="item.name">
          <div :key="item.name" class="item" :class="{active: tab === index}" @click="tabChange(item, index)">
            <div class="name flex items-center">
              {{ item.name }}
              <m-tooltip :overlay-style="{maxWidth: '210px'}">
                <template #content>{{ item.tips }}</template>
                <img v-if="item.tips" class="ml-[4px]" src="./images/l-statistic-card-question.png" />
              </m-tooltip>
            </div>
            <div class="value">{{ item.value }}</div>
            <div class="header flex items-center">
              <p class="name">
                {{ item.header.name }}:
                <span class="ml-[6px]" style="color: #252931">{{ item.header.value }}</span>
              </p>
              <p
                class="percent"
                :class="[item.header.status === 'up' && 'up', item.header.status === 'down' && 'down']"
              >
                {{ item.header.percent }}
              </p>
              <p v-if="item.header.name" class="status">
                <img v-if="item.header.status === 'up'" src="./images/l-statistic-card-up.png" />
                <img v-else-if="item.header.status === 'down'" src="./images/l-statistic-card-down.png" />
                <span v-else> - </span>
              </p>
            </div>
            <div class="footer flex items-center">
              <p class="name">
                {{ item.footer.name }}:
                <span class="ml-[6px]" style="color: #252931">{{ item.footer.value }}</span>
              </p>
              <p
                class="percent"
                :class="[item.footer.status === 'up' && 'up', item.footer.status === 'down' && 'down']"
              >
                {{ item.footer.percent }}
              </p>
              <p class="status">
                <img v-if="item.footer.status === 'up'" src="./images/l-statistic-card-up.png" />
                <img v-else-if="item.footer.status === 'down'" src="./images/l-statistic-card-down.png" />
                <span v-else> - </span>
              </p>
            </div>
          </div>
        </swiper-slide>

        <!-- swiper-button -->
        <div class="swiper-button-next">
          <!-- <img src="./images/swiper-next.png" /> -->
          <div></div>
        </div>
        <div class="swiper-button-prev">
          <!-- <img src="./images/swiper-prev.png" /> -->
          <div></div>
        </div>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "vue-awesome-swiper";
import "swiper/css";
import "swiper/css/navigation";
import {IData} from "./interface";

defineProps<{data: Array<IData>}>();
const emits = defineEmits(["statistic:card:change"]);

const tab = ref(0);
const modules = [Navigation];
const tabChange = (item: any, index: number) => {
  tab.value = index;
  emits("statistic:card:change", item);
};
const tabReset = () => (tab.value = 0);

defineExpose({tabReset});
</script>

<style lang="scss" scoped>
.l-statistic-card {
  .tabs {
    border-top: 1px solid #edeef0;
    background-color: #fafbfc;
  }
  .swiper {
    margin: 0;
    .swiper-slide {
      width: 260px !important;
    }
    .swiper-button-next,
    .swiper-button-prev {
      div {
        width: 16px;
        height: 140px;
        background-image: url("./images/swiper-next.png");
        background-size: cover;
      }
    }
    .swiper-button-prev {
      right: 0;
      div {
        background-image: url("./images/swiper-prev.png");
        &:hover {
          cursor: pointer;
          background-image: url("./images/swiper-prev-hover.png");
        }
      }
    }
    .swiper-button-next {
      div {
        &:hover {
          cursor: pointer;
          background-image: url("./images/swiper-next-hover.png");
        }
      }
    }
    .swiper-button-next:after,
    .swiper-rtl .swiper-button-prev:after,
    .swiper-button-prev:after,
    .swiper-rtl .swiper-button-next:after {
      display: none;
    }
    .swiper-button-next,
    .swiper-rtl .swiper-button-prev {
      right: -5px;
    }
    .swiper-button-prev,
    .swiper-rtl .swiper-button-next {
      left: -5px;
    }
    .my-button-disabled {
      display: none;
    }
  }

  .tabs {
    .item {
      position: relative;
      width: 260px;
      height: 140px;
      padding: 16px 24px;
      background: #f8f9fa;
      &:hover,
      &.active {
        cursor: pointer;
        background: linear-gradient(180deg, #ebf3ff 0%, #ffffff 100%);
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background-color: #1966ff;
        }
        .value {
          color: #1966ff;
        }
      }
      &::after {
        content: "";
        position: absolute;
        height: 72px;
        top: 33px;
        right: 0;
        width: 2px;
        background-color: #edeef0;
      }
      .name {
        height: 20px;
        font-weight: 500;
        color: #85878a;
        line-height: 20px;
        img {
          width: 14px;
          height: 14px;
        }
      }
      .value {
        margin-top: 8px;
        height: 28px;
        font-size: 24px;
        font-weight: 500;
        color: #12141a;
      }
      .header,
      .footer {
        .name {
          height: 17px;
          font-size: 12px;
          color: #aaabaf;
          line-height: 17px;
        }
        .percent {
          margin: 0 0 0 10px;
          height: 16px;
          line-height: 16px;
          color: #aaabaf;
          &.up {
            color: #fa4050;
          }
          &.down {
            color: #33cc59;
          }
        }
        .status {
          position: relative;
          top: 1px;
          left: 8px;
          span {
            color: #aaabaf;
          }
          img {
            width: 6px;
          }
        }
      }
      .header {
        margin-top: 16px;
        margin-bottom: 4px;
      }
      .footer {
        margin-top: -2px;
      }
    }
  }
}
</style>
