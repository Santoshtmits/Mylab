import React, { useState } from "react";
import Navbar from "./Navbar";
import OTPVerification from "./Verification"; // Ensure the correct import
import SignupImage from "../assets/Images/SignupImages.svg";
import SignupIcon from "../assets/Images/Signup-icon.svg";
import PhoneIcon from "../assets/Images/Phone-Icon.svg"


const Signup = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    if (isSubmitted) return; // Prevent editing after submission
    const value = e.target.value.replace(/\D/g, ""); // Allow only numbers
    setPhoneNumber(value);
  };

  const handleLogin = () => {
    if (/^\d{10}$/.test(phoneNumber)) {
      setIsSubmitted(true); // Lock phone number and show OTP section
    } else {
      alert("Please enter a valid 10-digit phone number");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col-reverse md:flex-row bg-[#FAFAFA]">
        <div className="w-full md:w-1/2">
          <img
            src={SignupImage}
            alt="Signup"
            className="w-[625px] h-[632px] object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 mt-10 md:mt-32  flex flex-col items-center bg-[#FAFAFA]">
          <div className="w-full">
            <div className="mb-4">
              <img src={SignupIcon} alt="Logo" className="h-[50px] w-[50px]" />
            </div>
            <h2 className="text-xxl font-medium text-[#272121]">
            Welcome to the My Lab
            </h2>
            <p className="text-[#989898] text-sm mt-4 mb-7">
              Please enter your phone number to create and log in to your account.
            </p>

           {/* Phone Number Section */}
            <label className="text-[#252525] font-medium mt-4">Phone Number</label>
            <div className="relative w-full">
             <img
              src={PhoneIcon} 
              alt="Phone Icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
             />
  
            {/* Input Field */}
            <input
            type="text"
            value={phoneNumber}
            onChange={handleInputChange}
            placeholder="Enter your phone number..."
            maxLength="10"
            disabled={isSubmitted} // Disable after submission
        className={`w-[510px] h-[42px] pl-10 p-2 border rounded mt-1 focus:outline-none focus:ring-2 ${
         isSubmitted ? "bg-[#FFFFFF] cursor-not-allowed" : "focus:ring-[#EBEBEB]"
        }`}
         />
        </div>


            {!isSubmitted && (
              <button
                onClick={handleLogin}
                className="w-full md:w-[180px] h-[40px] bg-[#D0343C] text-white font-bold py-2 px-4 rounded mt-4"
              >
                LOGIN / SIGN UP
              </button>
            )}

            {isSubmitted && <OTPVerification phoneNumber={phoneNumber} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
