import { useEffect, useState } from "react";
import CadastroServico from "../formulários/cadastroServico";
import M from "materialize-css";
import HistoricoBarba from "../historico/HistoricoServico/historicoBarba";
import HistoricoCorte from "../historico/HistoricoServico/historicoCorte";
import HistoricoServico from "../historico/HistoricoServico/historicoServico";
import VendaServico from "../Vendas/vendaServico";
import VendaServicoAll from "../Vendas/vendaServiçoAll";

export default function ListaServico() {
  const [nome, setNome] = useState("");

  let clickCorte = () => {
    setNome("Corte");
  };

  let clickBarba = () => {
    setNome("Barba");
  };

  let clickVazio = () => {
    setNome("");
  };

  function historico() {
    if (nome === "Corte de Cabelo") {
      return <HistoricoCorte />;
    } else if (nome === "Manicure e Pedicure") {
      return <HistoricoBarba />;
    }
  }

  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems);

    var elemsModal = document.querySelectorAll(".modal");
    M.Modal.init(elemsModal);
  });

  return (
    <div id="backgroundClientContainer">
      <div id="titleContainer">
        <h4 id="Title">Serviços cadastrados</h4>
      </div>
      <div id="collapsibleContainer">
        <ul className="collapsible">
          <li className="">
            <div id="collapsibleHeader" className="collapsible-header">
              Corte de Cabelo
            </div>
            <div id="collapsibleBody" className="collapsible-body">
              <span>Preço R$: 50,00</span>
              <br />
              <span>Quantidade vendida: 2</span>
              <br />

              <div id="editDeleteButtonContainer">
                <a
                  href="#modalEdit"
                  id="editDeleteButton"
                  className="btn-floating btn-medium orange lighten-3 pulse modal-trigger"
                >
                  <i className="small material-icons">create</i>
                </a>
                <a
                  href="#"
                  id="editDeleteButton"
                  className="btn-floating btn-medium orange lighten-3 pulse"
                >
                  <i className="small material-icons">delete</i>
                </a>
                <a
                  href="#modalSell"
                  id="editDeleteButton"
                  className="btn-floating btn-medium orange lighten-3 pulse modal-trigger"
                >
                  <i className="small material-icons">monetization_on</i>
                </a>
                <a
                  href="#modalHistory"
                  onClick={clickCorte}
                  id="editDeleteButton"
                  className="btn-floating btn-medium orange lighten-3 pulse modal-trigger"
                >
                  <i className="small material-icons">access_time</i>
                </a>
              </div>
            </div>
          </li>
          <li>
            <div id="collapsibleHeader" className="collapsible-header">
              Barba
            </div>
            <div id="collapsibleBody" className="collapsible-body">
              <span>Preço R$: 30,00</span>
              <br />
              <span>Quantidade vendida: 1</span>
              <br />

              <div id="editDeleteButtonContainer">
                <a
                  href="#modalEdit"
                  id="editDeleteButton"
                  className="btn-floating btn-medium orange lighten-3 pulse modal-trigger"
                >
                  <i className="small material-icons">create</i>
                </a>
                <a
                  href="#"
                  id="editDeleteButton"
                  className="btn-floating btn-medium orange lighten-3 pulse"
                >
                  <i className="small material-icons">delete</i>
                </a>
                <a
                  href="#modalSell"
                  id="editDeleteButton"
                  className="btn-floating btn-medium orange lighten-3 pulse modal-trigger"
                >
                  <i className="small material-icons">monetization_on</i>
                </a>
                <a
                  href="#modalHistory"
                  onClick={clickBarba}
                  id="editDeleteButton"
                  className="btn-floating btn-medium orange lighten-3 pulse modal-trigger"
                >
                  <i className="small material-icons">access_time</i>
                </a>
              </div>
            </div>
          </li>

          <li>
            <div id="collapsibleHeader" className="collapsible-header">
              Pintura
            </div>
            <div id="collapsibleBody" className="collapsible-body">
              <span>Preço R$: 100,00</span>
              <br />
              <span>Quantidade vendida: 0</span>
              <br />

              <div id="editDeleteButtonContainer">
                <a
                  href="#modalEdit"
                  id="editDeleteButton"
                  className="btn-floating btn-medium orange lighten-3 pulse modal-trigger"
                >
                  <i className="small material-icons">create</i>
                </a>
                <a
                  href="#"
                  id="editDeleteButton"
                  className="btn-floating btn-medium orange lighten-3 pulse"
                >
                  <i className="small material-icons">delete</i>
                </a>
                <a
                  href="#modalSell"
                  id="editDeleteButton"
                  className="btn-floating btn-medium orange lighten-3 pulse modal-trigger"
                >
                  <i className="small material-icons">monetization_on</i>
                </a>
                <a
                  href="#modalHistory"
                  onClick={clickVazio}
                  id="editDeleteButton"
                  className="btn-floating btn-medium orange lighten-3 pulse modal-trigger"
                >
                  <i className="small material-icons">access_time</i>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div id="addButtonContainer">
        <a
          href="#modalCadastro"
          className="btn-floating btn-large orange lighten-3 pulse modal-trigger"
        >
          <i className="large material-icons">add</i>
        </a>
      </div>
      <div id="sellButtonContainer">
        <a
          href="#modalSellAll"
          className="btn-floating btn-large orange lighten-3 pulse modal-trigger"
        >
          <i className="large material-icons">monetization_on</i>
        </a>
      </div>
      <div id="historyButtonContainer">
        <a
          href="#modalHistoryAll"
          className="btn-floating btn-large orange lighten-3 pulse modal-trigger"
        >
          <i className="large material-icons">access_time</i>
        </a>
      </div>

      <div id="modalCadastro" className="modal modal-fixed-footer">
        <div className="modal-content">
          <h5>Cadastro de Serviço</h5>
          <CadastroServico />
        </div>
        <div className="modal-footer">
          <button
            id="cancelButtonContainer"
            className="modal-close waves-effect waves-light btn-flat"
          >
            <a href="#!">
              <i id="cancelButton" className="material-icons right">
                cancel
              </i>
            </a>
            Cancelar
          </button>
          <button
            id="cadastrarButtonContainer"
            type="submit"
            name="action"
            className="modal-close waves-effect waves-light btn-flat"
          >
            <a href="#!">
              <i id="sendButton" className="material-icons right">
                send
              </i>
            </a>
            Cadastrar
          </button>
        </div>
      </div>

      <div id="modalEdit" className="modal modal-fixed-footer">
        <div className="modal-content">
          <h5>Edição de Serviço</h5>
          <CadastroServico />
        </div>
        <div className="modal-footer">
          <button
            id="cancelButtonContainer"
            className="modal-close waves-effect waves-light btn-flat"
          >
            <a href="#!">
              <i id="cancelButton" className="material-icons right">
                cancel
              </i>
            </a>
            Cancelar
          </button>
          <button
            id="cadastrarButtonContainer"
            type="submit"
            name="action"
            className="modal-close waves-effect waves-light btn-flat"
          >
            <a href="#!">
              <i id="sendButton" className="material-icons right">
                send
              </i>
            </a>
            Atualizar
          </button>
        </div>
      </div>

      <div id="modalSell" className="modal modal-fixed-footer">
        <div className="modal-content">
          <h5>Venda</h5>
          <VendaServico />
        </div>
        <div className="modal-footer">
          <button
            id="cancelButtonContainer"
            className="modal-close waves-effect waves-light btn-flat"
          >
            <a href="#!">
              <i id="cancelButton" className="material-icons right">
                cancel
              </i>
            </a>
            Cancelar
          </button>
          <button
            id="cadastrarButtonContainer"
            type="submit"
            name="action"
            className="modal-close waves-effect waves-light btn-flat"
          >
            <a href="#!">
              <i id="sendButton" className="material-icons right">
                send
              </i>
            </a>
            Confirmar
          </button>
        </div>
      </div>

      <div id="modalSellAll" className="modal modal-fixed-footer">
        <div className="modal-content">
          <h5>Venda</h5>
          <VendaServicoAll />
        </div>
        <div className="modal-footer">
          <button
            id="cancelButtonContainer"
            className="modal-close waves-effect waves-light btn-flat"
          >
            <a href="#!">
              <i id="cancelButton" className="material-icons right">
                cancel
              </i>
            </a>
            Cancelar
          </button>
          <button
            id="cadastrarButtonContainer"
            type="submit"
            name="action"
            className="modal-close waves-effect waves-light btn-flat"
          >
            <a href="#!">
              <i id="sendButton" className="material-icons right">
                send
              </i>
            </a>
            Confirmar
          </button>
        </div>
      </div>

      <div id="modalHistoryAll" className="modal modal-fixed-footer">
        <div className="modal-content">
          <h5>Histórico de Vendas</h5>
          <HistoricoServico />
        </div>
        <div className="modal-footer">
          <button
            id="cadastrarButtonContainer"
            type="submit"
            name="action"
            className="modal-close waves-effect waves-light btn-flat"
          >
            <a href="#!">
              <i id="sendButton" className="material-icons right">
                check
              </i>
            </a>
            Ok
          </button>
        </div>
      </div>

      <div id="modalHistory" className="modal modal-fixed-footer">
        <div className="modal-content">
          <h5>Histórico de Vendas</h5>
          {historico()}
        </div>
        <div className="modal-footer">
          <button
            id="cadastrarButtonContainer"
            type="submit"
            name="action"
            className="modal-close waves-effect waves-light btn-flat"
          >
            <a href="#!">
              <i id="sendButton" className="material-icons right">
                check
              </i>
            </a>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
