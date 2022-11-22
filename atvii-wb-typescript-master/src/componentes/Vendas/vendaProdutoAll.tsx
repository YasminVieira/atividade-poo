import { Component } from "react";

type props = {
    tema: string
}

export default class VendaProdutoAll extends Component<props>{
    componentDidMount(): void {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }

    render() {
        return (
            <>
                <div className="row">
                    <form className="col s12">
                        <div id="vendaModalLine" className="row">
                            <div className="input-field col s6">
                                <select id="option">
                                    <option value="">Escolha um Produto</option>
                                    <option value="1">Desodorante</option>
                                    <option value="2">Shampoo</option>
                                    <option value="3">Condicionador</option>
                                </select>
                                <label htmlFor="option">Produto</label>
                            </div>
                            <div className="input-field col s6">
                                <select id="option">
                                    <option value="">Escolha um cliente</option>
                                    <option value="1">Icaro</option>
                                    <option value="2">Yasmin</option>
                                </select>
                                <label htmlFor="option">Cliente</label>
                            </div>
                        </div>
                        <h6>Quantidade</h6>
                        <div id="vendaModalLine" className="row">
                            <div className="input-field col s12">
                                <input id="bairro" type="text" className="validate" />
                                <label htmlFor="bairro">Quantidade</label>
                            </div>
                        </div>
                    </form>
                </div >
            </>
        )
    }
}