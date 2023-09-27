<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <h1>Home</h1>

  <ul>
    <li>
      <RouterLink :to="{ name: 'ProductList' }">Product List</RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: 'ProductDetails' }">Product Details</RouterLink>
    </li>
  </ul>
</template>

<style scoped lang="scss"></style>
