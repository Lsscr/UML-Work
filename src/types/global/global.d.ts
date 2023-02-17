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

