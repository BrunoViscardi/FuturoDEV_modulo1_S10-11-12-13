import CardTrilha from "./components/cardTrilha/index.jsx";
import "./App.css"
import useFetch from "./Hooks/useFetch.js";

function App() {

    const [data, isLoading] = useFetch("/dadosTrilha.json");
    

    return (
        <div className="cardContainer">
            {
                data.map((trilha, index) => (
                <CardTrilha dadosTrilha={trilha} key={index} />
            ))
            }
        </div>
    )
}

export default App