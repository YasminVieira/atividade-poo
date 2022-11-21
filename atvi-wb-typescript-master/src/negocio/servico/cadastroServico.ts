import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";

export default class CadastroServico extends Cadastro{
    public nomeServico: Array<Servico>
    private entrada: Entrada
    constructor(nomeServico: Array<Servico>){
        super();
        this.nomeServico = nomeServico;
        this.entrada = new Entrada();
    }
    public cadastrar(): void{
        console.log(`\nCadastre o serviço: `);
        let nome = this.entrada.receberTexto(`Nome do serviço: `);
        let preco = this.entrada.receberNumero(`Preço do serviço: `)
        let servicos = new Servico(nome, preco);
        this.nomeServico.push(servicos);
        console.log(`\n Cadastro finalizado :).`);
    }
}