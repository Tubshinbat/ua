import useSWR from "swr";

export const useInfo = () => {
  const { data, error } = useSWR(
    `http://naog-admin.lvg.mn/rest/api/v1/webinfo`
  );

  let info = {};
  if (data) {
    info = data.data.data;
  }

  return {
    info,
    isLoading: !error && !data,
    error,
  };
};
