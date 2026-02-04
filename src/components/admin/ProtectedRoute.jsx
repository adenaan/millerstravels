import React from 'react'
import { Navigate } from 'react-router-dom'
import { getAdminSession } from '../../utils/storage'

export default function ProtectedRoute({ children }){
  const session = getAdminSession()
  if(!session?.authed) return <Navigate to="/admin" replace />
  return children
}
