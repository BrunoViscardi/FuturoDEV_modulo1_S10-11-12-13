function CardTrilha({dadosTrilha}){    

    return(
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

export default CardTrilha