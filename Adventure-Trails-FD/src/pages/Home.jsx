import Header from "../components/header";
import './home.css'


function Home() {

    return (
        <>
            <Header />

            <div className="RetanguloHome">
                <div className="RetanguloContainer">
                    <div className="RetanguloConteudo">
                        <h1> Que tal aproveitar um tempo <br/>
                            com a natureza?</h1>                        
                        <p> Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas aventuras e inspire-se com as experiências de outros aventureiros. Prepare-se para explorar novos horizontes e se conectar com a natureza através do Adventure Trails!</p>
                        <button> Explorar Trilhas </button>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Home