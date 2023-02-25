import {Link} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import  './CartPage.scss'

//components
import HeaderSection from "../../components/headerSection/HeaderSection";
import {Container, Row, Col, Table} from "react-bootstrap"
//icons
import { MdDeleteOutline } from "react-icons/md";
//react-redux
import {cartActions} from "../../store/shopping-cart/cartSlice"

const CartPage = () =>{
  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  
  return(
    <section 
    className='CartContainer'>
 <HeaderSection title='Cart'/>
 <section>
 <Container fluid className='p-5'>
 <Row>
<Col lg='12'>
{cartItems.length === 0 ? <h5 className='text-center'>
Your cart is empty
</h5> : <Table responsive='md' 
striped bordered hover 
    variant="light"
    className=" table-bordered">
    
<thead>
<tr>
<th>Image</th>
<th>Product Name</th>
<th>Price</th>
<th>Quantity</th>
<th>Delete</th>
</tr>
</thead>

<tbody>
{cartItems.map(item => <Tr item={item}
key={item.id}/>)}
</tbody>
</Table>
}

<div>
<h5>subtotal: <strong>{totalAmount}</strong></h5>
<p>Taxes and shipping will be calculated at checkout</p>
<div>
<Link to='/menu'>Continue Shopping</Link>
<Link to='/checkout'>Proceed to checkout</Link>
</div>

</div>

</Col>
 </Row>
 
 </Container>
 </section>
    </section>
    )
}

const Tr = props =>{
  const {id, image, name, price, quantity} = props.item
  const dispatch = useDispatch()
  
  const deleteItem = () =>{
  dispatch(cartActions.deleteItem(id))
  }
  
  return <tr>
  <td className='text-center cart__img-box'>
  <img src={image} alt='product-image'/>
  </td>
   <td className='text-center'>{name}</td>
   <td className='text-center'>{price}</td>
    <td className='text-center'>{quantity}</td>
    <td className='text-center cart_item-delete'><MdDeleteOutline 
    className='del_icon'
    onClick={(e) => deleteItem(e)}/>
    </td>
  </tr>
}



export default CartPage