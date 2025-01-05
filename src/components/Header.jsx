import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-lg w-full border-4 border-red-500">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          MyPortfolio
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#blog" className="hover:text-blue-400 transition">Blog</a>
          <a href="#chat" className="hover:text-blue-400 transition">Chat</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          className="hidden md:block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          download
        >
          Download Resume
        </a>
      </div>
    </header>
  );
};

export default Header;

  