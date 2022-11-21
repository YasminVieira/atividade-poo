import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Update from "../update";

export default class UpdateProduto extends Update {
  private produtos: Array<Produto>;
  private entrada: Entrada;
  constructor(produtos: Array<Produto>) {
    super();
    this.produtos = produtos;
    this.entrada = new Entrada();
  }
  public update(): void {
    if (this.produtos.length == 0)
      return console.log(`\nNão há produtos cadastrados`);

    console.log(`\nInício da alteração do  produto`);

    let nome = this.entrada.receberTexto(
      `Por favor informe o nome do produto: `
    );
    let indice = this.produtos.findIndex((i) => i.nome === nome);
    while (indice == -1) {
      nome = this.entrada.receberTexto(
        `Por favor informe o novamente o nome do produto: `
      );
      indice = this.produtos.findIndex((i) => i.nome === nome);
    }
    let novoNome = this.entrada.receberTexto(
      `Por favor informe o novo nome do produto: `
    );
    let preco = this.entrada.receberNumero(
      `Por favor informe o novo preco do produto: `
    );
    let produto = new Produto(novoNome, preco);
    this.produtos[indice] = produto;

    console.log(`\nProduto alterado com sucesso:)\n`);
  }
}
