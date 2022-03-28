import axios from "axios";

const instance = axios.create({
  baseURL: "http://naog-admin.lvg.mn/rest/api/v1/",
  // baseURL: "http://localhost:8000/api/v1/",
});

instance.defaults.withCredentials = true;

export default instance;
