import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "How it Works" },
    { id: 3, link: "FAQs" },
  ];

  return (
    <div className="flex justify-between items-center  w-full h-20 text-black fixed px-4 bg-white z-50">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">Hire Agency</h1>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize  font-medium text-black hover:scale-105 duration-200"
          >
            <Link to={link.toLowerCase()} smooth duration={500}>
              {link}
            </Link> 
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className="hidden md:block bg-[#006dff] text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600">
        I'M SERVICE PROVIDER
      </button>

      {/* Mobile Menu */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu Links */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-black">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link.toLowerCase()}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
       
          <li>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium mt-4">
              I'M SERVICE PROVIDER
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
