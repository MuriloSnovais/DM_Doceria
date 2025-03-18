function Produto(attr) {
    return ( 
        <div>
            <li className="Produtos">
                <p>{attr.nome}</p>
                <p>{attr.quantidade}X</p>
            </li>
        </div>
    );
}

export default Produto;