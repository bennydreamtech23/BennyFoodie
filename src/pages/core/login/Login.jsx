import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {
  auth,
logInWithEmailAndPassword,
  signInWithGoogle,
} from '../auth/firebase'

import styles from './Login.module.scss'

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
import { MdEmail, 
MdPersonOutline } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const Login = () => {
  const [user,loading] = useAuthState(auth)
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(loading)
  const [formValues, setFormValues] = useState({})
  const [passwordEye, setpasswordEye] = useState(false)
  
  const [touched, setTouched] = useState({})

  //error
  const [formError, setFormError] = useState({})

  //toast usestate component
  const [showToast, setShowToast] = useState(false)
  const [errorType, setErrorType] = useState('')
  const [messageType, setMessageType] = useState('')

  //const useAuthValue = useContext(AuthContext)
  //const { setTimeActive } = useAuthValue

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
    const passw = /^[A-Za-z]\w{7,14}$/
  
    if (!values.email) {
      errors.email = 'Email is required'
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email'
    }

    if (!values.password) {
      errors.password = 'Password is required'
    } else if (!passw.test(values.password)) {
      errors.password = 'Password must contain uppercase and lowercase.'
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

//submit form function
const handlesubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
    setIsLoading(true)
    if (Object.keys(formError).length > 0) {
      setTouched({
        password: true,
        email: true,
      })
      setIsLoading(false)
    }

    if (Object.keys(formError).length === 0) {
      setTouched({
        password: false,
        email: false,
      })
        logInWithEmailAndPassword(
          formValues.email,
          formValues.password
        )
 setIsLoading(false)
    }
  }
  
  useEffect(() => {
if (isLoading) {
  setIsLoading(true)
}
if (user) navigate('/menu')
setIsLoading(false)
  }, [user, loading])
  
  return (
    <Container fluid className={styles.Container}>
      <h1 className={styles.title}>
        Welcome Back to <span className={styles.color}>Bennyfoodie!</span>
      </h1>

      <p className={styles.subTitle}>
        Register to create your first account and become a prominent customer of
        BennyFoodie
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

        <Form.Group className={styles.group}>
          <Form.Label className={styles.labelfield}>Password</Form.Label>
          <InputGroup className={styles.inputField}>
            <InputGroup.Text id='inputGroupPrepend'>
              <RiLockPasswordLine />
            </InputGroup.Text>
            <Form.Control
              name='password'
              type={passwordEye ? 'text' : 'password'}
              value={formValues.phone_number}
              placeholder='Please Enter your Password'
              onChange={handleChange}
            />

            <InputGroup.Text
              id='inputGroupPrepend'
              role='button'
              onClick={(e) => {
                e.preventDefault()
                setpasswordEye(!passwordEye)
              }}
            >
              {passwordEye ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </InputGroup.Text>
          </InputGroup>
          <div className={styles.errorMsg}>
            {touched.password && formError.password}
          </div>
        </Form.Group>

      
        <div className='d-flex align-items-center justify-content-center gap-3'>
          {isLoading ? (
            <Button 
variant='success'
            disabled>
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
          
          <Link 
          to="/forgotpassword"
          className={styles.link}>forgot Password</Link>
        </div>
      </Form>

      <div className={styles.groupbtn}>
        <div>
          <button className={styles.signupbtn} onClick={signInWithGoogle}>
            Sign up with <FcGoogle className='lead' />
          </button>
        </div>

        <div className={styles.semigroup}>
          <p>New User create an Account?</p>
          <Link 
          to="/Signup"
          className={styles.link}>
        Signup
          </Link>
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