/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosResponse } from "axios";
import { DefaultResponse } from "./data/default-response.interface";
import { debug } from "./config";

export interface ApiResponse<T> extends AxiosResponse {
  data: DefaultResponse<T>;
}

export class RequestError<T> extends Error {
  response: T;

  constructor(msg: string, response: T) {
    super(msg);
    this.response = response;
  }
}

export class ApiErrorResponse extends Error {
  response: object;

  constructor(msg: string, response: object) {
    super(msg);
    this.response = response;
  }
}

interface RequestOptions {
  skipAuthToken?: boolean;
  contentType?: string;
  onUploadProgress?: (event: ProgressEvent) => void;
}

function checkResponse<T>(response: AxiosResponse<DefaultResponse<T>>) {
  debug(
    `[${response.status} OK] ${new Date().toLocaleString()} ${
      response.config.url
    }`,
    response.data
  );
  return response.data.data;
}

function handleErrors<T>(error: AxiosError<DefaultResponse<T>>): void {
  debug(
    `[${error.response?.status} ERROR] ${new Date().toLocaleString()} ${
      error.response?.data?.error?.detail
    }`,
    error.response?.data
  );

  if (error.response?.status === 401) {
    window.location.replace("/login");
    throw new RequestError(
      "Sua sessão expirou, por favor faça login novamente",
      error.response?.data.data
    );
  }

  throw new RequestError(
    error.response?.data?.error?.detail ?? "An error occurred",
    error.response?.data.data
  );
}

export async function request<T>(
  request: any,
  options?: RequestOptions
): Promise<T> {
  let { params } = request;
  if (!params) params = {};

  // headers
  const headers: any = {
    "Content-Type": options?.contentType ?? "application/json",
  };

  return (await axios({
    ...request,
    url: `${request.url}`,
    params,
    headers,
    onUploadProgress: options?.onUploadProgress,
    withCredentials: true,
  })
    .then(checkResponse<T>)
    .catch(handleErrors<T>)) as T;
}

export function post<T>(
  url: string,
  data?: any,
  options?: RequestOptions
): Promise<T> {
  return request<T>(
    {
      method: "post",
      url: url,
      data,
    },
    options
  );
}

export function put<T>(
  url: string,
  data?: any,
  options?: RequestOptions
): Promise<T> {
  return request<T>(
    {
      method: "put",
      url: url,
      data,
    },
    options
  );
}

export function patch<T>(
  url: string,
  data?: any,
  options?: RequestOptions
): Promise<T> {
  return request<T>(
    {
      method: "patch",
      url: url,
      data,
    },
    options
  );
}

export function deleteReq<T>(
  url: string,
  options?: RequestOptions
): Promise<T> {
  return request<T>(
    {
      method: "delete",
      url,
    },
    options
  );
}

export function get<T>(url: string, options?: RequestOptions): Promise<T> {
  return request<T>(
    {
      method: "get",
      url,
    },
    options
  );
}
