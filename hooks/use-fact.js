import useSWR from "swr";

export const useFact = () => {
  const { data, error } = useSWR(
    "http://naog-admin.lvg.mn/rest/api/v1/facts?limit=3"
  );
  let facts = [];
  if (data) {
    facts = data.data;
  }
  return {
    facts,
    isLoading: !error && !data,
    error,
  };
};
