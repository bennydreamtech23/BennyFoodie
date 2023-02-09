
import {Row, Col, Container, Nav} from 'react-bootstrap';
import { AiOutlineTwitter, AiFillFacebook, AiFillInstagram,
AiOutlineCopyrightCircle} from "react-icons/ai";
import footerStyles from "./Footer.module.scss";

const Footer = () =>{
  return(
    <>
    <footer>
    
 <Row className={footerStyles.roller}>
 
   <Col className={footerStyles.col2}>
   
<h1 className={footerStyles.heading}>BennyFoodie</h1>
<p className={footerStyles.subtext}>
Healthy and mouth watering dishes prepared by the best chef in order to satisfy the stomach need of their lovely customers
</p>
    </Col>
    
     <Col className={footerStyles.col2}>
<h1 className={footerStyles.heading}>Services</h1>
<Nav className="flex-column">
      <Nav.Link href="/" className={footerStyles.link}>Menu</Nav.Link>
       <Nav.Link href="/" className={footerStyles.link}>Contact</Nav.Link>
     <Nav.Link href="/" className={footerStyles.link}>About</Nav.Link>
    </Nav>
    </Col>
    
     <Col className={footerStyles.col2}>
<h1 className={footerStyles.heading}>Social Media</h1>

<Nav className="d-flex justify-content-center">

      <Nav.Link href="/" className={footerStyles.link}>
      <AiOutlineTwitter className={footerStyles.icon}/>
      </Nav.Link>
      
       <Nav.Link href="/" className={footerStyles.link}>
        <AiFillInstagram className={footerStyles.icon}/>
        </Nav.Link>
        
     <Nav.Link href="/" className={footerStyles.link}>
   <AiFillFacebook className={footerStyles.icon}/>
   </Nav.Link>
    </Nav>
    </Col>

    </Row>
    
     <div className={footerStyles.footerRuler}></div>
     
<div className={footerStyles.footerButtom}>
            <p className={footerStyles.footersmall}>
            Website Developed by 
             <strong className={footerStyles.footernote}> Bennydreamtech</strong>
            </p>
</div>

</footer>


</>

    )
}
export default Footer
