import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          Logo
        </Link>

        {/* Hamburger Icon */}
        <div
          className="lg:hidden flex flex-col items-center space-y-1 cursor-pointer"
          onClick={toggleMenu}
        >
          <span className="block w-6 h-1 bg-white"></span>
          <span className="block w-6 h-1 bg-white"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </div>

        {/* Menu Items */}
        <ul
          className={`lg:flex lg:space-x-6 space-y-4 lg:space-y-0 absolute lg:relative top-16 left-0 w-full bg-black lg:bg-transparent bg-opacity-70 backdrop-blur-md transition-all ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/"
              className="text-white hover:text-green-400 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className="text-white hover:text-green-400 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className="text-white hover:text-green-400 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-white hover:text-green-400 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
