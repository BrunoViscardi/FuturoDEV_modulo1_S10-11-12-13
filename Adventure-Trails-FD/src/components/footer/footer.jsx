import "./footer.css"
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {

    return (
        <nav className="footerContainer">
            <Link to="/">Adveture Trails FD</Link>
            <div>
                <a href=""><GitHubIcon/></a>
                <a href=""><LinkedInIcon/></a>
                <a href=""><InstagramIcon/></a>     
            </div>
        </nav>
    )


}


export default Footer