import Styles from './OurStory.module.scss';
import {Container, Row, Col, Card} from "react-bootstrap";

const OurStorySection = () =>{
  const previewImg = 'https://res.cloudinary.com/dlst0ec4h/image/upload/v1673722321/pngwing.com_22_jp2sqx.png'
  
  const chef = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673718971/pngwing.com_zlmc2w.webp"
  return(
    <Container 
    className={Styles.Container}>
   <Row>
    <Col lg="6" md="2">
            <div className="product_images">
              <div
                className="img__item"
              >
                <img
                  src='https://res.cloudinary.com/dlst0ec4h/image/upload/v1673721735/pngwing.com_16_zurgty.webp'
                  alt="product images"
                  className="w-50"
                />
              </div>

              <div
                className="img__item">
                <img
                  src="https://res.cloudinary.com/dlst0ec4h/image/upload/v1673720496/pngwing.com-_8__sxocwn.webp"
                  alt="product images"
                  className="w-50"
                />
              </div>

              <div
                className="img__item" >
                <img
                  src={previewImg}
                  alt="product images"
                  className="w-50"
                />
              </div>
            </div>
          </Col>
  
          <Col lg="6" md="6">
            <div className="single_product-content">
              <h2 className={Styles.title}>Who Are We?</h2>
              <p className={Styles.text}>
              “We ought to be about something beyond moving chicken. We ought to be a piece of our client’s lives and the networks in which we serve.”
</p>
<p className={Styles.smalltext}>
Our originator, settled on the choice to close on Sundays in 2022 when he opened his first eatery in Hapeville, Georgia. Having worked seven days in eateries open 24 hours, Robert saw the significance of shutting on Sundays with the goal that he and his representatives could set aside one day to rest and love whether they pick – a training we maintain today.
              </p>
              
              <p className={Styles.smalltext}>
          From that point forward, our agriculturists have developed directly close by us, and the fixings we use are as yet our most noteworthy need. Nobody cherishes food more than <span style={{color: "rgb(80,200,120)"}}>Bennyfoodie</span>.    
              </p>
            </div>
          </Col>
</Row>  

 <section className='mt-5 mb-5'> 
 <h1 className={Styles.heading}>
 our Trademark
 </h1>

<Row className='gap-5 mt-5'>
{/*card 1*/}
     <Col lg='4' md='6'
     className={Styles.card}>

        <h3
        className={Styles.smallTitle}>
       Mission
        </h3>

        <p
        className={Styles.text}>
       Reducing the death rate by providing an affordable and easy to get meal. The company is an open company, meaning they receive feedback from clients.
       </p>
    </Col>

      {/* card 2*/}
      
     <Col lg='4' md='6'
     className={Styles.card}>
  
        <h3
        className={Styles.smallTitle}>
Vision
        </h3>
        
        <p
        className={Styles.text}>
       We plan to help reduce the gap rate between chefs and customers, by providing a getway for chefs to sell their food when approved by the company.
         
        </p>
    </Col>

      {/*card 3*/}
     <Col lg='4' md='6'
     className={Styles.card}>
    
        <h3 
        className={Styles.smallTitle}>
      Statement 
      </h3>
        
        <p
        className={Styles.text}>
         We believe that quality food, should be affordable and people craving, should be looked upon.
         </p>
    </Col>
</Row>
</section>

   <section className='pt-5 mt-5'> 
 <h1 className={Styles.heading}>
 Meet Our Team
 </h1>

<Row className='gap-5 mt-5'>
{/*card 1*/}
     <Col lg='4' md='6'
     className={Styles.card}>

<Card>
<Card.Img src='https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' loading='lazy' alt='team member'/>

        <Card.Title
        className='fw-bold pt-5'>

C.E.O
        </Card.Title>
       </Card>
    </Col>

      {/* card 2*/}
      
     <Col lg='4' md='6'
     className={Styles.card}>
 <Card>
<Card.Img src='https://images.unsplash.com/photo-1555084415-b708df0fef3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80' alt='team member'/>

        <Card.Title className='fw-bold pt-5'>
Managing Director
        </Card.Title>
       </Card>
    </Col>

      {/*card 3*/}
     <Col lg='4' md='6'
     className={Styles.card}>
     
    <Card>
<Card.Img src='https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' alt='team member'/>

        <Card.Title
       className='fw-bold pt-5'>
H.R Head
        </Card.Title>
       </Card>
     
    </Col>
</Row>
</section>
    </Container>
    )
}

export default OurStorySection