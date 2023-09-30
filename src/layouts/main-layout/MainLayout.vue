<script setup lang="ts">
import { RouterView } from "vue-router";
import MobileTopBar from "./top-bar/MobileTopBar.vue";
import DesktopTopBar from "./top-bar/DesktopTopBar.vue";
import { useMainLayout } from "./useMainLayout";
import Breadcrumbs from "./breadcrumbs/Breadcrumbs.vue";

const { title, onGoBackClick, isMobile, topBarHeight, categories } =
  useMainLayout();
</script>

<template>
  <div class="relative flex flex-col w-full h-screen bg-gray-100">
    <MobileTopBar :title="title" @go-back="onGoBackClick" v-if="isMobile" />

    <DesktopTopBar :categories="categories" v-else />

    <div
      class="fixed left-0 w-full overflow-auto"
      :style="{ top: topBarHeight, height: `calc(100vh - ${topBarHeight})` }"
    >
      <div class="container mx-auto">
        <Breadcrumbs
          :routes="['Home', 'Clothings', 'Men’s wear', 'Summer clothing']"
          class="mx-5"
        />

        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
