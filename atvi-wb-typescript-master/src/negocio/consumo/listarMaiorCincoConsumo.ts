import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListarMaiorCincoConsumo extends Listagem {
  private clientes: Array<Cliente>;
  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
  }
  public listar(): void {
    let consumoQtd: any = [];

    this.clientes.forEach((cliente) => {
      let cpf = cliente.getCpf.getValor;
      let nome = cliente.nome;
      let nomeSocial = cliente.nomeSocial;
      let consumoTotal: number = 0;

      cliente.getProdutosConsumidos.forEach((produto) => {
        consumoTotal = consumoTotal + produto.getPreco;
      });
      cliente.getServicosConsumidos.forEach((servico) => {
        consumoTotal = consumoTotal + servico.getPrecoServico;
      });
      consumoQtd.push({
        nome: nome,
        cpf: cpf,
        nomeSocial: nomeSocial,
        quantidade: consumoTotal,
      });
    });
    consumoQtd = consumoQtd.sort(
      (a: { quantidade: number }, b: { quantidade: number }) => {
        return b.quantidade - a.quantidade;
      }
    );
    consumoQtd = consumoQtd.slice(0, 5);

    console.log("Top 5 Clientes que mais consumiram (em valor): ");
    console.log("\n-------------------------------------------------------\n");

    consumoQtd.forEach(
      (cliente: {
        cpf: string;
        nome: string;
        nomeSocial: string;
        quantidade: any;
      }) => {
        console.log("CPF: " + cliente.cpf);
        console.log("Nome do cliente: " + cliente.nome);
        console.log("Nome Social: " + cliente.nomeSocial);
        console.log(`Valor Consumido: R$ ${cliente.quantidade} reais`);
        console.log(`-----------------------------------`);
      }
    );
  }
}
