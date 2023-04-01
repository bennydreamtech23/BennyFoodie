import { useState, useEffect } from "react";
import styles from "./Paystack.module.scss";
import PaystackProp from "@paystack/inline-js";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { useAuthValue } from "../../core/auth/AuthContext";

import { Container, Toast, Spinner, Button } from "react-bootstrap";

const PaystackPayment = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  //toast usestate component
  const [showToast, setShowToast] = useState(false);
  const [errorType, setErrorType] = useState("");
  const [messageType, setMessageType] = useState("");
  const { userData } = useAuthValue();
  //price
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = useSelector((state) => state.cart.shippingFee);
  const totalAmount = cartTotalAmount + Number(shippingCost);

  //cart clear
  const handleClearCart = () => {
    dispatch(cartActions.clearCart());
  };

  //paystack data
  const paystack = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const paystackpayment = new PaystackProp();
    paystackpayment.newTransaction({
      key: "pk_test_659a64b0fc8e34c320d741dc26ce4a183a4feef8",
      amount: totalAmount * 100,
      email: userData?.email,
      name: userData?.name,
      phone_number: userData?.phone_number,
      onSuccess(transaction) {
        setErrorType("success");
        setMessageType(
          `Payment is Successful, Reference ${transaction.reference} `
        );
        setShowToast(true);
        setIsLoading(false);
        handleClearCart();
      },
      onCancel() {
        setErrorType("danger");
        setMessageType(`Opps You cancelled the transaction`);
        setShowToast(true);
        setIsLoading(false);
      },
    });
    setIsLoading(false);
  };
  return (
    <Container fluid className={styles.Container}>
      <div>
        <h2 className={styles.heading} style={{ textTransform: "capitalize" }}>
          full Name: <span>{userData?.name}</span>
        </h2>
        <h2 className={styles.heading} style={{ textTransform: "lowercase" }}>
          Email: <span>{userData?.email}</span>
        </h2>
        <h2 className={styles.heading} style={{ textTransform: "lowercase" }}>
          Shipping Email: <span>{userData?.shipping_email}</span>
        </h2>
        <h2 className={styles.heading}>
          Phone: <span>{userData?.phone_number}</span>
        </h2>
        <h2 className={styles.heading} style={{ textTransform: "capitalize" }}>
          Country: <span>{userData?.country}</span>
        </h2>
        <h2 className={styles.heading} style={{ textTransform: "capitalize" }}>
          City: <span>{userData?.city}</span>
        </h2>
        <h2 className={styles.heading}>
          Postal Code: <span>{userData?.postal_code}</span>
        </h2>
        <h2 className={styles.heading}>
          Total Amount: 
          <span style={{ fontSize: "2rem" }}> &#8358;{totalAmount}</span>
        </h2>
      </div>

      <div>
        {isLoading ? (
          <Button disabled variant="success">
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            paying...
          </Button>
        ) : (
          <Button variant="success" type="submit" onClick={paystack}>
            Pay
          </Button>
        )}
      </div>
      {showToast ? (
        <>
          <div className={styles.ToastContainer} />
          <div className={styles.centered}>
            <Toast
              bg={errorType}
              onClose={() => {
                setShowToast(!showToast);
              }}
              className={styles.toast}
            >
              <Toast.Header className="mt-3">
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">BennyFoodie</strong>
              </Toast.Header>
              <Toast.Body className="text-light">{messageType}</Toast.Body>
            </Toast>
          </div>
        </>
      ) : (
        ""
      )}
    </Container>
  );
};

export default PaystackPayment;
