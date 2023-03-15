import { initializeApp } from 'firebase/app'
import { useNavigate } from 'react-router-dom'

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  signOut,
} from 'firebase/auth'

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAJqpt2YskO0szupwuHmKRgQjHk0R5c3fI',
  authDomain: 'bennyfoodie-bd6b9.firebaseapp.com',
  projectId: 'bennyfoodie-bd6b9',
  storageBucket: 'bennyfoodie-bd6b9.appspot.com',
  messagingSenderId: '779893905402',
  appId: '1:779893905402:web:fe70e3d2bb941351b37643',
  measurementId: 'G-E4BTZXNYN3',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const googleProvider = new GoogleAuthProvider()

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
    const user = res.user
    const q = query(collection(db, 'users'), where('uid', '==', user.uid))
    const docs = await getDocs(q)
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      })
    }
  } catch (err) {
    console.error(err.message)
    //alert(err.message)
  }
}

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  //  if (sendEmailVerification(auth.currentUser)) {
    //  return true
   // }
    //alert(err.message)
  } catch (err) {
    console.error(err.message)
   // alert(err.message)
  }
}

const registerWithEmailAndPassword = async (name, email, password, phone_number) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      phone_number,
      authProvider: "local",
      email,
      
    });
    if (sendEmailVerification(auth.currentUser)) {
      return true
    }
    alert(err.message)
  } catch (err) {
    console.error(err.message)
    //alert(err.message)
  }
}

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email)
    alert('Password reset link sent!')
  } catch (err) {
    console.error(err.message)
   // alert(err.message)
  }
}

const logout = () => {
  signOut(auth)
}

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  sendEmailVerification,
}