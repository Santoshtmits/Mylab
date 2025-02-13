import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/Images/LogoIcon.svg";
import { useNavigate } from "react-router-dom";
import healthIcon from "../assets/Images/HealthIcon.svg";
import bookingImage from "../assets/Images/BookingHome.svg";
import UnderBooking from "../assets/Images/UnderBookingIcon.svg";
import HomeImages from "../assets/Images/Doc-Icons.png";
import BookingIcon from "../assets/Images/Group.png";
import elcipse from "../assets/Images/Ellipse.svg";
import CornerRight from "../assets/Images/CornerRighttop.svg";
import CornerLeft from "../assets/Images/CornerLeft.svg";
import ConerButtonLeft from "../assets/Images/CornerButtonLeft.svg";
import ConerButtonRight from "../assets/Images/CornerButtonRight.svg";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-[#D0343C] w-full">
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar Header */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="logo" className="w-24 h-12" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 ml-auto font-medium text-sm">
            <Link to="/" className="text-[#FFFFFF] hover:text-blue-500">
              About Us
            </Link>
            <Link to="/services" className="text-[#FFFFFF] hover:text-blue-500">
              Our Services
            </Link>
            <Link to="/packages" className="text-[#FFFFFF] hover:text-blue-500">
              Packages
            </Link>
            <button
              onClick={() => navigate("/signup")}
              className="text-[#FFFFFF] bg-[#272121] rounded-lg px-4 py-2 w-[150px] h-[30px] flex items-center justify-center"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
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
      <div className="h-[200px] grid grid-cols-2 gap-4 items-center justify-between"> 
        <img
          src={elcipse}
          alt="eclipse"
          className="h-20 ml-[-25px] mt-[-50px] transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <img 
          src={elcipse}
          alt="eclipse"
          className="h-24 ml-[-80px] mt-[-70px] transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      {/* Booking Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-16 mt-8">
        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col">
          <div className="bg-[#FFFFFF] text-[#272121] rounded-lg w-full sm:w-[230px] h-[35px] mt-[-270px] ml-[30px] text-ss  font-small flex items-center justify-center">
            <img src={healthIcon} className="w-6 h-6 mr-2" alt="Health Icon" />
            Your health, Our Priority
          </div>

          {/* Main Heading */}
          <p className="text-2xl  font-bold text-[#FFFFFF] ml-[30px] mb-2">
            Accurate Body Tests from <br /> Lab
          </p>
          
          {/* Booking Info Section */}
          <div className="bg-[#C62A32] w-full sm:w-[770px] h-[85px] flex justify-center items-center ml-4 sm:ml-[-62px] mt-[50px]">
            <div className="bg-[#000000] bg-opacity-16 text-[#FFFFFF]  w-full sm:w-[430px] h-[160px] rounded-lg flex flex-col justify-center items-center  animate-scroll-right-left relative ">
          {/*  Corner */}
          <div className="">
          
          <img src={CornerLeft} alt="Corner" className="top-[-17px] right-[229px] w-8 h-8  relative" />
          <img src={CornerRight} alt="Corner" className="top-0 left-[427px] w-8 h-8 mt-0 absolute" />
          <img src={ConerButtonRight} alt="Corner" className="bottom-[-80px] left-[228px] w-8 h-8  relative" />
          <img src={ConerButtonLeft} alt="Corner" className="bottom-[-45px] right-[230px] w-8 h-8  relative" />
          </div>
              <div className="flex items-center justify-center absolute top-0 p-4">
                <img src={UnderBooking} alt="Booking" className="w-10 h-10 mr-2" />
                <p className="text-xls font-small ">
                  Book our health checkups with body test,{" "}
                  <span className="font-bold text-xls">STARTING AT Rs 999</span>
                </p>
              </div>
              <button className="bg-[#D0343C] text-[#FFFFFF] font-medium text-sm px-6 py-2 rounded-lg mt-2 transition w-[138px] h-[40px] mt-[-10px] mr-[170px] ">
                Book Now
              </button>
            </div>
          </div>
        </div>
       
        {/* Image Section */}
        <div className="relative w-full md:w-1/2">
          <img
            src={bookingImage}
            alt="Booking"
            className="w-full ml-[20px] mt-[-230px] transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>  
      </div>
    </nav>
  );
};

export default Navbar;