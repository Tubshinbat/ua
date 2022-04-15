import useSWR from "swr";
import base from "base";

export const usePage = (slug) => {
  const { data, error } = useSWR(
    `https://naog-admin.lvg.mn/rest/api/v1/pages/slug/${slug}`
  );
  return {
    page: data,
    isLoading: !error && !data,
    error,
  };
};
