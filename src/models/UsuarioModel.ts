export default class UsuarioModel {
  login: string;

  password: string;

  email: string;

  nome: string;
  endCep: string;
  endereco: string;
  endCidade: string;
  endComplemento: string;
  endNumero: number;

  constructor(
    login = "",
    password = "",
    email = "",
    nome = "",
    endCep = "",
    endereco = "",
    endCidade = "",
    endComplemento = "",
    endNumero = 0
  ) {
    this.login = login;
    this.password = password;
    this.email = email;
    this.nome = nome;
    this.endCep = endCep;
    this.endereco = endereco;
    this.endCidade = endCidade;
    this.endComplemento = endComplemento;
    this.endNumero = endNumero;
  }
}
