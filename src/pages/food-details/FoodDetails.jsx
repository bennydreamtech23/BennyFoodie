import { useState, useEffect } from "react";
import "./FoodDetails.scss";
import allfoods from "../../components/foodMenu/allfoods";
import { useParams, Link } from "react-router-dom";
import HeaderSection from "../../components/headerSection/HeaderSection";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
const FoodDetails = () => {
  const food =
    "https://res.cloudinary.com/dlst0ec4h/image/upload/v1675289357/pngwing.com_vnmees.png";

  const [tabs, setTabs] = useState("desc");
  const { id } = useParams();
  // const [foodid, setFoodId] = useState({ id });

  const product = allfoods.find((product) => {
    return product.id === Number(id);
  });

  if (!product) {
    //If no product with the given ID is found, render an error message
    return (
      <section className="container-box">
        <HeaderSection title={`Product not found`} />
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
      <HeaderSection title={`Product ${product.id}`} />

      <Container className="py-5">
        <Row>
          <Col lg="2" md="2">
            <div className="product_images">
              <div
                className="img__item"
                //onClick={() => setproduct.image(product.image)}
              >
                <img
                  src={product.image}
                  alt="product images"
                  className="w-100"
                />
              </div>

              <div
                className="img__item"
                //onClick={() => setproduct.image(product.image)}
              >
                <img
                  src={product.image}
                  alt="product images"
                  className="w-100"
                />
              </div>

              <div
                className="img__item"
                //onClick={() => setproduct.image(product.image)}
              >
                <img
                  src={product.image}
                  alt="product images"
                  className="w-100"
                />
              </div>
            </div>
          </Col>

          <Col lg="4" md="4">
            <div className="product__main_img">
              <img src={product.image} alt="main img" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="single_product-content">
              <h2 className="product_title mb-3">{product.name}</h2>
              <p className="product_price">
                {" "}
                Price: <span>{product.price}</span>
              </p>
              <p className="category mb-5">
                Category: <span> {product.category}</span>
              </p>

              <button className="btn">Add to Cart</button>
            </div>
          </Col>

          <Col lg="12">
            <div className="tabs d-flex align-items-center gap-3 py-2">
              <h6 className="tab_active">Description</h6>
              <h6>Review</h6>
            </div>

            <div className="tab_content">
              <p>{product.desc}</p>
            </div>

            <div className="tab_form mb-3">
              <div className="review">
                <p className="user_name mb-0">williams blake</p>
                <p className="user_email mb-0">jhnon01@gmail.user</p>
                <p className="review_text mt-2">i love the food</p>
              </div>

              <div className="review">
                <p className="user_name mb-0">williams blake</p>
                <p className="user_email mb-0">jhnon01@gmail.user</p>
                <p className="review_text mt-2">i love the food</p>
              </div>

              <div className="review">
                <p className="user_name mb-0">williams blake</p>
                <p className="user_email mb-0">jhnon01@gmail.user</p>
                <p className="review_text mt-2">i love the food</p>
              </div>

              <Form className="form">
                <Form.Group className="form_group">
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Enter your Name"
                      className="inputfield"
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="form_group">
                  <InputGroup>
                    <Form.Control
                      type="email"
                      className="inputfield"
                      placeholder="Enter your Email"
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="form_group">
                  <InputGroup>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      type="text"
                      className="inputfield"
                      placeholder="Enter your Message"
                    />
                  </InputGroup>
                </Form.Group>

                <button type="submit" className="btn">
                  submit
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FoodDetails;
