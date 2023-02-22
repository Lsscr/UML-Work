import type {
  ApiResponse,
  NewsCategoryData,
  NewsResType,
} from "@/types/globals";
import { Get } from "../server";

function getNewsList<T extends NewsResType>({
  page = 1,
  pageSize = 10,
}): ApiResponse<T> {
  return Get<T>("api/news/list", { page, pageSize });
}

function getNewCategoryList<T extends NewsCategoryData>({
  page = 1,
  pageSize = 10,
}): ApiResponse<T> {
  return Get<T>("api/classify/list", { page, pageSize });
}

function getNewsByCategory<T extends NewsCategoryData>({ type = "社会生活" }) {
  return Get<T>("/classify/group", { type });
}

export const newsApi = {
  getNewsList,
  getNewCategoryList,
  getNewsByCategory
};
