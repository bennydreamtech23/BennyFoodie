
import styles from "./Login.module.scss";
import {useState} from "react"
import {useNavigate} from "react-router-dom";
import {Button, Modal, Col, Form, InputGroup, Row} from 'react-bootstrap';
 import { Formik } from 'formik';
 import * as Yup from 'yup';
 //import LoginModal from '../login/Login/'
 
//icon
import { RiLockPasswordFill } from "react-icons/ri";
import {MdEmail,MdOutlinePhoneLocked, MdErrorOutline, MdPersonOutline} from "react-icons/md";


const LoginModal = (props) => {
 const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
 
const navigate = useNavigate();
//const [SignupOpen, setSignupOpen] = useState(false)

// const handleLogin = (e) =>{
//setIsOpen(true)
//props.onHide(true)
//}

  return (
    <>
 <Modal
      {...props}
      size="md"
       backdrop="static"
        keyboard={false}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      
      <Modal.Header closeButton className="px-5">
        <Modal.Title id="contained-modal-title-vcenter" className={styles.brandName}>
        Bennyfoodie.
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="px-5">
       <h1 className={styles.title}>Welcome Back to <span className={styles.color}>Bennyfoodie!</span></h1>
           <p className={styles.subTitle}>Please Enter your details</p>
     
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
           setSubmitting(false);
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
     Don't Have an Account?
     </p>
     <button className={styles.btnLink}>Signup</button>
     </div>
      </Modal.Body>
    </Modal>
    </>
  );
};
export default LoginModal