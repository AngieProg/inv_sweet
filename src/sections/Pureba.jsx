import { useState, useEffect } from "react";

const Pureba = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [band, setBand] = useState(false);

  const targetDate = new Date("jan 12, 2024 13:48:00");
  //   const targetDate = new Date();
  //   targetDate.setDate(targetDate.getDate() + 1);

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
        // You can add code here to handle what happens when the target date is reached.
        setBand(1);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval); // Cleanup the interval when the component unmounts.
    };
  }, []);

  return (
    <div>
      {band ? <h1>ya paso</h1> : <h1>no ha pasado</h1>}
      <h1>{band}</h1>
      <p>{time.days}</p>
      <p>{time.hours}</p>
      <p>{time.minutes}</p>
      <p>{time.seconds}</p>
    </div>
  );
};

export default Pureba;
