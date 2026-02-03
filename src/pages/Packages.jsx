
import { useState } from 'react'
import { getPackages } from '../store/storage'
import PackageCard from '../components/PackageCard'

export default function Packages(){
  const [q, setQ] = useState('')
  const packages = getPackages().filter(p => p.title.toLowerCase().includes(q.toLowerCase()))
  return (
    <main className="container" style={{padding:'2rem 0'}}>
      <h1>All Packages</h1>
      <div className="form-row" style={{maxWidth:480}}>
        <input placeholder="Search e.g. Umrah, Three Haram, June 2026" value={q} onChange={e=>setQ(e.target.value)} />
      </div>
      <div className="grid grid-sm-2 grid-md-3">
        {packages.map(p => <PackageCard key={p.id} pkg={p} />)}
      </div>
    </main>
  )
}
