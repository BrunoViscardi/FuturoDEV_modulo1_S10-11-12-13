import "./footer.css"
import { Link } from 'react-router-dom';


function Footer() {

    return (
        <nav className="footerContainer">
            <Link to="/">Adveture Trails FD</Link>
            <div>
                <a href="">link1</a>
                <a href="">link2</a>
                <a href="">link3</a>             
            </div>
        </nav>
    )


}


export default Footer