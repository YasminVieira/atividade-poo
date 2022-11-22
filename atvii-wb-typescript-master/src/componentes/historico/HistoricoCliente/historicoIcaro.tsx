import { Component } from "react";

type props = {
  tema: string;
};

export default class HistoricoIcaro extends Component<props> {
  componentDidMount() {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems);

    var elemsModal = document.querySelectorAll(".modal");
    M.Modal.init(elemsModal);
  }

  render() {
    return (
      <ul>
        <li>
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
    );
  }
}
