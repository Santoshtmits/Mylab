import Logo from "../assets/Images/FooterLogoicon.svg"; 
import Contactnew from "./Contact";

const Footer = () => {
  return (
    <>
    <Contactnew />
    <footer className="bg-gray-100 py-6 border-t">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Left Side - Logo */}
          <div className="flex items-center space-x-3">
            <img src={Logo} alt="MY Lab Logo" className="h-[120px] w-[400px] mt-[-10px]" />
            
          </div>

          {/* Right Side - Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 mt-8 font-small text-sm text-[#000000]">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Test Services</a>
            <a href="#" className="hover:underline">Contact us</a>
            <a href="#" className="hover:underline">Blogs</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Services</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-4 font-small text-sm text-[#000000]">
        Copyright © 2024 My Lab. All Rights Reserved.
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
