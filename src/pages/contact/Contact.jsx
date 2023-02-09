
import Container from 'react-bootstrap/Container';
import contactStyles from "./Contact.module.scss";
import Form from 'react-bootstrap/Form';

const ContactSection = () =>{
  return(
    <>
   <Container fluid className={contactStyles.contactContainer}>
        <h1 className={contactStyles.contactTitle}>Contact Me</h1>
<div className={contactStyles.smallruler}></div>
        <p className={contactStyles.subtext}>
       Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
        </p>
    <div className="d-flex flex-column justify-content-center align-items-center">
       <Form className={contactStyles.formContainer} action="https://formsubmit.co/uwabunkeonyeijeoma@gmail.com" method="POST">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>NAME</Form.Label>
        <Form.Control type="text" className={contactStyles.inputContainer} name="name"/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>EMAIL</Form.Label>
        <Form.Control type="email" className={contactStyles.inputContainer} name="email"/>
      </Form.Group>

     <Form.Group controlId="floatingTextarea2">
      <Form.Label>MESSAGE</Form.Label>
        <Form.Control
          as="textarea"
          style={{ height: '100px' }}
        className={contactStyles.inputContainer}
        name="message"/>
      </Form.Group>
    <div className={contactStyles.formButton}>
      <button  className='btn mt-3' type="submit">
        Submit
      </button>
      </div>
    </Form>
      
      
      
      </div>
    </Container>
    </>
  )
}
export default ContactSection