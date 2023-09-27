<script setup lang="ts">
import { defineProps } from "vue";
import Card from "../../shared/card/Card.vue";

interface Props {
  name: string;
  price: number;
  image?: string;
}

const { name, price, image } = defineProps<Props>();
</script>

<template>
  <Card>
    <div class="flex flex-row gap-3 pt-3 px-[14px] pb-[14px]">
      <img
        :src="image"
        alt="pic"
        class="w-[98px] aspect-square object-contain"
      />

      <div class="flex flex-col gap-[5px]">
        <h3 class="product-name">{{ name }}</h3>
        <span class="title-h6">${{ price.toFixed(2) }}</span>

        <div class="flex flex-row gap-2 items-center">
          <img src="../../../assets/rate-placeholder.svg" alt="rate bar" />
          <span class="text-orange text-[13px]">7.5</span>

          <img src="../../../assets/dot.svg" alt="" />

          <span class="text-muted text-[13px]">154 orders</span>
        </div>
        <span class="text-green text-[13px]">Free Shipping</span>
      </div>
    </div>
  </Card>
</template>

<style scoped lang="scss"></style>
