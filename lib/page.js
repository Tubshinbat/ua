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

export const getPage = async (id) => {
  let page = {};
  let error = null;
  await axios
    .get("pages/menu/" + id)
    .then((res) => {
      page = res.data.data;
    })
    .catch((error) => {
      error = error.status;
    });

  return { page, error };
};

export const getFooterPage = async (id) => {
  let page = {};
  let error = null;
  await axios
    .get("pages/footermenu/" + id)
    .then((res) => {
      page = res.data.data;
    })
    .catch((error) => {
      error = error.status;
    });

  return { page, error };
};
