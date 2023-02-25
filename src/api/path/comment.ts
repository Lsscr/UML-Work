import { Get, Post } from "../server";

function getCommentsAllById(id: string) {
  return Get("comment", {
    id,
  });
}

function uploadFileImg(data: any) {
  return Post("common/upload", data);
}

export const comment = {
  getCommentsAllById,
  uploadFileImg,
};
