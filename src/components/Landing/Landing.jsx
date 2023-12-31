import style from './Landing.module.css';
import { useNavigate } from 'react-router-dom';
import foto from '../../img/frente4.jpg';
import sugar1 from '../../audio/hallarte.mp3';
import logo from '../../img/logo-blanco.png'

const Landing = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        // Reproducir la canción en bucle (loop)
        const audio = new Audio(sugar1);
        audio.loop = true; // Agregar el atributo loop
        audio.play();

        // Agregar la clase de transición al botón antes de navegar
        const button = document.querySelector(`.${style.boton}`);
        if (button) {
            button.classList.add(style.clicked);
        }

        // Navegar después de un breve retraso para permitir la transición y la reproducción de la canción
        setTimeout(() => {
            navigate('/home');
        }, 300);
    };

    return (
        <div className={style.contenedor}>
            <div className={style.videoContainer}>
                <img src={foto} alt="foto" className={style.foto} />
            </div>
            <div className={style.overlay}>
                <div className={style.centeredContent}>
                    <img src={logo} className={style.logo}/>
                    {/* <h1 className={style.title}>Gabriela & Andres</h1> */}
                    <button onClick={handleGoHome} className={style.boton}>
                        Ingresar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Landing;