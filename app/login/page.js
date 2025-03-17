function Login() {
    return ( 
        <div class="login">

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
                <a href="api_cadastro.html" >Cadastre-se</a>
            </p>

        </div>
    );
}

export default Login;