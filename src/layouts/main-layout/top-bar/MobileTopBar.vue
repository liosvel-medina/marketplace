<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();

defineEmits(["goBack"]);
</script>

<template>
  <div
    class="fixed top-0 left-0 z-30 flex items-center w-full h-14 px-3 bg-white"
  >
    <button
      class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200"
      @click="$emit('goBack')"
    >
      <i class="material-icons-outlined text-2xl">arrow_back</i>
    </button>

    <span class="title-h5 ml-2">{{ title }}</span>

    <div class="flex-auto"></div>

    <div class="flex">
      <button
        class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200"
      >
        <i class="material-icons-outlined text-2xl">shopping_cart</i>
      </button>
      <button
        class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200"
      >
        <i class="material-icons-outlined text-2xl">person</i>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
