
export default function SocialIcons(){
  const s = {
    instagram: 'https://www.instagram.com/millerstravelandtours?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    facebook: 'https://www.facebook.com/Millerstravels?mibextid=ZbWKwL'
  }
  const aStyle = {display:'inline-flex', alignItems:'center', gap:'.5rem', padding:'.3rem .5rem', border:'1px solid rgba(255,255,255,.1)', borderRadius:'.5rem'}
  return (
    <div style={{display:'flex', gap:'.5rem'}}>
      <a style={aStyle} href={s.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a>
      <a style={aStyle} href={s.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">Facebook</a>
    </div>
  )
}
