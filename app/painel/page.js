'use client'

import { redirect } from "next/navigation";
import "./painel.css"

function Painel() {
    return ( 
        <div>

        
            <div className="cabecalho">

                <h1>Página do Administrador</h1>

                
            
                <ul>
                    <strong>
                    <li><button onClick={()=> redirect("./login")}>Home</button></li>
                    <li><button onClick={()=> redirect("./cadastro")}>Pedidos</button></li>
                    <li><button onClick={()=> redirect("./pagamento")}>Dashboard</button></li>
                    </strong>
                </ul>

            </div>

            <div className="">
                    <img src="https://placehold.co/100x100" alt="imagem de perfil"></img><br/>
                    <button onClick={()=> redirect("./carrinho")}>Perfil</button>

                </div>

            <div className="prioridades">

                <div className="prioridade">
                    <h3>Prioridade</h3>
                    <p>Pedido/data</p>
                    <img src="https://placehold.co/100x100"></img>
                </div>
                <div className="prioridade">
                    <h3>Prioridade</h3>
                    <p>Pedido/data</p>
                    <img src="https://placehold.co/100x100"></img>
                </div>
                <div className="prioridade">
                    <h3>Prioridade</h3>
                    <p>Pedido/data</p>
                    <img src="https://placehold.co/100x100"></img>
                </div>
                <div className="prioridade">
                    <h3>Prioridade</h3>
                    <p>Pedido/data</p>
                    <img src="https://placehold.co/100x100"></img>
                </div>
                <div className="prioridade">
                    <h3>Prioridade</h3>
                    <p>Pedido/data</p>
                    <img src="https://placehold.co/100x100"></img>
                </div>
                <div className="prioridade">
                    <h3>Prioridade</h3>
                    <p>Pedido/data</p>
                    <img src="https://placehold.co/100x100"></img>
                </div>

                <div className="prioridade">
                    <h3>Prioridade</h3>
                    <p>Pedido/data</p>
                    <img src="https://placehold.co/100x100"></img>
                </div>

                <div className="prioridade">
                    <h3>Prioridade</h3>
                    <p>Pedido/data</p>
                    <img src="https://placehold.co/100x100"></img>
                </div>

                <div className="prioridade">
                    <h3>Prioridade</h3>
                    <p>Pedido/data</p>
                    <img src="https://placehold.co/100x100"></img>
                </div>
                
                <div className="prioridade">
                    <h3>Prioridade</h3>
                    <p>Pedido/data</p>
                    <img src="https://placehold.co/100x100"></img>
                </div>
            </div>
        </div>

        
    
     );
}

export default Painel;
