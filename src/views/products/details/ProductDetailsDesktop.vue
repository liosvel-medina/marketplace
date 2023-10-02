<script setup lang="ts">
import { useProductDetails } from "./useProductDetails";
import Loader from "../../../components/shared/loader/Loader.vue";
import MainInfoCard from "./desktop/MainInfoCard.vue";
import SecondaryInfoCard from "./desktop/SecondaryInfoCard.vue";

const { product, images, selectedImage, favImage, toggleFavorite, isLoading } =
  useProductDetails();
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Loader
      class="fixed left-1/2 translate-x-[-50%]"
      :elevated="true"
      v-if="isLoading"
    />

    <div class="flex flex-col px-3 pb-3" v-else>
      <MainInfoCard
        :product="product"
        :images="images"
        :selected-image="selectedImage"
        :fav-image="favImage()"
        @selected-image="(newValue:number)=>{selectedImage = newValue}"
        @toggle-favorite="toggleFavorite"
      />

      <div class="grid grid-cols-[1fr_280px] mt-5">
        <SecondaryInfoCard />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
