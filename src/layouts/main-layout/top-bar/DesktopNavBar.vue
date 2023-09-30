<script setup lang="ts"></script>

<template>
  <div class="w-full h-14 bg-white border-b-[1px] border-b-gray-300">
    <div class="flex items-center h-full container mx-auto px-[10px]">
      <button class="w-10 h-10 rounded-full hover:bg-gray-200 ml-[-8px]">
        <i class="material-icons text-2xl">menu</i>
      </button>

      <div class="flex items-center gap-6 lg:gap-7 ml-[6px]">
        <a href="#" class="font-medium leading-[22px]">All category</a>
        <a href="#" class="font-medium leading-[22px]">Hot offers</a>
        <a href="#" class="font-medium leading-[22px]">Gift boxes</a>
        <a href="#" class="font-medium leading-[22px]">Projects</a>
        <a href="#" class="font-medium leading-[22px]">Menu item</a>
        <a href="#" class="flex items-center font-medium leading-[22px]">
          <span>Help</span>
          <img src="../../../assets/images/icons/ic_caret_down.svg" alt="" />
        </a>
      </div>

      <div class="flex-auto"></div>

      <a href="#" class="flex items-center font-medium leading-[22px]">
        <span><span class="hidden lg:inline">English, </span>USD</span>
        <img src="../../../assets/images/icons/ic_caret_down.svg" alt="" />
      </a>

      <a href="#" class="flex items-center font-medium leading-[22px] ml-3 lg:ml-8">
        <span>Ship to</span>
        <img
          src="../../../assets/images/flags/de.png"
          alt=""
          class="w-[22px] h-4 ml-[6px] mr-[9px] hidden lg:inline"
        />
        <img src="../../../assets/images/icons/ic_caret_down.svg" alt="" />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
