
//react components
import {useState, useEffect, useContext} from 'react'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
 import {Routes, Route, Navigate } from "react-router-dom";
import {AuthProvider} from './pages/core/auth/AuthContext'
//import { useAuthState } from "react-firebase-hooks/auth";
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from "./pages/core/auth/firebase";
//pages
import LandingPage from "./pages/landing-page/Landingpage";
import AboutPage from "./pages/about/About";
import CateringPage from "./pages/catering/Catering";
import ContactPage from "./pages/contact/Contact";
import ContactUsPage from "./pages/contact_us/ContactUs";
import Allfoods from "./pages/allfoods/AllFoods"
import FoodDetails from './pages/food-details/FoodDetails'
import Checkout from './pages/checkout/Checkout'
import PaymentPage from './pages/payment/Payment'
import CartPage from './pages/cartPage/CartPage'

//core
//import PrivateRoute from './pages/core/PrivateRoute'
import VerifyEmail from './pages/core/verify_email/VerifyEmail';
 import LoginPage from "./pages/core/login/Login"
 import SignupPage from "./pages/core/signup/Signup"
 import ForgetPasswordPage from "./pages/core/reset_password/ResetPassword"

//cart stuff
import Carts from './pages/cart/Cart'
import { useSelector } from "react-redux"

function App() {
  const showCart = useSelector( state => state.cartList.cartIsVisible)
    const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)
  
  //const [user] = useAuthState(auth);
   useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])
  
  return (
    <div className="app">
    <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
   <Navbar />
   {showCart && <Carts/>}
      <Routes>
        {/* pages */}
        <Route 
        path="/" element={<LandingPage />} />
         <Route 
        path="/about" element={<AboutPage/>} />
         <Route 
        path="/services" element={<CateringPage/>} />
          <Route 
        path="/contact" element={<ContactPage/>} />
        
            <Route 
        path="/contact_us" element={<ContactUsPage/>} />
        <Route path="/menu" element={
        <Allfoods/>
}/>
        <Route path="/menu/:name" element={<FoodDetails />} />
        <Route path="/cart" element={<CartPage/>} />
         <Route path="/checkout" element={<Checkout/>} />
        
          <Route path="/payment" element={<PaymentPage/>} />
         
            {/*core*/}
     <Route path="/signup" element={
     !currentUser?.emailVerified 
            ? <SignupPage/>
            : <Navigate to='/menu' replace/>
          } />
 <Route path="/login" element={
  !currentUser?.emailVerified 
            ?  <LoginPage />
            : <Navigate to='/menu' replace/>
 } />
 <Route path='/verify-email' element={<VerifyEmail/>} /> 
 
  <Route path='/forgotpassword' element={<ForgetPasswordPage/>} /> 
</Routes>
    <Footer/>
    </AuthProvider>
    </div>
  )
}

export default App
