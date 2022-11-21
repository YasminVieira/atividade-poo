import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Empresa from "../../modelo/empresa";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";

export default class ConsumoCliente extends Cadastro{
    private entrada: Entrada
    public clienteSer?: Cliente
    public empresa: Empresa
    public servicoSer?: Servico
    constructor(empresa: Empresa){
        super()
        this.entrada = new Entrada()
        this.empresa = empresa
    }

    public cadastrar(): void {
        const nome = this.entrada.receberTexto(`Informe o nome do Cliente: `)
        this.clienteSer = this.empresa.getClientes.find(cliente => cliente.nome === nome)
        let execucao = true
        while (execucao){
            console.log("---------------------------")
            console.log(`Consumo: `)
            console.log(`1 - Produto`)
            console.log(`2 - Serviço`)
            console.log(`0 - Sair`)
            let opcao = this.entrada.receberNumero(`Insira a opção: `)
            switch(opcao){
                case 1:
                    let nomeProduto = this.entrada.receberTexto(`Escreva o nome do produto: `)
                    let produto = this.empresa.getProdutos.find(produto => produto.nome === nomeProduto)
                    this.clienteSer?.adicionarProduto(produto)
                    break
                case 2:
                    const nomeServico = this.entrada.receberTexto(`Informe o nome do serviço: `)
                    this.servicoSer = this.empresa.getServicos.find(servico => servico.nome === nomeServico)
                    console.log(this.servicoSer?.nome)
                    this.clienteSer?.adicionarServico(this.servicoSer)
                    break;
                case 0:
                    execucao = false
                    console.log(`Obrigado!`)
                    break
                default:
                    console.log(`Digite uma opção válida`)
            }
        }
        console.log(`\nInserido com sucesso`)
    }
}