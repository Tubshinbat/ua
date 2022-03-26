import useSWR from "swr";

export const usePartners = () => {
  const { data, error } = useSWR(
    `http://naog-admin.lvg.mn/rest/api/v1/partners?active=true&limit=5`
  );
  let partners = [];

  if (data) {
    partners = data.data;
  }

  return {
    partners,
    isLoading: !error && !data,
    error,
  };
};
