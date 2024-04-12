import CardTrilha from "../../components/cardTrilha/index.jsx";
import useFetch from "../../Hooks/useFetch.js";
import './trilhas.css'


function Trilhas(){
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
        


        <div className="Retangulo"> <div></div></div>
        
        



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

export default Trilhas