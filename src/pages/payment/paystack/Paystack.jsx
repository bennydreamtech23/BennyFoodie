import { useState, useEffect } from 'react'
import styles from './Paystack.module.scss'
import PaystackProp from '@paystack/inline-js'
import { useSelector } from "react-redux";

import {
  Container,
  Toast,
  Row,
  Col,
  Form,
  InputGroup,
  Spinner, 
  Button
} from 'react-bootstrap'

//icon
import { MdEmail, MdOutlinePhoneLocked, MdPersonOutline } from 'react-icons/md'

const PaystackPayment = () => {
   const cartTotalAmount = useSelector(state => state.cart.totalAmount) 
  const shippingCost = 40
  const  totalAmount = cartTotalAmount + Number(shippingCost)
  const[isLoading, setIsLoading] = useState(false)
  const [formValues, setFormValues] = useState({})

  const [touched, setTouched] = useState({})

  //error
  const [formError, setFormError] = useState({})

  //toast usestate component
  const [showToast, setShowToast] = useState(false)
  const [errorType, setErrorType] = useState('')
  const [messageType, setMessageType] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })

    setTouched((prevState) => ({
      ...prevState,
      [e.target.name]: true,
    }))
  }


  const validate = (values) => {
    const errors = {}
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (!values.first_name) {
      errors.first_name = 'First Name is required'
    }
    
      if (!values.last_name) {
      errors.last_name = 'Last Name is required'
    }
    
    if (!values.email) {
      errors.email = 'Email is required'
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email'
    }
    
  if (!values.amount) {
      errors.amount = 'Amount should be inputted'
   }
 
    return errors
  }

  useEffect(() => {
    validate(formValues)
    //console.log(formError)
    setFormError(validate(formValues))
    // if (Object.keys(formError).length === 0) {
    // }
  }, [formValues, touched])

  const handlesubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
    //const paystack = new PaystackProp()
setIsLoading(true)

    if (Object.keys(formError).length > 0) {
      setTouched({
        first_name: true,
        last_name: true,
        email: true,
      amount: true,
      })
      setIsLoading(false)
    }

    if (Object.keys(formError).length === 0) {
      setTouched({
        first_name: false,
        last_name: false,
        email: false,
        amount: false,
      })
      
  const paystack = new PaystackProp()
  paystack.newTransaction({
    key: "pk_test_659a64b0fc8e34c320d741dc26ce4a183a4feef8",
    amount: formValues.amount * 100,
    email: formValues.email,
    first_name: formValues.first_name,
    last_name: formValues.last_name,
    onSuccess(transaction){
      setErrorType('success')
      setMessageType('Payment is Successful')
      setShowToast(true)
      setFormValues({})
      setFormError({})
     e.target.reset()
    setIsLoading(false)
  },
  onCancel(){
     setErrorType('danger')
      setMessageType("Opps You cancelled the Transaction")
      setFormValues({})
      setFormError({})
     e.target.reset()
      setShowToast(true)
      setIsLoading(false)
  }
  })
    setIsLoading(false)   
  }
  }

  return (
      <Container fluid
      className={styles.Container}>
 <Form onSubmit={handlesubmit} 
        className={styles.form}>

          <Form.Group>
            <div className='mb-3'>
              <InputGroup>
                <Form.Control
                  name='first_name'
                  type='text'
                  value={formValues.first_name}
                  placeholder='Please Enter your First Name'
                  onChange={handleChange}
                />
              </InputGroup>
              <div className={styles.errorMsg}>
                {touched.first_name && formError.first_name}
              </div>
            </div>

<div className='mb-3'>
              <InputGroup>
                <Form.Control
                  name='last_name'
                  type='text'
                  value={formValues.last_name}
                  placeholder='Please Enter your Last Name'
                  onChange={handleChange}
                />
              </InputGroup>
              <div className={styles.errorMsg}>
                {touched.last_name && formError.last_name}
              </div>
            </div>

            <div className='mb-3'>
              <InputGroup>
                <Form.Control
                  name='email'
                  type='email'
                  value={formValues.email}
                  placeholder='Please Enter your Email Address'
                  onChange={handleChange}
                />
              </InputGroup>
              <div className={styles.errorMsg}>
                {touched.email && formError.email}
              </div>
            </div>
      
             <div className='mb-3'>
              <InputGroup>
                <Form.Control
                  name='amount'
                  type='number'
                  value={formValues.amount}
                  placeholder='Enter the amount'
                  onChange={handleChange}
                />
              </InputGroup>
                <div className={styles.errorMsg}>
                {touched.amount && formError.amount}
              </div>
            </div>
           
      </Form.Group>
      
          {isLoading ? (
           <Button disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        paying...
      </Button>     
          ) : (
     <Button variant="primary" type='submit'>
     Pay
      </Button>
          )}
        </Form>
        
      {showToast ? (
        <>
          <div className={styles.ToastContainer} />
          <div className={styles.centered}>
            <Toast
              bg={errorType}
              onClose={() => {
                setShowToast(!showToast)
              }}
              className={styles.toast}
            >
              <Toast.Header className='mt-3'>
                <img
                  src='holder.js/20x20?text=%20'
                  className='rounded me-2'
                  alt=''
                />
                <strong className='me-auto'>BennyFoodie</strong>
              </Toast.Header>
              <Toast.Body className='text-dark'>{messageType}</Toast.Body>
            </Toast>
          </div>
        </>
      ) : (
        ''
      )}
</Container>
  )
}

export default PaystackPayment
