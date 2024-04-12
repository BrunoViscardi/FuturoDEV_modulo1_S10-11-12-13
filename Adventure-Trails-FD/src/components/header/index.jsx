import "./style.css"
import { Link } from 'react-router-dom';


function Header() {

    return (
        <nav className="NavBar">
            <Link to="/">Adveture Trails FD</Link>
            <div>
                <Link to="/trilhas">Explorar trilhas</Link>
                <Link to="/cadastro">Cadastrar trilhas</Link>
            </div>
        </nav>
    )
}


export default Header