import axios from "axios-base";

export const getNews = async (query) => {
  let data = [];
  let error = null;
  await axios
    .get("news?" + query)
    .then((res) => {
      data = res.data.data;
    })
    .catch((err) => {
      error = err.status;
    });

  return { news: data, error };
};

export const getSlug = async (slug) => {
  let news;
  let error = null;
  await axios
    .get(`news/s/${slug}`)
    .then((res) => {
      news = res.data.data;
    })
    .catch((err) => {
      error = err.status;
    });

  return { news, error };
};

export const getNewsMenus = async (query) => {
  let menus = [];
  let error = null;
  await axios
    .get("news-categories?" + query)
    .then((res) => {
      menus = res.data.data;
    })
    .catch((err) => {
      error = err.status;
    });

  return { menus, error };
};
