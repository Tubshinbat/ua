import useSWR from "swr";
import base from "base";

export const useMenus = () => {
  const { data, error } = useSWR(
    `http://naog-admin.lvg.mn/rest/api/v1/menu?status=true&sort={position: -1}`
  );

  let menus = [];

  return {
    menus: data,
    isLoading: !error && !data,
    error,
  };
};

export const useFooterMenu = () => {
  const { data, error } = useSWR(
    `http://naog-admin.lvg.mn/rest/api/v1/footermenu?status=true`
  );

  let menus = [];
  if (data) {
    menus = data.data;
  }

  return {
    menus,
    isLoading: !error && !data,
    error,
  };
};
