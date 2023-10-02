<script setup lang="ts">
import { useProductDetails } from "./useProductDetails";
import Loader from "../../../components/shared/loader/Loader.vue";
import MainInfoCard from "./desktop/MainInfoCard.vue";

const { isLoading } = useProductDetails();
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Loader
      class="fixed left-1/2 translate-x-[-50%]"
      :elevated="true"
      v-if="isLoading"
    />

    <div class="flex flex-col px-3 pb-3" v-else>
        <MainInfoCard/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.selected {
  @apply border-gray-600;
}

.custom-shadow {
  box-shadow: 0px 1px 2px 0px rgba(56, 56, 56, 0.08);
}
</style>
