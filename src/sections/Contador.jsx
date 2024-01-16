import { fotoBg } from "./../assets/images";
import Reloj from "../components/Reloj";
import { useState, useEffect } from "react";

const Contador = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  //End of time
  const [showEndScreen, setShowEndScreen] = useState({
    show: false,
    message: "¡Hoy es el gran día!",
  });

  const targetDate = new Date("may 12, 2024 14:00:00");

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = Math.max(
        Number(targetDate) - Number(currentTime),
        0
      );

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });

      if (timeDifference === 0) {
        clearInterval(timerInterval);
        setShowEndScreen({ ...showEndScreen, show: true });
        // You can add code here to handle what happens when the target date is reached.
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval); // Cleanup the interval when the component unmounts.
    };
  }, []);

  return (
    <div className="bg-soft-pink py-10">
      <div className="flex flex-col items-center justify-center">
        <div className="px-10 border-dashed border-x-4 border-t-4 border-dark-pink mb-4">
          {showEndScreen.show ? (
            <h3 className="font-mea text-4xl px-14 py-4">
              {showEndScreen.message}
            </h3>
          ) : (
            <h3 className="font-mea text-4xl px-14 py-4">¡Solo Faltan!</h3>
          )}
        </div>
        <img
          src={fotoBg}
          alt="quinceañera"
          className="w-[300px] h-[300px] mb-3 border-solid border-8 border-dark-pink"
          data-aos="zoom-in"
        />
      </div>

      {/* Contador --- Segunda Parte */}
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap md:gap-20 gap-10 justify-center px-10 border-dashed border-x-4 border-b-4 border-dark-pink py-10">
          <Reloj tiempo={time.days} medida="DÍAS" dataAOS="flip-left" />

          <Reloj tiempo={time.hours} medida="HORAS" dataAOS="flip-right" />

          <Reloj tiempo={time.minutes} medida="MINUTOS" dataAOS="flip-left" />

          <Reloj tiempo={time.seconds} medida="SEGUNDOS" dataAOS="flip-right" />
        </div>
      </div>
    </div>
  );
};

export default Contador;
