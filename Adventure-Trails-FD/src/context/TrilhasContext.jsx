/**
 * PASSOS PARA CRIAR UM CONTEXTO
 * 
 * 1 - [.] - IMPORTE O createContext DO REACT
 * 2 - [.] - CRIAR A VARIÁVEL DO CONTEXTO
 * 3 - [.] - EXPORTAR A VARIÁVEL DO CONTEXTO
 * 
 * 4 - [.] - CRIE A VARIÁVEL DO PROVIDER
 * 5 - [.] - RECEBA A PROP CHILDREN
 * 6 - [.] - DEFINA OS DADOS GLOBAIS
 * 7 - [.] - CRIE O JSX DO PROVIDER E PASSE OS DADOS GLOBAIS NA PROP value
 * 8 - [] - IMPORTE O PROVIDER NO ARQUIVO APP.JSX
 * 
 * 9 - [] - IMPORTE O CONTEXTO NO ARQUIVO QUE FOR UTILIZAR
 * 10 - [] - IMPORTE O useContext DO REACT
 * 11 - [] - RECEBA OS DADOS GLOBAIS USANDO O useContext
 */

//Passo 1
import { createContext, useState, useEffect } from "react";
import useFetch from "../Hooks/useFetch";



export const TrilhasContext = createContext()


export const TrilhasContextProvider = ({ children }) => {
    const [trilhas, setTrilhas] = useState([]);
    const [dados, isLoading] = useFetch("/dadosTrilha.json");

    useEffect(() => {
        if (!!dados && !isLoading) {
            setTrilhas(dados);
        }
    }, [dados]);

    


    return (
        <TrilhasContext.Provider value={{ trilhas, setTrilhas, isLoading }}>
            {children}
        </TrilhasContext.Provider>
    )

}





