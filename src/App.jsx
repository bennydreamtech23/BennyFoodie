
//react components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

 import {Routes, Route } from "react-router-dom";

//pages
import LandingPage from "./pages/landing-page/Landingpage";

//core
 import LoginPage from "./pages/core/login/Login"
 import SignupPage from "./pages/core/signup/Signup"
 import ForgetPasswordPage from "./pages/core/forgotpassword/ForgotPassword"
import OtpPage from "./pages/core/otp/Otp"
import ResetPasswordPage from "./pages/core/reset/Reset"
  
//cart stuff
import Carts from './pages/cart/Cart'
import { useSelector } from "react-redux"

function App() {
  const showCart = useSelector( state => state.cartList.cartIsVisible)
  
  return (
    <div className="app">
    
   <Navbar />
   {showCart && <Carts/>}
      <Routes>
        {/* pages */}
        <Route path="/" element={<LandingPage />} />
            
            {/*core*/}
     <Route path="/signup" element={<SignupPage />} />
 <Route path="/login" element={<LoginPage />} />
   <Route path="/forgotpassword" element={<ForgetPasswordPage/>}/>
   <Route path="/otp" element={<OtpPage/>}/>
    <Route path="/resetpassword" element={<ResetPasswordPage/>} />
</Routes>
    <Footer/>
    </div>
  )
}

export default App
