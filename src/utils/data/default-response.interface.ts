export interface DefaultResponse<T> {
  data: T;
  error: null | ServerResponseError;
  success: boolean;
}

export interface ServerResponseError {
  detail: string;
  innerException: string;
  instance: string;
  title: string;
  traceId: string;
  status: number;
}

export interface ListableResponse<T> {
  list: T;
  count: number;
}
