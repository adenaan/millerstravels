
import SocialIcons from './SocialIcons'
import { getSettings } from '../store/storage'

export default function Footer(){
  const s = getSettings()
  return (
    <footer className="footer">
      <div className="container" style={{display:'grid', gap:'1rem'}}>
        <div style={{display:'grid', gap:'.25rem'}}>
          <strong>Contact</strong>
          <div>{s?.address || '200 Wetton Rd, Wetton, Cape Town, 7780'}</div>
          <div>Email: <a href={`mailto:${s?.email || 'abubaker@millerstravels.co.za'}`}>{s?.email || 'abubaker@millerstravels.co.za'}</a></div>
          <div>Phone: <a href={`tel:${s?.phone1 || '064 523 2961'}`}>{s?.phone1 || '064 523 2961'}</a> / <a href={`tel:${s?.phone2 || '076 799 2661'}`}>{s?.phone2 || '076 799 2661'}</a></div>
        </div>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <small style={{color:'var(--color-muted)'}}>© {new Date().getFullYear()} Miller's Travel & Tours. All rights reserved.</small>
          <SocialIcons />
        </div>
      </div>
    </footer>
  )
}
