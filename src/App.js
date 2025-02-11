import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Herosection";
import Signup from "./Components/Signup";
import  LogIn  from "./Components/NavbarLogin";
import OTPVerification from "./Components/Verification";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/Verify" element={<OTPVerification />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
