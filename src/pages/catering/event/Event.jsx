import {useNavigate, Link} from "react-router-dom"
import Styles from './Event.module.scss';
import {Container, Row, Col, Card} from "react-bootstrap";
import { AiFillInfoCircle } from "react-icons/ai";
import Button from '../../../components/button/Button'


const EventSection = () =>{
  const previewImg = 'https://res.cloudinary.com/dlst0ec4h/image/upload/v1673722321/pngwing.com_22_jp2sqx.png'
  const navigate = useNavigate()

const getStarted = (e) =>{
  navigate('/contact')
}
  
  
  return(
    <Container fluid 
    className={Styles.Container}>
    <h1 className={Styles.Texttitle}>
    Catering Plan
    </h1>
    
   <Row 
   className={`${Styles.row} pt-5 d-flex align-items-center justify-content-between`}>

{/***card1*****/}
  
  <Card 
  as={Link}
to ='/contact'
  className={Styles.card}>
 <div 
        className={Styles.top_content}>
        <div className={Styles.travel_image}>
     <Card.Img
              src="https://res.cloudinary.com/dlst0ec4h/image/upload/v1673720736/pngwing.com_9_a4g9pe.webp"
             alt="product_image"
             className={Styles.img}/>
        </div>
  </div>

      <Card.Body className={Styles.mid_content}>
      <div className={Styles.short_detail}>
       <Card.Title>
       <Link
       to='/contact'
       className = {Styles.name}>
        Corporate Events
        </Link>
        </Card.Title>
      </div>

       <div className={Styles.bottom_content}>
       <div className={Styles.desc_nav}>
       <Card.Text className={Styles.price}>
        We cater the food aspect in your corporate events at affordable rate.  
        </Card.Text>
        </div>
        <Button className='btn'
        onClick = {(e) => getStarted(e)}
        title= 'Get Started'/>
        </div>
       </Card.Body>
     </Card>
 
{/***card2*****/}
  <Card 
  as={Link}
to ='/contact'
  className={Styles.card}>
 <div 
        className={Styles.top_content}>
        <div className={Styles.travel_image}>
     <Card.Img
              src={previewImg}
             className={Styles.img}/>
        </div>
  </div>

      <Card.Body className={Styles.mid_content}>
      <div className={Styles.short_detail}>
       <Card.Title>
       <Link
       to='/contact'
       className = {Styles.name}>
        Special Occasions
        </Link>
        </Card.Title>
      </div>

       <div className={Styles.bottom_content}>
       <div className={Styles.desc_nav}>
       <Card.Text className={Styles.price}>
We cater the food section in your special occasions at affordable rate.
        </Card.Text>
        </div>
        <Button className='btn'
        onClick = {(e) => getStarted(e)}
        title= 'Get Started'/>
        </div>
       </Card.Body>
     </Card>

{/***card3*****/}
  <Card 
  as={Link}
to ='/contact'
  className={Styles.card}>
 <div 
        className={Styles.top_content}>
        <div className={Styles.travel_image}>
     <Card.Img
     src="https://res.cloudinary.com/dlst0ec4h/image/upload/v1673721888/pngwing.com_13_gfuhxr.webp"
     className={Styles.img}/>
        </div>
  </div>

      <Card.Body className={Styles.mid_content}>
      <div className={Styles.short_detail}>
       <Card.Title>
       <Link
       to='/contact'
       className = {Styles.name}>
Home Catering
        </Link>
        </Card.Title>
      </div>

       <div className={Styles.bottom_content}>
       <div className={Styles.desc_nav}>
       <Card.Text className={Styles.price}>
We love the fact we can render our services at any level, even providing delicious home cooked meals for you and your family.
        </Card.Text>
        </div>
        <Button className='btn'
        onClick = {(e) => getStarted(e)}
        title= 'Get Started'/>
        </div>
       </Card.Body>
     </Card>


{/***card4*****/}
  <Card 
  as={Link}
to ='/contact'
  className={Styles.card}>
 <div 
        className={Styles.top_content}>
        <div className={Styles.travel_image}>
     <Card.Img
     src="https://res.cloudinary.com/dlst0ec4h/image/upload/v1673701487/fast-food-png-41613_rj94kr.webp"
     className={Styles.img}/>
        </div>
  </div>

      <Card.Body className={Styles.mid_content}>
      <div className={Styles.short_detail}>
       <Card.Title>
       <Link
       to='/contact'
       className = {Styles.name}>
Food Trays
        </Link>
        </Card.Title>
      </div>

       <div className={Styles.bottom_content}>
       <div className={Styles.desc_nav}>
       <Card.Text className={Styles.price}>
We love cooking and providing our services, to people at different level, we want to make your event specatular by providing sumptous meals.
        </Card.Text>
        </div>
        <Button className='btn'
        onClick = {(e) => getStarted(e)}
        title= 'Get Started'/>
        </div>
       </Card.Body>
     </Card>
</Row>   
<p className='text-muted pt-5 mt-5'>
<AiFillInfoCircle/> Please be informed that payment is based on the catering service offered and the number of guest catered for.
Thankyou
</p>
    </Container>
    )
}

export default EventSection