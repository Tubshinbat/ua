import useSWR from "swr";
import base from "base";

export const useTopNews = () => {
  const { data, error } = useSWR(
    `https://naog-admin.lvg.mn/rest/api/v1/news?status=true&star=true&limit=6`
  );

  let topNews = [];
  if (data) {
    topNews = data.data;
  }

  return {
    topNews,
    isLoading: !error && !data,
    error,
  };
};

export const useNews = (init, slug) => {
  let news = [];
  const { data, error } = useSWR(
    `https://naog-admin.lvg.mn/rest/api/v1/news?${slug}`
  );

  ("mongoimport -d 'UA' -c 'banners' --type csv --headerline --file /var/www/html/db/uadb/banners.csv");

  if (data) {
    news = data.data;
  }
  return {
    news,
    isLoading: !error && !data,
    error,
  };
};

export const useNewNews = () => {
  const { data, error } = useSWR(
    `https://naog-admin.lvg.mn/rest/api/v1/news?status=true&limit=10`
  );

  let news = [];
  if (data) {
    news = data.data;
  }

  return {
    news,
    isLoading: !error && !data,
    error,
  };
};
