import React from "react";
import dean2 from "../assets/dean2.png"; // Ensure correct path

const Carddeean = () => {
  return (
    <div className="flex  w-full justify-center h-[450px] transform hover:scale-110 transition duration-700 contrast-75 hover:contrast-700 grow-shadow-xl "> {/* Container to push the card to the right */}
      <div className="flex flex-row w-3/4 max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden border-4 border-color2 animate-glow">
        {/* Image Section (Ensuring Proper Fit) */}
        <div className="w-1/3 h-auto flex items-center justify-center">
          <img src={dean2} alt="Dean2" className="w-full h-full object-cover rounded-l-lg" />
        </div>

        {/* Text Content - Adjusted Size */}
        <div className="w-2/3 text-lg p-4 flex flex-col justify-center">
          <h1 className="font-bold text-2xl text-gray-900">
            Dr. Dhoumya Bhatt
          </h1>
          <p className="text-sm text-gray-700 mt-2 max-w-2xl overflow-auto">
          SRM Institute of Science and Technology, NCR Campus is a premier institution offering quality education in Engineering, Management, Computer Applications, and
          Hotel Management.We foster innovation, research, and hands-on learning, with expert faculty shaping future leaders through technical expertise, leadership, and ethics.
          With a diverse student community, we strive to emphasize both academics and interpersonal skills, ensuring well-rounded
            professionals ready for the real world.
            <br /><br />
            The enriched learning experience at SRM IST NCR Campus is complemented by cultural and technical fests, industry-focused seminars,and extracurricular activities, preparing students to face real-world
            challenges with confidence and creativity. Here , we don’t just educate—we inspire, empower, and transform futures!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carddeean;