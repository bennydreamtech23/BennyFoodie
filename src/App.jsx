//react components
import { useState, useEffect, useContext } from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './pages/core/auth/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from './pages/core/auth/firebase'
import { query, collection, getDocs, where } from 'firebase/firestore'
//pages
import LandingPage from './pages/landing-page/Landingpage'
import AboutPage from './pages/about/About'
import CateringPage from './pages/catering/Catering'
import ContactPage from './pages/contact/Contact'
import ContactUsPage from './pages/contact_us/ContactUs'
import Allfoods from './pages/allfoods/AllFoods'
import FoodDetails from './pages/food-details/FoodDetails'
import Checkout from './pages/checkout/Checkout'
import PaymentPage from './pages/payment/Payment'
import CartPage from './pages/cartPage/CartPage'

//core
//import PrivateRoute from './pages/core/PrivateRoute'
import VerifyEmail from './pages/core/verify_email/VerifyEmail'
import LoginPage from './pages/core/login/Login'
import SignupPage from './pages/core/signup/Signup'
import ForgetPasswordPage from './pages/core/reset_password/ResetPassword'

//cart stuff
import Carts from './pages/cart/Cart'
import { useSelector } from 'react-redux'

function App() {
  const showCart = useSelector((state) => state.cartList.cartIsVisible)
  //const [user, loading, error] = useAuthState(auth)
  const [currentUser, setCurrentUser] = useState(null)
  const [userData, setUserData] = useState({})
  const [timeActive, setTimeActive] = useState(false)

  const titleCase = (str) => {
    str = str.toLowerCase().split(' ')
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
    }
    return str.join(' ')
  }

  const fetchUser = async (userid) => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', userid))
      const doc = await getDocs(q)
      const docid = doc.docs[0].id
      const data = doc.docs[0].data()
      data.name = titleCase(data.name)
      data.docId = docid
      setUserData(data)
    } catch (err) {
      console.error(err)
      //alert("An error occured while fetching user data");
    }
  }

  //const [user] = useAuthState(auth);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      fetchUser(user?.uid)
    })
  }, [])

  return (
    <div className='app'>
      <AuthProvider
        value={{ currentUser, timeActive, setTimeActive, userData }}
      >
        <Navbar />
        {showCart && <Carts />}
        <Routes>
          {/* pages */}
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services' element={<CateringPage />} />
          <Route path='/contact' element={<ContactPage />} />

          <Route path='/contact_us' element={<ContactUsPage />} />
          <Route path='/menu' element={<Allfoods />} />
          <Route path='/menu/:name' element={<FoodDetails />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<Checkout />} />

          <Route path='/payment' element={<PaymentPage />} />

          {/*core*/}
          <Route
            path='/signup'
            element={
              !currentUser?.emailVerified ? (
                <SignupPage />
              ) : (
                <Navigate to='/menu' replace />
              )
            }
          />
          <Route
            path='/login'
            element={
              !currentUser?.emailVerified ? (
                <LoginPage />
              ) : (
                <Navigate to='/menu' replace />
              )
            }
          />
          <Route path='/verify-email' element={<VerifyEmail />} />

          <Route path='/forgotpassword' element={<ForgetPasswordPage />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  )
}

export default App
