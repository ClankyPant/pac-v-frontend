import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ClassConstructor, plainToClass } from "class-transformer";

export default abstract class BaseService {
  private axios: AxiosInstance;

  constructor() {
    this.axios = Axios.create();
  }

  async get<T>(
    cls: ClassConstructor<T>,
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T | T[]> {
    const response = await BaseService.runRequest(this.axios.get(url, config));
    return plainToClass(cls, response);
  }

  async post<T>(
    cls: ClassConstructor<T>,
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await BaseService.runRequest(
      this.axios.post(url, data, config)
    );
    return plainToClass(cls, response);
  }

  static async runRequest<T>(request: Promise<AxiosResponse<T>>): Promise<T> {
    const response = await request;
    return response.data;
  }
}
