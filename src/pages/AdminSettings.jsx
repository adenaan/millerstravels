
import { useState } from 'react'
import { getSettings, saveSettings } from '../store/storage'

export default function AdminSettings(){
  const [form, setForm] = useState(getSettings())

  const handleSave = ()=>{
    saveSettings(form)
    alert('Settings saved to browser storage (temporary).')
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="form-row"><label>Tagline</label><input value={form.tagline || ''} onChange={e=>setForm({...form, tagline:e.target.value})} placeholder="Umrah • Hajj • Holy Land • Custom Travel" /></div>
        <div className="form-row"><label>Hero Title</label><input value={form.heroTitle || ''} onChange={e=>setForm({...form, heroTitle:e.target.value})} /></div>
        <div className="form-row"><label>Hero Subtitle</label><input value={form.heroSubtitle || ''} onChange={e=>setForm({...form, heroSubtitle:e.target.value})} /></div>
        <div className="form-row"><label>Address</label><input value={form.address || ''} onChange={e=>setForm({...form, address:e.target.value})} /></div>
        <div className="form-row inline">
          <div><label>Phone 1</label><input value={form.phone1 || ''} onChange={e=>setForm({...form, phone1:e.target.value})} /></div>
          <div><label>Phone 2</label><input value={form.phone2 || ''} onChange={e=>setForm({...form, phone2:e.target.value})} /></div>
        </div>
        <div className="form-row"><label>Email</label><input value={form.email || ''} onChange={e=>setForm({...form, email:e.target.value})} /></div>
        <div className="form-row inline">
          <div><label>Primary Color</label><input value={form.primary || ''} onChange={e=>setForm({...form, primary:e.target.value})} placeholder="#d4af37" /></div>
          <div><label>Accent Color</label><input value={form.accent || ''} onChange={e=>setForm({...form, accent:e.target.value})} placeholder="#8a2be2" /></div>
        </div>
      </div>
      <div className="card-actions">
        <button className="btn btn-primary" onClick={handleSave}>Save Settings</button>
      </div>
    </div>
  )
}
