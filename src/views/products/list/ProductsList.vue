<script setup lang="ts">
import ProductCard from "../../../components/products/product-card/ProductCard.vue";
</script>

<template>
  <div class="p-3">
    <ProductCard name="Bicicleta" :price="249.99" image="https://images.prismic.io/electricbikecompany/89485c45-00de-4c0e-924c-ae2b164a52cb_model-r-sap.jpg?auto=compress,format"/>

    <ProductCard name="Jabón de tocador" :price="0.55" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXWcPsR39sKimhDxeCBM-Bf00YnWQ1iRZcA&usqp=CAU"/>
  </div>
</template>

<style scoped lang="scss"></style>
