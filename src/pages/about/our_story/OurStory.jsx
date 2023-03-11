import Styles from './OurStory.module.scss';
import {Container, Row, Col} from "react-bootstrap";

const OurStorySection = () =>{
  const previewImg = 'https://res.cloudinary.com/dlst0ec4h/image/upload/v1673722321/pngwing.com_22_jp2sqx.png'
  
  const chef = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673718971/pngwing.com_zlmc2w.webp"
  return(
    <Container fluid 
    className={Styles.Container}>
   <Row className='d-flex align-items-center justify-content-center'>
    <Col lg="2" md="2">
            <div className="product_images">
              <div
                className="img__item"
              >
                <img
                  src='https://res.cloudinary.com/dlst0ec4h/image/upload/v1673721735/pngwing.com_16_zurgty.webp'
                  alt="product images"
                  className="w-100"
                />
              </div>

              <div
                className="img__item">
                <img
                  src="https://res.cloudinary.com/dlst0ec4h/image/upload/v1673720496/pngwing.com-_8__sxocwn.webp"
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
  
          <Col lg="6" md="6">
            <div className="single_product-content">
              <h2 className="product_title mb-3 text-center">Who Are We?</h2>
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


 <section className='mt-5'> 
 <h1 className={Styles.heading}>
 What our Trademark?
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
   
    </Container>
    )
}

export default OurStorySection