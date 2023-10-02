<script setup lang="ts">
import { ref } from "vue";
import { useAssets } from "../../../composables/useAssets";

interface NavItem {
  title?: string;
  link: string;
  image?: string;
}

interface NavGroup {
  title: string;
  links: NavItem[];
}

const { getAsset } = useAssets();

const navigation = ref<NavGroup[]>([
  {
    title: "About",
    links: [
      { title: "About Us", link: "about-us" },
      { title: "Find store", link: "find-store" },
      { title: "Categories", link: "categories" },
      { title: "Blogs", link: "blogs" },
    ],
  },
  {
    title: "Partnership",
    links: [
      { title: "About Us", link: "about-us" },
      { title: "Find store", link: "find-store" },
      { title: "Categories", link: "categories" },
      { title: "Blogs", link: "blogs" },
    ],
  },
  {
    title: "Information",
    links: [
      { title: "Help Center", link: "help-center" },
      { title: "Find store", link: "find-store" },
      { title: "Money Refund", link: "money-refund" },
      { title: "Shipping", link: "shipping" },
      { title: "Contact us", link: "contact-us" },
    ],
  },
  {
    title: "For users",
    links: [
      { title: "Login", link: "login" },
      { title: "Register", link: "register" },
      { title: "Settings", link: "settings" },
      { title: "My Orders", link: "my-orders" },
    ],
  },
  {
    title: "Get app",
    links: [
      { image: getAsset("images/store/appstore.svg"), link: "appstore" },
      { image: getAsset("images/store/playstore.svg"), link: "playstore" },
    ],
  },
]);
</script>

<template>
  <footer class="flex flex-col">
    <div class="bg-white border-b-[1px] border-gray-300">
      <div class="flex gap-[61px] container mx-auto px-3 pt-10 pb-[59px]">
        <div class="flex flex-col items-start gap-[15px] w-[276px]">
          <img src="../../../assets/images/brand/logo-colored.svg" alt="" />

          <p>
            Best information about the company gies here but now lorem ipsum is
          </p>

          <div class="flex items-center gap-[10px]">
            <a href="#" class="">
              <img src="../../../assets/images/social/facebook.svg" alt="" />
            </a>
            <a href="#" class="">
              <img src="../../../assets/images/social/twitter.svg" alt="" />
            </a>
            <a href="#" class="">
              <img src="../../../assets/images/social/linkedin.svg" alt="" />
            </a>
            <a href="#" class="">
              <img src="../../../assets/images/social/instagram.svg" alt="" />
            </a>
            <a href="#" class="">
              <img src="../../../assets/images/social/youtube.svg" alt="" />
            </a>
          </div>
        </div>

        <div
          class="flex-auto grid grid-cols-3 lg:grid-cols-5 justify-between gap-y-4"
        >
          <div
            v-for="item of navigation"
            :key="`gr${item.title}`"
            class="flex flex-col"
          >
            <h3 class="font-medium leading-[22px] mb-[10px]">
              {{ item.title }}
            </h3>

            <template
              v-for="link of item.links"
              :key="`link${item.title}${link.link}`"
            >
              <a
                :href="link.link"
                v-if="link.title"
                class="text-gray-500 mb-[3px] last:mb-0"
              >
                <span>{{ link.title }}</span>
              </a>

              <a :href="link.link" v-else class="mt-2 first-of-type:mt-[5px]">
                <img :src="link.image" alt="" />
              </a>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-200">
      <div class="flex items-center justify-between container h-[68px] mx-auto px-3">
        <span class="text-gray-600">© 2023 Ecommerce.</span>

        <button class="flex items-center">
          <img
            src="../../../assets/images/flags/us.png"
            alt=""
            class="w-6 h-[17px]"
          />
          <span class="text-600 ml-[6px]">English</span>
          <i class="material-icons">expand_less</i>
        </button>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss"></style>
