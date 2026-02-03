
export default function SocialIcons(){
  const s = {
    instagram: 'https://www.instagram.com/millerstravelandtours?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    facebook: 'https://www.facebook.com/Millerstravels?mibextid=ZbWKwL'
  }
  return (
    <div className="flex gap-2">
      <a className="px-3 py-1 rounded-md border border-gray-200 hover:bg-gray-100" href={s.instagram} target="_blank" rel="noreferrer">Instagram</a>
      <a className="px-3 py-1 rounded-md border border-gray-200 hover:bg-gray-100" href={s.facebook} target="_blank" rel="noreferrer">Facebook</a>
    </div>
  )
}
