import useSWR from "swr";

export const useStatistics = () => {
  const { data, error } = useSWR(
    "http://naog-admin.lvg.mn/rest/api/v1/statistics/active"
  );
  let activeStatistic = {};
  if (data) {
    activeStatistic = data.data;
  }
  return {
    activeStatistic,
    isLoading: !error && !data,
    error,
  };
};

export const useSubStatistics = (id) => {
  const { data, error } = useSWR(
    `http://naog-admin.lvg.mn/rest/api/v1/statisticssub?main=${id}&limit=3`
  );
  let subStatistics = {};
  if (data) {
    subStatistics = data.data;
  }
  return {
    subStatistics,
    isLoading: !error && !data,
    error,
  };
};