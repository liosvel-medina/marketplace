<script setup lang="ts">
import { useProductList } from "./useProductList";
import ProductCard from "../../../components/products/product-card/ProductCard.vue";
import Loader from "../../../components/shared/loader/Loader.vue";

const { products, isLoading } = useProductList();
</script>

<template>
  <div class="relative flex flex-col gap-3 p-3">
    <Loader
      class="fixed left-1/2 translate-x-[-50%]"
      :elevated="true"
      v-if="isLoading"
    />

    <ProductCard
      :name="item.title"
      :price="item.price"
      :image="item.image"
      :rating="item.rating.rate"
      :count="item.rating.count"
      v-for="item of products"
      :key="item.id"
    />
  </div>
</template>

<style scoped lang="scss"></style>
