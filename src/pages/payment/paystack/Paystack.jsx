import {useState} from "react"
import PaystackProp from '@paystack/inline-js'
import {Container,
Row, 
Col, 
Form, 
InputGroup} from "react-bootstrap"
import Styles from "./Paystack.module.scss"


const PaystackIntegration = () =>{
  return(
    <Container className={Styles.Container}>

    <Form.Group>
    <InputGroup>
        <Form.Control 
        type='text'
        placeholder='Enter your name' 
/>
</InputGroup>
    </Form.Group>
    </Container>
    
    )
}

export default PaystackIntegration