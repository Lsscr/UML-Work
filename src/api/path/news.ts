import { Get } from "../server";

type NewsItemType = {
  countId: "";
  current: 1;
  hitCount: false;
  maxLimit: null;
  optimizeCountSql: true;
  orders: [];
  pages: 1;
  records: [];
};

function getNewsList<T extends NewsItemType>({
  page = 1,
  pageSize = 10,
}): ApiResponse<T> {
  return Get<T>("api/news/list", { page, pageSize });
}

export const newsApi = {
  getNewsList,
};
