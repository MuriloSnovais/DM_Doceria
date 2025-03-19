'use client'

import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./cadastro_produtos.css"

function CadastroProdutos() {

    const [ nomeProduto, alteraNomeProduto ] = useState("")
    const [ imagem, alteraImagem ] = useState("")
    const [ descricao, alteraDescricao ] = useState("")
    const [ preco, alteraPreco ] = useState("")
    
    function cadastroProdutos(e){
        e.preventDefault()

        const produtoExistente = JSON.parse(localStorage.getItem(nomeProduto))

        if (produtoExistente) {
            toast.error("Este produto já está cadastrado.")
            return
        }else{
            localStorage.setItem("nomeProduto", nomeProduto)
            localStorage.setItem("imagem", imagem)
            localStorage.setItem("descricao", descricao)
            localStorage.setItem("preco", preco)
    
            toast.success("Produto cadastrado com sucesso!")
    
            // alteraNomeProduto("")
            // alteraImagem("")
            // alteraDescricao("")
            // alteraPreco("")
        }


    }

    return (  
        <div className="cadastro_produtos">

            <h1>Cadastro de Produtos</h1>

            <form onSubmit={ (e)=> cadastroProdutos(e) }>


                <label>Nome do produto <br/>
                <input required placeholder="Digite o nome do produto" onChange={ (e)=> alteraNomeProduto(e.target.value) } />
                </label> <br/>
        
                <label>Imagem <br/>
                    <input required placeholder="Coloque o link da imagem do produto" onChange={ (e)=> alteraImagem(e.target.value) } />
                </label>

                <label>Descrição <br/>
                <input required placeholder="Digite a descrição do produto" onChange={ (e)=> alteraDescricao(e.target.value) } />
                </label> <br/>

        
                <label>Preço <br/>
                <input required placeholder="Digite o preço" onChange={ (e)=> alteraPreco(e.target.value) } />
                </label>
        
                <br/>
        
                <button>Adicionar</button>

            </form>

            <ToastContainer />

        </div>
    );
}

export default CadastroProdutos;