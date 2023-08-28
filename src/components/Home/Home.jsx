import Carrousel from "../Carrousel/Carrousel";
import Navbar from "../Navbar/Navbar";
import style from "./Home.module.css";
import pareja from "../../img/trajes.svg";
import bebe from "../../img/bebe2.svg";
import tranferencia from "../../img/transferencia.svg";
import lista from "../../img/lista2.svg";
import Footer from "../Footer/Footer";
import WeddingCountdown from "../WeddingCountdown/WeddingCountdown ";
import { FaChurch } from "react-icons/fa";
import { BsEnvelopeHeart } from "react-icons/bs";
import flores from "../../img/flores3.webp";


import { AiFillGift } from "react-icons/ai";
import Galeria from "../Galeria/Galeria.jsx";

const Home = () => {
  return (
    <div className={style.encabezado}>
      <Navbar />
      <Carrousel id="inicio" />
      <div className={style.ft}>
        <h1 className={style.titulo} id="nuestra-historia">
          Acompañanos
        </h1>
        <p className={style.parrafo}>
          Hay momentos en la vida que son muy especiales por si solos, pero al
          compartirlo con personas tan importantes como tu, se convierten en
          momentos inolvidables. Es por eso que queremos que hagas parte de
          nuestro día soñado, donde Dios comienza a escribir nuestra historia
          juntos ya que El es quien nos a unido en su propósito perfecto. Y
          estamos solicitando invitados con o sin experiencia, su pago se
          realizara con deliciosa comida y ¡mucho amor!
        </p>
        <div className={style.horizontal}>
          <h3 className={style.separador}></h3>
          <img src={flores} alt="flores" className={style.flores} />
          <h3 className={style.separador}></h3>
        </div>
      </div>

      <div className={style.ft}>
        <h1 className={style.titulo} id="evento">
          EVENTO
        </h1>
        <div className={style.evento}>
          <FaChurch className={style.icono} />
          <p className={style.parrafo}>
            Anhelamos verte el 13 de Octubre en Villa capri Eventos
          </p>
          <a href="https://goo.gl/maps/kQGhi1YNfeZXCN2A6" target="_blank">
            <button className={style.boton}>Ver Direccion</button>
          </a>
          <div className={style.evento}>
            <div className={style.vestimenta}>
              <span className={style.span}> Vestimenta</span>
              <img className={style.icono} src={pareja} alt="pareja" />
              <p lassName={style.span}>
                Etiqueta Formal.
              </p>
              <p className={style.parrafo}>Queremos verte con la pinta mas elegante!</p>
            </div>
            <div className={style.vestimenta}>
              <span className={style.span}>¿Niños?</span>
              <img className={style.icono} src={bebe} alt="bebe" />
              <p className={style.parrafo}>
                Amamos mucho a tus hijos y por eso hemos decidido que no se
                desvelen.
              </p>
              <p>
                -Niños: Buenas Noches, <br />- Papás: Buena Noche!
              </p>
            </div>
            <div className={style.vestimenta}>
              <span className={style.span}>Confirmacion</span>
              <p className={style.parrafo}>Nos gustaria saber si nos acompañaras, y seria de gran ayuda que nos confirmes!</p>
              <img className={style.icono} src={lista} alt="" />
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd_KlJrqXRGRaGsQyTtNCPfzzbpYDuMrmtd7-Q_iodhbF8YxA/viewform"
                target="_blank"
                >
                <button className={style.boton}>Confirmar</button>
              </a>
              <p className={style.parrafo}>Tiempo de confirmación, hasta el 15 de septiembre</p>
              <p className={style.parrafo}>¡Listo! Nos vemos el 13 de Octubre</p>
            </div>
          </div>
          <WeddingCountdown />
          <h3>Cuenta regresiva</h3>
        </div>
        <div className={style.horizontal}>
          <h3 className={style.separador}></h3>
          <img src={flores} alt="flores" className={style.flores} />
          <h3 className={style.separador}></h3>
        </div>
      </div>

      <div className={style.evento}>
        <h1 className={style.titulo} id="regalo">
          Regalo
        </h1>
        <AiFillGift className={style.icono} />
        <p className={style.parrafo}>Si quieres darnos un obsequio, aqui tienes algunas opciones:</p>
        <BsEnvelopeHeart className={style.icono2}/>
        <span>Lluvia de sobres</span>
        <img src={tranferencia} alt="trans" className={style.icono} />
        <span>Tranferencia</span>
        <p className={style.parrafo}>Alias: andres.sierra1</p>
        <div className={style.horizontal}>
          <h3 className={style.separador}></h3>
          <img src={flores} alt="flores" className={style.flores} />
          <h3 className={style.separador}></h3>
        </div>
      </div>

      <div className={style.evento}>
      <h1 className={style.titulo} id="galeria">
          Galeria
        </h1>
      <Galeria/>
        <div className={style.horizontal}>
          <h3 className={style.separador}></h3>
          <img src={flores} alt="flores" className={style.flores} />
          <h3 className={style.separador}></h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
