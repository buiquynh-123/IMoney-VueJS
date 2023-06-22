<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">Scheeh</div>
  <div>
    <p>User: {{ user.name }}</p>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
  },
};
</script>
