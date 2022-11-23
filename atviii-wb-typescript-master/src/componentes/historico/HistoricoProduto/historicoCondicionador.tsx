import { useEffect } from "react";
import M from "materialize-css";

export default function HistoricoCondicionador() {
  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems);

    var elemsModal = document.querySelectorAll(".modal");
    M.Modal.init(elemsModal);
  });

  return (
    <ul>
      <li>
        <div id="collapsibleBody">
          <span>Icaro 1x</span>
          <br />
          <span>Yasmin 3x</span>
          <br />
          <hr />
          <span>Total vendido: 4</span>
          <br />
        </div>
      </li>
    </ul>
  );
}
