<script setup lang="ts">
import { useProductList } from "../useProductList";
import RadioButton from "../../../../components/shared/radio-button/RadioButton.vue";
import CheckBox from "../../../../components/shared/checkbox/CheckBox.vue";
import CollapsiblePanel from "../../../../components/products/collapsible-panel/CollapsiblePanel.vue";

const { categories, brands, features, conditions, selectedCondition } =
  useProductList();
</script>

<template>
  <div class="flex flex-col w-[230px]">
    <div class="w-full h-[1px] bg-gray-300"></div>
    <CollapsiblePanel title="Category">
      <div class="flex flex-col gap-[17px] mt-[9px]">
        <a v-for="item of categories" :key="item" href="#" class="capitalize">{{
          item
        }}</a>
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
        <!-- <MinMaxSlider /> -->

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
          <img src="../../../../assets/images/rate-bar/rate-bar-5.svg" alt="" />
        </CheckBox>
        <CheckBox name="rating4" field-id="checkbox-rating4">
          <img src="../../../../assets/images/rate-bar/rate-bar-4.svg" alt="" />
        </CheckBox>
        <CheckBox name="rating3" field-id="checkbox-rating3">
          <img src="../../../../assets/images/rate-bar/rate-bar-3.svg" alt="" />
        </CheckBox>
        <CheckBox name="rating2" field-id="checkbox-rating2">
          <img src="../../../../assets/images/rate-bar/rate-bar-2.svg" alt="" />
        </CheckBox>
      </div>
    </CollapsiblePanel>
  </div>
</template>

<style scoped lang="scss"></style>
