import {Container, Row, Col, Card} from 'react-bootstrap';
import AboutStyles from "./About.module.scss";
import { Link } from "react-router-dom";
import {BsFillSuitHeartFill} from "react-icons/bs";

const AboutSection = () =>{
  
  //images
  const italian = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673701234/food-png-2957_so38ol.webp";
  
  const burger = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673701487/fast-food-png-41613_rj94kr.webp";
  
  const snack = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673701378/food-png-2962_voyv6e.webp";
  
  const chef = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673718971/pngwing.com_zlmc2w.webp";
  
  const chefanime = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673719201/pngwing.com-_1__ls7bfm.webp";
  
  return(
    
   <Container
   fluid className={AboutStyles.Container}>
   
    <h1
    className={AboutStyles.aboutTitle}>
    Our Favourite Customers Special Dishes
    </h1>
    
 <Row 
 className={AboutStyles.row}>
 
 {/*European cusine*/}
 
     <Card 
     className={AboutStyles.card}>
     
     <BsFillSuitHeartFill 
     className={AboutStyles.icon}/>
     
  <Card.Img 
  src= {snack} 
  variant="top"
  className={AboutStyles.heroimg} />
  
      <Card.Body>
      
        <Card.Title
        className={AboutStyles.title}>
        European Cuisine Salad
        </Card.Title>
        
        <Card.Text 
        className={AboutStyles.text}>
        £10.53
        </Card.Text>
        
        <div className="mb-5">
        <button className='secondarybtn'>Buy Now</button>
        </div>
      </Card.Body>
    </Card>
 
     {/*American hamburger*/}
     <Card 
     className={AboutStyles.card}>
     
     <BsFillSuitHeartFill
     className={AboutStyles.icon}/>
     
       <Card.Img 
       src= {burger}
       variant="top" 
       className={AboutStyles.heroimg}/>
       
      <Card.Body>
      
        <Card.Title
         className={AboutStyles.title}>
        American Hamburger
        </Card.Title>
        
        <Card.Text  
        className={AboutStyles.text}>
            £15.53
        </Card.Text>
        
        <div className="mb-5">
        <button className='secondarybtn'>Buy Now</button>
        </div>
      </Card.Body>
    </Card>

      
 {/*italian chicken cuisine*/}
 
     <Card 
     className={AboutStyles.card}>
     
     <BsFillSuitHeartFill 
     className={AboutStyles.icon}/>
     
   <Card.Img 
   src= {italian} 
   variant="top"
   className={AboutStyles.heroimg}/>
   
      <Card.Body>
        <Card.Title 
        className={AboutStyles.title}>
        Italian Chicken Sauce
        </Card.Title>
        
        <Card.Text 
         className={AboutStyles.text}>
            £20.53
        </Card.Text>
        
        <div className="mb-5">
        <button className='secondarybtn'>Buy Now</button>
        </div>
        
      </Card.Body>
    </Card>
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