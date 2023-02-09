
//react components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

 import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";

//pages
import LandingPage from "./pages/landing-page/Landingpage";

function App() {
  return (
    <div className="app">

<HashRouter>
     <Navbar />
      <Routes>
        {/* pages */}
        <Route path="/" element={<LandingPage />} />
    </Routes>
      </HashRouter>
    <Footer/>
    </div>
  )
}

export default App
