import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OTPIcon from "../assets/Images/OTP-Icon.svg";

const OTPVerification = ({ phoneNumber }) => {
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigate = useNavigate();

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Allow only numbers
    setOtp(value);

    // Clear error message when user starts typing again
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleVerifyOTP = () => {
    if (/^\d{6}$/.test(otp)) {
      navigate("/"); // Navigate to the next page on successful OTP verification
    } else {
      setErrorMessage("Please enter a valid 6-digit OTP."); // Set error message if OTP is invalid
    }
  };

  return (
    <div className="w-full ">
      <p className="text-xl md:text-2xl font-medium text-[#272121] mt-3">OTP Verification!</p>
      <p className="text-[#989898] text-sm md:text-base font-regular mb-2 mt-2">
        Verify your phone number using the OTP sent to the number{" "}
        <span className="font-medium text-sm md:text-base text-[#272121] block">{`+91 ${phoneNumber}`}</span>
      </p>
      
      {/* OTP Verification Section */}
      <label className="text-[#252525] font-medium text-sm md:text-base w-full">OTP Verification</label>
      <div className="relative mt-2">
        <img
          src={OTPIcon}
          alt="OTP Icon"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
        />
        <input
          type="text"
          value={otp}
          onChange={handleOtpChange}
          maxLength="6"
          placeholder="Enter your OTP"
          className="w-full md:w-[490px] h-[42px] pl-10 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#EBEBEB]"
        />
      </div>

      {/* Display error message */}
      {errorMessage && (
        <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
      )}

      {/* Resend OTP section */}
      <div className="flex justify-between items-center mt-3">
        <button className="text-[#272121] font-medium text-sm md:text-base">Resend OTP?</button>
      </div>

      {/* Verify OTP button */}
      <button
        onClick={handleVerifyOTP}
        className="w-full md:w-[180px] h-[40px] bg-[#D0343C] text-[#FFFFFF] font-medium py-2 px-4 rounded mt-4"
      >
        Verify your OTP
      </button>
    </div>
  );
};

export default OTPVerification;
