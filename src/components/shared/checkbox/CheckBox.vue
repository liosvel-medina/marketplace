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

const onChange = () => {
  emit("change", isCheckedModel.value);
};
</script>

<template>
  <label class="flex items-center cursor-pointer">
    <input
      type="checkbox"
      :name="name"
      :id="fieldId"
      class="hidden"
      :checked="isChecked == true"
      @change="onChange()"
      v-model="isCheckedModel"
    />

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

    <span v-if="label">{{ label }}</span>
  </label>
</template>

<style scoped lang="scss"></style>
