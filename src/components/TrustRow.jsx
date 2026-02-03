
export default function TrustRow(){
  const items = [
    'IATA Affiliated Partners',
    'Transparent Pricing',
    'Local Support in Cape Town'
  ]
  return (
    <div className="container py-6 grid md:grid-cols-3 gap-3">
      {items.map((t,i)=> (
        <div key={i} className="flex items-center gap-2 bg-white rounded-xl border border-gray-100 px-4 py-3 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-gold" />
          <div className="text-sm font-semibold">{t}</div>
        </div>
      ))}
    </div>
  )
}
