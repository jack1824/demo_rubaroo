
import EventCard from "./Eventcard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import background from "/background.png";

const data = [
  {
    name: "Code Clash",
    description:
      "An intense coding competition where programmers battle it out to solve challenging problems.",
    image: "https://via.placeholder.com/300x200?text=Code+Clash",
    timing: "10:00 AM - 1:00 PM",
    prize: "₹50,000",
    date: "March 5, 2025",
    registration_link: "https://example.com/register/codeclash",
    know_more_link: "https://example.com/event/codeclash",
  },
  {
    name: "Battle of Bands",
    description:
      "College bands compete to become the ultimate musical champions.",
    image: "https://via.placeholder.com/300x200?text=Battle+of+Bands",
    timing: "6:00 PM - 9:00 PM",
    prize: "₹30,000",
    date: "March 6, 2025",
    registration_link: "https://example.com/register/battleofbands",
    know_more_link: "https://example.com/event/battleofbands",
  },
  {
    name: "Robo Wars",
    description:
      "Witness thrilling robotic battles as teams compete with their custom-built bots.",
    image: "https://via.placeholder.com/300x200?text=Robo+Wars",
    timing: "3:00 PM - 6:00 PM",
    prize: "₹75,000",
    date: "March 7, 2025",
    registration_link: "https://example.com/register/robowars",
    know_more_link: "https://example.com/event/robowars",
  },
  {
    name: "Drama Night",
    description:
      "An evening of captivating performances by the best theater groups.",
    image: "https://via.placeholder.com/300x200?text=Drama+Night",
    timing: "7:00 PM - 10:00 PM",
    prize: "₹20,000 ",
    date: "March 8, 2025",
    registration_link: "https://example.com/register/dramanight",
    know_more_link: "https://example.com/event/dramanight",
  },
  {
    name: "Hackathon 24",
    description:
      "24-hour hackathon where teams develop innovative software solutions.",
    image: "https://via.placeholder.com/300x200?text=Hackathon+24",
    timing: "9:00 AM - Next Day 9:00 AM",
    prize: "₹1,00,000",
    date: "March 9-10, 2025",
    registration_link: "https://example.com/register/hackathon",
    know_more_link: "https://example.com/event/hackathon",
  },
  {
    name: "Dance Face-off",
    description:
      "Solo and group dancers battle it out in an electrifying showdown.",
    image: "https://via.placeholder.com/300x200?text=Dance+Face-off",
    timing: "5:00 PM - 8:00 PM",
    prize: "₹40,000",
    date: "March 10, 2025",
    registration_link: "https://example.com/register/dancefaceoff",
    know_more_link: "https://example.com/event/dancefaceoff",
  },
  {
    name: "Gaming Championship",
    description:
      "A high-stakes esports tournament featuring games like Valorant and FIFA.",
    image: "https://via.placeholder.com/300x200?text=Gaming+Championship",
    timing: "10:00 AM - 6:00 PM",
    prize: "₹50,000",
    date: "March 11, 2025",
    registration_link: "https://example.com/register/gaming",
    know_more_link: "https://example.com/event/gaming",
  },
  {
    name: "Treasure Hunt",
    description:
      "A thrilling race across campus solving puzzles to find the grand prize.",
    image: "https://via.placeholder.com/300x200?text=Treasure+Hunt",
    timing: "2:00 PM - 5:00 PM",
    prize: "₹15,000",
    date: "March 12, 2025",
    registration_link: "https://example.com/register/treasurehunt",
    know_more_link: "https://example.com/event/treasurehunt",
  },
  {
    name: "Fashion Show",
    description:
      "Showcase your style and creativity in the most glamorous event of the fest.",
    image: "https://via.placeholder.com/300x200?text=Fashion+Show",
    timing: "8:00 PM - 11:00 PM",
    prize: "₹35,000",
    date: "March 13, 2025",
    registration_link: "https://example.com/register/fashionshow",
    know_more_link: "https://example.com/event/fashionshow",
  },
  {
    name: "Quizathon",
    description:
      "Test your knowledge across multiple domains in an intense quiz competition.",
    image: "https://via.placeholder.com/300x200?text=Quizathon",
    timing: "11:00 AM - 1:00 PM",
    prize: "₹10,000",
    date: "March 14, 2025",
    registration_link: "https://example.com/register/quizathon",
    know_more_link: "https://example.com/event/quizathon",
  },
];

const Events = () => {
  return (
    <div
      className="min-h-screen py-20 px-5 flex flex-col items-center overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Title */}
      <h1 className="text-[#c24fae] text-center text-4xl font-extrabold mb-8 ">
        🚀 College Fest Events 🎭
      </h1>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={5}
        watchSlidesProgress={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full max-w-8xl"
      >
        {data.map((event, index) => (
          <SwiperSlide key={index}>
            <EventCard event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Events;
