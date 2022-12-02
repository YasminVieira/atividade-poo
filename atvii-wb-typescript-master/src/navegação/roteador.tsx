import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "../componentes/formulários/formularioCadastroCliente";
import ListaCliente from "../componentes/Lista/listaCliente";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="orange lighten-2" botoes={['Clientes', 'Cadastros']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="orange lighten-2" />
                </>
            )
        } else {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="orange lighten-2" />
                </>
            )
        }

    }
}