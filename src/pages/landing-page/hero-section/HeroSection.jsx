import { Link, useNavigate } from "react-router-dom";
import HeroStyles from "./HeroSection.module.scss";
import heroImg from "../../../assests/foodlove.png";
import { useAuthState } from "react-firebase-hooks/auth";
import Slider from "react-slick";
import { auth } from "../../core/auth/firebase";
//container from bootstrap
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "../../../components/button/Button";

//icons
import { TbTruckDelivery, TbHandClick, TbAward } from "react-icons/tb";
import { BsArrowDownRight } from "react-icons/bs";

const HeroSection = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const getStarted = () => {
    if (!user === true) {
      navigate("/signup");
    } else {
      navigate("/menu");
    }
  };

  const order = () => {
    if (!user === true) {
      navigate("/signup");
    } else {
      navigate("/menu");
    }
  };

 // const img =
   // "https://img.freepik.com/free-photo/large-set-isolated-vegetables-white-background_485709-44.jpg?w=740&t=st=1678869338~exp=1678869938~hmac=8d6e26d0934e6e1ad1ed383c01877384da6d634199defa596ac0f0ec42a379b4";

  const settings = {
    autoplay: true,
    dots: true,
    navs: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <>
      <Container fluid className={HeroStyles.Container}>
        <Row className="d-flex flex-row-reverse justify-content-center align-items-center">
          <Col lg="6" md="12" className={HeroStyles.col}>
            <img
              src={heroImg}
              alt="hero-img"
              loading="lazy"
              className="img-fluid"
            />
          </Col>

          <Col lg="6" md="12" className={HeroStyles.heroText}>
            <h1
              className={HeroStyles.title}
              style={{ color: "var(--olivegreen)" }}
            >
              Always Eating Good
            </h1>

            <p className={HeroStyles.paraText}>
              We are providing the best and most delicious food at an affordable
              rate, so you don't have to worry about food poisoning!
            </p>

            <div className={HeroStyles.btnBox}>
              <Button
                className={`${HeroStyles.btn} ${HeroStyles.btnWhte} ${HeroStyles.btnAnimated}`}
                onClick={getStarted}
                title="Get Started"
              />

              <Button
                className="secondarybtn"
                onClick={order}
                title="Order Now"
              />
            </div>
          </Col>
        </Row>
      </Container>

      <section className={HeroStyles.smallbox}>
        <h1 className={HeroStyles.title} id={HeroStyles.title}>
          WHY CHOOSE US?
        </h1>
        <p>Choose us for the best quality of food delivered at a fast speed.</p>

        <section className={HeroStyles.container}>
          <Row
            className={`${HeroStyles.div_transform} mt-5 my-auto d-flex align-items-center justify-content-center`}
          >
            {/*card 1*/}
            <Col
              xl="3"
              lg="5"
              md="5"
              sm="5"
              className={`${HeroStyles.card} ${HeroStyles.card1}`}
            >
              <TbHandClick className={HeroStyles.Icon} />

              <h3 className={HeroStyles.smallTitle}>Easy To Order</h3>

              <p className={HeroStyles.text}>
                Our platform is designed to make ordering just a click away,
                taking your time and patience into consideration.
              </p>
            </Col>

            {/* card 2*/}

            <Col
              xl="3"
              lg="5"
              md="5"
              sm="5"
              className={`${HeroStyles.card} ${HeroStyles.card2}`}
            >
              <TbAward className={HeroStyles.Icon} />

              <h3 className={HeroStyles.smallTitle}>Best Quality</h3>

              <p className={HeroStyles.text}>
                We are providing affordable dishes that are well cooked and of
                high quality, so you don't have to worry about food hygiene
              </p>
            </Col>

            {/*card 3*/}
            <Col
              xl="3"
              lg="5"
              md="5"
              sm="5"
              className={`${HeroStyles.card} ${HeroStyles.card3}`}
            >
              <TbTruckDelivery className={HeroStyles.Icon} />

              <h3 className={HeroStyles.smallTitle}>Fastest Delivery</h3>

              <p className={HeroStyles.text}>
                We understand the importance of eating food on time, which is
                why we provide the fastest delivery services. We are just one
                step away from your doorstep, so you can enjoy delicious and
                affordable food without worrying about slow delivery.
              </p>
            </Col>
          </Row>
        </section>
      </section>
    </>
  );
};

export default HeroSection;
