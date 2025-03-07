import { useState } from "react";
import { X, AlignJustify } from "lucide-react";

const navLinks = [
  { name: "About", link: "/about" },
  { name: "Sponsors", link: "/sponsors" },
  { name: "Events", link: "/events" },
  { name: "Contact Us", link: "/contact" },
];

export default function SidebarComponent() {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div className="relative z-100 block sm:hidden">
      {/* Button to toggle Sidebar */}
      <span
        className="text-color1 block sm:block cursor-pointer transform hover:scale-110 transition duration-700 contrast-75 hover:contrast-700 fixed top-5 right-5 z-50"
        onClick={() => setSideBar(!sideBar)}
      >
        {sideBar ? <X size={30} /> : <AlignJustify size={30} />}
      </span>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-blue-900 text-color1 shadow-lg flex flex-col p-5 z-40 transform transition-transform duration-500  ${
          sideBar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* <h2 className="text-xl font-bold">Sidebar Menu</h2> */}
        <ul className="mt-14 space-y-2 font-italic text-[20px] ">
          {navLinks.map((item, index) => (
            <li key={index} className="relative group mt-4">
              <a
                href={item.link}
                className="transition duration-300 hover:text-color2"
              >
                {item.name}
              </a>
              {/* Hover Underline Effect */}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-color2 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
