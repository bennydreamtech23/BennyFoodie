import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./FoodDetails.scss";
//all food dummy data
import allFoodData from "../../components/data/allFoodData";
//components from folder and react
import HeaderSection from "../../components/headerSection/HeaderSection";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import ProductCard from '../../components/productCard/ProductCard'
import {useDispatch} from 'react-redux'
import {cartActions} from "../../store/shopping-cart/cartSlice"

const FoodDetails = () => {
const dispatch = useDispatch()
//data for desc section
  const [tabs, setTabs] = useState("desc");
  
  //data for review form
  const [enteredName, setEnteredName] = useState('')
  const[enteredMail, setEnteredMail] =  useState('')
  const [enteredMessage, SetEnteredMessage] = useState('')
  const [submittedName, setSubmittedName] = useState(null);
  const [submittedEmail, setSubmittedEmail] = useState(null);
  const [submittedMsg, setSubmittedMsg] = useState(null);
  
  const { id } = useParams();
  
  const food = allFoodData.find((food) => {
    return food.id === Number(id);
  });

//food data fetching
const [previewImg,setPreviewImg] = useState(food.image)

const{name,price,category,desc,image} = food;

const relatedFood = allFoodData.filter((item) => food.category === item.category )

 const  addToCart = () =>{
    dispatch(cartActions.addItem({
      id,
      name,
      image,
      price
    }))
  }
  
useEffect(()=>{
setPreviewImg(food.image)
},[food.image])

useEffect(()=>{
window.scrollTo(0,0)
},[food])

const submittedHandler = (e) =>{
  e.preventDefault()
  setSubmittedName(enteredName)
  setSubmittedEmail(enteredMail)
  setSubmittedMsg(enteredMessage)
  setEnteredName('')
  setEnteredMail('')
  SetEnteredMessage('')
}
  if (!food){
    //If no product with the given ID is found, render an error message
    return (
      <section className="container-box">
        <HeaderSection title={`Food not found`} />
        <Container className="py-5">
          <Row>
            <Link className="text-center my-4" to="/menu">
              Back to food menu
            </Link>
          </Row>
        </Container>
        ;
      </section>
    );
  }

  //const [product.image, setproduct.image] = useState(product.image);

  return (
    <section className="container-box">
      <HeaderSection title= {name} />

      <Container className="py-5">
        <Row>
          <Col lg="2" md="2">
            <div className="product_images">
              <div
                className="img__item">
                <img
                  src={previewImg}
                  alt="product images"
                  className="w-100"
                />
              </div>
           <div
                className="img__item mt-3 mb-3">
                <img
                  src={previewImg}
                  alt="product images"
                  className="w-100"
                />
              </div>
           <div
                className="img__item">
                <img
                  src={previewImg}
                  alt="product images"
                  className="w-100"
                />
           </div>
            </div>
          </Col>
          
          <Col lg="4" md="4">
            <div className="product__main_img">
              <img src={previewImg} alt="main img" className="w-100" />
            </div>
          </Col>
          
          <Col lg="6" md="6">
            <div className="single_product-content">
              <h2 className="product_title mb-3">
              {name}
              </h2>
              <p className="product_price">
                {" "}
                Price: <span>£{price}</span>
              </p>
              <p className="category mb-5">
                Category: <span> {category}</span>
              </p>

              <button className="btn" onClick={addToCart}>
              Add to Cart
              </button>
            </div>
          </Col>

          <Col lg="12">
            <div className="tabs d-flex align-items-center gap-3 py-2">
              <h6 className={`${tabs === 'desc' ? "tab_active" : ''}`}
              onClick={()=>setTabs('desc')}>
              Description
              </h6>
              <h6 onClick={()=>setTabs('rev')}
               className={`${tabs === 'rev' ? "tab_active" : ''}`}>
              Review
              </h6>
            </div>
{
  tabs === 'desc' ? <div className="tab_content">
          <p>{desc}</p>
            </div> :
            <div className="tab_form mb-3 pt-5">
            <div>
              <div className="review">
                <p className="user_name mb-0">
                {submittedName}</p>
                <p className="user_email mb-0">
                {submittedEmail}
                </p>
                <p className="review_text mt-2">
                {submittedMsg}
                </p>
              </div>
</div>
              <Form className="form" onSubmit={submittedHandler}>
                <Form.Group className="form_group">
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Enter your Name"
                      className="inputfield"
                      value={enteredName}
                      onChange={(e)=> setEnteredName(e.target.value)}
                    required/>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="form_group">
                  <InputGroup>
                    <Form.Control
                      type="email"
                      className="inputfield"
                      placeholder="Enter your Email"
                       value={enteredMail}
                      onChange={(e)=> setEnteredMail(e.target.value)}
                    required/>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="form_group">
                  <InputGroup>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      type="text"
                      className="inputfield"
                      placeholder="Write your Message"
                        value={enteredMessage}
                      onChange={(e)=> SetEnteredMessage(e.target.value)}
                    required/>
                  </InputGroup>
                </Form.Group>

                <button type="submit" className="btn">
                  submit
                </button>
              </Form>
            </div>
}
          </Col>
          
          <Col lg='12' className='my-4'>
          <h2 className='related_product_title'>
          You might also like
          </h2>
        </Col>
          {
            relatedFood.map(item =>(
            <Col  key={item.id}>
            <ProductCard item={item}/>
            </Col>
            ))
          }
     
        </Row>
      </Container>
    </section>
  );
};

export default FoodDetails;
