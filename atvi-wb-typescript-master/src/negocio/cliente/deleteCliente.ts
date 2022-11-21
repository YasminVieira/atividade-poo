import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Delete from "../delete";
import ListagemClientes from "./listagemClientes";

export default class DeleteCliente extends Delete{
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    listaClientes(){
        let listaClientes = new ListagemClientes(this.clientes)
        listaClientes.listar()
        let entrada = new Entrada()

        let cpf = entrada.receberTexto(`Por favor, informe o cpf do cliente que deseja deletar: `)
        let indice = this.clientes.findIndex(i => i.getCpf.getValor === cpf)
        this.clientes.splice(indice, 1)
        return
    }
    public delete(): void {
        console.log(`\nInicio da exclusão do cliente\n`);
        this.listaClientes();
        console.log(`Cliente excluido com sucesso!`)
    }
}