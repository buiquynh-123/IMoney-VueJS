import { createStore } from "vuex";

const store = createStore({
  state: {
    user: null,
  },
  mutations: {
    login: (state, user) => {
      state.user = user;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
const storedUser = localStorage.getItem("user");
if (storedUser) {
  store.commit("login", JSON.parse(storedUser)); // Cập nhật thông tin người dùng trong Vuex
} else {
  store.commit("logout"); // Xóa giá trị trong Vuex nếu không có user
}

export default store;
