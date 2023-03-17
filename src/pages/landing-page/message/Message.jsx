import Styles from "./Message.module.scss"
import {Row, Col} from "react-bootstrap"
const Message = () =>{
  return(
    <section
    className={Styles.Container}>
  <div
  className={Styles.content}>
  <h1 
  className={Styles.title}>
  Stay Healthy Live Long
  </h1>
  
  <p className={Styles.paraText}>
  Food is for the body as relaxing is for the mind, when you are healthy you are happy. <br/>
  We want to keep you happy always with our meals.
  </p>
  
  <h1 className={Styles.smalltitle}>
  Our Top-notch Chefs
  </h1>
  <hr className={Styles.ruler}/>
  
  <Row className='gap-5 mt-5 d-flex align-items-center justify-content-center'>
  <Col xl='3' lg='4' md='4'>
  <img src='https://img.freepik.com/free-photo/confident-young-female-cook-wearing-chef-uniform-holding-frying-pan-crossing-hands-isolated-white-wall_141793-120213.jpg?w=900&t=st=1678482605~exp=1678483205~hmac=42a5ee9bc531f8b89fdaa424f65a29ba4a1f1e439fc696662e0284867c4bbb80' 
  alt="chefs"
  className='img-fluid border border-5 rounded-circle '
  loading = "lazy"/>
  </Col>
  
   <Col lg='3' md='3' sm='3'>
  <img src='https://img.freepik.com/free-photo/portrait-happy-male-chef-dressed-uniform_171337-5354.jpg?w=900&t=st=1678482737~exp=1678483337~hmac=935405533bfb694fdfe0070b07aeaf4ec2c76a5e939fdcc3ea018ec8ad15b0b9' 
  alt="chefs"
  className='img-fluid border border-5 rounded-circle '
  loading = "lazy"/>
  </Col>
  
   <Col lg='3' md='3' sm='3'>
  <img src='https://img.freepik.com/free-photo/female-chef-seasoning-salad_23-2148763185.jpg?w=900&t=st=1678482807~exp=1678483407~hmac=3166837dda0919ede2572e7e8eb93f88d5fafa7556494ab2c39ebdd1e617e206' 
  alt="chefs"
  className='img-fluid border  border-5 rounded-circle '
  loading = "lazy"/>
  </Col>
  </Row>
  </div>
  </section>
  )
}

export default Message