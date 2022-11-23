import { useEffect } from "react";
import M from "materialize-css";

export default function Listagem() {
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
              Listagem dos 10 clientes que mais consumiram produtos ou serviços,
              em quantidade, não em valor
            </div>
            <div id="collapsibleBody" className="collapsible-body">
              <span>1º - Yasmin</span>
              <br />
              <span>2º - Icaro</span>
              <br />
            </div>
          </li>
          <li>
            <div id="collapsibleHeader" className="collapsible-header">
              Listagem de todos os clientes por gênero
            </div>
            <div id="collapsibleBody" className="collapsible-body">
              <h6>Feminino</h6>
              <hr />
              <span>1º - Yasmin</span>
              <br />
              <h6>Masculino</h6>
              <hr />
              <span>1º - Icaro</span>
              <br />
              <h6>Outro</h6>
              <hr />
              <span>1º - Gerson</span>
              <br />
            </div>
          </li>
          <li>
            <div id="collapsibleHeader" className="collapsible-header">
              Listagem geral de produtos e serviços mais consumidos
            </div>
            <div id="collapsibleBody" className="collapsible-body">
              <span>1º - Shampoo</span>
              <br />
              <span>2º - Condicionador</span>
              <br />
              <span>3º - Desodorante</span>
              <br />
              <span>4º - Corte de Cabelo</span>
              <br />
              <span>5º - Barba</span>
              <br />
            </div>
          </li>
          <li>
            <div id="collapsibleHeader" className="collapsible-header">
              Listagem dos produtos e serviços mais consumidos por gênero{" "}
            </div>
            <div id="collapsibleBody" className="collapsible-body">
              <h6>Feminino</h6>
              <hr />
              <span>1º - dESODORANTE</span>
              <br />
              <span>2º - Shampoo</span>
              <br />
              <span>2º - Condicionador</span>
              <br />
              <h6>Masculino</h6>
              <hr />
              <span>1º - Shampoo</span>
              <br />
              <span>2º - Condicionador</span>
              <br />
              <span>3º - Corte de Cabelo</span>
              <br />
              <h6>Outro</h6>
              <hr />
              <span></span>
              <br />
            </div>
          </li>
          <li>
            <div id="collapsibleHeader" className="collapsible-header">
              Listagem dos 10 clientes que menos consumiram produtos e serviços{" "}
            </div>
            <div id="collapsibleBody" className="collapsible-body">
              <span>1º - gERSON</span>
              <br />
              <span>2º - Icaro</span>
              <br />
              <span>3º - Yasmin</span>
              <br />
            </div>
          </li>
          <li>
            <div id="collapsibleHeader" className="collapsible-header">
              Listagem dos 5 clientes que mais consumiram em valor{" "}
            </div>
            <div id="collapsibleBody" className="collapsible-body">
              <span>1º - Yasmin</span>
              <br />
              <span>2º - Icaro</span>
              <br />
              <span>3º - Gerson</span>
              <br />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
