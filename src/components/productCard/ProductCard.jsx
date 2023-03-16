 import {Link} from 'react-router-dom';
import ProductCardStyle from "./ProductCad.module.scss";
//icon
 import {BsFillSuitHeartFill} from "react-icons/bs";
//redux
import { useDispatch } from "react-redux";
import {cartActions} from "../../store/shopping-cart/cartSlice"
import Button from '../button/Button'
import {Card} from "react-bootstrap"

const ProductCard = ({item, className}) =>{
  const { id, name, price, image} = item
  
const dispatch = useDispatch()

  const  addToCart = () =>{
    dispatch(cartActions.addItem({
      id,
      name,
      image,
      price
    }))
  }
  
return(
  <Card
         className={className}>
 <div 
        className={ProductCardStyle.top_content}>
        <div className={ProductCardStyle.travel_image}>
     <Card.Img
              src={image}
             alt="product_image"
             className={ProductCardStyle.img}/>
        </div>
        
        <div className={ProductCardStyle.top_bar}>
         <BsFillSuitHeartFill 
       className={ProductCardStyle.top_icons}/>
        </div>
  </div>

      <Card.Body className={ProductCardStyle.mid_content}>
      <div className={ProductCardStyle.short_detail}>
       <Card.Title>
       <Link
       to={`/menu/${name}`}
       className = {ProductCardStyle.name}>
        {name}
        </Link>
        </Card.Title>
      </div>

       <div className={ProductCardStyle.bottom_content}>
       <div className={ProductCardStyle.desc_nav}>
       <Card.Text className={ProductCardStyle.price}>
            £{price} <span> Per plate</span>
        </Card.Text>
        </div>
        <Button className='secondarybtn' 
        onClick={addToCart}
        title= 'Add To Cart'/>
        </div>
       </Card.Body>
     </Card>
    )
}

export default ProductCard