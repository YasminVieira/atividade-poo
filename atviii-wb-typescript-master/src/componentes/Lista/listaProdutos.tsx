import { useEffect, useState } from "react";
import CadastroProduto from "../formulários/cadastroProduto";
import M from "materialize-css";
import HistoricoCondicionador from "../historico/HistoricoProduto/historicoCondicionador";
import HistoricoDesodorante from "../historico/HistoricoProduto/historicoDesodorante";
import HistoricoProduto from "../historico/HistoricoProduto/historicoProduto";
import HistoricoShampoo from "../historico/HistoricoProduto/historicoShampoo";
import VendaProduto from "../Vendas/vendaProduto";
import VendaProdutoAll from "../Vendas/vendaProdutoAll";

export default function ListaProduto() {
  const [nome, setNome] = useState("");

  let clickDesodorante = () => {
    setNome("Desodorante");
  };

  let clickShampoo = () => {
    setNome("Shampoo");
  };

  let clickCondicionador = () => {
    setNome("Condicionador");
  };

  function historico() {
    if (nome === "Desodorante") {
      return <HistoricoDesodorante />;
    } else if (nome === "Condicionador") {
      return <HistoricoCondicionador />;
    } else if (nome === "Shampoo") {
      return <HistoricoShampoo />;
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
        <h4 id="Title">Produtos cadastrados</h4>
      </div>
      <div id="collapsibleContainer">
        <ul className="collapsible">
          <li>
            <div id="collapsibleHeader" className="collapsible-header">
              Condicionador
            </div>
            <div id="collapsibleBody" className="collapsible-body">
              <span>Preço R$: 13,00</span>
              <br />
              <span>Quantidade vendida: 5</span>
              <br />
              <span>Quantidade em estoque: 10</span>
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
                  onClick={clickCondicionador}
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
              Desodorante
            </div>
            <div id="collapsibleBody" className="collapsible-body">
              <span>Preço R$: 5,00</span>
              <br />
              <span>Quantidade vendida: 3</span>
              <br />
              <span>Quantidade em estoque: 13</span>
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
                  onClick={clickDesodorante}
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
              Shampoo
            </div>
            <div id="collapsibleBody" className="collapsible-body">
              <span>Preço R$: 9,00</span>
              <br />
              <span>Quantidade vendida: 6</span>
              <br />
              <span>Quantidade em estoque: 3</span>
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
                  onClick={clickShampoo}
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

      {/* ---------------------------------------------------------MODAL--------------------------------------------------------- */}

      <div id="modalCadastro" className="modal modal-fixed-footer">
        <div className="modal-content">
          <h5>Cadastro de Produtos</h5>
          <CadastroProduto />
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
          <h5>Edição de Produtos</h5>
          <CadastroProduto />
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
          <VendaProduto />
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
          <VendaProdutoAll />
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
          <HistoricoProduto />
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
