import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/categoriestest";
import HomeNAv from "./Components/Navhome";
import Labtest from "./Components/Populartest"
import Herosection from "./Components/Herosection";
import Signup from "./Components/Signup";
import LogIn from "./Components/NavbarLogin";
import OTPVerification from "./Components/Verification";
import Pupular from "./Components/Faq";
import Contact  from "./Components/Contact"
import Footer from "./Components/Footer";
import ProductList from "./Pages/ProductListing"

function App() {
  return (
    <Footer />
    // <Contact />
    // <Pupular />
    // <Home />
    //  <HomeNAv />
    // <Labtest />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/herosection" element={<Herosection />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;