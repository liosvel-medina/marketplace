<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <h1>Home</h1>

  <ul>
    <li>
      <RouterLink
        :to="{ name: 'ProductList' }"
        class="flex items-center gap-2 text-primary"
      >
        <i class="material-icons-outlined">link</i>
        <span> Product List</span>
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped lang="scss"></style>
