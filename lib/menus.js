import axios from "axios-base";

export const getMenus = async () => {
  const { data } = await axios.get("menu");
  return data;
};

export const getPgMenus = async () => {
  const menus = await axios
    .get("menu")
    .then((res) => res.data.data)
    .catch((err) => err.status);
  return menus;
};
