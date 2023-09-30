<script setup lang="ts">
import { ref } from "vue";

interface Props {
  name: string;
  fieldId: string;
  label?: string;
  isChecked?: boolean;
}

const { isChecked } = defineProps<Props>();
const emit = defineEmits(["change"]);

const isCheckedModel = ref(isChecked == true);

const toggle = () => {
  const newValue = !isCheckedModel.value;
  isCheckedModel.value = newValue;
  emit("change", newValue);
};
</script>

<template>
  <label class="flex items-center cursor-pointer" @click="toggle">
    <img
      src="../../../assets/images/controls/checkbox-checked.svg"
      alt=""
      v-if="isCheckedModel"
    />

    <img
      src="../../../assets/images/controls/checkbox-unchecked.svg"
      alt=""
      v-else
    />

    <span v-if="label" class="flex-auto">{{ label }}</span>

    <template v-else>
      <slot/>
    </template>
  </label>
</template>

<style scoped lang="scss"></style>
