import { useEffect } from "react";
import M from "materialize-css";

export default function HistoricoServico() {
  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems);

    var elemsModal = document.querySelectorAll(".modal");
    M.Modal.init(elemsModal);
  });

  return (
    <div id="historyCollapsibleContainer">
      <ul className="collapsible">
        <li>
          <div id="collapsibleHeader" className="collapsible-header">
            Corte de Cabelo
          </div>
          <div id="collapsibleBody" className="collapsible-body">
            <span>Yasmin 2x</span>
            <br />
            <hr />
            <span>Total realizados: 2</span>
            <br />
          </div>
        </li>
        <li>
          <div id="collapsibleHeader" className="collapsible-header">
            Barba
          </div>
          <div id="collapsibleBody" className="collapsible-body">
            <span>Icaro 2x</span>
            <br />
            <hr />
            <span>Total realizados: 2</span>
            <br />
          </div>
        </li>
      </ul>
    </div>
  );
}
