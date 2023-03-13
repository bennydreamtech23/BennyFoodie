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
import { MdEmail, MdOutlinePhoneLocked, MdPersonOutline, MdLocationOn } from 'react-icons/md'
import { BsFillPhoneVibrateFill } from "react-icons/bs"
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
    
     if (!values.subject) {
      errors.subject = 'Title is required'
    }
    
    if (!values.email) {
      errors.email = 'Email is required'
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email'
    }
    
    if (!values.message) {
      errors.message = 'Please tell us in details'
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
        subject: true,
        full_name: true,
        message: true,
        email: true,
      })
      setIsLoading(false)
    }

    if (Object.keys(formError).length === 0) {
      setTouched({
        subject: false,
        full_name: false,
        message: false,
        email: false,
      })

      fetch('https://formsubmit.co/ajax/uwabunkeonyeijeoma@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          full_name: formValues.full_name,
          Email: formValues.email,
          Subject: formValues.subject,
          message: formValues.message,
          _subject: `New Message Submmitted By ${formValues.full_name}`,
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
      
 <section className='mb-5'> 
 <h1 className={styles.heading}>
Get in touch with us !
 </h1>
<Row className='gap-5 mt-5 mx-auto d-flex align-items-center justify-content-center'>

{/*card 1*/}
     <Col lg='4' md='6'
     className={styles.card}>
    
<BsFillPhoneVibrateFill
className={styles.icon}/>
  
    <h3 className={styles.headingsmall}>
    PHONE
    </h3>    
    
        <p
        className={styles.text}>
+234(09)277-455-900
       </p>
       
               <p
        className={styles.text}>
+234(09)277-800-900
       </p>

    </Col>

      {/* card 2*/}
      
     <Col lg='4' md='6'
     className={styles.card}>
  <MdEmail className={styles.icon}/>
    <h3 className={styles.headingsmall}>
    Email
    </h3>
        
        <p
        className={styles.text}>
       bennyfoodiesupport@gmail.com 
        </p>
                <p
        className={styles.text}>
       bennyfoodiehelpline@gmail.com 
        </p>
    </Col>

      {/*card 3*/}
     <Col lg='4' md='6'
     className={styles.card}>
  <MdLocationOn className={styles.icon}/>
      <h3 className={styles.headingsmall}>
      address
      </h3>
        <p
        className={styles.text}>
No 15 Jonnesburg Street Washington DC
         </p>
    </Col>
</Row>
</section>
    
 <Form onSubmit={handlesubmit} 
        className={styles.form}>
          <p className='h5 text-center fw-bold text-uppercase mb-3'>
          If you got any question don't hesitate to send us a message 
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

                <Form.Control
                  name='subject'
                  type='text'
                  value={formValues.subject}
                  placeholder='Subject'
                  onChange={handleChange}
                />
              </InputGroup>
              <div className={styles.errorMsg}>
                {touched.subject && formError.subject}
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
       Send
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
