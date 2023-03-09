import {useNavigate} from "react-router-dom";
import FavouriteFoodStyles from "./FavouriteFood.module.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth} from "../../core/auth/firebase";
//container from bootstrap
import {Container, Row, Col, Card} from 'react-bootstrap';
//favourite food data dummy data
import favouritefoodData from "../../../components/data/favouriteData.js"
//component to display card
import ProductCard from "../../../components/productCard/ProductCard"
//icon
import {BsFillSuitHeartFill} from "react-icons/bs";


const FavouriteFoodSection = () =>{
  
  const chef = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673718971/pngwing.com_zlmc2w.webp";
const navigate = useNavigate()

const [user] = useAuthState(auth);

const getStarted = (e) =>{
  e.preventDefault()
    if(!user === true){
      navigate("/signup")
    }else{
      navigate("/menu")
    }
  }

  return(
   <Container
   fluid 
   className={FavouriteFoodStyles.Container}>
   
    <h1
    className={FavouriteFoodStyles.favouriteFoodTitle}>
    Our Favourite Customers Special Dishes
    </h1>
    
 <Row className='mt-5'>
  {
      favouritefoodData.map(item =>(
      <Col key={item.id} lg='4' md='6'>
      <ProductCard item={item}/>
      </Col>
      ))
    }

</Row>

   <Row 
   className={FavouriteFoodStyles.row1}>
   
    <Col 
    className={FavouriteFoodStyles.heroText}>
    
  <h1 
  className={FavouriteFoodStyles.title}>
  Stay Healthy Live Long
  </h1>
  
<p
className={FavouriteFoodStyles.paraText}>
Food is for the body as relaxing is for the mind, when you are healthy you are happy. We want to keep you happy always with our meals.
</p>

<div 
className={FavouriteFoodStyles.btnBox}>

<button 
onClick={getStarted}
className="btn btn-white btn-animated">
Explore More
</button>
</div>
</Col>

  <Col 
   className={FavouriteFoodStyles.col}>
      <img 
      src={chef} 
      className={FavouriteFoodStyles.img} 
      loading="lazy"/>
      </Col>
</Row>
    </Container>
    )
}

export default FavouriteFoodSection