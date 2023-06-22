import { ref } from "vue";
import axios from "axios";

const error = ref(null);
const isPending = ref(false);
const user = ref(null);
async function signin(email, password) {
  error.value = null;
  try {
    const newData = {
      email,
      password,
    };
    const response = await axios.post(
      "http://localhost:8080/api/signin",
      newData
    );

    if (!response) throw new Error("Could not signin.");
    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}
export function useSignin() {
  return { error, isPending, signin, user };
}
