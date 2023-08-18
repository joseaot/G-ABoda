import style from './Button.module.css'

const Button = () => {
  return (
    <div className={style.fondo}>
        <button className={style.contenedor}>Ingresa</button>
    </div>
  )
}

export default Button