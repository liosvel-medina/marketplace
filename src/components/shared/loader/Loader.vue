<script lang="ts" setup>
const props = defineProps({
  size: { type: String, default: "32px" },
  margin: { type: String, default: "10px 0" },
  height: { type: String, default: "100px" },
});
</script>

<template>
  <div class="sp-loader" :style.margin="margin" :style.height="height">
    <div class="sp-dual-ring"></div>
  </div>
</template>

<style scoped>
.sp-loader {
  @apply w-full text-center flex justify-center items-center pb-[25px] grid-cols-[1/-1];
  /* width: 100%;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center; */
  /* margin: v-bind(margin); */
  /* padding-bottom: 25px; */
  /* grid-column: 1 / -1; */
  /* height: v-bind(height); */
}

.sp-dual-ring {
  @apply inline-block 
  after:block 
  after:w-[32px] 
  after:h-[32px] 
  after:rounded-full 
  after:border-4
  after:border-solid
  after:border-y-primary
  after:border-l-transparent
  after:border-r-primary
  after:animate-spin;
  /* display: inline-block; */
}
</style>
