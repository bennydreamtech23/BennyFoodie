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

const FormPage = () => {
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
    
     if (!values.nature_of_event) {
      errors.nature_of_event = 'Nature of Event is required'
    }
    
    if (!values.email) {
      errors.email = 'Email is required'
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email'
    }
    
    if (!values.phone_number) {
      errors.phone_number = 'Phone Number is required'
    }
    
    if (!values.budget) {
      errors.budget = 'Budget per person is required'
    }
 
    if (!values.number_of_guest) {
      errors.number_of_guest = 'Please Enter the number of Guest'
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
        nature_of_event: true,
        full_name: true,
        message: true,
        email: true,
        phone_number: true,
        budget: true,
    number_of_guest: true,
      })
      setIsLoading(false)
    }

    if (Object.keys(formError).length === 0) {
      setTouched({
        nature_of_event: false,
        full_name: false,
        message: false,
        email: false,
        phone_number: false,
        budget: false,
    number_of_guest: false,
      })

      fetch('https://formsubmit.co/ajax/uwabunkeonyeijeoma@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          nature_of_event: formValues.nature_of_event,
          full_name: formValues.full_name,
          Email: formValues.email,
          Phone_number: formValues.phone_number,
          budget: formValues.budget,
          message: formValues.message,
          number_of_guest: formValues.number_of_guest,
          _subject: `New Catering Service Order Submmitted By ${formValues.full_name}`,
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
            setFormValues({message: ""})
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
          <p className='lead text-center'>
          Kindly fill this form below and we would get in touch with you shortly. <br/>
          We are capable of handling any kind of event.
          </p>
          <Form.Group className={styles.box}>
          
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
                  name='nature_of_event'
                  type='text'
                  value={formValues.nature_of_event}
                  placeholder='Nature of Event'
                  onChange={handleChange}
                />
              </InputGroup>
              <div className={styles.errorMsg}>
                {touched.nature_of_event && formError.nature_of_event}
              </div>
            </div>        
    
      <div className='mb-3'>
              <InputGroup>
                <Form.Control
                  name='budget'
                  type='number'
                  value={formValues.budget}
                  placeholder='Budget per person'
                  onChange={handleChange}
                />
              </InputGroup>
              <div className={styles.errorMsg}>
                {touched.budget && formError.budget}
              </div>
            </div>      
          
            <div className='mb-3'>
              <InputGroup>
                <Form.Control
                  name='number_of_guest'
                  type='number'
                  value={formValues.number_of_guest}
                  placeholder='Approximate Number of Guest'
                  onChange={handleChange}
                />
              </InputGroup>
              <div className={styles.errorMsg}>
                {touched.number_of_guest && formError.number_of_guest}
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
                  placeholder='Is there any additional information you would like to add'
                  onChange={handleChange}
                />
              </InputGroup>
              <div className={styles.errorMsg}>
                {touched.message && formError.message}
              </div>
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

export default FormPage
