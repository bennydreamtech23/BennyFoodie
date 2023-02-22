import {Link} from "react-router-dom"
import ProductCardStyle from "./AllProductCard.module.scss"
 import {BsFillSuitHeartFill} from "react-icons/bs"
 
//redux
import { useDispatch } from "react-redux";
import {cartActions} from "../../store/shopping-cart/cartSlice"

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
          <div
          className={ProductCardStyle.product_container}>
          
            <div 
         className={ProductCardStyle.product_inn}>
                
        <div 
        className={ProductCardStyle.product_pic_outer}>
      
        <BsFillSuitHeartFill 
       className={ProductCardStyle.icon}/>
              <img
              src={image}
             alt="image"
            className={ProductCardStyle.heroimg} />
                    </div>

              <div className={ProductCardStyle.boxText}>
              
        <Link to={`/menu/${id}`}
        className="text-center h5 text-dark text-decoration-none
        d-flex 
        align-items-center 
        justify-content-center">
        {name}
        </Link>
        
        <p className="text-center lead">
            £{price}
        </p>
        
              <div className={ProductCardStyle.btnBox}>
        <button className='secondarybtn' onClick={addToCart}>Add To Cart</button>
        </div>
                    </div>
              </div>
                </div>


    )
}

export default ProductCard