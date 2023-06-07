import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
 
function Nav() {
    const blank = "_blank";
    
    return (
        <div className="navbar">
            <Link to='/about'>About</Link>
            <Link to='/'>Menu</Link>
            <Link to={'/gallery'}>Gallery</Link>
            <a href="https://www.facebook.com" target={blank} className="facebook">
                <FontAwesomeIcon icon={faFacebookF} /> 
            </a>
            <a href="https://www.instagram.com" target={blank} className="instagram">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>
  )
}

export default Nav

