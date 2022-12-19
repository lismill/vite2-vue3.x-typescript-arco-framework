<template>
  <m-modal
    v-if="config.dialog"
    :visible="config.dialog.visible"
    :title="config.dialog?.title"
    modal-class="l-form-dialog-modal"
    v-bind="{...defaultCondig, ...config.dialog?.others}"
    @cancel="cancel"
  >
    <CustomVueScrollbar id="l-form-dialog-modal-scrollbar" style="max-height: calc(100vh - 300px)">
      <l-form ref="modalFormRef" :config="config">
        <!-- 自定义搜索插槽 -->
        <template v-for="slot in slots" :key="slot" #[slot]="rows">
          <slot :name="slot" :item="rows.item" :form="rows.form"></slot>
        </template>
      </l-form>
    </CustomVueScrollbar>
    <template #footer>
      <!-- cancel -->
      <m-button class="m-lr4" @click="cancel">取消</m-button>
      <!-- left -->
      <template v-if="config.form?.operates?.left?.length">
        <m-button
          v-for="item in config.form.operates.left"
          :key="item.name"
          class="ml-[4px] mr-[4px]"
          v-bind="item.others"
          @click="() => emits('operate', item.name)"
        >
          {{ item.name }}
        </m-button>
      </template>
      <!-- no-center -->
      <template v-if="!config.form?.operates?.center">
        <m-button
          v-if="config.form?.operates?.centerShowResetButton"
          class="ml-[4px] mr-[4px]"
          @click="() => resetFields()"
        >
          重置
        </m-button>
        <m-button class="ml-[4px] mr-[4px]" type="primary" :loading="loading" @click="() => submit()">保存</m-button>
      </template>
      <!-- center -->
      <template v-if="config.form?.operates?.center?.length">
        <m-button
          v-for="item in config.form.operates.center"
          :key="item.name"
          class="ml-[4px] mr-[4px]"
          v-bind="item.others"
          @click="() => emits('operate', item.name)"
        >
          {{ item.name }}
        </m-button>
      </template>
      <!-- right -->
      <template v-if="config.form?.operates?.right?.length">
        <m-button
          v-for="item in config.form.operates.right"
          :key="item.name"
          v-bind="item.others"
          @click="() => emits('operate', item.name)"
        >
          {{ item.name }}
        </m-button>
      </template>
    </template>
  </m-modal>
</template>

<script setup lang="ts">
import {ref, reactive, useSlots} from "vue";
import CustomVueScrollbar from "custom-vue-scrollbar";
import "custom-vue-scrollbar/dist/style.css";
import {ILFormDialog} from "./interface";
import {useMessage} from "@/hooks/useMessage";
import {useCloneDeep} from "@/hooks/useCloneDeep";

const defaultCondig = {
  width: 620,
  titleAlign: "start",
  unmountOnClose: true,
  draggable: true,
  escToClose: false,
  maskClosable: false,
  alignCenter: false,
  cancelText: "重置",
  okText: "保存",
};
const props = defineProps<{config: ILFormDialog; defaultFormData: any}>();
const emits = defineEmits(["operate", "submit"]);
const slots = Object.keys(useSlots());
const config = reactive(props.config);
const modalFormRef = ref();
const loading = ref(false);

/**
 * 重置表单
 */
const resetFields = (name?: string) => {
  name ? modalFormRef.value.resetFields(name) : modalFormRef.value.resetFields();
  resetFormData();
};

/**
 * 校验表单
 */
const validate = (name?: string) => (name ? modalFormRef.value.validateField(name) : modalFormRef.value.validate());

/**
 * 提交表单
 */
const submit = async () => {
  const error = await validate();
  if (!error) {
    loading.value = true;
    emits("submit");
  } else {
    const OFFSET_TOP = (document as any).querySelector(".arco-form-item-message")?.offsetTop;
    if (OFFSET_TOP) {
      const FORM_CONTAINER = (document as any).querySelector("#l-form-dialog-modal-scrollbar");
      FORM_CONTAINER.scrollTo({
        top: OFFSET_TOP - 56,
        left: 0,
        behavior: "smooth",
      });
    }
    loading.value = false;
    useMessage().error("请完整填写表单");
  }
};

/**
 * 打开弹出框
 */
const open = () => {
  config.dialog.visible = true;
  resetFormData();
};

/**
 * 关闭弹出框
 */
const cancel = () => {
  config.dialog.visible = false;
  loading.value = false;
};

/**
 * 关闭loading
 */
const cancelLoading = () => (loading.value = false);

/**
 * 打开弹出框重置数据
 */
const resetFormData = () => (config.form.data = useCloneDeep(props.defaultFormData));

defineExpose({resetFields, validate, open, cancel, cancelLoading});
</script>
