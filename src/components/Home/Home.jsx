import Carrousel from "../Carrousel/Carrousel";
import Navbar from "../Navbar/Navbar";
import style from "./Home.module.css";
import img2 from "../../img/andres.jpg";
import img1 from "../../img/gaby.jpg";
import Footer from "../Footer/Footer";
import WeddingCountdown from "../WeddingCountdown/WeddingCountdown ";
import {FaChurch} from 'react-icons/fa'

const Home = () => {
  return (
    <div className={style.encabezado}>
      <Navbar />
      <Carrousel id="inicio" />

      <h1 className={style.titulo} id="nuestra-historia">
        Nuestra Historia📖
      </h1>
      <div className={style.andres}>
        <p className={style.parrafo}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi magni
          autem, omnis saepe, sed alias aperiam quis neque explicabo, incidunt
          adipisci laboriosam vero quam modi eos? Neque vero facere eos.
        </p>
        <img src={img1} alt="hola" className={style.img} />
      </div>
      <div className={style.gaby}>
        <img src={img2} alt="hola" className={style.img} />
        <p className={style.parrafo}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi magni
          autem, omnis saepe, sed alias aperiam quis neque explicabo, incidunt
          adipisci laboriosam vero quam modi eos? Neque vero facere eos.
        </p>
      </div>

      <div>
        <h1 className={style.titulo} id="evento">
          Evento
        </h1>
        <div className={style.evento}>
          <FaChurch className={style.icono}/>
          <p>Eventos Capri</p>
          <WeddingCountdown/>
          <h3>Cuenta regresiva</h3>
          <a
            href="https://www.google.com/maps/place/Eventos+Capri+SRL/@-34.747358,-58.3937715,15z/data=!4m22!1m15!4m14!1m5!1m1!1s0x95bcd2a27b0e333d:0x8a2b73d8300013f5!2m2!1d-58.3937715!2d-34.747358!1m6!1m2!1s0x95bcd2a27b0e333d:0x8a2b73d8300013f5!2sEventos+Capri+SRL,+Av.+Adolfo+Alsina+934,+B1828ABF+Banfield,+Provincia+de+Buenos+Aires!2m2!1d-58.3937715!2d-34.747358!3e3!3m5!1s0x95bcd2a27b0e333d:0x8a2b73d8300013f5!8m2!3d-34.747358!4d-58.3937715!16s%2Fg%2F1hc88bdpt?entry=ttu"
            target="_blank"
          >
            <p>Ver Direccion</p>
          </a>
        </div>
      </div>

      <div>
        <h1 className={style.titulo} id="regalo">
          Regalo
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
