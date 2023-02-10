
//react components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

 import {Routes, Route } from "react-router-dom";

//pages
import LandingPage from "./pages/landing-page/Landingpage";
 import LoginPage from "./pages/core/login/Login"
 import SignupPage from "./pages/core/signup/Signup"


function App() {
  return (
    <div className="app">
    
   <Navbar />
      <Routes>
        {/* pages */}
        <Route path="/" element={<LandingPage />} />
            
            {/*core*/}
     <Route path="/signup" element={<SignupPage />} />
 <Route path="/login" element={<LoginPage />} />
</Routes>
    <Footer/>
    </div>
  )
}

export default App
