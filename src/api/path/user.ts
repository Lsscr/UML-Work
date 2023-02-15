import { Get } from "../server";

function getUserInfo<T extends { id: string; name: string }>(
  id
): ApiResponse<T> {
  return Get<T>("/user/info", { userid: id });
}

export const userApi = {
  getUserInfo,
};
