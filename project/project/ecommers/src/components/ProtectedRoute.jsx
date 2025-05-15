import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({chidren}) => {
const token= localStorage.getItem("token")
 if(!token){
    return <Navigate to="SignUp" replace/>
 }
 return chidren
}

export default ProtectedRoute
