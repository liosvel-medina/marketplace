<script setup lang="ts">
import { ref } from "vue";

interface Props {
  categories: string[];
}

const selectedCategory = ref<string | null>(null);

defineProps<Props>();
</script>

<template>
  <div class="fixed top-0 left-0 z-30 flex flex-col w-full bg-white">
    <div
      class="flex items-center w-full h-[86px] border-b-[1px] border-b-gray-300"
    >
      <div class="container mx-auto">
        <div class="flex items-center justify-between">
          <img src="../../../assets/images/brand/logo-colored.svg" alt="" />

          <div
            class="flex w-[665px] h-10 border-2 border-primary rounded-md overflow-hidden"
          >
            <input
              type="search"
              placeholder="Search"
              class="flex-auto h-full px-[10px] outline-none"
            />

            <div class="w-px h-full bg-primary"></div>

            <select
              name="category"
              id="select-category"
              v-model="selectedCategory"
              class="pl-[10px] pr-10 bg-[url('/src/assets/images/icons/ic_caret_down.svg')] bg-no-repeat bg-[calc(100%-8px)_center] outline-none appearance-none cursor-pointer capitalize"
            >
              <option :value="null">All category</option>

              <option
                v-for="item of categories"
                :key="item"
                value="item"
                class="capitalize"
              >
                {{ item }}
              </option>
            </select>

            <button
              class="border-none w-[100px] h-full bg-primary text-white font-medium"
            >
              Search
            </button>
          </div>

          <div class="flex gap-5 items-center text-muted">
            <button class="flex flex-col gap-[5px] items-center hover:text-primary transition-all">
              <i class="material-icons-round text-[24px]">person</i>
              <span class="text-xs font-normal">Profile</span>
            </button>

            <button class="flex flex-col gap-[5px] items-center hover:text-primary transition-all">
              <i class="material-icons-round text-[24px]">message</i>
              <span class="text-xs font-normal">Message</span>
            </button>

            <button class="flex flex-col gap-[5px] items-center hover:text-primary transition-all">
              <i class="material-icons-round text-[24px]">favorite</i>
              <span class="text-xs font-normal">Orders</span>
            </button>

            <button class="flex flex-col gap-[5px] items-center hover:text-primary transition-all">
              <i class="material-icons-round text-[24px]">shopping_cart</i>
              <span class="text-xs font-normal">My cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
