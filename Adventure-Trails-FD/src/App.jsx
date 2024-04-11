import CardTrilha from "./components/cardTrilha/index.jsx";
import "./App.css"
import useFetch from "./Hooks/useFetch.js";
import Header from "./components/header/index.jsx";

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
        <>
        <Header/>
        



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
        </>
    )
}

export default App