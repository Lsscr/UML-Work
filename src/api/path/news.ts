import type {
  ApiResponse,
  NewsCategoryData,
  NewsResType,
} from "@/types/globals";
import { Get, Post } from "../server";

function getNewsList<T extends NewsResType>({
  page = 1,
  pageSize = 10,
}): ApiResponse<T> {
  return Get<T>("news/list", { page, pageSize });
}

function getNewCategoryList<T extends NewsCategoryData>({
  page = 1,
  pageSize = 10,
}): ApiResponse<T> {
  return Get<T>("classify/list", { page, pageSize });
}

function getNewsByCategory<T extends NewsCategoryData>({ classifyId = "" }) {
  return Get<T>("news/group", { classifyId });
}

function getNewsDetails(newsid: string) {
  return Get("news/getNewsByID/" + newsid);
}

function newAdd(obj: Record<string, string | number | Array<unknown> | object>) {
  return Post("news/add", {
    title: obj.title,
    classify_id: obj.classify_id,
    description: obj.description,
    image: obj.image,
    sort: obj.sort,
    news_details: obj.news_details,
  });
}

export const newsApi = {
  getNewsList,
  getNewCategoryList,
  getNewsByCategory,
  getNewsDetails,
  newAdd,
};
