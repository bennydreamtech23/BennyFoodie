
import {Row, Col, Container, Nav} from 'react-bootstrap';
import { AiOutlineTwitter, AiFillFacebook, AiFillInstagram,
AiOutlineCopyrightCircle} from "react-icons/ai";
import footerStyles from "./Footer.module.scss";
import {Link} from "react-router-dom"

const Footer = () =>{
  return(
    <footer>
 <Row className='d-flex gap-4 justify-content-center'>
 
   <Col
xl='6' lg='12' md='12' sm='12'>
   
<h1 className={footerStyles.heading}>BennyFoodie</h1>
<p className={footerStyles.subtext}>
Healthy and mouth watering dishes prepared by the best chef in order to satisfy the stomach need of their lovely customers
</p>
    </Col>
    
     <Col  xl='2' lg='6' md='6'  sm='4'>
<h1 className={footerStyles.heading}>
Site map
</h1>

<Nav className="flex-column">
      <Link to="/services" 
      className={footerStyles.link}>
   Catering
      </Link>
      
     <Link to="/about" 
     className={footerStyles.link}>
     About
     </Link>
    </Nav>
    </Col>
    
     <Col xl='2' lg='4' md='4'  sm='4'>
<h1 className={footerStyles.heading}>
Social Media
</h1>

<Nav className={footerStyles.icons}>
      <Link to="/" 
      className={footerStyles.link}>
      <AiOutlineTwitter className={footerStyles.icon}/>
      </Link>
      
       <Link to= "/" className={footerStyles.link}>
        <AiFillInstagram className={footerStyles.icon}/>
        </Link>
        
     <Link to="/" className={footerStyles.link}>
   <AiFillFacebook className={footerStyles.icon}/>
   </Link>
    </Nav>
    </Col>

    </Row>
<div className='d-flex align-items-center justify-content-center mt-5'>
<a href='#top'
className='text-white text-center text-decoration-none fw-bold h4'>
top of the page &uarr;	
</a>
</div>
     <div className={footerStyles.footerRuler}></div>
     
<div className={footerStyles.footerButtom}>
            <p className={footerStyles.footersmall}>
            Website Developed by 
             <strong className={footerStyles.footernote}> Bennydreamtech</strong>
            </p>
</div>
</footer>
    )
}
export default Footer
