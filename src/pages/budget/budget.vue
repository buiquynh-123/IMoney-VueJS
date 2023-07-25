<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>budget Page</h1>
  <button @click="showAlert">Hello world</button>
  <button @click="store2.randomizeCounter()">Randomize</button>
</template>

<script>
export default {
  methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal.fire({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        icon: "success",
        title: "nonono",
        text: "Heello success đây",
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        },
      });
    },
  },
};
import useCounterStore, { useCounterStore2 } from "../../store/store2.vue";

const store = useCounterStore();
const store2 = useCounterStore2();
store2.randomizeCounter();

console.log(store);
</script>
