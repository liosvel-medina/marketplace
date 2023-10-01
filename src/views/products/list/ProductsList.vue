<script setup lang="ts">
import { useProductList } from "./useProductList";
import ProductCard from "../../../components/products/product-card/ProductCard.vue";
import ProductCardExtended from "../../../components/products/product-card/ProductCardExtended.vue";
import Loader from "../../../components/shared/loader/Loader.vue";
import SearchPanel from "./search-panel/SearchPanel.vue";
import FiltersPanel from "./filters-panel/FiltersPanel.vue";
import ProductTile from "../../../components/products/product-tile/ProductTile.vue";
import Card from "../../../components/shared/card/Card.vue";
import CheckBox from "../../../components/shared/checkbox/CheckBox.vue";
import RadioButton from "../../../components/shared/radio-button/RadioButton.vue";
import CollapsiblePanel from "../../../components/products/collapsible-panel/CollapsiblePanel.vue";
import { useWindowSize } from "../../../composables/useWindowSize";
import MinMaxSlider from "../../../components/shared/min-max-slider/MinMaxSlider.vue";

const {
  products,
  isLoading,
  categories,
  filters,
  toggleFavorite,
  favImage,
  isMobile,
  brands,
  features,
  conditions,
  selectedCondition,
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
      class="relative grid grid-cols-1 lg:grid-cols-[230px_1fr] gap-7 px-3"
      v-else
    >
      <div
        class="flex flex-col w-[230px]"
        v-if="!(screens.xs || screens.sm || screens.md)"
      >
        <div class="w-full h-[1px] bg-gray-300"></div>
        <CollapsiblePanel title="Category">
          <div class="flex flex-col gap-[17px] mt-[9px]">
            <a
              v-for="item of categories"
              :key="item"
              href="#"
              class="capitalize"
              >{{ item }}</a
            >
            <a href="#" class="text-primary">See all</a>
          </div>
        </CollapsiblePanel>

        <div class="w-full h-[1px] bg-gray-300 mt-7"></div>
        <CollapsiblePanel title="Brands">
          <div class="flex flex-col gap-[17px] mt-[9px]">
            <CheckBox
              v-for="item of brands"
              :key="item"
              :name="item"
              :field-id="`checkbox-${item}`"
              :label="item"
            />
            <a href="#" class="text-primary">See all</a>
          </div>
        </CollapsiblePanel>

        <div class="w-full h-[1px] bg-gray-300 mt-7"></div>
        <CollapsiblePanel title="Features">
          <div class="flex flex-col gap-[17px] mt-[9px]">
            <CheckBox
              v-for="item of features"
              :key="item"
              :name="item"
              :field-id="`checkbox-${item}`"
              :label="item"
            />
            <a href="#" class="text-primary">See all</a>
          </div>
        </CollapsiblePanel>

        <div class="w-full h-[1px] bg-gray-300 mt-7"></div>
        <CollapsiblePanel title="Price range">
          <div class="flex flex-col mt-[9px]">
            <MinMaxSlider />

            <div class="grid grid-cols-2 gap-[9px]">
              <label class="flex flex-col gap-[5px]">
                <span>Min</span>

                <input
                  type="number"
                  placeholder="0"
                  class="h-10 bg-white border-[1px] border-gray-300 rounded-md px-[10px] outline-none"
                  min="0"
                  max="999999"
                />
              </label>

              <label class="flex flex-col gap-[5px]">
                <span>Max</span>

                <input
                  type="number"
                  placeholder="999999"
                  min="0"
                  max="999999"
                  class="h-10 bg-white border-[1px] border-gray-300 rounded-md px-[10px] outline-none"
                />
              </label>
            </div>

            <button
              class="h-10 mt-2 bg-white border-[1px] border-gray-300 rounded-md text-primary font-medium custom-shadow"
            >
              Apply
            </button>
          </div>
        </CollapsiblePanel>

        <div class="w-full h-[1px] bg-gray-300 mt-7"></div>
        <CollapsiblePanel title="Condition">
          <div class="flex flex-col gap-[17px] mt-[9px]">
            <RadioButton
              v-for="item of conditions"
              :key="item"
              :field-id="`radiobutton-${item}`"
              :label="item"
              :value="item"
              v-model="selectedCondition"
            />
            <a href="#" class="text-primary">See all</a>
          </div>
        </CollapsiblePanel>

        <div class="w-full h-[1px] bg-gray-300 mt-7"></div>
        <CollapsiblePanel title="Ratings">
          <div class="flex flex-col gap-[17px] mt-[9px]">
            <CheckBox name="rating5" field-id="checkbox-rating5">
              <img
                src="../../../assets/images/rate-bar/rate-bar-5.svg"
                alt=""
              />
            </CheckBox>
            <CheckBox name="rating4" field-id="checkbox-rating4">
              <img
                src="../../../assets/images/rate-bar/rate-bar-4.svg"
                alt=""
              />
            </CheckBox>
            <CheckBox name="rating3" field-id="checkbox-rating3">
              <img
                src="../../../assets/images/rate-bar/rate-bar-3.svg"
                alt=""
              />
            </CheckBox>
            <CheckBox name="rating2" field-id="checkbox-rating2">
              <img
                src="../../../assets/images/rate-bar/rate-bar-2.svg"
                alt=""
              />
            </CheckBox>
          </div>
        </CollapsiblePanel>
      </div>

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
