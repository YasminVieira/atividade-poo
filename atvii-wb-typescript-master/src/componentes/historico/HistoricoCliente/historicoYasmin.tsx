import { useEffect } from "react";
import M from "materialize-css";

export default function HistoricoYasmin() {
  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems);

    var elemsModal = document.querySelectorAll(".modal");
    M.Modal.init(elemsModal);
  });

  return (
    <ul>
      <li>
        <div>
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
    </ul>
  );
}
