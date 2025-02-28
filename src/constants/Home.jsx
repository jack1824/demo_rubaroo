import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Timer from "../components/Timer";
import VideoBg from "/Main.mp4";       // Ensure this path is correct
import PhoneBg from "../../public/Mainsmall.mp4"; // Ensure this path is correct

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);
  const [showHud, setShowHud] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMediaQueryChange);
    } else {
      mediaQuery.addListener(handleMediaQueryChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      } else {
        mediaQuery.removeListener(handleMediaQueryChange);
      }
    };
  }, []);
console.log(isMobile);
  const videoSrc = isMobile ? PhoneBg : VideoBg;

  const handleVideoEnd = () => {
    setShowHud(true);
  };

  return (
    <div className="relative w-screen h-screen bg-black">
      {/* Background Video */}
      <video
        key={videoSrc}
        src={videoSrc}
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover sm:h-auto sm:w-auto"
        onEnded={handleVideoEnd}
      ></video>

      {/* Overlay for Small Screens (Optional) */}
      <div className="absolute inset-0 bg-black/50 sm:bg-black/30"></div>

      {/* HUD Content */}
      {showHud && (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
          <Navbar />
          <Timer />
        </div>
      )}
    </div>
  );
};

export default Home;