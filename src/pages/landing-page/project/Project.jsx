import {Container, Row, Col,Card} from 'react-bootstrap';
import ProjectStyles from "./Project.module.scss";
//import { Link } from "react-router-dom";
import {BsFillSuitHeartFill} from "react-icons/bs";
import FoodMenu from "../../../components/foodMenu/Foodmenu";
import {useState} from "react";
import {MdOutlineFastfood, MdOutlineFreeBreakfast, MdLunchDining, MdDinnerDining} from "react-icons/md";

import Slider from "react-slick";

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



const ProjectSection = () =>{
  
    const chefanime = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673719201/pngwing.com-_1__ls7bfm.webp";
    
 const[data, setData] = useState(FoodMenu)
 
 //filter function
   const filterResult = (catItem) =>{
    const result = FoodMenu.filter((curDate) =>{
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
onClick= {() => setData(FoodMenu)}>
<MdOutlineFastfood className="lead mb-2"/>
<br/>
All
</button>
</div>

  <div className={ProjectStyles.cardFilter}>
<button className="btn"
onClick= {() => filterResult("Dinner")}>

<MdDinnerDining className="lead mb-2"/>
<br/>
Dinner
</button>
</div>

  <div className={ProjectStyles.cardFilter}>
<button className="btn"
onClick= {() => filterResult("Lunch")}>

<MdLunchDining className="lead mb-2"/>
<br/>
Lunch
</button>
</div>

  <div className={ProjectStyles.cardFilter}>
<button className="btn"
onClick= {() => filterResult("Breakfast")}>

<MdOutlineFreeBreakfast className="lead mb-2"/>
<br/>

Breakfast
</button>
</div>

</header>

        <div className={ProjectStyles.tranding_product_inn}>
        
      <Slider {...settings}
      className={ProjectStyles.slider_outer}>
      
{data.map((values) =>{ const {id, image,name,price} = values
           return(
      <div 
     className={ProjectStyles.slide_item}
         key={id}>
         
          <div
          className={ProjectStyles.product_container}>
                
            <div 
         className={ProjectStyles.product_inn}>
                
        <div 
        className={ProjectStyles.product_pic_outer}>
      
        <BsFillSuitHeartFill 
       className={ProjectStyles.icon}/>
              <img
              src={image}
             alt="product image"
            className={ProjectStyles.heroimg} />
                    </div>

              <div className={ProjectStyles.boxText}>
        <h2 className="text-center h5">{name}</h2>
        
        <p className="text-center lead">
            £{price}
        </p>
        
              <div className={ProjectStyles.btnBox}>
        <button className='secondarybtn'>Buy Now</button>
        </div>
                    </div>
              </div>
                </div>
              </div>
              )
        })}
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