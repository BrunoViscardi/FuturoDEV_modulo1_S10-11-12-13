import CardTrilha from "./components/cardTrilha.jsx";

function App() {

    const listaTrilhas = [
        {
            nomeTrilha: "Thilha da Costa da Lagoa",
            cidade: "Florianópolis",
            estado: "SC",
            duracao: 120,
            trajeto: 4,
            dificuldade: "iniciante",
            nomeUsuario: "caminhada",
            urlImagem: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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