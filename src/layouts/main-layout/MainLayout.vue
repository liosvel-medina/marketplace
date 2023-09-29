<script setup lang="ts">
import { RouterView } from "vue-router";
import MobileTopBar from "./top-bar/MobileTopBar.vue";
import { useMainLayout } from "./useMainLayout";

const { title, onGoBackClick } = useMainLayout();
</script>

<template>
  <div class="relative flex flex-col w-full h-screen bg-gray-100">
    <MobileTopBar :title="title" @go-back="onGoBackClick" />
    <div class="fixed top-14 left-0 w-full h-[calc(100vh-56px)] overflow-auto">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
