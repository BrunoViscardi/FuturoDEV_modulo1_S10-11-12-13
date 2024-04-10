import CardTrilha from "./components/cardTrilha/index.jsx";
import "./App.css"

function App() {

    const listaTrilhas = [
        {
            nomeTrilha: "Trilha da Costa da Lagoa",
            cidade: "Florianópolis",
            estado: "SC",
            duracao: 120,
            trajeto: 4,
            dificuldade: "iniciante",
            nomeUsuario: "Bruno Viscardi",
            urlImagem: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }
    ]

    return (
        <div className="cardContainer">
            {
                listaTrilhas.map((trilha, index) => (
                <CardTrilha dadosTrilha={trilha} key={index} />
            ))
            }
        </div>
    )
}

export default App