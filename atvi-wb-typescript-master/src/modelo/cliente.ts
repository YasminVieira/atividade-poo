import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    public genero: string
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    constructor(nome: string, nomeSocial: string, cpf: CPF, genero: string) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.genero = genero
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public adicionarServico(servico?: Servico): void{
        if(!servico){
            console.log("Serviço não encontrado");
        } else {
            this.servicosConsumidos.push(servico)
            console.log("Serviço adicionado");
        }
    }
    public adicionarProduto(produto?: Produto): void{
        if(!produto){
            console.log("Produto não encontrado");
        } else {
            this.produtosConsumidos.push(produto)
            console.log("Produto adicionado");
        }
    }
    public adicionaRg(rg: RG): void{
        this.rgs.push(rg);
    }
    public adicionaTelefone(telefone: Telefone): void{
        this.telefones.push(telefone);
    }
}