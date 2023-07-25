<script>
import { defineStore } from "pinia";
const useCounterStore = defineStore("counter", {
  // store có 3 trạng thái : state, getters, actions
  // actions: thường được sử dụng để thực hiện các hành động như call api,
  //  thực hiện tính toán phức tạp, hoặc thực hiện các tác vụ không đồng bộ.

  /**
   * Actions thì không thể thay đổi trạng thái của store một cách trực tiếp thay vào đó,
   * thì nó thực hiện các tác vụ, sau đó dựa trên kết quả của tác vụ, thì có thể gọi đến các mutations để thay đổi trạng thái của store
   *Actions không trả về giá trị
   */

  /**
   * GETTERS
   * Getters là các chức năng trong store dùng để tính toán và trả về giá trị dựa và state hiện tại của store
   * Giá trị của getters không làm thay đổi trực tiếp trạng thái của store,
   * Và không làm ảnh hưởng đến hiệu suất của store
   */

  /**
   * State được dùng để định nghĩa trạng thái của store
   * được định nghĩa bằng một arrow function hàm trả về một đối tượng đại diện cho trạng thái ban đầu của store
   */
  // this là đại diện cho store hiện tại được tạo bằng defineStore
  
  state: () => ({
    count: 0,
  }),
  getters: {
    // automatically infers the return type as a number
    doubleCount(state) {
      return state.count * 2;
    },
    // the return type **must** be explicitly set
    doublePlusOne() {
      // autocompletion and typings for the whole store ✨
      return this.doubleCount + 1;
    },
  },
});
export const useCounterStore2 = defineStore("counter2", {
  state: () => ({
    count: 1,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    increment() {
      this.count++;
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random());
    },
  },
});
export default useCounterStore;
</script>
