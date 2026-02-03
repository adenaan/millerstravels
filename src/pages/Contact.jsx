
import { getSettings } from '../store/storage'

export default function Contact(){
  const s = getSettings()
  return (
    <main className="container py-10">
      <h1 className="font-display text-4xl">Contact Us</h1>
      <div className="card mt-4">
        <div className="card-body space-y-2">
          <p>We'd love to help you plan your journey.</p>
          <p><strong>Address:</strong> {s?.address || '200 Wetton Rd, Wetton, Cape Town, 7780'}</p>
          <p><strong>Email:</strong> <a className="underline" href={`mailto:${s?.email || 'abubaker@millerstravels.co.za'}`}>{s?.email || 'abubaker@millerstravels.co.za'}</a></p>
          <p><strong>Phone:</strong> <a className="underline" href={`tel:${s?.phone1 || '064 523 2961'}`}>{s?.phone1 || '064 523 2961'}</a> / <a className="underline" href={`tel:${s?.phone2 || '076 799 2661'}`}>{s?.phone2 || '076 799 2661'}</a></p>
        </div>
      </div>
    </main>
  )
}
