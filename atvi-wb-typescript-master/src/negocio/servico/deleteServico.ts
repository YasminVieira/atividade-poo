import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Delete from "../delete";

export default class DeleteServico extends Delete{
    private servico: Array<Servico>
    private entrada: Entrada
    constructor(servico: Array<Servico>){
        super();
        this.servico = servico;
        this.entrada = new Entrada
    }
    public delete(): void {
        let nome = this.entrada.receberTexto("Nome do serviço: ");
        let servDel = this.servico.find(serv => nome == serv.nome);
        if (servDel != undefined) {
            let index = this.servico.indexOf(servDel);
            this.servico.splice(index, 1);
            console.log("\nServiço deletado!");
        }
        else
            console.log("\nServiço não enconrado.");
    }
}