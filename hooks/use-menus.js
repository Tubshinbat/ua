import useSWR from "swr";
import base from "base";

export const useMenus = () => {
  const { data, error } = useSWR(`http://localhost:8000/api/v1/menu`);
  return {
    menus: data,
    isLoading: !error && !data,
    error,
  };
};
