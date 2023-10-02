<script setup lang="ts">
interface Props {
  tabs: string[];
  selectedTabIndex?: number;
}

defineProps<Props>();
defineEmits(["selectedTab"]);
</script>

<template>
  <div
    class="flex items-center border-b-[1px] border-b-gray-300 font-medium text-gray-500"
  >
    <button
      v-for="(item, index) of tabs"
      :key="`tab${item}`"
      class="px-5 pt-4 pb-[13px] mb-[-1px] border-b-2 border-transparent"
      :class="{ selected: index == selectedTabIndex }"
      @click="$emit('selectedTab', index)"
    >
      {{ item }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.selected {
  @apply text-primary border-primary;
}
</style>
