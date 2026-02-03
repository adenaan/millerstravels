
import Hero from '../components/Hero'
import { getPackages } from '../store/storage'
import PackageCard from '../components/PackageCard'

export default function Home(){
  const packages = getPackages().slice(0,3)
  return (
    <main>
      <Hero />
      <section className="container" id="packages" style={{padding:'2rem 0'}}>
        <h2>Featured Packages</h2>
        <div className="grid grid-sm-2 grid-md-3" style={{marginTop:'1rem'}}>
          {packages.map(p => <PackageCard key={p.id} pkg={p} />)}
        </div>
      </section>
    </main>
  )
}
