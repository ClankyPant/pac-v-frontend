import TokenResponse from "@/models/services/token.model";
import UsuarioModel from "@/models/usuario.model";
import BaseService from "./base.service";

export default class UsuarioService extends BaseService {
  async login(usuario: UsuarioModel): Promise<void> {
    const result : TokenResponse = await this.post<TokenResponse>(
      TokenResponse,
      "http://localhost:8082/pac-v-backend/login",
      usuario
    );

    console.log(result);
  }
}
