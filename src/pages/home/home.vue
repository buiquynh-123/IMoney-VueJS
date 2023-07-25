<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h2 class="text-red-400">Home Page</h2>
  <font-awesome-icon icon="user" />
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useCounterStore } from "../budget/budget.vue";
export default {
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const store = useCounterStore();
    console.log(store);
  },
};
</script>
