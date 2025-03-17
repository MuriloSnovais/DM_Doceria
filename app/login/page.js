'use client'

import "./login.css"

function Login() {
    return ( 
        <div className="login">

            <h1>Login</h1>

            <form>
        
                <label>Email <br/>
                <input required placeholder="Digite seu email" />
                </label> <br/>
        
                <label>Senha <br/>
                <input required placeholder="Digite sua senha" /><br/>
                </label>
        
                <button>Entrar</button><br/>
                
            </form>
            
            <p>
                Não possui login?
                <a href="/cadastro"> Cadastre-se</a>
            </p>

        </div>
    );
}

export default Login;