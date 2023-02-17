import { Post } from "../server";

function userLogin<T extends { id: string; name: string }>({
  username = "",
  password = "",
}): ApiResponse<T> {
  return Post<T>("api/user/login", { username, password });
}

export const userApi = {
  userLogin,
};
