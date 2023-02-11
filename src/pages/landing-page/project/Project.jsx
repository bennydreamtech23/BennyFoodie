
import {useState} from "react";
import Slider from "react-slick";
import ProjectStyles from "./Project.module.scss";
//import { Link } from "react-router-dom";

//components
import foodMenu from "../../../components/foodMenu/foodmenu.js";
import ProductCard from "../../../components/productCard/ProductCard"
import {Container, Row, Col,Card} from 'react-bootstrap';

//icon
import {MdOutlineFastfood, MdOutlineFreeBreakfast, MdLunchDining, MdDinnerDining} from "react-icons/md";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", borderRadius:"50%", outline: "none"
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
      style={{ ...style, display: "block", background: "green", borderRadius:"50%", outline: "none" }}
      onClick={onClick}
    />
  );
}



const ProjectSection = (props) =>{
  
    const chefanime = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673719201/pngwing.com-_1__ls7bfm.webp";
    
 const[data, setData] = useState(foodMenu)
 
 //filter function
   const filterResult = (catItem) =>{
    const result = foodMenu.filter((curDate) =>{
      return curDate.category === catItem;
    });
    setData(result)
  }
 
 //slack setting
     const settings = {
       autoplay: true,
      dots: true,
      navs: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplaySpeed: 3000,
      cssEase: "linear",
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
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
 
  return(
    <Container fluid className={ProjectStyles.Container}>
    
<Row className={ProjectStyles.row}>

<Col>
    <h1 className={ProjectStyles.aboutTitle}>Our Popular Menu</h1>
    
    <p className={ProjectStyles.subHeading}>
    Our Love for food and our desire for everyone to be healthy, always keep us in check when preparing our Dishes for you, Our lovely and outstanding Customers.
    </p>
  </Col>
  
     <Col
   className={ProjectStyles.col}>
      <img 
      src={chefanime} 
      loading="lazy"
      className={ProjectStyles.Img}/>
      </Col>
  </Row>
  
  
   {/*header button for filter*/}  
   
     <header className ={ProjectStyles.containerFilter}>
  
  <div className={ProjectStyles.cardFilter}>
   <button className="btn"
onClick= {() => setData(foodMenu)}>
<MdOutlineFastfood className="lead me-2"/>
All
</button>
</div>

<div className={ProjectStyles.cardFilter}>
<button className="btn"
onClick= {() => filterResult("Breakfast")}>

<MdOutlineFreeBreakfast className="lead me-2"/>
Breakfast
</button>
</div>

  <div className={ProjectStyles.cardFilter}>
<button className="btn"
onClick= {() => filterResult("Lunch")}>
<MdLunchDining className="lead me-2"/>
Lunch
</button>
</div>

<div className={ProjectStyles.cardFilter}>
<button className="btn"
onClick= {() => filterResult("Dinner")}>

<MdDinnerDining className="lead me-2"/>
Dinner
</button>
</div>

</header>

        <div className={ProjectStyles.tranding_product_inn}>
        
      <Slider {...settings}
      className={ProjectStyles.slider_outer}>
    {
      foodMenu.map(item =>(
      <div key={item.id}  className={ProjectStyles.slide_item}>
      <ProductCard item={item}/>
      </div>
      ))
    }

          </Slider>
        </div>

      <div className="mt-5 d-flex align-items-center justify-content-center">
  <button className="secondarybtn">
  Explore All
  </button>
   </div>
    </Container>
    )
}

export default ProjectSection