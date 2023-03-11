import {useState} from "react"
import PaystackProp from '@paystack/inline-js'
import {Container,
Row, 
Col, 
Form, 
InputGroup} from "react-bootstrap"
import Styles from "./Paystack.module.scss"

const PaystackIntegration = () =>{
  const [email, setEmail] = useState('')
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [amount, setAmount] = useState('')
  
  const paywithpaystack = (e) =>{
    e.preventDefault()
const paystack = new PaystackProp()
  paystack.newTransaction({
    key: "pk_test_659a64b0fc8e34c320d741dc26ce4a183a4feef8",
    amount: amount,
    email,
    first_name,
    last_name
  })  
    
  }
  
  
  return(
    <Container className={Styles.Container}>
    <Form onSubmit = {paywithpaystack}>
    <Form.Group>
    <InputGroup>
        <Form.Control 
        type='email'
        placeholder='Enter your email'
        value={email}
        onChange = {(e) => setEmail(e.target.value)}
/>
</InputGroup>
    </Form.Group>
    
    <Form.Group>
    <InputGroup>
        <Form.Control 
        type='text'
        placeholder='Enter your  first name' 
        value= {first_name}
        onChange = {(e) => setFirst_name(e.target.value)}
/>
</InputGroup>
    </Form.Group>
    
    <Form.Group>
    <InputGroup>
        <Form.Control 
        type='text'
        placeholder='Enter your last name' 
        value={last_name}
      onChange = {(e) => setLast_name(e.target.value)}
/>
</InputGroup>
    </Form.Group>
    
    <Form.Group>
    <InputGroup>
        <Form.Control 
        type='number'
        placeholder='Enter your amount' 
        value={amount}
        onChange = {(e) => setAmount(e.target.value)}
/>
</InputGroup>
    </Form.Group>
    
    <button className='btn mt-3'>
    pay
     </button>
    </Form>
    </Container>
    
    )
}

export default PaystackIntegration