import {Link, useNavigate} from "react-router-dom";
import HeroStyles from "./HeroSection.module.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth} from "../../core/auth/firebase";
//container from bootstrap
import {Container, Row, Col, Card} from 'react-bootstrap';
//icons
import {TbTruckDelivery, TbHandClick,TbAward} from "react-icons/tb";
import {BsArrowDownRight} from "react-icons/bs"; 

const HeroSection = () =>{
  const navigate = useNavigate()
 const [user] = useAuthState(auth);

  const getStarted = () =>{
    if(!user === true){
      navigate("/signup")
    }else{
      navigate("/menu")
    }
  }
  
  const order = () =>{
    if(!user === true){
      navigate("/signup")
    }else{
      navigate("/menu")
    }
  }

const img = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673632501/Pngtree_healthy_food_3776802_nqbeku.webp";

  return(
    <>
    <Container fluid 
    className={HeroStyles.Container}>
    
   <Row 
   className="d-flex flex-row-reverse justify-content-between">
   
   <Col 
   className={HeroStyles.col}>
    <div className={HeroStyles.main}>
    <img className={HeroStyles.theSmiley} 
    src={img}/>
  
   <img className={HeroStyles.item} 
   style={{animationDelay: "-1s"}} 
   src="https://www.kirupa.com/icon/1f951.svg"/>
   
  <img className={HeroStyles.item}
  style={{animationDelay: "-2s"}}
  src="https://www.kirupa.com/icon/1f370.svg"/>
  
  <img className={HeroStyles.item} 
  style={{animationDelay: "-3s"}}
  src="https://www.kirupa.com/icon/1f355.svg"/>
  
  <img className={HeroStyles.item} 
  style={{animationDelay: "-4s"}}
  src="https://www.kirupa.com/icon/1f96c.svg"/>
  
  <img className={HeroStyles.item} 
  style={{animationDelay: "-5s"}} 
  src="https://www.kirupa.com/icon/1f347.svg"/>
  
  <img className={HeroStyles.item}
  style={{animationDelay: "-6s"}}
  src="https://www.kirupa.com/icon/1f354.svg"/>

  </div>
   </Col>
      
    <Col 
    className={HeroStyles.heroText}>
  <h1 
  className={HeroStyles.title}>
  Our food site makes it easy to find your <span 
  className={HeroStyles.color}> Craving 
  </span>
  </h1>
  
<p 
className={HeroStyles.paraText}>
Imagine you don't need to fear food poison because we provide healthy and delicious food for you! We are providing the best food at cheap rate.
</p>

<div 
className={HeroStyles.btnBox}>
<button 
className={`${HeroStyles.btn} ${HeroStyles.btnWhte} ${HeroStyles.btnAnimated}`} 
onClick={getStarted}>
Get Started 
</button>

  <button 
  className="secondarybtn" 
  onClick={order}>
     Order Now <BsArrowDownRight 
     className={HeroStyles.arrow}/>
    </button>
</div>
</Col>
</Row>

<Row
className="mt-5">

{/*card 1*/}
     <Col lg='4' md='6'
     className={HeroStyles.card}>
  <TbHandClick 
  className={HeroStyles.Icon}/>
  
        <h3
        className={HeroStyles.smallTitle}>
        Easy To Order
        </h3>
        
        <p
        className={HeroStyles.text}>
        We take your time and patience into consideration, that is why our platform is designed to just be a click when you want to place an order.
        </p>
    </Col>

      {/* card 2*/}
      
     <Col lg='4' md='6'
     className={HeroStyles.card}>
  <TbAward 
  className={HeroStyles.Icon}/>

     <h3
        className={HeroStyles.smallTitle}>
        Best Quality
        </h3>

        <p
        className={HeroStyles.text}>
          Been Affoardable doesn't mean we shouldn't consider  quality and food hygiene in our preparation. Our Dishes are affordable and healthy...
        </p>

    </Col>

      {/*card 3*/}
     <Col lg='4' md='6'
     className={HeroStyles.card}>
    <TbTruckDelivery 
    className={HeroStyles.Icon}/>
    
        <h3 
        className={HeroStyles.smallTitle}>
        Fastest Delivery
        </h3>
        
        <p
        className={HeroStyles.text}>
         Food should be eaten on time and slow delivery services hinder this, that why we provide the fastest delivery services. We are <strong> one step from your away Doorstep</strong>
        </p>
    </Col>
</Row>
    </Container>
    </>
    )
}

export default HeroSection