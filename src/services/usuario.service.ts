import TokenResponse from "@/models/services/TokenModel";
import UsuarioModel from "@/models/UsuarioModel";
import BaseService from "@/services/base.service";

export default class UsuarioService extends BaseService {
  async login(usuario: UsuarioModel): Promise<TokenResponse> {
    return await this.post<TokenResponse>(
      TokenResponse,
      "http://localhost:8082/pac-v-backend/login",
      usuario
    );
  }
}
