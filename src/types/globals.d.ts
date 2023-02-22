// axios-type
type Fn = (data: FcResponse<any>) => unknown;

interface IAnyObj {
  [index: string]: unknown;
}

interface FcResponse<T> {
  code: number;
  errno: string;
  errmsg: string;
  msg: AppContext;
  data: T;
}

type ApiResponse<T> = Promise<[any, FcResponse<T> | undefined]>;

// news-Type
export type UserInfo = {
  createTime: string;
  createUser: string;
  id: string | nunmber;
  password: string;
  phone: string;
  position: string;
  sex: string;
  status: number;
  updateTime: string;
  updateUser: string;
  username: string;
};

export type NewsResType = {
  countId: "";
  current: 1;
  hitCount: false;
  maxLimit: null;
  optimizeCountSql: true;
  orders: [];
  pages: 1;
  records: [];
};

export type NewsItemType = {
  classifyId?: string;
  code?: string;
  createTime?: string;
  createUser?: number;
  description?: string;
  id?: string;
  image?: string;
  sort?: number;
  status?: number;
  title?: string;
  updateTime?: string;
  updateUser?: number;
};

export type NewsCategoryData = {
  createTime: string;
  createUser: number;
  id: string;
  name: string;
  sort: number;
  type: string;
  updateTime: string;
  updateUser: number;
};
