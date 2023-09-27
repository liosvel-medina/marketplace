<script setup lang="ts">
</script>

<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card {
  @apply bg-white border-[1px] border-gray-300 rounded-md;
}
</style>
