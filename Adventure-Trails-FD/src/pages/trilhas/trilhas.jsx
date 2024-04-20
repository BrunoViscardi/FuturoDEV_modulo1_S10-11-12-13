import CardTrilha from "../../components/cardTrilha/index.jsx";
import './trilhas.css';
import { useContext } from "react";
import {TrilhasContext} from "../../context/TrilhasContext.jsx";


function Trilhas() {

    const {trilhas, isLoading}= useContext(TrilhasContext);
    


    return (
        <>

            <div className="Retangulo"> <div></div></div>

            <div className="cardContainer">
                <div className="titulo-cardContainer">
                    Explore trilhas incríveis
                </div>


                {Array.isArray(trilhas) && !isLoading ? (
                    trilhas.map((trilha, index) => (
                        <CardTrilha dadosTrilha={trilha} key={index} />))
                ) : (<span> Não há dados disponíveis</span>)
                }


            </div>
        </>
    )
}

export default Trilhas