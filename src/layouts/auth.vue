<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <navigate-brand />
  <slot />
</template>
<script>
import NavigationBrand from "@/components/NavigationBrand.vue";
export default {
  component: { NavigationBrand },
};
</script>
