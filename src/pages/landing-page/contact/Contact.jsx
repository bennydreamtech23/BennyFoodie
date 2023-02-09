
import Container from 'react-bootstrap/Container';
import contactStyles from "./Contact.module.scss";
const ContactSection = () =>{
  return(
    <>
   <Container fluid className={contactStyles.contactContainer}>
        <h1 className={contactStyles.contactTitle}>Contact Me</h1>
        <p className={contactStyles.subtext}>
        I’m actively looking for new opportunities. If you have questions and want to reach out to me, my inbox is always open and I always reply my e-mails very fast
        </p>
    <div className="d-flex flex-column justify-content-center align-items-center">
      <a href="mailto:uwabunkeonyeijeoma@gmail.com? &subject=Please Tell Me How I Can Be Of Assistance" className='btn mt-3 text-center' type="submit">
        Contact me
      </a>
      </div>
    </Container>
    </>
  )
}
export default ContactSection