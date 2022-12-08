import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/authSlice'
function Login() {
    const dispatch=useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(login(true))}>Login</button>
    </div>
  )
}

export default Login