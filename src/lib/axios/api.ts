import axios from "axios";
const BackEndUrl = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8000";

const apiInstance = axios.create({
  baseURL: BackEndUrl,
  timeout: 2000,
});

export default apiInstance;
