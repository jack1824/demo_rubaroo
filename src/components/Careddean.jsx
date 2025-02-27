import React from "react";
import daen from "../assets/daen.png"; // Ensure correct path

const Careddean = () => {
  return (
    <div className="flex w-full justify-center h-[450px] transform hover:scale-110 transition duration-700 contrast-75 hover:contrast-700 grow-shadow-xl "> {/* Container to push the card to the right */}
      <div className="flex flex-row w-3/4 max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden border-4 border-color2 animate-glow ">
        {/* Image Section (Ensuring Proper Fit) */}
        <div className="w-1/3 h-auto flex items-center justify-center">
          <img src={daen} alt="Dean" className="w-full h-full object-cover rounded-l-lg" />
        </div>

        {/* Text Content - Adjusted Size */}
        <div className="w-2/3 text-lg p-4 flex flex-col justify-center">
          <h1 className="font-bold text-2xl text-gray-900">
            Dr. R.P. Mahapatra
          </h1>
          <p className="text-md text-gray-700 mt-2">
            Continuing with the legacy of our national-level cultural fest **Rubaroo**, which started in 2009.
            This two-day event attracts over **5,000+ students** from across the country, making it the 
            largest cultural fest in the region.
            <br /><br />
            Rubaroo is back, and it’s going to be **bigger, better, and more exciting than ever before!**  
            Expect more students, more events, and some of the most exciting prizes up for grabs!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Careddean;