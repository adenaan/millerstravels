import React from 'react'
import { Link } from 'react-router-dom'

function fmt(n){
  return new Intl.NumberFormat('en-ZA', { style:'currency', currency:'ZAR', maximumFractionDigits:0 }).format(n)
}

export default function PackageCard({ pkg }){
  const minPrice = Math.min(...(pkg.options||[]).map(o => o.prices?.quad ?? Infinity))
  return (
    <Link to={`/packages/${pkg.id}`} className="card" style={{ padding:16, display:'grid', gap:12, overflow:'hidden' }}>
      <div style={{ borderRadius:14, overflow:'hidden', border:'1px solid var(--border)' }}>
        <img src={pkg.heroImage} alt={pkg.title} style={{ height:170, width:'100%', objectFit:'cover' }} />
      </div>

      <div style={{ display:'grid', gap:6 }}>
        <div className="pill" style={{ width:'fit-content' }}>
          <span style={{ width:10, height:10, borderRadius:999, background: pkg.type === 'Umrah' ? 'var(--primary-2)' : 'var(--accent)' }} />
          <span style={{ fontWeight:800 }}>{pkg.type}</span>
        </div>

        <div style={{ fontWeight:900, fontSize:16, lineHeight:1.25 }}>{pkg.title}</div>
        <div className="small">
          Departs {new Date(pkg.departureDate).toLocaleDateString('en-ZA', { day:'2-digit', month:'short', year:'numeric' })} •
          Returns {new Date(pkg.returnDate).toLocaleDateString('en-ZA', { day:'2-digit', month:'short', year:'numeric' })}
        </div>

        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:12, marginTop:6 }}>
          <div>
            <div className="small">From (quad)</div>
            <div style={{ fontWeight:900 }}>{fmt(minPrice)}</div>
          </div>
          <div className="btn primary" style={{ padding:'10px 14px' }}>View</div>
        </div>
      </div>
    </Link>
  )
}
