import { useEffect, useState } from "react";

export default function useCountDown(deadline, interval = 1000) {
  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = new Date(deadline) - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };
  const [timeRemaing, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining);
    }, interval);
    return () => {
      clearInterval(intervalId);
    };
  }, [deadline, interval]);

  return {
    days: timeRemaing.days,
    hours: timeRemaing.hours,
    minutes: timeRemaing.minutes,
    seconds: timeRemaing.seconds,
  };
}
