import useSWR from "swr";

export const useMenus = () => {
  const { data, error } = useSWR(
    `http://localhost:8000/api/v1/menu?status=true`
  );
  return {
    menus: data,
    isLoading: !error && !data,
    error,
  };
};

export const useTopLinks = () => {
  const { data, error } = useSWR(
    `http://localhost:8000/api/v1/toplinks?status=true&limit=3`
  );

  let topLinks = [];
  if (data) {
    topLinks = data.data;
  }

  return {
    topLinks,
    isLoading: !error && !data,
    error,
  };
};

export const useTopLink = (slug, initData) => {
  const { data, error } = useSWR(
    `http://localhost:8000/api/v1/toplinks/slug/${slug}`,
    {
      initialData: initData,
    }
  );

  let topLink = {};
  if (data) {
    topLink = data.data;
  }

  return {
    data: topLink,
    isLoading: !error && !data,
    error,
  };
};

export const useFastLinks = () => {
  const { data, error } = useSWR(
    `http://localhost:8000/api/v1/fastlinks?active=true&limit=6`
  );

  let fastLinks = [];
  if (data) {
    fastLinks = data.data;
  }

  return {
    fastLinks,
    isLoading: !error && !data,
    error,
  };
};

export const useSocials = () => {
  const { data, error } = useSWR(`http://localhost:8000/api/v1/slinks`);

  let socialLinks = [];
  if (data) {
    socialLinks = data.data;
  }

  return {
    socialLinks,
    isLoading: !error && !data,
    error,
  };
};
