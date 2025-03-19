'use client'
import Cartao from "./components/Cartao";
import Dinheiro from "./components/Dinheiro";
import Pix from "./components/Pix";
import "./pagamento.css"

function Pagemento() {
    return ( 
        <div className="tela">
            <div className="pagamentos">
                    <ul>
                        <h1>Escolha a forma de pagamento</h1>

                        <Pix/>

                        <Cartao/>

                        <Dinheiro/>
                        
                    </ul>
            </div>
        </div>
    );

}


export default Pagemento;