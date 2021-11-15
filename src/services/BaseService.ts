import envConfig from "dotenv";
import Axios from "axios";

export default class BaseService {
  public host = "";

  constructor() {
    envConfig.config();
    this.host = process.env.HOST_SERVICE?.toString() || "";
  }

  public async getToken(): Promise<string> {
    const retorno = await this.doPost("/login", {
      login: "camila",
      password: "112",
    });
    return retorno;
  }

  public async doPost(endPoint: string, data: any): Promise<string> {
    const result = endPoint;
    const url = this.host + endPoint;
    Axios.defaults.baseURL = "pac-v-backend";
    await Axios({
      method: "POST",
      url: url,
      data: data,
    })
      .then((serverReturn) => {
        console.log(result);
        console.log(serverReturn);
      })
      .catch((error) => {
        console.log(error);
      });

    return result;
  }
}
