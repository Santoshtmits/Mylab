import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OTPVerification = ({ phoneNumber }) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Allow only numbers
    setOtp(value);
  };

  const handleVerifyOTP = () => {
    if (/^\d{6}$/.test(otp)) {
      alert("OTP Verified Successfully!");
      navigate("/dashboard"); // Navigate to the next page
    } else {
      alert("Please enter a valid 6-digit OTP");
    }
  };

  return (
    <div className="w-full mt-6 bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800">OTP Verification</h3>
      <p className="text-gray-500">
        Verify your phone number using the OTP sent to{" "}
        <span className="font-bold">+91 {phoneNumber}</span>
      </p>

      <label className="block text-gray-700 font-medium mt-2">
        Enter OTP
      </label>
      <input
        type="text"
        value={otp}
        onChange={handleOtpChange}
        maxLength="6"
        placeholder="Enter your OTP"
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex justify-between items-center mt-4">
        <button className="text-blue-500 hover:underline">Resend OTP?</button>
      </div>

      <button
        onClick={handleVerifyOTP}
        className="w-full bg-red-500 text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-red-600 transition"
      >
        Verify your OTP
      </button>
    </div>
  );
};

export default OTPVerification;
