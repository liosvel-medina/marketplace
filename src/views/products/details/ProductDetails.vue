<script setup lang="ts">
import { useProductDetails } from "./useProductDetails";

const { isLoading, product } = useProductDetails();

import Loader from "../../../components/shared/loader/Loader.vue";
</script>

<template>
  <Loader
    class="fixed left-1/2 translate-x-[-50%]"
    :elevated="true"
    v-if="isLoading"
  />
  {{ product }}
</template>

<style scoped lang="scss"></style>
