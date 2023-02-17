import {Container, Nav, Badge} from 'react-bootstrap';
import {FaBars} from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import {BsCart4, BsPerson} from "react-icons/bs";
import { useEffect, useState} from "react";
import "./Navbar.scss";
import { useSelector, useDispatch } from "react-redux"
import {cartListActions} from '../../store/shopping-cart/cartListSlice'


function NavbarTool() {
const navigate = useNavigate()
const totalQuantity = useSelector(state => state.cart.totalQuantity)

   const user = localStorage.getItem('user')
   
 const dispatch = useDispatch()
 
 const toggleCart = () =>{
   if(!user === "true"){
     navigate('/signup')
   }else{
       dispatch(cartListActions.toggle())
   }
   }
 
const handleSignup = (e) =>{
  e.preventDefault()
  navigate('/signup')
}

const handleLogin = (e) =>{
  e.preventDefault()
  navigate('/login')
 
}

  const logout = (e) =>{
    e.preventDefault()
    localStorage.removeItem('user')
    navigate('/')
//console.log(logout)
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
  
    <Link to="/" className="navbar-brand">
    Bennyfoodie.
    </Link>
    
    <button className="navbar-toggler"
    type="button" 
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasExample" 
    aria-controls="offcanvasExample" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
<FaBars/>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {!user ?
      <>
        <li className="nav-item">
        
          <Link to="/about" 
          className="nav-link">
          About
          </Link>
          
        </li>
     
     <li className="nav-item">
           <Link  to="/services" 
          className="nav-link">
    Services
          </Link>
        </li>
     
  
          <li className="nav-item">
           <Link to="/contact" 
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
        <span className="iconPlus" to="/cart" onClick={user ? toggleCart : ''}>
        <BsCart4 className="h3 text-light"/>
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
        <button className="resumebtn" onClick={handleSignup}>
        Register
        </button>
        
         <button className="resumebtn"
         onClick={handleLogin}>
          Login
        </button>
        </>
        :
        <>
         <button className="resumebtn"
         onClick={logout}>
           Logout
        </button>
        </>
      }
      
      </form>

    </div>
  </Container>
  
</Nav>

{/*offcanvas section*/}

<div className="offcanvas offcanvas-start" 
tabIndex="-1"
id="offcanvasExample" 
aria-labelledby="offcanvasExampleLabel">

  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
    Bennyfoodie.</h5>
    
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  
  <div className="offcanvas-body">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {!user ?
      <>
        <li className="nav-item">
        
          <Link to="/about" 
          className="nav-link">
          About
          </Link>
          
        </li>
     
     <li className="nav-item">
           <Link  to="/services" 
          className="nav-link">
    Services
          </Link>
        </li>
     
  
          <li className="nav-item">
           <Link to="/contact" 
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
        <span className="iconPlus" to="/cart" onClick={user ? toggleCart : ''}>
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
        <button className="resumebtn" onClick={handleSignup}>
        Register
        </button>
        
         <button className="resumebtn"
         onClick={handleLogin}>
          Login
        </button>
        </>
        :
        <>
         <button className="resumebtn"
         onClick={logout}>
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
