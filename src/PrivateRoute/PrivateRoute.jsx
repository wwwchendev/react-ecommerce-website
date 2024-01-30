/* eslint-disable react/prop-types */
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useLocation, Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation();

  if (loading) {
    return (
      <div>載入中...</div>
    )
  }

  if (user) {
    return children
  }

  return (
    <Navigate to="/login" state={{ from: location }} replace></Navigate>
  )
}

export default PrivateRoute