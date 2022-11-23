import { useEffect } from "react";
import M from "materialize-css";

export default function HistoricoCliente() {
  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems);

    var elemsModal = document.querySelectorAll(".modal");
    M.Modal.init(elemsModal);
  });

  return (
    <div id="historyCollapsibleContainer">
      <ul className="collapsible">
        <li className="">
          <div id="collapsibleHeader" className="collapsible-header">
            Yasmin
          </div>
          <div id="collapsibleBody" className="collapsible-body">
            <h5>Produtos</h5>
            <span>8x Shampoo</span>
            <br />
            <span>5x Condicionador</span>
            <br />
            <hr />
            <span>Total produto: R$ 150,00</span>

            <h5>Serviço</h5>
            <span>2x Corte cabelo</span>
            <br />
            <hr />
            <span>Total serviço: R$ 80,00</span>
            <div id="totalContainer">
              <span id="total">Total: R$ 230,00</span>
            </div>
          </div>
        </li>
        <li>
          <div id="collapsibleHeader" className="collapsible-header">
            Icaro
          </div>
          <div id="collapsibleBody" className="collapsible-body">
            <h5>Produtos</h5>
            <span>3x Shampoo</span>
            <br />
            <span>1x Condicionador</span>
            <br />
            <span>2x Desodorante</span>
            <hr />
            <span>Total produto: R$ 100,00</span>

            <h5>Serviço</h5>
            <span>2x Corte cabelo</span>
            <br />
            <span>2x Barba</span>
            <hr />
            <span>Total serviço: R$ 100,00</span>
            <div id="totalContainer">
              <span id="total">Total: R$ 200,00</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
