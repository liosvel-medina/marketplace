<script setup lang="ts">
interface Props {
  name: string;
  fieldId: string;
  label?: string;
  selected?: boolean;
}

defineProps<Props>();
defineEmits(["update"]);
</script>

<template>
  <input
    type="radio"
    :name="name"
    :id="fieldId"
    :checked="selected == true"
    @change="$emit('update', $event?.target?.value || false)"
    class="hidden"
  />

  <label :for="fieldId" class="flex items-center cursor-pointer">
    <img
      src="../../../assets/images/controls/radiobutton-checked.svg"
      alt=""
      v-if="selected == true"
    />

    <img
      src="../../../assets/images/controls/radiobutton-unchecked.svg"
      alt=""
      v-else
    />

    <span v-if="label">{{ label }}</span>
  </label>
</template>

<style scoped lang="scss"></style>
