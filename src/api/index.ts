import { userApi } from "./path/user";
import { shoporderApi } from "./path/shoporder";
import { newsApi } from "./path/news";

export const api = {
  ...userApi,
  ...shoporderApi,
  ...newsApi,
};
