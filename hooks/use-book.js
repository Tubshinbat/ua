import useSWR from "swr";

export const useBook = () => {
  const { data, error } = useSWR(
    `http://naog-admin.lvg.mn/rest/api/v1/books?active=true&limit=8`
  );
  let books = [];

  if (data) {
    books = data.data;
  }

  return {
    books,
    isLoading: !error && !data,
    error,
  };
};
