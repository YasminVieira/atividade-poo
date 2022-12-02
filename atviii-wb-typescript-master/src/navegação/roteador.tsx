import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "../componentes/formulários/formularioCadastroCliente";
import ListaCliente from "../componentes/Lista/listaCliente";
import ListaProduto from "../componentes/Lista/listaProdutos";
import ListaServico from "../componentes/Lista/listaServico";
import Listagem from "../componentes/Lista/listagem";
import Home from "../home";

export default function Roteador(){
    const [tela, setTela] = useState("Serviços");

    const seletorView = (valor: any, e: any) => {
      e.preventDefault();
      setTela(valor);
    };
  
    const construirView = () => {
        if (tela === "Home") {
            return (
              <>
                <BarraNavegacao
                  seletorView={seletorView}
                  tema="#ffb74d orange lighten-2"
                  botoes={["Home", "Clientes", "Produtos", "Serviços", "Listagem"]}
                />
                <Home />
              </>
            );
          } else if (tela === "Clientes") {
        return (
          <>
            <BarraNavegacao
              seletorView={seletorView}
              tema="#ffb74d orange lighten-2"
              botoes={["Home", "Clientes", "Produtos", "Serviços", "Listagem"]}
            />
            <ListaCliente />
          </>
        );
      } else if (tela === "Produtos") {
        return (
          <>
            <BarraNavegacao
              seletorView={seletorView}
              tema="#ffb74d orange lighten-2"
              botoes={["Home", "Clientes", "Produtos", "Serviços", "Listagem"]}
            />
            <ListaProduto />
          </>
        );
      } else if (tela === "Serviços") {
        return (
          <>
            <BarraNavegacao
              seletorView={seletorView}
              tema="#ffb74d orange lighten-2"
              botoes={["Home", "Clientes", "Produtos", "Serviços", "Listagem"]}
            />
            <ListaServico />
          </>
        );
      } else if (tela === "Listagem") {
        return (
          <>
            <BarraNavegacao
              seletorView={seletorView}
              tema="##ffb74d orange lighten-2"
              botoes={["Home", "Clientes", "Produtos", "Serviços", "Listagem"]}
            />
            <Listagem />
          </>
        );
      } 
    };
  
    return construirView();
}