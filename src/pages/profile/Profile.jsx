import { useEffect, useState } from "react";
import './Profile.scss'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../core/auth/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

function Profile(props) {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
 const [phone_number, setPhone_number] = useState("");
  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name)
      setPhone_number(data?.phone_number)
    } catch (err) {
      console.error(err);
      //alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUser();
  }, [user, loading]);
  
  
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title 
        className='title'
        id="contained-modal-title-vcenter">
         User Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className='name-title'> Name: <strong className='ms-3'>{name}
        </strong>
        </h4>
 <h4 className='name-title'> Phone Number: <strong className='ms-3'>{phone_number}
 </strong>
 </h4>
 
    <h4 className='name-title'>Email: <strong className='ms-3'>{user?.email}
    </strong>
    </h4>
      </Modal.Body>
      <Modal.Footer className='d-flex align-items-center justify-content-between'>
      <Button onClick={
    (e) =>{  
    props.onHide(e)
  logout(e)
      }}>
      Logout
      </Button>
      
    <Button onClick={props.onHide}>
        Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Profile