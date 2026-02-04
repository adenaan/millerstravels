import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getConfig } from '../utils/storage'

export default function HeroCarousel(){
  const [cfg, setCfg] = useState(getConfig())
  const slides = useMemo(() => {
    const imgs = cfg.brochureImages || []
    return imgs.length ? imgs : ['/assets/brochure-june.jpg']
  }, [cfg])

  const [idx, setIdx] = useState(0)

  useEffect(() => {
    setCfg(getConfig())
  }, [])

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % slides.length), 4500)
    return () => clearInterval(t)
  }, [slides.length])

  return (
    <section className="card" style={{ padding:18, overflow:'hidden' }}>
      <div className="grid cols-2" style={{ alignItems:'center' }}>
        <div>
          <div className="pill" style={{ marginBottom:12 }}>
            <span style={{ width:10, height:10, borderRadius:999, background:'var(--accent)' }} />
            <span style={{ fontWeight:800 }}>Miller's Travel & Tours</span>
          </div>

          <h1 className="h1">{cfg.heroTitle}</h1>
          <p className="small" style={{ fontSize:15, lineHeight:1.6, marginTop:10 }}>
            {cfg.heroSubtitle}
          </p>

          <div style={{ display:'flex', gap:10, flexWrap:'wrap', marginTop:14 }}>
            <Link className="btn primary" to="/packages">Browse packages</Link>
            <a className="btn ghost" href={`tel:${(cfg.contact?.phonePrimary||'').replace(/\s/g,'')}`}>Call now</a>
          </div>

          <div style={{ display:'flex', gap:8, marginTop:14 }}>
            {slides.map((_, i) => (
              <button
                key={i}
                className="btn"
                onClick={() => setIdx(i)}
                style={{
                  padding:'8px 10px',
                  background: i===idx ? 'rgba(224,192,112,.4)' : 'rgba(255,255,255,.6)',
                  border:'1px solid var(--border)'
                }}
                aria-label={`Slide ${i+1}`}
              >
                {i+1}
              </button>
            ))}
          </div>
        </div>

        <div style={{ position:'relative', minHeight:260 }}>
          <div style={{
            position:'absolute', inset:0,
            borderRadius:'var(--radius)',
            overflow:'hidden',
            border:'1px solid var(--border)'
          }}>
            <img
              src={slides[idx]}
              alt="brochure preview"
              style={{ width:'100%', height:'100%', objectFit:'cover', transform:'scale(1.03)' }}
            />
            <div style={{
              position:'absolute', inset:0,
              background:'linear-gradient(90deg, rgba(247,245,243,.02), rgba(247,245,243,.55))'
            }} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width:900px){
          section.card .grid.cols-2{grid-template-columns:1fr !important}
          section.card img{max-height:420px}
        }
      `}</style>
    </section>
  )
}
