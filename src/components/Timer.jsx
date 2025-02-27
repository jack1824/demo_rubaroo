import React, { useState, useEffect } from "react";

const Timer = () => {
  // Set target date: March 29, 2025, at 10:00 AM
  const targetDate = new Date("March 29, 2025 10:00:00").getTime();

  // Function to calculate remaining time
  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  // State for countdown values
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Update countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute left-0 top-1/2  -translate-y-1/2 flex flex-col items-center p-4 transform hover:scale-95 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-x bg-black/50 text-white rounded-r-lg shadow-lg">
      {/* Pulsating "TIME LEFT" Text */}
      <div className="text-xl font-bold tracking-wider transform hover:scale-95 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-x text-red-500 animate-pulse mb-4">
        TIME LEFT
      </div>

      {/* Countdown Timer */}
      <div className="flex flex-col transform hover:scale-95 transition duration-300 contrast-75 hover:contrast-100 drop-shadow-x gap-4">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-extrabold text-color1">
            {timeLeft.days}
          </span>
          <span className="text-sm text-gray-300">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-extrabold text-color2">
            {timeLeft.hours}
          </span>
          <span className="text-sm text-gray-300">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-extrabold text-blue-400">
            {timeLeft.minutes}
          </span>
          <span className="text-sm text-gray-300">Min</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-extrabold text-color4">
            {timeLeft.seconds}
          </span>
          <span className="text-sm text-gray-300">Sec</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
