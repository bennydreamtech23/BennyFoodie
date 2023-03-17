import {db} from "../core/auth/firebase";
import {collection, addDoc, query, getDocs, where } from "firebase/firestore"

import { useState, useEffect } from "react";
import "./FoodDetails.scss";
import allfoods from "../../components/data/allFoodData";
import { useParams, Link } from "react-router-dom";
import HeaderSection from "../../components/headerSection/HeaderSection";
import { Container,
Row, 
Col,
Form, 
InputGroup,
Toast,
Spinner, 
  Button
} from "react-bootstrap";
import ProductCard from '../../components/productCard/ProductCard'

//react-redux
import {useDispatch} from 'react-redux'
import {cartActions} from "../../store/shopping-cart/cartSlice"

const FoodDetails = () => {
const dispatch = useDispatch()
//data to toggle between desc and review
  const [tabs, setTabs] = useState("desc");
  
  //form validation
  const[isLoading, setIsLoading] = useState(false)
  const [formValues, setFormValues] = useState({})

  const [touched, setTouched] = useState({})

  //error
  const [formError, setFormError] = useState({})

  //toast usestate component
  const [showToast, setShowToast] = useState(false)
  const [errorType, setErrorType] = useState('')
  const [messageType, setMessageType] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })

    setTouched((prevState) => ({
      ...prevState,
      [e.target.name]: true,
    }))
  }


  const validate = (values) => {
    const errors = {}
    //const regex =
    //  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (!values.Username) {
      errors.Username = 'Name is required'
    }
    
    if (!values.mail) {
      errors.mail = 'Email is required'
    } //else if (!regex.test(values.email)) {
      //errors.mail = 'This is not a valid email'
  //  }
    
    if (!values.message) {
      errors.message = 'Please tell us what you think'
    }
    return errors
  }

  useEffect(() => {
    validate(formValues)
    //console.log(formError)
    setFormError(validate(formValues))
    // if (Object.keys(formError).length === 0) {
    // }
  }, [formValues, touched])
  
  
  //data for review form
  const {Username, mail, message} = formValues;
  
  //data to display the review
  const [reviews, setReviews] = useState([])
        
  const submittedHandler = async (e) => {
    e.preventDefault();
         setIsLoading(true)
         console.log(formValues)
         
      if (Object.keys(formError).length > 0) {
      setTouched({
        Username: true,
        message: true,
        mail: true,
      })
      setIsLoading(false)
    }
    
    if (Object.keys(formError).length === 0) {
      setTouched({
        Username: false,
        message: false,
        mail: false,
      })   
        // Add data to the store
   const docRef = await addDoc (collection(db, "reviews"),{
            Username: Username,
            mail: mail,
           message: message
        })
        .then((docRef) => {
            console.log("Data Successfully Submitted");
            setErrorType('success')
            setMessageType('Review receive success')
            setShowToast(true)
            setFormValues({})
            setFormValues({message: ""})
            setFormError({})
            e.target.reset()
            setIsLoading(false)
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
           setErrorType('danger')
            setMessageType("Opps Review Failed")
            setShowToast(true)
            setIsLoading(false)
        });
        setIsLoading(false)
    }
  }
  
  //fetch post
  const fetchPost = async () => {
        await getDocs(collection(db, "reviews"))
            .then((querySnapshot)=>{              
              const newData = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id }));
                setReviews(newData);                
               console.log(reviews, newData);
         })
    }
   
 useEffect(() =>{
    fetchPost()
  }, []) 

  const { name } = useParams();
  // const [foodid, setFoodId] = useState({ id });

  const product = allfoods.find((product) => {
    return product.name === name;
  });

const {
id,
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
      <HeaderSection title={name} className="Title"/>

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
             {
            reviews.map((data, i) => (
            <Frame Username={data.Username}
                   mail={data.mail}
                   message={data.message}
                   key={i}/>
            ))
        }
</div>
              <Form className="form" onSubmit={submittedHandler}>
                <Form.Group className="form_group">
                  <InputGroup>
                    <Form.Control
                    name="Username"
                      type="text"
                      placeholder="Enter your Name"
                      className="inputfield"
                      value={formValues.Username}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  
              <div className="errorMsg">
                {touched.Username && formError.Username}
              </div>
                </Form.Group>

                <Form.Group className="form_group">
                  <InputGroup>
                    <Form.Control
                    name="mail"
                      type="email"
                      className="inputfield"
                      placeholder="Enter your Email"
                       value={formValues.mail}
                      onChange={handleChange}
                    />
                  </InputGroup>
                
                 <div className="errorMsg">
                {touched.mail && formError.mail}
              </div>
                </Form.Group>

                <Form.Group className="form_group">
                  <InputGroup>
                    <Form.Control
                    name="message"
                      as="textarea"
                      rows={4}
                      type="text"
                      className="inputfield"
                      placeholder="Write your Message"
                        value={formValues.message}
                      onChange={handleChange}/>
                  </InputGroup>
              
              <div className="errorMsg">
                {touched.message && formError.message}
              </div>
                </Form.Group>
<div>
          {isLoading ? (
           <Button 
           variant="success"
           disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>     
          ) : (
     <Button variant="success" type='submit'>
       Send
      </Button>
          )}
          </div>
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
            <ProductCard item={item}
            className="card"/>
            </Col>
            ))
          }
          </Row>
        </Row>
        
        

      {showToast ? (
        <>
          <div className="ToastContainer"/>
          <div className="centered">
            <Toast
              bg={errorType}
              onClose={() => {
                setShowToast(!showToast)
              }}
              className="toast"
            >
              <Toast.Header className='mt-3'>
                <img
                  src='holder.js/20x20?text=%20'
                  className='rounded me-2'
                  alt=''
                />
                <strong className='me-auto'>BennyFoodie</strong>
              </Toast.Header>
              <Toast.Body className='text-dark'>{messageType}</Toast.Body>
            </Toast>
          </div>
        </>
      ) : (
        ''
      )}
            
            
      </Container>
</section>
  );
};

// Define how each display entry will be structured
const Frame = ({Username , mail , message}) => {
    console.log(useState + " " + mail + " " + message);
    return (
            <div className="review w-100">
                 
<p className="user_name mb-0">Name: {Username}</p>
  
                 
<p className="user_email mb-0">Email : {mail}</p>
 
                 
<p className="review_text mt-2">message : {message}</p>
  
            </div>
    );
}



export default FoodDetails;
