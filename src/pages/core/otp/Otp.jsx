import {
  Container,
  Col,
  Form,
  InputGroup,
  Row,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { useNavigate, Link, useLocation } from "react-router-dom";
import styles from "./Otp.module.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";

import { MdErrorOutline } from "react-icons/md";

function OtpPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showToast, setShowToast] = useState(false);
  const [errorType, setErrorType] = useState("");
  const [messageType, setMessageType] = useState("");
  const [token, setToken] = useState(location?.state?.token);
  const [userId, setUserId] = useState(location?.state?.userId);

  useEffect(() => {
    if (token && userId) {
      setToken(token);
      setUserId(userId);
    }
  }, [token, userId]);

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <Container fluid className={styles.Container}>
      <h1 className={styles.title}> Forgot password </h1>
      <p className={styles.subTitle}>Enter your OTP sent to your mail</p>

      {/*registration form*/}
      <Formik
        initialValues={{
          otp: "",
        }}
        validationSchema={Yup.object({
          otp: Yup.string()
            .required("No OTP provided.")
            .min(4, "OTP Token is too short - should be 4 chars minimum."),
        })}
        onSubmit={() => {
          //e.preventDefault()
          fetch(
            `https://benny-foods.fly.dev/api/v1/users/reset-password/validate-token?token=${token}&user_id=${userId}`,
            {
              method: "POST",
              //headers: {
              //'Content-Type': 'application/json',
              //'Accept': 'application/json'
              // },
              body: JSON.stringify({
                otp: otp.value,
              }),
            }
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.status === "success") {
                alert(data.message);
                navigate("/resetpassword", {state: {userId: userId }}, { replace: true });
              } else {
                // alert(data.error.description)
                setErrorType("danger");
                setMessageType(data.error.description);
                setShowToast(true);
              }
            })
            .catch((error) => console.log(error));
        }}
      >
        {(formik) => (
          <Form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
            {/*email section of the page*/}

            <Form.Group className={styles.group}>
              <div className={styles.subgroup}>
                <Form.Label className={styles.labelfield}>OTP</Form.Label>

                <InputGroup className={styles.inputField}>
                  <Form.Control
                    size="md"
                    type="number"
                    name="otp"
                    placeholder="Enter your OTP Value"
                    id="otp"
                    className={styles.inputbox}
                    {...formik.getFieldProps("otp")}
                  />
                </InputGroup>
                {formik.touched.otp && formik.errors.otp ? (
                  <div className={styles.errorMsg}>
                    {" "}
                    <MdErrorOutline className="h6 mt-1" /> {formik.errors.otp}
                  </div>
                ) : null}
              </div>
            </Form.Group>

            <button className={styles.loginButton} type="submit">
              Continue
            </button>
          </Form>
        )}
      </Formik>

      <hr />
      <div className={styles.semiGroup}>
        <p className="text-center">Don't Have an Account</p>
        <button className={styles.btnLink} onClick={handleSignup}>
          Signup
        </button>
      </div>

      <Toast
        bg={errorType}
        show={showToast}
        onClose={() => {
          setShowToast(!showToast);
        }}
        className={styles.toaster}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">BennyFoodie</strong>
        </Toast.Header>
        <Toast.Body className="text-white">{messageType}</Toast.Body>
      </Toast>
    </Container>
  );
}

export default OtpPage;
