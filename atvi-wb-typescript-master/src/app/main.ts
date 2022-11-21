import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import CadastroProduto from "../negocio/produto/cadastroProduto";
import ListagemClientes from "../negocio/cliente/listagemClientes";
import ListagemProdutos from "../negocio/produto/listagemProdutos";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Servico from "../modelo/servico";
import Produto from "../modelo/produto";
import UpdateCliente from "../negocio/cliente/updateCliente";
import DeleteCliente from "../negocio/cliente/deleteCliente";
import UpdateProduto from "../negocio/produto/updateProduto";
import DeleteProduto from "../negocio/produto/deleteProduto";
import CadastroServico from "../negocio/servico/cadastroServico";
import UpdateServico from "../negocio/servico/updateServico";
import DeleteServico from "../negocio/servico/deleteServico";
import ListarServicos from "../negocio/servico/listarServico";
import ConsumoCliente from "../negocio/consumo/consumoCliente";
import Genero from "../negocio/genero";
import ListarMaiorCincoConsumo from "../negocio/consumo/listarMaiorCincoConsumo";
import ListarConsumo from "../negocio/consumo/listarConsumo";
import ListaMaiorConsumo from "../negocio/consumo/listarMaiorConsumo";
import ListaMenorConsumo from "../negocio/consumo/listarMenorConsumo";
import ProdutoMaisConsumido from "../negocio/consumo/produtoMaisConsumido";
import ListarMaiorServico from "../negocio/consumo/listarMaiorServico";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

let cl1 = new Cliente('Yasmin', 'Mima', new CPF('654165169', new Date()), 'F')
let cl2 = new Cliente('Rodrigo', 'Rods', new CPF('6545616', new Date()), 'M')
let cl3 = new Cliente('Ian', 'Ian', new CPF('984456165', new Date()), 'M')
let cl4 = new Cliente('Renan', 'Renan', new CPF('987451651', new Date()), 'M')
let cl5 = new Cliente('Beatriz', 'Bia', new CPF('54165166', new Date()), 'F')
let cl6 = new Cliente('Bianca', 'Bia', new CPF('123412341', new Date()), 'F')
let cl7 = new Cliente('Fabricio', 'Fa', new CPF('987516321', new Date()), 'M')
let cl8 = new Cliente('Gustavo', 'Gu', new CPF('62561984984', new Date()), 'M')
let cl9 = new Cliente('Leticia', 'Le', new CPF('3216549849', new Date()), 'F')
let cl10 = new Cliente('Glória', 'Gló', new CPF('98512651', new Date()), 'F')
let cl11 = new Cliente('Alessandra', 'Ale', new CPF('51651654165', new Date()), 'F')
let cl12 = new Cliente('Alessandro', 'Ale', new CPF('43254352123', new Date()), 'M')
let cl13 = new Cliente('Alexandre', 'Ale', new CPF('615698748941', new Date()), 'M')
let cl14 = new Cliente('Denise', 'De', new CPF('1235414123', new Date()), 'F')
let cl15 = new Cliente('Denize', 'De', new CPF('6512941985', new Date()), 'F')
let cl16 = new Cliente('Denis', 'De', new CPF('854651651', new Date()), 'M')
let cl17 = new Cliente('Larissa', 'Lari', new CPF('6515198516', new Date()), 'F')
let cl18 = new Cliente('Gabriela', 'Gabi', new CPF('65165165', new Date()), 'F')
let cl19 = new Cliente('Maria', 'Mari', new CPF('984165132', new Date()), 'F')
let cl20 = new Cliente('Maria Gabriela', 'MaGa', new CPF('6510651651', new Date()), 'F')
let cl21 = new Cliente('Marília Gabriela', 'Ma', new CPF('6549841561', new Date()), 'F')
let cl22 = new Cliente('Deize', 'De', new CPF('95165194185', new Date()), 'F')
let cl23 = new Cliente('Gerson', 'Ge', new CPF('61456168', new Date()), 'M')
let cl24 = new Cliente('Elaine', 'E', new CPF('6541651654', new Date()), 'F')
let cl25 = new Cliente('João', 'Jao', new CPF('651651621', new Date()), 'M')
let cl26 = new Cliente('Jasmine', 'Ja', new CPF('651699841', new Date()), 'F')
let cl27 = new Cliente('Jade', 'Ja', new CPF('654165169', new Date()), 'F')
let cl28 = new Cliente('Xerox', 'Xe', new CPF('561651651', new Date()), 'M')
let cl29 = new Cliente('Miguel', 'Mi', new CPF('65165161', new Date()), 'M')
let cl30 = new Cliente('Xuxa', 'Xu', new CPF('651651651', new Date()), 'F')
let cl31 = new Cliente('Sab', 'Sabrina', new CPF('621651651561', new Date()), 'F')
let cl32 = new Cliente('Diana', 'Di', new CPF('6516516565', new Date()), 'F')
let cl33 = new Cliente('Daiane', 'Dai', new CPF('F651265151', new Date()), 'F')
let cl34 = new Cliente('Egydio', 'Eg', new CPF('6516516516', new Date()), 'F')
let cl35 = new Cliente('Regina', 'Re', new CPF('615651651', new Date()), 'F')

let servico1 = new Servico('Unha',15);
let servico2 = new Servico('Limpeza',50);
let servico3 = new Servico('Sobrancelha',60);
let servico4 = new Servico('Corte',20);
let servico5 = new Servico('Maquiagem',70);
let servico6 = new Servico('Pedicure',40);
let servico7 = new Servico('Botox',80);
let servico8 = new Servico('Preenchimento',45);
let servico9 = new Servico('Cílios',60);
let servico10 = new Servico('Depilação',25);

let produto1 = new Produto('Xampu',20);
let produto2 = new Produto('Esmalte',15);
let produto3 = new Produto('Camisa',30);
let produto4 = new Produto('Cera',35);
let produto5 = new Produto('Rímel',80);
let produto6 = new Produto('Secador',200);
let produto7 = new Produto('Demaquilante',60);
let produto8 = new Produto('Acetona',40);
let produto9 = new Produto('Batom',25);
let produto10 = new Produto('Pente',10);

cl1.adicionarProduto(produto1)
cl1.adicionarProduto(produto1)
cl1.adicionarProduto(produto2)
cl1.adicionarProduto(produto9)
cl1.adicionarServico(servico6);
cl1.adicionarServico(servico10)
cl1.adicionarServico(servico3)

cl2.adicionarProduto(produto3)
cl2.adicionarProduto(produto4)
cl2.adicionarProduto(produto10)
cl2.adicionarProduto(produto5)
cl2.adicionarServico(servico1)
cl2.adicionarServico(servico2)

cl3.adicionarProduto(produto6)
cl3.adicionarProduto(produto7)
cl3.adicionarProduto(produto8)
cl3.adicionarProduto(produto8)
cl3.adicionarServico(servico1)
cl3.adicionarServico(servico5)
cl3.adicionarServico(servico5)

cl5.adicionarProduto(produto5)
cl5.adicionarProduto(produto8)
cl5.adicionarProduto(produto10)
cl5.adicionarServico(servico1)
cl5.adicionarServico(servico10)
cl5.adicionarServico(servico2)

cl10.adicionarServico(servico10)
cl10.adicionarServico(servico3)
cl10.adicionarProduto(produto2)

cl29.adicionarProduto(produto1)
cl29.adicionarProduto(produto7)
cl29.adicionarProduto(produto8)
cl29.adicionarServico(servico5)

empresa.getClientes.push(cl1);
empresa.getClientes.push(cl2);
empresa.getClientes.push(cl3);
empresa.getClientes.push(cl4);
empresa.getClientes.push(cl5);
empresa.getClientes.push(cl6);
empresa.getClientes.push(cl7);
empresa.getClientes.push(cl8);
empresa.getClientes.push(cl9);
empresa.getClientes.push(cl10);
empresa.getClientes.push(cl11);
empresa.getClientes.push(cl12);
empresa.getClientes.push(cl13);
empresa.getClientes.push(cl14);
empresa.getClientes.push(cl15);
empresa.getClientes.push(cl16);
empresa.getClientes.push(cl17);
empresa.getClientes.push(cl18);
empresa.getClientes.push(cl19);
empresa.getClientes.push(cl20);
empresa.getClientes.push(cl21);
empresa.getClientes.push(cl22);
empresa.getClientes.push(cl23);
empresa.getClientes.push(cl24);
empresa.getClientes.push(cl25);
empresa.getClientes.push(cl26);
empresa.getClientes.push(cl27);
empresa.getClientes.push(cl28);
empresa.getClientes.push(cl29);
empresa.getClientes.push(cl30);


empresa.getServicos.push(servico1);
empresa.getServicos.push(servico2);
empresa.getServicos.push(servico3);
empresa.getServicos.push(servico4);
empresa.getServicos.push(servico5);
empresa.getServicos.push(servico6);
empresa.getServicos.push(servico7);
empresa.getServicos.push(servico8);
empresa.getServicos.push(servico9);
empresa.getServicos.push(servico10);

empresa.getProdutos.push(produto1);
empresa.getProdutos.push(produto2);
empresa.getProdutos.push(produto3);
empresa.getProdutos.push(produto4);
empresa.getProdutos.push(produto5);
empresa.getProdutos.push(produto6);
empresa.getProdutos.push(produto7);
empresa.getProdutos.push(produto8);
empresa.getProdutos.push(produto9);
empresa.getProdutos.push(produto10);

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 -  Cadastrar cliente`);
    console.log(`2 -  Alterar cliente`);
    console.log(`3 -  Excluir Cliente`);
    console.log(`4 -  Listar todos os clientes`);
    console.log(`5 -  Cadastrar produto`);
    console.log(`6 -  Alterar produto`);
    console.log(`7 -  Excluir produto`);
    console.log(`8 -  Listar todos os produtos`);
    console.log(`9 -  Cadastrar serviços`);
    console.log(`10 - Editar Serviços: `);
    console.log(`11 - Excluir Serviço: `);
    console.log(`12 - Listar todos os serviços`);
    console.log(`13 - Adicionar Serviços/Produtos`);
    console.log(`13 - Editar Produtos`);
    console.log(`14 - Listar clientes por gênero`);
    console.log(`15 - Listar 5 mais em valor`);
    console.log(`16 - Listar consumo por gênero`);
    console.log(`17 - Listar 10 mais em quantidade`);
    console.log(`18 - Listar 10 menos em quantidade`);
    console.log(`19 - Listar produto mais consumido`);
    console.log(`20 - Listar serviço mais consumido`);

    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let alterarCliente = new UpdateCliente(empresa.getClientes);
            alterarCliente.update()
            break;
        case 3:
            let deletarCliente = new DeleteCliente(empresa.getClientes);
            deletarCliente.delete()
            break;
        case 4:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 5:
            let cadastroProdutin = new CadastroProduto(empresa.getProdutos)
            cadastroProdutin.cadastrar()
            break;
        case 6:
            let alterarProdutin = new UpdateProduto(empresa.getProdutos)
            alterarProdutin.update()
            break;
        case 7:
            let deletarProdutin = new DeleteProduto(empresa.getProdutos)
            deletarProdutin.delete()
            break;
        case 8:
            let listagemProd = new ListagemProdutos(empresa.getProdutos)
            listagemProd.listar()
            break;
        case 9:
                let servico = new CadastroServico(empresa.getServicos)
                servico.cadastrar()
                break;
        case 10:
            let editarServico = new UpdateServico(empresa.getServicos)
            editarServico.update();
            break;
        case 11:
            let deletaServico = new DeleteServico(empresa.getServicos)
            deletaServico.delete();
            break;
        case 12:
            let listagemServico = new ListarServicos(empresa.getServicos)
            listagemServico.listar()
            break;
        case 13:
            let consumoCliente = new ConsumoCliente(empresa)
            consumoCliente.cadastrar();
            break;
        case 14:
            let listarGenero = new Genero(empresa.getClientes)
            listarGenero.listar();
            break;
        case 15:
            let listar5Mais = new ListarMaiorCincoConsumo(empresa.getClientes)
            listar5Mais.listar();
            break;
        case 16:
            let listarConsumoGen = new ListarConsumo(empresa.getClientes)
            listarConsumoGen.listar();
            break;
        case 17:
            let listar10Mais = new ListaMaiorConsumo(empresa.getClientes)
            listar10Mais.listar();
            break;
        case 18:
            let listar10Menos = new ListaMenorConsumo(empresa.getClientes)
            listar10Menos.listar();
            break;
        case 19:
            let listarProdMais = new ProdutoMaisConsumido(empresa.getClientes)
            listarProdMais.listar();
            break;
        case 20:
            let listarServMais = new ListarMaiorServico(empresa.getClientes)
            listarServMais.listar();
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        
        default:
            console.log(`Operação não entendida :(`)
    }
}