import CardTrilha from "./components/cardTrilha.jsx";

function App() {

    const listaTrilhas = [
        {
            nomeTrilha: "Trilha da Costa da Lagoa",
            cidade: "Florianópolis",
            estado: "SC",
            duracao: "120",
            trajeto: "4",
            dificuldade: "iniciante",
            tipo: "caminhada / trekking",
            nomeUsuario: "Bruno Viscardi",
            urlImagem: "https://images.pexels.com/photos/17951453/pexels-photo-17951453/free-photo-of-homem-caminhando-andando-floresta.jpeg"
        }
    ]

    return (
        <>

            {
                listaTrilhas.map((trilha, index) => (
                    <CardTrilha dadosTrilha={trilha} key={index} />

                ))
            }

        </>
    )
}

export default App