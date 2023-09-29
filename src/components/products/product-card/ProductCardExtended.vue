<script setup lang="ts">
// import { RouterLink } from "vue-router";
import Card from "../../shared/card/Card.vue";
import RateBar from "../../shared/rate-bar/RateBar.vue";

interface Props {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image?: string;
  rating?: number;
  count?: number;
  description?: string;
  isFavorite?: boolean;
}

defineProps<Props>();
</script>

<template>
  <Card>
    <div class="flex flex-row gap-6 p-5">
      <img
        :src="image"
        alt="pic"
        class="w-[185px] aspect-square object-contain"
      />

      <div class="flex-auto flex flex-col gap-[5px] overflow-x-hidden">
        <h3 class="truncate">{{ name }}</h3>
        <span class="title-h6">${{ price.toFixed(2) }}</span>

        <div class="flex flex-row gap-2 items-center">
          <RateBar :rate="rating || 0" />

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
