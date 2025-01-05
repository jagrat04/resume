import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleScroll = (id) => {
    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-lg w-full border-4 border-red-500">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-2xl font-bold tracking-wide cursor-pointer"
          onClick={() => handleScroll('home')}
        >
          MyPortfolio
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <button
            onClick={() => handleScroll('home')}
            className="hover:text-blue-400 transition"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll('about')}
            className="hover:text-blue-400 transition"
          >
            About
          </button>
          <button
            onClick={() => handleScroll('projects')}
            className="hover:text-blue-400 transition"
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll('blog')}
            className="hover:text-blue-400 transition"
          >
            Blog
          </button>
          <button
            onClick={() => handleScroll('chat')}
            className="hover:text-blue-400 transition"
          >
            Chat
          </button>
          <a
            href="/contact"
            className="hover:text-blue-400 transition"
          >
            Contact
          </a>
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
