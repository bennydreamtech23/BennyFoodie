
import ProductCardStyle from "./ProductCad.module.scss"
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
        <h2 className="text-center h5">{name}</h2>
        
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