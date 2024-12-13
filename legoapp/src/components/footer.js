import React from 'react';

const Footer = () => {
  return (
    <footer className="footer footer-center bg-gray-200 text-gray-800 rounded p-10">
      {/* Navigation Links */}
      <nav className="grid grid-flow-col gap-4">
        <a href="/about" className="link link-hover text-sm">About</a>
        <a href="/foto" className="link link-hover text-sm">Fotos</a>
        <a href="/video" className="link link-hover text-sm">Video</a>
        <a href="/sets" className="link link-hover text-sm">sets</a>
      </nav>
      
      
      

      {/* Copyright Section */}
      <aside>
        <p className="text-xs">
          © {new Date().getFullYear()} All rights reserved 
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
