<script setup lang="ts">
import Card from "../../../../components/shared/card/Card.vue";
import RateBar from "../../../../components/shared/rate-bar/RateBar.vue";
import { Product } from "../../../../api/interfaces";

interface Props {
  product?: Product;
  images?: string[];
  selectedImage?: number;
  favImage: string;
}

defineProps<Props>();
const emit = defineEmits(["selectedImage", "toggleFavorite"]);

const selectImage = (index: number) => {
  console.log("selected image", index);

  emit("selectedImage", index);
};
</script>

<template>
  <Card>
    <div
      class="grid grid-cols-2 lg:grid-cols-[480px_1fr] xl:grid-cols-[380px_1fr_280px] pt-5 pr-[22px] pb-11 pl-[19px] gap-y-7"
    >
      <div class="flex flex-col gap-5">
        <Card>
          <div class="w-full aspect-square p-4">
            <img
              :src="images[selectedImage]"
              alt="preview"
              class="w-full h-full object-contain"
              v-if="images && selectedImage != undefined"
            />
          </div>
        </Card>

        <div class="flex items-center gap-[9px] h-14">
          <button
            v-for="(item, index) of images"
            :key="`imagepreview${index}`"
            class="h-full aspect-square border-gray-300 border-[1px] rounded overflow-hidden p-1"
            :class="{ selected: selectedImage == index }"
            @click="selectImage(index)"
          >
            <img
              :src="item"
              :alt="`thumb-${item}`"
              class="w-full h-full object-contain"
            />
          </button>
        </div>
      </div>

      <div
        class="order-1 xl:order-none col-span-2 xl:col-span-1 flex-auto flex flex-col xl:ml-[22px]"
      >
        <div class="flex items-center text-green gap-[2px]">
          <i class="material-icons">check</i>
          <span>In stock</span>
        </div>

        <h2 class="title-h4 mt-[5px]">{{ product?.title }}</h2>

        <div class="flex items-center mt-[9px]">
          <div class="flex items-center gap-2">
            <RateBar :rate="product?.rating.rate || 0" />
            <span class="text-orange">{{ product?.rating.rate }}</span>
          </div>

          <img src="../../../../assets/dot.svg" class="ml-[10px] mr-3" />

          <div class="flex gap-[6px] items-center">
            <i class="material-icons-outlined text-gray-500 text-xl">message</i>
            <span class="text-gray-500">32 reviews</span>
          </div>

          <img src="../../../../assets/dot.svg" class="ml-2 mr-[7px]" />

          <div class="flex gap-[6px] items-center">
            <i class="material-icons-outlined text-gray-500 text-xl"
              >shopping_basket</i
            >
            <span class="text-gray-500">154 sold</span>
          </div>
        </div>

        <div class="flex bg-[#FFF0DF] pt-4 px-4 pb-3 mt-3">
          <div class="flex flex-col">
            <span class="title-h5 text-red"
              >${{ product?.price.toFixed(2) }}</span
            >
            <span class="text-[13px] text-gray-600">50-100 pcs</span>
          </div>

          <div class="h-full w-px bg-gray-300 ml-[42px] mr-[10px]"></div>

          <div class="flex flex-col">
            <span class="title-h5">$90.00</span>
            <span class="text-[13px] text-gray-600">100-700 pcs</span>
          </div>

          <div class="h-full w-px bg-gray-300 ml-10 mr-[10px]"></div>

          <div class="flex flex-col">
            <span class="title-h5">$78.00</span>
            <span class="text-[13px] text-gray-600">700+ pcs</span>
          </div>
        </div>

        <table class="mt-[21px]">
          <tr class="border-b-[1px] border-gray-300">
            <th class="pb-4 text-left text-gray-500 font-normal pr-[27px]">
              Price:
            </th>
            <td class="pb-4 text-600">Negotiable</td>
          </tr>

          <tr>
            <th class="py-4 text-left text-gray-500 font-normal pr-[27px]">
              Type:
            </th>
            <td class="py-4 text-600">Classic shoes</td>
          </tr>

          <tr>
            <th class="pb-4 text-left text-gray-500 font-normal pr-[27px]">
              Material:
            </th>
            <td class="pb-4 text-600">Plastic material</td>
          </tr>

          <tr class="border-b-[1px] border-gray-300">
            <th class="pb-4 text-left text-gray-500 font-normal pr-[27px]">
              Design:
            </th>
            <td class="pb-4 text-600">Modern nice</td>
          </tr>

          <tr>
            <th class="py-4 text-left text-gray-500 font-normal pr-[27px]">
              Customization:
            </th>
            <td class="py-4 text-600">
              Customized logo and design custom packages
            </td>
          </tr>

          <tr>
            <th class="pb-4 text-left text-gray-500 font-normal pr-[27px]">
              Protection:
            </th>
            <td class="pb-4 text-600">Refund Policy</td>
          </tr>

          <tr class="border-b-[1px] border-gray-300">
            <th class="pb-4 text-left text-gray-500 font-normal pr-[27px]">
              Warranty:
            </th>
            <td class="pb-4 text-600">2 years full warranty</td>
          </tr>
        </table>
      </div>

      <div class="flex flex-col ml-[27px]">
        <Card class="custom-shadow">
          <div class="flex flex-col pt-[19px] px-4 pb-[21px]">
            <div class="flex gap-[11px]">
              <div
                class="flex items-center justify-center w-12 h-12 rounded bg-[#C6F3F1] text-[28px] text-[#4CA7A799] font-semibold"
              >
                <span>R</span>
              </div>

              <div class="flex flex-col">
                <span>Supplier</span>
                <span>Guanjoi Trading LLC</span>
              </div>
            </div>

            <div class="w-full h-[1px] bg-gray-300 mt-5 mb-[13px]"></div>

            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-[17px]">
                <img
                  src="../../../../assets/images/flags/de.png"
                  alt="DE"
                  class="w-[21px] h-[15px]"
                />

                <span class="text-gray-500">Germany, Berlin</span>
              </div>

              <div class="flex items-center gap-[17px]">
                <i class="material-icons-outlined text-xl text-gray-500"
                  >verified_user</i
                >

                <span class="text-gray-500">Verified Seller</span>
              </div>

              <div class="flex items-center gap-[17px]">
                <i class="material-icons-outlined text-xl text-gray-500"
                  >language</i
                >

                <span class="text-gray-500">Worldwide shipping</span>
              </div>
            </div>

            <div class="flex flex-col gap-2 mt-7">
              <button
                class="flex items-center justify-center rounded-md h-10 bg-primary text-white font-medium"
              >
                Send inquiry
              </button>

              <button
                class="flex items-center justify-center rounded-md h-10 bg-white border-[1px] border-gray-300 text-primary font-medium"
              >
                Seller’s profile
              </button>
            </div>
          </div>
        </Card>

        <button
          class="flex items-center justify-center gap-2 rounded-md h-10 bg-white text-primary font-medium mt-4"
          @click="$emit('toggleFavorite')"
        >
          <i class="material-icons">{{ favImage }}</i>
          <span>Save for later</span>
        </button>
      </div>
    </div>
  </Card>
</template>

<style scoped lang="scss">
.selected {
  @apply border-gray-600;
}

.custom-shadow {
  box-shadow: 0px 1px 2px 0px rgba(56, 56, 56, 0.08);
}
</style>
