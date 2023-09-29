<script setup lang="ts">
interface Props {
  filters: string[];
}

defineProps<Props>();
</script>

<template>
  <div class="flex flex-col gap-[10px] bg-gray-100">
    <div
      class="flex gap-[6px] items-center w-full h-[50px] px-[11px] bg-white border-b-[1px] border-b-gray-300"
    >
      <button
        class="flex-auto flex items-center gap-1 h-[30px] rounded-md px-[6px] border-[1px] border-gray-300 text-[13px] font-medium"
      >
        <span class="flex-auto">Sort: Newest</span>
        <i class="material-icons-outlined text-gray-500 text-lg">sort</i>
      </button>

      <button
        class="flex-auto flex items-center gap-1 h-[30px] rounded-md px-[6px] border-[1px] border-gray-300 text-[13px] font-medium"
      >
        <span class="flex-auto">Filter (3)</span>
        <i class="material-icons-outlined text-gray-500 text-lg">filter_alt</i>
      </button>

      <div
        class="flex h-[30px] rounded-md border-[1px] border-gray-300 text-xl overflow-hidden"
      >
        <button
          class="flex items-center justify-center h-full aspect-square border-r-[1px] border-r-gray-300"
        >
          <img src="../../../../assets/images/icons/ic_gridview.svg" alt="" />
        </button>

        <button
          class="flex items-center justify-center h-full aspect-square border-l-[1px] border-l-gray-300 bg-gray-200"
        >
          <img src="../../../../assets/images/icons/ic_listview.svg" alt="" />
        </button>
      </div>
    </div>

    <div class="overflow-auto no-scrollbar">
      <div class="flex items-center w-fit px-[10px] gap-[7px]">
        <button
          class="flex items-center gap-[9px] h-8 pl-[10px] pr-[6px] rounded-[5px] border-primary border-[1px]"
          v-for="item of filters"
        >
          <span class="capitalize whitespace-nowrap">{{ item }}</span>
          <i class="material-icons text-[20px] text-gray-500">close</i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
