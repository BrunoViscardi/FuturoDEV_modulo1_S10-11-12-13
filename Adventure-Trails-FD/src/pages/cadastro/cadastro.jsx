import "./cadastro.css"
import { useEffect } from "react";
import CButton from '../../components/atoms/button/Cbutton.jsx'


function Cadastro() {

    //Para adicionar a cor verde só ao body dessa página
    useEffect(() => {
        document.body.classList.add('specific-page'); // adiciona a classe 'specific-page' ao body

        return () => {
            document.body.classList.remove('specific-page'); // remove a classe 'specific-page' quando o componente for desmontado
        };
    }, []);




    const estados = [
        'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
        'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
        'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
    ];

    return (
        <div className="cadastroContainer">
            <h1>Cadastro de nova trilha</h1>
            <form action="">
                <div className="campo">
                    <p>Nome da trilha</p>
                    <input type="text" placeholder="digite o nome da trilha" />
                </div>

                <div className="campoColuna">
                    <div className="campo">
                        <p>Duração estimada (min)</p>
                        <input type="text" placeholder="digite a duração em minutos" />
                    </div>

                    <div className="campo">
                        <p>Trajeto (km)</p>
                        <input type="text" placeholder="digite a distância em kilômetros" />
                    </div>

                    <div className="campo">
                        <p>Cidade</p>
                        <input type="text" placeholder="digite o nome da cidade" />
                    </div>

                    <div className="campo">
                        <p>Estado</p>
                        <select>
                            <option value="" defaultValue disabled>Selecione um estado</option>
                            {estados.map((estado, index) => (
                                <option key={index} value={estado}>
                                    {estado}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="campo">
                        <p>Tipo de trilha</p>
                        <select>
                            <option value="caminhada / trekking">caminhada / trekking</option>
                            <option value="ciclismo">ciclismo</option>
                        </select>
                    </div>

                    <div className="campo">
                        <p>Dificuldade</p>
                        <select>
                            <option value="" defaultValue disabled>Selecione a dificuldade</option>
                            <option value="iniciante">iniciante</option>
                            <option value="moderado">moderado</option>
                            <option value="dificil">difícil</option>
                        </select>
                    </div>
                </div>

                <div className="campo">
                    <p>Nome completo usuário</p>
                    <input type="text" placeholder="seu nome completo" />
                </div>

                <div className="campo">
                    <p>URL imagem trilha</p>
                    <input type="text" placeholder="insira um link de uma imagem da trilha" />
                </div>



                <div className="formAcoes">
                    <CButton estilo="Contained">Cadastrar</CButton>
                    <CButton estilo="Outlined">Voltar</CButton>
                </div>



            </form>

        </div>
    )
}

export default Cadastro