<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <navigation-header />
  <slot />
  <navigation-buttom v-if="meta.isShowFooter" />
</template>
<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import NavigationButtom from "@/components/NavigationButtom.vue";
import NavigationHeader from "@/components/NavigationHeader.vue";
export default {
  components: { NavigationButtom, NavigationHeader },
  setup() {
    const route = useRoute();
    return {
      meta: computed(() => route.meta),
    };
  },
};
</script>
