import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import Slider from "react-slick";
import PopularFoodStyle from "./PopularMenuSection.module.scss";
//dummy data for popular food
import popularfoodData from "../../../components/data/popularMenuData.js";
//components from folder and bootstrap
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

const PopularMenuSection = (props) =>{
  const chefanime = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673719201/pngwing.com-_1__ls7bfm.webp";
  
 const[menu, setMenu] = useState(popularfoodData)
 
 const filterResult = (catItem)=>{
   const result = popularfoodData.filter((CurDate) =>{
     return CurDate.category === catItem
   })
   setMenu(result)
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
    <Container fluid 
    className={PopularFoodStyle.Container}>
    
<Row 
className={PopularFoodStyle.row}>

<Col>
    <h1 
    className={PopularFoodStyle.Title}>
    Our Popular Menu
    </h1>
    
    <p 
    className={PopularFoodStyle.subHeading}>
    Our Love for food and our desire for everyone to be healthy, always keep us in check when preparing our Dishes for you, Our lovely and outstanding Customers.
    </p>
  </Col>
  
     <Col
   className={PopularFoodStyle.col}>
      <img 
      src={chefanime} 
      loading="lazy"
      className={PopularFoodStyle.Img}/>
      </Col>
  </Row>
  
  
   {/*header button for filter*/}  
     <header 
     className ={PopularFoodStyle.containerFilter}>
  
  <div 
  className={PopularFoodStyle.cardFilter}>
   <button 
   className="btn"
onClick= {() => setMenu(popularfoodData)}>
<MdOutlineFastfood 
className="lead me-2"/>
All
</button>
</div>

<div
className={PopularFoodStyle.cardFilter}>
<button 
className="btn" 
onClick= {() => filterResult("Breakfast")}>

<MdOutlineFreeBreakfast 
className="lead me-2"/>
Breakfast
</button>
</div>

  <div 
  className={PopularFoodStyle.cardFilter}>
<button
className="btn"
onClick= {() => filterResult("Lunch")}>
<MdLunchDining 
className="lead me-2"/>
Lunch
</button>
</div>

<div 
className={PopularFoodStyle.cardFilter}>
<button 
className="btn"
onClick= {() => filterResult("Dinner")}>
<MdDinnerDining 
className="lead me-2"/>
Dinner
</button>
</div>

</header>

        <div 
        className={PopularFoodStyle.tranding_product_inn}>
        
      <Slider {...settings}
      className={PopularFoodStyle.slider_outer}>
    {
       menu.map(item =>(
      <div 
      key={item.id}  
      className={PopularFoodStyle.slide_item}>
      <ProductCard 
      item={item}
      category={item.category}/>
      </div>
      ))
    }
  </Slider>
</div>

      <div 
      className="mt-5 d-flex align-items-center justify-content-center">
  <Link 
  to='/menu'
  className="secondarybtn">
  Explore All
  </Link>
   </div>
    </Container>
    )
}

export default PopularMenuSection