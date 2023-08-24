import { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import SmoothScroll from "smooth-scroll";


const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú

  useEffect(() => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 2000,
      easing: "easeInOutCubic",
    });

    const navbarTogglerIcon = document.querySelector(".navbar-toggler-icon");
    if (navbarTogglerIcon) {
      navbarTogglerIcon.style.backgroundImage = `
        url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(239, 184, 16)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`;
      navbarTogglerIcon.style.backgroundSize = "contain"; // Ajustar el tamaño si es necesario
      navbarTogglerIcon.style.backgroundRepeat = "no-repeat";
    }
    
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);

    // Cambia el fontWeight del enlace activado
    const navLinks = document.querySelectorAll(".nav-item.nav-link");
    navLinks.forEach((navLink) => {
      if (navLink.classList.contains("active")) {
        navLink.style.fontWeight = "400"; // Restaura el fontWeight en otros enlaces activos
      }
    });

    const activeNavLink = document.querySelector(`.nav-item.nav-link.${link}`);
    if (activeNavLink) {
      activeNavLink.style.fontWeight = "900"; // Cambia el fontWeight del enlace activado
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav
        className={`navbar px-3 navbar-expand-lg navbar-light bg-dark fixed-top ${style.navbar}`}
      >
        <a
          className={`navbar-brand ${style.hideBorder}`}
          href="#"
          style={{
            padding: "15px",
            fontSize: "30px",
            borderRight: "3px solid rgba(0, 0, 0, 0.363)",
            color: "#efb810",
          }}
        >
          Gabriela ❤️ Andres
        </a>
        <button
          className={`navbar-toggler ${style.boton}`}
          type="button"
          onClick={toggleMenu} // Cambia el estado del menú al hacer clic en el botón
          style={{
            color: "#efb810",
            border: "rgb(238 183 16) solid 1px",
          }}
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
              style={{color:"#efb810", fontWeight:"400"}}
              onClick={() => handleLinkClick("home")}
              data-scroll
            >
              🏠 Home
            </a>
            <a
              className={`nav-item nav-link ${
                activeLink === "historia" ? "active" : ""
              }`}
              href="#nuestra-historia"
              style={{color:"#efb810", fontWeight:"400"}}
              onClick={() => handleLinkClick("historia")}
              data-scroll
            >
              📖 Nuestra historia
            </a>
            <a
              className={`nav-item nav-link ${
                activeLink === "evento" ? "active" : ""
              }`}
              href="#evento"
              style={{color:"#efb810", fontWeight:"400"}}
              onClick={() => handleLinkClick("evento")}
            >
              ⛪ Evento
            </a>
            <a
              className={`nav-item nav-link ${
                activeLink === "regalo" ? "active" : ""
              }`}
              href="#regalo"
              style={{ color: "#efb810", fontWeight: "400" }}
              onClick={() => handleLinkClick("regalo")}
            >
              🎁 Regalo
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
