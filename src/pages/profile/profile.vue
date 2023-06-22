<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <!-- start info -->
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="h-24 w-24 rounded-full overflow-hidden mx-auto">
          <img
            class="w-full h-auto object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gSvxmOZdKFThSYawL5nSmtDFOr7kimGnJg&usqp=CAU"
            size="xs"
            alt="User's Profile Avatar"
          />
        </div>
        <div class="font-bold text-2xl text-primary mt-3">{{ user.name }}</div>
        <p class="font-semibold text-gray-400 mt-1">{{ user.email }}</p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-xl text-primary mb-2">General</h3>
        </div>
        <div class="col-span-1">
          <ul>
            <li
              v-for="(profileOption, index) in profileOptions"
              :key="profileOption.name"
            >
              <router-link
                class="flex justify-between items-center py-3"
                :to="profileOption.router"
              >
                <div
                  class="flex items-center text-left"
                  :class="{ 'text-red': index === profileOptions.length - 1 }"
                >
                  <font-awesome-icon
                    :icon="profileOption.icon"
                    class="text-2xl"
                  />
                  <h5 class="font-semibold ml-3">{{ profileOption.name }}</h5>
                </div>
                <div class="text-right">
                  <font-awesome-icon icon="angle-right" class="text-2xl" />
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- start menu -->
</template>
<script>
import { reactive } from "vue";
import { mapState } from "vuex";
import { PROFILE_OPTIONS } from "@/constants/index";

export default {
  computed: {
    ...mapState(["user"]),
  },
  setup() {
    const profileOptions = reactive(PROFILE_OPTIONS);
    return { profileOptions };
  },
};
</script>
