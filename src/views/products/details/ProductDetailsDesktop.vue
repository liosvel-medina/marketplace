<script setup lang="ts">
import { useProductDetails } from "./useProductDetails";
import Loader from "../../../components/shared/loader/Loader.vue";
import MainInfoCard from "./desktop/MainInfoCard.vue";
import SecondaryInfoCard from "./desktop/SecondaryInfoCard.vue";
import Card from "../../../components/shared/card/Card.vue";

const {
  product,
  images,
  selectedImage,
  favImage,
  toggleFavorite,
  isLoading,
  similarProducts,
} = useProductDetails();
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

      <div class="grid grid-cols-[1fr_280px] gap-5 mt-5">
        <SecondaryInfoCard />

        <Card class="self-start">
          <div class="flex flex-col gap-[14px] pt-5 px-4 pb-9">
            <h3 class="title-h6">You may like</h3>

            <div class="flex flex-col gap-4">
              <RouterLink
                v-for="item of similarProducts.filter((_, index) => index < 5)"
                :key="`similar${item.id}`"
                :to="{ name: 'ProductDetails', params: { id: item.id } }"
                class="grid grid-cols-[80px_1fr] items-center gap-[11px] rounded-md cursor-pointer hover:bg-gray-100"
              >
                <Card>
                  <div class="w-20 min-w-20 h-20 p-[5px]">
                    <img
                      :src="item.image"
                      alt="preview"
                      class="w-full h-full object-contain"
                    />
                  </div>
                </Card>

                <div class="flex flex-col gap-[3px]">
                  <span class="h-12 overflow-y-hidden">
                    {{ item.title }}
                  </span>

                  <span class="text-gray-500"
                    >${{ item.price.toFixed(2) }}</span
                  >
                </div>
              </RouterLink>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
