import useSWR from "swr";

export const useBanners = () => {
  const { data, error } = useSWR(
    `http://localhost:8000/api/v1/banners?status=true`
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
