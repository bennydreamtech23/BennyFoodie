import {Link} from "react-router-dom"
import Styles from './Event.module.scss';
import {Container, Row, Col} from "react-bootstrap";
import { AiFillInfoCircle } from "react-icons/ai";

const EventSection = () =>{
  const previewImg = 'https://res.cloudinary.com/dlst0ec4h/image/upload/v1673722321/pngwing.com_22_jp2sqx.png'
  
  return(
    <Container fluid 
    className={Styles.Container}>
   <Row>
   
<Col md='6' lg='6'>
<Link 
className={Styles.foodContent} 
to='/contact'>
<div className={Styles.imgbox}>
<img src="https://res.cloudinary.com/dlst0ec4h/image/upload/v1673721018/pngwing.com_11_u01hre.webp" 
alt='food' 
className='w-50'/>

<img src='https://res.cloudinary.com/dlst0ec4h/image/upload/v1673720736/pngwing.com_9_a4g9pe.webp'
alt='food' 
className='w-50'/>
</div>
<p className='mt-3 h5 fw-bold'>Breakfast Dishes</p>
<h4 className='text-center'>Half & Full Pan Available</h4>
</Link>
</Col>

<Col md='6' lg='6'>
<Link
to='/contact'
className={Styles.foodContent}>
<div className={Styles.imgbox}>
<img src='https://res.cloudinary.com/dlst0ec4h/image/upload/v1673721888/pngwing.com_13_gfuhxr.webp' alt='food' className='w-50'/>
<img src={previewImg} alt='food' className='w-50'/>
</div>
<p className='mt-3 h5 fw-bold'>Lunch Dishes</p>
<h4 className='text-center'>Full & Half Pan Available</h4>
</Link>
</Col>

<Col md='6' lg='6'>
<Link
to="/contact"
className={Styles.foodContent}>
<div className={Styles.imgbox}>
<img src="https://res.cloudinary.com/dlst0ec4h/image/upload/v1673720496/pngwing.com-_8__sxocwn.webp" alt='food' className='w-50'/>
<img src="https://res.cloudinary.com/dlst0ec4h/image/upload/v1673701234/food-png-2957_so38ol.webp" 
alt='food' 
className='w-50'/>
</div>
<p className='mt-3 h5 fw-bold'>
Dinner Dishes
</p>
<h4
className='text-center'>Full & Half Pan Available</h4>
</Link>
</Col>

<Col md='6' lg='6'>
<Link
to='/contact'
className={Styles.foodContent}>
<div className={Styles.imgbox}>
<img src="https://res.cloudinary.com/dlst0ec4h/image/upload/v1673721018/pngwing.com_11_u01hre.webp"
alt='food' className='w-50'/>
<img src="https://res.cloudinary.com/dlst0ec4h/image/upload/v1673701487/fast-food-png-41613_rj94kr.webp" alt='food' className='w-50'/>
</div>
<p className='mt-3 h5 fw-bold'>fast Food</p>
<h4 className='text-center'>Full & Half Pan Available</h4>
</Link>
</Col>

<p className='text-muted mt-3'><AiFillInfoCircle/> Please Specify the type of dish you want and the quantity in the contact form, Thank you</p>
</Row>   
    </Container>
    )
}

export default EventSection