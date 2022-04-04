import useSWR from "swr";

export const useEmployee = () => {
  const { data, error } = useSWR(
    `http://localhost:8000/api/v1/employees?status=true&limit=20`
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
