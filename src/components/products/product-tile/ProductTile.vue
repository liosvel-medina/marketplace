<script setup lang="ts">
import { RouterLink } from "vue-router";
import Card from "../../shared/card/Card.vue";

interface Props {
  id: number;
  image?: string;
  price: number;
  name: string;
}

defineProps<Props>();
</script>

<template>
  <Card :is-interactive="true">
    <RouterLink
      :to="{ name: 'ProductDetails', params: { id: id } }"
      class="flex flex-col w-[155px] h-[220px]"
    >
      <div class="flex w-full aspect-[2/1.95] p-[10px]">
        <img
          :src="image"
          alt=""
          class="w-full aspect-[2/1.95] object-contain"
        />
      </div>

      <div class="flex flex-col gap-[1.76px] px-[10px] pb-[14px]">
        <h2 class="title-h6 font-medium">${{ price.toFixed(2) }}</h2>

        <div class="text-[13px] text-gray-500">
          {{ name }} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eveniet, velit dicta nulla pariatur reiciendis, cumque commodi aperiam
          et magnam, tempora tenetur placeat harum sint eos vero itaque
          temporibus quaerat in.
        </div>
      </div>
    </RouterLink>
  </Card>
</template>

<style scoped lang="scss"></style>
