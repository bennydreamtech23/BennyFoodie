import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import './Checkout.scss';
//container from bootstrap
import {Container, 
Row, 
Col,
Form,
InputGroup} from "react-bootstrap";
import HeaderSection from '../../components/headerSection/HeaderSection';
//react-redux
import { useSelector } from "react-redux";
//ICONS
import {MdMail, MdLocationOn,
MdOutlinePhoneLocked, 
  MdErrorOutline, 
  MdPersonOutline } from "react-icons/md";

const Checkout = () =>{
//data for shipping address entry
const navigate = useNavigate()

const [enteredName, setEnteredName] = useState('')
const[enteredMail, setEnteredMail] =  useState('')
const [enteredNumber, SetEnteredNumber] = useState('')
const [enteredCountry, SetEnteredCountry] = useState('')
const [enteredCity, SetEnteredCity] = useState('')
const [enteredPostalCode, SetEnteredPostalCode] = useState('')   
    
 const cartTotalAmount = useSelector(state => state.cart.totalAmount) 
  const shippingCost = 40
  
  const  totalAmount = cartTotalAmount + Number(shippingCost)
  
  const payment = (e) =>{
    e.preventDefault()
    navigate('/payment')
  }
  
  return(
    <section>
<HeaderSection title='Checkout'/>
<section>
<Container className='py-5'>
<Row>
<Col lg='8' m='6'>
<h6 className='mb-3'>Shipping Address</h6>
<Form className='checkout_form'>

<Form.Group className='form_group'>
<InputGroup>
<InputGroup.Text 
 id="inputGroupPrepend">
        <MdPersonOutline/>
        </InputGroup.Text>
        <Form.Control 
        type='text'
        placeholder='Enter your name' 
       className='inputfield'
       value={enteredName}
       onChange={(e)=> setEnteredName(e.target.value)}/>
</InputGroup>
</Form.Group>

<Form.Group  className='form_group'>
<InputGroup>
<InputGroup.Text 
 id="inputGroupPrepend">
        <MdMail/>
        </InputGroup.Text>
        <Form.Control 
        type='email'
        placeholder='Enter your email'
        className='inputfield'/>
</InputGroup>
</Form.Group>

<Form.Group  className='form_group'>
<InputGroup>
<InputGroup.Text 
 id="inputGroupPrepend">
        <MdOutlinePhoneLocked/>
        </InputGroup.Text>
        <Form.Control 
        type='number'
        placeholder='Enter your phone Number'
        className='inputfield'/>
</InputGroup>
</Form.Group>

<Form.Group  className='form_group'>
<InputGroup>
<InputGroup.Text 
 id="inputGroupPrepend">
        <MdLocationOn/>
        </InputGroup.Text>
        <Form.Control 
        type='text'
        placeholder='Enter your country'
        className='inputfield'/>
</InputGroup>
</Form.Group>

<Form.Group  className='form_group'>
<InputGroup>
<InputGroup.Text 
 id="inputGroupPrepend">
        <MdLocationOn/>
        </InputGroup.Text>
        <Form.Control 
        type='text'
        placeholder='Enter your city'
        className='inputfield'/>
</InputGroup>
</Form.Group>

<Form.Group className="form_group">
<InputGroup>
<InputGroup.Text 
 id="inputGroupPrepend">
        <MdLocationOn/>
        </InputGroup.Text>
        <Form.Control 
        type='number'
        placeholder='Enter your postal code'
        className='inputfield'/>
</InputGroup>
</Form.Group>
<button 
className='btn'
onClick = {(e) => payment(e)}>
payment
</button>
</Form>
</Col>


<Col lg='4' md='6'>
<div className='checkout_bill'>
<h6 
className='d-flex align-items-center justify-content-between mb-3'>subtotal: <span>{cartTotalAmount}</span></h6>
<h6 
className='d-flex align-items-center justify-content-between mb-3'
>shipping: <span>{shippingCost}</span></h6>
  <div className='checkout_total'>
     <h5 
     className='d-flex align-items-center justify-content-between'>Total: <span>{totalAmount}</span></h5>
  </div>
</div>
</Col>
</Row>
</Container>
</section>
    </section>
    
    )
}

export default Checkout