import React, { useState } from "react";
import Navbar from "./Navbar";
import OTPVerification from "./Verification"; // Ensure the correct import
import SignupImage from "../assets/Images/SignupImages.svg";
import SignupIcon from "../assets/Images/Signup-icon.svg";
import PhoneIcon from "../assets/Images/Phone-Icon.svg";

const Signup = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Error state to display validation message

  const handleInputChange = (e) => {
    if (isSubmitted) return; // Prevent editing after submission
    const value = e.target.value.replace(/\D/g, ""); // Allow only numbers
    setPhoneNumber(value);

    // Clear error message when user starts typing again
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleLogin = () => {
    if (/^\d{10}$/.test(phoneNumber)) {
      setIsSubmitted(true); // Lock phone number and show OTP section
    } else {
      setErrorMessage("Please enter a valid 10-digit phone number.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col-reverse md:flex-row bg-[#FAFAFA]">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={SignupImage}
            alt="Signup"
            className="w-full h-[400px] sm:h-[500px] md:h-[632px] object-cover"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-1/2 md:mt-24 flex flex-col items-center bg-[#FAFAFA] p-4 md:p-0">
          <div className="w-full max-w-md mx-auto">
            <div className="mb-4">
              <img src={SignupIcon} alt="Logo" className="h-[50px] w-[50px]" />
            </div>
            <h2 className="text-xl md:text-2xl font-medium text-[#272121]">
              Welcome to My Lab
            </h2>
            <p className="text-[#989898] text-sm mt-3 mb-5">
              Please enter your phone number to create and log in to your account.
            </p>

            {/* Phone Number Section */}
            <label className="text-[#252525] font-medium">Phone Number</label>
            <div className="relative w-full">
              {/* Phone Icon */}
              <img
                src={PhoneIcon}
                alt="Phone Icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
              />

              {/* Input Field */}
              <input
                type="text"
                value={isSubmitted ? "" : phoneNumber} // Hide number after submission
                onChange={handleInputChange}
                placeholder="Enter your phone number..."
                maxLength="10"
                disabled={isSubmitted} // Disable after submission
                className={`w-full md:w-[490px] h-[42px] pl-10 p-2 border rounded mt-1 focus:outline-none focus:ring-2 ${
                  isSubmitted
                    ? "bg-[#FFFFFF] text-gray-400 cursor-not-allowed"
                    : "focus:ring-[#EBEBEB] text-black"
                }`}
              />
            </div>

            {/* Display error message */}
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}

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
