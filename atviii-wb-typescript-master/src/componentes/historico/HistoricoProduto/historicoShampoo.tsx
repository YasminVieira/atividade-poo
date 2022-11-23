import { useEffect } from "react";
import M from "materialize-css";

export default function HistoricoShampoo() {
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
          <span>Icaro 3x</span>
          <br />
          <span>Yasmin 6x</span>
          <br />
          <hr />
          <span>Total vendido: 9</span>
          <br />
        </div>
      </li>
    </ul>
  );
}
