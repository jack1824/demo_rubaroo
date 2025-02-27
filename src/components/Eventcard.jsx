import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="group relative bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-blue-900/40 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-[0_0_15px_rgba(123,_97,_255,_0.3)] text-white transition-transform duration-300 hover:shadow-[0_0_25px_rgba(123,_97,_255,_0.5)] w-full max-w-md mx-auto flex flex-col min-h-[550px] max-h-[550px] overflow-hidden will-change-transform ">
      {/* Optimized Background Stars - Reduced number of gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="stars-1 opacity-20"></div>
        <div className="stars-2 opacity-15"></div>
      </div>

      {/* Event Image with optimized transitions */}
      <div className="relative w-full min-h-[200px] will-change-transform transition-transform duration-300 group-hover:scale-[1.02]">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent rounded-lg"></div>

        {/* Simplified Glowing Orb */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl will-change-transform transition-transform duration-300 group-hover:scale-110"></div>
      </div>

      {/* Event Content */}
      <div className="relative flex flex-col flex-grow mt-6 z-10">
        <h2 className="text-[2.5vh] sm:text-[3vh] font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 text-transparent bg-clip-text">
          {event.name}
        </h2>
        <p className="text-base sm:text-lg text-gray-200 mt-3 flex-grow leading-relaxed max-h-14 overflow-hidden">
          {event.description}
        </p>

        {/* Simplified Event Timing */}
        <div className="flex justify-between items-center mt-4 text-[80%] sm:text-[2vh] sm:text-base">
          <span className="flex items-center space-x-2 text-cyan-300">
            <span>🌠</span>
            <span className="overflow-auto max-h-[80%]">{event.date}</span>
          </span>
          <span className="flex items-center space-x-2 text-fuchsia-300">
            <span>⭐</span>
            <span>{event.timing}</span>
          </span>
        </div>

        {/* Prize Section */}
        <p className="text-[2vh] sm:text-[2.5vh] font-semibold text-center mt-4 py-2 px-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg backdrop-blur-sm border border-white/10">
          <span className="text-amber-300">🏆 Prize: </span>
          <span className="text-white font-normal">{event.prize}</span>
        </p>

        {/* Optimized Buttons */}
        <div className="flex justify-between mt-6 gap-4">
          <a
            href={event.registrationLink}
            className="flex-1 text-center bg-gradient-to-r from-purple-600/40 to-blue-600/40 hover:from-purple-600/60 hover:to-blue-600/60 text-white py-2 px-2 text-[1.7vh] sm:text-[2vh]  rounded-lg transition-transform duration-300 hover:scale-105 backdrop-blur-md border border-white/10"
          >
            Register
          </a>
          <a
            href={event.knowMoreLink}
            className="flex-1 text-center bg-gradient-to-r from-pink-600/40 to-purple-600/40 hover:from-pink-600/60 hover:to-purple-600/60 text-white py-2 px-2 rounded-lg text-[1.7vh] sm:text-[2vh] transition-transform duration-300 hover:scale-105 backdrop-blur-md border border-white/10"
          >
            Know More
          </a>
        </div>
      </div>
    </div>
  );
};
export default EventCard;
