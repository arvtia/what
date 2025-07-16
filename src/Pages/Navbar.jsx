import { useState } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Track menu state

const navlinks = [
   {name: "Home", Path:"/" },
   {name: "About me", Path:"/about" },
   {name: "projects", Path:"/project" },
   {name: "Contact me", Path:"/contact" },
   {name: "Blogs", Path:"/Blogs" }
];


  return (
    <div className="w-full top-0 fixed inset-x-0 z-50 mb-5 mt-0 pb-3">
      <nav className="md:w-[80%] md:mt-5 mx-auto justify-center bg-white/10 backdrop-blur-md shadow-lg ring-1 ring-gray-300 rounded-none md:rounded-full">
        <header className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            <span className="text-emerald-500">Arvaz</span> Mansuri
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-4 text-gray-800 font-medium">
            
            {
               navlinks.map((item, index)=>(
                  <li key={index} className="hover:text-emerald-500  ">
                     <Link to={item.Path}>
                        <span className="px-2 py-2 delay-100 hover:bg-gray-300 rounded-md">{item.name}</span>
                     </Link>                     
                  </li>
               ))
            }
          </ul>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              className="text-gray-800 text-2xl"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>
        </header>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden px-6 pb-4">
            <ul className="flex flex-col gap-4 text-gray-800 font-medium">
              {
                navlinks.map((item, i)=>(
                  <a href={item.Path}>
                    <li className="hover:text-emerald-500 transition">{item.name}</li>
                  </a>
                ))
              }
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;