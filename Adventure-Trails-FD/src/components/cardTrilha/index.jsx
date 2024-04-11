import * as PropTypes from "prop-types"
import "./style.css"

function CardTrilha({ dadosTrilha }) {

    return (
        <div className="card-Conteudo">
            <div className="trilhaImagem">
                <img src={dadosTrilha.urlImagem} alt="imagem trilha" />
            </div>
            <div className="CardArea">
                <span className="titulo">{dadosTrilha.nomeTrilha} - {dadosTrilha.cidade} / {dadosTrilha.estado}</span>
                <div className="divider"></div>
                <span className="usuario">Por: {dadosTrilha.nomeUsuario}</span>
                <div className="features">
                <span>Duração: {dadosTrilha.duracao} min </span>
                <span>Trajeto: {dadosTrilha.trajeto} km</span>
                </div>
                
                <span className="dificuldade">{dadosTrilha.dificuldade}</span>
            </div>
        </div>
    )

}

CardTrilha.propTypes = {
    dadosTrilha: PropTypes.exact({
        nomeTrilha: PropTypes.string.isRequired,
        cidade: PropTypes.string.isRequired,
        estado: PropTypes.string.isRequired,
        duracao: PropTypes.number,
        trajeto: PropTypes.number,
        dificuldade: PropTypes.string,
        tipo: PropTypes.oneOf(['caminhada / trekking', 'ciclismo']),
        nomeUsuario: PropTypes.string.isRequired,
        urlImagem: PropTypes.string,
    })
}



export default CardTrilha