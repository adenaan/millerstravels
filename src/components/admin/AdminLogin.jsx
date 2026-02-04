import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAdminSession, setAdminSession, getConfig } from '../../utils/storage'

const DEMO = { username: 'admin', password: 'demo123' }

export default function AdminLogin(){
  const nav = useNavigate()
  const cfg = useMemo(() => getConfig(), [])
  const session = useMemo(() => getAdminSession(), [])
  const [username, setUsername] = useState(DEMO.username)
  const [password, setPassword] = useState(DEMO.password)
  const [err, setErr] = useState('')

  if(session?.authed){
    nav('/admin/dashboard', { replace:true })
  }

  function submit(e){
    e.preventDefault()
    setErr('')
    if(username.trim() === DEMO.username && password === DEMO.password){
      setAdminSession({ authed:true, at: Date.now() })
      nav('/admin/dashboard')
      return
    }
    setErr('Invalid demo login. Use admin / demo123')
  }

  return (
    <div className="container" style={{ display:'grid', placeItems:'center' }}>
      <div className="card" style={{ padding:18, width:'min(520px, 100%)' }}>
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <img src={cfg.logo} alt="logo" style={{ width:52, height:52, borderRadius:14, border:'1px solid var(--border)', objectFit:'cover' }} />
          <div>
            <div className="h2" style={{ fontSize:24, margin:0 }}>Admin login</div>
            <div className="small">Demo login (localStorage only).</div>
          </div>
        </div>

        <form onSubmit={submit} style={{ marginTop:14, display:'grid', gap:12 }}>
          <div>
            <div className="label">Username</div>
            <input className="input" value={username} onChange={e=>setUsername(e.target.value)} />
          </div>
          <div>
            <div className="label">Password</div>
            <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          </div>

          {err && <div className="pill" style={{ borderColor:'rgba(80,32,80,.35)', background:'rgba(80,32,80,.08)', color:'var(--accent)' }}>{err}</div>}

          <button className="btn primary" type="submit">Sign in</button>

          <div className="small">
            Demo credentials: <b>admin</b> / <b>demo123</b>
          </div>
        </form>
      </div>
    </div>
  )
}
