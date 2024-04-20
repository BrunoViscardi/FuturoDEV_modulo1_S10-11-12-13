import CardTrilha from "../../components/cardTrilha/index.jsx";
import useFetch from "../../Hooks/useFetch.js";
import './trilhas.css'


function Trilhas() {
    const [data, isLoading] = useFetch("/dadosTrilha.json");


    return (
        <>

            <div className="Retangulo"> <div></div></div>

            <div className="cardContainer">
                <div className="titulo-cardContainer">
                    Explore trilhas incríveis
                </div>


                {Array.isArray(data) && !isLoading ? (
                    data.map((trilha, index) => (
                        <CardTrilha dadosTrilha={trilha} key={index} />))
                ) : (<span> Não há dados disponíveis</span>)
                }
            </div>
        </>
    )
}

export default Trilhas