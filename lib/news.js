import axios from "axios-base";

export const getNews = async (query) => {
  await axios
    .get("news?" + query)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      return error.status;
    });
};
