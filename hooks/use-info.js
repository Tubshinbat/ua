import useSWR from "swr";

export const useInfo = () => {
  const { data, error } = useSWR(`http://localhost:8000/api/v1/webinfo`);

  let info = {};
  if (data) {
    info = data.data;
  }

  return {
    info,
    isLoading: !error && !data,
    error,
  };
};
