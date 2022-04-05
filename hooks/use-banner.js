import useSWR from "swr";

export const useBanners = () => {
  const { data, error } = useSWR(
    `http://naog-admin.lvg.mn/rest/api/v1/banners?status=true`
  );

  let banners = [];
  if (data) {
    banners = data.data;
  }

  return {
    banners,
    isLoading: !error && !data,
    error,
  };
};
