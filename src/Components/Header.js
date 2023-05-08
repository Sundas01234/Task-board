import React, { useState } from 'react';
import { Link } from "react-router-dom";
import images from "../images/logo.png"

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <img src={images} className="w-100 h-10 mr-2" alt="Logo" />
      </div>
      <div className="block lg:hidden">
  
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
      >
        <div className="text-sm lg:flex-grow">
          <Link to="./Page1" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            Home
          </Link>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            Exchanges
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            News
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            Tools
          </a>
        </div>
        <div  class="border rounded overflow-hidden flex">
        
        <button onClick={''}>Login</button>
      </div>
      </div>
    </nav>
  );
}
export default Header;
