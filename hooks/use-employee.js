import useSWR from "swr";

export const useEmployee = () => {
  const { data, error } = useSWR(
    `https://naog-admin.lvg.mn/rest/api/v1/employees?status=true&limit=20`
  );
  let employees = [];

  if (data) {
    employees = data.data;
  }

  return {
    employees,
    isLoading: !error && !data,
    error,
  };
};
