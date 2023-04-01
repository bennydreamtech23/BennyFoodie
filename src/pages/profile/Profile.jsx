import { useState } from "react";
import "./Profile.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { useAuthValue } from "../core/auth/AuthContext";

function Profile(props) {
  const { userData } = useAuthValue();
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="title" id="contained-modal-title-vcenter" style={{color: 'var(--olivegreen)'}}>
          <BsPersonCircle className="me-3" /> User Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="name-title">
          {" "}
          Name: <strong className="ms-3">{userData?.name}</strong>
        </h4>
        <h4 className="name-title">
          {" "}
          Phone Number:{" "}
          <strong className="ms-3">{userData?.phone_number}</strong>
        </h4>

        <h4 className="name-title">
          Email: <strong className="ms-3">{userData?.email}</strong>
        </h4>
      </Modal.Body>
      <Modal.Footer className="d-flex align-items-center justify-content-between">
        <Button
          onClick={(e) => {
            props.onHide(e);
            logout(e);
          }}
        >
          Logout
        </Button>

        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Profile;
