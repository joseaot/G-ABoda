import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 border-top text-center text-md-left custom-footer">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24"></svg>
          </a>
          <span
            className="mb-3 mb-md-0 text-sm"
            style={{ fontSize: "20px", color: "rgb(52 51 51)" }} // Cambia el color de la letra a rojo
          >
            &copy; 2023 Con Cariño Jose O.
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
          <li className="mx-2">
            <a
              className="text-muted"
              href="https://www.facebook.com/josealberto.orellana.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook className={style.emoji}/>
            </a>
          </li>
          <li className="mx-2">
            <a
              className="text-muted"
              href="https://w.app/yl0cL7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp className={style.emoji}/>
            </a>
          </li>
          <li className="mx-2">
            <a
              className="text-muted"
              href="https://www.instagram.com/joseaot/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className={style.emoji}/>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
