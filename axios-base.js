import axios from "axios";

const instance = axios.create({
  baseURL: "https://naog-admin.lvg.mn/rest/api/v1/",
});

instance.defaults.withCredentials = true;

export default instance;
