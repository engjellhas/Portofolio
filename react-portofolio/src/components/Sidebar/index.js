import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import Cv from '../../assets/images/Engjell-Hasani-CV.pdf';


const Sidebar = () => {
  const [showNav, setShowNav] = useState (false);

  return (
    <div className="nav-bar">
      <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="skill-link"
          to="/skills"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />

          <a href={Cv} download>CV</a>

      </nav>

        <ul>
            <li>
                <a target="_blank" 
                rel="noreferrer"
                 href="https://www.facebook.com/engjellhas">
                    <FontAwesomeIcon icon={faFacebook}  color="#4d4d4e"/>    
                </a>
            </li>
            <li>
                <a target="_blank" 
                rel="noreferrer"
                 href="https://github.com/engjellhas">
                    <FontAwesomeIcon icon={faGithub}  color="#4d4d4e"/>    
                </a>
            </li>

            <li>
                <a target="_blank" 
                rel="noreferrer"
                 href="https://www.instagram.com/engjellhas/">
                    <FontAwesomeIcon icon={faInstagram}  color="#4d4d4e"/>    
                </a>
            </li>
            
        </ul>

        <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
)}

export default Sidebar 