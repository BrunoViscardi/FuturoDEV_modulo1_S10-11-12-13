import "./cadastro.css"
import { useEffect } from "react";
import CButton from '../../components/atoms/button/Cbutton.jsx'
import { useForm } from "react-hook-form"


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


    //desdestruturação para usar a função register da biblioteca
    const { register } = useForm();










    return (
        <div className="cadastroContainer">
            <h1>Cadastro de nova trilha</h1>
            <form>
                <div className="campo">
                    <label htmlFor="nomeTrilha">Nome da trilha</label>
                    <input type="text" placeholder="digite o nome da trilha"
                        {...register("nomeTrilha", {
                            required: "Este campo é obrigatório",
                            maxLength: { value: 100, message: "Máximo de 100 caracteres permitidos" }
                        })}
                    />
                </div>

                <div className="campoColuna">
                    <div className="campo">
                        <label htmlFor="duracao">Duração estimada (min)</label>
                        <input type="number" step={5} placeholder="digite a duração em minutos"
                            {...register("duracao", {
                                required: "Este campo é obrigatório"
                            })} />
                    </div>

                    <div className="campo">
                        <label htmlFor="trajeto">Trajeto (km)</label>
                        <input type="number" placeholder="digite a distância em kilômetros"
                            {...register("trajeto", {
                                required: "Este campo é obrigatório"
                            })}
                        />
                    </div>

                    <div className="campo">
                        <label htmlFor="cidade">Cidade</label>
                        <input type="text" placeholder="digite o nome da cidade"
                            {...register("cidade", {
                                required: "Este campo é obrigatório",
                                maxLength: { value: 60, message: "Máximo de 60 caracteres permitidos" }
                            })} />
                    </div>

                    <div className="campo">
                        <label htmlFor="estado">Estado</label>
                        <select {...register("estado", {
                            required: "Este campo é obrigatório",
                            validate: {
                                validValue: (value) => value !== "",
                                message: "Por favor, selecione um estado válido"
                            }
                        })}>
                            <option value="" defaultValue>Selecione um estado</option>
                            {estados.map((estado, index) => (
                                <option key={index} value={estado}>
                                    {estado}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="campo">
                        <label htmlFor="tipo">Tipo de trilha</label>
                        <select {...register("tipo", {
                            required: "Este campo é obrigatório",
                            validate: {
                                validValue: (value) => value !== "",
                                message: "Por favor, selecione um tipo válido"
                            }
                        })}>
                            <option value="" defaultValue>Selecione o tipo de trilha</option>
                            <option value="caminhada / trekking">caminhada / trekking</option>
                            <option value="ciclismo">ciclismo</option>
                        </select>
                    </div>

                    <div className="campo">
                        <label htmlFor="dificuldade">Dificuldade</label>
                        <select {...register("dificuldade", {
                            required: "Este campo é obrigatório",
                            validate: {
                                validValue: (value) => value !== "",
                                message: "Por favor, selecione uma dificuldade válida"
                            }
                        })}>
                            <option value="" defaultValue>Selecione a dificuldade</option>
                            <option value="iniciante">iniciante</option>
                            <option value="moderado">moderado</option>
                            <option value="dificil">difícil</option>
                        </select>
                    </div>
                </div>

                <div className="campo">
                    <label htmlFor="nomeUsuario">Nome completo usuário</label>
                    <input type="text" placeholder="seu nome completo"
                        {...register("nomeUsuario", {
                            required: "Este campo é obrigatório",
                            maxLength: { value: 60, message: "Máximo de 60 caracteres permitidos" }
                        })} />
                </div>

                <div className="campo">
                    <label htmlFor="urlImagem">URL imagem trilha</label>
                    <input type="text" placeholder="insira um link de uma imagem da trilha"
                        {...register("urlImagem")} />
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