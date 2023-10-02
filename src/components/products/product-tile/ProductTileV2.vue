<script setup lang="ts">
import { RouterLink } from "vue-router";

interface Props {
  id: number;
  image?: string;
  price: number;
  name: string;
}

defineProps<Props>();
</script>

<template>
  <RouterLink
    :to="{ name: 'ProductDetails', params: { id: id } }"
    class="flex flex-col w-[172px] h-[254px] rounded-md overflow-hidden hover:bg-gray-100"
  >
    <div class="flex w-full aspect-square p-5 rounded-md bg-[#EEEEEE]">
      <img :src="image" alt="" class="w-full aspect-square object-contain" />
    </div>

    <div class="flex flex-col gap-[1.76px] mt-[14px] px-[10px] pb-[14px]">
      <div
        class="text-base text-gray-600 leading-[normal] h-[38px] overflow-hidden"
      >
        {{ name }}
      </div>

      <h2 class="text-gray-500 mt-[9px]">${{ price.toFixed(2) }}</h2>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss"></style>
