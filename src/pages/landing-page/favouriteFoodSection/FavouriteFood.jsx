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
Customer's Regular Menu
</h1>
    
 <Row className='gap-5 mt-5 d-flex align-items-center justify-content-center'>
  {
      favouritefoodData.map(item =>(
      <Col key={item.id} xl='3'lg='5' md='5'>
      <ProductCard item={item}/>
      </Col>
      ))
    }

</Row>
</Container>
    )
}

export default FavouriteFoodSection