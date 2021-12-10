export default class ResponseRequestModel<T> {
  result: T;
  status: number;
  message: string;

  constructor(result: T, status: number, message: string) {
    this.result = result;
    this.status = status;
    this.message = message;
  }
}
