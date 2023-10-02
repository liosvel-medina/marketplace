<script setup lang="ts">
import ProductDetailsMobile from "./ProductDetailsMobile.vue";
import ProductDetailsDesktop from "./ProductDetailsDesktop.vue";
import { useProductDetails } from "./useProductDetails";

const { isMobile } = useProductDetails();
</script>

<template>
  <ProductDetailsMobile v-if="isMobile" />
  <ProductDetailsDesktop v-else />
</template>

<style scoped lang="scss"></style>
