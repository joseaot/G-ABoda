import { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import SmoothScroll from "smooth-scroll"; // Importa la librería smooth-scroll

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 2000, // Velocidad del desplazamiento
      easing: "easeInOutCubic", // Efecto de aceleración
    });
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <nav
        className={`navbar px-3 navbar-expand-lg navbar-light bg-light fixed-top ${style.navbar}`}
      >

          <a className="navbar-brand" href="#">
            Gabriela ❤️ Andres
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${style.navbarLinks}`}
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a
                className={`nav-item nav-link ${
                  activeLink === "home" ? "active" : ""
                }`}
                href="#"
                onClick={() => handleLinkClick("home")}
                data-scroll // Importante agregar este atributo
              >
                Home
              </a>
              <a
                className={`nav-item nav-link ${
                  activeLink === "historia" ? "active" : ""
                }`}
                href="#nuestra-historia"
                onClick={() => handleLinkClick("historia")}
                data-scroll // Importante agregar este atributo
              >
                Nuestra historia
              </a>
              <a
                className={`nav-item nav-link ${
                  activeLink === "evento" ? "active" : ""
                }`}
                href="#evento"
                onClick={() => handleLinkClick("evento")}
              >
                Evento
              </a>
              <a
                className={`nav-item nav-link ${
                  activeLink === "regalo" ? "active" : ""
                }`}
                href="#regalo"
                onClick={() => handleLinkClick("regalo")}
              >
                Regalo
              </a>
            </div>
          </div>
      </nav>
    </div>
  );
};

export default Navbar;
