<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 right-0 bg-white pt-4 p-b-safe-4"
  >
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-between h-full item-center">
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link :to="{ name: navItem.name, params: {} }">
            <font-awesome-icon :icon="navItem.icon" class="text-2xl" />
          </router-link>
        </li>
      </ul>
    </div>
    <div
      data-circle
      class="absolute top-0 left-1/2 transform -translate-x-1/2"
    ></div>
    <div
      data-circle-inset
      @click="goToRoute"
      class="absolute flex items-center justify-center ng-primary text-white w-12 h-12 bg-primary rounded-full cursor-pointer -top-6 left-1/2 transform -translate-x-1/2"
    >
      <font-awesome-icon icon="plus" class="text-2xl" />
    </div>
  </footer>
</template>
<script>
import { reactive } from "vue";
import { NAV_BUTTOM_ITEMS } from "@/constants/index";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const navItems = reactive(NAV_BUTTOM_ITEMS);
    function goToRoute() {
      router.push({ name: "NewTransaction", params: {} });
    }
    return { navItems, goToRoute };
  },
};
</script>

<style lang="css" scoped>
footer#footer > div[data-circle] {
  @apply bg-dark-light;
  width: 60px;
  height: 30px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
}

footer#footer ul li:nth-child(2) {
  margin-right: 10%;
}
footer#footer ul li:nth-child(3) {
  margin-left: 10%;
}
</style>
