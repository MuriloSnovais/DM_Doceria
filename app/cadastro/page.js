'use client'

import "./cadastro.css"

function Cadastro() {
    return (  
        <div className="cadastro">

            <h1>Cadastro</h1>

            <form>

                <label>Nome <br/>
                <input required placeholder="Digite seu nome" />
                </label> <br/>
        
                <label>Email <br/>
                <input required placeholder="Digite seu email" />
                </label> <br/>
        
                <label>Senha <br/>
                <input required placeholder="Digite sua senha" />
                </label>
        
                <br/>
        
                <button>Cadastrar</button>

            </form>

            <p>
                <a href="/login">Voltar</a>
            </p>

        </div>
    );
}

export default Cadastro;