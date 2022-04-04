import useSWR from "swr";
import base from "base";

export const usePage = (slug) => {
  const { data, error } = useSWR(
    `http://localhost:8000/api/v1/pages/slug/${slug}`
  );
  return {
    page: data,
    isLoading: !error && !data,
    error,
  };
};
