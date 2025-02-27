import React, { useEffect, useRef } from "react";
import background from "/background.png";

// SponsorTier component for reusability
const SponsorTier = ({
  title,
  sponsors,
  logoWidth = "w-12 sm:w-16",
  containerWidth = "max-w-3xl",
}) => {
  // Use more copies for smoother infinite scrolling
  const allSponsors = [
    ...sponsors,
    ...sponsors,
    ...sponsors,
    ...sponsors,
    ...sponsors,
    ...sponsors,
    ...sponsors,
    ...sponsors,
    ...sponsors,
    ...sponsors,
    ...sponsors,
  ];

  // Create ref for the scroll container
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Speed variables - adjust these to control speed
    const pixelsPerStep = 1; // Increase this number for faster scrolling
    const intervalMs = 20; // Decrease this number for faster scrolling

    // Function to create infinite scroll effect
    const infiniteScroll = () => {
      // Check if we're near the end (leave some buffer)
      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth - 100
      ) {
        // Reset to beginning with a small offset to prevent jitter
        scrollContainer.scrollLeft = 10;
      } else {
        // Normal scroll increment
        scrollContainer.scrollLeft += pixelsPerStep;
      }
    };

    // Set interval for automatic scrolling
    const scrollInterval = setInterval(infiniteScroll, intervalMs);

    // Cleanup interval on component unmount
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className={`mb-8 mx-auto ${containerWidth}`}>
      <h2 className="text-2xl font-bold text-center text-color1 mb-4">
        {title}
      </h2>

      {/* Infinite scroll container - hidden overflow on the outer container */}
      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="py-4 px-6 flex items-center overflow-x-auto scrollbar-hide"
          style={{
            whiteSpace: "nowrap",
            scrollBehavior: "smooth",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            border: "2px solid rgba(255, 255, 255, 0.5)",
            borderRadius: "15px",
            backgroundColor: "rgba(128, 128, 128, 0.2)",
          }}
        >
          {allSponsors.map((sponsor, index) => (
            <div
              key={index}
              className={`flex-shrink-0 mx-2 transform hover:scale-90 transition duration-700 contrast-75 hover:contrast-700 drop-shadow-xl`}
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100px",
              }}
            >
              <img
                className={`focus:outline-none ${logoWidth}`}
                src={sponsor.src}
                alt={sponsor.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Sponsors = () => {
  // Different sponsor tiers
  const titleSponsors = [
    {
      src: "https://cdn-icons-png.flaticon.com/128/3800/3800024.png",
      alt: "Adidas",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/128/187/187902.png",
      alt: "Chanel",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/128/187/187902.png",
      alt: "Chanel",
    },
  ];

  const powerSponsors = [
    {
      src: "https://cdn-icons-png.flaticon.com/128/3845/3845877.png",
      alt: "Nike",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/128/732/732242.png",
      alt: "Toyota",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/128/187/187902.png",
      alt: "Chanel",
    },
  ];

  const coSponsors = [
    {
      src: "https://cdn-icons-png.flaticon.com/128/3800/3800024.png",
      alt: "Adidas",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/128/187/187902.png",
      alt: "Chanel",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/128/3845/3845877.png",
      alt: "Nike",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/128/732/732242.png",
      alt: "Toyota",
    },
  ];

  const associateSponsors = [
    {
      src: "https://cdn-icons-png.flaticon.com/128/187/187902.png",
      alt: "Chanel",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/128/3845/3845877.png",
      alt: "Nike",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/128/3800/3800024.png",
      alt: "Adidas",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/128/732/732242.png",
      alt: "Toyota",
    },
  ];

  const eventSponsors = [
    {
      src: "https://cdn-icons-png.flaticon.com/128/3845/3845877.png",
      alt: "Nike",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/128/187/187902.png",
      alt: "Chanel",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/128/732/732242.png",
      alt: "Toyota",
    },
    {
      src: "https://cdn-icons-png.flaticon.com/128/3800/3800024.png",
      alt: "Adidas",
    },
  ];

  return (
    <div
      className="min-h-screen py-20  px-5 overflow-hidden bg-black items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <div className="pt-20"></div> */}
      <div className="sm:max-w-7xl rounded-xl  md:mx-auto">
        {/* <div className="w-11/12 sm:w-2/3 mx-auto">
          <h1 className="focus:outline-none xl:text-5xl text-2xl text-center text-color1 font-extrabold pb-10">
            Sponsors
          </h1>
        </div> */}

        <div className="flex flex-col items-center pt-5">
          <SponsorTier
            title="Title Sponsors"
            sponsors={titleSponsors}
            logoWidth="w-16 sm:w-20"
            containerWidth="sm:max-w-xs max-w-full"
          />

          <SponsorTier
            title="Power Sponsors"
            sponsors={powerSponsors}
            logoWidth="w-14 sm:w-18"
            containerWidth="sm:max-w-md max-w-full"
          />

          <SponsorTier
            title="Co-Sponsors"
            sponsors={coSponsors}
            logoWidth="w-12 sm:w-16"
            containerWidth="sm:max-w-xl max-w-full"
          />

          <SponsorTier
            title="Associate Sponsors"
            sponsors={associateSponsors}
            logoWidth="w-10 sm:w-14"
            containerWidth="sm:max-w-2xl max-w-full"
          />
          <SponsorTier
            title="Event Sponsors"
            sponsors={eventSponsors}
            logoWidth="w-8 sm:w-12"
            containerWidth="sm:max-w-3xl max-w-full"
          />
        </div>

        {/* Add scrollbar hiding for Webkit browsers */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Sponsors;
