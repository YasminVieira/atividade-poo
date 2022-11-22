/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";


type props = {
    tema: string;
};

export default class HistoricoShampoo extends Component<props> {

    componentDidMount() {
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);

        var elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);
    }

    render() {
        return (
            <ul>
                <li>
                    <div id="collapsibleBody" >
                        <span>Icaro 3x</span><br />
                        <span>Yasmin 6x</span><br />
                        <hr />
                        <span>Total vendido: 9</span><br />
                    </div>
                </li>
            </ul>
        );
    }
}
