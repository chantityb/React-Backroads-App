import { pageLinks } from "../data";

const PageLinks = () => {
    return (
         <ul className="nav-links" id="nav-links">
              {pageLinks.map((link) => {
                return (
                    <li key={link.id}>
                        <a
                        href={link.href}
                        target='_blank'
                        rel="noreferrer"
                        className="nav-link">
                            {link.text}
                        </a>
                    </li>
                    );
                })} 
            </ul>
    );
}

export default PageLinks