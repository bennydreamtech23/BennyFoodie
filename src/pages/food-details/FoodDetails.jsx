import {useState, useEffect} from 'react'
import "./FoodDetails.scss"
import allmenu from "../../components/foodMenu/allfoods"
import { useParams } from "react-router-dom"
import HeaderSection from '../../components/headerSection/HeaderSection'
import {Container, Row, Col, Form, InputGroup} from "react-bootstrap"

const FoodDetails = () =>{
  const food = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1675289357/pngwing.com_vnmees.png";
  
  const [tabs, setTabs] = useState('desc')
  const {id} = useParams()
  
  const menu =  allmenu.find(menu => menu.id === id)
  const [previewImg, setPreviewImg] =useState(allmenu.image)
  
  
  return(
    <section className='container-box'>
<HeaderSection title='product 01'/>

<Container className="py-5">
<Row>
<Col lg='2' md='2'>
<div className="product_images">
<div className='img__item' onClick={() => setPreviewImg(menu.image)}>
<img src={setPreviewImg} alt='product images' className='w-100'/>
</div>

<div className='img__item' onClick={() => setPreviewImg(menu.image)}>
<img src={previewImg} alt='product images' className='w-100'/>
</div>

<div className='img__item' onClick={() => setPreviewImg(menu.image)}>
<img src={previewImg} alt='product images' className='w-100'/>
</div>
</div>
</Col>

<Col lg='4' md='4'>
<div className='product__main_img'>
<img src={previewImg} alt='main img' className='w-100'/>
</div>
</Col>

<Col lg='6' md='6'>
<div className='single_product-content'>
<h2 className='product_title mb-3'>
chicken
</h2>
<p className='product_price'> 
{" "}
Price: <span>
30
</span></p>
<p className="category mb-5">Category: <span> Breakfast</span></p>

<button className='btn'>
Add to Cart
</button>
</div>
</Col>

<Col lg='12'>
<div className='tabs d-flex align-items-center gap-3 py-2'>
<h6 className='tab_active'>Description</h6>
<h6>Review</h6>
</div>

<div className='tab_content'>
<p>
Noodles come to the table in many countries around the world, like glass noodles in China, soba noodles in Japan, and the scores of pasta types and shapes common in Italy. What makes North American noodles (found in or served with classic comfort foods like chicken noodles) different than most other noodles is that they are often enriched with egg or egg yolks. It's true that homemade noodles take more time to prepare than store-bought. But they reward cooks and their lucky guests with fresher, richer, better-tasting noodles to serve with all kinds of dishes (beef stroganoff, chicken noodle soup, and casseroles, to name a few). Once you learn how to make noodles, you'll find all kinds of satisfying ways to enjoy them. Fresh pasta can be cut long or short, thick or thin, but (thanks to the eggs) they're among the richest noodles around.
</p>
</div>

<div className='tab_form mb-3'>
<div className='review'>
<p className='user_name mb-0'>
williams blake
</p>
<p className='user_email mb-0'>
jhnon01@gmail.user
</p>
<p className='review_text mt-2'>
i love the food
</p>
</div>

<div className='review'>
<p className='user_name mb-0'>
williams blake
</p>
<p className='user_email mb-0'>
jhnon01@gmail.user
</p>
<p className='review_text mt-2'>
i love the food
</p>
</div>

<div className='review'>
<p className='user_name mb-0'>
williams blake
</p>
<p className='user_email mb-0'>
jhnon01@gmail.user
</p>
<p className='review_text mt-2'>
i love the food
</p>
</div>

<Form className='form'>
<Form.Group className='form_group'>
<InputGroup>
<Form.Control
type='text'
placeholder='Enter your Name'
className="inputfield"/>
</InputGroup>
</Form.Group>

<Form.Group className='form_group'>
<InputGroup>
<Form.Control
type='email'
className="inputfield"
placeholder='Enter your Email'/>
</InputGroup>
</Form.Group>

<Form.Group className='form_group'>
<InputGroup>
<Form.Control
as='textarea'
rows={6}
type='text'
className="inputfield"
placeholder='Enter your Message'/>
</InputGroup>
</Form.Group>

<button 
type="submit" 
className='btn'>
submit
</button>

</Form>
</div>


</Col>

</Row>
</Container>
    </section>
    
    )
}

export default FoodDetails