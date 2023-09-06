
function Cabecalho() {
    return (
        <div className="body">
            <div className="spotify">
                <h1>Spotify</h1>
            </div>
            <div className="login">
                <h1>Entrar no Spotify</h1>
                <button id="btnIcon">Continuar com o Google</button>
                <p> </p>
                <button id="btnIcon">Continuar com o Facebook</button>
                <p> </p>
                <button id="btnIcon">Continuar com a Apple</button>
                <p> </p>
                <button id="btnIcon">Continuar com um número de telefone</button>
               
            </div>

            <div >

                <p id="linha">______________________________________________________________________</p>

            </div>


            <div className="login2">
                <label >
                    <h4>E-mail ou nome do usuário:
                    </h4><input id="caixa1"
                        type="text" name="E-mail ou nome do usuário"
                        placeholder="E-mail ou nome do usuário" />
                </label>
            </div>
            <div className="login3">
                <label id="olho"><h4>
                    Senha: </h4><input id="caixa2" type="password"
                        name="senha" placeholder="Senha" />
                </label>
                <p> </p>
                <a>Lembrar de mim!!!</a>
            </div>
            <p> </p>
            <div className="bntEnviar">
                <button id="btnCor">
                    Enviar
                </button>
            </div>
            <div className="text">
                <p id="marcando">Esqueceu sua senha?</p>

            </div>

            <div >
                <p>______________________________________________________________________</p>
            </div>

            <div className="text2">
                <p>Não tem uma conta? </p> <a ><p id="sublinhar"> Inscrever-se no Spotify</p></a>
            </div>
            <div>
                <a>By: Rafael Bravim</a>
            </div>
        </div>
    )
}

export default Cabecalho