
import { useState } from 'react'
import { getSettings, saveSettings, resetDemo } from '../store/storage'

export default function AdminSettings(){
  const [form, setForm] = useState(getSettings())

  const handleSave = ()=>{
    saveSettings(form)
    alert('Settings saved to browser storage (temporary).')
  }

  const handleReset = ()=>{
    if(confirm('Reset demo data and settings?')){
      resetDemo()
      location.reload()
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="card">
        <div className="card-body">
          <label className="block text-sm font-medium">Tagline</label>
          <input className="w-full border border-gray-200 rounded-lg px-3 py-2 mb-3" value={form.tagline || ''} onChange={e=>setForm({...form, tagline:e.target.value})} placeholder="Umrah • Hajj • Holy Land • Custom Travel" />
          <label className="block text-sm font-medium">Hero Title</label>
          <input className="w-full border border-gray-200 rounded-lg px-3 py-2 mb-3" value={form.heroTitle || ''} onChange={e=>setForm({...form, heroTitle:e.target.value})} />
          <label className="block text-sm font-medium">Hero Subtitle</label>
          <input className="w-full border border-gray-200 rounded-lg px-3 py-2 mb-3" value={form.heroSubtitle || ''} onChange={e=>setForm({...form, heroSubtitle:e.target.value})} />
          <label className="block text-sm font-medium">Address</label>
          <input className="w-full border border-gray-200 rounded-lg px-3 py-2 mb-3" value={form.address || ''} onChange={e=>setForm({...form, address:e.target.value})} />
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">Phone 1</label>
              <input className="w-full border border-gray-200 rounded-lg px-3 py-2" value={form.phone1 || ''} onChange={e=>setForm({...form, phone1:e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone 2</label>
              <input className="w-full border border-gray-200 rounded-lg px-3 py-2" value={form.phone2 || ''} onChange={e=>setForm({...form, phone2:e.target.value})} />
            </div>
          </div>
          <label className="block text-sm font-medium mt-3">Email</label>
          <input className="w-full border border-gray-200 rounded-lg px-3 py-2" value={form.email || ''} onChange={e=>setForm({...form, email:e.target.value})} />
          <div className="grid md:grid-cols-2 gap-3 mt-3">
            <div>
              <label className="block text-sm font-medium">Primary Gold</label>
              <input className="w-full border border-gray-200 rounded-lg px-3 py-2" value={form.primary || '#d6b25e'} onChange={e=>setForm({...form, primary:e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium">Accent Purple</label>
              <input className="w-full border border-gray-200 rounded-lg px-3 py-2" value={form.accent || '#7b4bc4'} onChange={e=>setForm({...form, accent:e.target.value})} />
            </div>
          </div>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary" onClick={handleSave}>Save Settings</button>
          <button className="btn btn-outline" onClick={handleReset}>Reset Demo Data</button>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h3 className="font-semibold">Notes</h3>
          <ul className="list-disc ml-5 text-sm text-gray-600 mt-2">
            <li>Data is stored in your browser (LocalStorage) — temporary until backend is connected.</li>
            <li>Change theme colors here. Fonts are set globally (Playfair Display + Inter).</li>
            <li>Use the Packages tab to add or edit package options and pricing.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
