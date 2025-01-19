import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-6">
      <div className="max-w-7xl mx-auto px-10 flex justify-end">
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-700 text-lg font-semibold hover:text-gray-400">
            Home
          </Link>
          <Link to="/foto" className="text-gray-700 text-lg font-semibold hover:text-gray-400">
            Fotos
          </Link>
          <Link to="/video" className="text-gray-700 text-lg font-semibold hover:text-gray-400">
            Film
          </Link>
        
          <Link to="/about" className="text-gray-700 text-lg font-semibold hover:text-gray-400">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
