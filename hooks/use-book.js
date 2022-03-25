import useSWR from "swr";

export const useBook = () => {
  const { data, error } = useSWR(
    `http://localhost:8000/api/v1/books?active=true&limit=8`
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
