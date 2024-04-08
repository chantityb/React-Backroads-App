import logo from '../images/logo.svg';
import {socialLinks} from '../data';
import PageLinks from './PageLinks'

const NavBar = () => {
  return (
        <nav className="navbar">
        <div className="nav-center">
            <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
                <i className="fas fa-bars"></i>
            </button>
            </div>
           
            <PageLinks />

            <ul className="nav-icons">
               {socialLinks.map((link) => {
               //destructuring the socialLinks array of objects from data.js
                const { id, href, icon } = link
                   return (
                   <li key={id}>
                        <a
                           href={href}
                           target="blank"
                           rel="noreferrer"
                           className="nav-icon"
                       ><i className={icon}></i
                       ></a>
                   </li>
                  );
               })}           
            </ul>
        </div>
        </nav>
  )
}

export default NavBar
