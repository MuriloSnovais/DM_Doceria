'use client'

import { redirect } from "next/navigation";
import "./painel.css"

function Painel() {
    return ( 
        <div>

            <div >

                

            </div>




            <h1>Página do Administrador</h1>
            <p className="">
                <img src="https://placehold.co/100x100" alt="imagem de perfil"></img><br/>
                <button onClick={()=> redirect("./carrinho")}>Perfil</button>

            </p>
            
            <ul >
                <strong>
                <li><a href="https://www.youtube.com/" target="_blank">Home</a></li>
                <li><a href="https://chromewebstore.google.com/" target="_blank">Pedidos</a></li>
                <li><a href="https://chrome.google.com/webstore?hl=pt-BR" target="_blank" >Dashboard</a> </li>
                </strong>
            </ul>
        
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
            </div>
        </div>

        
    
     );
}

export default Painel;
