import { useEffect, useState } from 'react';

function Timer(props) {
  const calculateTimeLeft = () => {
    let year = props.uploadDate;
    const difference = +new Date() - +new Date(`${year}`);

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
        heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
        // minutes: Math.floor((difference / 1000 / 60) % 60),
        // seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={props.id}>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });
  return (
    <div>
      {timerComponents.length ? timerComponents : <span>n/a</span>}
    </div>
  );
}

export default Timer;
