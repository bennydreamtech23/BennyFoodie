import {Container, Nav} from 'react-bootstrap';
import {FaBars} from "react-icons/fa";
import {Link} from "react-router-dom";
import {BsCart4, BsPerson} from "react-icons/bs";
import { useEffect, useState} from "react";
import "./Navbar.scss";
import LoginModal from '../../pages/core/login/Login'
import SignupModal from '../../pages/core/signup/Signup'
function NavbarTool() {
const [show, setShow] = useState(false)
const [isOpen, setIsOpen] = useState(false)

const handleSignup = (e) =>{
  e.preventDefault()
  setShow(true)
}

const handleLogin = (e) =>{
  e.preventDefault()
  setIsOpen(true)
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
      
        <li className="nav-item">
        
          <a as={Link} to="/about" 
          className="nav-link">
          About
          </a>
          
        </li>
        
        <li className="nav-item">
           <a as={Link} to="/menu" 
          className="nav-link">
          Menu
          </a>
        </li>
        
          <li className="nav-item">
           <a as={Link} to="/menu" 
          className="nav-link">
    Cart
          </a>
        </li>
        
          <li className="nav-item">
           <a as={Link} to="/menu" 
          className="nav-link">
          Contact
          </a>
        </li>
      </ul>
      
      <form className="d-flex gap-4">
      
        <button className="resumebtn" onClick={handleSignup}>
        Register
        </button>
        
         <button className="resumebtn" 
         onClick={handleLogin}>
   Login
        </button>
      </form>
    </div>
  </Container>
  
</Nav>

{/*offcanvas section*/}

<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
    Bennyfoodie.</h5>
    
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  
  <div className="offcanvas-body">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li className="nav-item">
        
          <a as={Link} to="/about" 
          className="nav-link">
          About
          </a>
          
        </li>
        
        <li className="nav-item">
           <a as={Link} to="/menu" 
          className="nav-link">
          Menu
          </a>
        </li>
        
          <li className="nav-item">
           <a as={Link} to="/menu" 
          className="nav-link">
    Cart
          </a>
        </li>
        
          <li className="nav-item">
           <a as={Link} to="/menu" 
          className="nav-link">
          Contact
          </a>
        </li>
     
      <form className="d-flex flex-column gap-4 mt-3">
      
        <button className="resumebtn"
        onClick={handleSignup}>
        Register
        </button>
        
         <button className="resumebtn"
         onClick={handleLogin}>
   Login
        </button>
      </form>
      </ul>
    
  </div>
</div>

      <SignupModal
        show={show}
        onHide={() => setShow(false)}
      />
 
  <LoginModal
        show={isOpen}
        onHide={() => setIsOpen(false)}
      />
      
    </div>
  );
}

export default NavbarTool;
