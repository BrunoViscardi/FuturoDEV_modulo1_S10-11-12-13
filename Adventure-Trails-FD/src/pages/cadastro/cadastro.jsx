import "./cadastro.css"
import { useContext, useEffect } from "react";
import CButton from '../../components/atoms/button/Cbutton.jsx'
import { useForm } from "react-hook-form"
import { TrilhasContext } from "../../context/TrilhasContext.jsx";
import { useNavigate } from 'react-router-dom';


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


    //desdestruturação para usar a função register,  da biblioteca
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { addTrail } = useContext(TrilhasContext)


    function sendForm(formValue) {
        console.log(formValue)
        addTrail(formValue)
    }

    //Função voltar na navegação
    const navigate = useNavigate();
    function handleVoltar() {
        navigate(-1); // Navega para a página anterior no histórico
      }







    return (
        <div className="cadastroContainer">
            <h1>Cadastro de nova trilha</h1>
            <form onSubmit={handleSubmit(sendForm)}>
                <div className="campo">
                    <label htmlFor="nomeTrilha">Nome da trilha</label>
                    <input type="text" placeholder="digite o nome da trilha"
                        {...register("nomeTrilha", {
                            required: "Este campo é obrigatório",
                            maxLength: { value: 100, message: "Máximo de 100 caracteres permitidos" }
                        })}
                    />
                    {errors?.nomeTrilha && <p>{errors.nomeTrilha?.message}</p>}
                </div>

                <div className="campoColuna">
                    <div className="campo">
                        <label htmlFor="duracao">Duração estimada (min)</label>
                        <input type="number" step={5} placeholder="digite a duração em minutos"
                            {...register("duracao", {
                                required: "Este campo é obrigatório",
                                setValueAs: (value) => Number(value)
                            })} />
                        {errors?.duracao && <p>{errors.duracao?.message}</p>}
                    </div>

                    <div className="campo">
                        <label htmlFor="trajeto">Trajeto (km)</label>
                        <input type="number" placeholder="digite a distância em kilômetros"
                            {...register("trajeto", {
                                required: "Este campo é obrigatório",
                                setValueAs: (value) => Number(value)
                            })} />
                        {errors?.trajeto && <p>{errors.trajeto?.message}</p>}
                    </div>

                    <div className="campo">
                        <label htmlFor="cidade">Cidade</label>
                        <input type="text" placeholder="digite o nome da cidade"
                            {...register("cidade", {
                                required: "Este campo é obrigatório",
                                maxLength: { value: 60, message: "Máximo de 60 caracteres permitidos" }
                            })} />
                        {errors?.cidade && <p>{errors.cidade?.message}</p>}
                    </div>

                    <div className="campo">
                        <label htmlFor="estado">Estado</label>
                        <select {...register("estado", {
                            required: "Este campo é obrigatório"
                        })}>
                            <option value="" defaultValue>Selecione um estado</option>
                            {estados.map((estado, index) => (
                                <option key={index} value={estado}>
                                    {estado}
                                </option>
                            ))}
                        </select>
                        {errors?.estado && <p>{errors.estado?.message}</p>}
                    </div>

                    <div className="campo">
                        <label htmlFor="tipo">Tipo de trilha</label>
                        <select {...register("tipo", {
                            required: "Este campo é obrigatório"
                        })}>
                            <option value="" defaultValue>Selecione o tipo de trilha</option>
                            <option value="caminhada / trekking">caminhada / trekking</option>
                            <option value="ciclismo">ciclismo</option>
                        </select>
                        {errors?.tipo && <p>{errors.tipo?.message}</p>}
                    </div>

                    <div className="campo">
                        <label htmlFor="dificuldade">Dificuldade</label>
                        <select {...register("dificuldade", {
                            required: "Este campo é obrigatório"
                        })}>
                            <option value="" defaultValue>Selecione a dificuldade</option>
                            <option value="iniciante">iniciante</option>
                            <option value="moderado">moderado</option>
                            <option value="dificil">difícil</option>
                        </select>
                        {errors?.dificuldade && <p>{errors.dificuldade?.message}</p>}
                    </div>
                </div>

                <div className="campo">
                    <label htmlFor="nomeUsuario">Nome completo usuário</label>
                    <input type="text" placeholder="seu nome completo"
                        {...register("nomeUsuario", {
                            required: "Este campo é obrigatório",
                            maxLength: { value: 60, message: "Máximo de 60 caracteres permitidos" }
                        })} />
                    {errors?.nomeUsuario && <p>{errors.nomeUsuario?.message}</p>}
                </div>

                <div className="campo">
                    <label htmlFor="urlImagem">URL imagem trilha</label>
                    <input type="text" placeholder="insira um link de uma imagem da trilha"
                        {...register("urlImagem")} />
                </div>



                <div className="formAcoes">
                    <CButton type="submit" estilo="Contained">Cadastrar</CButton>
                    <CButton estilo="Outlined" onClick={handleVoltar} >Voltar</CButton>
                </div>



            </form>

        </div>
    )
}

export default Cadastro