<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label for="email" class="flex flex-col">
            <span class="font-semibold">Email Address</span>
            <input
              id="email"
              type="email"
              class="px-4 py-3 border rounded-lg border-gray-100 mt-1"
              placeholder="example@gmail.com"
              autocomplete="username"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label for="password" class="flex flex-col">
            <span class="font-semibold">Password</span>
            <input
              id="password"
              type="password"
              class="px-4 py-3 border rounded-lg border-gray-100 mt-1"
              placeholder="password..."
              autocomplete="current-password"
              v-model="password"
            />
          </label>
        </div>

        <div class="row">
          <button
            v-if="!isPending"
            type="submit"
            class="bg-primary py-3 text-center w-full text-white font-bold rounded-lg"
          >
            Sign up
          </button>

          <button
            v-else
            class="py-3 text-center w-full bg-gray-800 cursor-not-allowed text-white font-bold rounded-lg"
          >
            Loading...
          </button>
        </div>
      </form>
      <div v-if="error" class="text-left text-red mt-4">
        <span>{{ error }}</span>
      </div>
      <!-- Start: direaction -->
      <div class="w-full text-center mt-4">
        <span class="font-semibold">I'm a new user.</span>
        <span class="">
          <router-link
            :to="{ name: 'Register', params: {} }"
            class="text-primary"
            >Sign up</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useSignin } from "@/composables/useSignin";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const store = useStore();

    const { error, isPending, signin } = useSignin();

    const router = useRouter();
    async function onSubmit() {
      const { data } = await signin(email.value, password.value);
      localStorage.setItem("user", JSON.stringify(data));
      store.commit("login", data);

      if (!error.value) router.push({ name: "Profile", params: {} });
    }
    return { email, password, onSubmit, error, isPending };
  },
};
</script>
