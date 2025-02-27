import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { AlignJustify ,X} from "lucide-react";
import SidebarComponent from './SidebarComponent';

const navLinks = [
  { name: "About", link: "/about" },
  { name: "Sponsors", link: "/sponsors" },
  { name: "Events", link: "/events" },
  { name: "Contact Us", link: "/contact" },
];
const Navbar = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [SideBar, setSideBar] = useState(false);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down -> Hide Navbar
        setIsVisible(false);
      } else {
        // Scrolling up -> Show Navbar
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setSideBar((prev) => !prev);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 shadow-md transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with Click Event */}
        <div
          className="flex items-center cursor-pointer transform hover:scale-110 transition duration-700 contrast-75 hover:contrast-700 drop-shadow-xl "
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>

        {/* Navigation Menu (Centered) */}
        <ul className="sm:flex flex-1 justify-center space-x-12 text-color1 font-medium hidden">
          {navLinks.map((item, index) => (
            <li key={index} className="relative group">
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
        {/* <span
          className="text-color1 block sm:block cursor-pointer transform hover:scale-110 transition duration-700 contrast-75 hover:contrast-700"
          onClick={() => handleClick()}
        >
          {SideBar? <X/> : <AlignJustify/>}
        </span> */}
        
      </div>
    </nav>
  );
};

export default Navbar;
