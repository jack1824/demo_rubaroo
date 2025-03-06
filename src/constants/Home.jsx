import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Timer from "../components/Timer";
import VideoBg from "/Main.mp4";       // Ensure this path is correct
import PhoneBg from "/new.mp4";        // Ensure this path is correct

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showHud, setShowHud] = useState(false);
  const videoRef = useRef(null);

  // Update isMobile whenever the window is resized.
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handler to mark video as ended.
  const handleVideoEnd = () => {
    // Debug: Print a log when the video ends
    console.log("Video ended via onEnded event.");
    setShowHud(true);
  };

  // Additional safety: Check during time updates whether video has ended.
  const handleTimeUpdate = (e) => {
    const videoElement = e.target;
    // Debug: Log the current time and duration to check progress.
    // (You can remove the console logs after debugging.)
    console.log("Video time update:", videoElement.currentTime, videoElement.duration);
    if (videoElement.currentTime >= videoElement.duration - 0.1) {
      // The video is very nearly done; trigger showing the HUD.
      console.log("Video ended via onTimeUpdate event.");
      setShowHud(true);
    }
  };

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        src={isMobile ? PhoneBg : VideoBg}
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        onEnded={handleVideoEnd}
        onTimeUpdate={handleTimeUpdate}
      ></video>

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/50 sm:bg-black/30"></div>

      {/* Only render HUD content (Navbar, Timer) once showHud is true */}
      {showHud && (
        <>
          <Navbar />
          {isMobile ? (
            // Mobile: Fixed container at bottom center, slightly above the bottom, scaled & horizontal.
            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-full p-4 flex justify-center">
              <div className="w-full max-w-md">
                <Timer isMobile={true} />
              </div>
            </div>
          ) : (
            // Desktop: Absolutely positioned on left with vertical layout.
            <div className="absolute top-1/2 left-10 -translate-y-1/2 flex flex-col space-y-4">
              <Timer isMobile={false} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
