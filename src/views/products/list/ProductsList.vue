<script setup lang="ts">
import { useProductList } from "./useProductList";
import ProductCard from "../../../components/products/product-card/ProductCard.vue";
import ProductCardExtended from "../../../components/products/product-card/ProductCardExtended.vue";
import Loader from "../../../components/shared/loader/Loader.vue";
import SearchPanel from "./search-panel/SearchPanel.vue";
import FiltersPanel from "./filters-panel/FiltersPanel.vue";
import ProductTile from "../../../components/products/product-tile/ProductTile.vue";

import { useWindowSize } from "../../../composables/useWindowSize";

const { products, isLoading, categories, filters, toggleFavorite, favImage } =
  useProductList();

const { screens } = useWindowSize();
</script>

<template>
  <SearchPanel :categories="categories" />

  <FiltersPanel :filters="filters" />

  <div class="relative flex flex-col p-3">
    <Loader
      class="fixed left-1/2 translate-x-[-50%]"
      :elevated="true"
      v-if="isLoading"
    />

    <div class="flex flex-col gap-3" v-if="screens.xs || screens.sm">
      <ProductCard
        :id="item.product.id"
        :name="item.product.title"
        :price="item.product.price"
        :image="item.product.image"
        :rating="item.product.rating.rate"
        :count="item.product.rating.count"
        v-for="item of products"
        :key="item.product.id"
      />
    </div>

    <div class="flex flex-col gap-3" v-else>
      <ProductCardExtended
        v-for="item of products"
        :key="item.product.id"
        :id="item.product.id"
        :name="item.product.title"
        :price="item.product.price"
        :image="item.product.image"
        :rating="item.product.rating.rate"
        :count="item.product.rating.count"
        :description="item.product.description"
        :fav-image="favImage(item.product.id)"
        @toggle-favorite="toggleFavorite(item.product.id)"
      />
    </div>

    <h2 class="title-h5 mt-[10px]">You may also like</h2>

    <div class="-mx-3 my-[10px] overflow-auto no-scrollbar">
      <div class="flex gap-2 px-3 w-fit">
        <ProductTile
          :id="item.product.id"
          :name="item.product.title"
          :image="item.product.image"
          :price="item.product.price"
          v-for="item of products"
          :key="item.product.id"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
