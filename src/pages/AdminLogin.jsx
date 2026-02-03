
import { useState } from 'react'
import { login, isAuthenticated } from '../store/auth'
import { Navigate } from 'react-router-dom'

export default function AdminLogin(){
  const [email, setEmail] = useState('admin@millerstravels.co.za')
  const [password, setPassword] = useState('demo123')
  const [error, setError] = useState('')
  
  if(isAuthenticated()) return <Navigate to="/admin" replace />

  const handleSubmit = (e)=>{
    e.preventDefault()
    try {
      login(email, password)
    } catch(err){
      setError(err.message)
    }
  }

  return (
    <main className="container py-10 max-w-md">
      <h1 className="font-display text-4xl">Admin Login</h1>
      <form onSubmit={handleSubmit} className="card mt-4">
        <div className="card-body">
          {error && <div className="mb-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-md p-2">{error}</div>}
          <label className="block text-sm font-medium">Email</label>
          <input className="w-full border border-gray-200 rounded-lg px-3 py-2 mt-1" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <label className="block text-sm font-medium mt-3">Password</label>
          <input className="w-full border border-gray-200 rounded-lg px-3 py-2 mt-1" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        </div>
        <div className="card-actions">
          <button className="btn btn-primary" type="submit">Login</button>
        </div>
      </form>
      <p className="text-gray-500 text-sm mt-2">Demo credentials — Email: <code>admin@millerstravels.co.za</code> | Password: <code>demo123</code></p>
    </main>
  )
}
