<script setup lang="ts">
import Card from "../../../../components/shared/card/Card.vue";
import TabView from "../../../../components/shared/tab-view/TabView.vue";
import { ref } from "vue";

const tabs = ref(["Description", "Reviews", "Shipping", "About seller"]);
const selectedTabIndex = ref(0);
</script>

<template>
  <Card>
    <div class="flex flex-col">
      <TabView
        :tabs="tabs"
        :selected-tab-index="selectedTabIndex"
        @selected-tab="(index:number)=>{selectedTabIndex=index}"
      />

      <div class="flex flex-col pt-[18px] px-5 pb-[29px] text-gray-600">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, Quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

        <table class="info-table">
          <tr>
            <th>Model</th>
            <td>#8786867</td>
          </tr>
          <tr>
            <th>Style</th>
            <td>Classic style</td>
          </tr>
          <tr>
            <th>Certificate</th>
            <td>ISO-898921212</td>
          </tr>
          <tr>
            <th>Size</th>
            <td>34mm x 450mm x 19mm</td>
          </tr>
          <tr>
            <th>Memory</th>
            <td>36GB RAM</td>
          </tr>
        </table>

        <div class="flex flex-col gap-[10px] mt-[26px]">
          <div class="flex items-center gap-[7px]">
            <i class="material-icons text-xl text-gray-500">check</i>
            <span>Some great feature name here</span>
          </div>
          <div class="flex items-center gap-[7px]">
            <i class="material-icons text-xl text-gray-500">check</i>
            <span>Lorem ipsum dolor sit amet, consectetur</span>
          </div>
          <div class="flex items-center gap-[7px]">
            <i class="material-icons text-xl text-gray-500">check</i>
            <span>Duis aute irure dolor in reprehenderit</span>
          </div>
          <div class="flex items-center gap-[7px]">
            <i class="material-icons text-xl text-gray-500">check</i>
            <span>Duis aute irure dolor in reprehenderit</span>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<style scoped lang="scss">
.info-table {
  @apply w-fit mt-6;
  th {
    @apply py-[10px] pl-[10px] pr-[114px] bg-gray-200 text-left font-normal border-l-[1px] border-t-[1px] border-[#E0E7E9];
  }

  td {
    @apply py-[10px] pl-[10px] pr-[170px] bg-white border-x-[1px] border-t-[1px] border-[#E0E7E9];
  }

  tr {
    &:last-child {
      td,
      th {
        @apply border-b-[1px];
      }
    }
  }
}
</style>
