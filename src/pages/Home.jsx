
import Hero from '../components/Hero'
import TrustRow from '../components/TrustRow'
import CTASection from '../components/CTASection'
import { getPackages } from '../store/storage'
import PackageCard from '../components/PackageCard'

export default function Home(){
  const packages = getPackages().slice(0,3)
  return (
    <main>
      <Hero />
      <TrustRow />
      <section id="packages" className="container py-10">
        <h2 className="font-display text-3xl">Featured Packages</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {packages.map(p => <PackageCard key={p.id} pkg={p} />)}
        </div>
      </section>
      <CTASection />
    </main>
  )
}
