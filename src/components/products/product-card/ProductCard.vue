<script setup lang="ts">
import { defineProps, computed } from "vue";
import { useAssets } from "../../../composables/useAssets";
import Card from "../../shared/card/Card.vue";

interface Props {
  name: string;
  description?: string;
  price: number;
  image?: string;
}

const { getAsset } = useAssets();

const { name, description, price, image } = defineProps<Props>();
</script>

<template>
  <Card>
    <div class="flex flex-row gap-2">
      <img :src="image" alt="pic" class="w-[98px] aspect-square" />

      <div class="flex flex-col">
        <h3 class="product-name">{{ name }}</h3>
        <span class="font-semibold">${{ price.toFixed(2) }}</span>

        <div class="flex flex-row gap-2">
          <img src="../../../assets/rate-placeholder.svg" alt="rate bar" />
          <span class="text-orange">7.5</span>

          <img src="../../../assets/dot.svg" alt="" />

          <span class="text-muted">154 orders</span>
        </div>
        <span class="text-green">Free Shipping</span>
      </div>
    </div>
  </Card>
</template>

<style scoped lang="scss"></style>
