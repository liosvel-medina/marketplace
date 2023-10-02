<script setup lang="ts">
import Card from "../../../components/shared/card/Card.vue";
import { useProductDetails } from "./useProductDetails";
import Loader from "../../../components/shared/loader/Loader.vue";
import RateBar from "../../../components/shared/rate-bar/RateBar.vue";

const { product, isLoading, images, selectedImage } = useProductDetails();
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Loader
      class="fixed left-1/2 translate-x-[-50%]"
      :elevated="true"
      v-if="isLoading"
    />

    <div class="flex flex-col px-3 pb-3" v-else>
      <Card>
        <div class="flex pt-5 pr-[22px] pb-11 pl-[19px]">
          <div class="flex flex-col gap-5">
            <Card>
              <div class="w-[380px] h-[380px] p-4">
                <img
                  :src="images[selectedImage]"
                  alt="preview"
                  class="w-full h-full object-contain"
                  v-if="images && selectedImage != undefined"
                />
              </div>
            </Card>

            <div class="flex items-center gap-[9px] h-14">
              <button
                v-for="(item, index) of images"
                class="h-full aspect-square border-gray-300 border-[1px] rounded overflow-hidden p-1"
                :class="{ selected: selectedImage == index }"
                @click="selectedImage = index"
              >
                <img
                  :src="item"
                  :alt="`thumb-${item}`"
                  class="w-full h-full object-contain"
                />
              </button>
            </div>
          </div>

          <div class="flex-auto flex flex-col ml-[22px]">
            <div class="flex items-center text-green gap-[2px]">
              <i class="material-icons">check</i>
              <span>In stock</span>
            </div>

            <h2 class="title-h4 mt-[5px]">{{ product?.title }}</h2>

            <div class="flex items-center mt-[9px]">
              <div class="flex items-center gap-2">
                <RateBar :rate="product?.rating.rate || 0" />
                <span class="text-orange">{{ product?.rating.rate }}</span>
              </div>

              <img src="../../../assets/dot.svg" class="ml-[10px] mr-3" />

              <div class="flex gap-[6px] items-center">
                <i class="material-icons-outlined text-gray-500 text-xl"
                  >message</i
                >
                <span class="text-gray-500">32 reviews</span>
              </div>

              <img src="../../../assets/dot.svg" class="ml-2 mr-[7px]" />

              <div class="flex gap-[6px] items-center">
                <i class="material-icons-outlined text-gray-500 text-xl"
                  >shopping_basket</i
                >
                <span class="text-gray-500">154 sold</span>
              </div>
            </div>

            <div class="flex bg-[#FFF0DF] pt-4 px-4 pb-3 mt-3">
              <div class="flex flex-col">
                <span class="title-h5 text-red"
                  >${{ product?.price.toFixed(2) }}</span
                >
                <span class="text-[13px] text-gray-600">50-100 pcs</span>
              </div>

              <div class="h-full w-px bg-gray-300 ml-[42px] mr-[10px]"></div>

              <div class="flex flex-col">
                <span class="title-h5">$90.00</span>
                <span class="text-[13px] text-gray-600">100-700 pcs</span>
              </div>

              <div class="h-full w-px bg-gray-300 ml-10 mr-[10px]"></div>

              <div class="flex flex-col">
                <span class="title-h5">$78.00</span>
                <span class="text-[13px] text-gray-600">700+ pcs</span>
              </div>
            </div>

            <div class="flex flex-col mt-[21px]">
                
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.selected {
  @apply border-gray-600;
}
</style>
