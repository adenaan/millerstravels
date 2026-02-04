import React from 'react'

export default function SiteSettings({ config, onChange }){
  const c = config.contact || {}

  function set(key, value){
    onChange({ ...config, [key]: value })
  }

  function setContact(key, value){
    onChange({ ...config, contact: { ...c, [key]: value } })
  }

  return (
    <div className="card" style={{ padding:18 }}>
      <div style={{ fontWeight:900 }}>Site content</div>
      <div className="small" style={{ marginTop:6 }}>Update the homepage and contact details (stored in localStorage).</div>

      <div style={{ display:'grid', gap:12, marginTop:14 }}>
        <div className="grid cols-2">
          <div>
            <div className="label">Brand name</div>
            <input className="input" value={config.brandName || ''} onChange={e=>set('brandName', e.target.value)} />
          </div>
          <div>
            <div className="label">Tagline</div>
            <input className="input" value={config.tagline || ''} onChange={e=>set('tagline', e.target.value)} />
          </div>
        </div>

        <div>
          <div className="label">Hero title</div>
          <input className="input" value={config.heroTitle || ''} onChange={e=>set('heroTitle', e.target.value)} />
        </div>

        <div>
          <div className="label">Hero subtitle</div>
          <textarea className="input" rows="3" value={config.heroSubtitle || ''} onChange={e=>set('heroSubtitle', e.target.value)} />
        </div>

        <div className="card" style={{ padding:12, boxShadow:'none' }}>
          <div style={{ fontWeight:900 }}>Contact</div>
          <div className="grid cols-2" style={{ marginTop:10 }}>
            <div>
              <div className="label">Email</div>
              <input className="input" value={c.email || ''} onChange={e=>setContact('email', e.target.value)} />
            </div>
            <div>
              <div className="label">Address</div>
              <input className="input" value={c.address || ''} onChange={e=>setContact('address', e.target.value)} />
            </div>
            <div>
              <div className="label">Phone</div>
              <input className="input" value={c.phonePrimary || ''} onChange={e=>setContact('phonePrimary', e.target.value)} />
            </div>
            <div>
              <div className="label">Alt phone</div>
              <input className="input" value={c.phoneAlt || ''} onChange={e=>setContact('phoneAlt', e.target.value)} />
            </div>
            <div>
              <div className="label">Instagram URL</div>
              <input className="input" value={c.instagram || ''} onChange={e=>setContact('instagram', e.target.value)} />
            </div>
            <div>
              <div className="label">Facebook URL</div>
              <input className="input" value={c.facebook || ''} onChange={e=>setContact('facebook', e.target.value)} />
            </div>
          </div>
        </div>

        <div className="pill" style={{ justifyContent:'space-between' }}>
          <div className="small">Done! Changes update immediately on refresh.</div>
          <div style={{ display:'flex', gap:10 }}>
            <button className="btn ghost" onClick={() => window.location.reload()}>Refresh preview</button>
          </div>
        </div>
      </div>
    </div>
  )
}
