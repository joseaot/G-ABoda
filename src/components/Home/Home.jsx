import Carrousel from "../Carrousel/Carrousel";
import Navbar from "../Navbar/Navbar";
import style from "./Home.module.css";
import img2 from "../../img/andres.jpg";
import img1 from "../../img/gaby.jpg";
import Footer from "../Footer/Footer";
import WeddingCountdown from "../WeddingCountdown/WeddingCountdown ";
import { FaChurch } from "react-icons/fa";

import {AiFillGift} from 'react-icons/ai'

const Home = () => {
  return (
    <div className={style.encabezado}>
      <Navbar />
      <Carrousel id="inicio" />

      <h1 className={style.titulo} id="nuestra-historia">
        Nuestra Historia
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
          <div className={style.gaby2}>

          <p className={style.parrafo}>
            Hay momentos en la vida que son muy especiales por si solos, pero al
            compartirlo con personas tan importantes como tu, se convierten en
            momentos inolvidables. Es por eso que queremos que hagas parte de
            nuestro día soñado, donde Dios comienza a escribir nuestra historia
            juntos ya que El es quien nos a unido en su propósito perfecto. Y
            estamos solicitando invitados con o sin experiencia, su pago se
            realizara con deliciosa comida y ¡mucho amor!
          </p>
          </div>
          <FaChurch className={style.icono} />
          <p>Eventos Capri</p>
          <WeddingCountdown />
          <h3>Cuenta regresiva</h3>
          <a
            href="https://goo.gl/maps/kQGhi1YNfeZXCN2A6"

            target="_blank"
          >
            <button>Ver Direccion</button>
          </a>
        </div>
      </div>

      <div>
        <h1 className={style.titulo} id="regalo">
          Regalo
        </h1>
        <AiFillGift className={style.icono} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
