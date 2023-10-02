<script setup lang="ts">
import Card from "../../../components/shared/card/Card.vue";
import { useProductDetails } from "./useProductDetails";
import Loader from "../../../components/shared/loader/Loader.vue";

const { product, isLoading } = useProductDetails();
</script>

<template>
  <Loader
    class="fixed left-1/2 translate-x-[-50%]"
    :elevated="true"
    v-if="isLoading"
  />

  <div class="flex flex-col p-3" v-else>
    <Card>
      <div class="flex pt-5 pr-[22px] pb-11 pl-[19px]">
        <div class="flex flex-col">
          <Card>
            <div class="w-[380px] h-[380px] p-4">
              <img
                :src="product?.image"
                alt=""
                class="w-full h-full object-contain"
              />
            </div>
          </Card>
        </div>
      </div>
    </Card>
  </div>
</template>

<style scoped lang="scss"></style>
