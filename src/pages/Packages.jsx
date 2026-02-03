
import { useState } from 'react'
import { getPackages } from '../store/storage'
import PackageCard from '../components/PackageCard'

export default function Packages(){
  const [q, setQ] = useState('')
  const packages = getPackages().filter(p => p.title.toLowerCase().includes(q.toLowerCase()))
  return (
    <main className="container py-10">
      <h1 className="font-display text-4xl">All Packages</h1>
      <div className="mt-4 max-w-md">
        <input className="w-full border border-gray-200 rounded-lg px-3 py-2" placeholder="Search e.g. Umrah, Three Haram, June 2026" value={q} onChange={e=>setQ(e.target.value)} />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {packages.map(p => <PackageCard key={p.id} pkg={p} />)}
      </div>
    </main>
  )
}
