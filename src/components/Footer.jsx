
import SocialIcons from './SocialIcons'
import { getSettings } from '../store/storage'

export default function Footer(){
  const s = getSettings()
  return (
    <footer className="mt-16 bg-white border-t border-gray-100">
      <div className="container py-8 grid gap-4">
        <div>
          <strong className="text-gray-900">Contact</strong>
          <div className="text-sm text-gray-600 mt-1">{s?.address || '200 Wetton Rd, Wetton, Cape Town, 7780'}</div>
          <div className="text-sm text-gray-600">Email: <a className="underline" href={`mailto:${s?.email || 'abubaker@millerstravels.co.za'}`}>{s?.email || 'abubaker@millerstravels.co.za'}</a></div>
          <div className="text-sm text-gray-600">Phone: <a className="underline" href={`tel:${s?.phone1 || '064 523 2961'}`}>{s?.phone1 || '064 523 2961'}</a> / <a className="underline" href={`tel:${s?.phone2 || '076 799 2661'}`}>{s?.phone2 || '076 799 2661'}</a></div>
        </div>
        <div className="flex items-center justify-between">
          <small className="text-gray-500">© {new Date().getFullYear()} Miller's Travel & Tours.</small>
          <SocialIcons />
        </div>
      </div>
    </footer>
  )
}
