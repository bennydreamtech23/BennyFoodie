import {Container, Row, Col} from 'react-bootstrap';
import ProjectStyles from "./Work.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Work = () =>{
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  
const project1 = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673256778/image1_wwpm0v.webp";
const project2 = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673256779/image11_gqt6mf.webp";
const project3 = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673257432/image2_uc5i8a.webp";
const project4 = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673256100/image3_yiascy.webp";
const project5 = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673256520/image7_zjwpuw.webp";
const project6 = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673257666/image6_cmr2jy.webp";
const project7 = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673256099/image8_rhlr7z.webp";
const project8 = "https://res.cloudinary.com/dlst0ec4h/image/upload/v1673258654/image10_vdurso.webp";



  return(
    <Container fluid className={ProjectStyles.Container}>
    <h1 className={ProjectStyles.aboutTitle}>PROJECTS</h1>
  <div className={ProjectStyles.smallruler}></div>
    <p className={ProjectStyles.subHeading}>
    Here you will find some of the personal and clients projects that I have created with each project containing its own case study</p>
    
    <Row className="d-flex flex-row-reverse justify-content-between mt-5">
<Col className="col-md d-flex justify-content-center align-items-end flex-column"
data-aos="fade-left"
     data-aos-offset="300"
     data-aos-duration="1500">
      <img src={project1} alt="contact card" className={ProjectStyles.heroimg} loading="lazy"/>
      </Col>
      
    <Col className={ProjectStyles.textSection}>
    <h2 className={ProjectStyles.subTitle}>Benny Blog Food Recipe Website</h2>
<p className={ProjectStyles.subtext}> A food blog website showing various food recipes and ingredients and preparation process in order to make your best dishes.
</p>
<div className={ProjectStyles.btnBox}>
<a  href="https://github.com/bennydreamtech23/odin-project" 
target="_blank"  
rel="noreferrer" 
className="btn">Repo Link</a>
<a href="https://bennydreamtech23.github.io/odin-project/" 
target="_blank"  
rel="noreferrer"
className="secondarybtn">Live Link</a>
</div>
</Col>
</Row>

<Row className="d-flex flex-row-reverse justify-content-between mt-5">
<Col className="col-md d-flex justify-content-center align-items-end flex-column" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-duration="1500">
      <img src={project2} alt="contact card" className={ProjectStyles.heroimg} loading="lazy"/>
      </Col>
    <Col className={ProjectStyles.textSection}>
    <h2 className={ProjectStyles.subTitle}>Metabnb Website</h2>
<p className={ProjectStyles.subtext}> Web3 NFT's project website, wheere web3 enthusiast can purchase NFT's and also add their favourite ones, in order for other web3 enthusiast to purchase it.
</p>
<div className={ProjectStyles.btnBox}>
<a href="https://github.com/bennydreamtech23/meta-bnb-design" 
target="_blank"  
rel="noreferrer" className="btn">Repo Link</a>

<a href="https://shimmering-zuccutto-617791.netlify.app/" 
target="_blank"  
rel="noreferrer"
className="secondarybtn">Live Link</a>
</div>
</Col>
</Row>

<Row className="d-flex flex-row-reverse justify-content-between mt-5">
<Col className="col-md d-flex justify-content-center align-items-end flex-column"
data-aos="fade-left"
     data-aos-offset="300"
     data-aos-duration="1500">
      <img src={project3} alt="contact card" className={ProjectStyles.heroimg} loading="lazy"/>
      </Col>
      
    <Col className={ProjectStyles.textSection}>
    <h2 className={ProjectStyles.subTitle}>Prophecy Website</h2>
<p className={ProjectStyles.subtext}> This Website shows prophecy from different Men of God at different time of the year.
</p>
<div className={ProjectStyles.btnBox}>
<a href="https://github.com/bennydreamtech23/hng-work" 
target="_blank"  
rel="noreferrer"className="btn">Repo Link</a>
<a href="https://prophecywebsite.netlify.app/" 
target="_blank"  
rel="noreferrer" className="secondarybtn">Live Link</a>
</div>
</Col>
</Row>

<Row className="d-flex flex-row-reverse justify-content-between mt-5">
<Col className="col-md d-flex justify-content-center align-items-end flex-column"  
data-aos="fade-right"
     data-aos-offset="300"
     data-aos-duration="1500">
      <img src={project5} alt="contact card" className={ProjectStyles.heroimg} loading="lazy"/>
      </Col>
    <Col className={ProjectStyles.textSection}>
    <h2 className={ProjectStyles.subTitle}>Gomycode Kid Website</h2>
<p className={ProjectStyles.subtext}> Every child deserve the right to learn and know current technology. This website tries to solve the issue of kids learning to code and try to make code learning fun and enjoyable for all ages.
</p>
<div className={ProjectStyles.btnBox}>
 <a href="https://github.com/bennydreamtech23/gomycode-kids" 
target="_blank"  
rel="noreferrer" className="btn">Repo Link</a>

<a href="https://bennydreamtech23.github.io/gomycode-kids/" 
target="_blank"  
rel="noreferrer" className="secondarybtn">Live Link</a>
</div>
</Col>
</Row>

<Row className="d-flex flex-row-reverse justify-content-between mt-5">
<Col className="col-md d-flex justify-content-center align-items-end flex-column"
 data-aos="fade-left"
     data-aos-offset="300"
     data-aos-duration="1500">
      <img src={project4} alt="contact card" className={ProjectStyles.heroimg} loading="lazy"/>
      </Col>
      
    <Col className={ProjectStyles.textSection}>
    <h2 className={ProjectStyles.subTitle}>Allout Store Website</h2>
<p className={ProjectStyles.subtext}> An Ecommerce Website that sales all kind of products and have various categories. This website is built from refernce from JUMIA, EBAY, ALIEXPRESS etc and after checking out all the necessary things needed in an ecommerce store.
</p>
<div className={ProjectStyles.btnBox}>
<a href="https://github.com/bennydreamtech23/allout-store" 
target="_blank"  
rel="noreferrer" className="btn">Repo Link</a>
<a href="https://bennydreamtech23.github.io/allout-store/" 
target="_blank"  
rel="noreferrer" className="secondarybtn">Live Link</a>
</div>
</Col>
</Row>

<Row className="d-flex flex-row-reverse justify-content-between mt-5">
<Col className="col-md d-flex justify-content-center align-items-end flex-column"  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-duration="1500">
      <img src={project8} alt="contact card" className={ProjectStyles.heroimg} loading="lazy"/>
      </Col>
    <Col className={ProjectStyles.textSection}>
    <h2 className={ProjectStyles.subTitle}>Random Quote Generator</h2>
<p className={ProjectStyles.subtext}> 
This app create random quotes, that had been quoted by different people, showing the quote and the author, the background changes as the quote changes.
</p>
<div className={ProjectStyles.btnBox}>
 <a href="https://github.com/bennydreamtech23/quote-machine" 
target="_blank"  
rel="noreferrer" className="btn">Repo Link</a>
 <a href="https://bennydreamtech23.github.io/quote-machine/" 
target="_blank"  
rel="noreferrer" className="secondarybtn">Live Link</a>
</div>
</Col>
</Row>

<Row className="d-flex flex-row-reverse justify-content-between mt-5">
<Col className="col-md d-flex justify-content-center align-items-end flex-column"  
data-aos="fade-left"
     data-aos-offset="300"
     data-aos-duration="1500">
      <img src={project6} alt="contact card" className={ProjectStyles.heroimg} loading="lazy"/>
      </Col>
      
    <Col className={ProjectStyles.textSection}>
    <h2 className={ProjectStyles.subTitle}>ACCESS365 CCTV WEBSITE</h2>
<p className={ProjectStyles.subtext}> Safety and prrotection of live and  property is very important, This is a CCtv website buit to generate audience and market the company goal and objective of providing security with their various services such as Alarm System, CCTV Installation etc
</p>
<div className={ProjectStyles.btnBox}>
 <a href="https://github.com/bennydreamtech23/Access365" 
target="_blank"  
rel="noreferrer" className="btn">Repo Link</a>
 <a href="https://bennydreamtech23.github.io/Access365/" 
target="_blank"  
rel="noreferrer" className="secondarybtn">Live Link</a>
</div>
</Col>
</Row>

<Row className="d-flex flex-row-reverse justify-content-between mt-5">
<Col className="col-md d-flex justify-content-center align-items-end flex-column"  
data-aos="fade-right"
     data-aos-offset="300"
     data-aos-duration="1500">
      <img src={project7} alt="contact card" className={ProjectStyles.heroimg} loading="lazy"/>
      </Col>
    <Col className={ProjectStyles.textSection}>
    <h2 className={ProjectStyles.subTitle}>Ultimatium Arena Website</h2>
<p className={ProjectStyles.subtext}>
Every Developers along the line wanted a challenge to test what they know and help improve what they are learning, at Ultimatium Arena a stack challenge website, where user after login can take challenge based on their slack and level in the stack.
</p>
<div className={ProjectStyles.btnBox}>
<a href="https://github.com/bennydreamtech23/quiz-app" 
target="_blank"  
rel="noreferrer" className="btn">Repo Link</a>
<a href="https://ultimatiumchallengeapp.netlify.app/" 
target="_blank"  
rel="noreferrer" className="secondarybtn">Live Link</a>
</div>
</Col>
</Row>
    </Container>
    
    )
}

export default Work