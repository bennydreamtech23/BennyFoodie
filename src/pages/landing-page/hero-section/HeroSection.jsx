
import {Container, Row, Col, Card} from 'react-bootstrap';
import HeroStyles from "./HeroSection.module.scss";
//import { Link } from "react-router-dom";
const img = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673632501/Pngtree_healthy_food_3776802_nqbeku.webp";
import {TbTruckDelivery, TbHandClick,TbAward} from "react-icons/tb";

import {BsArrowDownRight} from "react-icons/bs"; 

const HeroSection = () =>{
  return(
    <>
    <Container fluid 
    className={HeroStyles.Container}>
    
   <Row 
   className="d-flex flex-row-reverse justify-content-between mb-5">
   
   <Col 
   className={HeroStyles.col}>
      <img src={img} 
      className={HeroStyles.heroimg} 
      loading="lazy"/>
      
      </Col>
      
    <Col 
    className={HeroStyles.heroText}>
    
  <h1 
  className={HeroStyles.title}>
  Our food site makes it easy to find your <span className={HeroStyles.color}> Craving </span>
  </h1>
  
<p 
className={HeroStyles.paraText}>
Imagine you don't need to fear food poison because we provide healthy and delicious food for you! We are providing the best food at cheap rate.
</p>

<div 
className={HeroStyles.btnBox}>

<button 
className={`${HeroStyles.btn} ${HeroStyles.btnWhte} ${HeroStyles.btnAnimated}`}>
Get Started </button>

  <button class="secondarybtn">
     Order Now <BsArrowDownRight className={HeroStyles.arrow}/>
    </button>
</div>
</Col>
</Row>

<Row
className="d-flex flex-row-reverse justify-content-center">

{/*card 1*/}

     <Card
     className={HeroStyles.card}>
  <TbHandClick 
  className={HeroStyles.Icon}/>
  
      <Card.Body>
      
        <Card.Title className={HeroStyles.smallTitle}>
        Easy To Order
        </Card.Title>
        
        <Card.Text className={HeroStyles.text}>
        We take your time and patience into consideration, that is why our platform is designed to just be a click when you want to place an order.
        </Card.Text>
      </Card.Body>
    </Card>

      {/* card 2*/}
      
     <Card className={HeroStyles.card}>
  <TbAward className={HeroStyles.Icon}/>
  
      <Card.Body>
      
        <Card.Title 
        className={HeroStyles.smallTitle}>
        Best Quality
        </Card.Title>
        
        <Card.Text className={HeroStyles.text}>
          Been Affoardable doesn't mean we shouldn't consider  quality and food hygiene in our preparation. Our Dishes are affordable and healthy...
        </Card.Text>
      </Card.Body>
    </Card>

      {/*card 3*/}
      
     <Card className={HeroStyles.card}>
    <TbTruckDelivery className={HeroStyles.Icon}/>
      <Card.Body>
      
        <Card.Title className={HeroStyles.smallTitle}>
        Fastest Delivery
        </Card.Title>
        
        <Card.Text className={HeroStyles.text}>
         Food should be eaten on time and slow delivery services hinder this, that why we provide the fastest delivery services. We are <strong> one step from your away Doorstep</strong>
        </Card.Text>
      </Card.Body>
    </Card>
</Row>
    </Container>
    </>
    )
}

export default HeroSection