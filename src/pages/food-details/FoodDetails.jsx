import "./FoodDetails.scss"
import allfoods from "../../components/foodMenu/allfoods"
import { useParams } from "react-router-dom"
import HeaderSection from '../../components/headerSection/HeaderSection'
import {Container, Row, Col} from "react-bootstrap"




const FoodDetails = () =>{
  return(
    <section className='FoodDetails.container'>
<HeaderSection title='product 01'/>

<container>
<Row>
<Col lg='2' md='2'>
<div className="product_images">
<div className='img__item'>
<img src='' alt='product images' className='w-100'/>
</div>

<div className='img__item'>
<img src='' alt='product images' className='w-100'/>
</div>

<div className='img__item'>
<img src='' alt='product images' className='w-100'/>
</div>
</div>
</Col>

<Col lg='4' md='4'>
<div className='product__main_img'>
<img src='' alt='main img' className='w-100'/>
</div>
</Col>

<Col lg='6' md='6'>
<div className='single_product-content'>
<h2 className='product_title'>
chicken
</h2>
<span className='product_price'>
30
</span>
<p>Category: <span> Breakfast</span></p>

<button className='btn'>
Add to Cart
</button>
</div>
</Col>

</Row>
</container>
    </section>
    
    )
}

export default FoodDetails