
import { useState, useEffect } from "react";
import "./FoodDetails.scss";
import allfoods from "../../components/data/allFoodData";
import { useParams, Link } from "react-router-dom";
import HeaderSection from "../../components/headerSection/HeaderSection";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import ProductCard from '../../components/productCard/ProductCard'
import {useDispatch} from 'react-redux'
import {cartActions} from "../../store/shopping-cart/cartSlice"

const FoodDetails = () => {
const dispatch = useDispatch()
//data to toggle between desc and review
  const [tabs, setTabs] = useState("desc");
  //data for review form
  const [enteredName, setEnteredName] = useState('')
  const[enteredMail, setEnteredMail] =  useState('')
  const [enteredMessage, SetEnteredMessage] = useState('')
  const [submittedName, setSubmittedName] = useState(localStorage.getItem('submittedName') ? localStorage.getItem("submittedName") : "Benny");
  
  const [submittedEmail, setSubmittedEmail] = useState(localStorage.getItem('submittedEmail') ? localStorage.getItem("submittedEmail") : "bennyfoodie@gmail.com");
  
  const [submittedMsg, setSubmittedMsg] = useState(localStorage.getItem('submittedMsg') ? localStorage.getItem("submittedMsg") : "I love the hamburger");
  
  const { name } = useParams();
  // const [foodid, setFoodId] = useState({ id });

  const product = allfoods.find((product) => {
    return product.name === name;
  });

const {
price,
category,
desc,image} = product ?? {};

const [previewImg,setPreviewImg] =useState(product?.image)

const relatedFood = allfoods.filter((item) => product?.category  === item.category)

 const  addToCart = () =>{
    dispatch(cartActions.addItem({
      id,
      name,
      image,
      price
    }))
  }
  
useEffect(()=>{
setPreviewImg(product?.image)
},[product?.image])

useEffect(()=>{
window.scrollTo(0,0)
},[product])

//local storage


const submittedHandler = (e) =>{
  e.preventDefault()
  setSubmittedName(localStorage.setItem('submittedName', enteredName))
  setSubmittedEmail(localStorage.setItem('submittedEmail', enteredMail))
  setSubmittedMsg(localStorage.setItem('submittedMsg', enteredMessage))
  setEnteredName('')
  setEnteredMail('')
  SetEnteredMessage('')
}


  if (!product) {
    //If no product with the given ID is found, render an error message
    return (
      <section className="container-box">
        <HeaderSection title={`Product not found`} />
        <Container className="py-5">
          <Row>
            <Link className="text-center my-4 text-decoration-none text-success fw-bold h1" to="/menu">
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
      <HeaderSection title={name} />

      <Container fluid className="py-5">
        <Row>
          <Col lg="2" md="2">
            <div className="product_images">
              <div
                className="img__item"
              >
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

              <div
                className="img__item" >
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
              <h2 className="product_title mb-3">{name}</h2>
              <p className="product_price">
                {" "}
                Price: <span>€{price}</span>
              </p>
              <p className="category">
                Category: <span> {category}</span>
              </p>
<div className='mb-5'>
              <button className='addtocartbtn'
              onClick={addToCart}>Add to Cart</button>
            </div>
            </div>
          </Col>

       <Col lg="12" className='px-5'>
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
          <p className='subtext'>{desc}</p>
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
                  send
                </button>
              </Form>
            </div>
}
          </Col>
          
          <Col lg='12' className='my-4'>
          <h2 className='related_product_title text-center'>
          You might also like
          </h2>
        </Col>
   
        <Row className='gap-5 d-flex align-items-center justify-content-center mx-auto'>
                  {
            relatedFood.map(item =>(
            <Col  key={item.id} 
            xl='3' 
            lg='5' md='5' sm='5'>
            <ProductCard item={item}/>
            </Col>
            ))
          }
          </Row>
        </Row>
      </Container>
</section>
  );
};

export default FoodDetails;
