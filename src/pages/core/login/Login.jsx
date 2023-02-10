import {Container,  Col, Form, InputGroup, Row} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import styles from "./Login.module.scss";
 import { Formik } from 'formik';
 import * as Yup from 'yup';

//icon
import { RiLockPasswordFill } from "react-icons/ri";
import {MdEmail,MdOutlinePhoneLocked, MdErrorOutline, MdPersonOutline} from "react-icons/md";


function SignupPage() {
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
 
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
       onSubmit={(values, { setSubmitting }) => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(true);
         navigate('/')
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
      
    {/*pasword and phone number section*/}  
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
                type="password"
                name="password"
                placeholder="Set your password"
              id="password"
           className={styles.inputbox} 
             {...formik.getFieldProps('password')}
           />
               </InputGroup>
               
       {formik.touched.password && formik.errors.password ? (
             <div className={styles.errorMsg}><MdErrorOutline className="h6 mt-1"/> {formik.errors.password}</div>
           ) : null}         
         
</div>
     </Form.Group>
      
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
    
    
    
    </Container>
  );
}

export default SignupPage;
