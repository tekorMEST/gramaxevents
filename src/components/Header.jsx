import React from 'react';
import Logo from '../assets/images/remove.png'; // Import the logo image
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header({ onBookNow }) {
  return (
    <header className="bg-blue-600 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img 
          src={Logo} 
          alt="Gramax Events Logo" 
          className="h-32 w-auto" // Adjusted logo size
        />
        <h1 className="text-white text-2xl font-bold ml-4">Gramax Events</h1> 
      </div>
      
      <nav className="flex-1 flex justify-center">
        <ul className="flex space-x-16">
          <li>
            <Link 
              to="/gallery" 
              className="text-white hover:text-gray-300 font-bold text-lg"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link 
              to="/prices" 
              className="text-white hover:text-gray-300 font-bold text-lg"
            >
              Prices
            </Link>
          </li>
        </ul>
      </nav>
      
      <div>
        <button 
          className="bg-white text-blue-600 font-semibold py-2 px-4 rounded grmax-animate"
          onClick={onBookNow}
        >
          Book Us Now
        </button>
      </div>
    </header>
  );
}

export default Header; 