<script setup lang="ts"></script>

<template>
  <div class="flex flex-col items-center pt-[38px] pb-[39px] bg-gray-200">
    <h4 class="title-h4">Subscribe on our newsletter</h4>
    <p class="text-base text-gray-500">
      Get daily news on upcoming offers from many suppliers all over the world
    </p>

    <div class="relative flex gap-2 items-center h-10 mt-[21px]">
        <i class="material-icons-outlined absolute left-2 text-[22px] text-gray-500">email</i>

      <input
        type="email"
        placeholder="Email"
        class="w-[274px] h-full pl-9 pr-3 bg-white rounded-md border-[1px] border-gray-300 outline-none"
      />

      <button class="h-full px-4 bg-primary rounded-md text-white font-medium">Subscribe</button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
