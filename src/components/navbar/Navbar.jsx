import { useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import "./Navbar.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout} from "../../pages/core/auth/firebase";
//component from bootstrap
import {Container, Nav, Badge} from 'react-bootstrap';
//icons
import {FaBars} from "react-icons/fa";
import {BsCart4, BsPerson} from "react-icons/bs";
//from react redux
import { useSelector, useDispatch } from "react-redux"
import {cartListActions} from '../../store/shopping-cart/cartListSlice'

function NavbarTool() {
const navigate = useNavigate()
//logout function
  const [user, loading] = useAuthState(auth);
const totalQuantity = useSelector(state => state.cart.totalQuantity)

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);


 const dispatch = useDispatch()
 
 const toggleCart = () =>{
       dispatch(cartListActions.toggle())
   }
   
  const newuser = () =>{
  navigate('/signup')
  }
 
 //handlesignup and handlelogin
const handleSignup = (e) =>{
  e.preventDefault()
  navigate('/signup')
}

const handleLogin = (e) =>{
  e.preventDefault()
  navigate('/login')
 
}


 const [stickyClass, setStickyClass] = useState('');
   useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };
  
  return (
    <div 
    className={`${stickyClass} "navbar"`} >
    
   <Nav className="navbar navbar-expand-xl navbar-dark">
   
  <Container fluid>
  
    <Link to="/" 
    className="navbar-brand">
    Bennyfoodie.
    </Link>
    
    <button 
    className="navbar-toggler"
    type="button" 
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasExample" 
    aria-controls="offcanvasExample" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
<FaBars/>
    </button>
    
    <div 
    className="collapse navbar-collapse" 
    id="navbarSupportedContent">
    
      <ul 
      className="navbar-nav me-auto mb-2 mb-lg-0">

 <li className="nav-item">
           <Link  to="/services" 
          className="nav-link">
 Catering
          </Link>
        </li>
        
        {!user ?
        <>
        <li className="nav-item">
          <Link to="/about" 
          className="nav-link">
          About
          </Link>
        </li>
            <li className="nav-item">
          <Link to="/contact_us" 
          className="nav-link">
       Contact
          </Link>
        </li>
        </>
:
<>
      <li className="nav-item">
           <Link  to="/menu" 
          className="nav-link">
          Menu
          </Link>
        </li>
        
         <li className="nav-item">
           <Link  to="/cart" 
          className="nav-link">
          Cart
          </Link>
        </li>
        </>
        }
    </ul>
    
     <form className="d-flex me-5">
        <span 
        className="iconPlus"
        to="/cart" 
        onClick={user ? toggleCart : newuser}>
        <BsCart4 
        className="h3 text-light"/>
        
        <Badge
        bg="secondary"
        className="badge__content">
        {!user ? 0 : totalQuantity}
        </Badge>
        </span>
        
        {user ?
        <BsPerson
        className="h3 text-light ms-4" /> 
        :
        ""}
      </form>
      
      <form
      className="d-flex gap-4">
      {!user ? 
      <>
        <button 
        className="signup" 
        onClick={(e) => handleSignup(e)}>
        Register
        </button>
        
         <button 
         className="login"
         onClick={(e) => handleLogin(e)}>
          Login
        </button>
        </>
        :
        <>
         <button 
         className="signup"
         onClick={(e) => logout(e)}>
           Logout
        </button>
        </>
      }
      </form>
    </div>
  </Container>
</Nav>

{/*offcanvas section*/}
<div 
className="offcanvas offcanvas-start" 
tabIndex="-1"
id="offcanvasExample" 
aria-labelledby="offcanvasExampleLabel">

  <div 
  className="offcanvas-header">
    <Link 
    to='/'
    className="offcanvas-title text-decoration-none text-dark h1" 
    data-bs-dismiss="offcanvas" 
    aria-label="Close"
    id="offcanvasExampleLabel">
    Bennyfoodie.
    </Link>
    
    <button 
    type="button" 
    className="btn-close text-reset" 
    data-bs-dismiss="offcanvas" aria-label="Close">
    </button>
  </div>
  
  <div 
  className="offcanvas-body">
    <ul
    className="navbar-nav me-auto mb-2 mb-lg-0">
    
       <li 
     className="nav-item">
     <Link  
    to="/services" 
    data-bs-dismiss="offcanvas" aria-label="Close"
   className="nav-link">
Catering
          </Link>
        </li>
        
      {!user ?
      <>
        <li 
        className="nav-item">
        
          <Link 
          to="/about" 
          className="nav-link"
          data-bs-dismiss="offcanvas"
          aria-label="Close">
          About
          </Link>
        </li>
        
          <li className="nav-item">
          <Link to="/contact_us" 
          className="nav-link">
       Contact
          </Link>
        </li>
        </>
:
<>
      <li className="nav-item">
           <Link  to="/menu" 
          className="nav-link">
          Menu
          </Link>
        </li>
        
        
         <li className="nav-item">
           <Link  to="/cart" 
          className="nav-link">
          Cart
          </Link>
        </li>
        </>
      }

     
  <form className="d-flex me-5">
        <span className="iconPlus" to="/cart" onClick={user ? toggleCart : newuser}>
        <BsCart4 className="h3 text-dark"/>
        <Badge bg="secondary" className="badge__content">{user ? totalQuantity : 0}
        </Badge>
        </span>
        
        {user ?
        <BsPerson className="h3 text-light ms-4" /> 
        :
        ""}
      </form>
     
       <form className="d-flex gap-4">
      
      {!user ? 
      <>
        <button className="login" onClick={(e) => handleSignup(e)}>
        Register
        </button>
        
         <button className="signup"
         onClick={(e) => handleLogin(e)}>
          Login
        </button>
        </>
        :
        <>
         <button className="signup"
         onClick={(e) => logout(e)}>
           Logout
        </button>
        </>
      }
  </form>
      </ul>
  </div>
</div>
    </div>
  );
}

export default NavbarTool;
