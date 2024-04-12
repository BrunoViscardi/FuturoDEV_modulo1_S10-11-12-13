import Header from "../components/header";
import './home.css'
import CButton from '../components/atoms/button/Cbutton.jsx'
import { Link } from 'react-router-dom';


function Home() {

    return (
        <>
            <Header />

            <div className="RetanguloHome">
                <div className="RetanguloContainer">
                    <div className="RetanguloConteudo">
                        <h1> Que tal aproveitar um tempo <br />
                            com a natureza?</h1>
                        <p> Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas aventuras e inspire-se com as experiências de outros aventureiros. Prepare-se para explorar novos horizontes e se conectar com a natureza através do Adventure Trails!</p>
                        <Link to="/trilhas">
                            <CButton>Explore trilhas</CButton>
                        </Link>
                    </div>
                </div>

            </div>




        </>
    )
}

export default Home