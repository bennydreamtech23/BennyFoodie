
import FavouriteFoodStyle from "./FavouriteFood.module.scss"
 import {BsFillSuitHeartFill} from "react-icons/bs"
 
//redux
import { useDispatch } from "react-redux";
import {cartActions} from "../../store/shopping-cart/cartSlice"

const FavouriteFoodCard = (props) =>{
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
          className={FavouriteFoodStyle.product_container}>
                
            <div 
         className={FavouriteFoodStyle.product_inn}>
                
        <div 
        className={FavouriteFoodStyle.product_pic_outer}>
      
        <BsFillSuitHeartFill 
       className={FavouriteFoodStyle.icon}/>
              <img
              src={image}
             alt="image"
            className={FavouriteFoodStyle.heroimg} />
                    </div>

              <div className={FavouriteFoodStyle.boxText}>
        <h2 className="text-center h5">{name}</h2>
        
        <p className="text-center lead">
            £{price}
        </p>
        
              <div className={FavouriteFoodStyle.btnBox}>
        <button className='secondarybtn' onClick={addToCart}>Add To Cart</button>
        </div>
                    </div>
              </div>
                </div>


    )
}

export default  FavouriteFoodCard