import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import SmoothScroll from "smooth-scroll";
import logo from "../../img/logo-negro.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú

  useEffect(() => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 2000,
      easing: "easeInOutCubic",
    });
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Cerrar el menú después de hacer clic
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav
        className={`navbar px-3 navbar-expand-lg navbar-light bg-light fixed-top ${style.navbar}`}
      >
        <a
          className={`navbar-brand ${style.hideBorder}`}
          href="#"
          style={{
            padding: "15px",
            fontSize: "30px",
            borderRight: "3px solid rgba(0, 0, 0, 0.363)",
          }}
        >
          Gabriela ❤️ Andres
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu} // Cambia el estado del menú al hacer clic en el botón
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${style.navbarLinks} ${
            isMenuOpen ? "show" : "" // Agrega la clase "show" si el menú está abierto
          }`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a
              className={`nav-item nav-link ${
                activeLink === "home" ? "active" : ""
              }`}
              href="#"
              onClick={() => handleLinkClick("home")}
              data-scroll
            >
              Home
            </a>
            <a
              className={`nav-item nav-link ${
                activeLink === "historia" ? "active" : ""
              }`}
              href="#nuestra-historia"
              onClick={() => handleLinkClick("historia")}
              data-scroll
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