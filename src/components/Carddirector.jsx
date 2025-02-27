import React from "react";
import director from "../assets/director.png"; // Ensure the correct path

const Carddirector = () => {
  return (
    <div className="flex w-3/4 max-w-5xl bg-white rounded-lg shadow-lg transform hover:scale-110 transition duration-700 contrast-75 hover:contrast-700 grow-shadow-xl  overflow-hidden border-4 border-color2 animate-glow">
      {/* Image Section (Flexible Width) */}
      <div className="w-1/3 flex items-center justify-center ">
        <img src={director} alt="Director" className="w-full h-auto rounded-lg" />
      </div>

      {/* Text Content - Takes Remaining Space */}
      <div className="w-2/3 text-2xl p-6  flex flex-col justify-center">
        <h1 className=" font-bold text-3xl text-gray-900">
          Dr. Sanjay Viswanathan
        </h1>
        <p className="text-xl text-gray-700 mt-4">
          Welcome to SRM Institute of Science and Technology (formerly SRM
          University), NCR Campus – where innovation meets excellence! We’re not
          just a university; we’re a world-class hub offering everything from
          diplomas to doctoral programs in engineering, management, science, and
          humanities. Join us and be part of the legacy!
        </p>
      </div>
    </div>
  );
};

export default Carddirector;