<script setup lang="ts">
import { ref } from "vue";
const sliderValue = ref(50);
</script>

<template>
  <div class="custom-slider">
    <input
      v-model="sliderValue"
      type="range"
      min="0"
      max="100"
      class="slider"
    />
    <input v-model="sliderValue" type="number" class="input" />
  </div>
</template>

<style scoped lang="scss">
.custom-slider {
  --trackHeight: 0.5rem;
  --thumbRadius: 1rem;

  input[type="range"] {
    position: relative;
    appearance: none;
    border-radius: 999px;
    z-index: 0;

    &::before {
      content: "";
      position: absolute;
      width: var(--ProgressPercent, 100%);
      height: 100%;
      background: #00865a;
      pointer-events: none;
      border-radius: 999px;
    }

    &::-webkit-slider-runnable-track {
      appearance: none;
      background: #005a3c;
      height: var(--trackHeight);
      border-radius: 999px;
    }

    &::-moz-range-track {
      appearance: none;
      background: #005a3c;
      height: var(--trackHeight);
      border-radius: 999px;
    }

    &::-webkit-slider-thumb {
      position: relative;
      top: 50%;
      transform: translate(0, -50%);
      width: var(--thumbRadius);
      height: var(--thumbRadius);
      background: #00bd7e;
      border-radius: 999px;
      pointer-events: all;
      appearance: none;
      z-index: 1;
    }
  }
}
</style>
