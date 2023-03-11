import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {
  auth,
 sendPasswordReset
} from '../auth/firebase'

import styles from './ResetPassword.module.scss'

import {
  Container,
  Toast,
  ToastContainer,
  Row,
  Col,
  Form,
  InputGroup,
  Spinner,
  Button,
} from 'react-bootstrap'

//icon
import { MdEmail} from 'react-icons/md'

import { FcGoogle } from 'react-icons/fc'

const Login = () => {
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
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
    
    if (!values.email) {
      errors.email = 'Email is required'
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email'
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
        email: true,
      })
      setIsLoading(false)
    }

    if (Object.keys(formError).length === 0) {
      setTouched({
        email: false,
      })
        sendPasswordReset(
          formValues.email,
        )
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (loading === isLoading) return
    if (user) navigate('/menu')
  }, [user, isLoading])

  return (
    <Container fluid className={styles.Container}>
      <h1 className={styles.title}>
       Reset Password
      </h1>

      <p className={styles.subTitle}>
      Enter your email, to receive a mail on how to reset your password and follow all the instructions
      </p>

      <Form onSubmit={handlesubmit}>
        <Form.Group className={styles.group}>
          <Form.Label 
          className={styles.labelfield}>
          Email
          </Form.Label>

          <InputGroup className={styles.inputField}>
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
        </Form.Group>

        <div className='d-flex align-items-center justify-content-center gap-3'>
          {isLoading ? (
            <Button disabled>
              <Spinner
                as='span'
                animation='grow'
                size='sm'
                role='status'
                aria-hidden='true'
              />
              Loading...
            </Button>
          ) : (
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          )}
        </div>
      </Form>

      <div className={styles.groupbtn}>
       
        <div className={styles.semigroup}>
          <p>New User create an Account? <Link 
          to="/Signup"
          className={styles.link}>
        Signup
          </Link>
          </p>
        </div>
      </div>

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

export default Login