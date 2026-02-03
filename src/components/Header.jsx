
import { NavLink, Link } from 'react-router-dom'
import { getSettings } from '../store/storage'

export default function Header(){
  const settings = getSettings()
  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="logo" style={{display:'flex', alignItems:'center', gap:'.75rem'}}>
          <img src="/src/assets/logo.jpg" width="40" height="40" alt="Miller's logo" style={{borderRadius:'50%'}} />
          <div>
            <div style={{fontWeight:800}}>Miller's Travel & Tours</div>
            <div style={{fontSize:'.8rem', color:'var(--color-muted)'}}>{settings?.tagline || 'Umrah • Hajj • Holy Land • Custom Travel'}</div>
          </div>
        </Link>
        <nav style={{display:'flex', gap:'.25rem'}}>
          <NavLink to="/" className={({isActive})=> isActive? 'active': ''}>Home</NavLink>
          <NavLink to="/packages" className={({isActive})=> isActive? 'active': ''}>Packages</NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive? 'active': ''}>Contact</NavLink>
          <NavLink to="/admin" className={({isActive})=> isActive? 'active': ''}>Admin</NavLink>
        </nav>
      </div>
    </header>
  )
}
