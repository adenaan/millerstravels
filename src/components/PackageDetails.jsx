import React, { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPackages, getConfig } from '../utils/storage'

function fmt(n){
  return new Intl.NumberFormat('en-ZA', { style:'currency', currency:'ZAR', maximumFractionDigits:0 }).format(n)
}

export default function PackageDetails(){
  const { id } = useParams()
  const pkg = useMemo(() => getPackages().find(p => p.id === id), [id])
  const cfg = getConfig()

  if(!pkg){
    return (
      <div className="container">
        <div className="card" style={{ padding:18 }}>
          <div style={{ fontWeight:900 }}>Package not found</div>
          <div className="small">It may have been removed by admin.</div>
          <Link to="/packages" className="btn ghost" style={{ marginTop:12 }}>Back</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container" style={{ display:'grid', gap:16 }}>
      <div className="card" style={{ padding:18, overflow:'hidden' }}>
        <div className="grid cols-2" style={{ alignItems:'center' }}>
          <div>
            <div className="pill" style={{ marginBottom:12 }}>
              <span style={{ width:10, height:10, borderRadius:999, background: pkg.type === 'Umrah' ? 'var(--primary-2)' : 'var(--accent)' }} />
              <span style={{ fontWeight:800 }}>{pkg.type}</span>
            </div>
            <div className="h1" style={{ fontSize:'clamp(26px, 3.4vw, 40px)' }}>{pkg.title}</div>
            <div className="small" style={{ marginTop:10 }}>
              Departs {new Date(pkg.departureDate).toLocaleDateString('en-ZA', { day:'2-digit', month:'long', year:'numeric' })} •
              Returns {new Date(pkg.returnDate).toLocaleDateString('en-ZA', { day:'2-digit', month:'long', year:'numeric' })}
            </div>

            <div style={{ display:'flex', flexWrap:'wrap', gap:10, marginTop:14 }}>
              <a className="btn primary" href={`mailto:${cfg.contact?.email}?subject=${encodeURIComponent('Booking enquiry: ' + pkg.title)}`}>Enquire / Book</a>
              <a className="btn ghost" href={`tel:${(cfg.contact?.phonePrimary||'').replace(/\s/g,'')}`}>Call</a>
              <Link className="btn ghost" to="/packages">Back</Link>
            </div>

            <div style={{ display:'grid', gap:8, marginTop:14 }}>
              {(pkg.highlights || []).map(h => (
                <div key={h} className="pill">
                  <span>✓</span>
                  <span style={{ fontWeight:700 }}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderRadius:'var(--radius)', overflow:'hidden', border:'1px solid var(--border)' }}>
            <img src={pkg.heroImage} alt={pkg.title} style={{ width:'100%', height:'100%', minHeight:260, objectFit:'cover' }} />
          </div>
        </div>
      </div>

      <div className="grid cols-2">
        {(pkg.options || []).map(opt => (
          <div key={opt.name} className="card" style={{ padding:18 }}>
            <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:10 }}>
              <div className="h2" style={{ fontSize:22 }}>{opt.name}</div>
              <div className="pill">
                <span className="small" style={{ fontWeight:800 }}>from</span>
                <span style={{ fontWeight:900 }}>{fmt(opt.prices?.quad ?? 0)}</span>
              </div>
            </div>

            <div style={{ marginTop:10, display:'grid', gap:8 }}>
              {(opt.itinerary || []).map((line, i) => (
                <div key={i} className="small" style={{ lineHeight:1.5 }}>• {line}</div>
              ))}
            </div>

            <div className="card" style={{ marginTop:14, padding:12, boxShadow:'none' }}>
              <div style={{ fontWeight:900, marginBottom:8 }}>Room prices (per person)</div>
              <div className="grid cols-3" style={{ gap:10 }}>
                <div className="pill" style={{ justifyContent:'space-between' }}><span className="small">Quad</span><span style={{ fontWeight:900 }}>{fmt(opt.prices?.quad ?? 0)}</span></div>
                <div className="pill" style={{ justifyContent:'space-between' }}><span className="small">Triple</span><span style={{ fontWeight:900 }}>{fmt(opt.prices?.triple ?? 0)}</span></div>
                <div className="pill" style={{ justifyContent:'space-between' }}><span className="small">Double</span><span style={{ fontWeight:900 }}>{fmt(opt.prices?.double ?? 0)}</span></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card" style={{ padding:18 }}>
        <div style={{ fontWeight:900 }}>Need help choosing?</div>
        <div className="small" style={{ marginTop:6 }}>
          Call <a href={`tel:${(cfg.contact?.phonePrimary||'').replace(/\s/g,'')}`} style={{ textDecoration:'underline' }}>{cfg.contact?.phonePrimary}</a> or email{' '}
          <a href={`mailto:${cfg.contact?.email}`} style={{ textDecoration:'underline' }}>{cfg.contact?.email}</a>.
        </div>
      </div>
    </div>
  )
}
