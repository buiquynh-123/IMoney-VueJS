<!-- eslint-disable vue/require-component-is -->
<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import axios from "axios";
import { onMounted, computed } from "vue";
import { PUBLIC_LAYOUT } from "@/constants";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    onMounted(async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/transactions"
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    });
    return {
      layout: computed(() => route.meta?.layout || PUBLIC_LAYOUT + "-layout"),
    };
  },
};
</script>
