import CardTrilha from "./components/cardTrilha/index.jsx";
import "./App.css"
import useFetch from "./Hooks/useFetch.js";

function App() {

    const [data, isLoading] = useFetch("/dadosTrilha.json");
    

    if (isLoading || !data) {
        return (        
            <div className="cardContainer">
                Carregando...
            </div>
        )
    }    

    return (        
        <div className="cardContainer">
            <div className="titulo-cardContainer">
                Explore trilhas incríveis
            </div>


            {
                data.map((trilha, index) => (
                <CardTrilha dadosTrilha={trilha} key={index} />
            ))
            }
        </div>
    )
}

export default App