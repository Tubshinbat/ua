import useSWR from "swr";
import base from "base";

export const useTopMedia = () => {
  const { data, error } = useSWR(
    `https://naog-admin.lvg.mn/rest/api/v1/media?status=true&limit=6`
  );

  let topMedia = [];
  if (data) {
    topMedia = data.data;
  }

  return {
    topMedia,
    isLoading: !error && !data,
    error,
  };
};

export const useMedia = (init, slug) => {
  let media = [];
  const { data, error } = useSWR(
    `https://naog-admin.lvg.mn/rest/api/v1/media?${slug}`
  );

  if (data) {
    media = data.data;
  }
  return {
    media,
    isLoading: !error && !data,
    error,
  };
};

export const useNewMedia = () => {
  const { data, error } = useSWR(
    `https://naog-admin.lvg.mn/rest/api/v1/media?status=true&limit=10`
  );

  let media = [];
  if (data) {
    media = data.data;
  }

  return {
    media,
    isLoading: !error && !data,
    error,
  };
};
