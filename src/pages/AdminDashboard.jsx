
import { useState } from 'react'
import { logout } from '../store/auth'
import AdminPackages from './AdminPackages'
import AdminSettings from './AdminSettings'

export default function AdminDashboard(){
  const [tab, setTab] = useState('packages')
  return (
    <main className="container" style={{padding:'2rem 0'}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1rem'}}>
        <h1>Admin</h1>
        <button className="btn btn-outline" onClick={logout}>Logout</button>
      </div>
      <div className="card">
        <div className="card-header" style={{display:'flex', gap:'.5rem'}}>
          <button className={`btn ${tab==='packages'? 'btn-primary':'btn-outline'}`} onClick={()=>setTab('packages')}>Packages</button>
          <button className={`btn ${tab==='settings'? 'btn-primary':'btn-outline'}`} onClick={()=>setTab('settings')}>Site Settings</button>
        </div>
        <div className="card-body">
          {tab==='packages' && <AdminPackages />}
          {tab==='settings' && <AdminSettings />}
        </div>
      </div>
    </main>
  )
}
