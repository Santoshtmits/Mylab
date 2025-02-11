import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; 
import logo from "../assets/Images/LogoIcon.svg";
import Profile from "../assets/Images/ProfileIcon.svg";
import CardIcon from "../assets/Images/CardIcon.svg";

const NavbarLogin = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#FFFFFF] w-full fixed top-0 left-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="logo" className="w-24 h-12" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 ml-auto font-medium">
            <Link to="/" className="text-[#272121] hover:text-blue-500">
              About Us
            </Link>
            <Link to="/services" className="text-[#272121] hover:text-blue-500">
              Our Services
            </Link>
            <Link to="/packages" className="text-[#272121] hover:text-blue-500">
              Packages
            </Link>
           <img src={Profile} alt="Profile" className=""/>
           <img src={CardIcon} alt="Card" className=""/>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 p-4 bg-white shadow-lg rounded-lg">
            <Link to="/" className="text-gray-700 hover:text-blue-500" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-500" onClick={() => setMenuOpen(false)}>
              Our Services
            </Link>
            <Link to="/packages" className="text-gray-700 hover:text-blue-500" onClick={() => setMenuOpen(false)}>
              Packages
            </Link>
            <Link
              to="/login"
              className="text-white bg-red-600 rounded-lg px-6 py-2 hover:bg-red-700 transition text-center"
              onClick={() => setMenuOpen(false)}
            >
              LOGIN/SIGN UP
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarLogin;
