import { ItemCategoryEnum } from "@/enums/ItemCategoryEnum";

export default class ItemModel {
  id: number;

  titulo: string;

  descricao: string;

  preco: number;

  base64 =
    "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABCCAYAAAC1ri/bAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAO9SURBVHhe7dnLTxNRFAbwWZPIBhLiQlCEoIjEqCgqKhFBQRRCEA0qoiiiSIKsjBKiQkwgEBUUBHxgFeTVUCxvKIKaaN2zZtd/48i50kmBSouZs+j0W/zCzJ0zl0nmy5k7Uy08Op0AjIZggQgEC0QgWCACwQIRCBaIQLBABIIFIhAsEIFggQjNMf+bAIyGYIEIBAtEIFggAsECEQgWiECwQASCBSIQLBCBYIEIBAtEIFggAsECEQgWiECwQASCBSIQLBCBYIEI0wVrbOo7ZZ/LI03T6EH1E681IA/BAhEIFogImmD1DtjpTHYubQoNVXi7u29YPz4z56TmV29o774kdW7y4RQqLatQ2zwfz+vPPFOzP+lRbT3tTtyjzt0SGUXlFVU0Ojmv1wSDoAiWpdtKO+MT1FhMbJzC2zz23tKvajrf9VBk1NY1NcwdLH/mqa6po5CQEIrbEU9FxTcp6UCyqjl/4RJNzPzQr9PsTB8s7kTXSsrUfuHlYnVzuau4x65cLVmxn5Obr7qL5xjPNzr5zec8XMPn837T8zZ1PZYeKx1LTaOTGZnUZx1dc71mZfpgfRmbVTeW9581t+t1L152qrHkQ0fo89LjLT0jS+03NLXoNXw+j/F8A0MTPucZss/Q7fJKtc+d6nFdw9J54yrc7vpgYfpgDdmn9ccRh8Bd1/VxgLbHxKpj3FW81XgGq3dwxOc8/L9sS+G6WFikHodcy3i91v72k35OMAjoYHE3uHP3nsLbPGYfn9O7T+3TRr86Vp91jLKyc9bUbLRj2UYc+jhv1ze20Im0U+p4ytHUFcfNLqCD1dM/TLsSElV34JvIY687LWoRHhYWTm0dlg2vsbzVcLD8WWNZhydV5+IOxp2Mr2fQNqHeND3HgkFAB2v66y/9kwDbFh2jP4I838L8eZvjv95qGAfLn7dCDjF/WuAxfissvn6Lji93udy8AjWH5/WbWcCvsfhmVVbd1284h4v3V99EX9+fWGt7l1oPcThPZ55VweA5+U1vfPpvSH3Nw2F+WFOrXw9/x7pRWq7WXu6aYGC6xfv/4m7DXcfd5fiTg/vTAb/pra6H9SFYy1o7PlBExGbVYfYnHVzxmONHoLdz4N8QrGW8EOefYtw/6XDI8gsK1aPPWz2sD8ECEQgWiECwQASCBSIQLBCBYIEIBAtEIFggAsECEQgWiECwQASCBSIQLBCBYIEIBAtEIFggAsECEZrNZiMAo2kOh4MAjKY5nU4CMJq2sLBAAEbTFhcXCcBomsvlIgBjuegPNLbsSJsZq1gAAAAASUVORK5CYII=";

  category = ItemCategoryEnum.TODOS;

  constructor(
    id: number,
    titulo: string,
    descricao: string,
    preco: number,
    category: ItemCategoryEnum
  ) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.preco = preco;
    this.category = category;
  }
}
