import Styles from './OurStory.module.scss';
import {Container, Row, Col, Card} from "react-bootstrap";

const OurStorySection = () =>{
  const previewImg = 'https://res.cloudinary.com/dlst0ec4h/image/upload/v1673722321/pngwing.com_22_jp2sqx.png'
  
  const chef = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673718971/pngwing.com_zlmc2w.webp"
  return(
    <>
    <Container 
    className={Styles.Container}>
   <Row>
   
          <Col lg="12" md="12">
            <div>
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
</Container>

 <section className={Styles.container}> 
 <h1 className={Styles.heading} style={{color:'white'}}>
 our Trademark
 </h1>
<Row className={` ${Styles.div_transform} gap-5 mt-5`}>

{/*card 1*/}
     <Col xl='3' lg='5' md='5' sm='5'
     className={`${Styles.card} ${Styles.card1}`}>
  
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
      
     <Col xl='3' lg='5' md='5' sm='5'
     className={`${Styles.card} ${Styles.card2}`}>
  
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
     <Col xl='3' lg='5' md='5' sm='5'
     className={`${Styles.card} ${Styles.card3}`}>
    
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

   <section className={Styles.ContainerBox}> 
 <h1 className={Styles.heading}>
 Meet Our Team
 </h1>

<Row className='gap-5 mt-5'>

{/*card 1*/}
     <Col>
     
<Card className={Styles.cardTool}>
<div className={Styles.top_content}>
<Card.Img src='https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
loading='lazy' 
alt='team member'
className={Styles.img}/>
</div>

<div className={Styles.mid_content}>
<div className={Styles.short_detail}>
        <Card.Title
        className={Styles.name}>
C.E.O
        </Card.Title>
        </div>
        </div>
       </Card>
    </Col>

      {/* card 2*/}
      
     <Col>
 <Card className={Styles.cardTool}>
 <div className={Styles.top_content}>
<Card.Img src='https://images.unsplash.com/photo-1555084415-b708df0fef3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80' 
loading='lazy'
alt='team member'
className={Styles.img}/>
 </div>
 
 <div className={Styles.mid_content}>
<div className={Styles.short_detail}>
        <Card.Title className={Styles.name}>
Managing Director
        </Card.Title>
        </div>
        </div>
       </Card>
    </Col>

      {/*card 3*/}
     <Col>
     
    <Card className={Styles.cardTool}>
    <div className={Styles.top_content}>
<Card.Img src='https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' 
loading='lazy'
alt='team member'
className={Styles.img}/>
</div>

<div className={Styles.mid_content}>
<div className={Styles.short_detail}>
        <Card.Title
       className={Styles.name}>
H.R Head
        </Card.Title>
      </div>
     </div>
       </Card>
    </Col>
    
          {/*card 4*/}
     <Col>
     
    <Card className={Styles.cardTool}>
    <div className={Styles.top_content}>
<Card.Img src='https://img.freepik.com/free-photo/young-woman-holding-tablet-work_23-2149116576.jpg?w=900&t=st=1679001653~exp=1679002253~hmac=563d45d9da3c6c5ffd2060d9562f294b9333a59db609e1de5eb445a802a9fb57' 
loading='lazy'
alt='team member'
className={Styles.img}/>
</div>

<div className={Styles.mid_content}>
<div className={Styles.short_detail}>
        <Card.Title
       className={Styles.name}>
Admin
        </Card.Title>
      </div>
     </div>
       </Card>
    </Col>
    
          {/*card 5*/}
     <Col>
     
    <Card className={Styles.cardTool}>
    <div className={Styles.top_content}>
<Card.Img src='https://img.freepik.com/free-photo/customer-care-webpage-interface-word_53876-134070.jpg?w=740&t=st=1679001951~exp=1679002551~hmac=baf745b86a682d1f2c2974956aeaefdb9b08f81f17cacf3d266f9b216e9c728d' 
loading='lazy'
alt='team member'
className={Styles.img}/>
</div>

<div className={Styles.mid_content}>
<div className={Styles.short_detail}>
        <Card.Title
       className={Styles.name}>
Customer Care 
        </Card.Title>
      </div>
     </div>
       </Card>
    </Col>
    
        {/*card 6*/}
     <Col>
     
    <Card className={Styles.cardTool}>
    <div className={Styles.top_content}>
<Card.Img src='https://img.freepik.com/free-photo/confident-young-female-cook-wearing-chef-uniform-holding-frying-pan-crossing-hands-isolated-white-wall_141793-120213.jpg?w=900&t=st=1678482605~exp=1678483205~hmac=42a5ee9bc531f8b89fdaa424f65a29ba4a1f1e439fc696662e0284867c4bbb80' 
loading='lazy'
alt='team member'
className={Styles.img}/>
</div>

<div className={Styles.mid_content}>
<div className={Styles.short_detail}>
        <Card.Title
       className={Styles.name}>
Head Chef
        </Card.Title>
      </div>
     </div>
       </Card>
    </Col>  
    
</Row>
</section>
</>
    )
}

export default OurStorySection