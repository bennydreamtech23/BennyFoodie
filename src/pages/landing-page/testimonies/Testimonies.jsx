import { Container, Row, Col, Card } from "react-bootstrap";
import TestimonialStyles from "./Testimonies.module.scss";
import TestiomnySlider from "../../../components/slider/testimonySlider/TestimonySlider";

const TestimonySection = () => {
  return (
    <Container fluid className={TestimonialStyles.Container}>
      <h1 className={TestimonialStyles.aboutTitle}>Customers Review</h1>

      <h2 className={TestimonialStyles.subTitle}>
        What our brand lovers are saying
      </h2>

      <p className={TestimonialStyles.subtext}>
       We want to keep our Customers happy and healthy by keeping a tab on their intake of our product, so that we can improve our services.
      </p>

      <div className={TestimonialStyles.slider}>
        <TestiomnySlider />
      </div>
    </Container>
  );
};

export default TestimonySection;
