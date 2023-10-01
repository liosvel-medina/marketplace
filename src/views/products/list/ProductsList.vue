<script setup lang="ts">
import { useProductList } from "./useProductList";
import ProductCard from "../../../components/products/product-card/ProductCard.vue";
import ProductCardExtended from "../../../components/products/product-card/ProductCardExtended.vue";
import Loader from "../../../components/shared/loader/Loader.vue";
import SearchPanel from "./search-panel/SearchPanel.vue";
import FiltersPanel from "./filters-panel/FiltersPanel.vue";
import SidePanel from "./side-panel/SidePanel.vue";
import ProductTile from "../../../components/products/product-tile/ProductTile.vue";
import Card from "../../../components/shared/card/Card.vue";
import CheckBox from "../../../components/shared/checkbox/CheckBox.vue";
import { useWindowSize } from "../../../composables/useWindowSize";
// import MinMaxSlider from "../../../components/shared/min-max-slider/MinMaxSlider.vue";
import Pagination from "../../../components/shared/pagination/Pagination.vue";

const {
  products,
  isLoading,
  categories,
  filters,
  toggleFavorite,
  favImage,
  isMobile,
} = useProductList();

const { screens } = useWindowSize();
</script>

<template>
  <SearchPanel :categories="categories" v-if="isMobile" />

  <FiltersPanel :filters="filters" v-if="isMobile" />

  <div class="relative flex flex-col">
    <Loader
      class="fixed left-1/2 translate-x-[-50%]"
      :elevated="true"
      v-if="isLoading"
    />

    <div class="flex flex-col gap-3 p-3" v-if="isMobile">
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

    <div
      class="relative grid grid-cols-1 lg:grid-cols-[230px_1fr] gap-7 px-3 pb-[43px]"
      v-else
    >
      <SidePanel v-if="!(screens.xs || screens.sm || screens.md)" />

      <div class="flex-auto flex flex-col">
        <Card>
          <div class="flex items-center w-full h-[62px] pl-[19px] pr-[10px]">
            <div>
              12,911 items in <b class="font-semibold">Mobile accessory</b>
            </div>

            <div class="flex-auto"></div>

            <CheckBox
              field-id="verified-checkbox"
              name="verified"
              label="Verified only"
            />

            <select
              class="w-[172px] h-10 pl-[10px] pr-10 bg-[url('/src/assets/images/icons/ic_caret_down.svg')] bg-no-repeat bg-[calc(100%-8px)_center] outline-none appearance-none cursor-pointer border-gray-300 border-[1px] rounded-md ml-4"
            >
              <option value="">Featured</option>
            </select>

            <div
              class="flex h-10 ml-[10px] rounded-md border-[1px] border-gray-300 text-xl overflow-hidden"
            >
              <button
                class="flex items-center justify-center h-full w-[38px] border-r-[1px] border-r-gray-300"
              >
                <img
                  src="../../../assets/images/icons/ic_gridview.svg"
                  alt=""
                  class="w-7"
                />
              </button>

              <button
                class="flex items-center justify-center h-full w-[38px] border-l-[1px] border-l-gray-300 bg-gray-200"
              >
                <img
                  src="../../../assets/images/icons/ic_listview.svg"
                  alt=""
                  class="w-7"
                />
              </button>
            </div>
          </div>
        </Card>

        <div class="flex flex-col gap-3 mt-5">
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

        <div class="flex justify-end mt-[30px]">
          <Pagination :pages="3" />
        </div>
      </div>
    </div>

    <template v-if="isMobile">
      <h2 class="title-h5 mt-[10px] px-3">You may also like</h2>

      <div class="my-[10px] overflow-auto no-scrollbar">
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
    </template>
  </div>
</template>

<style scoped lang="scss">
.custom-shadow {
  box-shadow: 0px 1px 2px 0px rgba(56, 56, 56, 0.08);
}
</style>
