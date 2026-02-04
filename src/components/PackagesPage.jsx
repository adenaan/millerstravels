import React, { useEffect, useMemo, useState } from 'react'
import { getPackages } from '../utils/storage'
import PackageCard from './PackageCard'

export default function PackagesPage(){
  const [pkgs, setPkgs] = useState(getPackages())
  const [q, setQ] = useState('')
  const [type, setType] = useState('All')

  useEffect(() => setPkgs(getPackages()), [])

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase()
    return pkgs
      .filter(p => type === 'All' ? true : p.type === type)
      .filter(p => !qq ? true : (p.title || '').toLowerCase().includes(qq))
      .sort((a,b) => new Date(a.departureDate) - new Date(b.departureDate))
  }, [pkgs, q, type])

  return (
    <div className="container" style={{ display:'grid', gap:16 }}>
      <div className="card" style={{ padding:18 }}>
        <div className="grid cols-2" style={{ alignItems:'end' }}>
          <div>
            <div className="h2">Packages</div>
            <div className="small">Search and compare — prices shown per person.</div>
          </div>
          <div className="grid" style={{ gridTemplateColumns:'1fr 160px', gap:10 }}>
            <div>
              <div className="label">Search</div>
              <input className="input" placeholder="e.g. Muharram, March, Umrah…" value={q} onChange={e=>setQ(e.target.value)} />
            </div>
            <div>
              <div className="label">Type</div>
              <select className="input" value={type} onChange={e=>setType(e.target.value)}>
                <option>All</option>
                <option>Umrah</option>
                <option>Tour</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid cols-3">
        {filtered.map(p => <PackageCard key={p.id} pkg={p} />)}
      </div>

      {!filtered.length && (
        <div className="card" style={{ padding:18 }}>
          <div style={{ fontWeight:900 }}>No matches</div>
          <div className="small">Try a different search or type filter.</div>
        </div>
      )}
    </div>
  )
}
