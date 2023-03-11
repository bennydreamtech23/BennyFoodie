import {Link} from "react-router-dom"
import Styles from './Event.module.scss';
import {Container, Row, Col} from "react-bootstrap";
import { AiFillInfoCircle } from "react-icons/ai";

const EventSection = () =>{
  const previewImg = 'https://res.cloudinary.com/dlst0ec4h/image/upload/v1673722321/pngwing.com_22_jp2sqx.png'
  
  return(
    <Container fluid 
    className={Styles.Container}>
   <Row className='gap-5 d-flex align-items-center justify-content-center'>
   
<Col md='3' lg='4'>
<Link 
className={Styles.foodContent} 
to='/contact'>
<div className={Styles.imgbox}>
<img src='https://res.cloudinary.com/dlst0ec4h/image/upload/v1673720736/pngwing.com_9_a4g9pe.webp'
alt='food' />
</div>
<div className={Styles.content}>
<p>Breakfast Dishes</p>
<h4>Half & Full Pan Available</h4>
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
<p>Lunch Dishes</p>
<h4>Full & Half Pan Available</h4>
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
<p>Dinner Dishes</p>
<h4>Full & Half Pan Available</h4>
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
<p> fast Food</p>
<h4>Full & Half Pan Available</h4>
</div>
</Link>
</Col>

<p className='text-muted mt-3'>
<AiFillInfoCircle/> Please Specify the type of dish you want and the quantity in the contact form, Thank you</p>
</Row>   
    </Container>
    )
}

export default EventSection