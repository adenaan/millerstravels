import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getConfig, getPackages } from '../utils/storage'
import HeroCarousel from './HeroCarousel'
import PackageCard from './PackageCard'

export default function Home(){
  const [cfg, setCfg] = useState(getConfig())
  const [pkgs, setPkgs] = useState(getPackages())

  useEffect(() => {
    setCfg(getConfig())
    setPkgs(getPackages())
  }, [])

  const featured = useMemo(() => pkgs.slice(0, 3), [pkgs])

  return (
    <div className="container" style={{ display:'grid', gap:18 }}>
      <HeroCarousel />

      <section className="grid cols-2">
        <div className="card" style={{ padding:18 }}>
          <div className="pill" style={{ marginBottom:12 }}>
            <span style={{ width:10, height:10, borderRadius:999, background:'var(--primary-2)' }} />
            <span style={{ fontWeight:800 }}>Why book with us</span>
          </div>
          <div className="h2" style={{ marginBottom:10 }}>Simple, guided, reliable.</div>
          <div className="small" style={{ fontSize:14, lineHeight:1.6 }}>
            We help you choose the right package, handle your travel planning, and keep everything clear from the first call to your return home.
            Umrah and tour packages are updated regularly — check back often.
          </div>

          <div style={{ display:'flex', gap:10, flexWrap:'wrap', marginTop:14 }}>
            <a className="btn primary" href={`mailto:${cfg.contact?.email}`}>Get a quote</a>
            <Link className="btn ghost" to="/packages">View packages</Link>
          </div>
        </div>

        <div className="card" style={{ padding:18, overflow:'hidden' }}>
          <div className="h2" style={{ marginBottom:10 }}>Current brochures</div>
          <div className="small" style={{ marginBottom:12 }}>Tap a brochure to zoom in.</div>
          <div className="grid cols-3" style={{ gap:10 }}>
            {(cfg.brochureImages || []).map((src, i) => (
              <a key={src} href={src} target="_blank" rel="noreferrer" className="card" style={{ padding:0, borderRadius:14, overflow:'hidden' }}>
                <img src={src} alt={`brochure ${i+1}`} style={{ aspectRatio:'3/4', objectFit:'cover' }} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div style={{ display:'flex', alignItems:'end', justifyContent:'space-between', gap:12, flexWrap:'wrap', margin:'10px 2px' }}>
          <div>
            <div className="h2">Featured packages</div>
            <div className="small">Updated by admin — stored in your browser for now.</div>
          </div>
          <Link className="btn ghost" to="/packages">See all</Link>
        </div>

        <div className="grid cols-3">
          {featured.map(p => <PackageCard key={p.id} pkg={p} />)}
        </div>
      </section>
    </div>
  )
}
