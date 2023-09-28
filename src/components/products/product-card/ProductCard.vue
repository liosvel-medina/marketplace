<script setup lang="ts">
import Card from "../../shared/card/Card.vue";

interface Props {
  name: string;
  price: number;
  image?: string;
  rating?: number;
  count?: number;
}

const { name, price, image, rating, count } = defineProps<Props>();
</script>

<template>
  <Card>
    <div class="flex flex-row gap-3 pt-3 px-[14px] pb-[14px]">
      <img
        :src="image"
        alt="pic"
        class="w-[98px] aspect-square object-contain"
      />

      <div class="flex-auto flex flex-col gap-[5px] overflow-x-hidden">
        <h3 class="truncate">{{ name }}</h3>
        <span class="title-h6">${{ price.toFixed(2) }}</span>

        <div class="flex flex-row gap-2 items-center">
          <img src="../../../assets/rate-placeholder.svg" alt="rate bar" />
          <span class="text-orange text-[13px]">{{ rating }}</span>

          <img src="../../../assets/dot.svg" alt="" />

          <span class="text-muted text-[13px]">{{ count }} orders</span>
        </div>
        <span class="text-green text-[13px]">Free Shipping</span>
      </div>
    </div>
  </Card>
</template>

<style scoped lang="scss"></style>
