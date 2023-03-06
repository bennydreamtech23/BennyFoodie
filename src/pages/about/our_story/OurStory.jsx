import Styles from './OurStory.module.scss';
import {Container, Row, Col} from "react-bootstrap";

const OurStorySection = () =>{
  const previewImg = 'https://res.cloudinary.com/dlst0ec4h/image/upload/v1673722321/pngwing.com_22_jp2sqx.png'
  
  const chef = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673718971/pngwing.com_zlmc2w.webp"
  return(
    <Container fluid 
    className={Styles.Container}>
   <Row>
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
              <h2 className="product_title mb-3 text-center" style={{color: "rgb(80,200,120)"}}>Who Are We?</h2>
              <p>
              “We ought to be about something beyond moving chicken. We ought to be a piece of our client’s lives and the networks in which we serve.”
</p>
<p className='lh-base'>
Our originator, settled on the choice to close on Sundays in 2022 when he opened his first eatery in Hapeville, Georgia. Having worked seven days in eateries open 24 hours, Robert saw the significance of shutting on Sundays with the goal that he and his representatives could set aside one day to rest and love whether they pick – a training we maintain today.
              </p>
              
              <p className='lh-base'>
          From that point forward, our agriculturists have developed directly close by us, and the fixings we use are as yet our most noteworthy need. Nobody cherishes food more than <span style={{color: "rgb(80,200,120)"}}>Bennyfoodie</span>.    
              </p>
            </div>
          </Col>
          
           <Col lg="2" md="2">
            <div className="product_images">
              <div
                className="img__item"
              >
                <img
                  src={chef}
                  alt="product images"
                  className="w-100"
                />
              </div>
              </div>
              </Col>
</Row>   
    </Container>
    )
}

export default OurStorySection