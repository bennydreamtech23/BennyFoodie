import {Container, Row, Col, Card} from 'react-bootstrap';
import TestimonialStyles from "./Testimonies.module.scss";
import TestiomnySlider from "../../../components/slider/testimonySlider/TestimonySlider"

const AboutSection = () =>{

    return (
   <Container
   fluid className={TestimonialStyles.Container}>
   
    <h1
    className={TestimonialStyles.aboutTitle}>
   Customers Review
    </h1>
    
    <h2 className={TestimonialStyles.subTitle}>what our <span className={TestimonialStyles.brand}> brand lovers </span> are saying</h2>

<p className={TestimonialStyles.subtext}>We love keeping a tab on our customers intake of our product and our we can  improve our services to keep satisfying our Clients</p>

<div className={TestimonialStyles.slider}>
  <TestiomnySlider/>
</div>
    </Container>
    
    )
}

export default AboutSection