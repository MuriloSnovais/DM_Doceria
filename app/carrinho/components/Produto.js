function Produto(attr) {
    return ( 
        <div>
            <p>{attr.nome}</p>
            <p>{attr.quantidade}X</p>
        </div>
    );
}

export default Produto;