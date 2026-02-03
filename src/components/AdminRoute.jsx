
import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '../store/auth'

export default function AdminRoute({children}){
  if(!isAuthenticated()) return <Navigate to="/admin/login" replace />
  return children
}
