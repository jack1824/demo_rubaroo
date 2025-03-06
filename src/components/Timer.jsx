import React, { useState, useEffect } from "react";

const Timer = ({ isMobile = false }) => {
  // Set target date: April 11, 2025, at 10:00 AM
  const targetDate = new Date("April 11, 2025 10:00:00").getTime();

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

  // Container classes based on device:
  // Mobile: Fixed at bottom center, a bit above the bottom, scaled down, horizontally arranged.
  // Desktop: Absolutely positioned vertically on the left.
  const containerClasses = isMobile
    ? "fixed bottom-8 left-1/2 transform -translate-x-1/2 scale-90 flex flex-row items-center justify-center p-3  text-white rounded-lg shadow-lg"
    : "absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center p-4  text-white rounded-r-lg shadow-lg";

  // Layout classes for the timer values:
  const timerLayoutClasses = isMobile ? "flex flex-row gap-4" : "flex flex-col gap-4";

  return (
    <div className={containerClasses}>
      {/* Pulsating "TIME LEFT" Label */}
      <div className="text-xl font-bold tracking-wider text-red-500 animate-pulse mb-4">
        TIME LEFT
      </div>
      {/* Countdown Timer Layout */}
      <div className={timerLayoutClasses}>
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
