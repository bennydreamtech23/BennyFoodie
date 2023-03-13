import styles from './VerifyEmail.module.scss'
import { AuthContext } from '../auth/AuthContext'
import { useState, useEffect, useContext } from 'react'
import { auth } from '../auth/firebase'
import { sendEmailVerification } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function VerifyEmail() {
  const useAuthValue = useContext(AuthContext)

  const { currentUser } = useAuthValue
  const [time, setTime] = useState(60)
  const { timeActive, setTimeActive } = useAuthValue
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      currentUser
        ?.reload()
        .then(() => {
          if (currentUser?.emailVerified) {
            clearInterval(interval)
            navigate('/menu')
          }
        })
        .catch((err) => {
          alert(err.message)
        })
    }, 1000)
  }, [navigate, currentUser])

  useEffect(() => {
    let interval = null
    if (timeActive && time !== 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    } else if (time === 0) {
      setTimeActive(false)
      setTime(60)
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timeActive, time, setTimeActive])

  const resendEmailVerification = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        setTimeActive(true)
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  return (
    <div
      className='container d-flex align-items-center flex-column justify-content-center p-5'
      style={{ marginTop: 100}}
    >
      <div className='verifyEmail'>
        <h1>Verify your Email Address</h1>
        <p>
          <strong>A Verification email has been sent to:</strong>
          <br />
          <span>{currentUser?.email}</span>
        </p>
        <span>Follow the instruction in the email to verify your account</span>
        <button
          className='btn'
          onClick={resendEmailVerification}
          disabled={timeActive}
        >
          Resend Email {timeActive && time}
        </button>
      </div>
    </div>
  )
}

export default VerifyEmail
