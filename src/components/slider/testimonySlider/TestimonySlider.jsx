import Slider from "react-slick";
import Styles from "./TestimonySlider.module.scss";
import { BsFillStarFill, BsStar } from "react-icons/bs";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        borderRadius: "50%",
        outline: "none",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        borderRadius: "50%",
        outline: "none",
      }}
      onClick={onClick}
    />
  );
}
const TestimonySlider = () => {
  //slack setting
  const settings = {
    autoplay: true,
    dots: true,
    navs: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="mt-5">
      {/*slider 1*/}
      <div>
        <p className={Styles.subtext}>
          "My first experience ordering from BennyFoodie was amazing; the
          customer care took her time to explain the premium package benefits to
          me."
        </p>
        <div className="mt-5 d-flex align-items-center gap-3">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="boy"
            className={Styles.img}
          />

          <div className="mt-5 d-flex-column align-items-center gap-3">
            <h1 className={Styles.aboutTitle}>William Blake</h1>
            <p>
              <BsFillStarFill className={Styles.icon} />
              <BsFillStarFill className={Styles.icon} />
              <BsFillStarFill className={Styles.icon} />
              <BsFillStarFill className={Styles.icon} />
            </p>
          </div>
        </div>
      </div>

      {/*slider 2*/}

      <div>
        <p className={Styles.subtext}>
          "We love the hamburger, especially the veggie Hamburger - it's our
          favourite as it is very filling and affordable."
        </p>
        <div className="mt-5 d-flex align-items-center gap-3">
          <img
            src="https://randomuser.me/api/portraits/women/75.jpg"
            alt="boy"
            className={Styles.img}
          />

          <div className="mt-5 d-flex-column align-items-center gap-3">
            <h1 className={Styles.aboutTitle}>Jane Blake</h1>
            <p>
              <BsFillStarFill className={Styles.icon} />
              <BsFillStarFill className={Styles.icon} />
              <BsFillStarFill className={Styles.icon} />
              <BsFillStarFill className={Styles.icon} />
            </p>
          </div>
        </div>
      </div>

      {/*slider 3*/}

      <div>
        <p className={Styles.subtext}>
          "I love the natural and homely feeling I get from eating the food I
          order in this restaurant, but I suggest that the delivery time should
          be rechecked."
        </p>
        <div className="mt-5 d-flex align-items-center gap-3">
          <img
            src="https://randomuser.me/api/portraits/women/25.jpg"
            alt="boy"
            className={Styles.img}
          />

          <div className="mt-5 d-flex-column align-items-center gap-3">
            <h1 className={Styles.aboutTitle}>Kelly Blake</h1>
            <p>
              <BsFillStarFill className={Styles.icon} />
              <BsFillStarFill className={Styles.icon} />
              <BsFillStarFill className={Styles.icon} />
              <BsStar className={Styles.icon} />
            </p>
          </div>
        </div>
      </div>

      {/*slider 4*/}

      <div>
        <p className={Styles.subtext}>
          "I love the taste of Mama's cooking, but what I love the most about
          BennyFoodie is the spicy taste of their Rice Skillet Chicken - I keep
          coming back for more!"
        </p>
        <div className="mt-5 d-flex align-items-center gap-3">
          <img
            src="https://randomuser.me/api/portraits/men/20.jpg"
            alt="boy"
            className={Styles.img}
          />

          <div className="mt-5 d-flex-column align-items-center gap-3">
            <h1 className={Styles.aboutTitle}>Drake Blake</h1>
            <p>
              <BsFillStarFill className={Styles.icon} />
              <BsFillStarFill className={Styles.icon} />
              <BsFillStarFill className={Styles.icon} />
              <BsFillStarFill className={Styles.icon} />
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
};
export default TestimonySlider;
