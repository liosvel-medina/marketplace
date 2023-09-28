<script setup lang="ts">
import { useProductList } from "./useProductList";
import ProductCard from "../../../components/products/product-card/ProductCard.vue";

const { products } = useProductList();
</script>

<template>
  <div class="flex flex-col gap-3 p-3">
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
