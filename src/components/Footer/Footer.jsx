import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top text-center text-md-left">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg className="bi" width="30" height="24"></svg>
          </a>
          <span className="mb-3 mb-md-0 text-muted text-sm">&copy; 2023 Con Cariño Jose O.</span>
        </div>

        <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
          <li className="ms-3"><a className="text-muted" href="https://www.facebook.com/josealberto.orellana.5" target="_blank" rel="noopener noreferrer"><BsFacebook /></a></li>
          <li className="ms-3"><a className="text-muted" href="https://w.app/yl0cL7" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp /></a></li>
          <li className="ms-3"><a className="text-muted" href="https://www.instagram.com/joseaot/" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;