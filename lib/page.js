import axios from "axios-base";

export const getPages = async (query = null) => {
  const pages = await axios
    .get("pages?" + query)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      return error.status;
    });

  return pages;
};

export const getPage = async (slug) => {
  const page = await axios
    .get("pages/slug/" + slug)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      return error.status;
    });

  return page;
};

export const getMenu = async (slug) => {
  const page = await axios
    .get("menu/slug/" + slug)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      return error.status;
    });

  return page;
};
