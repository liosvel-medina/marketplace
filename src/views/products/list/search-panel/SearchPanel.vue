<script setup lang="ts">
interface Props {
  categories: string[];
}

const { categories } = defineProps<Props>();
</script>

<template>
  <div
    class="flex flex-col gap-4 pb-[18px] border-b-[1px] border-b-gray-300 w-full bg-white"
  >
    <label
      class="flex gap-[6px] items-center h-10 mx-[15px] px-2 rounded bg-gray-100 border-[1px] border-gray-300 cursor-text"
    >
      <i class="material-icons-outlined text-[22px] text-gray-500">search</i>

      <input
        type="search"
        placeholder="Search"
        class="flex-auto h-full bg-transparent outline-none"
      />
    </label>

    <div class="overflow-x-auto no-scrollbar">
      <div class="flex gap-1 items-center w-fit px-[15px]">
        <button
          class="whitespace-nowrap px-4 py-2 rounded-md capitalize text-primary bg-gray-200 hover:bg-gray-300"
          v-for="item of categories"
          :key="item"
        >
          {{ item }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
