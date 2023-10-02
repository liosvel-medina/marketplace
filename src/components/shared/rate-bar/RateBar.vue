<script setup lang="ts">
import { computed } from "vue";
import { useAssets } from "../../../composables/useAssets";

interface Props {
  rate: number;
}

const props = defineProps<Props>();

const { getAsset } = useAssets();

const barImage = computed(() => {
  const stars = Math.trunc(props.rate);
  return getAsset(`images/rate-bar/rate-bar-${stars}.svg`);
});
</script>

<template>
  <img :src="barImage" alt="" />
</template>

<style scoped lang="scss"></style>
