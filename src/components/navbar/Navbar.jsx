import { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [selectedCurrency, setSelectedCurrency] = useState("USD"); 
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    setIsDropdownOpen(false); 
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 
  return (
    <>
    <div className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
        ₿ CryptoPlace
        </Link>
        <div className="dropdown ">
              <button
                className="dropdown-btn"
                onClick={toggleDropdown}
              >
                {selectedCurrency} ▼
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li onClick={() => handleCurrencyChange("USD")}>USD</li>
                  <li onClick={() => handleCurrencyChange("EUR")}>EUR</li>
                  <li onClick={() => handleCurrencyChange("INR")}>INR</li>
                </ul>
              )}
            </div>
        {/* Hamburger Menu */}
        <div className="navbar-toggler" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Menu Items */}
        <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
       
          <li>
            <Link to="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/features" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Features
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/blog" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
          </li>
        </ul>
      </div>
      
    </div>
    <div className="separetor"></div>
    </>
  );
};

export default Navbar;
