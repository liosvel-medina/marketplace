<script setup lang="ts">
import { RouterLink } from "vue-router";
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
  favImage?: string;
}

defineProps<Props>();

defineEmits(["toggleFavorite"]);
</script>

<template>
  <Card>
    <div class="relative flex flex-row gap-6 p-5">
      <img
        :src="image"
        alt="pic"
        class="w-[185px] aspect-square object-contain"
      />

      <div class="flex-auto flex flex-col overflow-x-hidden">
        <h3 class="text-base font-medium leading-[22px] mr-16 truncate">
          {{ name }}
        </h3>

        <div class="flex items-center gap-[7px] mt-4">
          <span class="title-h4">${{ price.toFixed(2) }}</span>

          <span
            class="text-base font-semibold line-through decoration-1 leading-normal text-gray-500"
            v-if="oldPrice"
          >
            ${{ oldPrice?.toFixed(2) }}
          </span>
        </div>

        <div class="flex flex-row items-center mt-1">
          <RateBar :rate="rating || 0" />

          <span class="text-orange ml-[6px] mr-3">{{ rating }}</span>

          <img src="../../../assets/dot.svg" alt="" />

          <span class="text-muted mx-[9px]"> {{ count }} orders </span>

          <img src="../../../assets/dot.svg" alt="" />

          <span class="text-green ml-[9px]">Free Shipping</span>
        </div>

        <p class="h-12 overflow-y-hidden mt-3 text-gray-600">
          {{ description }}
        </p>

        <RouterLink
          :to="{ name: 'ProductDetails', params: { id: id } }"
          class="self-start text-primary font-medium no-underline hover:underline mt-2"
        >
          View details
        </RouterLink>
      </div>

      <button
        class="absolute top-5 right-5 flex items-center justify-center w-10 h-10 border-gray-300 border-[1px] rounded-md"
        @click="$emit('toggleFavorite')"
      >
        <i class="material-icons text-primary"> {{ favImage }} </i>
      </button>
    </div>
  </Card>
</template>

<style scoped lang="scss"></style>
