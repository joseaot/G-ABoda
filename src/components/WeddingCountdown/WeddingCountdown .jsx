import{ useEffect, useState } from "react";
import style from './WeddingCountdown.module.css'

const WeddingCountdown = () => {
  const weddingDate = new Date("2023-10-13T20:00:00"); // Cambiar a la fecha de la boda
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const currentDate = new Date();
    const timeDifference = weddingDate - currentDate;

    if (timeDifference <= 0) {
      return "¡La boda está aquí!";
    } else {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className={style.countdown}>{timeRemaining}</div>;
};

export default WeddingCountdown;
