 import {Link} from 'react-router-dom';
import ProductCardStyle from "./ProductCad.module.scss";
//icon
 import {BsFillSuitHeartFill} from "react-icons/bs";
//redux
import { useDispatch } from "react-redux";
import {cartActions} from "../../store/shopping-cart/cartSlice"

import {Card} from "react-bootstrap"

const ProductCard = (props) =>{
  const { id, name, price, image} = props.item
  
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
         className={ProductCardStyle.product_inn}>
 <div 
        className={ProductCardStyle.product_pic_outer}>
        <BsFillSuitHeartFill 
       className={ProductCardStyle.icon}/>
              <Card.Img
              position = 'top'
              src={image}
             alt="product_image"
             className={ProductCardStyle.img}/>
         </div>

      <Card.Body className={ProductCardStyle.boxText}>
       <Card.Title>
       <Link to={`/menu/${name}`}
        className="text-center h5 text-dark text-decoration-none
        d-flex 
        align-items-center 
        justify-content-center fw-bold pb-3">
        {name}
        </Link>
        </Card.Title>
        
       <div className={ProductCardStyle.btnBox}>
       <div>
       <Card.Text 
               className="text-center lead fw-bold">
            £{price}
        </Card.Text>
        </div>
        <div>
        <button className='secondarybtn' onClick={addToCart}>Add To Cart</button>
        </div>
        </div>
       </Card.Body>
     </Card>
    )
}

export default ProductCard