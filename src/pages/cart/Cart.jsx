//container
import ListGroup from 'react-bootstrap/ListGroup'
import CartItem from "./CartItem"
import  './CartItem.scss';
import {Link} from "react-router-dom"

//icons
import {AiOutlineClose} from "react-icons/ai";

//redux
import {useDispatch, useSelector} from "react-redux";
import {cartListActions} from "../../store/shopping-cart/cartListSlice"

const Cart = () =>{
  
  const dispatch = useDispatch()
const cartProducts = useSelector(state => state.cart.cartItems)
  
  const totalAmount = useSelector(state => state.cart.totalAmount)
  
  
const toggleCart = () =>{
dispatch(cartListActions.toggle())
}

  return(
    <div className='cartContainer'>
    <ListGroup className="cart">
    <div className="cart_close">
<span onClick={toggleCart}>
<AiOutlineClose className="icon"/>
</span>
</div>

<div className="cart_item_list">

{ 
cartProducts.length === 0 ? <h6 className="text-center mt-5"> No item, added to the cart</h6> : cartProducts.map((item, index) =>(
<CartItem item={item} key={index}/>
))
}

</div>

<div className="cart_bottom d-flex 
justify-content-between 
align-items-center">

<h6>Subtotal: <span>£{totalAmount}</span></h6>
<Link to="/checkout" className="cartLink">Checkout</Link>
</div>

    </ListGroup>
    </div>
    )
}

export default Cart