import { useState, useEffect } from 'react'
import styles from './Form.module.scss'
import {
  Container,
  Toast,
  ToastContainer,
  Row,
  Col,
  Form,
  InputGroup,
  Spinner, 
  Button
} from 'react-bootstrap'

//icon
import { MdEmail, MdOutlinePhoneLocked, MdPersonOutline } from 'react-icons/md'

const Quote = () => {
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

    if (!values.full_name) {
      errors.full_name = 'Full Name is required'
    }
    
     if (!values.dish_name) {
      errors.dish_name = 'Dish Type is required'
    }
    
    if (!values.email) {
      errors.email = 'Email is required'
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email'
    }
    
    if (!values.phone_number) {
      errors.phone_number = 'Phone Number is required'
    }
    
    if (!values.type_of_pan) {
      errors.type_of_pan = 'Please select an option'
    }
 
    if (!values.quantity) {
      errors.quantity = 'Please enter the number of Pan required'
    }
  
    if (!values.message) {
      errors.message = 'Please specify more details'
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
setIsLoading(true)
    if (Object.keys(formError).length > 0) {
      setTouched({
        dish_name: true,
        full_name: true,
        message: true,
        email: true,
        phone_number: true,
        type_of_pan: true,
    quantity: true,
      })
      setIsLoading(false)
    }

    if (Object.keys(formError).length === 0) {
      setTouched({
        dish_name: false,
        full_name: false,
        message: false,
        email: false,
        phone_number: false,
        type_of_pan: false,
    quantity: false,
      })

      fetch('https://formsubmit.co/ajax/uwabunkeonyeijeoma@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Dish_type: formValues.dish_name,
          full_name: formValues.full_name,
          Email: formValues.email,
          Phone_number: formValues.phone_number,
          Type_of_pan: formValues.type_of_pan,
          message: formValues.message,
          quantity: formValues.quantity,
          _subject: `New Catering Service Order Submmitted By ${formValues.first_name} ${formValues.last_name}`,
          _captcha: true,
          _blacklist: 'spammy pattern, banned term, phrase',
          _template: 'box',
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success === 'true') {
            //alert('success')
            setErrorType('success')
            setMessageType('Mail sent success')
            setShowToast(true)
            setFormValues({})
            setFormError({})
            e.target.reset()
            setIsLoading(false)
          } else {
            //alert('failure')
            setErrorType('danger')
            setMessageType(data.message)
            setShowToast(true)
            setIsLoading(false)
          }
        })
        .catch((error) => console.log(error))
    }
  }

  return (
      <Container fluid
      className={styles.Container}>
      
 <Form onSubmit={handlesubmit} 
        className={styles.form}>
          <Form.Group className={styles.box}>
            <Form.Label className={styles.labelfield}>
              Personal Details
            </Form.Label>

            <div className='mb-3'>
              <InputGroup>
                <InputGroup.Text id='inputGroupPrepend'>
                  <MdPersonOutline />
                </InputGroup.Text>
                <Form.Control
                  name='full_name'
                  type='text'
                  value={formValues.first_name}
                  placeholder='Please Enter your Full Name'
                  onChange={handleChange}
                />
              </InputGroup>
              <div className={styles.errorMsg}>
                {touched.full_name && formError.full_name}
              </div>
            </div>

            <div className='mb-3'>
              <InputGroup>
                <InputGroup.Text id='inputGroupPrepend'>
                  <MdEmail />
                </InputGroup.Text>
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
                <InputGroup.Text id='inputGroupPrepend'>
                  <MdOutlinePhoneLocked />
                </InputGroup.Text>
                <Form.Control
                  name='phone_number'
                  type='number'
                  value={formValues.phone_number}
                  placeholder='Please Enter your Phone Number'
                  onChange={handleChange}
                />
              </InputGroup>
              <div className={styles.errorMsg}>
                {touched.phone_number && formError.phone_number}
              </div>
            </div>
          
               <div className='mb-3'>
              <InputGroup>
                  <Form.Control
                  as="textarea" 
                  rows={4}
                  name='message'
                  type='text'
                  value={formValues.message}
                  placeholder='Please Enter your message'
                  onChange={handleChange}
                />
              </InputGroup>
              <div className={styles.errorMsg}>
                {touched.message && formError.message}
              </div>
            </div>   
      </Form.Group>
      
         
          <Form.Group className={styles.box}>
            <Form.Label className={styles.labelfield}>Type Of Dish</Form.Label>

            <InputGroup className='mb-4'>
              <Form.Control
                name='dish_name'
                type='text'
                value={formValues.quantity}
                onChange={handleChange}
                placeholder='Please Enter Dish Type'
              />
            </InputGroup>

            <div className={styles.errorMsg}>
              {touched.dish_name && formError.dish_name}
            </div>
          </Form.Group>

          <Form.Group className={styles.box}>
            <Form.Label className={styles.labelfield}>
              Type Of Pan
            </Form.Label>
            <select name='type_of_pan' onChange={handleChange}>
              <option value=''>Select an option</option>
              <option value='Half Pan'>
              For Half Pan
              </option>
              <option value='Full Pan'>
              For Full Pan
              </option>
            </select>
            <div className={styles.errorMsg}>
              {touched.type_of_pan && formError.type_of_pan}
            </div>
          </Form.Group>

         
          <Form.Group className={styles.box}>
            <Form.Label className={styles.labelfield}>Quantity</Form.Label>

            <InputGroup className='mb-4'>
              <Form.Control
                name='quantity'
                type='number'
                value={formValues.quantity}
                onChange={handleChange}
                placeholder='Please Enter the Number of Quantity'
              />
            </InputGroup>

            <div className={styles.errorMsg}>
              {touched.quantity && formError.quantity}
            </div>
          </Form.Group>
          
          <input type='hidden' />
          <input type='hidden' />
          <input type='hidden' />
          <input type='hidden' />
          {isLoading ? (
           <Button disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>     
          ) : (
     <Button variant="primary" type='submit'>
       Submit
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

export default Quote
