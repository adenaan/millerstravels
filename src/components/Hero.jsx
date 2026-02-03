
import { getSettings } from '../store/storage'

export default function Hero(){
  const s = getSettings()
  const bg = '/src/assets/brochure.jpg'
  return (
    <section className="hero" style={{backgroundImage:`url(${bg})`, backgroundSize:'cover', backgroundPosition:'center'}}>
      <div className="overlay" />
      <div className="container hero-content">
        <span className="badge">Trusted Local Agency in Cape Town</span>
        <h1>{s?.heroTitle || "Plan your Umrah & Holy Land journey with confidence"}</h1>
        <p>{s?.heroSubtitle || "Expertly curated packages, transparent pricing, and personal support from Miller's Travel & Tours."}</p>
        <div style={{marginTop:'1rem', display:'flex', gap:'.75rem'}}>
          <a href="#packages" className="btn btn-primary">Explore Packages</a>
          <a href="/contact" className="btn btn-outline">Contact Us</a>
        </div>
      </div>
    </section>
  )
}
