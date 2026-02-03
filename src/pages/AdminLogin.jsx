
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
    <main className="container" style={{padding:'2rem 0', maxWidth:480}}>
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit} className="card">
        <div className="card-body">
          {error && <div className="badge" style={{marginBottom:'.75rem', borderColor:'red', background:'rgba(220,38,38,.15)'}}>{error}</div>}
          <div className="form-row">
            <label>Email</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
          </div>
          <div className="form-row">
            <label>Password</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
          </div>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary" type="submit">Login</button>
        </div>
      </form>
      <p style={{color:'var(--color-muted)'}}>Demo credentials — Email: <code>admin@millerstravels.co.za</code> | Password: <code>demo123</code></p>
    </main>
  )
}
