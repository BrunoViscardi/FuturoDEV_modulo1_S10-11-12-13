import './home.css'
import CButton from '../../components/atoms/button/Cbutton.jsx'
import { Link } from 'react-router-dom';


function Home() {

    return (
        <>


            <section className="RetanguloHome">
                <div className="RetanguloContainer">
                    <div className="RetanguloConteudo">
                        <h1> Que tal aproveitar um tempo <br />
                            com a natureza?</h1>
                        <p> Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas aventuras e inspire-se com as experiências de outros aventureiros. Prepare-se para explorar novos horizontes e se conectar com a natureza através do Adventure Trails!</p>
                        <Link to="/trilhas">
                            <CButton estilo="Contained">Explore trilhas</CButton>
                        </Link>
                    </div>
                </div>
            </section>


            <section className="explorarContainer">
                <h1 className="tituloSection"> Explore trilhas incríveis </h1>
                <p className="textoSection"> O "Adventure Trails FD" é seu portal para explorar e compartilhar as melhores trilhas para trekking e ciclismo ao redor do mundo. Descubra rotas deslumbrantes, desde caminhos tranquilos por florestas exuberantes até trilhas desafiadoras em montanhas majestosas. Encontre informações detalhadas sobre cada trilha, incluindo distância, dificuldade, pontos de interesse naturais e dicas úteis para uma experiência eco-friendly.</p>
                <div>
                    <Link to="/trilhas">
                        <CButton estilo="Contained">Explore trilhas</CButton>
                    </Link>
                </div>
            </section>


            <section className="cadastrarContainer">
                <div>
                    <h1 className="tituloSection"> Compartilhe fotos, dicas e localização das suas trilhas favoritas</h1>
                    <Link to="/cadastro">
                        <CButton estilo="Contained">Cadastrar nova trilha</CButton>
                    </Link>
                </div>
                <img src="/footpath.jpg" alt="caminho na floresta" />
            </section>


        </>
    )
}

export default Home