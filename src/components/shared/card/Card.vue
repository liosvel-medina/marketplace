<script setup lang="ts">
defineProps({
  isInteractive: { type: Boolean, default: false },
});
</script>

<template>
  <div class="card" :class="{ interactive: isInteractive }">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card {
  @apply bg-white border-[1px] border-gray-300 rounded-md;
}

.card.interactive {
  @apply hover:border-gray-400;
}
</style>
