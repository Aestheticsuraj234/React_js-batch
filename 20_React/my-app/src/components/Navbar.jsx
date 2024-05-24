import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {


  return (
    <nav className="bg-gray-800 dark:bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">

        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/services" className="hover:text-gray-400">Services</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
      
      </div>
    </nav>
  );
};

export default Navbar;
