<script setup lang="ts">
import { useProductDetails } from "./useProductDetails";
import RateBar from "../../../components/shared/rate-bar/RateBar.vue";

const { isLoading, product, similarProducts, favImage, toggleFavorite } =
  useProductDetails();

import Loader from "../../../components/shared/loader/Loader.vue";
import Card from "../../../components/shared/card/Card.vue";
import ProductTile from "../../../components/products/product-tile/ProductTile.vue";
</script>

<template>
  <div class="flex flex-col bg-gray-100">
    <Loader
      class="fixed left-1/2 translate-x-[-50%]"
      :elevated="true"
      v-if="isLoading"
    />

    <div class="flex flex-col" v-else>
      <div class="bg-gray-200 w-full aspect-square p-10 product-image">
        <img
          :src="product?.image"
          alt=""
          class="w-full aspect-square object-contain"
        />
      </div>

      <div class="flex flex-col p-4 border-b-[1px] bg-white border-b-gray-300">
        <div class="flex gap-[10px] items-center">
          <RateBar :rate="product?.rating.rate || 0" />

          <img src="../../../assets/dot.svg" alt="rate bar" />

          <div class="flex gap-[6px] items-center">
            <i class="material-icons-outlined text-gray-400 text-lg">message</i>
            <span class="text-gray-500 text-[13px]">32 reviews</span>
          </div>

          <img src="../../../assets/dot.svg" alt="rate bar" />

          <div class="flex gap-[6px] items-center">
            <i class="material-icons-outlined text-gray-400 text-lg"
              >shopping_basket</i
            >
            <span class="text-gray-500 text-[13px]">154 sold</span>
          </div>
        </div>

        <div class="title-h6 mt-[10px]">
          {{ product?.title }}
        </div>

        <div class="flex gap-[5px] items-center mt-[6px]">
          <span class="text-red font-semibold"
            >${{ product?.price.toFixed(2) }}</span
          >
          <span class="text-[13px] text-gray-500">(50-100 pcs)</span>
        </div>

        <div class="flex gap-2 mt-3">
          <button
            class="flex-auto flex items-center justify-center bg-primary text-white rounded-md font-medium h-10"
          >
            Send inquiry
          </button>
          <button
            class="flex items-center justify-center w-10 h-10 border-[1px] border-gray-300 rounded-md"
            @click="toggleFavorite"
          >
            <i class="material-icons-outlined text-primary">{{ favImage() }}</i>
          </button>
        </div>

        <table class="mt-5 w-fit">
          <tbody>
            <tr>
              <th class="text-left font-normal text-gray-500 pr-12 pb-[5px]">
                Condition
              </th>
              <td>Brand new</td>
            </tr>
            <tr>
              <th class="text-left font-normal text-gray-500 pr-12 pb-[5px]">
                Material
              </th>
              <td>Plastic</td>
            </tr>
            <tr>
              <th class="text-left font-normal text-gray-500 pr-12 pb-[5px]">
                Category
              </th>
              <td class="capitalize">{{ product?.category }}</td>
            </tr>
            <tr>
              <th class="text-left font-normal text-gray-500 pr-12 pb-[5px]">
                Item number
              </th>
              <td>{{ product?.id.toString().padStart(5, "0") }}</td>
            </tr>
          </tbody>
        </table>

        <p class="mt-[5px]">
          {{ product?.description }}
        </p>

        <button class="w-fit text-primary font-medium px-0 py-3">
          Read more
        </button>
      </div>

      <Card class="m-[10px] p-[10px] flex flex-col gap-3">
        <div class="flex gap-[11px] items-center">
          <div
            class="flex items-center justify-center w-12 h-12 rounded-[4px] bg-base-color-blue-100"
          >
            <span class="text-[28px] text-[rgba(76,167,167,0.60)] font-semibold"
              >R</span
            >
          </div>

          <div class="flex-auto flex flex-col">
            <span>Supplier</span>
            <span>Guanjoi Trading LLC</span>
          </div>

          <i class="material-icons-outlined text-gray-500 text-2xl"
            >chevron_right</i
          >
        </div>

        <div class="w-full h-px bg-gray-300"></div>

        <div class="flex items-center justify-between text-gray-600">
          <div class="flex gap-[7px] items-center">
            <img
              src="../../../assets/images/flags/de.png"
              alt="DE"
              class="w-5 h-[14px]"
            />
            <span>Germany</span>
          </div>

          <div class="flex gap-[7px] items-center">
            <i class="material-icons-outlined text-gray-500">verified_user</i>
            <span>Verified</span>
          </div>

          <div class="flex gap-[7px] items-center">
            <i class="material-icons-outlined text-gray-500">language</i>
            <span>Shipping</span>
          </div>
        </div>
      </Card>

      <h2 class="title-h5 m-[10px]">Similar products</h2>

      <div class="my-[10px] overflow-auto">
        <div class="flex gap-2 w-fit mx-[10px]">
          <ProductTile
            :id="item.id"
            :name="item.title"
            :image="item.image"
            :price="item.price"
            v-for="item of similarProducts"
            :key="item.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
