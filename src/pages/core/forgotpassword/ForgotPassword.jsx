import {Container, 
Col, 
Form,
InputGroup,
Row , 
Toast,
ToastContainer} from 'react-bootstrap';
import {useNavigate, Link} from "react-router-dom";
import styles from "./ForgotPassword.module.scss";
 import { Formik } from 'formik';
 import * as Yup from 'yup';
 import {useState} from "react"

//icon
import { RiLockPasswordFill } from "react-icons/ri";
import {
  MdEmail,
  MdErrorOutline, 
 } from "react-icons/md";


function ForgetPasswordPage() {
  const [showToast, setShowToast] = useState(false)
  const [errorType, setErrorType] = useState('')
  const [messageType, setMessageType] = useState('')


const navigate = useNavigate()

const handleSignup = (e) =>{
e.preventDefault()
navigate('/signup')
}

  return (
    <Container fluid className={styles.Container}>
           <h1 className={styles.title}> Forgot password </h1>
           <p className={styles.subTitle}>
         Enter your Email Address for Reset password details
           </p>
    
     {/*registration form*/} 
      <Formik
       initialValues={{ 
       email: '',
       }}
  
       validationSchema={Yup.object({
         email: Yup.string().email('Invalid email address').required('Required'),
       })}
       onSubmit={() => {
          navigate("/otp")
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
     
           <button className={styles.loginButton} 
           type="submit">
          Continue
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

export default ForgetPasswordPage;
