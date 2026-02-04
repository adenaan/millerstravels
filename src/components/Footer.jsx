import React, { useEffect, useState } from 'react'
import { getConfig } from '../utils/storage'

function IconLink({ href, label, children }){
  return (
    <a href={href} target="_blank" rel="noreferrer" className="pill" style={{ gap:10, padding:'10px 12px' }} aria-label={label}>
      {children}
      <span style={{ fontWeight:700 }}>{label}</span>
    </a>
  )
}

export default function Footer(){
  const [cfg, setCfg] = useState(getConfig())
  useEffect(() => setCfg(getConfig()), [])

  const c = cfg.contact || {}
  return (
    <footer style={{ padding:'26px 0 34px 0' }}>
      <div className="container">
        <div className="card" style={{ padding:18 }}>
          <div className="grid cols-3" style={{ alignItems:'start' }}>
            <div>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
                <img src={cfg.logo} alt="logo" style={{ width:42, height:42, borderRadius:12, border:'1px solid var(--border)', objectFit:'cover' }} />
                <div>
                  <div style={{ fontWeight:800 }}>{cfg.brandName}</div>
                  <div className="small">{cfg.tagline}</div>
                </div>
              </div>
              <div className="small">
                Address: {c.address}<br/>
                Email: <a href={`mailto:${c.email}`} style={{ textDecoration:'underline' }}>{c.email}</a><br/>
                Phone: <a href={`tel:${(c.phonePrimary||'').replace(/\s/g,'')}`} style={{ textDecoration:'underline' }}>{c.phonePrimary}</a><br/>
                Alt: <a href={`tel:${(c.phoneAlt||'').replace(/\s/g,'')}`} style={{ textDecoration:'underline' }}>{c.phoneAlt}</a>
              </div>
            </div>

            <div>
              <div style={{ fontWeight:800, marginBottom:10 }}>Quick links</div>
              <div style={{ display:'grid', gap:10 }}>
                <a className="pill" href="/packages">Browse packages</a>
                <a className="pill" href="/admin">Admin login</a>
                <a className="pill" href={`mailto:${c.email}`}>Request a quote</a>
              </div>
            </div>

            <div>
              <div style={{ fontWeight:800, marginBottom:10 }}>Social</div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
                <IconLink href={c.instagram} label="Instagram">
                  <span style={{ width:22, height:22, display:'inline-grid', placeItems:'center' }}>📸</span>
                </IconLink>
                <IconLink href={c.facebook} label="Facebook">
                  <span style={{ width:22, height:22, display:'inline-grid', placeItems:'center' }}>f</span>
                </IconLink>
              </div>

              <div className="small" style={{ marginTop:12 }}>
                © {new Date().getFullYear()} Miller's Travel & Tours. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
