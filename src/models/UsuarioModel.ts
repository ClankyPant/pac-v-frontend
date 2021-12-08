export default class UsuarioModel {
  login: string;
  password: string;

  constructor(login = "", password = "") {
    this.login = login;
    this.password = password;
  }
}
