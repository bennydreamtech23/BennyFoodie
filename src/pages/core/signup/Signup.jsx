import {Container,  Col, Form, InputGroup, Row} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import styles from "./Signup.module.scss";
 import { Formik } from 'formik';
 import * as Yup from 'yup';

//icon
import { RiLockPasswordFill } from "react-icons/ri";
import {MdEmail,MdOutlinePhoneLocked, MdErrorOutline, MdPersonOutline} from "react-icons/md";


function SignupPage() {
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
 
const navigate = useNavigate()

const handleLogin = (e) =>{
e.preventDefault()
navigate('/login')
}

  return (
    <Container fluid className={styles.Container}>
           <h1 className={styles.title}>Welcome to <span className={styles.color}>Bennyfoodie!</span></h1>
           <p className={styles.subTitle}>Register to create your first account and become a prominent customer of BennyFoodie</p>
    
     {/*registration form*/} 
      <Formik
       initialValues={{ 
       firstName: '',
       lastName: '',
       email: '',
       phoneNumber: '',
        password: '',
       }}
  
       validationSchema={Yup.object({
         firstName: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
           
         lastName: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
           
         email: Yup.string().email('Invalid email address').required('Required'),
         
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
    
    password: Yup.string()
  .required('No password provided.')
  .min(8, 'Password is too short - should be 8 chars minimum.')
  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
       })}
       onSubmit={(values, { setSubmitting }) => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(true);
         navigate('/login')
       }}
     >
       {formik => (
         <Form  noValidate
         autoComplete='off'
         onSubmit={formik.handleSubmit}>
         
          <Form.Group className={styles.group}>
      
         <div className={styles.subgroup}> 
    
      <Form.Label className={styles.labelfield}>
  First Name
      </Form.Label>

           <InputGroup className={styles.inputField}>
           
           <InputGroup.Text id="inputGroupPrepend">
                 <MdPersonOutline/></InputGroup.Text>
                 
              <Form.Control
                name="firstName"
                placeholder="Enter your First Name"
               id="firstName"
             type="text"
          className={styles.inputbox} 
             {...formik.getFieldProps('firstName')}
           />
         </InputGroup>
         
            {formik.touched.firstName && formik.errors.firstName ? (
             <div className={styles.errorMsg}><MdErrorOutline className="h6 mt-1"/> {formik.errors.firstName}</div>
           ) : null} 
</div>

     <div className={styles.subgroup}> 
    
      <Form.Label className={styles.labelfield}>
Last Name
      </Form.Label>

           <InputGroup className={styles.inputField}>
           
           <InputGroup.Text id="inputGroupPrepend">
                 <MdPersonOutline/></InputGroup.Text>
                 
              <Form.Control
                name="lastName"
                placeholder="Enter your Last Name"
               id="lastName"
             type="text"
          className={styles.inputbox} 
             {...formik.getFieldProps('lastName')}
           />
         </InputGroup>
         
            {formik.touched.lastName && formik.errors.lastName ? (
             <div className={styles.errorMsg}><MdErrorOutline className="h6 mt-1"/> {formik.errors.lastName}</div>
           ) : null} 
</div>
     </Form.Group>
      
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
Phone Number
      </Form.Label>
      
          <InputGroup className={styles.inputField}>
         <InputGroup.Text id="inputGroupPrepend">
        <MdOutlinePhoneLocked/></InputGroup.Text>
                 
              <Form.Control
                type="number"
                name="phoneNumber"
                placeholder="Enter your Phone Number"
                  id="phoneNumber"
           className={styles.inputbox} 
             {...formik.getFieldProps('phoneNumber')}
           />
               </InputGroup>
    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
             <div className={styles.errorMsg}><MdErrorOutline className="h6 mt-1"/> {formik.errors. phoneNumber}</div>
           ) : null}      
</div>

     <div className={styles.subgroup}> 
    
      <Form.Label className={styles.labelfield}>
Password
      </Form.Label>
      
  <InputGroup className={styles.inputField}>
         <InputGroup.Text id="inputGroupPrepend">
        <RiLockPasswordFill/></InputGroup.Text>
                 
              <Form.Control
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
     Already Have an Account
     </p>
     <button className={styles.btnLink} onClick={handleLogin}>login</button>
     </div>
    
    
    
    </Container>
  );
}

export default SignupPage;