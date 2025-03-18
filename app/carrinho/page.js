'use client'
import { useState } from "react";
import "./carrinho.css"
import Produto from "./components/Produto";
import { redirect } from "next/navigation";

function Carrinho() {

    const [carrinho, set_carrinho] = useState(["","",""])
    let [itens_carrinho, set_itens_carrinho] = useState(0)

    return ( 
    <div>
        <div className="MenuSuperior">
            <button className="voltar"><i className="fa-solid fa-arrow-left"></i></button>
        </div>

        <div className="CaixaProdutos">
            <ul>
                <Produto nome="Brigadeiro" quantidade="2"/>
                <Produto nome="Cookie" quantidade="7"/> 
                <Produto nome="Bolo de Pote" quantidade="4"/>
            </ul>

            <div className="BarraLateral"></div>

        </div>  

        <div className="FinalizarCompra">
            <button onClick={()=> redirect("./pagamento", )} className="btn-finalizar">
                Finalizar Compra
            </button>
        </div>

        {/* Botão para no Futuro adicionar Produtos como teste */}
        <div className="FinalizarCompra">
            <button onClick={()=> set_itens_carrinho(itens_carrinho+=1)} className="btn-finalizar">
                Adicionar Produto
            </button>
        </div>
    </div>

    );
}

export default Carrinho;