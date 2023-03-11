import {Link} from "react-router-dom"
import Styles from './Event.module.scss';
import {Container, Row, Col} from "react-bootstrap";
import { AiFillInfoCircle } from "react-icons/ai";

const EventSection = () =>{
  const previewImg = 'https://res.cloudinary.com/dlst0ec4h/image/upload/v1673722321/pngwing.com_22_jp2sqx.png'
  
  return(
    <Container fluid 
    className={Styles.Container}>
    <h1 className='text-center border-bottom border-5 rounded mb-5'>
    Catering Plan
    </h1>
    
   <Row 
   className='gap-5 d-flex align-items-center justify-content-center'>
   
<Col md='3' lg='4'>
<Link 
className={Styles.foodContent} 
to='/contact'>
<div className={Styles.imgbox}>
<img src='https://res.cloudinary.com/dlst0ec4h/image/upload/v1673720736/pngwing.com_9_a4g9pe.webp'
alt='food' />
</div>
<div className={Styles.content}>
<h4>Corporate Events</h4>
<p>
We cater the food aspect in your corporate events at affordable rate
</p>
<Link 
to='/contact'
className={Styles.link}>
Get started
</Link>
</div>
</Link>
</Col>

<Col md='4' lg='4'>
<Link
to='/contact'
className={Styles.foodContent}>
<div className={Styles.imgbox}>
<img src={previewImg} alt='food' />
</div>
<div className={Styles.content}>
<h4>
Special Occasions
</h4>
<p>
We cater the food section in your special occasions at affordable rate
</p>
<Link 
to='/contact'
className={Styles.link}>
Get started
</Link>
</div>
</Link>
</Col>

<Col md='4' lg='4'>
<Link
to='/contact'
className={Styles.foodContent}>
<div className={Styles.imgbox}>
<img src="https://res.cloudinary.com/dlst0ec4h/image/upload/v1673721888/pngwing.com_13_gfuhxr.webp"
alt='food' />
</div>
<div className={Styles.content}>
<h4>Home Catering</h4>
<p>
We love the fact we can render our services at any level, even providing delicious home cooked meals for you and your family.
</p>

<Link 
to='/contact'
className={Styles.link}>
Get started
</Link>
</div>
</Link>
</Col>


<Col md='4' lg='4'>
<Link
to='/contact'
className={Styles.foodContent}>
<div className={Styles.imgbox}>
<img src="https://res.cloudinary.com/dlst0ec4h/image/upload/v1673701487/fast-food-png-41613_rj94kr.webp" alt='food'/>
</div>
<div className={Styles.content}>
<h4>Food Trays</h4>
<p>
We love cooking and providing our services, to people at different level, we want to make your event specatular by providing sumptous meals
</p>
<Link 
to='/contact'
className={Styles.link}>
Get started
</Link>
</div>
</Link>
</Col>
</Row>   
<p className='text-muted pt-5'>
<AiFillInfoCircle/> Please be informed that payment is based on the catering service offered and the number of guest catered for, please help us to fill in this details in the contact form located when you click on the service card</p>
    </Container>
    )
}

export default EventSection