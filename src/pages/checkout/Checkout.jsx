import {
  query,
  collection,
  where,
  doc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../core/auth/firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.scss";
//container from bootstrap
import {
  Container,
  Row,
  Col,
  Form,
  Toast,
  Spinner,
  Button,
  InputGroup,
} from "react-bootstrap";
import HeaderSection from "../../components/headerSection/HeaderSection";
//react-redux
import { useSelector } from "react-redux";
import { useAuthValue } from "../core/auth/AuthContext";

//ICONS
import {
  MdMail,
  MdLocationOn,
  MdOutlinePhoneLocked,
  MdErrorOutline,
  MdPersonOutline,
} from "react-icons/md";

const Checkout = () => {
  //const [user] = useAuthState(auth)
  const { userData } = useAuthValue();
  //data for shipping address entry
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    full_name: "",
    phone_number: "",
    email: "",
    shipping_email: "",
    country: "",
    city: "",
    postal_code: "",
  });

  const [touched, setTouched] = useState({
    full_name: userData.name ? true : false,
    phone_number: userData.phone_number ? true : false,
    email: userData.email ? true : false,
    shipping_email: userData.shipping_email ? true : false,
    country: userData.country ? true : false,
    city: userData.city ? true : false,
    postal_code: userData.postal_code ? true : false,
  });

  //error
  const [formError, setFormError] = useState({});

  //toast usestate component
  const [showToast, setShowToast] = useState(false);
  const [errorType, setErrorType] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    setTouched((prevState) => ({
      ...prevState,
      [e.target.name]: true,
    }));
  };

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!values.name) {
      errors.name = "Full Name is required";
    }

    if (!values.phone_number) {
      errors.phone_number = "Phone Number is required";
    }

    if (!values.country) {
      errors.country = "Enter your Country of Residence";
    }

    if (!values.city) {
      errors.city = "Enter your city of Residence";
    }

    if (!values.postal_code) {
      errors.postal_code = "Enter your Postal Code";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }

    if (!values.shipping_email) {
      errors.shipping_email = "Shipping Email is required";
    } else if (!regex.test(values.shipping_email)) {
      errors.shipping_email = "This is not a valid email";
    }

    return errors;
  };

  useEffect(() => {
    validate(formValues);
    //console.log(formError)
    setFormError(validate(formValues));
    // if (Object.keys(formError).length === 0) {
    // }
  }, [formValues, touched]);

  useEffect(() => {
    setFormValues({
      name: userData?.name || "",
      phone_number: userData?.phone_number || "",
      email: userData?.email || "",
      shipping_email: userData?.shipping_email || userData?.email,
      country: userData?.country || "",
      city: userData?.city || "",
      postal_code: userData?.postal_code || "",
    });
  }, [userData]);

  const {
    name,
    email,
    city,
    country,
    postal_code,
    phone_number,
    shipping_email,
  } = formValues;

  const docRef = doc(db, "users", `${userData?.docId}`);
  const updateUser = async (updatedData) => {
    try {
      await setDoc(docRef, updatedData, { merge: true });

      console.log("User data updated successfully");
    } catch (error) {
      alert(error);
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const updatedData = {
      name,
      email,
      country,
      phone_number,
      city,
      postal_code,
      shipping_email,
    };
    console.log(formValues);
    setIsLoading(true);

    if (Object.keys(formError).length > 0) {
      setTouched({
        name: true,
        phone_number: true,
        email: true,
        country: true,
        city: true,
        postal_code: true,
        shipping_email: true,
      });
      setIsLoading(false);
    }

    if (Object.keys(formError).length === 0) {
      setTouched({
        name: false,
        phone_number: false,
        email: false,
        country: false,
        city: false,
        postal_code: false,
        shipping_email: false,
      });
      updateUser(updatedData);
      navigate("/payment");
      setErrorType("success");
      setMessageType("Data Received Successful");
      setShowToast(true);
      setFormValues({});
      setFormError({});
      e.target.reset();
      setIsLoading(false);
      setIsLoading(false);
    }
  };

  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = useSelector((state) => state.cart.shippingFee);
  const totalAmount = cartTotalAmount + Number(shippingCost);

  return (
    <section>
      <HeaderSection title="Checkout" className="CheckoutTitle" />
      <section>
        <Container className="py-5">
          <Row>
            <Col lg="8" m="6">
              {Object.keys(userData).length <= 0 ? (
                <h6 className="mb-3">Loading User Details</h6>
              ) : (
                ""
              )}
              <h6 className="mb-3">Shipping Address</h6>
              <Form className="checkout_form" onSubmit={handlesubmit}>
                <Form.Group className="form_group">
                  <InputGroup>
                    <InputGroup.Text id="inputGroupPrepend">
                      <MdPersonOutline />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="inputfield"
                      value={formValues.name}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <div className="errorMsg">
                    {touched.full_name && formError.full_name}
                  </div>
                </Form.Group>

                <Form.Group className="form_group">
                  <InputGroup>
                    <InputGroup.Text id="inputGroupPrepend">
                      <MdMail />
                    </InputGroup.Text>
                    <Form.Control
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Enter your email"
                      className="inputfield"
                    />
                  </InputGroup>
                  <div className="errorMsg">
                    {touched.email && formError.email}
                  </div>
                </Form.Group>

                <Form.Group className="form_group">
                  <InputGroup>
                    <InputGroup.Text id="inputGroupPrepend">
                      <MdMail />
                    </InputGroup.Text>
                    <Form.Control
                      name="shipping_email"
                      value={formValues.shipping_email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Enter your shipping email"
                      className="inputfield"
                    />
                  </InputGroup>
                  <div className="errorMsg">
                    {touched.shipping_email && formError.shipping_email}
                  </div>
                </Form.Group>

                <Form.Group className="form_group">
                  <InputGroup>
                    <InputGroup.Text id="inputGroupPrepend">
                      <MdOutlinePhoneLocked />
                    </InputGroup.Text>
                    <Form.Control
                      name="phone_number"
                      value={formValues.phone_number}
                      onChange={handleChange}
                      type="number"
                      placeholder="Enter your phone Number"
                      className="inputfield"
                    />
                  </InputGroup>
                  <div className="errorMsg">
                    {touched.phone_number && formError.phone_number}
                  </div>
                </Form.Group>

                <Form.Group className="form_group">
                  <InputGroup>
                    <InputGroup.Text id="inputGroupPrepend">
                      <MdLocationOn />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="country"
                      value={formValues.country}
                      onChange={handleChange}
                      placeholder="Enter your country"
                      className="inputfield"
                    />
                  </InputGroup>
                  <div className="errorMsg">
                    {touched.country && formError.country}
                  </div>
                </Form.Group>

                <Form.Group className="form_group">
                  <InputGroup>
                    <InputGroup.Text id="inputGroupPrepend">
                      <MdLocationOn />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="city"
                      value={formValues.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                      className="inputfield"
                    />
                  </InputGroup>
                  <div className="errorMsg">
                    {touched.city && formError.city}
                  </div>
                </Form.Group>

                <Form.Group className="form_group">
                  <InputGroup>
                    <InputGroup.Text id="inputGroupPrepend">
                      <MdLocationOn />
                    </InputGroup.Text>
                    <Form.Control
                      type="number"
                      name="postal_code"
                      value={formValues.postal_code}
                      onChange={handleChange}
                      placeholder="Enter your postal code"
                      className="inputfield"
                    />
                  </InputGroup>
                  <div className="errorMsg">
                    {touched.postal_code && formError.postal_code}
                  </div>
                </Form.Group>

                <button className="btn">Proceed</button>
              </Form>
            </Col>

            <Col lg="4" md="6" className="mt-4">
              <div className="checkout_bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  subtotal: <span> &#8358;{cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  shipping: <span> &#8358;{shippingCost}</span>
                </h6>
                <div className="checkout_total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span> &#8358;{totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>

          {showToast ? (
            <>
              <div className="ToastContainer" />
              <div className="centered">
                <Toast
                  bg={errorType}
                  onClose={() => {
                    setShowToast(!showToast);
                  }}
                  className="toast"
                >
                  <Toast.Header className="mt-3">
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">BennyFoodie</strong>
                  </Toast.Header>
                  <Toast.Body className="text-dark">{messageType}</Toast.Body>
                </Toast>
              </div>
            </>
          ) : (
            ""
          )}
        </Container>
      </section>
    </section>
  );
};

export default Checkout;
