/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import HistoricoIcaro from "../historico/HistoricoCliente/historicoIcaro";
import HistoricoYasmin from "../historico/HistoricoCliente/historicoYasmin";
import FormularioCadastroCliente from "../formulários/formularioCadastroCliente";
import HistoricoCliente from "../historico/HistoricoCliente/historicoCliente";
import VendaCliente from "../Vendas/vendaCliente";
import Venda from "../Vendas/venda";


type props = {
    tema: string
}
type state = {
    nome: string
}

export default class ListaCliente extends Component<props, state> {
    constructor(props: any){
        super(props)
        this.state = {
            nome: ''
        }
    }

    clickYasmin = () => {
        this.setState({
            nome: 'Yasmin'
        })
    }
    clickIcaro = () => {
        this.setState({
            nome: 'Icaro'
        })
    }
    clickVazio = () => {
        this.setState({
            nome: ''
        })
    }

    componentDidMount() {
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);
    
        var elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);
      }

      historico() {
        if (this.state.nome === 'Yasmin') {
          console.log(this.state.nome);
          return (<HistoricoYasmin tema="#ffcc80 orange lighten-3" />)
        } else if (this.state.nome === 'Icaro') {
          console.log(this.state.nome);
          return (<HistoricoIcaro tema="#ffcc80 orange lighten-3" />)
        }
      }

    render() {
        return (
            <div id="backgroundClientContainer">
              <div id="titleContainer">
                <h4 id="Title">Clientes cadastrados</h4>
              </div>
              <div id="collapsibleContainer">
                <ul className="collapsible">
                  <li >
                    <div id="collapsibleHeader" className="collapsible-header">
                      Gerson
                    </div>
                    <div id="collapsibleBody" className="collapsible-body">
                      <span>Nome Social: Ge</span><br />
                      <span>Sexo: M</span><br />
                      <span>Data de Nascimento: 28/10/1999</span><br />
                      <span>CPF: 12389314478</span><br />
                      <span>E-mail: gerson@ge.com</span><br />
                      <span>DDD: 12</span><br />
                      <span>Telefone: 129489384</span><br />
                      <span>Endereço: </span><br />
                      <span>Taubaté-SP </span><br />
                      <span>12857463 </span><br />
                      <span>R. Dois, 3 </span><br />
                      <span>Sem Complemento</span><br />
      
                      <div id="editDeleteButtonContainer">
                        <a href="#modalEdit" id="editDeleteButton" className="btn-floating btn-medium orange lighten-3 pulse modal-trigger"><i className="small material-icons">create</i></a>
                        <a href="#" id="editDeleteButton" className="btn-floating btn-medium orange lighten-3 pulse"><i className="small material-icons">delete</i></a>
                        <a href="#modalSell" id="editDeleteButton" className="btn-floating btn-medium orange lighten-3 pulse modal-trigger"><i className="small material-icons">monetization_on</i></a>
                        <a href="#modalHistory" onClick={this.clickVazio} id="editDeleteButton" className="btn-floating btn-medium orange lighten-3 pulse modal-trigger"><i className="small material-icons">access_time</i></a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div id="collapsibleHeader" className="collapsible-header">
                      Yasmin
                    </div>
                    <div id="collapsibleBody" className="collapsible-body">
                      <span>Nome Social: Mima</span><br />
                      <span>Sexo: F</span><br />
                      <span>Data de Nascimento: 12/4/2000</span><br />
                      <span>CPF: 12345678912</span><br />
                      <span>E-mail: mima@mimaa.com</span><br />
                      <span>DDD: 12</span><br />
                      <span>Telefone: 454234</span><br />
                      <span>Endereço: </span><br />
                      <span>São José dos Campos-SP </span><br />
                      <span>12345967 </span><br />
                      <span>R. Tititi, 12 </span><br />
                      <span>123</span><br />
      
                      <div id="editDeleteButtonContainer">
                        <a href="#modalEdit" id="editDeleteButton" className="btn-floating btn-medium orange lighten-3 pulse modal-trigger"><i className="small material-icons">create</i></a>
                        <a href="#" id="editDeleteButton" className="btn-floating btn-medium orange lighten-3 pulse"><i className="small material-icons">delete</i></a>
                        <a href="#modalSell" id="editDeleteButton" className="btn-floating btn-medium orange lighten-3 pulse modal-trigger"><i className="small material-icons">monetization_on</i></a>
                        <a href="#modalHistory" onClick={this.clickYasmin} id="editDeleteButton" className="btn-floating btn-medium orange lighten-3 pulse modal-trigger"><i className="small material-icons">access_time</i></a>
                      </div>
                    </div>
                  </li>
                  <li >
                    <div id="collapsibleHeader" className="collapsible-header">
                      Icaro
                    </div>
                    <div id="collapsibleBody" className="collapsible-body">
                      <span>Nome Social: Icaro</span><br />
                      <span>Sexo: M</span><br />
                      <span>Data de Nascimento: 3/4/1999</span><br />
                      <span>CPF: 12345678912</span><br />
                      <span>E-mail: icaro@icaro.com</span><br />
                      <span>DDD: 12</span><br />
                      <span>Telefone: 7565785</span><br />
                      <span>Endereço: </span><br />
                      <span>São José-SP </span><br />
                      <span>12280051 </span><br />
                      <span>Rua blabla </span><br />
                      <span>Sem Complemento</span><br />
      
                      <div id="editDeleteButtonContainer">
                        <a href="#modalEdit" id="editDeleteButton" className="btn-floating btn-medium orange lighten-3 pulse modal-trigger"><i className="small material-icons">create</i></a>
                        <a href="#" id="editDeleteButton" className="btn-floating btn-medium orange lighten-3 pulse"><i className="small material-icons">delete</i></a>
                        <a href="#modalSell" id="editDeleteButton" className="btn-floating btn-medium orange lighten-3 pulse modal-trigger"><i className="small material-icons">monetization_on</i></a>
                        <a href="#modalHistory" onClick={this.clickIcaro} id="editDeleteButton" className="btn-floating btn-medium orange lighten-3 pulse modal-trigger"><i className="small material-icons">access_time</i></a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
      
              <div id="addButtonContainer">
                <a href="#modalCadastro" className="btn-floating btn-large orange lighten-3 pulse modal-trigger"><i className="large material-icons">add</i></a>
              </div>
      
              <div id="sellButtonContainer">
                <a href="#modalSellAll" className="btn-floating btn-large orange lighten-3 pulse modal-trigger"><i className="large material-icons">monetization_on</i></a>
              </div>
      
              <div id="historyButtonContainer">
                <a href="#modalHistoryAll" className="btn-floating btn-large orange lighten-3 pulse modal-trigger"><i className="large material-icons">access_time</i></a>
              </div>
      
              {/* ----------------------------------------------------------------MODAL---------------------------------------------------------------- */}
      
              <div id="modalCadastro" className="modal modal-fixed-footer">
                <div className="modal-content">
                  <h5>Cadastro de Cliente</h5>
                  <FormularioCadastroCliente tema="#ffb74d orange lighten-2" />
                </div>
                <div className="modal-footer">
                  <button id="cancelButtonContainer" className="modal-close waves-effect waves-light btn-flat">
                    <a href="#!"><i id="cancelButton" className="material-icons right">cancel</i></a>Cancelar
                  </button>
                  <button id="cadastrarButtonContainer" type="submit" name="action" className="modal-close waves-effect waves-light btn-flat">
                    <a href="#!"><i id="sendButton" className="material-icons right">send</i></a>Cadastrar
                  </button>
                </div>
              </div>
      
              <div id="modalEdit" className="modal modal-fixed-footer">
                <div className="modal-content">
                  <h5>Edição de Cliente</h5>
                  <FormularioCadastroCliente tema="#ffb74d orange lighten-2" />
                </div>
                <div className="modal-footer">
                  <button id="cancelButtonContainer" className="modal-close waves-effect waves-light btn-flat">
                    <a href="#!"><i id="cancelButton" className="material-icons right">cancel</i></a>Cancelar
                  </button>
                  <button id="cadastrarButtonContainer" type="submit" name="action" className="modal-close waves-effect waves-light btn-flat">
                    <a href="#!"><i id="sendButton" className="material-icons right">send</i></a>Atualizar
                  </button>
                </div>
              </div>
      
              <div id="modalSell" className="modal modal-fixed-footer">
                <div className="modal-content">
                  <h5>Venda</h5>
                  <VendaCliente tema="#ffb74d orange lighten-2" />
                </div>
                <div className="modal-footer">
                  <button id="cancelButtonContainer" className="modal-close waves-effect waves-light btn-flat">
                    <a href="#!"><i id="cancelButton" className="material-icons right">cancel</i></a>Cancelar
                  </button>
                  <button id="cadastrarButtonContainer" type="submit" name="action" className="modal-close waves-effect waves-light btn-flat">
                    <a href="#!"><i id="sendButton" className="material-icons right">send</i></a>Confirmar
                  </button>
                </div>
              </div>
      
              <div id="modalSellAll" className="modal modal-fixed-footer">
                <div className="modal-content">
                  <h5>Opções</h5>
                  <Venda tema="#ffb74d orange lighten-2" />
                </div>
                <div className="modal-footer">
                  <button id="cancelButtonContainer" className="modal-close waves-effect waves-light btn-flat">
                    <a href="#!"><i id="cancelButton" className="material-icons right">cancel</i></a>Cancelar
                  </button>
                  <button id="cadastrarButtonContainer" type="submit" name="action" className="modal-close waves-effect waves-light btn-flat">
                    <a href="#!"><i id="sendButton" className="material-icons right">send</i></a>Confirmar
                  </button>
                </div>
              </div>
      
              <div id="modalHistoryAll" className="modal modal-fixed-footer">
                <div className="modal-content">
                  <h5>Histórico de Vendas</h5>
                  <HistoricoCliente tema="#ffb74d orange lighten-2" />
                </div>
                <div className="modal-footer">
                  <button id="cadastrarButtonContainer" type="submit" name="action" className="modal-close waves-effect waves-light btn-flat">
                    <a href="#!"><i id="sendButton" className="material-icons right">check</i></a>Ok
                  </button>
                </div>
              </div>
      
              <div id="modalHistory" className="modal modal-fixed-footer">
                <div className="modal-content">
                  <h5>Histórico de Vendas</h5>
                  {this.historico()}
                </div>
                <div className="modal-footer">
                  <button id="cadastrarButtonContainer" type="submit" name="action" className="modal-close waves-effect waves-light btn-flat">
                    <a href="#!"><i id="sendButton" className="material-icons right">check</i></a>Ok
                  </button>
                </div>
              </div>
            </div >
          )
    }
}