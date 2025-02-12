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
            <img src={Logo} alt="MY Lab Logo" className="h-24" />
            
          </div>

          {/* Right Side - Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-2 mt-4 md:mt-0 text-sm text-gray-600">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Test Services</a>
            <a href="#" className="hover:underline">Contact us</a>
            <a href="#" className="hover:underline">Blogs</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Services</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 border-t pt-4 text-center text-sm text-gray-500">
          Copyright © 2024 My Lab. All Rights Reserved.
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
