<!-- eslint-disable no-undef -->
<template>
  <form @submit.prevent="onSubmit">
    <div class="row mt-8">
      <div class="bg-white rounded-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="total" class="flex items-end">
              <div class="w-10 text-right leading-10 mr-4 pb-1">
                <span
                  class="inline-block px-1 text-dark border border-dark text-sm font-bold rounded"
                  >USD
                </span>
              </div>

              <div class="flex flex-col border-b border-gray-100 pb-1">
                <span class="font-semebold text">Total</span>
                <input
                  type="text"
                  id="total"
                  class="text-4xl text-dark w-full mt-1 outline-none"
                  placeholder="0"
                  v-model="total"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="category" class="flex items-center">
              <div
                class="flex items-center flex-none w-10 text-right leading-10 mr-4"
              >
                <span
                  class="inline-block ml-auto w-8 h-8 rounded-full bg-blue-300"
                ></span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  type="text"
                  id="category"
                  class="text-xl text-dark w-full outline-none"
                  placeholder="Select a category"
                  v-model="category"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="note" class="flex items-center">
              <div
                class="flex items-center flex-none w-10 text-right leading-10 mr-4"
              >
                <span class="flex-none w-10">
                  <font-awesome-icon icon="notes-medical" class="text-2xl" />
                </span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  type="text"
                  id="none"
                  class="text-dark w-full outline-none"
                  placeholder="Note"
                  v-model="note"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="time" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <font-awesome-icon icon="calendar" class="text-2xl" />
                </span>
              </div>
              <div class="flex-1 py-2 border-b border-gray-100">
                <div class="text-dark w-full">{{ new Date() }}</div>
              </div>
            </label>
          </div>
          <div class="row">
            <label for="wallet" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <font-awesome-icon icon="wallet" class="text-2xl" />
                </span>
              </div>
              <div class="flex-1 py-2">
                <div class="text-dark w-full">My Wallet</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-8" v-if="!isMoreDetails">
      <button
        @click="isMoreDetails = true"
        class="bg-white rounded-lg py-3 w-full text-primary font-semibold"
      >
        More Details
      </button>
    </div>
    <template v-if="isMoreDetails">
      <!-- start: advanform -->
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="location" class="flex items-center">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end text-dark">
                    <font-awesome-icon icon="location-dot" class="text-2xl" />
                  </span>
                </div>
                <div class="flex-1 py-2 border-b border-gray-100">
                  <input
                    type="text"
                    id="location"
                    class="text-xl text-dark w-full outline-none"
                    placeholder="Select a location"
                  />
                </div>
              </label>
            </div>
            <div class="row">
              <label for="withPersion" class="flex items-center">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end text-dark">
                    <font-awesome-icon icon="users" class="text-2xl" />
                  </span>
                </div>
                <div class="flex-1 py-2 border-b border-gray-100">
                  <input
                    type="text"
                    id="withPersion"
                    class="text-xl text-dark w-full outline-none"
                    placeholder="Select a withPersion"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <!-- start  upload image-->
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="file" class="flex items-center text-primary">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end">
                    <font-awesome-icon icon="camera" class="text-2xl" />
                  </span>
                </div>
                <div class="flex-1 py-2 border-b border-gray-100">
                  <div class="w-full font-semibold">Upload photo</div>
                  <input
                    type="file"
                    name=""
                    id="file"
                    class="w-0 h-0 overflow-hidden absolute"
                    @change="onChangeFile"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="text-red mt-3">{{ errorFile }}</div>
      </div>
    </template>
    <button type="submit" class="bg-blue-400 text-white">
      test transaction
    </button>
  </form>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useCollection } from "@/composables/useCollection";
export default {
  setup() {
    const store = useStore();
    const isMoreDetails = ref(false);
    const user = computed(() => store.state.user);
    const { error, addRecord } = useCollection();

    const total = ref(0);
    const category = ref("");
    const note = ref("");
    const time = ref(new Date());
    const file = ref(null);
    const errorFile = ref(null);
    function onChangeFile(event) {
      console.log(event);
      const selected = event.target.files[0];
      // const typesFile = ["image/png, image/jpeg, image/jpg"];
      console.log(selected);
      if (selected) {
        file.value = selected;
        console.log(file.value);
      } else {
        file.value = null;
        errorFile.value = "Vui long chonj file co type jpg, jpeg, png";
        console.log(errorFile.value);
      }
    }
    async function onSubmit() {
      const transaction = {
        total: total.value,
        category: category.value,
        note: note.value,
        time: time.value,
        userId: user.value._id,
      };
      const formData = new FormData();
      Object.keys(transaction).forEach((key) =>
        formData.append(key, transaction[key])
      );

      formData.append("image", file.value);
      await addRecord(formData);
      console.log("error: ", error);
      console.log("create: ");
    }
    return {
      onSubmit,
      onChangeFile,
      isMoreDetails,
      total,
      category,
      note,
      time,
      errorFile,
    };
  },
};
</script>
