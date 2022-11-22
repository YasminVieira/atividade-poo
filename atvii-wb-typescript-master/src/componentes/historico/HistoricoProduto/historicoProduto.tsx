/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";


type props = {
    tema: string;
};

export default class HistoricoProduto extends Component<props> {

    componentDidMount() {
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);

        var elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);
    }

    render() {
        return (
            <div id="historyCollapsibleContainer">
                <ul className="collapsible">
                    <li>
                        <div id="collapsibleHeader" className="collapsible-header">
                            Condicionador
                        </div>
                        <div id="collapsibleBody" className="collapsible-body">
                            <span>Icaro 2x</span><br />
                            <span>Yasmin 3x</span><br />
                            <hr />
                            <span>Total vendido: 5</span><br />
                        </div>
                    </li>
                    <li>
                        <div id="collapsibleHeader" className="collapsible-header">
                            Desodorante
                        </div>
                        <div id="collapsibleBody" className="collapsible-body">
                            <span>Icaro 3x</span><br />
                            <hr />
                            <span>Total vendido: 3</span><br />
                        </div>
                    </li>
                    <li>
                        <div id="collapsibleHeader" className="collapsible-header">
                            Shampoo
                        </div>
                        <div id="collapsibleBody" className="collapsible-body">
                            <span>Icaro 2x</span><br />
                            <span>Yasmin 4x</span><br />
                            <hr />
                            <span>Total vendido: 6</span><br />
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
