
import HeroBG from '../assets/hero.jpg'

export default function Hero(){
  return (
    <section className="container pt-10 md:pt-14">
      <div className="grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-6">
          <span className="inline-block bg-gold text-white px-3 py-1 rounded-full shadow">Trusted Local Agency in Cape Town</span>
          <h1 className="font-display mt-6 text-4xl md:text-5xl">Sacred Journeys, Unforgettable Experiences</h1>
          <p className="mt-3 text-lg text-gray-700">Premium Umrah packages with transparent pricing and personal support.</p>
          <div className="mt-6 flex gap-3">
            <a href="#packages" className="btn btn-primary">View Packages</a>
            <a href="/contact" className="btn btn-outline">Contact Us</a>
          </div>
        </div>
        <div className="md:col-span-6 relative">
          <div className="absolute -z-10 -top-6 -right-6 w-44 h-44 bg-gold/20 rounded-full blur-2xl"/>
          <div className="absolute -z-10 -bottom-8 -left-6 w-32 h-32 bg-purple/20 rounded-full blur-2xl"/>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-card">
            <img src={HeroBG} alt="Brochure visual" className="w-full h-auto"/>
          </div>
        </div>
      </div>
    </section>
  )
}
