
import * as PropTypes from "prop-types"

function CardTrilha({ dadosTrilha }) {

    return (
        <>
            <img width={200} src={dadosTrilha.urlImagem} alt="imagem trilha" />
            <h1>{dadosTrilha.nomeTrilha} - {dadosTrilha.cidade} / {dadosTrilha.estado}</h1>
            <span>Por: {dadosTrilha.nomeUsuario}</span>
            <span>Duração: {dadosTrilha.duracao} min </span>
            <span>Trajeto: {dadosTrilha.trajeto} km</span>
            <span>{dadosTrilha.dificuldade}</span>
        </>
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
        tipo: PropTypes.oneOf(['caminhada / trekking','ciclismo']),
        nomeUsuario: PropTypes.string.isRequired,
        urlImagem: PropTypes.string,
    })
}



export default CardTrilha