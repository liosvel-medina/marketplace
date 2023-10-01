<script setup lang="ts">
import { computed } from "vue";

interface Props {
  name?: string;
  fieldId: string;
  label?: string;
  value?: any;
  modelValue?: any;
}

const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

const isChecked = computed(() => {
  return props.value == props.modelValue;
});

const onChange = () => {
  emit("update:modelValue", props.value);
};
</script>

<template>
  <input
    :id="fieldId"
    type="radio"
    :checked="isChecked"
    class="hidden"
    @change="onChange"
  />

  <label :for="fieldId" class="flex items-center cursor-pointer">
    <img
      src="../../../assets/images/controls/radiobutton-checked.svg"
      alt=""
      v-if="isChecked"
    />

    <img
      src="../../../assets/images/controls/radiobutton-unchecked.svg"
      alt=""
      v-else
    />

    <span v-if="label" class="flex-auto">{{ label }}</span>

    <template v-else>
      <slot />
    </template>
  </label>
</template>

<style scoped lang="scss"></style>
