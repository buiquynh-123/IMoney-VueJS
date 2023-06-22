<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h2>Logout...</h2>
</template>
<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    // trong setup sẽ không chạy được async nên phải viết fn nên muốn xử lý bất đồng bộ
    async function onLogout() {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        localStorage.removeItem("user");
        store.commit("logout");
        await router.push({ name: "Login", params: {} });
      }
    }
    onLogout();
    return { onLogout };
  },
};
</script>
