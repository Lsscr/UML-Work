import { userApi } from "./path/user";
import { shoporderApi } from "./path/shoporder";
import { newsApi } from "./path/news";
import { comment } from "./path/comment";

export const api = {
  ...userApi,
  ...shoporderApi,
  ...newsApi,
  ...comment
};
