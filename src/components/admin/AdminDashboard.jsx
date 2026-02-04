import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  clearAdminSession,
  getConfig,
  setConfig,
  getPackages,
  setPackages
} from '../../utils/storage'
import PackageEditor from './PackageEditor'
import SiteSettings from './SiteSettings'

export default function AdminDashboard(){
  const [tab, setTab] = useState('packages')
  const [cfg, setCfg] = useState(getConfig())
  const [pkgs, setPkgs] = useState(getPackages())

  useEffect(() => {
    setCfg(getConfig())
    setPkgs(getPackages())
  }, [])

  const stats = useMemo(() => ({
    total: pkgs.length,
    nextDeparture: pkgs
      .slice()
      .sort((a,b) => new Date(a.departureDate) - new Date(b.departureDate))[0]?.departureDate
  }), [pkgs])

  function logout(){
    clearAdminSession()
    window.location.href = '/admin'
  }

  function saveCfg(next){
    setCfg(next)
    setConfig(next)
  }

  function savePkgs(next){
    setPkgs(next)
    setPackages(next)
  }

  return (
    <div className="container" style={{ display:'grid', gap:16 }}>
      <div className="card" style={{ padding:18 }}>
        <div style={{ display:'flex', alignItems:'start', justifyContent:'space-between', gap:12, flexWrap:'wrap' }}>
          <div>
            <div className="h2">Admin dashboard</div>
            <div className="small">
              Total packages: <b>{stats.total}</b>
              {stats.nextDeparture ? <> • Next departure: <b>{new Date(stats.nextDeparture).toLocaleDateString('en-ZA')}</b></> : null}
            </div>
          </div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            <Link className="btn ghost" to="/">View site</Link>
            <button className="btn primary" onClick={logout}>Logout</button>
          </div>
        </div>

        <div style={{ display:'flex', gap:10, flexWrap:'wrap', marginTop:12 }}>
          <button className={tab==='packages' ? 'btn primary' : 'btn ghost'} onClick={() => setTab('packages')}>Packages</button>
          <button className={tab==='site' ? 'btn primary' : 'btn ghost'} onClick={() => setTab('site')}>Site content</button>
        </div>
      </div>

      {tab === 'packages' ? (
        <PackageEditor packages={pkgs} onChange={savePkgs} />
      ) : (
        <SiteSettings config={cfg} onChange={saveCfg} />
      )}

      <div className="card" style={{ padding:18 }}>
        <div style={{ fontWeight:900 }}>Developer note</div>
        <div className="small" style={{ marginTop:6, lineHeight:1.6 }}>
          Everything is stored in <b>localStorage</b> for now. Later you can swap the storage layer for a Node + MySQL backend
          by replacing the functions in <code>src/utils/storage.js</code>.
        </div>
      </div>
    </div>
  )
}
