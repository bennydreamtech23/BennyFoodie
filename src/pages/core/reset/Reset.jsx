import {
  Container,
  Col,
  Form,
  InputGroup,
  Row,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Reset.module.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";

//icon
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlinePhoneLocked, MdErrorOutline } from "react-icons/md";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

function ResetPage() {
  const location = useLocation();

  const [token, setToken] = useState(location?.state?.token);
  const [userId, setUserId] = useState(location?.state?.userId);
  const [showToast, setShowToast] = useState(false);
  const [errorType, setErrorType] = useState("");
  const [messageType, setMessageType] = useState("");
  //toggle
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);

  
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      setUserId(userId);
      console.log(userId);
    } else {
      navigate("/forgotpassword")
    }
  }, [token, userId]);

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <Container fluid className={styles.Container}>
      <h1 className={styles.title}>
        Welcome Back to <span className={styles.color}>Bennyfoodie!</span>
      </h1>
      <p className={styles.subTitle}>
        Enter your details, our prominent Customers
      </p>

      {/*registration form*/}
      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          password: Yup.string()
            .required("No new password provided.")
            .min(8, "new Password is too short - should be 8 chars minimum.")
            .matches(
              /[a-zA-Z]/,
              "new Password can only contain Latin letters."
            ),
          confirmPassword: Yup.string().when("password", {
            is: (val) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
              [Yup.ref("password")],
              "New Password Must Match"
            ),
          }),
        })}
        onSubmit={(values) => {
          navigate("/login");
        }}
      >
        {(formik) => (
          <Form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
            {/*pasword section*/}
            <Form.Group className={styles.group}>
              <div className={styles.subgroup}>
                <Form.Label className={styles.labelfield}>Password</Form.Label>

                <InputGroup className={styles.inputField}>
                  <InputGroup.Text id="inputGroupPrepend">
                    <RiLockPasswordFill />
                  </InputGroup.Text>

                  <Form.Control
                    size="md"
                    type={togglePassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your new password"
                    id="password"
                    className={styles.inputbox}
                    {...formik.getFieldProps("password")}
                  />
                  <InputGroup.Text
                    id="inputGroupPrepend"
                    onClick={(e) => {
                      e.preventDefault();
                      setTogglePassword(!togglePassword);
                    }}
                  >
                    {togglePassword ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </InputGroup.Text>
                </InputGroup>

                {formik.touched.password && formik.errors.password ? (
                  <div className={styles.errorMsg}>
                    <MdErrorOutline className="h6 mt-1" />{" "}
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
            </Form.Group>

            {/*confirm pasword section*/}
            <Form.Group className={styles.group}>
              <div className={styles.subgroup}>
                <Form.Label className={styles.labelfield}>
                  Confirm Password
                </Form.Label>

                <InputGroup className={styles.inputField}>
                  <InputGroup.Text id="inputGroupPrepend">
                    <RiLockPasswordFill />
                  </InputGroup.Text>

                  <Form.Control
                    size="md"
                    type={toggleConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="confirm your password"
                    id="confirmPassword"
                    className={styles.inputbox}
                    {...formik.getFieldProps("confirmPassword")}
                  />
                  <InputGroup.Text
                    id="inputGroupPrepend"
                    onClick={(e) => {
                      e.preventDefault();
                      setToggleConfirmPassword(!toggleConfirmPassword);
                    }}
                  >
                    {setToggleConfirmPassword ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </InputGroup.Text>
                </InputGroup>

                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className={styles.errorMsg}>
                    <MdErrorOutline className="h6 mt-1" />{" "}
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
              </div>
            </Form.Group>

            <button className={styles.loginButton} type="submit">
              Submit
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

      <ToastContainer position={"top-center"}>
        <Toast
          bg={errorType}
          show={showToast}
          onClose={() => {
            setShowToast(!showToast);
          }}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">BennyFoodie</strong>
          </Toast.Header>
          <Toast.Body className="text-white">{messageType}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
}

export default ResetPage;
