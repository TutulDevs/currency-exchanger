import axios from "axios";

const instance = axios.create({
  baseURL: String(process.env.NEXT_PUBLIC_API_BASE_URL),
  // headers: {
  //   Authorization: `Token ${String(process.env.NEXT_PUBLIC_API_APP_ID)}`,
  //   "Content-Type": "application/json",
  //   timeout: 1000,
  // },
});

export default instance;
