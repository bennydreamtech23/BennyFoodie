import { Row, Col, Container, Nav } from "react-bootstrap";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import footerStyles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Row className="d-flex justify-content-between text-white">
        <Col lg="3" md="4" sm="12" className="mb-3">
          <h1 className={footerStyles.heading}>BennyFoodie</h1>
          <p className={footerStyles.subtext}>
            Healthy and mouth-watering dishes prepared by the best chefs in
            order to satisfy the stomach needs of their lovely customers.
          </p>
        </Col>

        <Col lg="3" md="4" sm="6" className="mb-3">
          <h1 className={footerStyles.heading}>Site map</h1>

          <Nav className="flex-column">
            <Link to="/services" className={footerStyles.link}>
              Catering
            </Link>

            <Link to="/about" className={footerStyles.link}>
              About
            </Link>

            <Link to="/contact_us" className={footerStyles.link}>
              Contact
            </Link>
          </Nav>
        </Col>

        <Col lg="3" md="4" sm="6" className="mb-3">
          <h1 className={footerStyles.heading}>Social Media</h1>

          <Nav className={footerStyles.icons}>
            <Link to="/" className={footerStyles.link}>
              <AiOutlineTwitter className={footerStyles.icon} />
            </Link>

            <Link to="/" className={footerStyles.link}>
              <AiFillInstagram className={footerStyles.icon} />
            </Link>

            <Link to="/" className={footerStyles.link}>
              <AiFillFacebook className={footerStyles.icon} />
            </Link>
          </Nav>
        </Col>

        <Col
          lg="12"
          md="12"
          sm="12"
          className="d-flex align-items-center justify-content-center mt-2"
        >
          <a
            href="#top"
            className="text-white text-center text-decoration-none fw-bold h4"
          >
            top of the page &uarr;
          </a>
        </Col>
      </Row>
      <div className={footerStyles.footerRuler}></div>

      <div className={footerStyles.footerButtom}>
        <p className={footerStyles.footersmall}>
          Website Developed by
          <strong className={footerStyles.footernote}> Bennydreamtech</strong>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
