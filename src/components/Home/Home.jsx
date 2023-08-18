import Carrousel from "../Carrousel/Carrousel"
import Navbar from "../Navbar/Navbar"
import style from './Home.module.css'
import img1 from '../../img/Horizontal2.jpg'
import img2 from '../../img/Horizontal3.jpg'
import Footer from "../Footer/Footer"



const Home = () => {
  return (
    <div className={style.encabezado}>
      <Navbar/>
      <Carrousel id="inicio"/>

      <h1 className={style.titulo} id="nuestra-historia">Nuestra Historia</h1>
      <div className={style.andres}>
        <p className={style.parrafo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi magni autem, omnis saepe, sed alias aperiam quis neque explicabo, incidunt adipisci laboriosam vero quam modi eos? Neque vero facere eos.</p>
        <img src={img1} alt="hola" className={style.img}/>
      </div>
      <div className={style.gaby}>
        <img src={img2} alt="hola" className={style.img}/>
        <p className={style.parrafo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi magni autem, omnis saepe, sed alias aperiam quis neque explicabo, incidunt adipisci laboriosam vero quam modi eos? Neque vero facere eos.</p>
      </div>

      <div>
        <h1 className={style.titulo} id="evento">Evento</h1>
      </div>

      <div>
        <h1 className={style.titulo} id="regalo">Regalo</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default Home