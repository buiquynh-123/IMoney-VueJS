/* eslint-disable no-undef */
import { ref } from "vue";
import axios from "axios";
const error = ref(null);
const isPending = ref(false);
async function signup(name, email, password, confirmPassword) {
  // tại sao phải reset lại error vì error được truy cập ở nhiều nơi nếu như mà không rết lại thì khi mà truy cập error ở một composable khác thì nó vẫn lưu lại dữ liệu cũ
  error.value = null;
  //   khi mà requied thì pending phải là true còn kết thúc requied thì phải về false
  isPending.value = true;
  try {
    const newData = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    const response = await axios.post(
      "http://localhost:8080/api/signup",
      newData
    );
    console.log("response: ", response);
    if (!response) throw new Error("Could not create a new user.");
    return response;
  } catch (err) {
    error.value = err.message;
    console.error(error.value);
  } finally {
    isPending.value = false;
  }
  //   finally là một blog để thực hiện ở trong try catch finally này dù là try hay là catch thì cuối cùng nó vẫn được thực hiện
  //   phần sử lý reset
}
// ref dùng để reactive dữ liệu theo dạng
export function useSignup() {
  return { error, isPending, signup };
}
