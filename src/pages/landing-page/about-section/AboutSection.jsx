import {Container, Row, Col, Card} from 'react-bootstrap';
import AboutStyles from "./About.module.scss";
import { Link } from "react-router-dom";
import {BsFillSuitHeartFill} from "react-icons/bs";
import favouritefood from "../../../components/foodMenu/favouritefood.js"

import FavouriteFoodCard from "../../../components/favouriteFoodCard/FavouriteFoodCard"

const AboutSection = () =>{
  
  const chef = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673718971/pngwing.com_zlmc2w.webp";


  return(
    
   <Container
   fluid className={AboutStyles.Container}>
   
    <h1
    className={AboutStyles.aboutTitle}>
    Our Favourite Customers Special Dishes
    </h1>
    
 <Row className={AboutStyles.row}>
  {
      favouritefood.map(item =>(
      <Col key={item.id}>
      <FavouriteFoodCard item={item}/>
      </Col>
      ))
    }

</Row>

   <Row 
   className={AboutStyles.row1}>
   
    <Col 
    className={AboutStyles.heroText}>
    
  <h1 
  className={AboutStyles.title}>
  Stay Healthy Live Long
  </h1>
  
<p
className={AboutStyles.paraText}>
Food is for the body as relaxing is for the mind, when you are healthy you are happy. We want to keep you happy always with our meals.
</p>

<div 
className={AboutStyles.btnBox}>

<button 
className="btn btn-white btn-animated">
Explore More
</button>
</div>
</Col>

  <Col 
   className={AboutStyles.col}>
   
      <img src={chef} 
      className={AboutStyles.img} 
      loading="lazy"/>
      </Col>
</Row>
    </Container>
    
    )
}

export default AboutSection