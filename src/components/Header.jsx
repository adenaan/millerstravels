import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { getConfig } from '../utils/storage'

function NavItem({ to, children }){
  return (
    <NavLink
      to={to}
      style={({isActive}) => ({
        padding:'10px 12px',
        borderRadius:999,
        border:'1px solid transparent',
        background: isActive ? 'rgba(224,192,112,.22)' : 'transparent',
      })}
    >
      {children}
    </NavLink>
  )
}

export default function Header(){
  const [cfg, setCfg] = useState(getConfig())
  const [open, setOpen] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    setOpen(false)
    setCfg(getConfig())
  }, [loc.pathname])

  return (
    <header style={{ position:'sticky', top:0, zIndex:50, backdropFilter:'blur(12px)', background:'rgba(247,245,243,.75)', borderBottom:'1px solid var(--border)' }}>
      <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 0' }}>
        <Link to="/" style={{ display:'flex', alignItems:'center', gap:12 }}>
          <img src={cfg.logo} alt="logo" style={{ width:44, height:44, borderRadius:12, border:'1px solid var(--border)', background:'#fff', objectFit:'cover' }} />
          <div style={{ lineHeight:1.1 }}>
            <div style={{ fontWeight:800, letterSpacing:'.2px' }}>{cfg.brandName || "Miller's Travel & Tours"}</div>
            <div className="small">{cfg.tagline || "Travel & Tours"}</div>
          </div>
        </Link>

        <nav className="pill" style={{ display:'flex', gap:6, alignItems:'center' }}>
          <div className="desktop" style={{ display:'flex', gap:6, alignItems:'center' }}>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/packages">Packages</NavItem>
            <NavItem to="/admin">Admin</NavItem>
          </div>

          <button className="btn ghost mobile" onClick={() => setOpen(v => !v)} aria-label="Open menu">
            ☰
          </button>
        </nav>
      </div>

      {open && (
        <div className="container" style={{ padding:'0 0 12px 0' }}>
          <div className="card" style={{ padding:12 }}>
            <div style={{ display:'grid', gap:10 }}>
              <Link className="btn ghost" to="/">Home</Link>
              <Link className="btn ghost" to="/packages">Packages</Link>
              <Link className="btn ghost" to="/admin">Admin</Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .mobile{display:none}
        @media (max-width: 720px){
          .desktop{display:none !important}
          .mobile{display:inline-flex !important}
        }
      `}</style>
    </header>
  )
}
