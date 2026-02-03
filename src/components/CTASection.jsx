
export default function CTASection(){
  const wa = 'https://wa.me/27645232961'
  return (
    <section className="container my-16 text-center">
      <div className="card">
        <div className="card-body">
          <h2 className="font-display text-3xl md:text-4xl">Ready to Begin Your Journey?</h2>
          <p className="mt-2 text-gray-600">Speak to us about tailoring your Umrah or Holy Land package.</p>
          <div className="mt-4 flex justify-center gap-3">
            <a className="btn btn-primary" href={wa} target="_blank" rel="noreferrer">WhatsApp Us</a>
            <a className="btn btn-outline" href="mailto:abubaker@millerstravels.co.za">Email Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
