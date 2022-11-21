import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Update from "../update";

export default class UpdateServico extends Update{
    private servico: Array<Servico>
    private entrada: Entrada
    constructor(servico: Array<Servico>){
        super();
        this.servico = servico;
        this.entrada = new Entrada();
    }
    public update(): void{
        console.log(`\nAlterar serviços:`);
               
        let nomeDel = this.entrada.receberTexto(`Serviço a ser alterado: `)
        let index = this.servico.findIndex(serv => serv.nome == nomeDel)
        let exe = true
        while(index == -1){
            nomeDel = this.entrada.receberTexto(`Por favor insira novamente o serviço a ser alterado: (se quiser sair da alteração digite 0) `)
            index = this.servico.findIndex(serv => serv.nome == nomeDel)
            if(nomeDel == "0"){
                exe = false
                console.log(`SAINDO!.`);
                break;
            }
            
        }
        
            while (exe) {                
                console.log(`1 - Nome do Serviço.`);
                console.log(`2 - Preço do Serviço.`);                
                console.log(`0 - Sair.`);
                let opcao = this.entrada.receberNumero(`Digite uma das Opções Para Atualizar o Serviço: `);
                switch (opcao) {
                    case 1:
                        let nome = this.entrada.receberTexto(`Digite o Novo Nome do Serviço: `);
                        this.servico[index].nome = nome
                        break;
                    case 2:
                        let preco = this.entrada.receberNumero(`Digite o Novo Preço do Serviço: `);
                        this.servico[index].preco = preco
                        break;                    
                    case 0:
                        exe = false
                        console.log(`Obrigado!.`);
                        break;
                    default:
                        console.log(`Digite Uma Opção Válida!.`);
                }
            }
    }
}