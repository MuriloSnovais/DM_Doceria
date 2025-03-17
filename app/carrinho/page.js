
import "./carrinho.css"

function Carrinho() {
    return ( 
    <div>
        <div className="MenuSuperior">
            <button className="voltar"><i className="fa-solid fa-arrow-left"></i></button>
        </div>

        <div className="CaixaProdutos">
            <ul>
                <li>
                    <div className="Produtos">
                        <p className="Quantidade">2x</p>
                        <p className="NomeProduto">PRODUTO</p>
                    </div>
                </li>
                <li>
                    <div className="Produtos">
                        <p className="Quantidade">2x</p>
                        <p className="NomeProduto">PRODUTO</p>
                    </div>
                </li>
                <li>
                    <div className="Produtos">
                        <p className="Quantidade">2x</p>
                        <p className="NomeProduto">PRODUTO</p>
                    </div>
                </li>
            </ul>

            <div className="BarraLateral"></div>
            
        </div>  

        <div className="FinalizarCompra">
            <button className="btn-finalizar">
                Finalizar Compra
            </button>
        </div>
    </div>

    );
}

export default Carrinho;