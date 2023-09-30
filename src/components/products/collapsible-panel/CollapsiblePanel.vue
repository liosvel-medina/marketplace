<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
  title: string;
  isExpanded?: boolean;
}

const { isExpanded } = defineProps<Props>();

const expanded = ref(isExpanded || true);

const icon = computed(() => {
  if (expanded.value) return "expand_less";
  return "expand_more";
});

const toggleExpanded = () => {
  expanded.value = !expanded.value;
};
</script>

<template>
  <div class="flex flex-col">
    <button class="flex items-center h-12" @click="toggleExpanded">
      <span class="flex-auto text-left font-semibold">{{ title }}</span>
      <i class="material-icons text-gray-500 text-2xl">{{ icon }}</i>
    </button>

    <template v-if="expanded">
      <slot />
    </template>
  </div>
</template>

<style scoped lang="scss"></style>
