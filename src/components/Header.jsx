
import { NavLink, Link } from 'react-router-dom'
import { getSettings } from '../store/storage'
import Logo from '../assets/logo.jpg'

export default function Header(){
  const s = getSettings()
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="container h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={Logo} alt="Miller's logo" className="w-9 h-9 rounded-full object-cover"/>
          <div className="leading-tight">
            <div className="font-extrabold text-gray-900">Miller's Travel & Tours</div>
            <div className="text-xs text-gray-500">{s?.tagline || 'Umrah • Hajj • Holy Land • Custom Travel'}</div>
          </div>
        </Link>
        <nav className="flex gap-1">
          <NavLink to="/" className={({isActive})=>`nav-link ${isActive?'active':''}`}>Home</NavLink>
          <NavLink to="/packages" className={({isActive})=>`nav-link ${isActive?'active':''}`}>Packages</NavLink>
          <NavLink to="/contact" className={({isActive})=>`nav-link ${isActive?'active':''}`}>Contact</NavLink>
          <NavLink to="/admin" className={({isActive})=>`nav-link ${isActive?'active':''}`}>Admin</NavLink>
        </nav>
      </div>
    </header>
  )
}
