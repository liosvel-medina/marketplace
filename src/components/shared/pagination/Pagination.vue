<script setup lang="ts">
import { ref } from "vue";

interface Props {
  pages: number;
  currentPage?: number;
  showItemsCount?: number;
}

const { currentPage = 1, showItemsCount = 10 } = defineProps<Props>();

const itemCountOptions = [10, 25, 100];

const currentPageModel = ref(currentPage);
const itemsCountModel = ref(showItemsCount);
</script>

<template>
  <div class="flex items-center gap-[9px] w-fit h-[40px]">
    <select
      v-model="itemsCountModel"
      class="h-full pl-[10px] pr-10 bg-[url('/src/assets/images/icons/ic_caret_down.svg')] bg-no-repeat bg-[calc(100%-8px)_center] outline-none appearance-none cursor-pointer bg-white border-[1px] border-gray-300 rounded-md"
    >
      <option
        v-for="item of itemCountOptions"
        :key="`count${item}`"
        :value="item"
      >
        Show {{ item }}
      </option>
    </select>

    <div class="flex h-full">
      <button
        class="flex items-center justify-center w-[44px] h-full bg-white border-y-[1px] border-l-[1px] border-gray-300 rounded-l-md"
      >
        <i class="material-icons-round text-3xl text-gray-500">chevron_left</i>
      </button>

      <button
        v-for="item of pages"
        :key="`page${item}`"
        class="page"
        :class="{
          selected: item == currentPageModel,
          unselected: item != currentPageModel,
        }"
        @click="currentPageModel = item"
      >
        {{ item }}
      </button>

      <button
        class="flex items-center justify-center w-[44px] h-full bg-white border-[1px] border-gray-300 rounded-r-md"
      >
        <i class="material-icons-round text-3xl">chevron_right</i>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
button.page {
  @apply flex items-center justify-center w-[44px] h-full  border-y-[1px] border-l-[1px] border-gray-300 font-medium;

  &.unselected {
    @apply bg-white;
  }

  &.selected {
    @apply bg-gray-200 text-gray-500;
  }
}
</style>
