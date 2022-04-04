import useSWR from "swr";

export const usePartners = () => {
  const { data, error } = useSWR(
    `http://localhost:8000/api/v1/partners?active=true&limit=5`
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
