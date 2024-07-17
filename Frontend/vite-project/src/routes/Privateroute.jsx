import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Navigate, Outlet } from 'react-router-dom'

function Privateroute() {
    const {token} =useContext(AuthContext)
  return token ? <Outlet/> : <Navigate to={'/login'}></Navigate>
}

export default Privateroute