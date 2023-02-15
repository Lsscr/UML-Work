// axios-type
type Fn = (data: FcResponse<any>) => unknown;

interface IAnyObj {
  [index: string]: unknown;
}

interface FcResponse<T> {
  errno: string;
  errmsg: string;
  data: T;
}

type ApiResponse<T> = Promise<[any, FcResponse<T> | undefined]>;
