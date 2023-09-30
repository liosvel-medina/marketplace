<script setup lang="ts">
interface Props {
  routes: string[];
}

defineProps<Props>();
</script>

<template>
  <div class="flex items-center gap-2 w-full h-16">
    <template v-for="(item, index) of routes">
      <a href="#" class="text-gray-500">{{ item }}</a>

      <i v-if="index < routes.length - 1" class="material-icons text-[20px] text-gray-500">
        chevron_right
      </i>
    </template>
  </div>
</template>

<style scoped lang="scss"></style>
