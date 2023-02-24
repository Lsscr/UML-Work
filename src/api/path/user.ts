import { ApiResponse } from "@/types/globals";
import { Post } from "../server";

function userLogin<T extends { id: string; name: string; username: string }>({
  username = "",
  password = "",
}): ApiResponse<T> {
  return Post<T>("user/login", { username, password });
}

export const userApi = {
  userLogin,
};
