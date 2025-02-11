import React from "react";
import Navbar from "./Navbar";
import doctorImage from "../assets/Images/Doc-Icon.svg";
import healthIcon from "../assets/Images/HealthIcon.svg";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 mt-5 bg-[#FAFAFA]">
        {/* Top Label */}
        <div className="bg-[#FFFFFF] text-[#272121] mt-16 sm:mt-20 px-6 py-2 rounded-full w-auto sm:w-[300px] h-[45px] text-sm sm:text-base font-medium flex items-center justify-center shadow-md">
          <img src={healthIcon} className="w-6 h-6 mr-2" alt="Health Icon" /> 
          Your health, Our Priority
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 leading-tight">
          Advanced treatment caring for <br className="hidden sm:block" /> every patient
        </h1>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <button className="bg-[#272121] text-[#FFFFFF] px-6 py-3 rounded-lg font-medium shadow-md w-[190px] flex items-center justify-center">
        Explore Packages
        </button>
        <button className="bg-[#D0343C] text-[#FFFFFF] px-6 py-3 rounded-lg font-medium shadow-md w-[190px] flex items-center justify-center">
        Book a Test
        </button>
        </div>
        {/* Doctors Image */}
        <div className=" w-full flex justify-center">
          <img src={doctorImage} alt="Doctors" className="w-[470px] h-[400px]" />
        </div>
      </div>
    </>
  );
};

export default Header;
