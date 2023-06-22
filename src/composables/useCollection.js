import axios from "axios";
import { ref } from "vue";
const error = ref(null);

async function addRecord(record) {
  error.value = null;
  try {
    const response = await axios.post(
      "http://localhost:8080/api/transactions",
      record
    );
    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
}
export function useCollection() {
  return { addRecord };
}
export default useCollection;
