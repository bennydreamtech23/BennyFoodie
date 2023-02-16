import {Container, 
Col, 
Form,
InputGroup,
Row , 
Toast,
ToastContainer} from 'react-bootstrap';
import {useNavigate, Link} from "react-router-dom";
import styles from "./Login.module.scss";
 import { Formik } from 'formik';
 import * as Yup from 'yup';
 import {useState} from "react"

//icon
import { RiLockPasswordFill } from "react-icons/ri";
import {
  MdEmail,
  MdOutlinePhoneLocked, 
  MdErrorOutline, 
  MdPersonOutline} from "react-icons/md";

import {
  AiOutlineEyeInvisible, 
AiOutlineEye
} from "react-icons/ai";

function LoginPage() {
  const [showToast, setShowToast] = useState(false)
  const [errorType, setErrorType] = useState('')
  const [messageType, setMessageType] = useState('')

//toggle
  const [togglePassword, setTogglePassword] = useState(false)
  
const navigate = useNavigate()

const handleSignup = (e) =>{
e.preventDefault()
navigate('/signup')
}

  return (
    <Container fluid className={styles.Container}>
           <h1 className={styles.title}>Welcome Back to <span className={styles.color}>Bennyfoodie!</span></h1>
           <p className={styles.subTitle}>
         Enter your details, our prominent Customers
           </p>
    
     {/*registration form*/} 
      <Formik
       initialValues={{ 
       email: '',
        password: '',
       }}
  
       validationSchema={Yup.object({
       
         email: Yup.string().email('Invalid email address').required('Required'),
         
    password: Yup.string()
  .required('No password provided.')
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
       })}
       onSubmit={() => {
          //e.preventDefault()
          fetch('https://benny-foods.fly.dev/api/v1/users/login', {
            method: 'POST',
            //headers: {
            //'Content-Type': 'application/json',
            //'Accept': 'application/json'
            // },
            body: JSON.stringify({
              email: email.value,
              password: password.value,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              //alert(data.message)
              if (data.status === 'success') {
                alert(data.message)
                setErrorType('success')
                setMessageType(data.message)
                setShowToast(true)
             navigate('/menu', { replace: true })
              } else {
                alert(data.error.description)
                setErrorType('danger')
                setMessageType(data.error.description)
                setShowToast(true)
              }
            })
            .catch((error) => console.log(error))
        }}

     >
       {formik => (
         <Form  noValidate
         autoComplete='off'
         onSubmit={formik.handleSubmit}>
         
{/*email section of the page*/} 

          <Form.Group className={styles.group}>
         <div className={styles.subgroup}> 
    
      <Form.Label className={styles.labelfield}>
Email
      </Form.Label>
      
          <InputGroup className={styles.inputField}>
          
         <InputGroup.Text id="inputGroupPrepend">
        <MdEmail/></InputGroup.Text>
                 
              <Form.Control
                 size="md" 
            type="email"
          name="email"
     placeholder="Enter your Email Address"
            id="email"
      className={styles.inputbox} 
             {...formik.getFieldProps('email')}
           />
               </InputGroup>
    {formik.touched.email && formik.errors.email ? (
             <div className={styles.errorMsg}> <MdErrorOutline className="h6 mt-1"/> {formik.errors.email}</div>
           ) : null}      
        
</div>
     </Form.Group>
      
    {/*pasword section*/}  
      <Form.Group className={styles.group}>
     
     <div className={styles.subgroup}> 
    
      <Form.Label className={styles.labelfield}>
Password
      </Form.Label>
      
  <InputGroup className={styles.inputField}>
         <InputGroup.Text id="inputGroupPrepend">
        <RiLockPasswordFill/></InputGroup.Text>
                 
              <Form.Control
          size="md" 
          type={togglePassword ? 'text' : 'password'}
                name="password"
                placeholder="Set your password"
              id="password"
           className={styles.inputbox} 
             {...formik.getFieldProps('password')}
           />
        <InputGroup.Text id='inputGroupPrepend'  onClick={(e) => {
                    e.preventDefault()
                    setTogglePassword(!togglePassword)
                  }}>
                  {togglePassword ? (
                    <AiOutlineEyeInvisible />
                  ) : (
                    <AiOutlineEye />
                  )}
                </InputGroup.Text>
           </InputGroup>
               
       {formik.touched.password && formik.errors.password ? (
             <div className={styles.errorMsg}><MdErrorOutline className="h6 mt-1"/> {formik.errors.password}</div>
           ) : null}         
         
</div>
     </Form.Group>
    
    <Link to="/forgotpassword" className={styles.link}>Forget Password</Link>  
           <button className={styles.loginButton} 
           type="submit" 
        >
           Submit
           </button>
         </Form>
       )}
     </Formik>
     
     <hr/>
     <div className={styles.semiGroup}>
     <p className="text-center">
      Don't Have an Account
     </p>
     <button className={styles.btnLink} onClick={handleSignup}>Signup</button>
     </div>
    
          <ToastContainer position={'top-center'}>
        <Toast
          bg={errorType}
          show={showToast}
          onClose={() => {
            setShowToast(!showToast)
          }}
        >
          <Toast.Header>
            <img
              src='holder.js/20x20?text=%20'
              className='rounded me-2'
              alt=''
            />
            <strong className='me-auto'>BennyFoodie</strong>
          </Toast.Header>
          <Toast.Body className='text-white'>{messageType}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
}

export default LoginPage;
