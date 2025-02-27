import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Timer from "../components/Timer";
import VideoBg from "/Main.mp4";       // Ensure this path is correct
import PhoneBg from "/phonevideo.mp4"; // Ensure this path is correct

const Home = () => {
  // We'll use matchMedia for a more reliable media query
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);
  const [showHud, setShowHud] = useState(false);

  useEffect(() => {
    // Set up a media query listener for screen width changes
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    // Using addEventListener for modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMediaQueryChange);
    } else {
      // Fallback for older browsers
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

  // Choose the video source based on whether we are in mobile mode
  const videoSrc = isMobile ? PhoneBg : VideoBg;

  const handleVideoEnd = () => {
    setShowHud(true); // Show HUD when video ends
  };

  return (
    <div className="relative w-screen h-screen bg-black">
      {/* Background Video with unique key to force re-render when videoSrc changes */}
      <video
        key={videoSrc}
        src={videoSrc}
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        onEnded={handleVideoEnd}
      ></video>

      {/* Foreground HUD (Initially Hidden) */}
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
