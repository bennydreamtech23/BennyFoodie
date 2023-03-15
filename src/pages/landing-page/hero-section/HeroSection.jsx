import {Link, useNavigate} from "react-router-dom";
import HeroStyles from "./HeroSection.module.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import Slider from "react-slick";
import { auth} from "../../core/auth/firebase";
//container from bootstrap
import {Container, Row, Col, Card} from 'react-bootstrap';
import Button from '../../../components/button/Button'

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

const settings = {
      autoplay: true,
      dots: true,
      navs: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplaySpeed: 4000,
       pauseOnHover: true,
    };


  return(
    <>
    <Container fluid 
    className={HeroStyles.Container}>
    
   <Row 
   className="d-flex flex-row-reverse justify-content-center align-items-center">
   <Col lg='6' md='12' className={HeroStyles.col}>
<img src='https://img.freepik.com/free-photo/large-set-isolated-vegetables-white-background_485709-44.jpg?w=740&t=st=1678869338~exp=1678869938~hmac=8d6e26d0934e6e1ad1ed383c01877384da6d634199defa596ac0f0ec42a379b4'
alt='hero-img' loading='lazy' className='img-fluid'/>
   </Col>
      
    <Col lg='6' md='12'
    className={HeroStyles.heroText}>
  <h1 
  className={HeroStyles.title}>
 Always Eating Good
  </h1>
  
<p 
className={HeroStyles.paraText}>
Imagine you don't need to fear food poison because we provide healthy and delicious food for you! We are providing the best food at cheap rate.
</p>

<div 
className={HeroStyles.btnBox}>
<Button 
className={`${HeroStyles.btn} ${HeroStyles.btnWhte} ${HeroStyles.btnAnimated}`} 
onClick={getStarted}
title='Get Started' />

  <Button 
  className="secondarybtn" 
  onClick={order}
  title = 'Order Now' />
    
</div>
</Col>
</Row>
    </Container>
    
 <section className={HeroStyles.smallbox}> 
 <h1 className={HeroStyles.title} id={HeroStyles.title}>WHY CHOOSE US?</h1>
 <p>You should choose us because we deliver the best quality of food at a fast speed limit</p>
<Row className='gap-5 mt-5 my-auto d-flex align-items-center justify-content-center'>
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
         Been Affoardable doesn't mean we shouldn't consider quality and food hygiene in our preparation. Our Dishes are affordable and well cooked.
         
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
         Food should be eaten on time and slow delivery services hinder this, that why we provide the fastest delivery services. We are <strong> one step away from your Doorstep</strong>
        </p>
    </Col>
</Row>
</section>
    </>
    )
}

export default HeroSection