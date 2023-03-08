import {Navigate} from 'react-router-dom'
import {AuthContext} from '.../../auth/AuthContext'
import {useContext} from "react"


export default function PrivateRoute({children}) {
  const useAuthValue = useContext(AuthContext)
  const {currentUser} = useAuthValue

  if(!currentUser?.emailVerified){
    return <Navigate to='/login' replace/>
  }

  return children
}
