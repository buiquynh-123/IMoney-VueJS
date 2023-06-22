<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label for="fullName" class="flex flex-col">
            <span class="font-semibold">Full Name</span>
            <input
              id="name"
              type="text"
              class="px-4 py-3 border rounded-lg border-gray-100 mt-1"
              placeholder="iMoney..."
              v-model="name"
            />
          </label>
        </div>
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
          <label for="confirmpassword" class="flex flex-col">
            <span class="font-semibold">Confirm Password</span>
            <input
              id="confirmpassword"
              type="password"
              class="px-4 py-3 border rounded-lg border-gray-100 mt-1"
              placeholder="password..."
              autocomplete="current-password"
              v-model="confirmPassword"
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
      <!-- Start: direaction -->
      <div v-if="error" class="text-left text-red mt-4">
        <span>{{ error }}</span>
      </div>

      <div class="w-full text-center mt-4">
        <span class="font-semibold">I'm already a member.</span>
        <span class="">
          <router-link :to="{ name: 'Login', params: {} }" class="text-primary"
            >Sign in</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useSignup } from "@/composables/useSignup";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { error, isPending, signup } = useSignup();
    const router = useRouter();
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    async function onSubmit() {
      // email là ref nên nó được wrap bởi một object reactive, nên là ko có value thì nó sẽ hiểu là truyeemf vào một object
      await signup(
        name.value,
        email.value,
        password.value,
        confirmPassword.value
      );
      if (!error.value) router.push({ name: "Profile", params: {} });
    }
    return {
      name,
      email,
      password,
      confirmPassword,
      error,
      isPending,
      onSubmit,
    };
  },
};
</script>
